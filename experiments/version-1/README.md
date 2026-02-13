# Experiment: Version 1

This experiment runs a single shared prompt (`/prompt.md`) against a tuned `frontend-design` skill to measure design quality changes.

## Skill used

- `experiments/version-1/.agents/skills/frontend-design/SKILL.md`

## What Version 1 includes

- Clear anti-slop objective: reduce text-heavy layouts, repetitive structure, generic style fallback, and shallow interactions.
- Required pre-build workflow:
  - lock context,
  - generate 3 distinct design directions,
  - commit to one direction contract (concept, typography, palette, spatial rule, signature motif).
- Token-first implementation guidance (using the project's native theming/token system).
- Interaction depth requirements:
  - at least one hero-level interaction moment,
  - additional component-level interactions.
- Hard guards against common weak output:
  - hero/body copy length limits,
  - no repeated skeleton with simple palette swaps,
  - no low-contrast/noisy unreadable styling,
  - no default generic SaaS structure or default font/gradient fallback.
- Modern design pattern atlas to broaden visual priors (bento, editorial, neo-brutalist, quiet luxury, cockpit UI, Swiss grid, poster-web, etc.).
- Multi-concept divergence protocol for 5-design outputs:
  - concepts must differ in typography, palette temperature, layout skeleton, interaction language, and section rhythm.
- Mandatory self-critique quality gate and one revision pass before final output.
- Portability and conflict resolution:
  - user stack, conventions, and coding preferences take priority over skill defaults.

## Observed outcome tendency

- Less text-heavy first views.
- Better hierarchy and composition variety.
- Stronger differentiation between generated concepts.
- Fewer "same layout, different colors" results.
- Better interaction intent while staying production-oriented.

## Artifacts

- Prompt: `prompt.md`
- Skill: `experiments/version-1/skills/frontend-design/SKILL.md`
- App scaffold/output workspace: `experiments/version-1/t4-canvas/`

## Screenshots

- Add generated screenshots for this version here (recommended path: `experiments/version-1/screenshots/`).
