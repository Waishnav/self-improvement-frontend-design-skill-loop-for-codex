#!/usr/bin/env bash
set -euo pipefail

usage() {
  cat <<'EOF'
Usage: new_parallel_from_previous.sh <previous-version-dir> <new-version-dir> [<new-version-dir> ...] [options]

Options:
  --copy-app   Copy previous t4-canvas app (disabled by default)

Examples:
  new_parallel_from_previous.sh experiments/version-2 experiments/version-3a experiments/version-3b experiments/version-3c
  new_parallel_from_previous.sh experiments/version-2 experiments/version-3a experiments/version-3b --copy-app
EOF
}

if [[ $# -lt 3 ]]; then
  usage
  exit 1
fi

PREV_DIR="$1"
shift

COPY_APP=0
NEW_DIRS=()

while [[ $# -gt 0 ]]; do
  case "$1" in
    --copy-app)
      COPY_APP=1
      shift
      ;;
    -h|--help)
      usage
      exit 0
      ;;
    *)
      NEW_DIRS+=("$1")
      shift
      ;;
  esac
done

if [[ "${#NEW_DIRS[@]}" -lt 2 ]]; then
  echo "Provide at least two new version directories for horizontal experiments."
  exit 1
fi

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
BASE_SCRIPT="$SCRIPT_DIR/new_version_from_previous.sh"

for new_dir in "${NEW_DIRS[@]}"; do
  if [[ "$COPY_APP" -eq 1 ]]; then
    "$BASE_SCRIPT" "$PREV_DIR" "$new_dir" --topology horizontal --copy-app
  else
    "$BASE_SCRIPT" "$PREV_DIR" "$new_dir" --topology horizontal
  fi
done

echo "Created ${#NEW_DIRS[@]} horizontal isolated experiment versions from $PREV_DIR"
