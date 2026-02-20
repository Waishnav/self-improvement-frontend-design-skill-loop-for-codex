import { useState } from 'react'
import { Link } from 'react-router-dom'

const lensPresets = [
  {
    name: 'Dreamcore',
    vibe: 'Soft bloom, pastel highlights, and ambient mood depth.',
    gradient: 'from-cyan-200 via-teal-100 to-emerald-200',
    sample: 'Floating skincare bottle above translucent water ripples, serene ad mood.',
  },
  {
    name: 'Product Focus',
    vibe: 'Controlled reflections and catalog-safe directional lighting.',
    gradient: 'from-amber-200 via-rose-100 to-orange-200',
    sample: 'Minimal speaker on curved stone pedestal, premium studio lighting and haze.',
  },
  {
    name: 'Architecture',
    vibe: 'Atmospheric perspective with material-sensitive rendering.',
    gradient: 'from-sky-200 via-indigo-100 to-violet-200',
    sample: 'Coastal villa at dawn with diffuse mist and realistic window reflections.',
  },
  {
    name: 'Character',
    vibe: 'Expressive stylization while preserving facial continuity.',
    gradient: 'from-lime-200 via-yellow-100 to-emerald-100',
    sample: 'Stylized traveler portrait, windswept coat, cinematic key light on skin texture.',
  },
]

type CompareView = 'Before' | 'After'

export function DesignFourPage() {
  const [activeLens, setActiveLens] = useState(0)
  const [compareView, setCompareView] = useState<CompareView>('After')
  const lens = lensPresets[activeLens]

  return (
    <main className="relative min-h-screen overflow-x-clip bg-[#071b24] text-[#eaf9ff]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_12%,rgba(146,245,241,0.27),transparent_36%),radial-gradient(circle_at_88%_18%,rgba(231,196,255,0.24),transparent_34%),radial-gradient(circle_at_48%_86%,rgba(144,255,197,0.2),transparent_40%)]" />

      <section className="relative mx-auto w-full max-w-6xl px-6 py-8 md:px-10 lg:py-12">
        <header className="mb-12 flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="font-mono-tech text-[11px] uppercase tracking-[0.32em] text-cyan-100/90">T4 Canvas</p>
            <p className="font-archivo text-sm text-cyan-50/70">Concept: Prism Habitat</p>
          </div>
          <Link
            to="/"
            className="rounded-full border border-cyan-100/35 bg-cyan-200/10 px-5 py-2 font-mono-tech text-xs uppercase tracking-[0.16em] text-cyan-50/90 transition hover:border-cyan-100/60 hover:bg-cyan-200/20"
          >
            All Concepts
          </Link>
        </header>

        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-7">
            <p className="inline-flex rounded-full border border-cyan-100/30 bg-cyan-100/10 px-3 py-1 font-mono-tech text-[10px] uppercase tracking-[0.19em] text-cyan-50/95">
              Cinematic image generation with fluid art direction
            </p>
            <h1 className="font-syne text-4xl leading-[1.02] md:text-6xl">
              Build immersive visual worlds without leaving your studio flow.
            </h1>
            <p className="max-w-2xl text-base text-cyan-50/78 md:text-lg">
              T4 Canvas brings Nano Banana Pro, Flux 2, gpt-image-1.5, and Seedream into one polished
              environment where ideation, edits, and final exports stay connected.
            </p>

            <div className="grid gap-3 sm:grid-cols-2">
              {lensPresets.map((item, index) => (
                <button
                  key={item.name}
                  type="button"
                  onClick={() => setActiveLens(index)}
                  className={`rounded-2xl border p-4 text-left transition ${
                    index === activeLens
                      ? 'border-cyan-100/60 bg-cyan-100/15 text-cyan-50'
                      : 'border-cyan-100/20 bg-black/20 text-cyan-50/75 hover:border-cyan-100/35'
                  }`}
                >
                  <p className="font-syne text-lg font-semibold">{item.name}</p>
                  <p className="mt-1 text-sm text-cyan-50/72">{item.vibe}</p>
                </button>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <button
                type="button"
                className="rounded-full bg-cyan-100 px-6 py-3 font-syne text-sm font-semibold uppercase tracking-[0.14em] text-[#0b2730] transition hover:bg-white"
              >
                Start Visual Session
              </button>
              <button
                type="button"
                className="rounded-full border border-cyan-100/35 px-6 py-3 font-mono-tech text-xs uppercase tracking-[0.16em] text-cyan-50/90 transition hover:border-cyan-100/55 hover:text-white"
              >
                View Demo Reel
              </button>
            </div>
          </div>

          <aside className="relative isolate overflow-hidden rounded-[30px] border border-cyan-100/35 bg-white/8 p-6 backdrop-blur-xl">
            <div className={`mb-5 h-56 rounded-2xl bg-gradient-to-br ${lens.gradient} p-[1px]`}>
              <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-[15px] bg-[#072531]/85 p-4">
                <div className="animate-slide-glow absolute left-0 top-4 h-14 w-32 rounded-full bg-white/35 blur-2xl" />
                <p className="relative z-10 font-mono-tech text-[11px] uppercase tracking-[0.15em] text-cyan-50/80">Active Lens</p>
                <h2 className="relative z-10 font-syne text-3xl font-semibold text-white">{lens.name}</h2>
              </div>
            </div>
            <p className="font-mono-tech text-[11px] uppercase tracking-[0.16em] text-cyan-50/80">Prompt Capture</p>
            <p className="mt-2 text-sm text-cyan-50/80">{lens.sample}</p>
            <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
              <div className="rounded-xl border border-cyan-100/25 bg-[#041922]/55 p-3">
                <p className="font-mono-tech text-[10px] uppercase tracking-[0.15em] text-cyan-50/70">Throughput</p>
                <p className="mt-1 font-syne text-2xl font-semibold text-white">4.8x</p>
              </div>
              <div className="rounded-xl border border-cyan-100/25 bg-[#041922]/55 p-3">
                <p className="font-mono-tech text-[10px] uppercase tracking-[0.15em] text-cyan-50/70">Approval Rate</p>
                <p className="mt-1 font-syne text-2xl font-semibold text-white">96%</p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="relative mx-auto w-full max-w-6xl px-6 pb-8 md:px-10">
        <div className="grid gap-4 md:grid-cols-3">
          {[
            ['Prompt memory', 'Store visual language profiles so every campaign keeps its style DNA.'],
            ['Model handoffs', 'Move from Nano Banana Pro ideation to Flux 2 refinement in one click.'],
            ['Client-ready exports', 'Deliver variants with baked metadata and reversible history.'],
          ].map(([title, body]) => (
            <article key={title} className="rounded-2xl border border-cyan-100/25 bg-white/6 p-5 backdrop-blur-md">
              <h2 className="font-syne text-xl text-white">{title}</h2>
              <p className="mt-2 text-sm text-cyan-50/75">{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="relative mx-auto w-full max-w-6xl px-6 py-12 md:px-10">
        <div className="rounded-[30px] border border-cyan-100/30 bg-[#082531]/65 p-6 backdrop-blur-xl md:p-8">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
            <h2 className="font-syne text-3xl leading-tight md:text-4xl">Non-destructive Remix View</h2>
            <div className="flex gap-2">
              {(['Before', 'After'] as CompareView[]).map((view) => (
                <button
                  key={view}
                  type="button"
                  onClick={() => setCompareView(view)}
                  className={`rounded-full px-4 py-2 font-mono-tech text-[11px] uppercase tracking-[0.14em] transition ${
                    compareView === view
                      ? 'bg-cyan-100 text-[#082531]'
                      : 'border border-cyan-100/35 text-cyan-50/80 hover:border-cyan-100/55 hover:text-white'
                  }`}
                >
                  {view}
                </button>
              ))}
            </div>
          </div>

          <div className="grid gap-4 lg:grid-cols-[0.95fr_1.05fr]">
            <article className="rounded-2xl border border-cyan-100/25 bg-black/25 p-5">
              <p className="font-mono-tech text-[11px] uppercase tracking-[0.16em] text-cyan-50/75">Current Panel</p>
              <h3 className="mt-2 font-syne text-2xl text-white">{compareView === 'Before' ? 'Original Capture' : 'Remixed Master'}</h3>
              <p className="mt-2 text-sm text-cyan-50/78">
                {compareView === 'Before'
                  ? 'Base frame with initial composition and unrefined contrast settings.'
                  : 'Adjusted local light, refined texture passes, and export-ready tonal balance.'}
              </p>
            </article>
            <article className="rounded-2xl border border-cyan-100/25 bg-black/25 p-5">
              <p className="font-mono-tech text-[11px] uppercase tracking-[0.16em] text-cyan-50/75">Delta Summary</p>
              <div className="mt-3 grid gap-3 md:grid-cols-3">
                {[
                  compareView === 'Before' ? 'Light pass: 0' : 'Light pass: +3',
                  compareView === 'Before' ? 'Texture pass: 0' : 'Texture pass: +2',
                  compareView === 'Before' ? 'Sharpen pass: 0' : 'Sharpen pass: +1',
                ].map((item) => (
                  <div key={item} className="rounded-xl border border-cyan-100/25 bg-[#03161d] p-3 text-sm text-cyan-50/80">
                    {item}
                  </div>
                ))}
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="relative mx-auto w-full max-w-6xl px-6 pb-14 md:px-10 lg:pb-20">
        <div className="grid gap-4 lg:grid-cols-[1fr_1fr]">
          <article className="rounded-3xl border border-cyan-100/30 bg-white/8 p-7 backdrop-blur-md">
            <h3 className="font-syne text-2xl text-white">Single Subscription, Full Model Orchestra</h3>
            <p className="mt-3 text-sm text-cyan-50/75">
              Access Nano Banana Pro, Flux 2, gpt-image-1.5, and Seedream with one predictable monthly plan.
            </p>
          </article>
          <article className="rounded-3xl border border-cyan-100/30 bg-cyan-100 p-7 text-[#082731]">
            <p className="font-mono-tech text-[11px] uppercase tracking-[0.18em]">Flat Monthly Fee</p>
            <h3 className="mt-2 font-syne text-4xl font-semibold">$199</h3>
            <p className="mt-2 text-sm">Unlimited generation and edits for teams that create every day.</p>
            <button
              type="button"
              className="mt-5 rounded-full border border-[#0b3340] px-5 py-3 font-mono-tech text-xs uppercase tracking-[0.16em] transition hover:bg-[#0b3340] hover:text-cyan-100"
            >
              Start with T4 Canvas
            </button>
          </article>
        </div>
      </section>
    </main>
  )
}
