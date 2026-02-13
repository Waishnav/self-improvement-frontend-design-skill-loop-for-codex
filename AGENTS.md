# AGENTS.md

## Project Purpose

This repository benchmarks and improves `frontend-design` skill quality for GPT Codex models (especially GPT-5.2 / GPT-5.3) using repeatable experiments.

## Quick Start

1. Read `README.md` for project context.
2. Use `prompt.md` as the single shared benchmark prompt.
3. Work inside `experiments/<version>/` for all versioned changes.

## Repository Structure

- `prompt.md`: Canonical prompt used across experiments.
- `experiments/`: Versioned experiment folders.
- `experiments/version-1/skills/frontend-design/SKILL.md`: Current tuned skill under test.
- `experiments/version-1/README.md`: What this version includes and expected outcomes.
- `experiments/version-1/t4-canvas/`: App scaffold/output workspace for that version.

## Agent Workflow (Minimal)

1. Do not modify `prompt.md` unless explicitly asked.
2. For new iterations, create a new version folder (for example `experiments/v002-.../`) instead of overwriting prior versions.
3. Keep each version self-contained:
   - skill file,
   - app/output workspace,
   - short README describing what changed.
4. Prefer comparable experiments: same prompt, same constraints, changed skill version.

## Conventions

- Keep changes small and auditable.
- Do not delete prior experiment versions.
- Document the reason for each skill change in that version's README.
