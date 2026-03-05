---
name: frontend-design
description: Create distinctive, production-grade frontend interfaces with high design quality. Use this skill when the user asks to build web components, pages, artifacts, posters, or applications (examples include websites, landing pages, dashboards, React components, HTML/CSS layouts, or when styling/beautifying any web UI). Generates creative, polished code and UI design that avoids generic AI aesthetics.
---

Build distinctive, production-grade frontend interfaces. Every output must feel intentionally designed — like a human designer studied a specific design movement and committed to it fully.

## Phase 1: Concept Invention (Do This Before ANY Code)

Before writing a single line of code, invent a **design concept** — not just a color scheme.

A concept is a story the design tells. Examples of strong concepts:
- "Vintage newspaper announcing a product launch" → broadsheet columns, drop caps, masthead, sepia
- "NASA mission control monitoring a creative tool" → phosphor green terminal, telemetry feeds, command prompts
- "Japanese pottery studio catalog" → wabi-sabi textures, earthy warm tones, organic asymmetry, handmade feel
- "1960s Swiss poster for a tech product" → strict grid, Akzidenz-Grotesk, red/black/cream, geometric shapes AS content
- "Luxury fashion editorial spread" → massive serif type, dramatic whitespace, single accent color, editorial pacing
- "Brutalist concrete gallery" → raw borders, exposed grid, monochrome with one violent accent, heavy type

For each concept, answer:
1. **What real-world artifact does this page feel like?** (newspaper, gallery wall, control panel, magazine spread, film poster, architectural blueprint)
2. **What is the ONE visual element someone will screenshot?** (a massive typographic statement, an unusual illustration, a dramatic color moment, an unexpected layout)
3. **What emotion does this create?** (awe, calm, urgency, delight, sophistication, playfulness)

**CRITICAL**: The concept drives EVERYTHING — typography, color, layout, content voice, spacing, effects. If you can swap the concept name and nothing changes visually, you failed.

## Phase 2: Visual Identity System

### Typography — The Most Important Design Decision

Typography is 80% of design quality. Follow these rules:

**Font Selection:**
- NEVER use: Inter, Roboto, Arial, Poppins, Open Sans, Montserrat, Lato, Nunito, or system-ui defaults
- ALWAYS use fonts with genuine personality. Source from Google Fonts:
 - Display/Headlines: Playfair Display, Fraunces, Instrument Serif, DM Serif Display, Libre Baskerville, Syne, Cabinet Grotesk, Clash Display, General Sans, Satoshi, Switzer, Zodiak, Gambetta, Erode, Sentient, Boska, Chillax, Synonym, Archivo Black, Bebas Neue, Oswald, Bitter, Merriweather, Lora, Source Serif 4, Cormorant Garamond, Crimson Pro, EB Garamond, Noto Serif Display
 - Body: IBM Plex Sans, IBM Plex Mono, Source Sans 3, Karla, Outfit, Plus Jakarta Sans, Figtree, Geist (via CDN), Atkinson Hyperlegible, Work Sans, Libre Franklin, Public Sans
 - Monospace accents: JetBrains Mono, IBM Plex Mono, Fira Code, Source Code Pro, Space Mono
- NEVER repeat the same font across multiple concepts in a set. Each concept = different type personality.

**Type Scale — Use Extreme Contrast:**
- Hero headlines: 4rem–8rem (64px–128px). Go BIG. Bigger than you think is right.
- Section titles: 2rem–3rem
- Body: 1rem–1.125rem
- The ratio between hero and body should be at least 5:1. This dramatic scale is what separates professional design from generic output.

**Typographic Techniques:**
- Color a single word in the headline with the accent color (e.g., "Create <span style='color: #ff3d00'>impossible</span> images")
- Use italic as a design element, not just emphasis — italic serif words as visual anchors
- Mix serif headlines with sans-serif body (or vice versa) for tension
- Letter-spacing: tight (-0.02em) on large display type, generous (+0.1em) ONLY on small labels sparingly
- RESTRICT all-caps tracked-out labels to maximum 2–3 per page. This is the single biggest "AI-generated" tell — overusing `UPPERCASE SPACED MONOSPACE LABELS` everywhere

### Color — Restraint Over Abundance

**The Rule of Three:** Maximum 3 colors per concept. One dominant, one secondary, one accent.

**Palette Strategies (pick one per concept):**
- **Monochrome + one pop**: All grays/blacks/whites with a single vivid accent (vermillion, electric lime, cobalt)
- **Warm editorial**: Cream/ivory `#f5f0e8` background, near-black `#1a1a1a` text, one warm accent (terracotta, burgundy, gold)
- **Cool minimal**: Off-white `#fafafa`, slate gray text, one cool accent (teal, indigo, emerald)
- **Dark atmospheric**: True black `#000` or very dark `#0a0a0a`, warm gray text `#a0a0a0`, accent with glow effect
- **Earth tones**: Sage, terracotta, sand, olive — warm and organic
- **High contrast print**: Pure black + pure white + one primary color (red, blue, yellow) — Bauhaus-inspired
- **Pastel soft**: Lavender, blush, mint, peach — with enough contrast to remain readable

**NEVER default to:**
- Purple-to-blue gradients (the #1 AI cliché)
- Dark navy/teal `hsl(200-210, 30-50%, 10-15%)` as the "safe dark mode" — if you use dark, go TRUE black or warm dark
- The same palette twice in a multi-concept set

**Color application:**
- Use CSS custom properties for all colors
- Apply accent color to maximum 10-15% of the visual surface — restraint creates impact
- Background should do heavy lifting for mood (textured, grainy, gradient mesh, or dramatic solid)

### Backgrounds & Atmosphere — Never Flat

Every page needs visual depth. Pick approaches that match the concept:

- **Gradient mesh / aurora**: Multiple radial gradients with `mix-blend-mode` for organic color blending
- **Noise/grain texture**: CSS `background-image` with inline SVG noise filter — adds analog warmth
- **Geometric patterns**: Repeating SVG patterns (dots, lines, grids) at low opacity
- **Atmospheric glow**: Large, soft `radial-gradient` blobs behind hero content — creates "lit from within" effect
- **Film grain overlay**: `::after` pseudo-element with noise texture at 3-5% opacity
- **Grid/dot paper**: Subtle grid lines or dot matrix as background texture
- **Concentric shapes**: Circles, rings, or geometric forms as the primary visual element instead of photos

Technique for grain overlay:
```css
.grain::after {
  content: '';
  position: fixed;
  inset: 0;
  opacity: 0.04;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
  pointer-events: none;
  z-index: 9999;
}
```

## Phase 3: Layout Architecture — Break The Template

This is where most AI-generated designs fail. They all use the same wireframe: `hero (text left + card right) → 3-column features → pricing CTA`. You MUST NOT do this.

### Layout Archetypes (use a DIFFERENT one for each concept in a set)

1. **Full-Bleed Cinematic**: Massive full-viewport hero with oversized typography, content reveals on scroll, dramatic section transitions
2. **Editorial Column**: Asymmetric 2-column or 3-column layout like a magazine spread, text wrapping, pull quotes, sidebar annotations
3. **Swiss Grid**: Strict modular grid (8-column or 12-column), content placed with mathematical precision, lots of negative space
4. **Bento Box**: Asymmetric card grid where different-sized cards fit together (inspired by Apple and Linear), 2/3 + 1/3 splits, varying heights
5. **Scroll Narrative**: Single-column storytelling with dramatic pacing — dense section → breathing room → full-bleed moment → dense again
6. **Split Screen**: Two distinct halves (vertical split) with contrasting content or colors
7. **Dashboard-as-Marketing**: Product UI screenshots/mockups AS the primary visual, surrounded by minimal marketing copy
8. **Broadsheet/Newspaper**: Multi-column text flow, mastheads, pull quotes, drop caps, treating the page like printed media

**Layout Rules:**
- NEVER use the same hero layout more than once in a concept set
- NEVER default to "big text left + widget card right" — this is the Codex default and must be avoided
- Include at least one full-width moment that breaks the content container
- Vary information density: follow a dense section with a sparse one
- Use generous vertical spacing between major sections: 120px–200px padding, not uniform 60px

### Section Rhythm — Avoid the Card Wall

Real websites alternate between different section types:
- **Statement band**: Full-width, one headline, massive type, maybe one sentence. 40vh+ height.
- **Proof section**: Logos, testimonials, social proof — small, dense, horizontal
- **Feature deep-dive**: Asymmetric layout with product mockup + text
- **Data moment**: A single impressive number displayed dramatically large
- **Visual break**: Full-bleed color change, texture shift, or decorative element
- **Content grid**: Bento cards, BUT varying sizes — never 3 identical cards in a row

**BANNED patterns:**
- Three identical cards in a row with icon + heading + paragraph (the ultimate AI cliché)
- Four model/feature cards in a 2×2 grid with the same structure
- Every section being a rounded rectangle with padding
- Ending every page with the same "dark background + CTA button" block

## Phase 4: Visual Content & Illustrations

For an interface that involves visual products (image tools, design tools, creative tools), SHOW visual content:

- **Gradient art**: Create beautiful CSS gradient compositions as placeholder artwork — `conic-gradient`, `radial-gradient` compositions that look intentional
- **SVG illustrations**: Simple geometric shapes, abstract compositions, or decorative elements that match the design concept
- **Geometric shapes as content**: A red circle, blue square, yellow triangle — shapes CAN BE the design (Bauhaus approach)
- **Concentric rings/circles**: Nested shapes with varying fills as hero visuals
- **Abstract blob shapes**: CSS `clip-path` or SVG for organic, fluid shapes
- **Product UI mockups**: Build miniature UI representations showing what the product does

NEVER leave large empty rectangles as "image placeholders." Either create real visual content with CSS/SVG or don't include the placeholder at all.

## Phase 5: Motion & Interaction

### Animation Principles
- **Page load**: Orchestrate a staggered entrance — hero text → hero visual → first section, with 50-150ms delays between elements
- **Scroll-triggered reveals**: Elements fade/slide in as they enter viewport using `IntersectionObserver`
- **Hover states**: Every interactive element needs a considered hover — not just `opacity: 0.8` but actual transformation (scale, color shift, shadow elevation, border reveal)
- **One signature animation**: Each concept should have ONE memorable motion moment (a gradient that shifts, text that reveals character by character, an element that follows the cursor, a section that transforms on scroll)

### Interaction Design
- Include at least one interactive element that changes visible content (tab switcher, toggle, filter, comparison slider)
- Interactions should demonstrate product VALUE, not just visual novelty
- Keep interaction copy concise: labels should communicate what changes when selected

## Phase 6: Content & Copywriting Voice

The copy must match the design concept:
- **Newspaper concept** → Write as a news article with a headline, byline, and pull quotes
- **Terminal concept** → Write as command output: `> [OK] System initialized`
- **Editorial concept** → Write as a magazine feature with an author voice
- **Minimal concept** → Use as few words as possible, let typography carry meaning
- **Brutalist concept** → Direct, blunt statements. No marketing fluff.

**NEVER:**
- Use the same body copy across multiple concepts (each needs unique value propositions)
- Use generic SaaS phrases: "Empowering teams worldwide", "Unlock the power of", "Seamless integration"
- Sprinkle fake statistics everywhere (42s, 99.7%, 13k+) — if you use a number, make it ONE dramatic number displayed as a design element, not scattered stat badges
- Label internal concept names in the UI ("CONCEPT ONE · PRISM FORGE") — the user doesn't care about your naming

## Phase 7: Implementation Quality

### CSS Architecture
```css
:root {
  /* Define ALL colors as custom properties */
  --color-bg: #0a0a0a;
  --color-text: #e5e5e5;
  --color-accent: #ff3d00;
  --color-muted: #666;

  /* Define spacing scale */
  --space-xs: 0.5rem;
  --space-sm: 1rem;
  --space-md: 2rem;
  --space-lg: 4rem;
  --space-xl: 8rem;
  --space-2xl: 12rem;

  /* Type scale */
  --text-xs: 0.75rem;
  --text-sm: 0.875rem;
  --text-base: 1rem;
  --text-lg: 1.25rem;
  --text-xl: 1.5rem;
  --text-2xl: 2rem;
  --text-3xl: 3rem;
  --text-display: clamp(3rem, 8vw, 7rem);
}
```

### Responsive Design
- Design for 1440px+ first, then ensure it works at 768px and 375px
- Hero typography should use `clamp()` for fluid scaling
- Layouts should restructure (not just shrink) at breakpoints
- Test that no horizontal overflow occurs at any viewport

### Performance
- Use CSS for effects wherever possible (gradients, shadows, blend modes) over JavaScript
- Load Google Fonts with `display=swap` and preconnect
- Keep animation to `transform` and `opacity` for GPU acceleration
- Lazy-load below-fold content with `IntersectionObserver`

## Anti-Patterns Blacklist (Instant Failures)

These patterns MUST be avoided. They are the fingerprints of generic AI output:

| Pattern | Why It's Bad | What To Do Instead |
|---------|-------------|-------------------|
| `UPPERCASE SPACED MONOSPACE` labels on every section | Dead giveaway of AI generation | Use varied label styles: italic, colored, inline, or omit entirely |
| Hero = big text left + widget/card right | Every AI model defaults to this | Use centered, full-bleed, split-screen, or asymmetric heroes |
| 3 identical feature cards in a row | Cookie-cutter, zero personality | Vary card sizes, use bento grids, or use non-card formats entirely |
| Dark navy-teal background as "dark mode" | Overused AI color choice | Use true black, warm dark, or dramatic light backgrounds |
| Same wireframe skeleton with different colors | This is not "5 different designs" | Each concept needs a fundamentally different layout architecture |
| Rounded rectangles for everything | Makes the page feel like a wireframe | Mix shapes: sharp corners, circles, organic forms, overlapping elements |
| Two CTA buttons side-by-side (filled + outlined) | Predictable, lacks hierarchy | Use a single bold CTA, a sticky CTA, or contextual CTAs within sections |
| Model/feature list as the hero visual | Boring — lists aren't visual | Use abstract art, typography, illustrations, or product UI as hero visual |
| Fake scattered statistics (42s, 99.7%, 13k+) | Feels generically "impressive" | Use ONE real number displayed dramatically, or skip stats entirely |
| Same body copy across concepts | Lazy, defeats the purpose | Write unique copy that matches each concept's voice and personality |
| Pricing section as dark full-width footer | Every AI does this identically | Integrate pricing into the narrative, use cards, make it part of the design |

## Multi-Concept Sets

When building multiple designs (e.g., /1 through /5):

1. **Each concept MUST have a different layout archetype** — not just different colors
2. **Each concept MUST use different fonts** — never repeat a display font
3. **Each concept MUST have a different color temperature** — warm, cool, monochrome, earthy, high-contrast
4. **Each concept MUST have a different content voice** — editorial, minimal, technical, playful, luxury
5. **At least 2 concepts must be light-themed, at least 1 must be dark-themed** — don't default to all-dark
6. **No two concepts should have the same section order** — vary what comes after the hero
7. Before finalizing, strip color and type from all concepts mentally — if the wireframes look the same, redesign one

## Quality Gates (Check Before Delivery)

- [ ] Can you identify the design concept in one sentence? If not, the concept isn't strong enough.
- [ ] Is the hero typography at least 4rem? If not, go bigger.
- [ ] Are there more than 3 uppercase spaced-out labels on the page? If yes, reduce.
- [ ] Does the layout use the "text left + card right" hero? If yes, change it.
- [ ] Are there 3+ identical cards in a row? If yes, vary them.
- [ ] Is there visual content (gradients, shapes, illustrations)? If not, add some.
- [ ] Would removing the color scheme make this look identical to another concept? If yes, redesign the layout.
- [ ] Does every section feel intentional, or are some just filler? Remove filler.
- [ ] Is there at least one "wow" moment — something worth screenshotting? If not, add one
