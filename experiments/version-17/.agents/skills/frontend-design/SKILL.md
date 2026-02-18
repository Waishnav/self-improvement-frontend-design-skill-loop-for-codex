---
name: frontend-design
description: Create distinctive, production-grade frontend interfaces with high design quality. Use this skill when the user asks to build web components, pages, artifacts, posters, or applications (examples include websites, landing pages, dashboards, React components, HTML/CSS layouts, or when styling/beautifying any web UI). Generates creative, polished code and UI design that avoids generic AI aesthetics.
license: Complete terms in LICENSE.txt
---

This skill guides creation of distinctive, production-grade frontend interfaces that avoid generic "AI slop" aesthetics. Implement real working code with exceptional attention to aesthetic details and creative choices.

The user provides frontend requirements: a component, page, application, or interface to build. They may include context about the purpose, audience, or technical constraints.

## Design Thinking

Before coding, understand the context and commit to a BOLD aesthetic direction:
- **Purpose**: What problem does this interface solve? Who uses it?
- **Tone**: Pick an extreme: brutally minimal, maximalist chaos, retro-futuristic, organic/natural, luxury/refined, playful/toy-like, editorial/magazine, brutalist/raw, art deco/geometric, soft/pastel, industrial/utilitarian, etc. There are so many flavors to choose from. Use these for inspiration but design one that is true to the aesthetic direction.
- **Constraints**: Technical requirements (framework, performance, accessibility).
- **Differentiation**: What makes this UNFORGETTABLE? What's the one thing someone will remember?

**CRITICAL**: Choose a clear conceptual direction and execute it with precision. Bold maximalism and refined minimalism both work - the key is intentionality, not intensity.

Then implement working code (HTML/CSS/JS, React, Vue, etc.) that is:
- Production-grade and functional
- Visually striking and memorable
- Cohesive with a clear aesthetic point-of-view
- Meticulously refined in every detail

## Frontend Aesthetics Guidelines

Focus on:
- **Typography**: Choose fonts that are beautiful, unique, and interesting. Avoid generic fonts like Arial and Inter; opt instead for distinctive choices that elevate the frontend's aesthetics; unexpected, characterful font choices. Pair a distinctive display font with a refined body font.
- **Color & Theme**: Commit to a cohesive aesthetic. Use CSS variables for consistency. Dominant colors with sharp accents outperform timid, evenly-distributed palettes.
- **Motion**: Use animations for effects and micro-interactions. Prioritize CSS-only solutions for HTML. Use Motion library for React when available. Focus on high-impact moments: one well-orchestrated page load with staggered reveals (animation-delay) creates more delight than scattered micro-interactions. Use scroll-triggering and hover states that surprise.
- **Spatial Composition**: Unexpected layouts. Asymmetry. Overlap. Diagonal flow. Grid-breaking elements. Generous negative space OR controlled density.
- **Backgrounds & Visual Details**: Create atmosphere and depth rather than defaulting to solid colors. Add contextual effects and textures that match the overall aesthetic. Apply creative forms like gradient meshes, noise textures, geometric patterns, layered transparencies, dramatic shadows, decorative borders, custom cursors, and grain overlays.

NEVER use generic AI-generated aesthetics like overused font families (Inter, Roboto, Arial, system fonts), cliched color schemes (particularly purple gradients on white backgrounds), predictable layouts and component patterns, and cookie-cutter design that lacks context-specific character.

Interpret creatively and make unexpected choices that feel genuinely designed for the context. No design should be the same. Vary between light and dark themes, different fonts, different aesthetics. NEVER converge on common choices (Space Grotesk, for example) across generations.

**IMPORTANT**: Match implementation complexity to the aesthetic vision. Maximalist designs need elaborate code with extensive animations and effects. Minimalist or refined designs need restraint, precision, and careful attention to spacing, typography, and subtle details. Elegance comes from executing the vision well.

Remember: Claude is capable of extraordinary creative work. Don't hold back, show what can truly be created when thinking outside the box and committing fully to a distinctive vision.

## Reliability and Overflow Gates

Treat these checks as required before final output:
- Verify layouts at three representative viewports (mobile, tablet, desktop).
- Do not ship unintended horizontal overflow at any viewport.
- Do not let fixed or sticky UI overlap and hide critical content.
- Keep vertical rhythm consistent by using a spacing scale; avoid abrupt, accidental dead zones.
- Keep readable type sizing and contrast for body, headings, controls, and muted text.
- Ensure interactive elements have clear hover, focus, and active states.
- If any gate fails, revise and re-check before final delivery.

## Section Graph Diversity and Depth Guard

Treat page depth as a required quality gate:
- Assign a distinct section graph to each concept, not just a palette/type variation.
- Each full-page concept must include a hero plus at least three substantive sections after the hero.
- Include at least two deliberate macro rhythm changes after the hero (for example: dense to sparse, media-led to text-led, grid to freeform).
- Reject outputs that end after a single feature strip or one repeated card row.
- Avoid repeating the same lower-half structure across concepts.
- Ensure each concept has a clear close-out band (conversion, summary, or footer narrative).

## Anti-Repetition and Payload Continuity Guard

Treat repetition and sparse placeholders as failures:
- Do not repeat the same section shell three times in a row (same container, same card rhythm, same alignment pattern).
- Do not leave large visual dead zones between sections without intentional content.
- Each major section must include meaningful payload (headline + support + at least one concrete visual or data module).
- If a section is mostly decorative, pair it with functional content in the same band.
- Cap spacer-only vertical gaps and replace them with transition modules when needed.
- Before final output, scan the page top-to-bottom and rewrite any section that feels like a duplicate scaffold.

## Interaction Depth Guard

Treat static-only pages as incomplete:
- Include at least one hero-level stateful interaction (toggle, tabs, view switch, or compare mode) that changes nearby content.
- Include at least two additional interaction moments below the hero with clear active/inactive states.
- Ensure each interaction has visible feedback on hover, focus, and active states.
- Avoid relying on buttons with no meaningful state change.
- Prefer interactions that reveal product behavior (comparison, filtering, timeline, mode switch) over decorative motion.
- Verify interactions remain usable on touch and keyboard input.

## Domain-Specific Copy Pressure Guard

Treat vague copy as a quality failure:
- Replace generic marketing phrases with concrete product nouns, verbs, and workflow terms tied to the domain.
- Prefer short, specific claims over abstract hype; each section should communicate one clear capability or outcome.
- Keep hero copy concise: one primary promise, one supporting sentence, and one explicit value statement.
- Ensure supporting cards and labels use differentiated language, not repeated synonyms of the same idea.
- Use realistic feature and workflow language (controls, modes, outputs, constraints, metrics) instead of filler adjectives.
- Review all visible text before final output and rewrite any line that could fit any random SaaS product unchanged.
