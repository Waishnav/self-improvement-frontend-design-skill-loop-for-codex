Implemented in `t4-canvas` with Bun + Vite + React + TypeScript + Tailwind, and built 5 distinct marketing homepages at `/1`–`/5` plus a card-grid navigator at `/`.

Key files:
- Routing setup: [App.tsx](/home/waishnav/personal/tools/improved-frontend-skills-for-gpt/experiments/version-25/t4-canvas/src/App.tsx:1)
- Tailwind + global visual system (fonts, textures, motion helpers): [index.css](/home/waishnav/personal/tools/improved-frontend-skills-for-gpt/experiments/version-25/t4-canvas/src/index.css:1)
- Root navigation grid (`/`): [HomeGrid.tsx](/home/waishnav/personal/tools/improved-frontend-skills-for-gpt/experiments/version-25/t4-canvas/src/pages/HomeGrid.tsx:1)
- Design `/1` (editorial broadsheet): [DesignOne.tsx](/home/waishnav/personal/tools/improved-frontend-skills-for-gpt/experiments/version-25/t4-canvas/src/pages/DesignOne.tsx:1)
- Design `/2` (mission control): [DesignTwo.tsx](/home/waishnav/personal/tools/improved-frontend-skills-for-gpt/experiments/version-25/t4-canvas/src/pages/DesignTwo.tsx:1)
- Design `/3` (Swiss poster): [DesignThree.tsx](/home/waishnav/personal/tools/improved-frontend-skills-for-gpt/experiments/version-25/t4-canvas/src/pages/DesignThree.tsx:1)
- Design `/4` (gallery wall): [DesignFour.tsx](/home/waishnav/personal/tools/improved-frontend-skills-for-gpt/experiments/version-25/t4-canvas/src/pages/DesignFour.tsx:1)
- Design `/5` (cinematic noir): [DesignFive.tsx](/home/waishnav/personal/tools/improved-frontend-skills-for-gpt/experiments/version-25/t4-canvas/src/pages/DesignFive.tsx:1)
- Vite port config (`4000`): [vite.config.ts](/home/waishnav/personal/tools/improved-frontend-skills-for-gpt/experiments/version-25/t4-canvas/vite.config.ts:1)
- Bun scripts with port `4000`: [package.json](/home/waishnav/personal/tools/improved-frontend-skills-for-gpt/experiments/version-25/t4-canvas/package.json:1)

Validation run:
- `bun run build` passed
- `bun run lint` passed

Run locally:
- `cd /home/waishnav/personal/tools/improved-frontend-skills-for-gpt/experiments/version-25/t4-canvas`
- `bun run dev` (served on `http://localhost:4000`)