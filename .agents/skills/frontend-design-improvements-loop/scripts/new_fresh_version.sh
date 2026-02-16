#!/usr/bin/env bash
set -euo pipefail

usage() {
  cat <<'EOF'
Usage: new_fresh_version.sh <new-version-dir> [options]

Options:
  --topology <fresh|vertical>             Experiment topology label (default: fresh)
  --skill-source <global|file>            Seed frontend skill from global default or explicit file path (default: global)
  --global-skill-path <path>              Path to global SKILL.md when --skill-source global
  --skill-file <path>                     Explicit SKILL.md path when --skill-source file

Examples:
  new_fresh_version.sh experiments/version-10
  new_fresh_version.sh experiments/version-10a --topology vertical
  new_fresh_version.sh experiments/version-10 --skill-source file --skill-file /tmp/SKILL.md
EOF
}

if [[ $# -lt 1 ]]; then
  usage
  exit 1
fi

NEW_DIR="$1"
shift

TOPOLOGY="fresh"
SKILL_SOURCE="global"
GLOBAL_SKILL_PATH="/home/waishnav/.agents/skills/frontend-design/SKILL.md"
SKILL_FILE=""

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
    --skill-file)
      if [[ $# -lt 2 ]]; then
        echo "Missing value for --skill-file"
        exit 1
      fi
      SKILL_FILE="$2"
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

if [[ "$TOPOLOGY" != "fresh" && "$TOPOLOGY" != "vertical" ]]; then
  echo "--topology must be fresh or vertical"
  exit 1
fi

if [[ "$SKILL_SOURCE" != "global" && "$SKILL_SOURCE" != "file" ]]; then
  echo "--skill-source must be global or file"
  exit 1
fi

if [[ "$SKILL_SOURCE" == "file" && -z "$SKILL_FILE" ]]; then
  echo "--skill-file is required when --skill-source file"
  exit 1
fi

if [[ -e "$NEW_DIR" ]]; then
  echo "New version already exists: $NEW_DIR"
  exit 1
fi

mkdir -p "$NEW_DIR/.agents/skills/frontend-design"
mkdir -p "$NEW_DIR/screenshots"
mkdir -p "$NEW_DIR/t4-canvas"
: > "$NEW_DIR/t4-canvas/.gitkeep"

if [[ "$SKILL_SOURCE" == "global" ]]; then
  if [[ ! -f "$GLOBAL_SKILL_PATH" ]]; then
    echo "Missing global skill file: $GLOBAL_SKILL_PATH"
    exit 1
  fi
  cp "$GLOBAL_SKILL_PATH" "$NEW_DIR/.agents/skills/frontend-design/SKILL.md"
  SKILL_BASELINE_LABEL="global-frontend-skill"
else
  if [[ ! -f "$SKILL_FILE" ]]; then
    echo "Missing skill file: $SKILL_FILE"
    exit 1
  fi
  cp "$SKILL_FILE" "$NEW_DIR/.agents/skills/frontend-design/SKILL.md"
  SKILL_BASELINE_LABEL="custom-skill-file"
fi

cat > "$NEW_DIR/README.md" <<'EOF'
# Version [TODO]

## Experiment Topology

[TODO: fresh or vertical]

## Isolation Mode

isolated-fresh-app

## Skill Baseline

[TODO: global-frontend-skill or custom-skill-file]

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

python3 - "$NEW_DIR/README.md" "$TOPOLOGY" "$SKILL_BASELINE_LABEL" <<'PY'
import pathlib
import sys

path = pathlib.Path(sys.argv[1])
topology = sys.argv[2]
skill_baseline = sys.argv[3]
text = path.read_text(encoding="utf-8")
text = text.replace("[TODO: fresh or vertical]", topology)
text = text.replace("[TODO: global-frontend-skill or custom-skill-file]", skill_baseline)
path.write_text(text, encoding="utf-8")
PY

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

- What improved vs previous version (if applicable):
- What regressed vs previous version (if applicable):
- Keep / Drop decision:
- Next mutation axis:
EOF

echo "Created fresh isolated experiment at $NEW_DIR"
echo "App mode: isolated fresh t4-canvas"
echo "Skill mode: $SKILL_BASELINE_LABEL"
echo "Next: edit $NEW_DIR/.agents/skills/frontend-design/SKILL.md, $NEW_DIR/README.md, and $NEW_DIR/CRITQUES.md"
