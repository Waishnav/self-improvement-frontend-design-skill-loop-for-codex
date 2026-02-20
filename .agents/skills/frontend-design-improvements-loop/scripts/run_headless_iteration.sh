#!/usr/bin/env bash
set -euo pipefail

if [[ $# -lt 2 || $# -gt 6 ]]; then
  echo "Usage: $0 <version-dir> <repo-root-prompt-md> [run-label] [max-attempts] [retry-delay-sec] [exec-mode]"
  echo "Example: $0 experiments/version-3 /repo/prompt.md run-01 4 15 yolo"
  echo "exec-mode: full-auto (default) | yolo"
  exit 1
fi

VERSION_DIR="$1"
PROMPT_FILE="$2"
RUN_LABEL="${3:-run-$(date +%Y%m%d-%H%M%S)}"
MAX_ATTEMPTS="${4:-4}"
RETRY_DELAY_SEC="${5:-15}"
EXEC_MODE="${6:-full-auto}"

if [[ ! -d "$VERSION_DIR" ]]; then
  echo "Version directory not found: $VERSION_DIR"
  exit 1
fi

if [[ ! -f "$PROMPT_FILE" ]]; then
  echo "Prompt file not found: $PROMPT_FILE"
  exit 1
fi

if [[ "$(basename "$PROMPT_FILE")" != "prompt.md" ]]; then
  echo "Expected canonical prompt file named prompt.md, got: $PROMPT_FILE"
  exit 1
fi

if [[ ! -f "$VERSION_DIR/.agents/skills/frontend-design/SKILL.md" ]]; then
  echo "Missing skill file in version: $VERSION_DIR/.agents/skills/frontend-design/SKILL.md"
  exit 1
fi

if ! [[ "$MAX_ATTEMPTS" =~ ^[0-9]+$ ]] || [[ "$MAX_ATTEMPTS" -lt 1 ]]; then
  echo "max-attempts must be a positive integer, got: $MAX_ATTEMPTS"
  exit 1
fi

if ! [[ "$RETRY_DELAY_SEC" =~ ^[0-9]+$ ]] || [[ "$RETRY_DELAY_SEC" -lt 1 ]]; then
  echo "retry-delay-sec must be a positive integer, got: $RETRY_DELAY_SEC"
  exit 1
fi

MODE_FLAG=(--full-auto)
if [[ "$EXEC_MODE" == "yolo" ]]; then
  MODE_FLAG=(--dangerously-bypass-approvals-and-sandbox)
elif [[ "$EXEC_MODE" != "full-auto" ]]; then
  echo "exec-mode must be full-auto or yolo, got: $EXEC_MODE"
  exit 1
fi

ABS_VERSION_DIR="$(cd "$VERSION_DIR" && pwd)"
ABS_PROMPT_FILE="$(cd "$(dirname "$PROMPT_FILE")" && pwd)/$(basename "$PROMPT_FILE")"
OUT_DIR="$ABS_VERSION_DIR/artifacts/$RUN_LABEL"
mkdir -p "$OUT_DIR"
THREAD_ID_FILE="$OUT_DIR/thread_id.txt"
STATUS_FILE="$OUT_DIR/status.txt"

echo "Running codex exec"
echo "  cwd:    $ABS_VERSION_DIR"
echo "  prompt: $ABS_PROMPT_FILE"
echo "  out:    $OUT_DIR"
echo "  retries: $MAX_ATTEMPTS (delay ${RETRY_DELAY_SEC}s)"
echo "  mode:   $EXEC_MODE"

extract_thread_id() {
  local events_file="$1"
  python3 - "$events_file" <<'PY'
import json
import sys

events_path = sys.argv[1]
thread_id = ""
with open(events_path, "r", encoding="utf-8", errors="ignore") as fh:
    for line in fh:
        line = line.strip()
        if not line:
            continue
        try:
            obj = json.loads(line)
        except json.JSONDecodeError:
            continue
        if obj.get("type") == "thread.started":
            tid = obj.get("thread_id")
            if isinstance(tid, str) and tid:
                thread_id = tid
                break
if thread_id:
    print(thread_id)
PY
}

extract_final_message() {
  local events_file="$1"
  local final_file="$2"
  python3 - "$events_file" "$final_file" <<'PY'
import json
import sys

events_path, out_path = sys.argv[1], sys.argv[2]
last_text = ""
with open(events_path, "r", encoding="utf-8", errors="ignore") as fh:
    for line in fh:
        line = line.strip()
        if not line:
            continue
        try:
            obj = json.loads(line)
        except json.JSONDecodeError:
            continue
        if obj.get("type") == "item.completed":
            item = obj.get("item", {})
            if isinstance(item, dict) and item.get("type") == "agent_message":
                text = item.get("text")
                if isinstance(text, str) and text.strip():
                    last_text = text
if last_text:
    with open(out_path, "w", encoding="utf-8") as out:
        out.write(last_text)
PY
}

attempt=1
success=0

while [[ "$attempt" -le "$MAX_ATTEMPTS" ]]; do
  ATTEMPT_EVENTS="$OUT_DIR/attempt-${attempt}-events.jsonl"
  ATTEMPT_STDERR="$OUT_DIR/attempt-${attempt}-stderr.log"
  ATTEMPT_FINAL="$OUT_DIR/attempt-${attempt}-final.md"

  echo "attempt=${attempt} start=$(date -Iseconds)" | tee -a "$STATUS_FILE"
  set +e
  if [[ "$attempt" -eq 1 || ! -s "$THREAD_ID_FILE" ]]; then
    codex exec \
      -C "$ABS_VERSION_DIR" \
      "${MODE_FLAG[@]}" \
      --json \
      --color never \
      - < "$ABS_PROMPT_FILE" \
      > "$ATTEMPT_EVENTS" 2> "$ATTEMPT_STDERR"
    RC=$?
  else
    THREAD_ID="$(cat "$THREAD_ID_FILE")"
    RESUME_PROMPT_FILE="$OUT_DIR/attempt-${attempt}-resume-prompt.md"
    cat > "$RESUME_PROMPT_FILE" <<EOF
Continue the same task in this same repository state.
Do not restart from scratch.
Finish remaining work and provide the final response.
EOF
    (
      cd "$ABS_VERSION_DIR"
      codex exec resume \
        "$THREAD_ID" \
        "${MODE_FLAG[@]}" \
        --json \
        - < "$RESUME_PROMPT_FILE" \
        > "$ATTEMPT_EVENTS" 2> "$ATTEMPT_STDERR"
    )
    RC=$?
  fi
  set -e

  if [[ ! -s "$THREAD_ID_FILE" && -s "$ATTEMPT_EVENTS" ]]; then
    THREAD_ID="$(extract_thread_id "$ATTEMPT_EVENTS" || true)"
    if [[ -n "${THREAD_ID:-}" ]]; then
      printf '%s\n' "$THREAD_ID" > "$THREAD_ID_FILE"
      echo "thread_id=$THREAD_ID" | tee -a "$STATUS_FILE"
    fi
  fi

  if [[ -s "$ATTEMPT_EVENTS" ]]; then
    extract_final_message "$ATTEMPT_EVENTS" "$ATTEMPT_FINAL" || true
  fi

  echo "attempt=${attempt} rc=${RC} end=$(date -Iseconds)" | tee -a "$STATUS_FILE"

  if [[ "$RC" -eq 0 ]]; then
    success=1
    cp "$ATTEMPT_EVENTS" "$OUT_DIR/events.jsonl"
    cp "$ATTEMPT_STDERR" "$OUT_DIR/stderr.log"
    if [[ -s "$ATTEMPT_FINAL" ]]; then
      cp "$ATTEMPT_FINAL" "$OUT_DIR/final.md"
    fi
    break
  fi

  if [[ "$attempt" -lt "$MAX_ATTEMPTS" ]]; then
    echo "attempt=${attempt} failed; retrying after ${RETRY_DELAY_SEC}s" | tee -a "$STATUS_FILE"
    sleep "$RETRY_DELAY_SEC"
  fi
  attempt=$((attempt + 1))
done

if [[ "$success" -ne 1 ]]; then
  echo "FAILED after ${MAX_ATTEMPTS} attempts. See $STATUS_FILE" >&2
  exit 1
fi

echo
echo "Completed. Artifacts:"
echo "  $OUT_DIR/events.jsonl"
echo "  $OUT_DIR/stderr.log"
echo "  $OUT_DIR/final.md"
echo "  $OUT_DIR/status.txt"
echo
echo "If interrupted, resume with:"
echo "  codex exec resume --last - <<'EOF'"
echo "  Continue from latest checkpoint in $ABS_VERSION_DIR and finish pending tasks."
echo "  EOF"
