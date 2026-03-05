#!/usr/bin/env bash
set -euo pipefail

# ─────────────────────────────────────────────
# prepare.sh
# Builds all active experiment versions and
# symlinks their screenshots into public/.
# Run from: showcase/
# ─────────────────────────────────────────────

REPO_ROOT="$(cd "$(dirname "$0")/../.." && pwd)"
SHOWCASE="$REPO_ROOT/showcase"
PUBLIC="$SHOWCASE/public"
EXPERIMENTS="$REPO_ROOT/experiments"

# Active versions (skip _archived)
VERSIONS=($(ls -d "$EXPERIMENTS"/version-* 2>/dev/null | sort -V))

echo "══════════════════════════════════════"
echo "  Showcase Prepare Script"
echo "  Found ${#VERSIONS[@]} active versions"
echo "══════════════════════════════════════"

# ── 1. Symlink screenshots ──
echo ""
echo "── Symlinking screenshots ──"
mkdir -p "$PUBLIC/screenshots"

for vdir in "${VERSIONS[@]}"; do
  vname="$(basename "$vdir")"
  link="$PUBLIC/screenshots/$vname"
  target="$vdir/screenshots"

  if [ ! -d "$target" ]; then
    echo "  SKIP $vname (no screenshots/)"
    continue
  fi

  # remove stale link or directory
  rm -rf "$link"
  ln -sf "$target" "$link"
  echo "  OK   $vname -> $(realpath --relative-to="$PUBLIC/screenshots" "$target")"
done

# ── 2. Build experiment apps ──
echo ""
echo "── Building experiment embeds ──"
mkdir -p "$PUBLIC/embeds"

for vdir in "${VERSIONS[@]}"; do
  vname="$(basename "$vdir")"
  app="$vdir/t4-canvas"
  link="$PUBLIC/embeds/$vname"

  if [ ! -f "$app/package.json" ]; then
    echo "  SKIP $vname (no t4-canvas/package.json)"
    continue
  fi

  echo "  BUILD $vname ..."
  (
    cd "$app"
    bun install --frozen-lockfile 2>/dev/null || bun install
    # build with relative base so assets resolve inside iframe at /embeds/<version>/
    npx vite build --base ./ 2>&1 | tail -3
  )

  dist="$app/dist"
  if [ ! -d "$dist" ]; then
    echo "  FAIL  $vname (no dist/ after build)"
    continue
  fi

  # symlink dist into public/embeds/
  rm -rf "$link"
  ln -sf "$dist" "$link"
  echo "  OK   $vname embed linked"
done

echo ""
echo "══════════════════════════════════════"
echo "  Done. Run 'bun run dev' to preview."
echo "══════════════════════════════════════"
