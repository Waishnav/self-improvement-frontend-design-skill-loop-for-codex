import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'

type PowerMode = {
  id: 'fast' | 'balanced' | 'precision'
  label: string
  claim: string
  throughput: string
  note: string
}

const powerModes: PowerMode[] = [
  {
    id: 'fast',
    label: 'Fast Cut',
    claim: 'Maximum output velocity for wide ideation swings.',
    throughput: '182 renders/hour',
    note: 'Prioritizes Flux 2 for rapid branch generation.',
  },
  {
    id: 'balanced',
    label: 'Balanced Cut',
    claim: 'Even distribution of speed and composition reliability.',
    throughput: '134 renders/hour',
    note: 'Blends Nano Banana Pro, Flux 2, and gpt-image-1.5 for consistency.',
  },
  {
    id: 'precision',
    label: 'Precision Cut',
    claim: 'High-fidelity outputs for critical launch assets.',
    throughput: '92 renders/hour',
    note: 'Weights gpt-image-1.5 and Seedream for refined detail control.',
  },
]

const statBoard = [
  { label: 'Average Prompt Accuracy', value: '94%' },
  { label: 'Model Hand-off Delay', value: '0.8s' },
  { label: 'Monthly Budget Drift', value: '0%' },
  { label: 'Campaign Ready Assets', value: '3.4k' },
]

const scenarioData = {
  ads: {
    heading: 'Paid social launch burst',
    winner: 'Nano Banana Pro + Flux 2',
    detail: 'Strongest blend for fast ad variety with controlled brand voice.',
  },
  catalog: {
    heading: 'Commerce catalog expansion',
    winner: 'gpt-image-1.5',
    detail: 'Most stable composition and clean SKU continuity across large batches.',
  },
  fantasy: {
    heading: 'Narrative world campaign',
    winner: 'Seedream + Flux 2',
    detail: 'Best texture and atmosphere while preserving high iteration speed.',
  },
}

export function ConceptFourPage() {
  const [activeMode, setActiveMode] = useState<PowerMode>(powerModes[1])
  const [activeScenario, setActiveScenario] = useState<keyof typeof scenarioData>('ads')

  const scenario = useMemo(() => scenarioData[activeScenario], [activeScenario])

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f5ecd2] text-[#101010]">
      <header className="relative border-b-4 border-[#101010] bg-[#f5ecd2]">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 py-5 md:flex-row md:items-center md:justify-between lg:px-10">
          <div>
            <p className="font-ibm-plex text-[11px] uppercase tracking-[0.32em] text-[#454545]">T4 Canvas</p>
            <p className="font-bebas text-4xl leading-none tracking-[0.05em]">Brutal Signal</p>
          </div>
          <nav className="flex flex-wrap items-center gap-6 font-ibm-plex text-xs uppercase tracking-[0.18em]">
            <a href="#board">Stat Board</a>
            <a href="#matchups">Matchups</a>
            <a href="#bill">Billing</a>
            <Link to="/" className="border-2 border-[#101010] px-3 py-2 text-[11px] font-semibold">
              Concept Index
            </Link>
          </nav>
        </div>
      </header>

      <section className="relative mx-auto w-full max-w-6xl px-6 pb-14 pt-12 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <p className="inline-flex border-2 border-[#101010] bg-[#ffe156] px-3 py-1 font-ibm-plex text-[11px] font-semibold uppercase tracking-[0.2em]">
              Power user marketing surface
            </p>
            <h1 className="mt-5 font-bebas text-7xl leading-[0.86] tracking-[0.02em] sm:text-8xl">
              BUILD MORE IMAGES.
              <br />
              PAY ONLY ONCE.
            </h1>
            <p className="mt-5 max-w-xl font-ibm-plex text-base leading-relaxed text-[#262626]">
              T4 Canvas gives advanced teams one hard-edged interface to orchestrate Nano Banana Pro, Flux 2,
              gpt-image-1.5, and Seedream with zero subscription sprawl.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {powerModes.map((mode) => (
                <button
                  key={mode.id}
                  type="button"
                  onClick={() => setActiveMode(mode)}
                  className="border-2 px-4 py-3 font-ibm-plex text-xs font-semibold uppercase tracking-[0.16em]"
                  style={{
                    borderColor: '#101010',
                    backgroundColor: activeMode.id === mode.id ? '#101010' : '#f5ecd2',
                    color: activeMode.id === mode.id ? '#f5ecd2' : '#101010',
                  }}
                >
                  {mode.label}
                </button>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <button className="border-2 border-[#101010] bg-[#ff4141] px-6 py-3 font-ibm-plex text-xs font-semibold uppercase tracking-[0.18em] text-[#fff6e3]">
                Start Aggressive Trial
              </button>
              <button className="border-2 border-[#101010] bg-[#f5ecd2] px-6 py-3 font-ibm-plex text-xs font-semibold uppercase tracking-[0.18em]">
                Inspect Operator Demo
              </button>
            </div>
          </div>

          <aside className="border-4 border-[#101010] bg-[#fff6df] p-6">
            <p className="font-ibm-plex text-[11px] uppercase tracking-[0.2em] text-[#3b3b3b]">Current Power Mode</p>
            <h2 className="mt-2 font-bebas text-5xl tracking-[0.03em]">{activeMode.label}</h2>
            <p className="mt-2 font-ibm-plex text-sm leading-relaxed text-[#2a2a2a]">{activeMode.claim}</p>

            <div className="mt-5 border-2 border-[#101010] bg-[#101010] p-4 text-[#f5ecd2]">
              <p className="font-ibm-plex text-[11px] uppercase tracking-[0.18em]">Throughput</p>
              <p className="mt-2 font-bebas text-4xl tracking-[0.03em]">{activeMode.throughput}</p>
            </div>

            <p className="mt-5 border-2 border-[#101010] bg-[#ffe156] p-3 font-ibm-plex text-xs font-semibold uppercase tracking-[0.14em] text-[#111111]">
              {activeMode.note}
            </p>
          </aside>
        </div>
      </section>

      <section id="board" className="border-y-4 border-[#101010] bg-[#101010] py-14 text-[#f5ecd2]">
        <div className="mx-auto w-full max-w-6xl px-6 lg:px-10">
          <h2 className="font-bebas text-6xl tracking-[0.03em]">HARD NUMBERS</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {statBoard.map((stat) => (
              <article key={stat.label} className="border-2 border-[#f5ecd2] p-4">
                <p className="font-ibm-plex text-[11px] uppercase tracking-[0.18em] text-[#f3e1bf]">{stat.label}</p>
                <p className="mt-3 font-bebas text-5xl tracking-[0.03em]">{stat.value}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="matchups" className="mx-auto w-full max-w-6xl px-6 py-14 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
          <div>
            <h2 className="font-bebas text-6xl leading-[0.86] tracking-[0.03em]">MODEL MATCHUPS</h2>
            <p className="mt-3 font-ibm-plex text-sm leading-relaxed text-[#2f2f2f]">
              Pick a scenario and the recommended stack updates live based on recent output consistency and generation cost.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {([
                ['ads', 'Social Ads'],
                ['catalog', 'Catalog'],
                ['fantasy', 'Fantasy'],
              ] as const).map(([id, label]) => (
                <button
                  key={id}
                  type="button"
                  onClick={() => setActiveScenario(id)}
                  className="border-2 px-4 py-2 font-ibm-plex text-xs font-semibold uppercase tracking-[0.14em]"
                  style={{
                    borderColor: '#101010',
                    backgroundColor: activeScenario === id ? '#101010' : '#f5ecd2',
                    color: activeScenario === id ? '#f5ecd2' : '#101010',
                  }}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          <article className="border-4 border-[#101010] bg-[#fff8e7] p-6">
            <p className="font-ibm-plex text-[11px] uppercase tracking-[0.2em] text-[#3a3a3a]">Scenario focus</p>
            <h3 className="mt-2 font-bebas text-5xl leading-[0.9] tracking-[0.03em]">{scenario.heading}</h3>
            <p className="mt-4 border-2 border-[#101010] bg-[#ff4141] p-3 font-ibm-plex text-xs font-semibold uppercase tracking-[0.14em] text-[#fff4df]">
              Recommended stack: {scenario.winner}
            </p>
            <p className="mt-4 font-ibm-plex text-sm leading-relaxed text-[#2c2c2c]">{scenario.detail}</p>
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              <div className="border-2 border-[#101010] bg-[#ffe156] p-3">
                <p className="font-ibm-plex text-[11px] uppercase tracking-[0.12em]">Target CPA Impact</p>
                <p className="mt-2 font-bebas text-4xl">-18%</p>
              </div>
              <div className="border-2 border-[#101010] bg-[#f5ecd2] p-3">
                <p className="font-ibm-plex text-[11px] uppercase tracking-[0.12em]">Variance Coverage</p>
                <p className="mt-2 font-bebas text-4xl">6.2x</p>
              </div>
              <div className="border-2 border-[#101010] bg-[#f5ecd2] p-3">
                <p className="font-ibm-plex text-[11px] uppercase tracking-[0.12em]">Review Speed</p>
                <p className="mt-2 font-bebas text-4xl">2.4h</p>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section id="bill" className="border-t-4 border-[#101010] bg-[#ff4141] py-14 text-[#fff4df]">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 lg:flex-row lg:items-end lg:justify-between lg:px-10">
          <div className="max-w-2xl">
            <p className="font-ibm-plex text-xs uppercase tracking-[0.3em]">One brutalist bill</p>
            <h2 className="mt-3 font-bebas text-7xl leading-[0.86] tracking-[0.03em]">$79 PER CREATOR / MONTH</h2>
            <p className="mt-4 font-ibm-plex text-sm leading-relaxed text-[#fff5e6]">
              No hidden model surcharges. No split invoices. One power interface with full model coverage.
            </p>
          </div>
          <button className="border-2 border-[#101010] bg-[#101010] px-7 py-4 font-ibm-plex text-xs font-semibold uppercase tracking-[0.2em] text-[#f5ecd2]">
            Lock In T4 Canvas
          </button>
        </div>
      </section>
    </main>
  )
}
