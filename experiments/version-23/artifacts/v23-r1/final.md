Implemented end-to-end in `t4-canvas` with Bun + Vite + React + TypeScript + Tailwind, including 5 distinct homepage concepts on `/1`..`/5` and a card-grid navigator on `/`.

- Router + route map: [App.tsx](/home/waishnav/personal/tools/improved-frontend-skills-for-gpt/experiments/version-23/t4-canvas/src/App.tsx)
- Dev server port fixed to `4000`: [vite.config.ts](/home/waishnav/personal/tools/improved-frontend-skills-for-gpt/experiments/version-23/t4-canvas/vite.config.ts)
- Tailwind + multi-font visual system: [index.css](/home/waishnav/personal/tools/improved-frontend-skills-for-gpt/experiments/version-23/t4-canvas/src/index.css)
- Root card-grid landing page: [HomeGrid.tsx](/home/waishnav/personal/tools/improved-frontend-skills-for-gpt/experiments/version-23/t4-canvas/src/pages/HomeGrid.tsx)
- Five unique designs:
  - [DesignOne.tsx](/home/waishnav/personal/tools/improved-frontend-skills-for-gpt/experiments/version-23/t4-canvas/src/pages/DesignOne.tsx)
  - [DesignTwo.tsx](/home/waishnav/personal/tools/improved-frontend-skills-for-gpt/experiments/version-23/t4-canvas/src/pages/DesignTwo.tsx)
  - [DesignThree.tsx](/home/waishnav/personal/tools/improved-frontend-skills-for-gpt/experiments/version-23/t4-canvas/src/pages/DesignThree.tsx)
  - [DesignFour.tsx](/home/waishnav/personal/tools/improved-frontend-skills-for-gpt/experiments/version-23/t4-canvas/src/pages/DesignFour.tsx)
  - [DesignFive.tsx](/home/waishnav/personal/tools/improved-frontend-skills-for-gpt/experiments/version-23/t4-canvas/src/pages/DesignFive.tsx)

Validation run:
- `bun run build` passed
- `bun run lint` passed

Run locally:
```bash
cd /home/waishnav/personal/tools/improved-frontend-skills-for-gpt/experiments/version-23/t4-canvas
bun dev
```
Serves on `http://localhost:4000`.