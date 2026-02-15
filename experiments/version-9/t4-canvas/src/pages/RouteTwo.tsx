import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'

type FocusMode = 'speed' | 'detail' | 'economy'

const focusModes: { id: FocusMode; label: string; headline: string; note: string }[] = [
  {
    id: 'speed',
    label: 'Speed',
    headline: 'Fastest lane for campaign drafts',
    note: 'Prioritize quick first-pass composition and clean variants.',
  },
  {
    id: 'detail',
    label: 'Detail',
    headline: 'Maximum scene fidelity and polish',
    note: 'Increase texture depth and edge stability for final outputs.',
  },
  {
    id: 'economy',
    label: 'Economy',
    headline: 'Most efficient cost-to-output ratio',
    note: 'Preserve quality while reducing per-brief generation load.',
  },
]

const rows = [
  {
    model: 'Nano Banana Pro',
    speed: '4.8s',
    detail: '97%',
    economy: '$0.18',
    strength: 'Photoreal skin and product texture',
  },
  {
    model: 'Flux 2',
    speed: '3.9s',
    detail: '93%',
    economy: '$0.15',
    strength: 'Composition reliability at scale',
  },
  {
    model: 'gpt-image-1.5',
    speed: '4.4s',
    detail: '95%',
    economy: '$0.19',
    strength: 'Prompt nuance and text fidelity',
  },
  {
    model: 'Seedream',
    speed: '3.5s',
    detail: '91%',
    economy: '$0.14',
    strength: 'Atmospheric grade and color mood',
  },
]

const matrix: Record<FocusMode, { left: string; middle: string; right: string }> = {
  speed: {
    left: 'Draft cycles/day: 312',
    middle: 'Average queue wait: 1.4 min',
    right: 'Ops confidence: 96%',
  },
  detail: {
    left: 'Detail score: 94.5/100',
    middle: 'Prompt consistency: 92%',
    right: 'Revision delta: -31%',
  },
  economy: {
    left: 'Cost per approved image: $0.22',
    middle: 'Waste reduction: 38%',
    right: 'Monthly savings: $1,840',
  },
}

export function RouteTwo() {
  const [focus, setFocus] = useState<FocusMode>('detail')

  const activeMode = useMemo(
    () => focusModes.find((mode) => mode.id === focus) ?? focusModes[0],
    [focus],
  )

  return (
    <main className="font-body-2 min-h-screen bg-[#efeee8] text-[#1d1d1a]">
      <header className="border-b border-[#cbc8bd] bg-[#f6f5ef]/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
          <Link
            to="/"
            className="font-display-2 text-2xl text-[#24211b] transition hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#6f6657]"
          >
            T4 Canvas
          </Link>
          <div className="text-xs uppercase tracking-[0.2em] text-[#6c665a]">
            Swiss Editorial Flow
          </div>
        </div>
      </header>

      <section className="mx-auto grid max-w-6xl gap-8 px-5 py-12 sm:px-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-[#7e7566]">Model Ledger</p>
          <h1 className="font-display-2 mt-3 text-5xl leading-[0.95] text-[#1f1c17] sm:text-6xl">
            Precision image operations without budget drift.
          </h1>
          <p className="mt-4 max-w-xl text-sm text-[#4f4a40] sm:text-base">
            Run every generation pass in a single fee studio. Compare models,
            lock quality constraints, and publish approved assets faster.
          </p>
        </div>

        <aside className="rounded-3xl border border-[#cfcabf] bg-[#f9f7f2] p-5">
          <p className="text-xs uppercase tracking-[0.22em] text-[#7f786b]">Focus Mode</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {focusModes.map((mode) => (
              <button
                key={mode.id}
                type="button"
                onClick={() => setFocus(mode.id)}
                className={`rounded-full border px-3 py-2 text-xs uppercase tracking-[0.18em] transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5e5547] ${
                  focus === mode.id
                    ? 'border-[#302a21] bg-[#302a21] text-[#f9f7f2]'
                    : 'border-[#b8b1a3] bg-white text-[#494338] hover:border-[#6f6657]'
                }`}
              >
                {mode.label}
              </button>
            ))}
          </div>
          <h2 className="font-display-2 mt-4 text-3xl leading-tight text-[#2a251d]">
            {activeMode.headline}
          </h2>
          <p className="mt-2 text-sm text-[#5f594d]">{activeMode.note}</p>
        </aside>
      </section>

      <section className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="overflow-hidden rounded-3xl border border-[#cbc7bb] bg-white">
          <div className="grid grid-cols-[1.4fr_0.7fr_0.7fr_0.8fr] border-b border-[#ddd8ce] px-4 py-3 text-xs uppercase tracking-[0.2em] text-[#6f685a] sm:px-6">
            <span>Model</span>
            <span>Speed</span>
            <span>Detail</span>
            <span>Economy</span>
          </div>
          {rows.map((row) => (
            <article
              key={row.model}
              className="grid grid-cols-[1.4fr_0.7fr_0.7fr_0.8fr] gap-2 border-b border-[#eee9df] px-4 py-4 text-sm sm:px-6"
            >
              <div>
                <h3 className="font-semibold text-[#2b261f]">{row.model}</h3>
                <p className="text-xs text-[#777063]">{row.strength}</p>
              </div>
              <span className="text-[#3a352d]">{row.speed}</span>
              <span className="text-[#3a352d]">{row.detail}</span>
              <span className="text-[#3a352d]">{row.economy}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-4 px-5 py-12 sm:grid-cols-3 sm:px-8">
        <article className="rounded-2xl border border-[#cfcabf] bg-[#f6f4ec] p-5">
          <p className="text-xs uppercase tracking-[0.2em] text-[#786f61]">Metric A</p>
          <p className="mt-3 text-xl font-semibold text-[#2b261e]">{matrix[focus].left}</p>
        </article>
        <article className="rounded-2xl border border-[#cfcabf] bg-[#f6f4ec] p-5">
          <p className="text-xs uppercase tracking-[0.2em] text-[#786f61]">Metric B</p>
          <p className="mt-3 text-xl font-semibold text-[#2b261e]">{matrix[focus].middle}</p>
        </article>
        <article className="rounded-2xl border border-[#cfcabf] bg-[#f6f4ec] p-5">
          <p className="text-xs uppercase tracking-[0.2em] text-[#786f61]">Metric C</p>
          <p className="mt-3 text-xl font-semibold text-[#2b261e]">{matrix[focus].right}</p>
        </article>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-12 sm:px-8">
        <div className="rounded-3xl border border-[#332d24] bg-[#332d24] p-6 text-[#f9f6ef] sm:flex sm:items-end sm:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-[#d9d2c6]">Membership</p>
            <h2 className="font-display-2 mt-2 text-4xl leading-tight">Flat monthly studio pass for every model.</h2>
            <p className="mt-2 text-sm text-[#d8d1c4]">No per-image fees, shared prompt memory, and instant export stacks.</p>
          </div>
          <button
            type="button"
            className="mt-5 rounded-full border border-[#f3ecde] bg-[#f3ecde] px-5 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#2f291f] transition hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#f3ecde] sm:mt-0"
          >
            Claim Access
          </button>
        </div>
      </section>
    </main>
  )
}
