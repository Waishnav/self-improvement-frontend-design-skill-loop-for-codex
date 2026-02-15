# Improved Frontend Skills for GPT Codex

This project is an experiment in making GPT Codex produce much stronger frontend design outputs through instruction tuning and iterative self-correction loops.

## Thesis

Can Codex be pushed toward Opus-like visual quality by repeatedly refining `frontend-design` skill instructions and critiquing outputs against strong reference sets?

This repo treats frontend quality as an optimization loop:

1. Keep the prompt fixed.
2. Change skill instructions intentionally.
3. Generate output.
4. Critique against target visuals.
5. Repeat.

## Why I built this

After watching model comparisons (including Theo's frontend-model discussion), I wanted to test a specific idea:

- A great skill is not automatically portable across model families.
- Codex might need its own instruction tuning to reach comparable design quality.

This became a focused benchmark to measure how much we can improve Codex output quality by tuning behavior through skills, constraints, and feedback loops.

## Important clarification

This project does **not** fine-tune base model weights.

When we say "influence weights" here, we mean practical instruction weighting:

- stronger priority rules,
- tighter quality gates,
- explicit anti-failure constraints,
- iterative critique feedback.

The objective is to influence model behavior reliably, not to modify model internals.

## Core experiment design

- One canonical benchmark prompt: `prompt.md`
- Versioned experiments under `experiments/version-X/`
- Each version is self-contained:
  - `.agents/skills/frontend-design/SKILL.md`
  - `t4-canvas/`
  - `README.md`
  - `CRITQUES.md`
  - `screenshots/` for `/1` to `/5`
- New versions are isolated by default (fresh app workspace, no inherited generated UI code).

## Optimization strategy

Two experiment topologies are used:

- Vertical: sequential refinement from best baseline.
- Horizontal: parallel sibling branches with different mutation axes.

Each iteration changes one primary hypothesis so we can attribute quality changes.

## Success criteria

We treat success as measurable movement toward the target visual bar:

- stronger hierarchy and composition,
- better concept divergence,
- less generic "AI slop" structure,
- better polish, readability, and interaction quality,
- closer fit to Opus-with-skill reference traits.

## Reference targets

- `research/targetted-designs/`
- `research/theo-screenshots-2k-clean/opus45_with_skill/`
- `research/theo-screenshots-2k-clean/opus_iterations/`

## Quick start

1. Read `AGENTS.md`.
2. Keep `prompt.md` unchanged for fair comparisons.
3. Run experiments from inside `experiments/version-X/`.
4. Use `.agents/skills/frontend-design-improvements-loop/SKILL.md` as the operational workflow.
