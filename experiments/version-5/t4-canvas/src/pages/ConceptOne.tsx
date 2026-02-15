import { useState } from 'react'

const models = [
  {
    id: 'nano',
    name: 'Nano Banana Pro',
    strength: 'Character continuity and expressive faces',
    load: 82,
    accent: '#9bf8d4',
  },
  {
    id: 'flux',
    name: 'Flux 2',
    strength: 'Product realism and material precision',
    load: 77,
    accent: '#b6d9ff',
  },
  {
    id: 'gpt',
    name: 'gpt-image-1.5',
    strength: 'Rapid ideation with clean composition',
    load: 68,
    accent: '#ffd4ac',
  },
  {
    id: 'seedream',
    name: 'Seedream',
    strength: 'Cinematic style transfer and dream tone',
    load: 74,
    accent: '#fbc3ff',
  },
]

const capabilities = [
  {
    title: 'Prompt Graphs',
    copy: 'Chain reusable direction blocks for campaigns, product lines, and seasonal variants.',
  },
  {
    title: 'Live Variant Ladder',
    copy: 'Sort generations by art-direction fit instead of random gallery order.',
  },
  {
    title: 'Edit Continuum',
    copy: 'Move from inpaint to upscale to cleanup without leaving the board.',
  },
  {
    title: 'One Fee Billing',
    copy: 'All model access and team collaboration included inside one monthly plan.',
  },
]

const workflow = [
  'Write one visual brief and lock intent tokens.',
  'Dispatch to all four engines with model-aware settings.',
  'Branch top candidates into edit timelines and comparison lanes.',
  'Publish final sets with prompt lineage and revision notes.',
]

const metrics = [
  { label: 'Images this week', value: '1.9M' },
  { label: 'Average first draft', value: '81s' },
  { label: 'Teams on plan', value: '42k' },
]

export function ConceptOne() {
  const [focus, setFocus] = useState({ x: 66, y: 24 })
  const [activeModel, setActiveModel] = useState(models[0])

  return (
    <main
      className="relative overflow-hidden bg-[#03070f] text-[#e8f2ff]"
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect()
        const x = ((event.clientX - rect.left) / rect.width) * 100
        const y = ((event.clientY - rect.top) / rect.height) * 100
        setFocus({ x, y })
      }}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_12%,rgba(77,168,255,0.26),transparent_34%),radial-gradient(circle_at_92%_16%,rgba(64,255,219,0.18),transparent_28%),radial-gradient(circle_at_50%_100%,rgba(241,182,255,0.16),transparent_44%)]" />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: `radial-gradient(circle at ${focus.x}% ${focus.y}%, rgba(149, 224, 255, 0.22), transparent 36%)`,
        }}
      />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(125deg,transparent_0%,rgba(255,255,255,0.06)_48%,transparent_100%)] animate-beam-pan" />

      <section className="relative mx-auto grid max-w-7xl gap-12 px-6 pb-20 pt-28 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
        <div>
          <p className="inline-flex items-center gap-3 rounded-full border border-[#71e4ff]/45 bg-[#0c1f38]/80 px-4 py-2 font-mono text-[11px] tracking-[0.2em] text-[#ace7ff]">
            T4 CANVAS PULSE FORGE
            <span className="h-2 w-2 rounded-full bg-cyan-300 animate-pulse-dot" />
          </p>

          <h1 className="mt-6 font-syne text-5xl font-semibold leading-[0.86] text-balance sm:text-6xl lg:text-7xl">
            Direct four image engines
            <span className="block font-instrument text-6xl italic text-[#a5e8ff] sm:text-7xl lg:text-8xl">from one kinetic canvas.</span>
          </h1>

          <p className="mt-6 max-w-xl font-jakarta text-base text-[#bfd5f3] sm:text-lg">
            Generate and edit in one place with Nano Banana Pro, Flux 2, gpt-image-1.5, and Seedream for one flat monthly fee.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <button className="rounded-full bg-[#bbf7ff] px-7 py-3 font-jakarta text-xs font-bold tracking-[0.16em] text-[#041220] transition hover:bg-[#d6fbff] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#bbf7ff]">
              START STUDIO
            </button>
            <button className="rounded-full border border-white/35 px-7 py-3 font-jakarta text-xs font-semibold tracking-[0.16em] text-white transition hover:border-white/70 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
              WATCH DEMO FLOW
            </button>
          </div>

          <div className="mt-8 grid max-w-xl grid-cols-3 gap-3">
            {metrics.map((metric) => (
              <article key={metric.label} className="rounded-2xl border border-white/15 bg-[#091222]/80 px-3 py-4">
                <p className="font-syne text-2xl text-[#ebf5ff]">{metric.value}</p>
                <p className="mt-1 font-mono text-[10px] tracking-[0.16em] text-[#8da9cf]">{metric.label.toUpperCase()}</p>
              </article>
            ))}
          </div>
        </div>

        <aside className="relative rounded-[2rem] border border-[#2b4a71] bg-[#071224]/92 p-5 shadow-[0_22px_78px_rgba(0,0,0,0.55)]">
          <div className="absolute -right-5 -top-5 hidden rounded-2xl border border-[#375985] bg-[#0c1e38] px-4 py-2 font-mono text-[10px] tracking-[0.16em] text-[#9fcaec] md:block">
            OFF-GRID ROUTER
          </div>
          <p className="font-mono text-xs tracking-[0.16em] text-[#8aa5cd]">MODEL ROUTING PANEL</p>

          <div className="mt-4 grid gap-2">
            {models.map((model) => (
              <button
                key={model.id}
                onClick={() => setActiveModel(model)}
                className={[
                  'rounded-2xl border p-4 text-left transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9ec8ff]',
                  activeModel.id === model.id
                    ? 'border-[#8dc9ff] bg-[#10263f]'
                    : 'border-[#2d4569] bg-[#0a1830] hover:border-[#4c6b97] hover:bg-[#0d1f3a]',
                ].join(' ')}
              >
                <div className="flex items-center justify-between gap-3">
                  <h2 className="font-syne text-2xl leading-none text-[#ebf4ff]">{model.name}</h2>
                  <span className="font-mono text-xs text-[#95b3dc]">{model.load}%</span>
                </div>
                <p className="mt-2 font-jakarta text-sm text-[#b8ccec]">{model.strength}</p>
              </button>
            ))}
          </div>

          <div className="mt-5 rounded-2xl border border-[#38577f] bg-[#0d1f38] p-4">
            <p className="font-mono text-[11px] tracking-[0.16em] text-[#9ebcde]">ACTIVE ENGINE</p>
            <p className="mt-2 font-syne text-3xl text-[#f5f9ff]">{activeModel.name}</p>
            <p className="mt-2 font-jakarta text-sm text-[#bdd1ef]">{activeModel.strength}</p>
            <div className="mt-4 h-2 rounded-full bg-[#1b3458]">
              <div className="h-full rounded-full" style={{ width: `${activeModel.load}%`, backgroundColor: activeModel.accent }} />
            </div>
          </div>
        </aside>
      </section>

      <section className="border-y border-[#1f3b5f] bg-[#061021] py-16">
        <div className="mx-auto max-w-7xl px-6">
          <p className="font-mono text-xs tracking-[0.2em] text-[#90b3db]">CAPABILITY RAIL</p>
          <div className="mt-5 grid gap-3 md:grid-cols-4">
            {capabilities.map((capability) => (
              <article
                key={capability.title}
                className="rounded-2xl border border-[#2f4f77] bg-[#09172f] p-4 transition hover:-translate-y-0.5 hover:border-[#6386b8]"
              >
                <p className="font-syne text-2xl leading-none text-[#eaf3ff]">{capability.title}</p>
                <p className="mt-3 font-jakarta text-sm text-[#b3c8e8]">{capability.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-18">
        <div className="grid gap-5 lg:grid-cols-[1.04fr_0.96fr]">
          <article className="rounded-[2rem] border border-[#385d87] bg-gradient-to-br from-[#0a1b33] to-[#0e3150] p-7 sm:p-9">
            <p className="font-mono text-xs tracking-[0.2em] text-[#9fd8ff]">WORKFLOW STRIP</p>
            <h3 className="mt-4 max-w-xl font-syne text-4xl leading-[0.88] text-white sm:text-5xl">
              Build once, route many, approve faster.
            </h3>
            <ol className="mt-6 space-y-4">
              {workflow.map((step, index) => (
                <li key={step} className="flex gap-3">
                  <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[#77a9df] font-mono text-xs text-[#d6ebff]">
                    {index + 1}
                  </span>
                  <p className="font-jakarta text-sm text-[#d2e4fb]">{step}</p>
                </li>
              ))}
            </ol>
          </article>

          <article className="relative overflow-hidden rounded-[2rem] border border-[#27537f] bg-[#08172e] p-7 sm:p-9">
            <div className="pointer-events-none absolute -right-10 -top-12 h-40 w-40 rounded-full bg-[#80e2ff]/20 blur-2xl" />
            <p className="font-mono text-xs tracking-[0.2em] text-[#95bcde]">FLAT MEMBERSHIP</p>
            <h3 className="mt-4 font-syne text-5xl leading-[0.88] text-[#f4f9ff] sm:text-6xl">$39 monthly.</h3>
            <p className="mt-4 max-w-sm font-jakarta text-sm text-[#b8cee8] sm:text-base">
              One subscription includes generation, editing, and collaboration across all four models with no add-on pricing.
            </p>
            <button className="mt-7 rounded-full bg-white px-8 py-3 font-jakarta text-xs font-bold tracking-[0.16em] text-[#0a1b31] transition hover:bg-[#eaf6ff] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
              CLAIM FOUNDING PASS
            </button>
          </article>
        </div>
      </section>
    </main>
  )
}
