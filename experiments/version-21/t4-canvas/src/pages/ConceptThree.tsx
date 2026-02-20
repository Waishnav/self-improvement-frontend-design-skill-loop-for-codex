import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'

const stylePacks = [
  {
    name: 'Hyperpop',
    descriptor: 'Saturated lighting, chrome accents, fast-cut compositions.',
    color: 'from-cyan-300 via-blue-500 to-fuchsia-500',
  },
  {
    name: 'Noir Pulse',
    descriptor: 'Deep contrast, cinematic haze, and dramatic key lights.',
    color: 'from-emerald-300 via-teal-500 to-slate-900',
  },
  {
    name: 'Retro Grid',
    descriptor: 'Warm halation, analog grain, stylized horizon lines.',
    color: 'from-amber-200 via-orange-500 to-red-600',
  },
] as const

const lenses = [
  {
    name: 'Product Drops',
    stats: ['11.2% CTR lift', '34 ad variants generated', '86 min launch prep'],
  },
  {
    name: 'Gaming Key Art',
    stats: ['9 launch posters', '7 character skins', '2 day turnaround'],
  },
  {
    name: 'Creator Thumbnails',
    stats: ['60 monthly covers', '1-click style locks', '4x iteration speed'],
  },
] as const

function ConceptThree() {
  const [activePack, setActivePack] = useState<(typeof stylePacks)[number]['name']>(stylePacks[0].name)
  const [chaos, setChaos] = useState(58)
  const [activeLens, setActiveLens] = useState<(typeof lenses)[number]['name']>(lenses[0].name)

  const pack = useMemo(() => stylePacks.find((item) => item.name === activePack) ?? stylePacks[0], [activePack])
  const lens = useMemo(() => lenses.find((item) => item.name === activeLens) ?? lenses[0], [activeLens])

  const generationRate = Math.round(chaos * 1.8)

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#050311] text-[#ecfeff]">
      <div className="relative isolate">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(34,211,238,0.3),transparent_35%),radial-gradient(circle_at_80%_20%,rgba(217,70,239,0.28),transparent_40%),radial-gradient(circle_at_50%_90%,rgba(14,165,233,0.16),transparent_38%)]" />
        <div className="pointer-events-none absolute inset-0 opacity-35 [background:linear-gradient(to_bottom,transparent_0%,rgba(125,211,252,0.12)_50%,transparent_100%)] [background-size:100%_8px]" />
      </div>

      <div className="relative mx-auto flex w-full max-w-7xl flex-col gap-16 px-6 pb-24 pt-8 md:px-10">
        <header className="rounded-2xl border border-cyan-300/35 bg-[#09071d]/85 px-5 py-4 shadow-[0_0_0_1px_rgba(34,211,238,0.14),0_18px_50px_rgba(10,8,40,0.65)] backdrop-blur">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="font-syne text-[11px] uppercase tracking-[0.32em] text-cyan-200">T4 Canvas</p>
              <p className="font-bebas text-5xl tracking-[0.08em] text-white">Neon Collider</p>
            </div>
            <div className="flex items-center gap-4 text-xs uppercase tracking-[0.22em] text-cyan-100">
              <span>One Fee, Four Models</span>
              <Link
                to="/"
                className="rounded-full border border-cyan-100/45 px-4 py-2 transition hover:bg-cyan-100/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-100"
              >
                Concepts
              </Link>
            </div>
          </div>
        </header>

        <section className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="space-y-7">
            <p className="font-syne text-xs uppercase tracking-[0.32em] text-cyan-200">Velocity-Driven Marketing Homepage</p>
            <h1 className="font-bebas text-6xl leading-[0.84] tracking-[0.03em] text-white md:text-8xl">Generate launch art at arcade speed.</h1>
            <p className="max-w-2xl font-rajdhani text-xl leading-tight text-cyan-50/90">
              Plug Nano Banana Pro, Flux 2, gpt-image-1.5, and Seedream into one creative reactor. T4 Canvas keeps output
              blazing while your monthly cost stays fixed.
            </p>

            <div className="rounded-3xl border border-cyan-300/30 bg-[#0a0d29]/75 p-5">
              <p className="font-syne text-xs uppercase tracking-[0.24em] text-cyan-200">Style Pack</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {stylePacks.map((item) => (
                  <button
                    key={item.name}
                    type="button"
                    onClick={() => setActivePack(item.name)}
                    className={`rounded-full border px-4 py-2 text-sm transition ${
                      activePack === item.name
                        ? 'border-cyan-100 bg-cyan-200/20 text-cyan-100'
                        : 'border-slate-700 bg-slate-950 text-slate-300 hover:border-cyan-200/45'
                    }`}
                  >
                    {item.name}
                  </button>
                ))}
              </div>

              <div className="mt-4 grid gap-4 md:grid-cols-[0.92fr_1.08fr] md:items-center">
                <div>
                  <p className="text-sm uppercase tracking-[0.18em] text-cyan-100/80">Chaos Level</p>
                  <input
                    type="range"
                    min={10}
                    max={100}
                    value={chaos}
                    onChange={(event) => setChaos(Number(event.target.value))}
                    className="mt-2 w-full accent-cyan-300"
                    aria-label="Chaos level"
                  />
                  <p className="mt-2 font-rajdhani text-sm text-cyan-50">{chaos}% stylization pressure</p>
                </div>
                <div className={`rounded-2xl border border-cyan-200/25 bg-gradient-to-br ${pack.color} p-4`}>
                  <p className="font-syne text-[10px] uppercase tracking-[0.22em] text-slate-950/85">Live Prompt Deck</p>
                  <p className="mt-2 font-rajdhani text-lg font-semibold text-slate-950">{pack.descriptor}</p>
                </div>
              </div>
            </div>
          </div>

          <aside className="grid gap-3 rounded-3xl border border-cyan-200/30 bg-[#07061a]/80 p-5 shadow-[0_16px_50px_rgba(6,182,212,0.2)]">
            <p className="font-syne text-xs uppercase tracking-[0.24em] text-cyan-200">System Pulse</p>
            <div className="rounded-xl border border-cyan-200/25 bg-[#090b28] p-4">
              <p className="text-xs uppercase tracking-[0.16em] text-cyan-100/80">Generation Rate</p>
              <p className="mt-2 font-bebas text-6xl leading-none text-cyan-100">{generationRate}</p>
              <p className="font-rajdhani text-sm text-cyan-50/85">renders per hour with current style pressure</p>
            </div>
            <div className="grid gap-3 text-sm">
              <div className="rounded-xl border border-cyan-200/25 bg-[#090b28] p-3">
                <p className="text-xs uppercase tracking-[0.16em] text-cyan-100/80">Model Rotation</p>
                <p className="mt-1 text-cyan-50">Nano Banana Pro → Flux 2 → gpt-image-1.5 → Seedream</p>
              </div>
              <div className="rounded-xl border border-cyan-200/25 bg-[#090b28] p-3">
                <p className="text-xs uppercase tracking-[0.16em] text-cyan-100/80">Billing State</p>
                <p className="mt-1 text-cyan-50">Single monthly subscription. No per-image metering.</p>
              </div>
            </div>
          </aside>
        </section>

        <section className="grid gap-6 lg:grid-cols-[0.86fr_1.14fr]">
          <div className="rounded-3xl border border-cyan-300/30 bg-[#07061b] p-6">
            <p className="font-syne text-xs uppercase tracking-[0.24em] text-cyan-200">Pipeline Track</p>
            <div className="mt-4 grid gap-3">
              <div className="rounded-xl border border-cyan-200/25 bg-cyan-300/10 p-4">
                <p className="font-bebas text-2xl tracking-[0.06em] text-cyan-100">01 // Style Conditioning</p>
                <p className="font-rajdhani text-sm text-cyan-50/85">Match references and lock visual DNA before generation.</p>
              </div>
              <div className="rounded-xl border border-cyan-200/25 bg-fuchsia-300/10 p-4">
                <p className="font-bebas text-2xl tracking-[0.06em] text-fuchsia-100">02 // Parallel Renders</p>
                <p className="font-rajdhani text-sm text-cyan-50/85">Burst generation across all four models in one board.</p>
              </div>
              <div className="rounded-xl border border-cyan-200/25 bg-emerald-300/10 p-4">
                <p className="font-bebas text-2xl tracking-[0.06em] text-emerald-100">03 // Publish Exports</p>
                <p className="font-rajdhani text-sm text-cyan-50/85">Ship ad-ready assets in every ratio and channel format.</p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-cyan-300/30 bg-[#07061b] p-6">
            <p className="font-syne text-xs uppercase tracking-[0.24em] text-cyan-200">Outcome Lens</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {lenses.map((item) => (
                <button
                  key={item.name}
                  type="button"
                  onClick={() => setActiveLens(item.name)}
                  className={`rounded-full border px-4 py-2 text-sm transition ${
                    activeLens === item.name
                      ? 'border-cyan-100 bg-cyan-200/20 text-cyan-100'
                      : 'border-slate-700 bg-slate-950 text-slate-300 hover:border-cyan-200/45'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
            <div className="mt-5 grid gap-3 md:grid-cols-3">
              {lens.stats.map((stat) => (
                <div key={stat} className="rounded-xl border border-cyan-200/25 bg-[#0b0f32] p-4">
                  <p className="font-rajdhani text-lg font-semibold text-cyan-50">{stat}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="rounded-3xl border border-cyan-300/30 bg-gradient-to-r from-cyan-300/20 via-blue-500/20 to-fuchsia-500/20 p-8">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="font-syne text-xs uppercase tracking-[0.24em] text-cyan-100">Ready to throttle up</p>
              <h2 className="mt-2 font-bebas text-5xl tracking-[0.04em] text-white md:text-6xl">Launch faster than your content calendar.</h2>
            </div>
            <button
              type="button"
              className="rounded-full border border-white bg-white px-6 py-3 font-syne text-xs font-semibold uppercase tracking-[0.24em] text-slate-900 transition hover:bg-cyan-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Claim Studio Access
            </button>
          </div>
        </section>
      </div>
    </main>
  )
}

export default ConceptThree
