Implemented a full redesign in `t4-canvas/` with five distinct marketing homepage concepts for T4 Canvas, routed at:

- `/1` Signal Forge
- `/2` Atelier Brief
- `/3` Ops Deck
- `/4` Mosaic Club
- `/5` Riot Poster

Updated key files:

- `t4-canvas/src/App.tsx`
- `t4-canvas/src/components/ConceptNav.tsx`
- `t4-canvas/src/index.css`
- `t4-canvas/src/pages/ConceptOne.tsx`
- `t4-canvas/src/pages/ConceptTwo.tsx`
- `t4-canvas/src/pages/ConceptThree.tsx`
- `t4-canvas/src/pages/ConceptFour.tsx`
- `t4-canvas/src/pages/ConceptFive.tsx`

Validation completed:

- `bun install`
- `bun run lint` passed
- `bun run build` passed

Run locally on port `4000`:

```bash
cd t4-canvas
bun run dev
```

`vite.config.ts` and scripts are already pinned to port `4000`.