# Version 28

## Experiment Topology

vertical

## Isolation Mode

isolated-fresh-app

## Skill Baseline

previous-version-skill

## Hypothesis

Replacing `version-27`'s warm-neutral palette bias with domain-sensitive color selection rules will preserve the calmer, anti-glass visual discipline while restoring better palette fit and route-to-route color diversity.

## Mutation Axis

Axis: `Color-domain fit`

## Exact Skill Change

- Kept the `version-27` product-UI normalization rules, anti-glass bans, and calmer component standards.
- Rewrote the color section so palette choice is driven by domain, artifact, and user intent rather than a standing preference for warm neutrals.
- Explicitly allowed blue and cooler palettes when they fit the request, while still banning generic AI-startup blue/cyan treatments.
- Added route-set palette-diversity checks so multi-design outputs do not collapse into the same cream / rust / clay family.

## Expected Visual Delta

- Outputs should keep the calmer and less-glassy finish from `version-27`.
- Color choice should feel more appropriate to the user's domain instead of defaulting toward coffee-colored warm palettes.
- Multi-route sets should show broader temperature range without regressing into generic blue SaaS styling.

## Measured Result

- `t4-canvas` was scaffolded fresh with Vite, React, TypeScript, Tailwind, and Bun.
- Implemented routes `/`, `/1`, `/2`, `/3`, `/4`, and `/5` for the shared T4 Canvas benchmark prompt.
- Validation completed successfully: `bun run lint` and `bun run build` both passed in `t4-canvas/`.
- Screenshot capture completed for `/1` to `/5` across desktop, tablet, and mobile, with `laptop.png` aliases written for each route.
- Dev server lifecycle verified: capture ran on `http://127.0.0.1:4000` and the server was stopped afterwards.
- Headless wrapper note: the initial `codex exec` run scaffolded the app and dependencies but stalled before the main edit pass, so the routed app and final polish were completed directly in the prepared `version-28/t4-canvas` workspace.
- Rubric score delta: pending manual scoring.

## Keep / Drop

- Tentatively keep. The cooler route palettes landed without reintroducing glossy SaaS blue defaults, which is the exact mutation this version was targeting.

## Next Step

- Compare the captured routes against `version-27` and the target sets to judge whether the color-fit gains were worth any tradeoff in coherence or visual finish.

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
