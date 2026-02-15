---
name: frontend-design
description: Create distinctive, production-grade frontend interfaces with strong art direction. Use when building or restyling web components, pages, dashboards, landing pages, React apps, HTML/CSS layouts, or any UI where originality, polish, and visual quality are critical. Enforce anti-slop rules, section-level layout diversity, typography quality, and interaction design.
---

Build real, production-grade frontend code with intentional visual direction.
Counter common GPT/Codex failure modes: text-heavy layouts, repeated section architecture, generic style fallback, weak contrast, and shallow interactions.
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

2. Generate five distinct directions internally before coding.
- Force real divergence in section architecture, composition, type system, and color strategy.
- Pick one direction and commit.

3. Define a direction contract before implementation.
- Concept statement (one sharp phrase).
- Font pair (display + body).
- Token palette (dominant, support, accent, neutral).
- Spatial rule (asymmetry, strict grid, split narrative, or layered canvas).
- Signature element (one memorable motif).
- Section graph id (from the Section Graph Library below).
- Primary interaction mode (from Interaction Modes below).

4. Implement a token system first.
- Define reusable primitives for type scale, spacing, color, radius, borders, elevation, and timing in the project's preferred format.
- Build components from those primitives, not ad hoc values.

5. Implement section architecture with deliberate breaks.
- Enforce the selected section graph.
- Add at least two macro composition breaks after the hero.

6. Add interaction depth.
- Add at least one hero-level interaction moment.
- Add at least two component-level interactions for pages, one for small components.

7. Run quality gates and revise once.
- Do not stop at first draft quality.

## Hard Guards for Known Failure Modes
Text-heavy output:
- Keep hero headline <= 12 words.
- Keep hero supporting copy <= 24 words.
- Keep above-the-fold body copy to two short blocks maximum.
- Convert long explanations into cards, bullets, metrics, or visual modules.

Section architecture repetition:
- Treat each concept as a unique section graph, not a palette variation.
- Do not repeat the same section order across concepts.
- If generating multiple concepts, no duplicate section graph ids.

Structural monotony:
- Do not use the same hero composition more than once across concepts.
- Do not run three consecutive sections with the same container style (for example: card-grid, card-grid, card-grid).
- Add at least one full-bleed or off-grid section in each concept.

Readability regressions:
- Reject low-contrast text and clipped typography.
- Reject blur/noise effects that reduce legibility.
- Reject decorative layers that obscure content.

Generic defaults:
- Do not default to Inter/Roboto/Arial/system as primary identity unless explicitly requested.
- Do not default to purple-pink-blue neon gradients.
- Do not default to generic "SaaS hero + three cards + CTA" structure.
- Do not use fake terminal aesthetics unless context explicitly justifies it.

Reliability regressions:
- Do not ship broken scroll behavior.
- Do not hide critical content behind fixed overlays.
- Do not ship obvious horizontal overflow on mobile unless intentionally designed and controlled.

## Section Graph Library (Use as Families, Not Templates)
Use one graph as a structural spine, then style it uniquely.

- G1 Narrative Split: Hero split -> Capability rail -> Workflow strip -> Proof grid -> Pricing -> Footer.
- G2 Editorial Flow: Manifesto hero -> Sticky chapter sections -> Model table -> Membership CTA -> Footer notes.
- G3 Cockpit Stack: Command hero -> Status panels -> Inspector rail -> Queue/process timeline -> Pricing dock -> Footer.
- G4 Gallery First: Media hero -> Collection mosaic -> Detail spotlight -> Compare slider -> CTA bar -> Footer.
- G5 Poster Web: Typographic hero -> Framed statement blocks -> Feature ribbons -> Offer slab -> Footer tape.
- G6 Neo Utility: Hard-edge hero -> Utility matrix -> Constraint/protocol section -> Feature ledger -> Pricing card wall.
- G7 Quiet Luxury: Minimal hero -> Signature benefit band -> Refined cards -> Testimonial quote plane -> Pricing strip.
- G8 Story Scroll: Hero scene -> Sticky storytelling sequence -> Key metrics board -> Offer reveal -> Footer.
- G9 Swiss Data: Typographic masthead -> Data rows -> Comparison matrix -> Spec blocks -> CTA row -> Footer.
- G10 Hybrid Canvas: Asymmetric hero -> Floating module cluster -> Tooling/process section -> Proof collage -> Pricing.

## Macro Composition Breaks (Required)
Each concept must include at least two of these:
- Dense to sparse transition (or sparse to dense).
- Grid to freeform overlap transition.
- Light to dark surface transition (or inverse).
- Static section followed by motion-led section.
- Text-led section followed by media-led section.
- Orthogonal layout followed by diagonal or layered composition.

## Interaction Modes
Select one primary mode per concept. For multi-concept outputs, do not reuse the same primary mode.

- I1 Kinetic typography hero.
- I2 Scroll scene transitions (sticky sections or progressive reveals).
- I3 Interactive comparison surface (tabs, segmented control, or switchable views).
- I4 Procedural background motion (subtle and readable).
- I5 Cursor-responsive accent behavior (restrained, never distracting).
- I6 Card choreography (stagger, parallax, or progressive detail reveal).
- I7 Data-panel live state feel (status, counters, or activity rhythm).

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
- Use one spatial thesis consistently.
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
- Enforce unique fingerprints across concepts:
- Section graph id
- Hero composition type
- Primary interaction mode
- Typography family
- Palette temperature
- Section rhythm
- If concepts are shown in one app, provide a lightweight, stack-appropriate concept switcher.

## Delivery Checklist
- Production-ready implementation that runs in the requested stack without manual fixes.
- Domain-specific copy (no placeholder or vague generic slogans).
- Visible focus styles and readable contrast.
- Desktop and mobile both polished.
- Scroll behavior verified end to end.
- One post-build refinement pass completed.

## Self-Critique Quality Gate (Score 0-2)
- Distinctiveness
- Section-graph uniqueness
- Layout originality
- Text economy
- Typography craft
- Interaction quality
- Accessibility and contrast
- Responsiveness
- Scroll and overflow reliability

If any score is below 2, revise before final output.

## Version-6 Mutation Axis: Section Graph Diversity
When the task asks for five routes (`/1` to `/5`), assign and enforce this exact section graph mapping:
- `/1` -> `G4`
- `/2` -> `G9`
- `/3` -> `G3`
- `/4` -> `G8`
- `/5` -> `G5`

Route-level diversity checks (fail and revise if any check fails):
- No two routes may share the same first three section types.
- No two routes may use the same hero composition class (split, masthead, command panel, poster, scene).
- Each route must include at least one explicit rhythm break that differs from every other route.
- Do not repeat identical mid-page module order across any two routes.

## Version-9 Mutation Axis: Interaction Depth
When the task asks for five routes (`/1` to `/5`), enforce this primary interaction mapping:
- `/1` -> `I6` (card choreography)
- `/2` -> `I3` (interactive comparison surface)
- `/3` -> `I7` (data-panel live state feel)
- `/4` -> `I2` (scroll scene transitions)
- `/5` -> `I1` (kinetic typography hero)

Interaction quality checks (fail and revise if any check fails):
- First fold must contain one clearly interactive control or state switch, not a static decoration.
- Every route must include at least three visible interaction affordances (`hover`, `focus`, `active`, or toggled state).
- At least one mid-page module per route must have a stateful switch that changes visible content.
- Any visible segmented control, tabs, or toggle must update nearby content and not be purely ornamental.
- Include reduced-motion fallback while preserving interaction clarity.
