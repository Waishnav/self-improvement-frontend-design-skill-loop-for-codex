Implemented in `t4-canvas` with Bun, Vite, React, TypeScript, and Tailwind.

What I changed:
- Initialized project and dependencies in `t4-canvas/package.json` (including `tailwindcss`, `@tailwindcss/vite`, `react-router-dom`).
- Configured Tailwind + Vite and set dev/preview port to `4000` in `t4-canvas/vite.config.ts`.
- Replaced starter app with routed experience in `t4-canvas/src/App.tsx` and `t4-canvas/src/main.tsx`.
- Added global typography/theme system in `t4-canvas/src/index.css`.
- Built root landing card-grid navigator at `/` in `t4-canvas/src/pages/HomeIndex.tsx`.
- Built five distinct marketing homepages at:
  - `/1` in `t4-canvas/src/pages/DesignOne.tsx`
  - `/2` in `t4-canvas/src/pages/DesignTwo.tsx`
  - `/3` in `t4-canvas/src/pages/DesignThree.tsx`
  - `/4` in `t4-canvas/src/pages/DesignFour.tsx`
  - `/5` in `t4-canvas/src/pages/DesignFive.tsx`

Validation run:
- `bun run build` passed
- `bun run lint` passed

Run locally:
```bash
cd /home/waishnav/personal/tools/improved-frontend-skills-for-gpt/experiments/version-15/t4-canvas
bun install
bun run dev
```
App serves on `http://localhost:4000`.