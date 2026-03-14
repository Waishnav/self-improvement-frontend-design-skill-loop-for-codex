# Version 27

## Experiment Topology

vertical

## Isolation Mode

isolated-fresh-app

## Skill Baseline

previous-version-skill

## Hypothesis

Replacing the poster-first art-direction bias with explicit anti-Codex product-UI rules will produce interfaces that organize data more clearly, use more human-readable structure, and avoid the decorative dashboard habits called out in the latest critique.

## Mutation Axis

Axis: `Product-UI normalization`

## Exact Skill Change

- Rewrote the local `frontend-design` skill around normal product-UI defaults instead of expressive poster-first composition.
- Added explicit bans for the repeated AI dashboard patterns called out in the critique: eyebrow labels, floating shells, pill overload, fake charts, hero-in-dashboard structure, KPI-first grids, right rails, decorative copy, and glossy dark-mode palettes.
- Added concrete guidance for data organization: prefer tables, lists, split views, timelines, comparison rows, and labeled charts over ornamental summary cards.
- Added calmer typography, spacing, color, and motion rules tuned for readability and information density.

## Expected Visual Delta

- Interfaces should read more like mature product screens and less like stylized AI-generated dashboards.
- Data-heavy pages should surface the primary dataset earlier and reduce decorative chrome.
- Layouts should feel more stable, normal, and easier to scan on both desktop and mobile.

## Measured Result

- `t4-canvas` was scaffolded fresh with Vite, React, TypeScript, Tailwind, and Bun.
- Implemented routes `/`, `/1`, `/2`, `/3`, `/4`, and `/5` for the T4 Canvas benchmark prompt.
- Validation completed successfully: `bun run lint` and `bun run build` both passed in `t4-canvas/`.
- Screenshot capture completed for `/1` to `/5` across desktop, tablet, and mobile, with `laptop.png` aliases written for each route.
- Port note: the app ran on `http://127.0.0.1:4001` during capture because `4000` was already occupied by an unrelated local Vite process outside this experiment.
- Headless wrapper note: the initial `codex exec` attempt stalled after scaffolding, so the version was completed directly in the `version-27/t4-canvas` workspace in the same repo state.
- Rubric score delta: pending manual scoring.

## Keep / Drop

- Tentatively keep. The version clearly moved toward calmer, more legible page structures and avoided the most obvious AI-dashboard defaults the mutation was targeting.

## Next Step

- Compare the captured routes against the target sets and decide whether the clarity gains justify the lower level of visual risk on some pages.

## Screenshots

### Route /1

- Desktop: [screenshots/1/desktop.png](screenshots/1/desktop.png)
- Tablet: [screenshots/1/tablet.png](screenshots/1/tablet.png)
- Mobile: [screenshots/1/mobile.png](screenshots/1/mobile.png)
- Laptop alias: [screenshots/1/laptop.png](screenshots/1/laptop.png)

### Route /2

- Desktop: [screenshots/2/desktop.png](screenshots/2/desktop.png)
- Tablet: [screenshots/2/tablet.png](screenshots/2/tablet.png)
- Mobile: [screenshots/2/mobile.png](screenshots/2/mobile.png)
- Laptop alias: [screenshots/2/laptop.png](screenshots/2/laptop.png)

### Route /3

- Desktop: [screenshots/3/desktop.png](screenshots/3/desktop.png)
- Tablet: [screenshots/3/tablet.png](screenshots/3/tablet.png)
- Mobile: [screenshots/3/mobile.png](screenshots/3/mobile.png)
- Laptop alias: [screenshots/3/laptop.png](screenshots/3/laptop.png)

### Route /4

- Desktop: [screenshots/4/desktop.png](screenshots/4/desktop.png)
- Tablet: [screenshots/4/tablet.png](screenshots/4/tablet.png)
- Mobile: [screenshots/4/mobile.png](screenshots/4/mobile.png)
- Laptop alias: [screenshots/4/laptop.png](screenshots/4/laptop.png)

### Route /5

- Desktop: [screenshots/5/desktop.png](screenshots/5/desktop.png)
- Tablet: [screenshots/5/tablet.png](screenshots/5/tablet.png)
- Mobile: [screenshots/5/mobile.png](screenshots/5/mobile.png)
- Laptop alias: [screenshots/5/laptop.png](screenshots/5/laptop.png)
