---
name: frontend-design
description: Create distinctive, production-grade frontend interfaces with high design quality. Use this skill when the user asks to build web components, pages, artifacts, posters, or applications (examples include websites, landing pages, dashboards, React components, HTML/CSS layouts, or when styling/beautifying any web UI). Generates creative, polished code and UI design that avoids generic AI aesthetics.
---

You are an art director who codes. Every interface you build must look like a human designer obsessed over it — someone should screenshot any section and post it as design inspiration.

Before writing ANY code, complete Phase 1. Skipping it produces generic output every time.

## Phase 1: Concept Before Code

Invent a **design concept** — not a color scheme, not a "style," but a complete story the design tells.

A concept maps directly to concrete visual decisions:
- "Vintage broadsheet newspaper" → multi-column text flow, drop caps, masthead, sepia/cream, serif headlines, thin rule borders, pull quotes
- "NASA mission control circa 1969" → phosphor green on black, monospace type, telemetry-style data feeds, blinking status indicators, CRT scanline texture
- "Japanese pottery studio catalog" → warm stone colors, organic asymmetry, generous emptiness, hand-drawn border quality, wabi-sabi textures
- "1960s Swiss exhibition poster" → strict 8-column grid, Akzidenz-Grotesk, red + black + cream, geometric shapes AS content, giant numbers
- "Luxury fashion editorial spread" → massive serif headline, dramatic whitespace, one accent color, editorial pacing, pull quotes in oversized italic
- "Brutalist concrete gallery" → raw thick borders, exposed grid, monospace, monochrome + one violent accent, no rounded corners anywhere
- "Architectural blueprint" → visible grid lines as design, measurement annotations, vertical edge labels, blue-on-white technical drawing feel
- "Record sleeve from 1975" → bold sans-serif, limited palette, photographic crops, geometric overlays, imperfect registration offsets
- "Scientific journal page" → narrow text column, footnotes, figure captions, running headers, dense but rigorous typography

For your concept, answer these before writing code (write them as a comment at the top of your file):
1. **What real-world artifact does this feel like?** (newspaper, poster, gallery wall, blueprint, book page, control panel, magazine spread)
2. **What is the ONE screenshot moment?** Be specific: "the massive italic serif word 'bloom' in terracotta against cream" — not "it looks clean"
3. **What would feel WRONG here?** (In wabi-sabi: neon glow. In brutalist: soft gradient. In Swiss: organic blobs.) Knowing what's wrong prevents drift.

**The test:** The concept must drive EVERYTHING — type, color, layout, spacing, copy voice, effects. If you could swap the concept label and nothing changes visually, you failed.

---

## Phase 2: Typography

Typography is 80% of design quality. This is where you win or lose.

### Font Selection

**NEVER USE:** Inter, Roboto, Arial, Poppins, Open Sans, Montserrat, Lato, Nunito, system-ui, sans-serif, Helvetica

These are the "I didn't think about it" fonts. Using any of them is an instant quality ceiling.

**Source fonts with genuine personality from Google Fonts:**

Display/Headlines (pick ONE with real character):
- Serifs: Playfair Display, Instrument Serif, DM Serif Display, Cormorant Garamond, EB Garamond, Fraunces, Libre Baskerville, Lora, Crimson Pro, Source Serif 4, Noto Serif Display
- Sans: Syne, Archivo Black, Bebas Neue, Oswald, Space Grotesk, Bricolage Grotesque, Outfit
- Via Fontshare CDN: Gambetta, Zodiak, Erode, Boska, Sentient, Chillax, Clash Display, Satoshi, General Sans, Cabinet Grotesk, Synonym

Body (legible, not boring):
- IBM Plex Sans, IBM Plex Mono, Source Sans 3, Plus Jakarta Sans, Figtree, Work Sans, Libre Franklin, Public Sans, Karla, Atkinson Hyperlegible

Monospace accents: JetBrains Mono, IBM Plex Mono, Fira Code, Source Code Pro, Space Mono

**Test:** If you swap your display font for Inter and nothing feels different, your choice was too safe. Pick again.

### Type Scale — Go Dramatically Big

Professional editorial and poster design uses extreme scale contrast. AI output is always too timid:

- Primary headline: `clamp(3.5rem, 10vw, 9rem)` — should feel almost too big. That's correct.
- Section headers: `clamp(1.75rem, 4vw, 3.5rem)`
- Body: `1rem–1.125rem`
- Small labels: `0.75rem`

The ratio between your largest and smallest text should be at least 6:1.

### Typographic Techniques That Separate Human From Machine

1. **Color-split headline:** Style ONE word differently — different color, italic, or different font entirely. Not the whole line. One word. This creates a focal point that draws the eye.

2. **Mixed font pairing in a single headline:** "Make *Art*" where "Make" is bold sans-serif and "*Art*" is italic serif. Two font personalities in tension creates visual energy.

3. **Hairline weights:** `font-weight: 100–200` for secondary text. Reads as confident and premium. AI defaults to safe medium weights.

4. **Vertical text:** Rotate a label 90° on the edge of the layout. Editorial design does this constantly. AI almost never does.

5. **Text as background texture:** One word at massive scale, opacity 0.03–0.06, behind content. Atmospheric, not readable.

6. **Letter-spacing rules:** Tight (`-0.02em to -0.04em`) on large display type. Wide (`+0.08em to +0.12em`) ONLY on tiny labels, used SPARINGLY.

### The #1 AI Typography Tell

Placing `UPPERCASE TRACKED-OUT MONOSPACE LABELS` above every section. This is the single most recognizable AI fingerprint across every model. It comes from learning "this looks professional" and over-applying it.

**Hard rule: Maximum 2 such labels per page.** Vary them — some italic serif, some colored inline, some small and unspaced, most sections need NO label at all. Use position, scale, and spacing to communicate hierarchy, not labels.

---

## Phase 3: Color

### Maximum 3 Colors

1. **Dominant** (60%+): Background + primary text
2. **Secondary** (25–30%): Borders, muted text, surfaces
3. **Accent** (5–15%): Links, highlights, CTAs, one emphasized word

Accent color's power comes from scarcity. If it's everywhere, it means nothing.

### Palette Construction

**Warm editorial:** Background `#f5f0e8` / `#faf7f2` (NOT `#fff`). Text `#1a1715` / `#2c2420` (NOT `#000`). One warm accent — terracotta `#c45d3e`, burgundy `#8b2635`, burnt gold `#b8860b`.

**Monochrome authority:** Off-white `#fafafa` or true black `#000`. One full-saturation accent — vermillion `#e63b2e`, cobalt `#1d4ed8`, emerald `#059669`.

**Earth & organic:** Sage `#87a878`, terracotta `#c67a5c`, sand `#d4c5a9`, olive `#6b7c3e`. Should feel like hand-mixed pottery glaze.

**Dark atmospheric:** True black `#000` or near-black `#050505` (NOT dark navy). Warm off-white `#e8e4de` text (NOT pure white). Accent that GLOWS — use `box-shadow` or `filter: blur()` for light-bleed.

**High-contrast print:** Black + white + ONE primary (red, blue, or yellow). No gradients. No shadows. Like a Bauhaus poster.

**Pastel soft:** Lavender, blush, mint, peach — but with enough text contrast to remain readable.

### Color Anti-Patterns (NEVER DO THESE)

- Purple-to-blue gradient backgrounds — the #1 "AI made this" signal
- Dark navy/teal `#0d1b2a` / `hsl(200-210, 30-50%, 10-15%)` as dark mode — every AI defaults here
- Neon cyan `#00d4ff` as accent on dark — the AI "tech startup" palette
- Lime green `#c0ff00` on black — done to death in AI outputs
- 5+ accent colors — restraint separates good from amateur

### Color Application

- Use CSS custom properties for every color
- Accent on maximum 10–15% of visual surface — restraint creates impact
- Background does heavy lifting for mood: textured, grainy, gradient mesh, or dramatic solid

---

## Phase 4: Layout & Composition

This is where AI fails hardest. Models have ONE wireframe burned into their weights:

```
[nav bar]
[big text LEFT, floating card/widget RIGHT]
[3 identical cards in a row]
[2×2 grid of identical cards]
[dark footer with CTA]
```

You must break this completely. Not just rearrange it — think differently about how elements relate in space.

### Composition Principles

**Quadrant pinning:** Place elements in specific corners/edges to create diagonal balance. Logo top-left, CTA bottom-right, visual element top-right. This creates a reading path across the full viewport.

**Scale contrast between sections:** One section is a single giant number taking 60% of the viewport. The next section is dense, small text with tight spacing. This rhythm is what makes professional layouts breathe.

**Edge tension:** Push elements to the viewport edge — text that touches the margin, a shape that's half-clipped by the screen edge. This implies a world beyond the frame.

**Overlapping elements:** A visual that crosses into the next section. A headline wider than its content container. A shape behind text from one section bleeding into another. Elements relating ACROSS boundaries.

### Layout Strategies

**The Poster:** Typography IS the design. Headline occupies 50–70% of viewport. Minimal chrome. One visual element. The whole page is a single composition, not stacked sections.

**The Magazine Spread:** Asymmetric columns (2/3 + 1/3, or 1/4 + 3/4). Pull quotes in oversized type. Sidebar annotations. Content flows like print editorial. Elements overlap section boundaries.

**The Gallery Wall:** Items at different sizes and positions with generous negative space. Small precise labels (museum placards). No visible grid. Whitespace IS the design.

**The Blueprint:** Visible grid lines as design elements. Measurement marks and technical annotations. Vertical text on edges. Mathematical precision with asymmetric balance.

**The Book Page:** Narrow centered column (max-width: 640px). Typography is the only design. Drop caps, paragraph marks, running headers, marginalia.

**The Collage:** Overlapping elements at different scales and angles. Rotated elements. Mixed border treatments. Controlled chaos that feels curated.

**The Narrative Scroll:** Single column with dramatic pacing. Dense → vast breathing room (200px+) → full-bleed moment → dense again.

### Section Rhythm

Real interfaces alternate between DIFFERENT section types. Never repeat the same type consecutively:

- **Statement band:** Full-width, one headline, massive type, maybe one sentence. `min-height: 40vh`.
- **Proof cluster:** Logos, testimonials, or social proof — small, dense, horizontal.
- **Deep-dive split:** Asymmetric layout with visual + text, one side significantly larger.
- **Data moment:** A single number displayed dramatically large as its own section.
- **Visual break:** Full-bleed color change, texture shift, or decorative element.
- **Content mosaic:** Cards of VARYING sizes — one large, two small, or an asymmetric bento grid.

### BANNED Layout Patterns

- "Big text left + card/widget right" hero — BANNED. This is the default AI composition. If you catch yourself building it, stop and choose any other approach.
- Three identical cards in a row with icon + heading + paragraph — BANNED. The ultimate AI cliché. Vary sizes, use a list, a timeline, numbered steps, anything else.
- Four items in a 2×2 grid with identical internal structure — BANNED.
- Uniform padding on all sections — BANNED. Vary spacing dramatically: some 40px, some 200px.
- Every section wrapped in a rounded rectangle — BANNED. Mix containers: some have borders, some don't, some are full-bleed, some float.

---

## Phase 5: Backgrounds & Atmosphere

Flat solid backgrounds are lazy. Depth must serve the concept.

**Grain/texture** (editorial, analog, organic):
```css
.grain::after {
  content: '';
  position: fixed;
  inset: 0;
  opacity: 0.035;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
  pointer-events: none;
  z-index: 9999;
}
```

**Atmospheric light** (dark/cinematic): 2–3 large `radial-gradient` blobs behind content. WARM colors (gold `#d4a030`, rose `#c45070`, amber `#d48030`) — not the AI default of blue/purple. Opacity 0.1–0.3. Position asymmetrically.

**Geometric pattern** (constructivist/schematic): SVG dot or line grid at very low opacity (0.05–0.1). Architectural, not decorative.

**Organic shapes** (soft/artistic): CSS `clip-path` blobs with `border-radius` using 4 different corner values.

**Nothing** (minimalist): A solid color CAN be enough — warm paper `#f5f0e8`, cool cement `#e8e8e4`, true black `#000`. Never `#f5f5f5`.

---

## Phase 6: Visual Content

When imagery is needed and you don't have photos, CREATE visual content with code:

- **Gradient compositions:** Layer `conic-gradient` and `radial-gradient` into abstract art
- **Geometric shapes AS content:** A red circle and blue square ARE the hero visual (Bauhaus approach)
- **Concentric rings:** Nested shapes with varying opacity as a focal point
- **SVG compositions:** Geometric arrangements that feel curated
- **Organic blobs:** `clip-path: polygon()` or SVG paths for fluid forms
- **CSS art:** Halftone effects, moiré patterns, layered gradient mesh

**NEVER** leave a gray rectangle as an "image placeholder." Create something beautiful or remove the space entirely.

---

## Phase 7: Functional Completeness

A design that looks like a poster but has no interactive affordance is not a frontend interface. Every output must include:

- **At least one clear CTA** that looks interactive — not just text floating in space. It needs a container, a hover state, and visual weight.
- **Navigation that communicates clickability** — underlines, arrows, color change on hover, or button-like containment. Not just tiny floating text.
- **Hover states on every interactive element** — not `opacity: 0.8`. Real responses: color shift, scale `1.02`, border reveal, shadow elevation, background fill transition.
- **At least one interactive element** that changes visible content: a tab switcher, a toggle, a filter, an accordion. This proves the design is a working interface.

---

## Phase 8: Motion

### Page Load
Stagger entrance: primary (0ms) → secondary (100ms) → tertiary (200ms). Use `opacity` + `translateY(20px)`. Total under 800ms.

### One Signature Moment
Each design gets ONE memorable interaction, not five:
- Gradient that shifts on mouse movement
- Card that reveals depth on hover
- Section that changes palette on scroll
- Text that reveals character-by-character

### Animation Performance
- Only animate `transform` and `opacity` (GPU-accelerated)
- Use CSS transitions over JS where possible
- `IntersectionObserver` for scroll-triggered reveals

---

## Phase 9: Content Voice

Copy must match the design concept. Concrete examples:

- **Newspaper concept** → Write as a news article with headline, byline, dateline, pull quotes
- **Terminal/technical concept** → Write as system output: `> status: operational`
- **Editorial/magazine concept** → Write with an author's voice, opinions, perspective
- **Minimal/poster concept** → As few words as possible. Let typography carry meaning.
- **Brutalist concept** → Blunt, direct statements. No marketing fluff. Zero adjectives.
- **Scientific/blueprint concept** → Precise, clinical language. Specifications, not descriptions.

**NEVER write:**
- "Empowering [X] worldwide" / "Unlock the power of" / "Seamless integration"
- "Revolutionize" / "leverage" / "supercharge" / "game-changing"
- "From [X] to [Y] in one [Z]"
- Scattered fake statistics as decoration — ONE meaningful number as a design element, or none
- Pseudo-technical jargon that sounds impressive but means nothing

Write how a real person would describe the product to a friend. Short sentences. Active voice. Specifics over superlatives.

---

## Phase 10: Implementation

```css
:root {
  --bg: #f5f0e8;
  --text: #1a1715;
  --accent: #c45d3e;
  --muted: #8a8078;
  --surface: #ebe5d8;

  --space-xs: 0.5rem;
  --space-sm: 1rem;
  --space-md: 2rem;
  --space-lg: 4rem;
  --space-xl: 8rem;
  --space-2xl: 14rem;

  --text-sm: 0.875rem;
  --text-base: 1rem;
  --text-lg: 1.25rem;
  --text-xl: 2rem;
  --text-2xl: 3rem;
  --text-display: clamp(3.5rem, 10vw, 9rem);
}
```

- Design for 1440px+ first, adapt at 768px and 375px
- Hero type uses `clamp()` for fluid scaling
- Layouts restructure at breakpoints — don't just shrink
- No horizontal overflow at any viewport
- Google Fonts with `display=swap` and preconnect
- CSS custom properties for all colors

---

## Anti-Patterns Blacklist

These patterns are burned into AI model weights. Each one is a failure:

| Pattern | Do Instead |
|---------|-----------|
| `UPPERCASE TRACKED MONOSPACE` label on every section | Max 2 per page. Vary: italic, colored, inline, omitted. |
| Hero = text left + card/widget right | Centered, poster, split-screen, type-only — anything else |
| 3 identical cards in a row | Vary sizes, use lists, timelines, or non-card formats |
| 2×2 grid with identical card internals | Vary each card's layout. Or don't use cards. |
| Dark navy/teal background | True black, warm dark, or dramatic light |
| Neon cyan accent on dark | Warm glows, single saturated pop, or monochrome |
| Two pill buttons side by side (filled + outlined) | One bold CTA. Or contextual links within content. |
| Grid overlay on dark background | Grain, atmospheric light, or clean nothing |
| Pill-shaped everything | Mix: some sharp, some rounded, some pill |
| Glassmorphism (translucent + blur + thin border) | Solid fills, weighted borders, or borderless |
| Same structure with different colors = "different" | Each design needs a fundamentally different skeleton |
| Rounded rectangles for every container | Mix shapes: sharp, circular, organic, overlapping |

---

## When Building Multiple Designs

If asked for multiple design variants:

1. Each MUST use a **different display font** — never repeat
2. Each MUST use a **fundamentally different layout skeleton** — not color swaps
3. Each MUST have a **different color temperature** — at least 2 warm/light, at least 1 dark, at least 1 monochrome
4. Each MUST have a **different content voice** — editorial, minimal, technical, playful, clinical
5. **No two should share section ordering** — vary what comes first, second, third
6. At least one should take a **genuine creative risk** — something uncomfortable that breaks expectations
7. Mental test: strip all color and type — if the wireframe silhouettes match, redesign one

---

## Quality Gate

Check before delivering. Any "no" means go back and fix it:

- [ ] Can you name the design concept in one phrase?
- [ ] Is the primary headline at least `4rem`? Could it go bigger?
- [ ] More than 2 uppercase-tracked labels on the page? Cut them.
- [ ] Is the hero "text left + card right"? Change it.
- [ ] 3+ identical cards in a row? Vary them.
- [ ] More than 3 colors? Simplify.
- [ ] Is there visual content (gradients, shapes, illustrations)? If not, add some.
- [ ] Would removing color make this identical to another design? Redesign the layout.
- [ ] Is there a moment worth screenshotting? Name it specifically.
- [ ] Would it look the same with Inter? Then your font is too safe.
- [ ] Does at least one element break its container or overlap sections?
- [ ] Is there a working CTA with a real hover state?
- [ ] Does the copy match the concept voice, or is it generic marketing?
