Implemented in `t4-canvas/` and verified.

- Stack is in place with Bun + Vite + React + TypeScript + Tailwind:
  - `t4-canvas/package.json`
  - `t4-canvas/vite.config.ts` (dev server fixed to port `4000`)
  - `t4-canvas/src/index.css` (Tailwind + typography/theme system)
- Routing + pages are set up:
  - `t4-canvas/src/App.tsx`
  - `/` has a card-grid launcher for quick navigation
  - `/1`, `/2`, `/3`, `/4`, `/5` each render a distinct creative marketing homepage concept
  - headers use product nav labels (not raw route labels like `/1`, `/2`, etc.)
- App bootstrapping:
  - `t4-canvas/src/main.tsx` (React Router + app mount)

Validation run:

- `bun run build` passed
- `bun run lint` passed

Run locally:

```bash
cd t4-canvas
bun run dev
```

Dev server will start on `http://localhost:4000`.