# Prompt Extracts from Theo's Video

These prompts were extracted from:
- Spoken transcript
- On-screen prompt screenshots (higher confidence for exact wording)

Video:
`https://www.youtube.com/watch?v=f2FnYRP5kC4`

## What is included
- `00_t4-canvas_base_prompt.md`: Main comparison prompt used across models.
- `01_t4-canvas_treatment_no-skills.md`: Baseline treatment variant.
- `02_t4-canvas_treatment_with-frontend-skill.md`: Skill-enabled treatment variant.
- `03_t4-canvas_followup_iteration_prompt.md`: Iteration prompt pattern used after choosing favorites.
- `04_t4-canvas_prompt_extracted_from_screenshots.md`: Screenshot-derived full prompt extract.
- `screenshots/`: Captured frames showing prompt text in `prompt.md` and `prompt-with-skill.md`.

## Transcript anchors
- Base prompt block: ~`00:04:13` to `00:04:57`
- Baseline treatment text: ~`00:05:41` to `00:05:49`
- Skill treatment text: ~`00:05:53` to `00:05:57`
- Follow-up iteration pattern: ~`00:24:03` to `00:24:16`

## Notes
- The base prompt includes stack specs visible on-screen: `Vite`, `Tailwind`, `React`, `Typescript`, `Bun`.
- The variants differ by one line:
  - No-skill: "Don't use any MCPs, skills, or other features in your harness..."
  - With-skill: "Use your frontend design skill to make these designs exceptional."
