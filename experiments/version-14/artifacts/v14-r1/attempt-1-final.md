Implemented in `t4-canvas/` with your requested stack and routing.

- Initialized `Bun + Vite + React + TypeScript + Tailwind`.
- Added router with:
  - `/` card-grid navigation hub: `t4-canvas/src/pages/HubPage.tsx`
  - `/1`: `t4-canvas/src/pages/ConceptOnePage.tsx`
  - `/2`: `t4-canvas/src/pages/ConceptTwoPage.tsx`
  - `/3`: `t4-canvas/src/pages/ConceptThreePage.tsx`
  - `/4`: `t4-canvas/src/pages/ConceptFourPage.tsx`
  - `/5`: `t4-canvas/src/pages/ConceptFivePage.tsx`
- Route wiring: `t4-canvas/src/App.tsx`, `t4-canvas/src/main.tsx`
- Tailwind + typography + animation system: `t4-canvas/src/index.css`
- Dev server port set to `4000` in both:
  - `t4-canvas/vite.config.ts`
  - `t4-canvas/package.json`
- Headers use semantic section labels only (no `/1`, `/2`, etc. shown in header nav).

Validation completed:
- `bun run build` passed
- `bun run lint` passed

Run it with:
```bash
cd t4-canvas
bun dev
```