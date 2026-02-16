import { useState } from 'react'

const engines = [
  {
    id: 'nano',
    name: 'Nano Banana Pro',
    role: 'Character continuity under extreme direction changes.',
    score: 96,
  },
  {
    id: 'flux',
    name: 'Flux 2',
    role: 'Photoreal material control for product storytelling.',
    score: 94,
  },
  {
    id: 'gpt',
    name: 'gpt-image-1.5',
    role: 'Rapid ideation with layout-aware text rendering.',
    score: 92,
  },
  {
    id: 'seedream',
    name: 'Seedream',
    role: 'Stylized cinematic atmospheres for campaign worlds.',
    score: 95,
  },
]

const workflow = [
  'Write one brief with locked art-direction tokens.',
  'Dispatch jobs to all engines with model-aware parameters.',
  'Branch top renders into edit timelines and mask passes.',
  'Ship approved packs with prompts, assets, and revision map.',
]

const proof = [
  { label: 'Weekly renders', value: '1.2M' },
  { label: 'Avg first draft', value: '98s' },
  { label: 'Teams on flat plan', value: '31k' },
]

export function ConceptOne() {
  const [beam, setBeam] = useState({ x: 72, y: 28 })
  const [active, setActive] = useState(engines[0])

  return (
    <main
      className="relative overflow-hidden bg-[#02070f] text-[#e8f2ff]"
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect()
        const x = ((event.clientX - rect.left) / rect.width) * 100
        const y = ((event.clientY - rect.top) / rect.height) * 100
        setBeam({ x, y })
      }}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_16%,rgba(47,156,255,0.26),transparent_38%),radial-gradient(circle_at_80%_12%,rgba(37,239,194,0.18),transparent_32%),radial-gradient(circle_at_50%_95%,rgba(251,210,88,0.12),transparent_40%)]" />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: `radial-gradient(circle at ${beam.x}% ${beam.y}%, rgba(95, 180, 255, 0.22), transparent 34%)`,
        }}
      />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,transparent_0%,rgba(255,255,255,0.05)_50%,transparent_100%)] animate-beam-pan" />

      <section className="relative mx-auto grid max-w-7xl gap-12 px-6 pb-20 pt-28 lg:grid-cols-[1.08fr_0.92fr] lg:items-end">
        <div>
          <div className="inline-flex items-center gap-3 rounded-full border border-[#74e7ff]/40 bg-[#0d1f36]/80 px-4 py-2 text-[11px] tracking-[0.2em] text-[#b4e8ff]">
            T4 CANVAS SIGNAL FORGE
            <span className="h-2 w-2 rounded-full bg-cyan-300 animate-pulse-dot" />
          </div>

          <h1 className="mt-6 font-syne text-5xl font-semibold leading-[0.88] text-balance sm:text-6xl lg:text-7xl">
            Prompt once.
            <span className="block font-instrument text-6xl italic text-[#9fe5ff] sm:text-7xl lg:text-8xl">Launch visual futures.</span>
          </h1>

          <p className="mt-6 max-w-xl font-jakarta text-base text-[#bdd3f3] sm:text-lg">
            Control Nano Banana Pro, Flux 2, gpt-image-1.5, and Seedream from one power desk for a single flat monthly fee.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <button className="rounded-full bg-[#b2f3ff] px-7 py-3 font-jakarta text-xs font-bold tracking-[0.16em] text-[#06131f] transition hover:bg-[#d0f8ff] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b2f3ff]">
              START STUDIO
            </button>
            <button className="rounded-full border border-white/30 px-7 py-3 font-jakarta text-xs font-semibold tracking-[0.16em] text-white transition hover:border-white/60 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
              WATCH FLOW
            </button>
          </div>

          <div className="mt-8 grid max-w-xl grid-cols-3 gap-3">
            {proof.map((item) => (
              <div key={item.label} className="rounded-2xl border border-white/15 bg-[#0a1323]/75 px-3 py-4">
                <p className="font-syne text-2xl text-[#deeeff]">{item.value}</p>
                <p className="mt-1 font-mono text-[10px] tracking-[0.16em] text-[#89a7ce]">{item.label.toUpperCase()}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] border border-[#29496f] bg-[#081324]/90 p-5 shadow-[0_24px_80px_rgba(0,0,0,0.5)]">
          <p className="font-mono text-xs tracking-[0.16em] text-[#88a5cd]">MULTI-MODEL ROUTER</p>

          <div className="mt-4 grid gap-2">
            {engines.map((engine) => (
              <button
                key={engine.id}
                onClick={() => setActive(engine)}
                className={[
                  'rounded-2xl border p-4 text-left transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9ec8ff]',
                  active.id === engine.id
                    ? 'border-[#89cdff] bg-[#112642]'
                    : 'border-[#2d4469] bg-[#0a1830] hover:border-[#4d6998] hover:bg-[#0e1f39]',
                ].join(' ')}
              >
                <div className="flex items-center justify-between gap-3">
                  <h2 className="font-syne text-2xl leading-none text-[#ecf4ff]">{engine.name}</h2>
                  <span className="font-mono text-xs text-[#93b2dc]">{engine.score}/100</span>
                </div>
                <p className="mt-2 font-jakarta text-sm text-[#b6cae9]">{engine.role}</p>
              </button>
            ))}
          </div>

          <div className="mt-5 rounded-2xl border border-[#35557f] bg-[#0d1f39] p-4">
            <p className="font-mono text-[11px] tracking-[0.16em] text-[#99b8de]">ACTIVE ENGINE</p>
            <p className="mt-2 font-syne text-3xl text-[#f4f9ff]">{active.name}</p>
            <p className="mt-2 font-jakarta text-sm text-[#bad0f1]">{active.role}</p>
            <div className="mt-4 h-2 rounded-full bg-[#18345a]">
              <div className="h-full rounded-full bg-gradient-to-r from-[#8ad8ff] to-[#c8f6ff]" style={{ width: `${active.score}%` }} />
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[#203a5d] bg-[#071325] py-16">
        <div className="mx-auto max-w-7xl px-6">
          <p className="font-mono text-xs tracking-[0.2em] text-[#8eafd9]">WORKFLOW STRIP</p>
          <div className="mt-5 grid gap-3 md:grid-cols-4">
            {workflow.map((step, index) => (
              <article
                key={step}
                className="rounded-2xl border border-[#2f5078] bg-[#0a1830] p-4 transition hover:-translate-y-0.5 hover:border-[#5b7fb1]"
              >
                <p className="font-mono text-xs tracking-[0.14em] text-[#8ca7cc]">0{index + 1}</p>
                <p className="mt-2 font-jakarta text-sm text-[#d5e5fb]">{step}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-18">
        <div className="rounded-[2rem] border border-[#355f8f] bg-gradient-to-r from-[#0a1c33] via-[#0f2849] to-[#103857] p-7 sm:p-10">
          <div className="flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="font-mono text-xs tracking-[0.2em] text-[#8fd7ff]">MEMBERSHIP</p>
              <h3 className="mt-3 font-syne text-4xl leading-[0.9] text-white sm:text-5xl">$39 monthly. Every model unlocked.</h3>
              <p className="mt-3 max-w-2xl font-jakarta text-sm text-[#c8defa] sm:text-base">
                One fee includes generation, editing, version history, and team collaboration across all four engines.
              </p>
            </div>
            <button className="rounded-full bg-white px-8 py-3 font-jakarta text-xs font-bold tracking-[0.16em] text-[#0c1f35] transition hover:bg-[#e8f6ff] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
              CLAIM FOUNDING PASS
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}
