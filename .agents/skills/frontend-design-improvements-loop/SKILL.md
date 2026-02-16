---
name: frontend-design-improvements-loop
description: Run repeatable single-track frontend-design benchmark loops for this repo. Use this when creating sequential experiment versions, tuning frontend-design SKILL.md instructions, running Codex from inside `experiments/version-X/` with the shared `prompt.md`, capturing full-page `/1.. /5` screenshots, and scoring outputs against Opus-with-skill reference sets.
---

# Frontend Design Improvements Loop

Use this skill to run end-to-end benchmark iterations that improve `frontend-design` behavior through instruction tuning, not model weight tuning.

## Scope

- Repository: `improved-frontend-skills-for-gpt`
- Canonical prompt: repo root `prompt.md` (same prompt for every version)
- Active version workspace: `experiments/version-X/`
- Preferred raw baseline skill seed: global `$frontend-design` at `/home/waishnav/.agents/skills/frontend-design/SKILL.md`
- Primary references:
  - `research/targetted-designs/`
  - `research/theo-screenshots-2k-clean/opus45_with_skill/`
  - `research/theo-screenshots-2k-clean/opus_iterations/`

Read `references/opus_targets.md`, `references/mutation_axes.md`, and `references/experiment_topologies.md` before drafting a new version.

## Non-Negotiables

1. Never modify `prompt.md` unless explicitly asked.
2. Always run Codex in the target version folder (`-C experiments/version-X/...`).
3. Keep one mutation hypothesis per version.
4. Keep each version self-contained (`SKILL.md`, `t4-canvas/`, `README.md`, `CRITQUES.md`, `screenshots/`).
5. Do not delete previous versions.
6. New versions must be isolated by default: do not inherit prior `t4-canvas` implementation unless explicitly requested.
7. Run one active experiment at a time (strict sequential loop; no parallel sibling branches).
8. Carry forward only one prioritized critique into the next mutation.
9. Keep `SKILL.md` portable: no experiment/version labels or repo-specific benchmarking terms.

## Workflow

### 1) Choose baseline and one mutation hypothesis

- Baseline is the latest completed `experiments/version-*`.
- Pick one mutation axis only (see `references/mutation_axes.md`).
- Read the previous version `CRITQUES.md` and pick exactly one highest-impact issue to target.
- Write the hypothesis in the new version README before implementation.

### 2) Create the next version

- For true raw start (no version baseline), use:
  - `scripts/new_fresh_version.sh <new-version-dir>`
- Use `scripts/new_version_from_previous.sh <previous-version-dir> <new-version-dir>`.
- Default behavior is isolated: copy prior `SKILL.md`, create fresh empty `t4-canvas/`.
- Legacy mode only when explicitly requested: `--copy-app`.
- For raw baseline seeding from global frontend skill: use `--skill-source global`.

### 2b) Keep the loop sequential

- Do not create sibling versions in the same iteration.
- Do not run multiple mutation theses in parallel.
- Complete critique and keep/drop decision for the current version before creating the next version.

### 3) Tune `frontend-design` skill instructions

- Edit only `experiments/version-X/.agents/skills/frontend-design/SKILL.md`.
- Keep constraints auditable and measurable.
- Avoid vague language; use explicit guards and pass/fail criteria.
- Apply one mutation change set only for this version.
- Translate critique findings into generic rules; do not write benchmark- or version-specific wording inside `SKILL.md`.

### 4) Run Codex headlessly with canonical prompt

- Use `scripts/run_headless_iteration.sh <version-dir> <repo-root>/prompt.md [run-label]`.
- Optional reliability args: `[max-attempts] [retry-delay-sec]`.
- This forces `codex exec` to run with cwd inside version folder and logs artifacts.
- Prefer short, restartable runs over one giant run.

### 5) Capture screenshots for `/1.. /5`

- Start the version app in `t4-canvas/`.
- Use Playwriter and capture full-page screenshots for routes `/1` to `/5`.
- Save under `experiments/version-X/screenshots/`.

### 6) Critique and score

- Score against rubric in `references/scoring_rubric.md`.
- Compare against Opus reference sets (not generic web quality).
- Write critique notes to `experiments/version-X/CRITQUES.md` after every run.
- Record critique in a structured way:
  - issue
  - evidence
  - likely root-cause rule
  - proposed generic fix
- Record:
  - wins
  - regressions
  - next mutation

### 7) Decide next action

- If net gain: keep mutation and continue.
- If mixed: keep only if rubric delta is positive on target dimensions.
- If regression: revert mutation in next version and try a different axis.
- In all cases, pick one next mutation only.

## Reliability Pattern For Long Runs

- Design for 3-7 minute chunks per run.
- Do not require tmux by default; run direct `codex exec` with artifact checkpoints.
- Persist outputs every run:
  - `artifacts/<run-label>/events.jsonl`
  - `artifacts/<run-label>/stderr.log`
  - `artifacts/<run-label>/final.md`
- If interrupted, continue with `codex exec resume --last` and continue from latest checkpoint.

## Deliverable Contract Per Version

Each version must include:

- `experiments/version-X/.agents/skills/frontend-design/SKILL.md` (mutation applied)
- `experiments/version-X/README.md` with:
  - hypothesis
  - exact mutation
  - rubric score delta
  - next step
- `experiments/version-X/CRITQUES.md` with expected-vs-output critique notes
- `experiments/version-X/screenshots/version-X-route-1.png` ... `version-X-route-5.png`

## Scripts

- `scripts/new_fresh_version.sh`
- `scripts/new_version_from_previous.sh`
- `scripts/run_headless_iteration.sh`
