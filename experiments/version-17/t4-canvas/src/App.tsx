import { useMemo, useState } from 'react'
import { Link, Navigate, Route, Routes } from 'react-router-dom'

type ModelId = 'Nano Banana Pro' | 'Flux 2' | 'gpt-image-1.5' | 'Seedream'

const modelData: Record<
  ModelId,
  {
    tagline: string
    speed: string
    specialty: string
    color: string
    accent: string
  }
> = {
  'Nano Banana Pro': {
    tagline: 'Narrative scene generation with cinematic character continuity.',
    speed: '7s avg draft',
    specialty: 'Storyboards + character consistency',
    color: 'from-cyan-400 via-sky-500 to-blue-600',
    accent: 'ring-cyan-300/70',
  },
  'Flux 2': {
    tagline: 'High-fidelity lighting and product-grade material realism.',
    speed: '9s avg draft',
    specialty: 'Advertising stills + industrial renders',
    color: 'from-emerald-400 via-teal-400 to-cyan-500',
    accent: 'ring-emerald-300/70',
  },
  'gpt-image-1.5': {
    tagline: 'Instruction-accurate scene editing for iterative art direction.',
    speed: '6s avg draft',
    specialty: 'Prompt-to-edit workflows + targeted revisions',
    color: 'from-rose-400 via-fuchsia-500 to-pink-500',
    accent: 'ring-fuchsia-300/70',
  },
  Seedream: {
    tagline: 'Style transfer and mood control with vivid artistic depth.',
    speed: '8s avg draft',
    specialty: 'Illustration blends + art-style experiments',
    color: 'from-amber-300 via-orange-400 to-red-500',
    accent: 'ring-amber-300/70',
  },
}

const concepts = [
  {
    path: '/1',
    title: 'Prism Forge',
    theme: 'Neon control deck',
    note: 'Dark, angular, high-energy composition with command-center interactions.',
  },
  {
    path: '/2',
    title: 'Editorial Burst',
    theme: 'Magazine studio',
    note: 'Warm paper tones, oversized type, and campaign-focused storytelling.',
  },
  {
    path: '/3',
    title: 'Ops Brutal',
    theme: 'Industrial terminal',
    note: 'Raw utility aesthetic with dense metrics, queues, and operational controls.',
  },
  {
    path: '/4',
    title: 'Atmos Garden',
    theme: 'Organic futurism',
    note: 'Fluid gradients, sculptural cards, and mood-driven creative direction.',
  },
  {
    path: '/5',
    title: 'Director Cut',
    theme: 'Luxury minimal',
    note: 'Monochrome elegance with cinematic pacing and premium conversion focus.',
  },
] as const

function App() {
  return (
    <Routes>
      <Route path="/" element={<HubPage />} />
      <Route path="/1" element={<DesignOne />} />
      <Route path="/2" element={<DesignTwo />} />
      <Route path="/3" element={<DesignThree />} />
      <Route path="/4" element={<DesignFour />} />
      <Route path="/5" element={<DesignFive />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

function HubPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-slate-950 text-slate-100">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(56,189,248,0.18),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(216,180,254,0.2),transparent_40%),radial-gradient(circle_at_70%_90%,rgba(251,191,36,0.15),transparent_30%)]" />
      <div className="relative mx-auto max-w-6xl px-6 pb-20 pt-12 sm:px-10">
        <p className="font-neo text-xs uppercase tracking-[0.5em] text-cyan-200/80">T4 Canvas Launch Lab</p>
        <h1 className="font-orbit mt-6 max-w-3xl text-4xl leading-tight text-white sm:text-5xl">
          Five radical homepage directions for your all-model image generation studio.
        </h1>
        <p className="mt-5 max-w-2xl text-sm text-slate-300 sm:text-base">
          Every concept highlights the same product promise: one monthly fee for Nano Banana Pro, Flux 2,
          gpt-image-1.5, and Seedream across both generate and edit workflows.
        </p>

        <section className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {concepts.map((concept, index) => (
            <Link
              key={concept.path}
              to={concept.path}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-cyan-300/70 hover:bg-cyan-400/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
            >
              <div className="absolute right-4 top-4 text-xs tracking-[0.24em] text-slate-400">0{index + 1}</div>
              <p className="font-neo text-xs uppercase tracking-[0.25em] text-cyan-200">{concept.theme}</p>
              <h2 className="font-orbit mt-4 text-2xl text-white">{concept.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">{concept.note}</p>
              <div className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-cyan-100">
                Open concept
                <span className="transition group-hover:translate-x-1">→</span>
              </div>
            </Link>
          ))}
        </section>
      </div>
    </main>
  )
}

function DesignOne() {
  const [activeModel, setActiveModel] = useState<ModelId>('Nano Banana Pro')
  const [stage, setStage] = useState<'Brief' | 'Compose' | 'Polish'>('Compose')
  const [billing, setBilling] = useState<'monthly' | 'annual'>('monthly')
  const [outputMode, setOutputMode] = useState<'ads' | 'social' | 'concept'>('ads')
  const model = modelData[activeModel]

  const stageDetails: Record<typeof stage, string> = {
    Brief: 'Map intent, constraints, and image targets before the first render.',
    Compose: 'Blend text prompt, style refs, and camera framing into reusable stacks.',
    Polish: 'Apply model-specific edits, upscale, and final export presets in one pass.',
  }

  const outputShowcase: Record<typeof outputMode, string[]> = {
    ads: ['Product hero with glass caustics', 'Packaging in contextual lifestyle scene', 'Variant set for multi-channel campaigns'],
    social: ['9:16 motion keyframes for reels', 'Thumbnail-safe focal framing', 'Brand-safe caption overlays'],
    concept: ['Art direction moodboard packs', 'Character turnarounds with consistency tags', 'Environment sketches for pitch decks'],
  }

  return (
    <main className="min-h-screen overflow-x-hidden bg-slate-950 text-slate-100">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(14,165,233,0.2),transparent_35%),radial-gradient(circle_at_20%_70%,rgba(168,85,247,0.2),transparent_35%)]" />
      <div className="relative mx-auto max-w-6xl px-6 pb-20 pt-8 sm:px-10">
        <header className="flex flex-wrap items-center justify-between gap-4">
          <Link to="/" className="font-neo text-sm uppercase tracking-[0.4em] text-cyan-200 hover:text-white">
            T4 Canvas
          </Link>
          <nav className="flex gap-3 text-xs uppercase tracking-[0.2em] text-slate-300 sm:text-sm">
            <span className="rounded-full border border-white/10 px-3 py-1">Workflow</span>
            <span className="rounded-full border border-white/10 px-3 py-1">Integrations</span>
            <span className="rounded-full border border-white/10 px-3 py-1">Pricing</span>
          </nav>
        </header>

        <section className="mt-10 grid items-end gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="font-neo text-xs uppercase tracking-[0.35em] text-cyan-200">Concept One · Prism Forge</p>
            <h1 className="font-orbit mt-5 text-4xl leading-[1.02] text-white sm:text-6xl">
              Build production-ready image systems, not one-off prompts.
            </h1>
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-slate-300 sm:text-base">
              Generate and edit with Nano Banana Pro, Flux 2, gpt-image-1.5, and Seedream under a single flat
              monthly plan. Zero model juggling. Full creative control.
            </p>
            <p className="mt-4 text-sm text-cyan-100">
              Active model: <span className="font-semibold">{activeModel}</span> · {model.speed}
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {(Object.keys(modelData) as ModelId[]).map((name) => (
                <button
                  key={name}
                  type="button"
                  onClick={() => setActiveModel(name)}
                  className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] transition sm:text-sm ${
                    activeModel === name
                      ? `bg-gradient-to-r ${modelData[name].color} text-slate-900`
                      : 'border-white/15 bg-white/5 text-slate-200 hover:border-cyan-200/70 hover:text-white'
                  }`}
                >
                  {name}
                </button>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <button
                type="button"
                className="rounded-full bg-white px-6 py-3 text-sm font-bold text-slate-950 transition hover:bg-cyan-100"
              >
                Start Creating
              </button>
              <button
                type="button"
                className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:border-cyan-200 hover:text-cyan-100"
              >
                View Workflow Demo
              </button>
            </div>
          </div>

          <div className={`rounded-3xl border border-white/15 bg-gradient-to-br ${model.color} p-6 shadow-[0_30px_80px_rgba(2,132,199,0.28)]`}>
            <div className="rounded-2xl bg-slate-950/70 p-6 backdrop-blur">
              <p className="font-neo text-xs uppercase tracking-[0.3em] text-slate-200">Model Profile</p>
              <h2 className="mt-3 font-orbit text-3xl text-white">{activeModel}</h2>
              <p className="mt-4 text-sm text-slate-200">{model.tagline}</p>
              <p className="mt-5 rounded-xl border border-white/20 bg-white/10 p-4 text-sm text-slate-100">
                Best for: {model.specialty}
              </p>
            </div>
          </div>
        </section>

        <section className="mt-14 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <article className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <p className="font-neo text-xs uppercase tracking-[0.3em] text-cyan-200">Session Architect</p>
            <h3 className="font-orbit mt-3 text-2xl text-white">Prompt-to-pixel in three controlled stages</h3>
            <div className="mt-5 flex flex-wrap gap-2">
              {(['Brief', 'Compose', 'Polish'] as const).map((phase) => (
                <button
                  key={phase}
                  type="button"
                  onClick={() => setStage(phase)}
                  className={`rounded-xl px-4 py-2 text-sm font-semibold transition ${
                    stage === phase
                      ? 'bg-cyan-300 text-slate-900'
                      : 'border border-white/15 bg-white/5 text-slate-200 hover:border-cyan-300/70'
                  }`}
                >
                  {phase}
                </button>
              ))}
            </div>
            <p className="mt-5 text-sm leading-relaxed text-slate-300">{stageDetails[stage]}</p>
          </article>

          <article className="rounded-3xl border border-white/10 bg-slate-900/70 p-6">
            <p className="font-neo text-xs uppercase tracking-[0.3em] text-cyan-200">Output Modes</p>
            <div className="mt-4 flex gap-2">
              {([
                ['ads', 'Ads'],
                ['social', 'Social'],
                ['concept', 'Concept Art'],
              ] as const).map(([key, label]) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => setOutputMode(key)}
                  className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] transition ${
                    outputMode === key
                      ? 'bg-fuchsia-400 text-slate-900'
                      : 'border border-white/15 bg-white/5 text-slate-200 hover:border-fuchsia-300/70'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
            <ul className="mt-5 space-y-3 text-sm text-slate-200">
              {outputShowcase[outputMode].map((item) => (
                <li key={item} className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                  {item}
                </li>
              ))}
            </ul>
          </article>
        </section>

        <section className="mt-14 rounded-3xl border border-white/10 bg-gradient-to-r from-slate-900 via-slate-900 to-cyan-950/70 p-6 sm:p-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="font-neo text-xs uppercase tracking-[0.28em] text-cyan-200">Single Flat Fee</p>
              <h3 className="font-orbit mt-2 text-3xl text-white">One membership for every model and edit lane</h3>
            </div>
            <div className="rounded-full border border-white/15 bg-white/5 p-1">
              {(['monthly', 'annual'] as const).map((plan) => (
                <button
                  key={plan}
                  type="button"
                  onClick={() => setBilling(plan)}
                  className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] transition sm:text-sm ${
                    billing === plan ? 'bg-white text-slate-900' : 'text-slate-200 hover:text-white'
                  }`}
                >
                  {plan}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-3">
            <article className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-xs uppercase tracking-[0.22em] text-slate-400">Studio Plan</p>
              <p className="mt-3 text-4xl font-bold text-white">{billing === 'monthly' ? '$39' : '$32'}</p>
              <p className="mt-1 text-sm text-slate-300">per user / month</p>
            </article>
            <article className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-xs uppercase tracking-[0.22em] text-slate-400">Included</p>
              <p className="mt-3 text-sm text-slate-200">Unlimited generations, all four models, layered editing, batch exports.</p>
            </article>
            <article className={`rounded-2xl border bg-white/10 p-5 ${model.accent}`}>
              <p className="text-xs uppercase tracking-[0.22em] text-slate-300">Live Status</p>
              <p className="mt-3 text-sm text-slate-100">{activeModel} lane is under 2 minute queue depth right now.</p>
            </article>
          </div>
        </section>
      </div>
    </main>
  )
}

function DesignTwo() {
  const [campaign, setCampaign] = useState<'Launch' | 'Fashion' | 'Food'>('Launch')
  const [recipe, setRecipe] = useState<'Product' | 'Lifestyle' | 'Editorial'>('Product')
  const [theatreMode, setTheatreMode] = useState<'generate' | 'edit'>('generate')
  const [teamSize, setTeamSize] = useState(8)

  const campaignText: Record<typeof campaign, { headline: string; support: string; note: string }> = {
    Launch: {
      headline: 'Launch assets in one coordinated sprint.',
      support: 'Generate hero frames, social derivatives, and cutdowns with one prompt stack.',
      note: 'Optimized for product release calendars and cross-channel handoff.',
    },
    Fashion: {
      headline: 'Direct lookbook visuals like a digital art director.',
      support: 'Style-consistent model shots across seasonal palettes and silhouette revisions.',
      note: 'Ideal for capsule drops, paid creative, and storefront storytelling.',
    },
    Food: {
      headline: 'Plate-level realism with campaign-ready composition.',
      support: 'Iterate plating, textures, and props while preserving appetite appeal.',
      note: 'Perfect for menus, delivery ads, and seasonal promo menus.',
    },
  }

  const recipeDetail: Record<typeof recipe, string[]> = {
    Product: ['Backplate clean-up script', 'Material-aware highlights', 'Variant-safe color lock'],
    Lifestyle: ['Human gesture references', 'Location mood presets', 'Organic composition balancing'],
    Editorial: ['Bold type-safe negative space', 'Narrative prop framing', 'Double-page spread ratio exports'],
  }

  const monthlyCost = 42
  const competitorCost = 109
  const monthlySavings = useMemo(() => (competitorCost - monthlyCost) * teamSize, [teamSize])

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f6efe4] text-[#311b15]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_10%,rgba(251,146,60,0.2),transparent_30%),radial-gradient(circle_at_80%_20%,rgba(15,118,110,0.2),transparent_35%)]" />
      <div className="relative mx-auto max-w-6xl px-6 pb-24 pt-10 sm:px-10">
        <header className="flex flex-wrap items-center justify-between gap-4 border-b border-[#311b15]/20 pb-4">
          <Link to="/" className="font-editorial text-lg text-[#311b15] hover:text-[#8a3f25]">
            T4 Canvas
          </Link>
          <div className="font-sanscraft flex gap-6 text-xs uppercase tracking-[0.2em] text-[#5f3a2f] sm:text-sm">
            <span>Campaign Studio</span>
            <span>Prompt Books</span>
            <span>Membership</span>
          </div>
        </header>

        <section className="mt-10 grid gap-8 lg:grid-cols-[1.12fr_0.88fr]">
          <div>
            <p className="font-sanscraft text-xs uppercase tracking-[0.32em] text-[#8a3f25]">Concept Two · Editorial Burst</p>
            <h1 className="font-editorial mt-6 text-5xl leading-[0.95] sm:text-7xl">{campaignText[campaign].headline}</h1>
            <p className="font-sanscraft mt-5 max-w-xl text-sm leading-relaxed text-[#5f3a2f] sm:text-base">
              {campaignText[campaign].support} T4 Canvas unifies Nano Banana Pro, Flux 2, gpt-image-1.5,
              and Seedream under one flat monthly fee for serious creative teams.
            </p>
            <p className="font-sanscraft mt-4 text-sm text-[#8a3f25]">{campaignText[campaign].note}</p>

            <div className="mt-6 flex flex-wrap gap-2">
              {(['Launch', 'Fashion', 'Food'] as const).map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => setCampaign(option)}
                  className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] transition sm:text-sm ${
                    campaign === option
                      ? 'border-[#311b15] bg-[#311b15] text-[#f6efe4]'
                      : 'border-[#311b15]/30 bg-[#f6efe4]/60 text-[#311b15] hover:border-[#311b15]'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          <article className="rounded-[2.2rem] border border-[#311b15]/20 bg-[#fff8ee] p-6 shadow-[0_24px_50px_rgba(82,45,30,0.16)] sm:p-8">
            <p className="font-sanscraft text-xs uppercase tracking-[0.28em] text-[#8a3f25]">Model Bench</p>
            <div className="mt-4 grid gap-3">
              {(['Nano Banana Pro', 'Flux 2', 'gpt-image-1.5', 'Seedream'] as const).map((name) => (
                <div key={name} className="flex items-center justify-between rounded-2xl border border-[#311b15]/15 px-4 py-3">
                  <span className="font-sanscraft text-sm font-semibold">{name}</span>
                  <span className="font-sanscraft text-xs uppercase tracking-[0.16em] text-[#8a3f25]">ready</span>
                </div>
              ))}
            </div>
          </article>
        </section>

        <section className="mt-14 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <article className="rounded-[2rem] border border-[#311b15]/20 bg-[#fff8ee] p-6">
            <p className="font-sanscraft text-xs uppercase tracking-[0.28em] text-[#8a3f25]">Prompt Cookbook</p>
            <h2 className="font-editorial mt-3 text-3xl">Production recipe cards</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {(['Product', 'Lifestyle', 'Editorial'] as const).map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setRecipe(category)}
                  className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] transition sm:text-sm ${
                    recipe === category
                      ? 'bg-[#8a3f25] text-[#fff8ee]'
                      : 'border border-[#311b15]/25 text-[#311b15] hover:border-[#8a3f25]'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
            <ul className="mt-5 space-y-3 text-sm text-[#4c2e24]">
              {recipeDetail[recipe].map((item) => (
                <li key={item} className="rounded-xl border border-[#311b15]/15 bg-[#f6efe4] px-4 py-3">
                  {item}
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-[2rem] border border-[#311b15]/20 bg-[#311b15] p-6 text-[#fff6e7]">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="font-sanscraft text-xs uppercase tracking-[0.28em] text-[#ffd1ab]">Revision Theatre</p>
                <h3 className="font-editorial mt-2 text-3xl">Switch between create and edit lanes</h3>
              </div>
              <div className="rounded-full border border-[#fff6e7]/25 p-1">
                {(['generate', 'edit'] as const).map((mode) => (
                  <button
                    key={mode}
                    type="button"
                    onClick={() => setTheatreMode(mode)}
                    className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] transition ${
                      theatreMode === mode ? 'bg-[#fff6e7] text-[#311b15]' : 'text-[#ffe5cc]'
                    }`}
                  >
                    {mode}
                  </button>
                ))}
              </div>
            </div>
            <p className="font-sanscraft mt-4 max-w-lg text-sm leading-relaxed text-[#ffe5cc]">
              {theatreMode === 'generate'
                ? 'Generate mode stacks model strengths for first-pass ideation, then routes top picks directly to edit review.'
                : 'Edit mode keeps composition locked while changing styling, objects, and lighting in deterministic revision passes.'}
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <div className="rounded-xl border border-[#fff6e7]/20 bg-[#fff6e7]/10 p-4">
                <p className="font-sanscraft text-xs uppercase tracking-[0.18em] text-[#ffd1ab]">Average Cycle</p>
                <p className="mt-2 text-2xl font-semibold">{theatreMode === 'generate' ? '14 min' : '9 min'}</p>
              </div>
              <div className="rounded-xl border border-[#fff6e7]/20 bg-[#fff6e7]/10 p-4">
                <p className="font-sanscraft text-xs uppercase tracking-[0.18em] text-[#ffd1ab]">Approval Rate</p>
                <p className="mt-2 text-2xl font-semibold">{theatreMode === 'generate' ? '72%' : '87%'}</p>
              </div>
            </div>
          </article>
        </section>

        <section className="mt-14 rounded-[2.2rem] border border-[#311b15]/20 bg-[#fff8ee] p-6 sm:p-8">
          <p className="font-sanscraft text-xs uppercase tracking-[0.3em] text-[#8a3f25]">Flat Fee Calculator</p>
          <div className="mt-3 grid gap-8 lg:grid-cols-[1fr_0.9fr]">
            <div>
              <h3 className="font-editorial text-4xl leading-tight">Keep every model. Cut software overhead.</h3>
              <p className="font-sanscraft mt-4 text-sm text-[#5f3a2f]">
                Team seats
                <span className="ml-2 rounded-full border border-[#311b15]/20 px-3 py-1 text-xs font-semibold">
                  {teamSize}
                </span>
              </p>
              <input
                type="range"
                min={3}
                max={40}
                value={teamSize}
                onChange={(event) => setTeamSize(Number(event.target.value))}
                className="mt-3 w-full accent-[#8a3f25]"
              />
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <article className="rounded-xl border border-[#311b15]/20 bg-[#f6efe4] p-4">
                <p className="font-sanscraft text-xs uppercase tracking-[0.18em] text-[#8a3f25]">Typical Stack</p>
                <p className="mt-2 text-2xl font-semibold text-[#311b15]">${competitorCost * teamSize}</p>
                <p className="font-sanscraft text-xs text-[#5f3a2f]">Monthly total</p>
              </article>
              <article className="rounded-xl border border-[#311b15]/20 bg-[#311b15] p-4 text-[#fff6e7]">
                <p className="font-sanscraft text-xs uppercase tracking-[0.18em] text-[#ffd1ab]">T4 Canvas</p>
                <p className="mt-2 text-2xl font-semibold">${monthlyCost * teamSize}</p>
                <p className="font-sanscraft text-xs text-[#ffe5cc]">Monthly total</p>
              </article>
              <article className="sm:col-span-2 rounded-xl border border-[#311b15]/20 bg-[#8a3f25] p-4 text-[#fff8ee]">
                <p className="font-sanscraft text-xs uppercase tracking-[0.2em]">Estimated savings</p>
                <p className="mt-2 text-3xl font-semibold">${monthlySavings} / month</p>
              </article>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}

function DesignThree() {
  const [mode, setMode] = useState<'Speed' | 'Balanced' | 'Quality'>('Balanced')
  const [queueTab, setQueueTab] = useState<'All' | 'Render' | 'Edit' | 'Upscale'>('All')
  const [stack, setStack] = useState<'Commercial' | 'Cinematic' | 'Illustration'>('Commercial')
  const [jobsPerDay, setJobsPerDay] = useState(240)

  const modeScore: Record<typeof mode, { latency: string; fidelity: string; note: string }> = {
    Speed: {
      latency: '3.1s median',
      fidelity: '82/100',
      note: 'Best when teams need rapid concept spread for decision meetings.',
    },
    Balanced: {
      latency: '5.4s median',
      fidelity: '91/100',
      note: 'Default ops profile for campaign teams shipping daily assets.',
    },
    Quality: {
      latency: '8.8s median',
      fidelity: '97/100',
      note: 'Use for premium product stills and final publication deliverables.',
    },
  }

  const queueRows = [
    { lane: 'Render', job: 'Footwear hero set', eta: '01:12', owner: 'Brand' },
    { lane: 'Edit', job: 'Kitchen scene object swap', eta: '00:43', owner: 'Social' },
    { lane: 'Upscale', job: 'Billboard master export', eta: '02:05', owner: 'OOH' },
    { lane: 'Render', job: 'Character expression variants', eta: '01:48', owner: 'Studio' },
  ]

  const visibleRows = queueTab === 'All' ? queueRows : queueRows.filter((item) => item.lane === queueTab)

  const stackPlans: Record<typeof stack, string[]> = {
    Commercial: ['Flux 2 for base render', 'gpt-image-1.5 for precision edits', 'Seedream for stylized alternates'],
    Cinematic: ['Nano Banana Pro storyboard cadence', 'Flux 2 lighting polish', 'gpt-image-1.5 continuity fixes'],
    Illustration: ['Seedream primary style pass', 'Nano Banana Pro composition variants', 'gpt-image-1.5 cleanup + export'],
  }

  const monthlyPlan = 49
  const estimatedMonthlyOutput = Math.round((jobsPerDay * 30 * 0.88) / 100) * 100

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#111111] text-[#f5f5f5]">
      <div className="relative mx-auto max-w-6xl px-6 pb-24 pt-8 sm:px-10">
        <header className="flex flex-wrap items-center justify-between gap-4 border-b-4 border-[#f5f5f5] pb-4">
          <Link to="/" className="font-brutal text-2xl uppercase tracking-[0.08em] hover:text-[#fcd34d]">
            T4 Canvas
          </Link>
          <div className="font-monoedge flex gap-3 text-[11px] uppercase tracking-[0.18em] sm:text-xs">
            <span className="border border-[#f5f5f5] px-3 py-1">Ops Board</span>
            <span className="border border-[#f5f5f5] px-3 py-1">SLA</span>
            <span className="border border-[#f5f5f5] px-3 py-1">Billing</span>
          </div>
        </header>

        <section className="mt-10 grid gap-7 lg:grid-cols-[1.08fr_0.92fr]">
          <div>
            <p className="font-monoedge text-xs uppercase tracking-[0.35em] text-[#fcd34d]">Concept Three · Ops Brutal</p>
            <h1 className="font-brutal mt-4 max-w-2xl text-5xl uppercase leading-[0.9] sm:text-7xl">
              Run image generation like infrastructure.
            </h1>
            <p className="font-monoedge mt-5 max-w-xl text-sm leading-relaxed text-[#d4d4d4] sm:text-base">
              T4 Canvas combines Nano Banana Pro, Flux 2, gpt-image-1.5, and Seedream under one predictable
              monthly license, with an interface designed for teams that ship every day.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {(['Speed', 'Balanced', 'Quality'] as const).map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => setMode(option)}
                  className={`font-monoedge border px-4 py-2 text-xs uppercase tracking-[0.2em] transition ${
                    mode === option
                      ? 'border-[#fcd34d] bg-[#fcd34d] text-[#111111]'
                      : 'border-[#f5f5f5] text-[#f5f5f5] hover:border-[#fcd34d] hover:text-[#fcd34d]'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          <article className="border-4 border-[#f5f5f5] bg-[#171717] p-5">
            <p className="font-monoedge text-xs uppercase tracking-[0.2em] text-[#fcd34d]">Profile: {mode}</p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <div className="border border-[#f5f5f5]/60 p-4">
                <p className="font-monoedge text-[11px] uppercase tracking-[0.2em] text-[#a3a3a3]">Latency</p>
                <p className="font-brutal mt-2 text-3xl">{modeScore[mode].latency}</p>
              </div>
              <div className="border border-[#f5f5f5]/60 p-4">
                <p className="font-monoedge text-[11px] uppercase tracking-[0.2em] text-[#a3a3a3]">Fidelity</p>
                <p className="font-brutal mt-2 text-3xl">{modeScore[mode].fidelity}</p>
              </div>
            </div>
            <p className="font-monoedge mt-4 text-sm leading-relaxed text-[#d4d4d4]">{modeScore[mode].note}</p>
          </article>
        </section>

        <section className="mt-14 grid gap-6 lg:grid-cols-[1.25fr_0.75fr]">
          <article className="border-4 border-[#f5f5f5] bg-[#0f0f0f] p-5">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h2 className="font-brutal text-3xl uppercase">Queue Inspector</h2>
              <div className="flex gap-2">
                {(['All', 'Render', 'Edit', 'Upscale'] as const).map((lane) => (
                  <button
                    key={lane}
                    type="button"
                    onClick={() => setQueueTab(lane)}
                    className={`font-monoedge border px-3 py-1 text-[11px] uppercase tracking-[0.18em] transition ${
                      queueTab === lane
                        ? 'border-[#fcd34d] bg-[#fcd34d] text-[#111111]'
                        : 'border-[#f5f5f5] text-[#f5f5f5] hover:border-[#fcd34d] hover:text-[#fcd34d]'
                    }`}
                  >
                    {lane}
                  </button>
                ))}
              </div>
            </div>
            <div className="mt-5 overflow-hidden border border-[#f5f5f5]">
              <div className="grid grid-cols-[0.9fr_1.6fr_0.7fr_0.8fr] border-b border-[#f5f5f5]/40 bg-[#1f1f1f] px-3 py-2 font-monoedge text-[11px] uppercase tracking-[0.18em] text-[#bdbdbd]">
                <span>Lane</span>
                <span>Job</span>
                <span>ETA</span>
                <span>Owner</span>
              </div>
              {visibleRows.map((row) => (
                <div
                  key={`${row.lane}-${row.job}`}
                  className="grid grid-cols-[0.9fr_1.6fr_0.7fr_0.8fr] border-b border-[#f5f5f5]/20 px-3 py-3 font-monoedge text-xs uppercase tracking-[0.09em] text-[#f5f5f5] last:border-b-0"
                >
                  <span className="text-[#fcd34d]">{row.lane}</span>
                  <span>{row.job}</span>
                  <span>{row.eta}</span>
                  <span>{row.owner}</span>
                </div>
              ))}
            </div>
          </article>

          <article className="border-4 border-[#f5f5f5] bg-[#1a1a1a] p-5">
            <p className="font-monoedge text-xs uppercase tracking-[0.22em] text-[#fcd34d]">Stack Composer</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {(['Commercial', 'Cinematic', 'Illustration'] as const).map((preset) => (
                <button
                  key={preset}
                  type="button"
                  onClick={() => setStack(preset)}
                  className={`font-monoedge border px-3 py-2 text-[11px] uppercase tracking-[0.18em] transition ${
                    stack === preset
                      ? 'border-[#fcd34d] bg-[#fcd34d] text-[#111111]'
                      : 'border-[#f5f5f5] text-[#f5f5f5] hover:border-[#fcd34d] hover:text-[#fcd34d]'
                  }`}
                >
                  {preset}
                </button>
              ))}
            </div>
            <ul className="mt-4 space-y-3 font-monoedge text-xs uppercase tracking-[0.11em] text-[#d4d4d4]">
              {stackPlans[stack].map((item) => (
                <li key={item} className="border border-[#f5f5f5]/40 bg-[#0f0f0f] px-3 py-3">
                  {item}
                </li>
              ))}
            </ul>
          </article>
        </section>

        <section className="mt-14 border-4 border-[#f5f5f5] bg-[#f5f5f5] p-6 text-[#111111]">
          <div className="grid gap-6 lg:grid-cols-[1fr_0.95fr]">
            <div>
              <p className="font-monoedge text-xs uppercase tracking-[0.24em] text-[#6b7280]">Flat Fee Engine</p>
              <h3 className="font-brutal mt-3 text-4xl uppercase leading-[0.95]">Predict costs before the first prompt.</h3>
              <p className="font-monoedge mt-4 text-sm text-[#374151]">
                Estimated jobs per day
                <span className="ml-2 border border-[#111111] px-3 py-1 text-xs">{jobsPerDay}</span>
              </p>
              <input
                type="range"
                min={80}
                max={700}
                step={20}
                value={jobsPerDay}
                onChange={(event) => setJobsPerDay(Number(event.target.value))}
                className="mt-3 w-full accent-[#111111]"
              />
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <article className="border-2 border-[#111111] bg-white p-4">
                <p className="font-monoedge text-[11px] uppercase tracking-[0.18em] text-[#6b7280]">Studio Price</p>
                <p className="font-brutal mt-2 text-4xl">${monthlyPlan}</p>
                <p className="font-monoedge text-xs uppercase text-[#374151]">per seat / month</p>
              </article>
              <article className="border-2 border-[#111111] bg-white p-4">
                <p className="font-monoedge text-[11px] uppercase tracking-[0.18em] text-[#6b7280]">Projected Output</p>
                <p className="font-brutal mt-2 text-4xl">{estimatedMonthlyOutput}</p>
                <p className="font-monoedge text-xs uppercase text-[#374151]">images / month</p>
              </article>
              <article className="sm:col-span-2 border-2 border-[#111111] bg-[#111111] p-4 text-[#fcd34d]">
                <p className="font-monoedge text-[11px] uppercase tracking-[0.18em]">Why teams switch</p>
                <p className="font-brutal mt-2 text-2xl uppercase">One bill. Four models. Zero platform tax.</p>
              </article>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}

function DesignFour() {
  const [mood, setMood] = useState<'Solar Pop' | 'Noir Bloom' | 'Aqua Drift' | 'Neon Rain'>('Solar Pop')
  const [pack, setPack] = useState<'Retail' | 'Gaming' | 'Travel'>('Retail')
  const [timeline, setTimeline] = useState<'Ingest' | 'Generate' | 'Edit' | 'Deliver'>('Generate')
  const [plan, setPlan] = useState<'solo' | 'team'>('team')

  const moodDeck: Record<typeof mood, { gradient: string; description: string; prompt: string }> = {
    'Solar Pop': {
      gradient: 'from-[#facc15] via-[#fb7185] to-[#f97316]',
      description: 'Bright editorial energy for launch visuals that feel vibrant and optimistic.',
      prompt: 'sun-drenched storefront, reflective floors, playful shadows, crisp materials',
    },
    'Noir Bloom': {
      gradient: 'from-[#1f2937] via-[#312e81] to-[#7c3aed]',
      description: 'Moody contrast for cinematic campaigns and premium storytelling.',
      prompt: 'low-key lighting, film grain, dramatic silhouette, botanical textures',
    },
    'Aqua Drift': {
      gradient: 'from-[#0891b2] via-[#22d3ee] to-[#67e8f9]',
      description: 'Cool atmospheric style for calm product narratives and wellness brands.',
      prompt: 'misty coastal palette, translucent glass, airy spacing, clean highlights',
    },
    'Neon Rain': {
      gradient: 'from-[#0f172a] via-[#db2777] to-[#22d3ee]',
      description: 'High-contrast cyber mood for creator brands and digital-first campaigns.',
      prompt: 'wet asphalt reflections, neon signage, layered fog, saturated chroma accents',
    },
  }

  const packNotes: Record<typeof pack, string[]> = {
    Retail: ['Shelf-ready packshots', 'Lifestyle context variants', 'Display ad set exports'],
    Gaming: ['Character key art', 'Environment mood panels', 'Streaming thumbnail bundles'],
    Travel: ['Destination hero murals', 'Seasonal itinerary illustrations', 'Social story cutdowns'],
  }

  const timelineCopy: Record<typeof timeline, string> = {
    Ingest: 'Collect references, guardrails, and tone notes into a single working board.',
    Generate: 'Launch multi-model batches and compare first-pass options side by side.',
    Edit: 'Refine composition, replace objects, and dial color grade with targeted controls.',
    Deliver: 'Export platform-ready ratios with metadata and campaign naming presets.',
  }

  const moodInfo = moodDeck[mood]

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#0b1320] text-[#e7f8f2]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.2),transparent_30%),radial-gradient(circle_at_70%_10%,rgba(251,191,36,0.2),transparent_35%),radial-gradient(circle_at_80%_80%,rgba(244,114,182,0.2),transparent_35%)]" />
      <div className="relative mx-auto max-w-6xl px-6 pb-24 pt-9 sm:px-10">
        <header className="flex flex-wrap items-center justify-between gap-4">
          <Link to="/" className="font-fluid text-xl tracking-[0.08em] text-[#d1fae5] hover:text-white">
            T4 Canvas
          </Link>
          <div className="font-groove flex gap-4 text-xs uppercase tracking-[0.22em] text-[#9bd8cb] sm:text-sm">
            <span>Mood Engine</span>
            <span>Scene Packs</span>
            <span>Membership</span>
          </div>
        </header>

        <section className="mt-10 grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="font-groove text-xs uppercase tracking-[0.34em] text-[#7dd3fc]">Concept Four · Atmos Garden</p>
            <h1 className="font-fluid mt-5 text-5xl leading-[0.94] text-white sm:text-7xl">
              Design image atmospheres before you even write a full prompt.
            </h1>
            <p className="font-groove mt-5 max-w-xl text-sm leading-relaxed text-[#b7e8db] sm:text-base">
              T4 Canvas gives creative teams one flat subscription for Nano Banana Pro, Flux 2,
              gpt-image-1.5, and Seedream across generation and revision workflows.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {(['Solar Pop', 'Noir Bloom', 'Aqua Drift', 'Neon Rain'] as const).map((tone) => (
                <button
                  key={tone}
                  type="button"
                  onClick={() => setMood(tone)}
                  className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] transition sm:text-sm ${
                    mood === tone
                      ? 'border-white bg-white text-[#0b1320]'
                      : 'border-white/25 bg-white/5 text-[#d1fae5] hover:border-[#7dd3fc]'
                  }`}
                >
                  {tone}
                </button>
              ))}
            </div>
          </div>

          <article className={`rounded-[2.3rem] border border-white/20 bg-gradient-to-br ${moodInfo.gradient} p-[1px]`}>
            <div className="h-full rounded-[2.2rem] bg-[#08111d]/80 p-6 backdrop-blur-sm sm:p-8">
              <p className="font-groove text-xs uppercase tracking-[0.28em] text-[#b7e8db]">Current Mood</p>
              <h2 className="font-fluid mt-3 text-4xl text-white">{mood}</h2>
              <p className="font-groove mt-4 text-sm leading-relaxed text-[#d6f3eb]">{moodInfo.description}</p>
              <div className="mt-5 rounded-2xl border border-white/20 bg-white/10 p-4">
                <p className="font-groove text-[11px] uppercase tracking-[0.2em] text-[#9bd8cb]">Suggested prompt frame</p>
                <p className="mt-2 text-sm text-white">{moodInfo.prompt}</p>
              </div>
            </div>
          </article>
        </section>

        <section className="mt-14 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <article className="rounded-[2rem] border border-white/15 bg-white/5 p-6 backdrop-blur">
            <p className="font-groove text-xs uppercase tracking-[0.3em] text-[#7dd3fc]">Scene Packs</p>
            <h3 className="font-fluid mt-2 text-3xl text-white">Use domain packs built for real campaigns</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {(['Retail', 'Gaming', 'Travel'] as const).map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setPack(item)}
                  className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.17em] transition ${
                    pack === item
                      ? 'bg-[#7dd3fc] text-[#0b1320]'
                      : 'border border-white/20 text-[#d1fae5] hover:border-[#7dd3fc]'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
            <ul className="mt-5 space-y-3 text-sm text-[#d6f3eb]">
              {packNotes[pack].map((item) => (
                <li key={item} className="rounded-xl border border-white/15 bg-white/5 px-4 py-3">
                  {item}
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-[2rem] border border-white/15 bg-[#07101a] p-6">
            <p className="font-groove text-xs uppercase tracking-[0.3em] text-[#7dd3fc]">Workflow Orbit</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {(['Ingest', 'Generate', 'Edit', 'Deliver'] as const).map((step) => (
                <button
                  key={step}
                  type="button"
                  onClick={() => setTimeline(step)}
                  className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.17em] transition ${
                    timeline === step
                      ? 'bg-[#facc15] text-[#0b1320]'
                      : 'border border-white/20 text-[#d1fae5] hover:border-[#facc15]'
                  }`}
                >
                  {step}
                </button>
              ))}
            </div>
            <p className="font-groove mt-5 text-sm leading-relaxed text-[#c9e8df]">{timelineCopy[timeline]}</p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <div className="rounded-xl border border-white/15 bg-white/5 p-4">
                <p className="font-groove text-[11px] uppercase tracking-[0.18em] text-[#9bd8cb]">Mode Coverage</p>
                <p className="mt-2 text-2xl font-semibold text-white">4 Models</p>
              </div>
              <div className="rounded-xl border border-white/15 bg-white/5 p-4">
                <p className="font-groove text-[11px] uppercase tracking-[0.18em] text-[#9bd8cb]">Median Cycle</p>
                <p className="mt-2 text-2xl font-semibold text-white">11 min</p>
              </div>
            </div>
          </article>
        </section>

        <section className="mt-14 rounded-[2.2rem] border border-white/20 bg-white/10 p-6 backdrop-blur sm:p-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="font-groove text-xs uppercase tracking-[0.28em] text-[#7dd3fc]">Membership</p>
              <h3 className="font-fluid mt-2 text-4xl text-white">One plan, every model, full team velocity.</h3>
            </div>
            <div className="rounded-full border border-white/20 p-1">
              {(['solo', 'team'] as const).map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => setPlan(option)}
                  className={`rounded-full px-5 py-2 text-xs font-semibold uppercase tracking-[0.18em] transition ${
                    plan === option ? 'bg-white text-[#0b1320]' : 'text-[#d1fae5]'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <article className="rounded-xl border border-white/20 bg-[#07101a] p-4">
              <p className="font-groove text-[11px] uppercase tracking-[0.18em] text-[#9bd8cb]">Price</p>
              <p className="mt-2 text-4xl font-semibold text-white">{plan === 'solo' ? '$35' : '$31'}</p>
              <p className="font-groove text-xs text-[#b7e8db]">per user / month</p>
            </article>
            <article className="rounded-xl border border-white/20 bg-[#07101a] p-4">
              <p className="font-groove text-[11px] uppercase tracking-[0.18em] text-[#9bd8cb]">Includes</p>
              <p className="mt-2 text-sm text-[#d6f3eb]">Unlimited generate and edit lanes across all four image models.</p>
            </article>
            <article className="rounded-xl border border-white/20 bg-[#07101a] p-4">
              <p className="font-groove text-[11px] uppercase tracking-[0.18em] text-[#9bd8cb]">Best For</p>
              <p className="mt-2 text-sm text-[#d6f3eb]">
                {plan === 'solo' ? 'Independent creators scaling output quality.' : 'Creative squads shipping weekly campaigns.'}
              </p>
            </article>
          </div>
        </section>
      </div>
    </main>
  )
}

function DesignFive() {
  const [lens, setLens] = useState<'Generate' | 'Edit' | 'Remix'>('Generate')
  const [focusModel, setFocusModel] = useState<ModelId>('gpt-image-1.5')
  const [openPlaybook, setOpenPlaybook] = useState<'Briefing' | 'Direction' | 'Delivery'>('Direction')
  const [seats, setSeats] = useState(12)
  const [annual, setAnnual] = useState(true)

  const lensCopy: Record<typeof lens, string> = {
    Generate: 'Generate mode builds first-pass concept spreads with model-specific prompt routing.',
    Edit: 'Edit mode preserves composition while applying structured revision directives.',
    Remix: 'Remix mode blends styles across models to create controlled, unique final looks.',
  }

  const playbookCopy: Record<typeof openPlaybook, string> = {
    Briefing: 'Load brand rules, references, and campaign goals into reusable creative packets.',
    Direction: 'Assign lanes: Flux 2 for realism, Seedream for style, gpt-image-1.5 for precise edits, Nano Banana Pro for narrative scene sets.',
    Delivery: 'Export with naming presets, ratio packs, and stakeholder-ready review links.',
  }

  const monthlyPerSeat = annual ? 33 : 39
  const total = monthlyPerSeat * seats

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#141110] text-[#f8efe5]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(244,208,143,0.15),transparent_30%),radial-gradient(circle_at_80%_20%,rgba(244,114,182,0.12),transparent_35%)]" />
      <div className="relative mx-auto max-w-6xl px-6 pb-24 pt-10 sm:px-10">
        <header className="flex flex-wrap items-center justify-between gap-4 border-b border-[#f8efe5]/20 pb-4">
          <Link to="/" className="font-cinema text-xl text-[#f8efe5] hover:text-white">
            T4 Canvas
          </Link>
          <div className="font-studio flex gap-6 text-xs uppercase tracking-[0.2em] text-[#d8c4ae] sm:text-sm">
            <span>Suite</span>
            <span>Matrix</span>
            <span>Membership</span>
          </div>
        </header>

        <section className="mt-12 grid gap-8 lg:grid-cols-[1.08fr_0.92fr]">
          <div>
            <p className="font-studio text-xs uppercase tracking-[0.34em] text-[#f4d08f]">Concept Five · Director Cut</p>
            <h1 className="font-cinema mt-5 text-5xl leading-[0.95] text-white sm:text-7xl">
              The premium image studio for teams with exacting taste.
            </h1>
            <p className="font-studio mt-5 max-w-xl text-sm leading-relaxed text-[#d8c4ae] sm:text-base">
              One flat monthly membership unlocks Nano Banana Pro, Flux 2, gpt-image-1.5, and Seedream for both
              generation and precision editing inside a single cinematic workspace.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {(['Generate', 'Edit', 'Remix'] as const).map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => setLens(option)}
                  className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] transition sm:text-sm ${
                    lens === option
                      ? 'border-[#f4d08f] bg-[#f4d08f] text-[#141110]'
                      : 'border-[#f8efe5]/25 text-[#f8efe5] hover:border-[#f4d08f] hover:text-[#f4d08f]'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
            <p className="font-studio mt-5 max-w-xl text-sm leading-relaxed text-[#e9d7c4]">{lensCopy[lens]}</p>
          </div>

          <article className="rounded-[2.2rem] border border-[#f8efe5]/20 bg-[#1b1715] p-6">
            <p className="font-studio text-xs uppercase tracking-[0.26em] text-[#f4d08f]">Director's Matrix</p>
            <div className="mt-4 space-y-2">
              {(['Nano Banana Pro', 'Flux 2', 'gpt-image-1.5', 'Seedream'] as const).map((model) => (
                <button
                  key={model}
                  type="button"
                  onClick={() => setFocusModel(model)}
                  className={`flex w-full items-center justify-between rounded-xl border px-4 py-3 text-left transition ${
                    focusModel === model
                      ? 'border-[#f4d08f] bg-[#f4d08f]/15'
                      : 'border-[#f8efe5]/20 bg-[#f8efe5]/5 hover:border-[#f4d08f]/70'
                  }`}
                >
                  <span className="font-studio text-sm uppercase tracking-[0.14em]">{model}</span>
                  <span className="text-xs text-[#d8c4ae]">{modelData[model].speed}</span>
                </button>
              ))}
            </div>
            <p className="font-studio mt-4 text-sm text-[#e9d7c4]">{modelData[focusModel].tagline}</p>
          </article>
        </section>

        <section className="mt-14 grid gap-6 lg:grid-cols-[1fr_1fr]">
          <article className="rounded-[2rem] border border-[#f8efe5]/20 bg-[#1b1715] p-6">
            <p className="font-studio text-xs uppercase tracking-[0.3em] text-[#f4d08f]">Playbook</p>
            <h2 className="font-cinema mt-2 text-4xl text-white">Workflow choreography</h2>
            <div className="mt-5 space-y-3">
              {(['Briefing', 'Direction', 'Delivery'] as const).map((step) => (
                <button
                  key={step}
                  type="button"
                  onClick={() => setOpenPlaybook(step)}
                  className={`w-full rounded-2xl border p-4 text-left transition ${
                    openPlaybook === step
                      ? 'border-[#f4d08f] bg-[#f4d08f]/10'
                      : 'border-[#f8efe5]/20 bg-[#f8efe5]/5 hover:border-[#f4d08f]/60'
                  }`}
                >
                  <p className="font-studio text-xs uppercase tracking-[0.18em] text-[#f4d08f]">{step}</p>
                  <p className="font-studio mt-2 text-sm leading-relaxed text-[#e9d7c4]">{playbookCopy[step]}</p>
                </button>
              ))}
            </div>
          </article>

          <article className="rounded-[2rem] border border-[#f8efe5]/20 bg-[#f8efe5] p-6 text-[#141110]">
            <p className="font-studio text-xs uppercase tracking-[0.28em] text-[#8a6748]">Flat Membership</p>
            <h3 className="font-cinema mt-2 text-4xl">Scale seats with clear economics</h3>

            <div className="mt-5 flex items-center justify-between gap-3 rounded-full border border-[#141110]/20 bg-white/80 p-1">
              <button
                type="button"
                onClick={() => setAnnual(false)}
                className={`w-full rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] transition ${
                  annual ? 'text-[#8a6748]' : 'bg-[#141110] text-[#f8efe5]'
                }`}
              >
                Monthly
              </button>
              <button
                type="button"
                onClick={() => setAnnual(true)}
                className={`w-full rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] transition ${
                  annual ? 'bg-[#141110] text-[#f8efe5]' : 'text-[#8a6748]'
                }`}
              >
                Annual
              </button>
            </div>

            <p className="font-studio mt-5 text-sm text-[#6f4f33]">
              Seats
              <span className="ml-2 rounded-full border border-[#141110]/20 px-3 py-1 text-xs font-semibold">{seats}</span>
            </p>
            <input
              type="range"
              min={5}
              max={80}
              value={seats}
              onChange={(event) => setSeats(Number(event.target.value))}
              className="mt-3 w-full accent-[#141110]"
            />

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <article className="rounded-xl border border-[#141110]/20 bg-white p-4">
                <p className="font-studio text-[11px] uppercase tracking-[0.18em] text-[#8a6748]">Per Seat</p>
                <p className="mt-2 text-3xl font-semibold">${monthlyPerSeat}</p>
              </article>
              <article className="rounded-xl border border-[#141110]/20 bg-white p-4">
                <p className="font-studio text-[11px] uppercase tracking-[0.18em] text-[#8a6748]">Total</p>
                <p className="mt-2 text-3xl font-semibold">${total}</p>
              </article>
              <article className="sm:col-span-2 rounded-xl border border-[#141110]/20 bg-[#141110] p-4 text-[#f4d08f]">
                <p className="font-studio text-[11px] uppercase tracking-[0.18em]">Includes everything</p>
                <p className="mt-2 text-sm text-[#f8efe5]">Every model, generation plus editing lanes, and unrestricted export presets.</p>
              </article>
            </div>
          </article>
        </section>
      </div>
    </main>
  )
}

export default App
