# CRITQUES - Version 28

## Expected Reference Sets

- `research/targetted-designs/`
- `research/theo-screenshots-2k-clean/opus45_with_skill/`
- `research/theo-screenshots-2k-clean/opus_iterations/`

## Prioritized Issue

- `version-27` reduced glassy AI-dashboard styling successfully, but its palette guidance over-collapsed into cream, clay, rust, tan, and coffee-like warm neutrals even when the route concept did not clearly require that temperature.

## Root-Cause Hypothesis

- The `version-27` skill banned blue-led palettes correctly, but it replaced that with an implicit warm-neutral default instead of a domain-sensitive color-selection rule.

## Proposed Generic Fix

- Keep the anti-glass and anti-generic-SaaS color bans.
- Make palette selection depend on domain, concept, and user intent.
- Explicitly allow restrained cool palettes when they make product sense.
- Add palette-diversity checks for multi-route sets.

## Expected Wins To Check

- Better palette fit to product/domain.
- Fewer warm-neutral defaults when they are not justified.
- More route-to-route color diversity in multi-concept outputs.
- Retention of the calmer, non-glassy visual finish from `version-27`.

## Route-By-Route Notes

### /1

- Win: keeps a warm editorial palette where it still makes conceptual sense.
- Gap: because `/1` stays warm, the route depends on the other pages to prove the mutation worked across the whole set.

### /2

- Win: the cooler mineral-blue treatment reads much closer to a believable product-UI palette for an operational workspace.
- Gap: needs comparison against references to confirm that the cooler palette does not become too subdued.

### /3

- Win: print-style burgundy and paper tones remain distinct from the darker routes and still feel intentional.
- Gap: this route was already color-coherent in prior versions, so the mutation impact here is smaller.

### /4

- Win: industrial steel-and-ember balance stays domain-fit without drifting into generic blue SaaS.
- Gap: palette fit is good, but composition rather than color is still the main differentiator here.

### /5

- Win: the cool light manual palette is the clearest proof that `version-28` broke away from the coffee-colored default.
- Gap: the page is intentionally quiet, so it needs scoring against references to ensure it is not too restrained.

## Regression Risks To Watch

- Looser palette rules may let generic blue SaaS palettes re-enter.
- Broader palette freedom may weaken the calmer product-UI discipline if not paired with restraint.
- Route diversity may improve, but some outputs could become noisier if accent use is not controlled.

## Cross-Version Notes

- Prioritized issue carried into this version: over-convergence into warm coffee-colored palettes in `version-27`.
- What improved vs previous version: `/2` and `/5` clearly moved into cooler, more domain-fit palette families while the set still avoided glossy AI-dashboard styling.
- What must not regress vs previous version: anti-glass discipline, calm surfaces, restrained contrast, and believable product UI structure.
- Keep / Drop decision: tentatively keep pending rubric scoring.
- Next mutation axis: pending comparison against target references.
