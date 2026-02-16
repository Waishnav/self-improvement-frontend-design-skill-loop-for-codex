#!/usr/bin/env bash
set -euo pipefail

usage() {
  cat <<'EOF'
Usage: new_version_from_previous.sh <previous-version-dir> <new-version-dir> [options]

Options:
  --topology <vertical>             Set experiment topology label (default: vertical)
  --copy-app                        Copy previous t4-canvas app (disabled by default)
  --skill-source <previous|global>  Seed frontend skill from previous version or global skill (default: previous)
  --global-skill-path <path>        Path to global SKILL.md when --skill-source global

Examples:
  new_version_from_previous.sh experiments/version-2 experiments/version-3
  new_version_from_previous.sh experiments/version-2 experiments/version-3 --topology vertical
  new_version_from_previous.sh experiments/version-2 experiments/version-3 --copy-app
  new_version_from_previous.sh experiments/version-9 experiments/version-10 --skill-source global
EOF
}

if [[ $# -lt 2 ]]; then
  usage
  exit 1
fi

PREV_DIR="$1"
NEW_DIR="$2"
shift 2

TOPOLOGY="vertical"
COPY_APP=0
SKILL_SOURCE="previous"
GLOBAL_SKILL_PATH="/home/waishnav/.agents/skills/frontend-design/SKILL.md"

while [[ $# -gt 0 ]]; do
  case "$1" in
    --topology)
      if [[ $# -lt 2 ]]; then
        echo "Missing value for --topology"
        exit 1
      fi
      TOPOLOGY="$2"
      shift 2
      ;;
    --copy-app)
      COPY_APP=1
      shift
      ;;
    --skill-source)
      if [[ $# -lt 2 ]]; then
        echo "Missing value for --skill-source"
        exit 1
      fi
      SKILL_SOURCE="$2"
      shift 2
      ;;
    --global-skill-path)
      if [[ $# -lt 2 ]]; then
        echo "Missing value for --global-skill-path"
        exit 1
      fi
      GLOBAL_SKILL_PATH="$2"
      shift 2
      ;;
    -h|--help)
      usage
      exit 0
      ;;
    *)
      echo "Unknown option: $1"
      usage
      exit 1
      ;;
  esac
done

if [[ "$TOPOLOGY" != "vertical" ]]; then
  echo "--topology must be vertical for the sequential loop"
  exit 1
fi

if [[ "$SKILL_SOURCE" != "previous" && "$SKILL_SOURCE" != "global" ]]; then
  echo "--skill-source must be previous or global"
  exit 1
fi

if [[ ! -d "$PREV_DIR" ]]; then
  echo "Previous version not found: $PREV_DIR"
  exit 1
fi

if [[ -e "$NEW_DIR" ]]; then
  echo "New version already exists: $NEW_DIR"
  exit 1
fi

mkdir -p "$NEW_DIR/.agents/skills/frontend-design"
mkdir -p "$NEW_DIR/screenshots"

if [[ "$SKILL_SOURCE" == "previous" ]]; then
  if [[ ! -f "$PREV_DIR/.agents/skills/frontend-design/SKILL.md" ]]; then
    echo "Missing previous skill file: $PREV_DIR/.agents/skills/frontend-design/SKILL.md"
    exit 1
  fi
  cp "$PREV_DIR/.agents/skills/frontend-design/SKILL.md" "$NEW_DIR/.agents/skills/frontend-design/SKILL.md"
else
  if [[ ! -f "$GLOBAL_SKILL_PATH" ]]; then
    echo "Missing global skill file: $GLOBAL_SKILL_PATH"
    exit 1
  fi
  cp "$GLOBAL_SKILL_PATH" "$NEW_DIR/.agents/skills/frontend-design/SKILL.md"
fi

mkdir -p "$NEW_DIR/t4-canvas"

if [[ "$COPY_APP" -eq 1 && -d "$PREV_DIR/t4-canvas" ]]; then
  if command -v rsync >/dev/null 2>&1; then
    rsync -a \
      --exclude node_modules \
      --exclude dist \
      --exclude .DS_Store \
      "$PREV_DIR/t4-canvas/" "$NEW_DIR/t4-canvas/"
  else
    cp -a "$PREV_DIR/t4-canvas/." "$NEW_DIR/t4-canvas/"
    rm -rf "$NEW_DIR/t4-canvas/node_modules" "$NEW_DIR/t4-canvas/dist"
    find "$NEW_DIR/t4-canvas" -name ".DS_Store" -delete
  fi
else
  : > "$NEW_DIR/t4-canvas/.gitkeep"
fi

cat > "$NEW_DIR/README.md" <<'EOF'
# Version [TODO]

## Experiment Topology

[TODO: vertical]

## Isolation Mode

[TODO: isolated-fresh-app or copied-app]

## Skill Baseline

[TODO: previous-version-skill or global-frontend-skill]

## Hypothesis

[TODO: One mutation hypothesis only]

## Mutation Axis

[TODO: Reference from references/mutation_axes.md]

## Exact Skill Change

[TODO: Describe exactly what was changed in SKILL.md]

## Expected Visual Delta

[TODO]

## Measured Result

[TODO after run]

## Keep / Drop

[TODO]
EOF

cat > "$NEW_DIR/CRITQUES.md" <<'EOF'
# CRITQUES - Version [TODO]

## Expected Reference Sets

- `research/targetted-designs/`
- `research/theo-screenshots-2k-clean/opus45_with_skill/`
- `research/theo-screenshots-2k-clean/opus_iterations/`

## Route-by-Route Critique

### /1

- Strengths:
- Gaps vs expected:
- Action items:

### /2

- Strengths:
- Gaps vs expected:
- Action items:

### /3

- Strengths:
- Gaps vs expected:
- Action items:

### /4

- Strengths:
- Gaps vs expected:
- Action items:

### /5

- Strengths:
- Gaps vs expected:
- Action items:

## Cross-Version Notes

- What improved vs previous version:
- What regressed vs previous version:
- Keep / Drop decision:
- Next mutation axis:
EOF

python3 - "$NEW_DIR/README.md" "$TOPOLOGY" "$COPY_APP" <<'PY'
import pathlib
import sys

path = pathlib.Path(sys.argv[1])
topology = sys.argv[2]
copy_app = sys.argv[3] == "1"
text = path.read_text(encoding="utf-8")
text = text.replace("[TODO: vertical]", topology)
text = text.replace(
    "[TODO: isolated-fresh-app or copied-app]",
    "copied-app" if copy_app else "isolated-fresh-app",
)
path.write_text(text, encoding="utf-8")
PY

python3 - "$NEW_DIR/README.md" "$SKILL_SOURCE" <<'PY'
import pathlib
import sys

path = pathlib.Path(sys.argv[1])
skill_source = sys.argv[2]
text = path.read_text(encoding="utf-8")
text = text.replace(
    "[TODO: previous-version-skill or global-frontend-skill]",
    "global-frontend-skill" if skill_source == "global" else "previous-version-skill",
)
path.write_text(text, encoding="utf-8")
PY

echo "Created $NEW_DIR from $PREV_DIR"
if [[ "$COPY_APP" -eq 1 ]]; then
  echo "App mode: copied previous t4-canvas (legacy mode)"
else
  echo "App mode: isolated fresh t4-canvas (default)"
fi
if [[ "$SKILL_SOURCE" == "global" ]]; then
  echo "Skill mode: seeded from global frontend skill"
else
  echo "Skill mode: seeded from previous version skill"
fi
echo "Next: edit $NEW_DIR/.agents/skills/frontend-design/SKILL.md, $NEW_DIR/README.md, and $NEW_DIR/CRITQUES.md"
