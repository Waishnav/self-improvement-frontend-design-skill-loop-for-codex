#!/usr/bin/env bash
set -euo pipefail

usage() {
  cat <<'USAGE'
Usage: capture_screenshots.sh <version-dir> [options]

Capture full-page screenshots for routes /1.. /5 and save:
  screenshots/<route>/desktop.png
  screenshots/<route>/tablet.png
  screenshots/<route>/mobile.png

Options:
  --base-url <url>       Base URL for the running app (default: http://127.0.0.1:4000)
  --browser <type>       Browser type for Playwright screenshot command
                         One of: chromium|firefox|webkit (default: chromium)
  --desktop-size <w,h>   Desktop viewport size (default: 1440,900)
  --tablet-size <w,h>    Tablet viewport size (default: 834,1112)
  --mobile-size <w,h>    Mobile viewport size (default: 390,844)
  --with-laptop-alias    Also write screenshots/<route>/laptop.png from desktop capture
  --timeout <ms>         Screenshot action timeout in milliseconds (default: 60000)
  --wait-ms <ms>         Additional wait before screenshot in milliseconds (default: 3000)

Examples:
  capture_screenshots.sh experiments/version-24
  capture_screenshots.sh experiments/version-24 --base-url http://localhost:4000
  capture_screenshots.sh experiments/version-24 --with-laptop-alias
  capture_screenshots.sh experiments/version-24 --desktop-size 1920,1080 --tablet-size 1024,1366 --mobile-size 390,844
USAGE
}

if [[ $# -eq 0 ]]; then
  usage
  exit 1
fi

if [[ "$1" == "-h" || "$1" == "--help" ]]; then
  usage
  exit 0
fi

VERSION_DIR="$1"
shift

BASE_URL="http://127.0.0.1:4000"
BROWSER="chromium"
DESKTOP_SIZE="1440,900"
TABLET_SIZE="834,1112"
MOBILE_SIZE="390,844"
WITH_LAPTOP_ALIAS=0
TIMEOUT_MS="60000"
WAIT_MS="3000"

while [[ $# -gt 0 ]]; do
  case "$1" in
    --base-url)
      [[ $# -lt 2 ]] && { echo "Missing value for --base-url"; exit 1; }
      BASE_URL="$2"
      shift 2
      ;;
    --browser)
      [[ $# -lt 2 ]] && { echo "Missing value for --browser"; exit 1; }
      BROWSER="$2"
      shift 2
      ;;
    --desktop-size)
      [[ $# -lt 2 ]] && { echo "Missing value for --desktop-size"; exit 1; }
      DESKTOP_SIZE="$2"
      shift 2
      ;;
    --tablet-size)
      [[ $# -lt 2 ]] && { echo "Missing value for --tablet-size"; exit 1; }
      TABLET_SIZE="$2"
      shift 2
      ;;
    --mobile-size)
      [[ $# -lt 2 ]] && { echo "Missing value for --mobile-size"; exit 1; }
      MOBILE_SIZE="$2"
      shift 2
      ;;
    --with-laptop-alias)
      WITH_LAPTOP_ALIAS=1
      shift
      ;;
    --timeout)
      [[ $# -lt 2 ]] && { echo "Missing value for --timeout"; exit 1; }
      TIMEOUT_MS="$2"
      shift 2
      ;;
    --wait-ms)
      [[ $# -lt 2 ]] && { echo "Missing value for --wait-ms"; exit 1; }
      WAIT_MS="$2"
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

if [[ ! -d "$VERSION_DIR" ]]; then
  echo "Version directory not found: $VERSION_DIR"
  exit 1
fi

SCREENSHOT_DIR="$VERSION_DIR/screenshots"
mkdir -p "$SCREENSHOT_DIR"
DEVICE_NAMES=("desktop" "tablet" "mobile")
VIEWPORT_SIZES=("$DESKTOP_SIZE" "$TABLET_SIZE" "$MOBILE_SIZE")

if ! curl -fsS --max-time 5 "${BASE_URL%/}/" >/dev/null; then
  echo "App is not reachable at ${BASE_URL%/}/"
  echo "Start the app first (for example: cd $VERSION_DIR/t4-canvas && bun run dev --host 127.0.0.1)"
  exit 1
fi

for ROUTE in 1 2 3 4 5; do
  URL="${BASE_URL%/}/$ROUTE"
  ROUTE_DIR="$SCREENSHOT_DIR/$ROUTE"
  mkdir -p "$ROUTE_DIR"

  for i in "${!DEVICE_NAMES[@]}"; do
    DEVICE_NAME="${DEVICE_NAMES[$i]}"
    VIEWPORT_SIZE="${VIEWPORT_SIZES[$i]}"
    OUT_FILE="$ROUTE_DIR/${DEVICE_NAME}.png"

    echo "Capturing $URL ($DEVICE_NAME: viewport $VIEWPORT_SIZE) -> $OUT_FILE"
    npx playwright screenshot \
      --browser "$BROWSER" \
      --viewport-size "$VIEWPORT_SIZE" \
      --full-page \
      --timeout "$TIMEOUT_MS" \
      --wait-for-timeout "$WAIT_MS" \
      "$URL" \
      "$OUT_FILE"
  done

  if [[ "$WITH_LAPTOP_ALIAS" -eq 1 ]]; then
    cp "$ROUTE_DIR/desktop.png" "$ROUTE_DIR/laptop.png"
  fi
done

echo "Saved route screenshots to $SCREENSHOT_DIR/<route>/{desktop,tablet,mobile}.png"
if [[ "$WITH_LAPTOP_ALIAS" -eq 1 ]]; then
  echo "Also wrote compatibility alias: $SCREENSHOT_DIR/<route>/laptop.png"
fi
