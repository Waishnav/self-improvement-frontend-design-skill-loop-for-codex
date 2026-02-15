# Experiment Topologies

Use both patterns intentionally.

## Vertical (sequential refinement)

- Start from the current best version.
- Create one new version.
- Change one mutation axis.
- Evaluate.
- Promote only if score improves.

Best for: local optimization and convergence.

## Horizontal (parallel divergence)

- Start from one shared baseline version.
- Create multiple sibling versions in parallel.
- Give each sibling a different mutation axis.
- Evaluate siblings against the same rubric and references.

Best for: broad exploration and escaping local minima.

## Isolation Rule

For both topologies, default to isolated app scaffolds:

- copy prior `SKILL.md`
- fresh empty `t4-canvas/`
- same root `prompt.md`

Do not copy previous generated app implementation unless explicitly requested.
