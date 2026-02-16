# Experiments Overview

This folder contains versioned `frontend-design` benchmark iterations using the same canonical `prompt.md`.

## Current Status

- Active experiment track is sequential-only (one active version at a time, one mutation per iteration).
- Archived runs are stored under `_archived/` and retained only for auditability.

## How The Loop Evolved

1. Initial baseline stage:
   - `version-1` and `version-2` established the first skill-tuning baseline and routing setup.
   - These versions had stronger manual human involvement (more direct hand-driven setup, review, and corrections).

2. Early automation stage:
   - From later versions onward, the process moved toward automated self-improvement loops.
   - The self-improvement loop started generating new versions quickly.
   - Some runs inherited previous app outputs, which reduced experiment isolation.

3. Reliability hardening stage:
   - Loop scripts were updated to prefer isolated fresh app scaffolding.
   - Retry/resume logic was added for long headless `codex exec` runs.
   - YOLO mode support was added for unattended overnight execution.

4. Experiment design maturity stage:
   - Sequential refinement became the primary experiment topology.
   - `CRITQUES.md` became a required artifact for each version.
   - Global `$frontend-design` seeding was enabled for true raw baseline starts.

5. Screenshot quality fixes:
   - Responsive captures now exist per route: `screenshots/<route>/{mobile,tablet,laptop}.png`.
   - Sticky/fixed header interference was mitigated during full-page capture.
   - Version READMEs now link/embed the actual responsive screenshot files directly for GitHub rendering.

## Current Recommended Workflow

- For a true fresh run with no version baseline:
  - Use `new_fresh_version.sh` and seed from global `$frontend-design`.
- Keep experiments self-contained:
  - `SKILL.md`, `t4-canvas/`, `README.md`, `CRITQUES.md`, and full `/1.. /5` screenshots.
- Compare against:
  - `research/targetted-designs/`
  - `research/theo-screenshots-2k-clean/opus45_with_skill/`
  - `research/theo-screenshots-2k-clean/opus_iterations/`
