Implemented in `t4-canvas/` with Bun + Vite + React + TypeScript + Tailwind, plus 6 routes total:

- `/` root card-grid navigator for quick access to concepts (`t4-canvas/src/routes/Home.tsx:68`)
- `/1` Neon Command Deck (`t4-canvas/src/routes/DesignOne.tsx`)
- `/2` Editorial Atelier (`t4-canvas/src/routes/DesignTwo.tsx`)
- `/3` Brutalist Operations (`t4-canvas/src/routes/DesignThree.tsx`)
- `/4` Organic Spectrum (`t4-canvas/src/routes/DesignFour.tsx`)
- `/5` Noir Precision Studio (`t4-canvas/src/routes/DesignFive.tsx`)

Key setup/config:

- Tailwind integrated via Vite plugin (`t4-canvas/vite.config.ts:3`)
- Dev server fixed to port `4000` with strict port (`t4-canvas/vite.config.ts:8`)
- Router wiring for `/`, `/1`..`/5` in React (`t4-canvas/src/App.tsx:11`)
- Global typography/visual system + Tailwind import (`t4-canvas/src/index.css:1`)

Also removed starter boilerplate files (`t4-canvas/src/App.css`, `t4-canvas/src/assets/react.svg`).

Validation run successfully:

- `bun run lint`
- `bun run build`

Run it with:

```bash
cd t4-canvas
bun dev
```

Then open `http://localhost:4000`.