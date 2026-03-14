---
name: frontend-design
description: Create distinctive, production-grade frontend interfaces with high design quality. Use this skill when the user asks to build web components, pages, artifacts, posters, or applications (examples include websites, landing pages, dashboards, React components, HTML/CSS layouts, or when styling/beautifying any web UI). Generates creative, polished code and UI design that avoids generic AI aesthetics.
---

Design for humans first. The output should feel product-designed, task-oriented, and specific to the interface's job. Avoid the default AI visual language even when it would be faster to generate.

If the request is for a dashboard, admin, workspace, settings area, analytics page, or any internal tool, default to a disciplined product UI instead of a poster-like composition.

## Core Standard

Build interfaces that feel normal in the best way:

- clear hierarchy
- predictable layout
- calm color usage
- readable data presentation
- functional interactions
- restrained visual treatment

Think in the direction of mature product teams: precise, sober, and intentional. Do not make the UI perform "premium" with decoration.

## Phase 1: Classify The Surface

Before writing code, decide which surface you are building:

1. Product UI
2. Landing page
3. Editorial / showcase surface
4. Dashboard

Use the surface type to control layout and styling decisions.

### Product UI defaults

Use these when the user asks for a dashboard or app-like interface:

- Use a normal app shell.
- Sidebar only when navigation depth truly needs it.
- Sidebar width should usually stay in the `240px` to `260px` range.
- Use solid backgrounds and simple separators.
- Use a real toolbar/header, usually `48px` to `56px` tall.
- Put the main work in the content area, not in decorative wrapper panels.
- Use sections with `20px` to `30px` padding.
- Prefer tables, lists, timelines, split panes, detail panels, and filters over decorative metric cards.

### Landing page defaults

- A landing page may use a hero, but it still needs normal section structure afterwards.
- Use recognizable section types: hero, proof, feature explanation, comparison, CTA.
- Do not invent strange dashboard-like shells for a marketing page.
- Do not fill the page with decorative copy blocks.

### Editorial / showcase defaults

- You may push typography and composition further here.
- Keep the interaction model obvious.
- Even in expressive work, avoid AI-default gradients, pill overload, and generic SaaS dark mode.

## Phase 2: Information Architecture Before Styling

Define the content hierarchy first:

1. What must be understood in five seconds?
2. What must be scanned quickly?
3. What requires detail on demand?
4. Which actions matter most?

Then map those answers to a normal structure.

### Recommended dashboard structure

Use this as the default mental model for data-heavy UI:

- app shell
- page header with title and primary actions
- filter / scope controls if needed
- summary row only if it earns its space
- primary work surface: table, timeline, board, chart with labels, detail split, or queue
- secondary context below or beside the main surface

Do not start with a hero panel. Do not add a right rail unless it carries real workflow value.

## Phase 3: Uncodixify Rules

If a choice feels like the easiest possible AI UI move, reject it and choose the cleaner option.

### Hard bans

- no oversized border radii; most UI should stay within `8px` to `12px`
- no pill-heavy buttons, tabs, filters, or badges
- no floating glass shells
- no frosted panels as the default visual language
- no soft blue-purple gradients used as taste replacement
- no generic dark SaaS composition
- no dashboard hero sections unless there is a real product reason
- no eyebrow labels above every section
- no tiny uppercase tracked labels as a default hierarchy device
- no decorative copy that explains how clean or focused the UI is
- no fake charts
- no donut charts unless the product specifically requires one
- no metric-card grid as the first instinct
- no dramatic shadows
- no glowing borders
- no transform-based hover choreography
- no sidebar brand block with a decorative logo tile unless the product identity requires it
- no nav badges, "live" pills, or ornamental counters unless they are functional
- no right-side schedule rail added just to fill space
- no repeated panel-on-panel-on-panel nesting

### Specific anti-patterns to avoid

- big text on the left plus a floating card on the right as the default hero
- three identical cards in a row with icon, heading, paragraph
- four-item `2 x 2` card grids with identical internal structure
- the same rounded rectangle repeated across sidebar, cards, buttons, and panels
- muted gray-blue text that weakens contrast
- premium dark mode that is really blue-black plus cyan
- section notes, helper blurbs, and mini-manifestos scattered everywhere
- trend text colored green/red without enough context
- status badges on every table cell
- quota and progress panels added without a real workflow reason

## Phase 4: Typography

Typography should feel like a product decision, not a template.

### Font direction

Avoid:

- `Inter`
- `Roboto`
- `Arial`
- `Segoe UI`
- `Trebuchet MS`
- generic safe default stacks as the main visual decision
- serif-plus-sans pairings used only to fake premium taste

Prefer clear sans families with some personality and strong data readability:

- `IBM Plex Sans`
- `Source Sans 3`
- `Public Sans`
- `Work Sans`
- `Karla`
- `Plus Jakarta Sans`

For dense data or code-like accents, pair with:

- `IBM Plex Mono`
- `JetBrains Mono`
- `Source Code Pro`

### Type rules

- Use normal headers: `h1`, `h2`, `h3`
- Avoid small uppercase labels above headings
- Body text should usually sit around `14px` to `16px`
- Keep line-height comfortable and contrast strong
- Use weight and spacing to create hierarchy, not decorative labels
- In product UI, one font family is usually enough

## Phase 5: Color

Colors should stay calm and should not fight the content.
Choose them according to the domain, artifact, and user intent of the interface you are building.

### Color selection comes from context first

Before choosing a palette, answer:

1. What domain is this for?
2. What should the product feel like: trustworthy, operational, playful, luxurious, technical, editorial, clinical, industrial?
3. What color family would feel wrong for this request?

If the user already implies a brand, market, product category, or visual tone, let that drive the palette.
Do not force warm neutrals, dark graphite, or any other family as a house style.

### Domain-sensitive palette direction

Use these as heuristics, not rigid themes:

- developer tools, infrastructure, enterprise, finance, or security: restrained neutrals, steel, slate, ink, mineral tones, with blue allowed when it supports clarity or trust
- healthcare, wellness, or education: clean light surfaces, soft greens, muted blues, or calm neutral combinations when appropriate
- creative tools, media, fashion, editorial, or culture: more directional color is allowed, including richer contrast or warmer and cooler statements depending on the concept
- industrial, logistics, hardware, or operations: charcoal, concrete, rust, safety orange, signal red, olive, or other utilitarian tones can make sense
- consumer, social, or playful products: brighter accents are acceptable if they still feel controlled and legible
- premium or minimal products: use restraint first, but let the palette fit the brand story rather than defaulting to beige or black

Blue is allowed when the domain supports it.
What is banned is generic AI-startup blue usage, not blue itself.

### Palette rules

- Use a restrained token set with clear roles: background, surface, border, text, muted, accent, danger, success
- Prefer colors that match the product domain and concept over any fixed favorite family
- If using dark mode, keep it muted and neutral rather than neon or glossy
- Accent color should be scarce and meaningful
- Favor strong text contrast over atmospheric haze
- Warm neutrals are one option, not the default
- Cool palettes are allowed when they fit the request, as long as they avoid the generic AI startup look

### Avoid

- blue-purple gradients
- cyan-on-navy startup palettes
- decorative radial glows
- five-accent-color palettes
- accent colors spread across every component

## Phase 6: Component Standards

Keep components straightforward and repeatable.

### Shell

- sidebar: fixed width, solid fill, border-right, no floating shell
- header: simple title, supporting actions, no decorative eyebrow
- content width: normal container or full app canvas depending on product need

### Buttons

- solid or bordered
- radius `8px` to `10px`
- no pill shapes
- no gradient fills

### Cards and panels

- use only when grouping helps comprehension
- radius `8px` to `12px`
- subtle border
- minimal shadow, if any
- do not wrap every section in a card

### Tabs

- simple underline or border indicator
- no pill tab bars
- no sliding background animation

### Forms

- label above input
- simple borders
- clear focus ring
- no floating labels

### Tables and lists

- left-aligned text
- clear headers
- simple row separators
- subtle hover only
- use badges sparingly
- show state with text first, color second

### Icons

- simple and consistent
- `16px` to `20px`
- no decorative icon chips unless needed for recognition

## Phase 7: Data Visualization And Human Readability

When the UI contains data, optimize for understanding before style.

### Prefer these patterns

- table plus filters
- grouped list with totals
- comparison rows
- timelines
- board columns when status flow matters
- split view with list on one side and detail on the other
- annotated charts with axes, labels, and real legends
- stat plus sentence context, instead of stat alone

### Use visual emphasis intentionally

- show one primary number only when it actually matters
- use bars, sparklines, or heatmaps only when they clarify change or distribution
- if a chart has no labels, it is probably decoration
- if a panel can be replaced by a sentence and a number, do that

### Bans for data surfaces

- no fake activity charts
- no donut plus percentage pairings without decision value
- no three-card KPI strip as the whole story
- no decorative "team focus" or "recent activity" prose blocks
- no dashboards that hide the main dataset below ornamental summary cards

## Phase 8: Layout Rhythm

Normal UI does not mean flat or boring. Create structure through hierarchy and contrast, not gimmicks.

### Do

- vary section density based on task importance
- let one main surface dominate the page
- use whitespace to separate jobs, not to look expensive
- align content to a clear grid
- keep spacing on a steady scale: `4 / 8 / 12 / 16 / 24 / 32`

### Do not

- center random blocks while other content hugs the edge
- alternate between unrelated alignment systems
- use dead space as fake sophistication
- overpad everything
- collapse mobile layouts into one long undifferentiated stack

## Phase 9: Motion

Motion should be quiet.

- keep transitions around `100ms` to `200ms`
- prefer color, border, background, and opacity changes
- avoid hover transforms by default
- avoid bouncy or theatrical motion
- use animation only when it improves orientation or feedback

## Phase 10: Mobile Behavior

Mobile should preserve the product structure, not merely stack desktop blocks.

- reduce columns carefully
- keep actions reachable
- turn secondary controls into segmented rows, menus, or drawers when needed
- protect tables from accidental overflow
- preserve heading hierarchy and spacing density
- avoid giant empty areas between sections

## Phase 11: Build Like A Designer Working From Real Components

- Prefer interfaces that look like they could have been assembled from thoughtful Figma components.
- Use familiar patterns and refine them instead of inventing novelty for its own sake.
- Replicate the discipline of strong product design systems: consistent borders, sizing, spacing, and interaction states.
- If a choice feels flashy but not useful, remove it.

## Phase 12: Final Review

Before finishing, check:

1. Does this look like a real product UI instead of an AI-generated dashboard?
2. Is the main task visible immediately?
3. Are the most important data relationships easy to scan?
4. Did I avoid eyebrow labels, decorative copy, fake charts, and floating shells?
5. Do the colors make sense for this domain, instead of reflecting a default house palette?
6. Are color, spacing, and radii restrained enough?
7. Would this still work if all decorative styling were reduced by half?

If any answer is no, simplify and tighten the interface.
