import { useState } from 'react'

const modelCards = [
  {
    name: 'Nano Banana Pro',
    tag: 'Gemini',
    detail: 'Character consistency under aggressive prompt chaining.',
  },
  {
    name: 'Flux 2',
    tag: 'Flux',
    detail: 'Photoreal texture fidelity tuned for art direction loops.',
  },
  {
    name: 'gpt-image-1.5',
    tag: 'OpenAI',
    detail: 'Fast ideation with clean composition and text rendering.',
  },
  {
    name: 'Seedream',
    tag: 'ByteDance',
    detail: 'Cinematic color fields for concept-heavy campaigns.',
  },
]

const processRail = [
  'Prompt stack with model-aware presets',
  'One-click variant explosion across all engines',
  'Mask, inpaint, and upscale inside a unified timeline',
  'Ship approved frames straight to your campaign board',
]

const proofCards = [
  '52K scenes generated weekly by paid creators',
  '91% say model-switching saves at least four hours',
  '120+ agencies use one workspace for every client style',
]

export function ConceptOne() {
  const [glow, setGlow] = useState({ x: 64, y: 34 })

  return (
    <main className="relative overflow-hidden bg-[#05070f] text-zinc-100">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_12%,rgba(78,255,210,0.16),transparent_45%),radial-gradient(circle_at_84%_20%,rgba(137,198,255,0.16),transparent_44%),radial-gradient(circle_at_50%_90%,rgba(255,219,107,0.1),transparent_40%)]" />

      <section
        className="relative mx-auto grid max-w-7xl gap-10 px-6 pb-20 pt-32 lg:grid-cols-[1.1fr_0.9fr] lg:items-end"
        onMouseMove={(event) => {
          const bounds = event.currentTarget.getBoundingClientRect()
          const x = ((event.clientX - bounds.left) / bounds.width) * 100
          const y = ((event.clientY - bounds.top) / bounds.height) * 100
          setGlow({ x, y })
        }}
        onMouseLeave={() => setGlow({ x: 64, y: 34 })}
        style={{
          background: `radial-gradient(circle at ${glow.x}% ${glow.y}%, rgba(125,255,230,0.18), transparent 45%)`,
        }}
      >
        <div className="space-y-8">
          <div className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-xs tracking-[0.28em] text-cyan-100">
            T4 CANVAS
            <span className="inline-block h-2 w-2 animate-soft-pulse rounded-full bg-lime-300" />
          </div>

          <h1 className="font-space text-5xl font-semibold leading-[0.92] text-balance sm:text-6xl lg:text-7xl">
            Compose impossible worlds in one control room.
          </h1>

          <p className="max-w-xl text-base text-zinc-300 sm:text-lg">
            Drive Nano Banana Pro, Flux 2, gpt-image-1.5, and Seedream from one cinematic workspace with one flat monthly membership.
          </p>

          <div className="flex flex-wrap gap-3">
            <button className="rounded-full bg-cyan-300 px-6 py-3 text-sm font-bold tracking-[0.16em] text-zinc-950 transition hover:bg-cyan-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-200">
              START BUILDING
            </button>
            <button className="rounded-full border border-white/25 px-6 py-3 text-sm font-bold tracking-[0.16em] text-white transition hover:border-white/50 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-200">
              WATCH FLOW
            </button>
          </div>

          <div className="grid max-w-2xl grid-cols-3 gap-3 pt-4 text-center sm:gap-4">
            <div className="rounded-2xl border border-white/10 bg-black/30 px-3 py-4">
              <p className="text-2xl font-semibold text-cyan-100">4</p>
              <p className="mt-1 text-[11px] tracking-[0.12em] text-zinc-400">PREMIUM MODELS</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/30 px-3 py-4">
              <p className="text-2xl font-semibold text-lime-200">1.8s</p>
              <p className="mt-1 text-[11px] tracking-[0.12em] text-zinc-400">AVG PREVIEW</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/30 px-3 py-4">
              <p className="text-2xl font-semibold text-yellow-200">$39</p>
              <p className="mt-1 text-[11px] tracking-[0.12em] text-zinc-400">FLAT MONTHLY</p>
            </div>
          </div>
        </div>

        <div className="relative h-full min-h-[420px] rounded-[2.25rem] border border-white/15 bg-white/[0.03] p-5 shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
          <div className="absolute -left-7 top-16 hidden h-20 w-20 animate-float-y rounded-3xl border border-cyan-200/40 bg-cyan-300/10 backdrop-blur md:block" />
          <div className="absolute -right-8 bottom-14 hidden h-24 w-24 animate-float-y rounded-full border border-lime-200/35 bg-lime-300/10 backdrop-blur md:block" />

          <div className="grid h-full grid-cols-2 gap-4">
            {modelCards.map((card) => (
              <article
                key={card.name}
                className="group rounded-3xl border border-white/10 bg-black/35 p-4 transition duration-300 hover:-translate-y-1 hover:border-cyan-200/50 hover:bg-black/55"
              >
                <p className="text-[10px] tracking-[0.2em] text-zinc-400">{card.tag}</p>
                <h2 className="mt-2 font-space text-xl font-semibold text-white">{card.name}</h2>
                <p className="mt-3 text-sm text-zinc-300">{card.detail}</p>
                <div className="mt-4 h-1.5 rounded-full bg-white/10">
                  <div className="h-full w-0 rounded-full bg-gradient-to-r from-cyan-200 via-cyan-100 to-lime-200 transition-all duration-500 group-hover:w-full" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative border-y border-white/10 bg-[#070c19]/80 py-18">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.85fr_1.15fr]">
          <h2 className="font-space text-4xl font-semibold leading-tight text-cyan-100">
            Build once. Branch across every image engine.
          </h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {processRail.map((step, index) => (
              <div
                key={step}
                className="rounded-2xl border border-white/10 bg-black/30 p-4 transition hover:border-cyan-100/45 hover:bg-black/45"
              >
                <p className="text-xs tracking-[0.14em] text-zinc-400">STEP {index + 1}</p>
                <p className="mt-2 text-sm text-zinc-100">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-6 py-18">
        <div className="grid gap-5 md:grid-cols-3">
          {proofCards.map((proof, idx) => (
            <article
              key={proof}
              className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/8 to-white/2 p-6"
            >
              <p className="text-sm tracking-[0.16em] text-cyan-100">0{idx + 1}</p>
              <p className="mt-3 text-lg text-zinc-100">{proof}</p>
            </article>
          ))}
        </div>

        <div className="mt-10 overflow-hidden rounded-[2.25rem] border border-cyan-100/30 bg-gradient-to-r from-[#081227] via-[#0c1f37] to-[#102a3f] p-8 sm:p-10">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-xs tracking-[0.2em] text-cyan-100">MEMBERSHIP</p>
              <h3 className="mt-3 font-space text-4xl font-semibold text-white sm:text-5xl">$39 / month</h3>
              <p className="mt-3 max-w-xl text-sm text-cyan-50/85">
                Unlimited projects, all four premium image models, advanced editing, and commercial usage rights with no per-model upsells.
              </p>
            </div>
            <button className="rounded-full bg-white px-7 py-3 text-sm font-bold tracking-[0.16em] text-[#0a1b2f] transition hover:bg-cyan-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-100">
              CLAIM FOUNDING ACCESS
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}
