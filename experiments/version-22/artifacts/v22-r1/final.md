Implemented a full `Bun + Vite + React + TypeScript + Tailwind` app in `t4-canvas/` with six routes:

- `/` quick navigation card grid (no `/1`, `/2`, etc labels in headers)
- `/1` Editorial Heat
- `/2` Command Surface
- `/3` Soft Orbit
- `/4` Brutal Signal
- `/5` Terminal Bloom

Key files:
- `t4-canvas/src/App.tsx`
- `t4-canvas/src/pages/HomePage.tsx`
- `t4-canvas/src/pages/ConceptOnePage.tsx`
- `t4-canvas/src/pages/ConceptTwoPage.tsx`
- `t4-canvas/src/pages/ConceptThreePage.tsx`
- `t4-canvas/src/pages/ConceptFourPage.tsx`
- `t4-canvas/src/pages/ConceptFivePage.tsx`
- `t4-canvas/src/index.css`
- `t4-canvas/vite.config.ts` (dev server pinned to port `4000`)

Validation run:
- `bun run build` passed
- `bun run lint` passed

Run locally:
```bash
cd t4-canvas
bun run dev
```
This serves on `http://localhost:4000`.