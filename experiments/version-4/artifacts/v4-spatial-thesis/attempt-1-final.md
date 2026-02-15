Implemented a full T4 Canvas marketing site in the existing Bun + Vite + React + TypeScript + Tailwind workspace, with five distinct concepts on `/1` to `/5`.

Updated files:
- `t4-canvas/src/components/ConceptNav.tsx`
- `t4-canvas/src/pages/ConceptOne.tsx`
- `t4-canvas/src/pages/ConceptTwo.tsx`
- `t4-canvas/src/pages/ConceptThree.tsx`
- `t4-canvas/src/pages/ConceptFour.tsx`
- `t4-canvas/src/pages/ConceptFive.tsx`

What I changed:
- Rebuilt all five routes with unique visual systems and layouts (kinetic split hero, editorial flow, ops cockpit, gallery-first, poster-web).
- Kept consistent product messaging for Nano Banana Pro, Flux 2, gpt-image-1.5, and Seedream.
- Included flat-fee positioning throughout.
- Added route-specific interactions (cursor-reactive lighting, model toggles, mode switching, compare slider, animated ribbons).

Validation:
- `bun install` completed
- `bun run lint` passed
- `bun run build` passed

Run locally:
1. `cd t4-canvas`
2. `bun run dev`
3. Visit `http://localhost:4000/1` through `http://localhost:4000/5`