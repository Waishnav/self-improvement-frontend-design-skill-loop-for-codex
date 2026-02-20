Implemented in `t4-canvas/` with Bun + Vite + React + TypeScript + Tailwind, plus 5 unique homepage concepts and a root concept grid.

**What I changed**
- Project setup and Tailwind/Vite config: `t4-canvas/vite.config.ts`
  - Added `@tailwindcss/vite`
  - Set dev server to `port: 4000` and `strictPort: true`
- Routing for `/`, `/1`, `/2`, `/3`, `/4`, `/5`: `t4-canvas/src/App.tsx`
- Root quick-navigation card grid: `t4-canvas/src/pages/ConceptHub.tsx`
- Five distinct marketing homepage designs:
  - `t4-canvas/src/pages/ConceptOne.tsx`
  - `t4-canvas/src/pages/ConceptTwo.tsx`
  - `t4-canvas/src/pages/ConceptThree.tsx`
  - `t4-canvas/src/pages/ConceptFour.tsx`
  - `t4-canvas/src/pages/ConceptFive.tsx`
- Global Tailwind + typography/style foundation: `t4-canvas/src/index.css`

**Validation**
- `bun run build` passed.
- `bun run lint` passed.
- `bun run dev` is correctly targeting port `4000`, but port `4000` is currently occupied by another process (`PID 1891451`), so startup on that port currently fails until that process is stopped.

**Next step**
1. Stop the existing process on `4000` (if you want this app there), then run:
   - `cd t4-canvas`
   - `bun run dev`