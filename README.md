# Improved Frontend Skills for GPT Codex

This project is my attempt to systematically improve frontend design quality for GPT Codex models through skill tuning and repeatable experiments.

## Why I am building this

I watched Theo's video on the "best model for frontend":

- https://www.youtube.com/watch?v=f2FnYRP5kC4

That comparison strongly suggested a key assumption:

- Anthropic's frontend design skill should work out of the box with any model.

After testing, I believe that conclusion is incomplete. In practice, portability is not automatic. A skill written for one model family can lose quality on another model family without additional tuning.

This repository is my focused attempt to fix that gap by adapting and refining frontend-design skill instructions for GPT Codex models, especially GPT-5.2 and GPT-5.3.

## Project goal

- Build versioned frontend-design skills.
- Run the same prompt against each version.
- Compare outputs and identify which skill changes improve design quality, originality, and consistency on GPT Codex.

## Current direction

- Keep one shared test prompt (`prompt.md`) for fair comparison.
- Evolve multiple skill versions under `experiments/`.
- Document what each version changed and what visual outcomes it produced.
