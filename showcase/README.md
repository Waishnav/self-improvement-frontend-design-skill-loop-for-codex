# Showcase Site

Presentation site for the frontend-skill optimization research project.

## Commands

- `bun install`
- `bun run dev`
- `bun run build`

The build step also runs `scripts/generate-manifest.mjs` to prepare experiment metadata.

## Google Forms Feedback Setup

1. Copy `.env.example` to `.env`.
2. Create a Google Form with fields:
   - version
   - route
   - upvote/downvote
   - written feedback
3. Open the form HTML and map each question to its `entry.<id>` value.
4. Set `PUBLIC_GOOGLE_FORM_ACTION` to the form's `formResponse` URL.

Feedback submissions are sent directly from the browser to Google Forms using `mode: no-cors`.
