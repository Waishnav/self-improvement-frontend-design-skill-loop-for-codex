import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'

const models = [
  {
    name: 'Nano Banana Pro',
    source: 'Gemini',
    latency: '2.3s avg',
    bestFor: 'Prompt-heavy art direction and rapid variant loops',
    outputsPerHour: 430,
    tint: 'from-lime-300 via-emerald-300 to-cyan-300',
    prompt: 'Future sneaker floating above a chrome tide, dramatic rim light, ad campaign frame.',
  },
  {
    name: 'Flux 2',
    source: 'Flux',
    latency: '3.1s avg',
    bestFor: 'Photoreal textures, branded product shoots, and cinematic depth',
    outputsPerHour: 360,
    tint: 'from-fuchsia-300 via-rose-300 to-orange-300',
    prompt: 'Quiet luxury watch on volcanic stone, moody lighting, magazine hero crop.',
  },
  {
    name: 'gpt-image-1.5',
    source: 'OpenAI',
    latency: '2.8s avg',
    bestFor: 'Structured prompt transforms and safe iterative edits',
    outputsPerHour: 395,
    tint: 'from-sky-300 via-blue-300 to-indigo-300',
    prompt: 'Architectural sketch converted to polished render, reflective glass, dusk palette.',
  },
  {
    name: 'Seedream',
    source: 'ByteDance',
    latency: '2.6s avg',
    bestFor: 'Stylized character runs and expressive visual storytelling',
    outputsPerHour: 410,
    tint: 'from-amber-300 via-yellow-300 to-lime-200',
    prompt: 'Anime-inspired traveler in wind tunnel station, dynamic cloth simulation.',
  },
]

const workflowModes = {
  Compose: [
    'Upload reference frames and lock composition areas before generation.',
    'Blend two models for weighted idea exploration in one pass.',
    'Queue 24 prompt variants with fixed art-direction constraints.',
  ],
  Edit: [
    'Mask local regions and apply model-specific refinement strength.',
    'Fork versions with reversible history checkpoints.',
    'Snapshot before/after cards for instant stakeholder review.',
  ],
  Upscale: [
    'Run selective 2x/4x passes on edges and logo zones only.',
    'Preserve skin tone and fabric details with profile guards.',
    'Export packs with web, print, and billboard-ready renditions.',
  ],
}

type WorkflowMode = keyof typeof workflowModes

export function DesignOnePage() {
  const [activeModel, setActiveModel] = useState(0)
  const [activeMode, setActiveMode] = useState<WorkflowMode>('Compose')
  const model = models[activeModel]

  const annualSavings = useMemo(() => {
    return (299 * 12 - 199 * 12).toLocaleString('en-US')
  }, [])

  return (
    <main className="noise-overlay relative min-h-screen overflow-x-clip bg-[#060b10] text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(123,255,207,0.22),transparent_36%),radial-gradient(circle_at_86%_11%,rgba(92,175,255,0.2),transparent_34%),radial-gradient(circle_at_55%_90%,rgba(255,232,141,0.15),transparent_45%)]" />

      <section className="relative mx-auto w-full max-w-6xl px-6 py-8 md:px-10 lg:py-12">
        <header className="mb-14 flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="font-mono-tech text-[11px] uppercase tracking-[0.32em] text-emerald-200/80">T4 Canvas</p>
            <p className="font-syne text-sm text-white/65">Concept: Neon Runtime</p>
          </div>
          <Link
            to="/"
            className="rounded-full border border-white/20 px-5 py-2 font-mono-tech text-xs uppercase tracking-[0.2em] text-white/85 transition hover:border-lime-300 hover:text-lime-200"
          >
            All Concepts
          </Link>
        </header>

        <div className="grid items-start gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-7">
            <p className="inline-flex rounded-full border border-lime-300/40 bg-lime-200/10 px-3 py-1 font-mono-tech text-[10px] uppercase tracking-[0.24em] text-lime-100">
              One studio. Four elite models. Flat monthly price.
            </p>
            <h1 className="font-unbounded text-4xl leading-[1.03] text-white md:text-6xl">
              Ship high-volume image campaigns at power-user speed.
            </h1>
            <p className="max-w-2xl text-base text-white/75 md:text-lg">
              T4 Canvas fuses Nano Banana Pro, Flux 2, gpt-image-1.5, and Seedream in one professional
              command stack. Generate, retouch, and upscale without switching tools or billing tiers.
            </p>

            <div className="grid gap-3 sm:grid-cols-2">
              {models.map((item, index) => (
                <button
                  key={item.name}
                  type="button"
                  onClick={() => setActiveModel(index)}
                  className={`rounded-2xl border px-4 py-3 text-left transition ${
                    index === activeModel
                      ? 'border-lime-300 bg-lime-100/10 text-white'
                      : 'border-white/15 bg-white/5 text-white/80 hover:border-white/35 hover:text-white'
                  }`}
                >
                  <p className="font-syne text-base font-semibold">{item.name}</p>
                  <p className="mt-1 font-mono-tech text-[11px] uppercase tracking-[0.15em] text-white/65">
                    {item.source}
                  </p>
                </button>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <button
                type="button"
                className="rounded-full bg-lime-300 px-6 py-3 font-syne text-sm font-semibold uppercase tracking-[0.14em] text-black transition hover:bg-lime-200"
              >
                Start Free Run
              </button>
              <button
                type="button"
                className="rounded-full border border-white/25 px-6 py-3 font-mono-tech text-xs uppercase tracking-[0.18em] text-white/85 transition hover:border-white/60 hover:text-white"
              >
                Watch 90s Demo
              </button>
            </div>
          </div>

          <aside className="relative isolate overflow-hidden rounded-3xl border border-white/20 bg-white/7 p-6">
            <div className={`mb-5 h-52 rounded-2xl bg-gradient-to-br ${model.tint} p-[1px]`}>
              <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-[15px] bg-[#041017] p-4">
                <div className="animate-pulse-ring absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/45" />
                <div className="relative z-10 flex items-center justify-between font-mono-tech text-[11px] uppercase tracking-[0.16em] text-white/75">
                  <span>Live Preview</span>
                  <span>{model.latency}</span>
                </div>
                <div className="relative z-10 space-y-2">
                  <p className="font-syne text-xl font-semibold text-white">{model.name}</p>
                  <p className="text-sm text-white/75">{model.bestFor}</p>
                </div>
              </div>
            </div>
            <p className="font-mono-tech text-[11px] uppercase tracking-[0.15em] text-lime-100/80">Prompt Snippet</p>
            <p className="mt-2 text-sm leading-relaxed text-white/75">{model.prompt}</p>
            <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
              <div className="rounded-xl border border-white/15 bg-black/20 p-3">
                <p className="font-mono-tech text-[10px] uppercase tracking-[0.16em] text-white/60">Outputs / Hour</p>
                <p className="mt-1 font-syne text-xl font-semibold">{model.outputsPerHour}</p>
              </div>
              <div className="rounded-xl border border-white/15 bg-black/20 p-3">
                <p className="font-mono-tech text-[10px] uppercase tracking-[0.16em] text-white/60">Avg Success</p>
                <p className="mt-1 font-syne text-xl font-semibold">97.3%</p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="relative mx-auto w-full max-w-6xl px-6 pb-8 md:px-10">
        <div className="grid gap-4 md:grid-cols-3">
          {[
            ['24/7 Batch Engine', 'Stack scheduled and live queues in one board.'],
            ['Prompt Provenance', 'Track every image back to model, seed, and style profile.'],
            ['Shared Workspaces', 'Review, annotate, and ship with role-based controls.'],
          ].map(([title, description]) => (
            <article key={title} className="rounded-2xl border border-white/15 bg-white/5 p-5">
              <h2 className="font-syne text-xl">{title}</h2>
              <p className="mt-2 text-sm text-white/70">{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="relative mx-auto w-full max-w-6xl px-6 py-12 md:px-10">
        <div className="rounded-3xl border border-white/20 bg-[#091620] p-6 md:p-8">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
            <h2 className="font-unbounded text-2xl leading-tight md:text-3xl">Pipeline behavior by workflow mode</h2>
            <div className="flex flex-wrap gap-2">
              {(Object.keys(workflowModes) as WorkflowMode[]).map((mode) => (
                <button
                  key={mode}
                  type="button"
                  onClick={() => setActiveMode(mode)}
                  className={`rounded-full px-4 py-2 font-mono-tech text-[11px] uppercase tracking-[0.15em] transition ${
                    activeMode === mode
                      ? 'bg-emerald-300 text-black'
                      : 'border border-white/20 bg-transparent text-white/70 hover:border-white/45 hover:text-white'
                  }`}
                >
                  {mode}
                </button>
              ))}
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {workflowModes[activeMode].map((line) => (
              <div key={line} className="rounded-2xl border border-white/15 bg-black/20 p-4 text-sm text-white/78">
                {line}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative mx-auto w-full max-w-6xl px-6 py-8 pb-14 md:px-10 lg:pb-20">
        <div className="grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
          <article className="rounded-3xl border border-lime-200/35 bg-lime-100/10 p-7">
            <p className="font-mono-tech text-[11px] uppercase tracking-[0.2em] text-lime-100/90">Flat fee economics</p>
            <h2 className="mt-3 font-unbounded text-3xl leading-tight text-lime-50">$199/mo per pro seat.</h2>
            <p className="mt-3 max-w-xl text-sm text-lime-50/78">
              All four model families, generation, editing, upscaling, prompt versioning, and team handoffs.
              No per-model surcharge.
            </p>
            <div className="mt-5 inline-flex rounded-full border border-lime-100/40 px-4 py-2 font-mono-tech text-[11px] uppercase tracking-[0.18em] text-lime-50">
              Yearly savings vs stitched tools: ${annualSavings}
            </div>
          </article>
          <article className="rounded-3xl border border-white/18 bg-white/6 p-7">
            <h3 className="font-syne text-2xl">Built for teams shipping weekly campaigns</h3>
            <ul className="mt-4 space-y-2 text-sm text-white/75">
              <li>Creative directors keep control with model-specific profiles.</li>
              <li>Designers run edits and exports from one workspace.</li>
              <li>Marketing ops tracks throughput and approval status live.</li>
            </ul>
          </article>
        </div>
      </section>
    </main>
  )
}
