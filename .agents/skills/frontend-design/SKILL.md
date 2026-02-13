---
name: frontend-design
description: Create distinctive, production-grade frontend interfaces with strong art direction. Use when building or restyling web components, pages, dashboards, landing pages, React apps, HTML/CSS layouts, or any UI where originality, polish, and visual quality are critical. Enforce anti-slop rules, layout diversity, typography quality, and interaction design.
---

Build real, production-grade frontend code with intentional visual direction.
Counter common GPT/Codex failure modes: text-heavy layouts, repeated structure, generic style fallback, and shallow interactions.
Prioritize user constraints over this skill: framework, libraries, coding style, architecture, and file conventions always win.
This skill defines design outcomes and quality bars, not mandatory implementation tooling.

## Portability and Conflict Resolution (Required)
- Apply design guidance through the user's chosen stack and conventions.
- Do not force specific tools or libraries unless the user asks for them.
- Express decisions as transferable intent (hierarchy, rhythm, contrast, interaction feedback), then map to local primitives.
- Implement tokens/themes using the project's native system (variables, utility config, theme objects, component tokens, etc.).
- If preferences are missing, choose a minimal-dependency approach and keep it easy to migrate.
- Reuse existing project patterns before introducing new abstractions.

## Workflow (Required)
1. Lock context quickly.
- Identify audience, core task, tone, platform, and constraints.
- If context is missing, make practical assumptions and proceed.

2. Generate three distinct directions internally before coding.
- Force real divergence in composition, type system, and color strategy.
- Pick one direction and commit.

3. Define a direction contract before implementation.
- Concept statement (one sharp phrase).
- Font pair (display + body).
- Token palette (dominant, support, accent, neutral).
- Spatial rule (asymmetry, strict grid, or split narrative).
- Signature element (one memorable motif).

4. Implement a token system first.
- Define reusable primitives for type scale, spacing, color, radius, borders, elevation, and timing in the project's preferred format.
- Build components from those primitives, not ad hoc values.

5. Add interaction depth.
- Add at least one hero-level moment.
- Add at least two component-level interactions for pages, one for small components.

6. Run the quality gate and revise once.
- Do not stop at first draft quality.

## Hard Guards for Known Failure Modes
Text-heavy output:
- Keep hero headline <= 12 words.
- Keep hero supporting copy <= 24 words.
- Keep above-the-fold body copy to two short blocks maximum.
- Convert long explanations into cards, bullets, or data points.

Layout repetition:
- For multi-option outputs, vary at least four axes across options:
- Hero composition
- Section flow
- Navigation structure
- Card/shape language
- Media treatment
- Interaction pattern
- Avoid repeating the same skeleton with only palette swaps.

Readability regressions:
- Reject low-contrast text and clipped typography.
- Reject blur/noise effects that reduce legibility.
- Reject decorative layers that obscure content.

Generic defaults:
- Do not default to Inter/Roboto/Arial/system as primary identity unless explicitly requested.
- Do not default to purple-pink-blue neon gradients.
- Do not default to generic "SaaS hero + three cards + CTA" structure.
- Do not use fake terminal aesthetics unless context justifies it.

## Modern Pattern Atlas (Recent, Reusable)
Use these as pattern families, not copy-paste templates.

- Bento product narrative: asymmetrical modular blocks with clear hierarchy.
- Editorial mono-luxe: serif headlines, precise grid, restrained ornament.
- Neo-brutalist utility: sharp borders, flat planes, heavy contrast, intentional rawness.
- Quiet luxury SaaS: muted neutrals, premium spacing, subtle motion.
- App cockpit: dense command surfaces, inspector rails, status modules.
- Kinetic typography hero: oversized type as primary visual engine.
- Story-scroll narrative: sticky scenes and section-driven transitions.
- Gallery-first interface: media-dominant composition with lightweight chrome.
- Soft-material depth: layered surfaces, controlled blur, tactile lighting.
- Swiss data grid: strict rhythm, typographic rigor, restrained accents.
- Experimental poster-web: expressive type, overlap, framing, and composition tension.

## Composition Rules
- Establish a clear first-view focal point.
- Use one spatial thesis consistently (asymmetry, strict grid, or split narrative).
- Balance one dense zone with one breathing zone.
- Use scale contrast, overlap, or framing to create hierarchy.
- Design mobile intentionally; do not only collapse desktop.

## Typography Rules
- Pair one display face with one body face.
- Keep font families to two maximum.
- Use a fluid or stepped type scale appropriate to the stack and platform, with intentional line length.
- Apply case, tracking, and weight as part of brand voice.

## Color and Surface Rules
- Tokenize palette in the project's native theming system (`bg`, `fg`, `muted`, `accent`, `accent-2`, `surface`, `border` semantics).
- Keep one dominant chroma and sparse accents.
- Validate text/control contrast.
- Use gradients or textures only when conceptually justified.

## Interaction and Motion Rules
- Add one orchestrated entrance sequence.
- Add meaningful hover/focus/active states.
- Keep a coherent timing system (for example: 140ms, 220ms, 360ms).
- Prefer native platform motion primitives first; add heavier JS animation only when state complexity requires it.
- Respect reduced motion preferences.

## Multi-Concept Protocol
When asked for multiple designs:
- Generate all concepts in one run.
- Default to five concepts unless the user specifies a different count.
- Ensure each concept differs in:
- Typography family
- Palette temperature
- Layout skeleton
- Interaction language
- Section rhythm
- If concepts are shown in one app, provide a lightweight, stack-appropriate concept switcher.

## Delivery Checklist
- Production-ready implementation that runs in the requested stack without manual fixes.
- Domain-specific copy (no placeholder or vague generic slogans).
- Visible focus styles and readable contrast.
- Desktop and mobile both polished.
- One post-build refinement pass completed.

## Self-Critique Quality Gate (Score 0-2)
- Distinctiveness
- Layout originality
- Text economy
- Typography craft
- Interaction quality
- Accessibility
- Responsiveness

If any score is below 2, revise before final output.
