export interface VersionMeta {
  slug: string;
  number: number;
  hypothesis: string;
  mutationAxis: string;
  score: number | null;
  delta: string | null;
  verdict: "keep" | "drop" | "baseline";
  dimensions: Record<string, number> | null;
  screenshotPattern: "flat" | "subdirs" | "models";
  routes: number;
}

export const versions: VersionMeta[] = [
  {
    slug: "version-1",
    number: 1,
    hypothesis:
      "Foundational skill establishing anti-slop objective, pre-build workflow, token-first guidance, and interaction depth requirements.",
    mutationAxis: "Baseline",
    score: null,
    delta: null,
    verdict: "baseline",
    dimensions: null,
    screenshotPattern: "subdirs",
    routes: 5,
  },
  {
    slug: "version-2",
    number: 2,
    hypothesis:
      "Multi-model comparison run testing skill effectiveness across Opus 4.5, Opus 4.6, GPT-5.2, Gemini 3 Pro, Sonnet 4.5, and Composer Max.",
    mutationAxis: "Cross-model validation",
    score: null,
    delta: null,
    verdict: "baseline",
    dimensions: null,
    screenshotPattern: "subdirs",
    routes: 5,
  },
  {
    slug: "version-13",
    number: 13,
    hypothesis:
      "Resetting from accumulated drift with a clean vertical isolation to establish a reliable rubric-scored baseline.",
    mutationAxis: "Isolation reset",
    score: 11.8,
    delta: null,
    verdict: "keep",
    dimensions: {
      distinctiveness: 1.4,
      heroComposition: 1.3,
      sectionRhythm: 1.1,
      typographyCraft: 1.3,
      textEconomy: 1.3,
      interactionQuality: 0.8,
      visualFinish: 1.2,
      accessibility: 1.1,
      mobileQuality: 1.0,
      opusTargetSimilarity: 1.3,
    },
    screenshotPattern: "flat",
    routes: 5,
  },
  {
    slug: "version-14",
    number: 14,
    hypothesis:
      "Forcing explicit section-graph depth requirements will reduce short-page outputs and improve section rhythm.",
    mutationAxis: "Section graph diversity",
    score: 12.0,
    delta: "+0.2",
    verdict: "keep",
    dimensions: {
      distinctiveness: 1.6,
      heroComposition: 1.4,
      sectionRhythm: 1.2,
      typographyCraft: 1.4,
      textEconomy: 1.4,
      interactionQuality: 0.9,
      visualFinish: 1.1,
      accessibility: 1.0,
      mobileQuality: 0.9,
      opusTargetSimilarity: 1.1,
    },
    screenshotPattern: "flat",
    routes: 5,
  },
  {
    slug: "version-15",
    number: 15,
    hypothesis:
      "Adding explicit hero composition rules targeting asymmetry, layering, and viewport drama will improve hero quality scores.",
    mutationAxis: "Hero composition",
    score: 12.6,
    delta: "+0.6",
    verdict: "keep",
    dimensions: {
      distinctiveness: 1.6,
      heroComposition: 1.6,
      sectionRhythm: 1.2,
      typographyCraft: 1.4,
      textEconomy: 1.3,
      interactionQuality: 1.0,
      visualFinish: 1.2,
      accessibility: 1.0,
      mobileQuality: 1.0,
      opusTargetSimilarity: 1.3,
    },
    screenshotPattern: "flat",
    routes: 5,
  },
  {
    slug: "version-16",
    number: 16,
    hypothesis:
      "Adding text economy and information pacing rules will reduce wall-of-text sections and improve scannability.",
    mutationAxis: "Text economy",
    score: 13.2,
    delta: "+0.6",
    verdict: "keep",
    dimensions: {
      distinctiveness: 1.6,
      heroComposition: 1.6,
      sectionRhythm: 1.3,
      typographyCraft: 1.4,
      textEconomy: 1.5,
      interactionQuality: 1.0,
      visualFinish: 1.2,
      accessibility: 1.1,
      mobileQuality: 1.0,
      opusTargetSimilarity: 1.5,
    },
    screenshotPattern: "flat",
    routes: 5,
  },
  {
    slug: "version-17",
    number: 17,
    hypothesis:
      "Adding visual finish and surface quality rules targeting texture, depth, and polish will improve visual finish scores.",
    mutationAxis: "Visual finish",
    score: 13.8,
    delta: "+0.6",
    verdict: "keep",
    dimensions: {
      distinctiveness: 1.6,
      heroComposition: 1.6,
      sectionRhythm: 1.4,
      typographyCraft: 1.4,
      textEconomy: 1.5,
      interactionQuality: 1.0,
      visualFinish: 1.4,
      accessibility: 1.1,
      mobileQuality: 1.1,
      opusTargetSimilarity: 1.7,
    },
    screenshotPattern: "flat",
    routes: 5,
  },
  {
    slug: "version-18",
    number: 18,
    hypothesis:
      "Switching to Tailwind v3 with explicit config will improve output consistency and reduce build failures from v4 plugin issues.",
    mutationAxis: "Tailwind version",
    score: 14.3,
    delta: "+0.5",
    verdict: "keep",
    dimensions: {
      distinctiveness: 1.7,
      heroComposition: 1.6,
      sectionRhythm: 1.5,
      typographyCraft: 1.5,
      textEconomy: 1.5,
      interactionQuality: 1.1,
      visualFinish: 1.5,
      accessibility: 1.2,
      mobileQuality: 1.1,
      opusTargetSimilarity: 1.6,
    },
    screenshotPattern: "flat",
    routes: 5,
  },
  {
    slug: "version-19",
    number: 19,
    hypothesis:
      "Adding spacing rhythm and density control rules will improve section transitions and reduce cramped or floaty layouts.",
    mutationAxis: "Spacing rhythm",
    score: 15.3,
    delta: "+1.0",
    verdict: "keep",
    dimensions: {
      distinctiveness: 1.8,
      heroComposition: 1.7,
      sectionRhythm: 1.6,
      typographyCraft: 1.6,
      textEconomy: 1.6,
      interactionQuality: 1.2,
      visualFinish: 1.6,
      accessibility: 1.3,
      mobileQuality: 1.2,
      opusTargetSimilarity: 1.7,
    },
    screenshotPattern: "flat",
    routes: 5,
  },
  {
    slug: "version-20",
    number: 20,
    hypothesis:
      "Adding explicit outcome-focused interaction rules will reduce static mock-interface behavior and improve interaction quality.",
    mutationAxis: "Interaction depth",
    score: 15.9,
    delta: "+0.6",
    verdict: "keep",
    dimensions: {
      distinctiveness: 1.9,
      heroComposition: 1.8,
      sectionRhythm: 1.6,
      typographyCraft: 1.7,
      textEconomy: 1.6,
      interactionQuality: 1.6,
      visualFinish: 1.7,
      accessibility: 1.3,
      mobileQuality: 1.2,
      opusTargetSimilarity: 1.5,
    },
    screenshotPattern: "flat",
    routes: 5,
  },
  {
    slug: "version-21",
    number: 21,
    hypothesis:
      "Adding mobile-first responsive guards and accessibility contrast rules will improve mobile quality and accessibility scores.",
    mutationAxis: "Mobile + accessibility",
    score: 16.2,
    delta: "+0.3",
    verdict: "keep",
    dimensions: {
      distinctiveness: 1.9,
      heroComposition: 1.8,
      sectionRhythm: 1.7,
      typographyCraft: 1.8,
      textEconomy: 1.7,
      interactionQuality: 1.5,
      visualFinish: 1.7,
      accessibility: 1.3,
      mobileQuality: 1.3,
      opusTargetSimilarity: 1.5,
    },
    screenshotPattern: "flat",
    routes: 5,
  },
  {
    slug: "version-22",
    number: 22,
    hypothesis:
      "Enforcing explicit style-family locking with a declared typography hierarchy per concept will reduce recurring font/weight/color defaults and produce stronger route-to-route identity separation.",
    mutationAxis: "Typography identity",
    score: 16.9,
    delta: "+0.7",
    verdict: "keep",
    dimensions: {
      distinctiveness: 2.0,
      heroComposition: 1.8,
      sectionRhythm: 1.8,
      typographyCraft: 1.9,
      textEconomy: 1.7,
      interactionQuality: 1.6,
      visualFinish: 1.8,
      accessibility: 1.3,
      mobileQuality: 1.3,
      opusTargetSimilarity: 1.7,
    },
    screenshotPattern: "flat",
    routes: 5,
  },
];

/** Dimension labels for display */
export const dimensionLabels: Record<string, string> = {
  distinctiveness: "Distinctiveness",
  heroComposition: "Hero Composition",
  sectionRhythm: "Section Rhythm",
  typographyCraft: "Typography Craft",
  textEconomy: "Text Economy",
  interactionQuality: "Interaction Quality",
  visualFinish: "Visual Finish",
  accessibility: "Accessibility",
  mobileQuality: "Mobile Quality",
  opusTargetSimilarity: "Opus Similarity",
};

/**
 * Returns the screenshot path for a given version and route.
 * Handles the different naming conventions across versions.
 */
export function screenshotPath(v: VersionMeta, route: number): string {
  switch (v.screenshotPattern) {
    case "subdirs":
      return `/screenshots/${v.slug}/${route}/laptop.png`;
    case "flat":
      return `/screenshots/${v.slug}/${v.slug}-route-${route}.png`;
    case "models":
      return `/screenshots/${v.slug}/gpt-5.2/${route}.png`;
  }
}
