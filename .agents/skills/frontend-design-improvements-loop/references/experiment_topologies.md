# Experiment Topologies

Active workflow is single-track sequential iteration.

## Vertical (sequential refinement)

- Start from the current best version.
- Create one new version.
- Change one mutation axis.
- Evaluate.
- Promote only if score improves.

Best for: local optimization and convergence.

## Isolation Rule

Default to isolated app scaffolds:

- copy prior `SKILL.md`
- fresh empty `t4-canvas/`
- same root `prompt.md`

Do not copy previous generated app implementation unless explicitly requested.
