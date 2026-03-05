# CRITQUES - Version 25

## Expected Reference Sets

- `research/targetted-designs/`
- `research/theo-screenshots-2k-clean/opus45_with_skill/`
- `research/theo-screenshots-2k-clean/opus_iterations/`

## Route-by-Route Critique

### /1

- Strengths: Strong newspaper-inspired typography and restrained palette; clear visual identity and readable mobile flow.
- Gaps vs expected: Desktop composition is mostly one hero panel plus a compact lower strip; limited section progression and weak narrative depth.
- Action items: Require at least two additional post-hero modules (proof/data + conversion band) with explicit spacing rhythm shifts.

### /2

- Strengths: Distinct mission-control atmosphere and usable model-selector interaction.
- Gaps vs expected: Hero headline overflows on mobile; page depth is shallow after first fold with minimal secondary storytelling.
- Action items: Enforce mobile headline clamp/line-break rules and add one mid-scroll explanatory section plus one closing CTA section.

### /3

- Strengths: Best macro composition in this set; clear Swiss-poster language and good interaction legibility.
- Gaps vs expected: Still relatively short and functionally narrow below hero.
- Action items: Add one evidence/proof block and one richer interaction module after current workflow switch.

### /4

- Strengths: Cohesive gallery aesthetic and readable FAQ module.
- Gaps vs expected: Hero text clipping on mobile ("Everyst..."); composition remains primarily first-screen with limited vertical cadence.
- Action items: Add responsive text overflow guards and extend structure with an additional below-fold section.

### /5

- Strengths: Strong noir mood and pricing CTA clarity.
- Gaps vs expected: Mobile hero text clipping ("fron"); page collapses into hero + one pricing block.
- Action items: Add responsive headline constraints and enforce multi-section depth minimum.

## Cross-Version Notes

- Prioritized issue carried into this version: preserve high distinctiveness while improving section graph diversity.
- What improved vs previous version: route visual identities are still varied and non-generic.
- What regressed vs previous version: below-fold depth dropped; multiple routes behave as hero-only or hero-dominant pages with weak narrative pacing.
- Rubric (v25): Distinctiveness 1.9, Hero composition 1.7, Section rhythm 1.1, Typography craft 1.8, Text economy 1.7, Interaction quality 1.2, Visual finish 1.6, Accessibility/contrast 1.3, Mobile quality 1.1, Opus-target similarity 1.3. Average: 1.47.
- Keep / Drop decision: Drop mutation as-is (regression on structural depth and mobile robustness).
- Next mutation axis: 2 (`Section graph diversity`) with explicit quantitative depth gates and responsive overflow constraints.
