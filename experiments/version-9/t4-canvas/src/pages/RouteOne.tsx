import { useState } from 'react'
import { Link } from 'react-router-dom'

const aspectOptions = ['Square', 'Portrait', 'Wide'] as const
const modelOptions = ['Nano Banana Pro', 'Flux 2', 'gpt-image-1.5', 'Seedream'] as const

const modelDetails: Record<(typeof modelOptions)[number], {
  speed: string
  edge: string
  bestFor: string
}> = {
  'Nano Banana Pro': {
    speed: '4.8s avg draft',
    edge: 'Strong photoreal textures',
    bestFor: 'Campaign hero stills',
  },
  'Flux 2': {
    speed: '3.9s avg draft',
    edge: 'Shape fidelity under edits',
    bestFor: 'High-volume ideation',
  },
  'gpt-image-1.5': {
    speed: '4.4s avg draft',
    edge: 'Prompt nuance and typography',
    bestFor: 'Art direction + poster text',
  },
  Seedream: {
    speed: '3.5s avg draft',
    edge: 'Cinematic color harmonies',
    bestFor: 'Atmospheric storytelling',
  },
}

const compositionCards = [
  {
    title: 'Monochrome Product Drop',
    note: '14 curated outputs',
    shade: 'from-zinc-100/30 via-zinc-300/10 to-amber-100/40',
  },
  {
    title: 'Hyperreal Portrait Kit',
    note: 'Retouch chain ready',
    shade: 'from-teal-200/40 via-cyan-200/20 to-sky-100/10',
  },
  {
    title: 'Architectural Moodline',
    note: 'Perspective lock enabled',
    shade: 'from-orange-300/35 via-amber-100/10 to-rose-200/20',
  },
  {
    title: 'Packaging Sprint Deck',
    note: '12 variants in queue',
    shade: 'from-indigo-300/35 via-violet-200/5 to-emerald-200/20',
  },
  {
    title: 'Editorial Macro Lens',
    note: 'Noise-safe lighting',
    shade: 'from-lime-200/35 via-yellow-100/10 to-teal-100/20',
  },
  {
    title: 'Streetwear Campaign',
    note: 'Motion still blend',
    shade: 'from-red-200/35 via-orange-200/10 to-zinc-100/20',
  },
] as const

const aspectClass: Record<(typeof aspectOptions)[number], string> = {
  Square: 'aspect-square',
  Portrait: 'aspect-[3/4]',
  Wide: 'aspect-[16/9]',
}

export function RouteOne() {
  const [aspect, setAspect] = useState<(typeof aspectOptions)[number]>('Wide')
  const [activeModel, setActiveModel] =
    useState<(typeof modelOptions)[number]>('Nano Banana Pro')
  const [blend, setBlend] = useState(58)

  const detail = modelDetails[activeModel]

  return (
    <main className="font-body-1 min-h-screen bg-[#0a0d10] text-[#f5f2e8]">
      <header className="border-b border-amber-100/10 bg-black/30 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
          <Link
            to="/"
            className="font-display-1 text-base uppercase tracking-[0.28em] text-amber-100 transition hover:text-amber-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-200"
          >
            T4 Canvas
          </Link>
          <nav className="hidden items-center gap-6 text-xs uppercase tracking-[0.2em] text-amber-100/80 sm:flex">
            <a href="#collections" className="transition hover:text-white">
              Collections
            </a>
            <a href="#spotlight" className="transition hover:text-white">
              Spotlight
            </a>
            <a href="#plans" className="transition hover:text-white">
              Membership
            </a>
          </nav>
        </div>
      </header>

      <section className="grain-bg border-b border-amber-100/10 px-5 py-12 sm:px-8 sm:py-16">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="space-y-6">
            <p className="inline-flex items-center rounded-full border border-amber-200/30 bg-amber-100/10 px-3 py-1 text-xs uppercase tracking-[0.24em] text-amber-100">
              Gallery Engine
            </p>
            <h1 className="font-display-1 text-4xl font-semibold leading-tight text-[#fff8ec] sm:text-5xl lg:text-6xl">
              Direct every pixel across four elite models
            </h1>
            <p className="max-w-xl text-sm text-amber-50/85 sm:text-base">
              One monthly fee unlocks Nano Banana Pro, Flux 2, gpt-image-1.5,
              and Seedream with unified prompts, edits, and exports.
            </p>

            <div className="space-y-2">
              <p className="text-xs uppercase tracking-[0.2em] text-amber-100/70">
                Output Framing
              </p>
              <div className="flex flex-wrap gap-2">
                {aspectOptions.map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => setAspect(option)}
                    className={`rounded-full border px-4 py-2 text-sm transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-amber-200 ${
                      aspect === option
                        ? 'border-amber-200 bg-amber-200 text-[#1d1000]'
                        : 'border-amber-100/35 bg-transparent text-amber-50 hover:border-amber-200'
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div
              className={`relative overflow-hidden rounded-3xl border border-amber-100/20 bg-gradient-to-br from-amber-200/30 via-orange-200/10 to-teal-200/25 p-4 ${aspectClass[aspect]} motion-safe-float motion-reduce:animate-none`}
            >
              <div className="absolute -left-6 top-6 h-20 w-20 rounded-full bg-amber-50/35 blur-2xl" />
              <div className="absolute -right-8 bottom-8 h-24 w-24 rounded-full bg-cyan-100/30 blur-2xl" />
              <div className="relative flex h-full flex-col justify-between rounded-2xl border border-white/25 bg-black/35 p-5">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-amber-50/80">
                    Active Set
                  </p>
                  <p className="mt-1 text-xl font-semibold text-white">{activeModel}</p>
                </div>
                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-amber-50/70">
                      Selected Aspect
                    </p>
                    <p className="text-lg font-semibold text-amber-50">{aspect}</p>
                  </div>
                  <div className="h-16 w-16 rounded-xl border border-amber-50/35 bg-gradient-to-br from-orange-100/30 to-teal-100/30" />
                </div>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {['42 prompts', '11 live edits', '4 model sync'].map((value) => (
                <div
                  key={value}
                  className="rounded-2xl border border-amber-100/20 bg-amber-50/5 p-3 text-sm text-amber-50/85 transition hover:border-amber-100/40"
                >
                  {value}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="collections" className="px-5 py-14 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-6 flex items-end justify-between gap-6">
            <h2 className="font-display-1 text-3xl text-[#fff4df] sm:text-4xl">
              Collection Mosaic
            </h2>
            <p className="max-w-md text-sm text-amber-50/70">
              Build reusable visual boards and drag winning frames into your next
              prompt branch.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {compositionCards.map((card, index) => (
              <article
                key={card.title}
                className={`group relative overflow-hidden rounded-2xl border border-amber-100/15 bg-gradient-to-br ${card.shade} p-5 transition duration-300 hover:-translate-y-1 hover:border-amber-100/45`}
              >
                <div className="absolute right-4 top-4 rounded-full border border-white/40 px-2 py-1 text-[10px] uppercase tracking-[0.2em] text-white/80">
                  #{index + 1}
                </div>
                <h3 className="font-display-1 text-2xl text-white">{card.title}</h3>
                <p className="mt-3 text-sm text-white/80">{card.note}</p>
                <button
                  type="button"
                  className="mt-5 rounded-full border border-white/35 bg-black/30 px-3 py-1 text-xs uppercase tracking-[0.2em] text-white transition hover:border-white/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-white"
                >
                  Open Board
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="spotlight"
        className="bg-[#f4e9d6] px-5 py-14 text-[#1f1302] sm:px-8"
      >
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-amber-900/70">
              Model Spotlight
            </p>
            <h2 className="font-display-1 mt-3 text-4xl leading-tight text-[#1d1204]">
              Tune each generation lane with intent
            </h2>
            <p className="mt-4 text-sm text-amber-950/75">
              Swap models without changing your creative flow. T4 Canvas keeps
              tool memory, masks, and references in one place.
            </p>
          </div>

          <div className="rounded-3xl border border-amber-900/20 bg-white/80 p-5">
            <div className="flex flex-wrap gap-2">
              {modelOptions.map((model) => (
                <button
                  key={model}
                  type="button"
                  onClick={() => setActiveModel(model)}
                  className={`rounded-full border px-3 py-2 text-xs uppercase tracking-[0.2em] transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-amber-700 ${
                    activeModel === model
                      ? 'border-amber-900 bg-amber-900 text-amber-50'
                      : 'border-amber-900/20 bg-white text-amber-900 hover:border-amber-900/50'
                  }`}
                >
                  {model}
                </button>
              ))}
            </div>

            <dl className="mt-6 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-amber-900/20 bg-amber-100/35 p-4">
                <dt className="text-xs uppercase tracking-[0.2em] text-amber-900/70">
                  Draft Velocity
                </dt>
                <dd className="mt-2 text-lg font-semibold text-amber-950">
                  {detail.speed}
                </dd>
              </div>
              <div className="rounded-2xl border border-amber-900/20 bg-amber-100/35 p-4">
                <dt className="text-xs uppercase tracking-[0.2em] text-amber-900/70">
                  Technical Edge
                </dt>
                <dd className="mt-2 text-lg font-semibold text-amber-950">
                  {detail.edge}
                </dd>
              </div>
              <div className="rounded-2xl border border-amber-900/20 bg-amber-100/35 p-4">
                <dt className="text-xs uppercase tracking-[0.2em] text-amber-900/70">
                  Best Use
                </dt>
                <dd className="mt-2 text-lg font-semibold text-amber-950">
                  {detail.bestFor}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <section className="px-5 py-14 sm:px-8">
        <div className="mx-auto max-w-6xl rounded-3xl border border-amber-100/20 bg-[#131921] p-6 sm:p-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <h2 className="font-display-1 text-3xl text-amber-50">Compare Slider</h2>
            <label className="flex items-center gap-3 text-sm text-amber-50/80">
              Blend
              <input
                type="range"
                min={0}
                max={100}
                value={blend}
                onChange={(event) => setBlend(Number(event.target.value))}
                className="accent-amber-300"
              />
            </label>
          </div>

          <div className="relative mt-6 overflow-hidden rounded-2xl border border-amber-100/20">
            <div className="h-56 bg-[linear-gradient(130deg,#0f172a,#0c4a6e,#06b6d4)] sm:h-72" />
            <div
              className="absolute inset-y-0 left-0 overflow-hidden border-r border-white/35"
              style={{ width: `${blend}%` }}
            >
              <div className="h-full w-[110%] bg-[linear-gradient(130deg,#451a03,#b45309,#f59e0b)]" />
            </div>
            <div className="pointer-events-none absolute inset-0 flex items-end justify-between p-4 text-xs uppercase tracking-[0.18em] text-white/85">
              <span>Flux 2</span>
              <span>Nano Banana Pro</span>
            </div>
          </div>
        </div>
      </section>

      <section id="plans" className="px-5 pb-10 sm:px-8">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-5 rounded-3xl border border-amber-100/20 bg-gradient-to-r from-amber-200/20 via-orange-200/10 to-cyan-200/15 p-6">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-amber-50/80">
              Flat Membership
            </p>
            <h2 className="font-display-1 mt-2 text-3xl text-white">
              One fee. Every model. Full creative control.
            </h2>
          </div>
          <button
            type="button"
            className="motion-safe-pulse-outline rounded-full border border-amber-50/35 bg-amber-200 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#2c1600] transition hover:bg-amber-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-amber-100 motion-reduce:animate-none"
          >
            Start Membership
          </button>
        </div>
      </section>

      <footer className="border-t border-amber-100/10 px-5 py-6 text-xs uppercase tracking-[0.18em] text-amber-50/60 sm:px-8">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-2">
          <span>T4 Canvas Studio</span>
          <span>Nano Banana Pro · Flux 2 · gpt-image-1.5 · Seedream</span>
        </div>
      </footer>
    </main>
  )
}
