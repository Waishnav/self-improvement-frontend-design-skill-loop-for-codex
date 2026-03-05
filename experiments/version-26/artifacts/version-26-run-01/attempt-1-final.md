Implemented in `t4-canvas` with the requested stack (`Vite + React + TypeScript + Tailwind + Bun`) and built all required routes:

- `/` root landing page with a card-grid navigator to all variants
- `/1` Poster Orbit (Swiss poster concept, interactive model tabs)
- `/2` Command Deck (mission-control concept, interactive runtime modes)
- `/3` Issue Zero (editorial magazine concept, interactive issue notes)
- `/4` Blueprint Atlas (technical blueprint concept, interactive model node selector)
- `/5` Cut + Assemble (collage concept, interactive output filter)

Configured dev server port `4000` in [vite.config.ts](/home/waishnav/personal/tools/improved-frontend-skills-for-gpt/experiments/version-26/t4-canvas/vite.config.ts).

Key files:
- [src/pages/StudioPages.tsx](/home/waishnav/personal/tools/improved-frontend-skills-for-gpt/experiments/version-26/t4-canvas/src/pages/StudioPages.tsx)
- [src/App.tsx](/home/waishnav/personal/tools/improved-frontend-skills-for-gpt/experiments/version-26/t4-canvas/src/App.tsx)
- [src/main.tsx](/home/waishnav/personal/tools/improved-frontend-skills-for-gpt/experiments/version-26/t4-canvas/src/main.tsx)
- [src/index.css](/home/waishnav/personal/tools/improved-frontend-skills-for-gpt/experiments/version-26/t4-canvas/src/index.css)
- [index.html](/home/waishnav/personal/tools/improved-frontend-skills-for-gpt/experiments/version-26/t4-canvas/index.html)

Validation run:
- `bun run lint`
- `bun run build`

Start it with:
```bash
cd /home/waishnav/personal/tools/improved-frontend-skills-for-gpt/experiments/version-26/t4-canvas
bun dev
```
Then open `http://localhost:4000`.