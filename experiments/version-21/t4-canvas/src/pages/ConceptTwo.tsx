import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'

const ratioModes = [
  { name: 'Portrait 4:5', aspect: 'aspect-[4/5]' },
  { name: 'Square 1:1', aspect: 'aspect-square' },
  { name: 'Landscape 16:9', aspect: 'aspect-[16/9]' },
] as const

const launchPacks = [
  {
    name: 'Retail Pulse',
    channel: 'Paid social + PDP refresh',
    deliverables: ['12 hero stills', '8 edit-ready alternates', 'Copy-safe overlays'],
    timeline: '48-hour turnaround',
  },
  {
    name: 'Story Arc',
    channel: 'Narrative campaign rollouts',
    deliverables: ['4 chapter visuals', '6 supporting cutdowns', 'Color-locked versions'],
    timeline: '72-hour turnaround',
  },
  {
    name: 'Always-On',
    channel: 'Monthly growth creative',
    deliverables: ['30 test variants', 'Landing page assets', 'Weekly fresh sets'],
    timeline: 'Continuous output',
  },
] as const

function ConceptTwo() {
  const [activeRatio, setActiveRatio] = useState<(typeof ratioModes)[number]['name']>(ratioModes[0].name)
  const [activePack, setActivePack] = useState<(typeof launchPacks)[number]['name']>(launchPacks[1].name)

  const ratio = useMemo(() => ratioModes.find((item) => item.name === activeRatio) ?? ratioModes[0], [activeRatio])
  const pack = useMemo(() => launchPacks.find((item) => item.name === activePack) ?? launchPacks[0], [activePack])

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f7efe2] text-[#2f2419]">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-14 px-6 pb-24 pt-8 md:px-10">
        <header className="rounded-[2rem] border border-[#a67c52]/30 bg-[#fff8ef]/85 px-6 py-5">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="font-syne text-[11px] uppercase tracking-[0.3em] text-[#7c4a22]">T4 Canvas</p>
              <p className="font-cormorant text-4xl leading-none md:text-5xl">Paper Runway</p>
            </div>
            <div className="flex items-center gap-4 text-xs uppercase tracking-[0.18em] text-[#7a5c3d]">
              <span>One Plan • All Models</span>
              <Link
                to="/"
                className="rounded-full border border-[#8b5e34]/45 px-4 py-2 transition hover:bg-[#8b5e34]/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8b5e34]"
              >
                Concepts
              </Link>
            </div>
          </div>
        </header>

        <section className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
          <div className="space-y-7">
            <p className="font-syne text-xs uppercase tracking-[0.3em] text-[#7f5f3c]">Editorial Launch System</p>
            <h1 className="font-cormorant text-6xl leading-[0.86] text-[#281909] md:text-8xl">Make every campaign look like a cover story.</h1>
            <p className="max-w-xl text-base text-[#4d3825] md:text-lg">
              T4 Canvas gives growth teams and art directors a single studio for Nano Banana Pro, Flux 2, gpt-image-1.5,
              and Seedream, with one flat monthly fee and no per-render anxiety.
            </p>

            <div className="rounded-3xl border border-[#a67c52]/35 bg-[#fff7ec] p-5">
              <p className="font-syne text-xs uppercase tracking-[0.24em] text-[#8a663f]">Hero Ratio</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {ratioModes.map((item) => (
                  <button
                    key={item.name}
                    type="button"
                    onClick={() => setActiveRatio(item.name)}
                    className={`rounded-full border px-4 py-2 text-sm transition ${
                      activeRatio === item.name
                        ? 'border-[#8b5e34] bg-[#8b5e34] text-white'
                        : 'border-[#b99774] bg-[#fffaf3] text-[#5a3d22] hover:border-[#8b5e34]'
                    }`}
                  >
                    {item.name}
                  </button>
                ))}
              </div>
              <p className="mt-3 text-sm text-[#5b432e]">The collage panel updates to your chosen publishing ratio.</p>
            </div>
          </div>

          <aside className="rounded-3xl border border-[#a67c52]/30 bg-[#fff8ef] p-6 shadow-[0_20px_50px_rgba(139,94,52,0.18)]">
            <div className="grid gap-4">
              <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-[#8a663f]">
                <span>Cover Preview</span>
                <span>{activeRatio}</span>
              </div>
              <div className="rounded-2xl border border-[#be9e7e]/40 bg-[#f3e6d7] p-3">
                <div className={`mx-auto rounded-xl bg-gradient-to-br from-[#c4884b] via-[#f2d1a7] to-[#7a4c2a] p-3 ${ratio.aspect}`}>
                  <div className="h-full rounded-lg border border-white/55 bg-[linear-gradient(120deg,rgba(255,255,255,0.55),rgba(255,255,255,0.15))] p-4">
                    <p className="font-syne text-[10px] uppercase tracking-[0.22em] text-[#6f4726]">Flat Fee Studio</p>
                    <h2 className="mt-2 font-cormorant text-3xl leading-none text-[#2d1904]">New Season Visuals</h2>
                  </div>
                </div>
              </div>
              <div className="grid gap-3 text-sm md:grid-cols-2">
                <div className="rounded-xl border border-[#be9e7e]/35 bg-[#fffaf3] p-3">
                  <p className="text-xs uppercase tracking-[0.18em] text-[#7f5f3c]">Model Blend</p>
                  <p className="mt-2 text-[#332414]">Nano Banana Pro + Seedream for cinematic editorial tone.</p>
                </div>
                <div className="rounded-xl border border-[#be9e7e]/35 bg-[#fffaf3] p-3">
                  <p className="text-xs uppercase tracking-[0.18em] text-[#7f5f3c]">Output Pack</p>
                  <p className="mt-2 text-[#332414]">Instant resize set for paid, organic, and homepage placements.</p>
                </div>
              </div>
            </div>
          </aside>
        </section>

        <section className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-3xl border border-[#b99774]/35 bg-[#fff7ec] p-6">
            <p className="font-syne text-xs uppercase tracking-[0.24em] text-[#8a663f]">Launch Calendar</p>
            <div className="mt-4 grid gap-3">
              <div className="rounded-xl border border-[#d2b495]/40 bg-[#fffaf3] p-4">
                <p className="text-xs uppercase tracking-[0.16em] text-[#896742]">Day 1</p>
                <p className="mt-1 font-semibold text-[#3a2713]">Reference ingest and style brief alignment</p>
              </div>
              <div className="rounded-xl border border-[#d2b495]/40 bg-[#fffaf3] p-4">
                <p className="text-xs uppercase tracking-[0.16em] text-[#896742]">Day 2</p>
                <p className="mt-1 font-semibold text-[#3a2713]">Model pass across Flux 2 and gpt-image-1.5</p>
              </div>
              <div className="rounded-xl border border-[#d2b495]/40 bg-[#fffaf3] p-4">
                <p className="text-xs uppercase tracking-[0.16em] text-[#896742]">Day 3</p>
                <p className="mt-1 font-semibold text-[#3a2713]">Final polish with Seedream and publishing exports</p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-[#b99774]/35 bg-[#fff8ef] p-6">
            <p className="font-syne text-xs uppercase tracking-[0.24em] text-[#8a663f]">Campaign Bundle</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {launchPacks.map((item) => (
                <button
                  key={item.name}
                  type="button"
                  onClick={() => setActivePack(item.name)}
                  className={`rounded-full border px-4 py-2 text-sm transition ${
                    activePack === item.name
                      ? 'border-[#8b5e34] bg-[#8b5e34] text-white'
                      : 'border-[#c3a07f] bg-[#fffaf3] text-[#5a3d22] hover:border-[#8b5e34]'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
            <div className="mt-5 grid gap-4 rounded-2xl border border-[#c3a07f]/35 bg-[#fffaf3] p-5 md:grid-cols-[0.95fr_1.05fr]">
              <div>
                <p className="text-xs uppercase tracking-[0.16em] text-[#896742]">Primary Channel</p>
                <p className="mt-2 text-lg font-semibold text-[#392511]">{pack.channel}</p>
                <p className="mt-3 text-sm text-[#5a432d]">{pack.timeline}</p>
              </div>
              <ul className="grid gap-2 text-sm text-[#3f2a14]">
                {pack.deliverables.map((item) => (
                  <li key={item} className="rounded-lg border border-[#d6b89a]/45 bg-white/55 px-3 py-2">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="rounded-3xl border border-[#8b5e34]/35 bg-[#fff8ef] p-8">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="font-syne text-xs uppercase tracking-[0.24em] text-[#8a663f]">Final Call</p>
              <h2 className="mt-2 font-cormorant text-4xl leading-none text-[#2f1d0a] md:text-5xl">One studio membership. Unlimited campaign ambition.</h2>
            </div>
            <button
              type="button"
              className="rounded-full border border-[#8b5e34] bg-[#8b5e34] px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-[#704622] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8b5e34]"
            >
              Get Early Access
            </button>
          </div>
        </section>
      </div>
    </main>
  )
}

export default ConceptTwo
