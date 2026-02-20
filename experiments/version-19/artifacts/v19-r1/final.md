Implemented a full Bun + Vite + React + TypeScript + Tailwind app in `t4-canvas`, with five distinct marketing homepage concepts and a root launcher grid.

**What I changed**
- Initialized project and dependencies in `t4-canvas/package.json`.
- Added Tailwind v4 plugin + fixed dev port `4000` in `t4-canvas/vite.config.ts:1`.
- Added router setup in `t4-canvas/src/main.tsx:1` and route map in `t4-canvas/src/App.tsx:1`.
- Built root quick-nav card grid at `t4-canvas/src/pages/HomeHub.tsx:1`.
- Built five unique designs:
  - `t4-canvas/src/pages/DesignOne.tsx:1`
  - `t4-canvas/src/pages/DesignTwo.tsx:1`
  - `t4-canvas/src/pages/DesignThree.tsx:1`
  - `t4-canvas/src/pages/DesignFour.tsx:1`
  - `t4-canvas/src/pages/DesignFive.tsx:1`
- Replaced base styling with custom typography, motion, and utility layers in `t4-canvas/src/index.css:1`.

**Routing**
- `/` = concept card grid launcher
- `/1` `/2` `/3` `/4` `/5` = five separate homepage concepts

**Verification**
- `bun run build` passed.
- `bun run lint` passed.
- Dev server confirmed on `http://localhost:4000/` via `bun run dev --host 0.0.0.0 --port 4000` (stopped after smoke-check timeout).

Run it with:
```bash
cd /home/waishnav/personal/tools/improved-frontend-skills-for-gpt/experiments/version-19/t4-canvas
bun run dev
```