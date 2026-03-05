Implemented end-to-end in `t4-canvas` using the local `frontend-design` skill.

### What’s done
- Initialized `Bun + Vite + React + TypeScript + Tailwind`.
- Added routing for:
  - `/` = card-grid concept navigator
  - `/1`, `/2`, `/3`, `/4`, `/5` = five distinct marketing homepage designs
- Kept route strings out of headers (no `/1`, `/2`, etc shown in header nav text).
- Set dev server to port `4000` (`strictPort: true`).

### Key files
- [App.tsx](/home/waishnav/personal/tools/improved-frontend-skills-for-gpt/experiments/version-24/t4-canvas/src/App.tsx)
- [index.css](/home/waishnav/personal/tools/improved-frontend-skills-for-gpt/experiments/version-24/t4-canvas/src/index.css)
- [vite.config.ts](/home/waishnav/personal/tools/improved-frontend-skills-for-gpt/experiments/version-24/t4-canvas/vite.config.ts)
- [package.json](/home/waishnav/personal/tools/improved-frontend-skills-for-gpt/experiments/version-24/t4-canvas/package.json)

### Verification
- `bun run build` passed.
- `bun run lint` passed.
- Dev server confirmed at `http://localhost:4000/`.

Run locally:
```bash
cd /home/waishnav/personal/tools/improved-frontend-skills-for-gpt/experiments/version-24/t4-canvas
bun dev
```