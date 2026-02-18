Implemented in `t4-canvas/` with your requested stack and routing.

- Initialized `Vite + React + TypeScript` with Bun.
- Added Tailwind (v4 via `@tailwindcss/vite`) and React Router.
- Set dev server port to `4000` in `t4-canvas/vite.config.ts`.
- Built routing in `t4-canvas/src/App.tsx` and `t4-canvas/src/main.tsx` for:
  - `/` root card-grid navigator
  - `/1`, `/2`, `/3`, `/4`, `/5` (five unique homepage designs)
- Created all design pages:
  - `t4-canvas/src/pages/GalleryPage.tsx`
  - `t4-canvas/src/pages/DesignOnePage.tsx`
  - `t4-canvas/src/pages/DesignTwoPage.tsx`
  - `t4-canvas/src/pages/DesignThreePage.tsx`
  - `t4-canvas/src/pages/DesignFourPage.tsx`
  - `t4-canvas/src/pages/DesignFivePage.tsx`
- Added shared model data in `t4-canvas/src/data/models.ts`.
- Added global fonts/animations/Tailwind base in `t4-canvas/src/index.css`.

Validation completed:

- `bun run build` passes.
- `bun run lint` passes.

Run it with:

```bash
cd /home/waishnav/personal/tools/improved-frontend-skills-for-gpt/experiments/version-13/t4-canvas
bun dev
```

It will serve on `http://localhost:4000`.