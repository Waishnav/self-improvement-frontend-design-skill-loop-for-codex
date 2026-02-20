import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'

const stages = {
  Brief: {
    title: 'Capture creative intent',
    detail: 'Ingest references, lock constraints, and map style intent before generation starts.',
    output: 'Prompt blueprint + guardrails',
  },
  Generate: {
    title: 'Run model swarm generation',
    detail: 'Dispatch jobs across Nano Banana Pro, Flux 2, gpt-image-1.5, and Seedream in parallel.',
    output: 'Variant board + scorecards',
  },
  Remix: {
    title: 'Iterate with surgical edits',
    detail: 'Use masks, local transforms, and selective upscaling while preserving version lineage.',
    output: 'Approved shortlist',
  },
  Deliver: {
    title: 'Package campaign assets',
    detail: 'Export web, social, and print sets with metadata for production handoff.',
    output: 'Final release kit',
  },
}

type Stage = keyof typeof stages

export function DesignFivePage() {
  const [monthlyProjects, setMonthlyProjects] = useState(18)
  const [activeStage, setActiveStage] = useState<Stage>('Generate')

  const totalImages = useMemo(() => monthlyProjects * 48, [monthlyProjects])
  const costPerImage = useMemo(() => (199 / totalImages).toFixed(2), [totalImages])

  return (
    <main className="scanlines relative min-h-screen overflow-x-clip bg-[#050b1d] text-[#d8e4ff]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(111,152,255,0.2),transparent_35%),radial-gradient(circle_at_88%_22%,rgba(255,183,99,0.18),transparent_35%),linear-gradient(180deg,#07122b,#050b1d)]" />

      <section className="relative mx-auto w-full max-w-6xl px-6 py-8 md:px-10 lg:py-12">
        <header className="mb-12 flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="font-mono-tech text-[11px] uppercase tracking-[0.34em] text-[#b9cbff]">T4 Canvas</p>
            <p className="font-archivo text-sm text-[#94a8de]">Concept: Retro Flight Deck</p>
          </div>
          <Link
            to="/"
            className="rounded-full border border-[#88a2e0]/40 bg-[#1a2648]/50 px-5 py-2 font-mono-tech text-xs uppercase tracking-[0.18em] text-[#ccdbff] transition hover:border-[#b9cbff]/65 hover:bg-[#253560]"
          >
            All Concepts
          </Link>
        </header>

        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-7">
            <p className="inline-flex rounded-full border border-[#8ba4e0]/45 bg-[#21315b]/65 px-3 py-1 font-mono-tech text-[10px] uppercase tracking-[0.19em] text-[#d4e1ff]">
              Tactical launch platform for daily image operations
            </p>
            <h1 className="font-unbounded text-4xl leading-[1.01] text-[#edf2ff] md:text-6xl">
              Navigate four image models from one precision cockpit.
            </h1>
            <p className="max-w-2xl text-base text-[#c3d3ff]/82 md:text-lg">
              T4 Canvas unifies Nano Banana Pro, Flux 2, gpt-image-1.5, and Seedream in a single
              production interface. Plan, generate, edit, and deliver at a fixed monthly cost.
            </p>

            <div className="rounded-3xl border border-[#8ea8e8]/38 bg-[#111f43]/70 p-5">
              <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
                <p className="font-mono-tech text-xs uppercase tracking-[0.15em] text-[#bfd0fb]">Monthly Campaign Load</p>
                <p className="font-unbounded text-2xl text-[#f5f8ff]">{monthlyProjects} projects</p>
              </div>
              <input
                type="range"
                min={4}
                max={80}
                step={1}
                value={monthlyProjects}
                onChange={(event) => setMonthlyProjects(Number(event.target.value))}
                className="w-full accent-[#ffbd72]"
              />
              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                <div className="rounded-xl border border-[#8ea8e8]/28 bg-[#0a1430]/80 p-3">
                  <p className="font-mono-tech text-[10px] uppercase tracking-[0.15em] text-[#a8bceb]/78">Monthly Images</p>
                  <p className="mt-1 font-unbounded text-xl text-[#edf2ff]">{totalImages}</p>
                </div>
                <div className="rounded-xl border border-[#8ea8e8]/28 bg-[#0a1430]/80 p-3">
                  <p className="font-mono-tech text-[10px] uppercase tracking-[0.15em] text-[#a8bceb]/78">Cost / Image</p>
                  <p className="mt-1 font-unbounded text-xl text-[#edf2ff]">${costPerImage}</p>
                </div>
                <div className="rounded-xl border border-[#8ea8e8]/28 bg-[#0a1430]/80 p-3">
                  <p className="font-mono-tech text-[10px] uppercase tracking-[0.15em] text-[#a8bceb]/78">Latency Goal</p>
                  <p className="mt-1 font-unbounded text-xl text-[#edf2ff]">2.7s</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <button
                type="button"
                className="rounded-full bg-[#ffbd72] px-6 py-3 font-syne text-sm font-semibold uppercase tracking-[0.14em] text-[#2b1b04] transition hover:bg-[#ffd39d]"
              >
                Open Flight Deck
              </button>
              <button
                type="button"
                className="rounded-full border border-[#8ea8e8]/35 px-6 py-3 font-mono-tech text-xs uppercase tracking-[0.16em] text-[#cad8ff] transition hover:border-[#bed0ff]/60"
              >
                Watch Mission Run
              </button>
            </div>
          </div>

          <aside className="relative overflow-hidden rounded-[30px] border border-[#8ea8e8]/35 bg-[#111f43]/65 p-6">
            <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-[#ffbd72]/25 blur-3xl" />
            <p className="font-mono-tech text-[11px] uppercase tracking-[0.16em] text-[#bfd0fb]">Model Roster</p>
            <div className="mt-4 grid gap-3">
              {[
                ['Nano Banana Pro', 'Fast ideation + strategic prompting'],
                ['Flux 2', 'Photoreal composition + material fidelity'],
                ['gpt-image-1.5', 'Reliable transforms + consistency'],
                ['Seedream', 'Stylized narrative and character dynamism'],
              ].map(([name, role]) => (
                <div key={name} className="rounded-xl border border-[#8ea8e8]/30 bg-[#09122d]/80 p-4">
                  <p className="font-syne text-lg text-[#f0f4ff]">{name}</p>
                  <p className="mt-1 text-sm text-[#b8c8ee]/78">{role}</p>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section className="relative mx-auto w-full max-w-6xl px-6 pb-8 md:px-10">
        <div className="grid gap-4 md:grid-cols-3">
          {[
            ['Mission Logs', 'Every run is tracked with prompts, seeds, and model assignment.'],
            ['Adaptive Routing', 'Automatically route tasks to the best model profile for the goal.'],
            ['Flat-Fee Shield', 'Stop per-model billing surprises with one fixed monthly number.'],
          ].map(([title, body]) => (
            <article key={title} className="rounded-2xl border border-[#8ea8e8]/28 bg-[#101f41]/65 p-5">
              <h2 className="font-syne text-xl text-[#eef3ff]">{title}</h2>
              <p className="mt-2 text-sm text-[#b9caef]/78">{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="relative mx-auto w-full max-w-6xl px-6 py-12 md:px-10">
        <div className="rounded-[30px] border border-[#8ea8e8]/34 bg-[#102047]/68 p-6 md:p-8">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
            <h2 className="font-unbounded text-3xl leading-tight text-[#edf2ff] md:text-4xl">Pipeline Navigator</h2>
            <div className="flex flex-wrap gap-2">
              {(Object.keys(stages) as Stage[]).map((name) => (
                <button
                  key={name}
                  type="button"
                  onClick={() => setActiveStage(name)}
                  className={`rounded-full px-4 py-2 font-mono-tech text-[11px] uppercase tracking-[0.15em] transition ${
                    activeStage === name
                      ? 'bg-[#ffbd72] text-[#2a1a03]'
                      : 'border border-[#8ea8e8]/35 text-[#c8d8ff] hover:border-[#b6c9f7]/60'
                  }`}
                >
                  {name}
                </button>
              ))}
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <article className="rounded-xl border border-[#8ea8e8]/30 bg-[#0b1635]/75 p-4">
              <p className="font-mono-tech text-[10px] uppercase tracking-[0.15em] text-[#afc1ec]/75">Stage Focus</p>
              <h3 className="mt-2 font-syne text-xl text-[#edf2ff]">{stages[activeStage].title}</h3>
            </article>
            <article className="rounded-xl border border-[#8ea8e8]/30 bg-[#0b1635]/75 p-4">
              <p className="font-mono-tech text-[10px] uppercase tracking-[0.15em] text-[#afc1ec]/75">Ops Detail</p>
              <p className="mt-2 text-sm text-[#c2d2f5]/80">{stages[activeStage].detail}</p>
            </article>
            <article className="rounded-xl border border-[#8ea8e8]/30 bg-[#0b1635]/75 p-4">
              <p className="font-mono-tech text-[10px] uppercase tracking-[0.15em] text-[#afc1ec]/75">Output</p>
              <p className="mt-2 font-syne text-xl text-[#edf2ff]">{stages[activeStage].output}</p>
            </article>
          </div>
        </div>
      </section>

      <section className="relative mx-auto w-full max-w-6xl px-6 pb-14 md:px-10 lg:pb-20">
        <div className="grid gap-4 lg:grid-cols-[1fr_1fr]">
          <article className="rounded-3xl border border-[#8ea8e8]/30 bg-[#111f43]/70 p-7">
            <p className="font-mono-tech text-[11px] uppercase tracking-[0.18em] text-[#b9ccfa]">Team signal</p>
            <p className="mt-3 text-sm text-[#c7d6f4]/78">
              "T4 Canvas replaced four separate tools and made our visual delivery cadence predictable again."
            </p>
            <p className="mt-3 font-syne text-lg text-[#f0f4ff]">Growth Creative Team, Northline Media</p>
          </article>
          <article className="rounded-3xl border border-[#ffbd72]/45 bg-[#ffbd72] p-7 text-[#2d1c05]">
            <p className="font-mono-tech text-[11px] uppercase tracking-[0.18em]">One monthly subscription</p>
            <h3 className="mt-2 font-unbounded text-4xl leading-none">$199 / seat</h3>
            <p className="mt-2 text-sm">All models, full generation suite, and production export control.</p>
            <button
              type="button"
              className="mt-5 rounded-full border border-[#2f1e07] px-5 py-3 font-mono-tech text-xs uppercase tracking-[0.16em] transition hover:bg-[#2f1e07] hover:text-[#ffe6c2]"
            >
              Start Your Studio
            </button>
          </article>
        </div>
      </section>
    </main>
  )
}
