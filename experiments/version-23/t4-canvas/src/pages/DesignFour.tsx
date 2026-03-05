import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'

const lanes = [
  {
    id: 'launch',
    title: 'Launch Sprint',
    note: 'Fast ideation + premium finishing for landing page visuals.',
    queue: ['Nano Banana Pro concept pass', 'Flux 2 product clean-up', 'gpt-image-1.5 style set'],
    color: '#0e8d8f',
  },
  {
    id: 'ads',
    title: 'Paid Social Pack',
    note: 'Variant-heavy ad production with consistent brand mood.',
    queue: ['Seedream texture burst', 'gpt-image-1.5 composition set', 'Flux 2 ratio exports'],
    color: '#2c5fd8',
  },
  {
    id: 'editorial',
    title: 'Editorial Campaign',
    note: 'Long-form visual stories with cinematic continuity.',
    queue: ['Nano Banana narrative board', 'Seedream atmosphere blend', 'Flux 2 finishing pass'],
    color: '#7a3bd2',
  },
]

export function DesignFour() {
  const [activeLane, setActiveLane] = useState(lanes[0].id)

  const lane = useMemo(() => lanes.find((item) => item.id === activeLane) ?? lanes[0], [activeLane])

  return (
    <main className="min-h-screen bg-[#eff7fb] px-5 py-8 text-[#0f1720] md:px-10 lg:px-14">
      <div className="mx-auto max-w-7xl">
        <header className="mb-8 flex flex-wrap items-start justify-between gap-5">
          <div>
            <p className="font-[var(--font-mono)] text-xs uppercase tracking-[0.2em] text-[#3f5562]">Bento Control Room</p>
            <h1 className="mt-2 max-w-3xl font-[var(--font-display-four)] text-[clamp(3rem,8vw,6.2rem)] leading-[0.9] tracking-tight text-[#06202c]">
              One workspace to run every image model like a pro studio.
            </h1>
          </div>
          <Link
            to="/"
            className="rounded-full border border-[#163243]/30 bg-white px-4 py-2 font-[var(--font-body-four)] text-sm shadow-sm transition hover:-translate-y-0.5"
          >
            Concept Index
          </Link>
        </header>

        <section className="grid gap-4 lg:grid-cols-12">
          <article className="rounded-3xl border border-[#0c2a3a]/15 bg-white p-6 shadow-[0_16px_40px_rgba(5,30,40,0.08)] lg:col-span-8 lg:p-8">
            <p className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.18em] text-[#577587]">Pipeline selector</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {lanes.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveLane(item.id)}
                  className="rounded-full border px-4 py-2 font-[var(--font-body-four)] text-sm transition"
                  style={
                    activeLane === item.id
                      ? { borderColor: item.color, backgroundColor: `${item.color}18`, color: item.color }
                      : { borderColor: '#c2d4df', color: '#355162' }
                  }
                >
                  {item.title}
                </button>
              ))}
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-[1.2fr_0.8fr]">
              <div className="rounded-2xl border border-[#0c2a3a]/10 bg-[#f6fbff] p-5">
                <p className="font-[var(--font-display-four)] text-4xl leading-[0.95]" style={{ color: lane.color }}>
                  {lane.title}
                </p>
                <p className="mt-3 font-[var(--font-body-four)] text-sm leading-relaxed text-[#2b4657]">{lane.note}</p>
                <ul className="mt-5 space-y-2">
                  {lane.queue.map((task) => (
                    <li key={task} className="rounded-xl border border-[#0c2a3a]/10 bg-white px-3 py-2 font-[var(--font-body-four)] text-sm text-[#123043]">
                      {task}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-[#0c2a3a]/10 p-5" style={{ background: `linear-gradient(145deg, ${lane.color}20, #ffffff)` }}>
                <p className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.18em] text-[#3f5562]">Load meter</p>
                <p className="mt-2 font-[var(--font-display-four)] text-5xl leading-none text-[#06202c]">84%</p>
                <p className="mt-1 font-[var(--font-body-four)] text-sm text-[#355162]">Studio occupancy this week</p>
                <div className="mt-4 h-2 rounded-full bg-white/80">
                  <div className="h-full rounded-full transition-all duration-500" style={{ width: activeLane === 'ads' ? '92%' : activeLane === 'editorial' ? '76%' : '84%', backgroundColor: lane.color }} />
                </div>
              </div>
            </div>
          </article>

          <article className="rounded-3xl border border-[#0c2a3a]/15 bg-[#082838] p-6 text-white lg:col-span-4">
            <p className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.18em] text-white/65">Subscription</p>
            <p className="mt-2 font-[var(--font-display-four)] text-6xl leading-none">$59</p>
            <p className="mt-1 font-[var(--font-body-four)] text-sm text-white/80">Monthly, all models included</p>
            <div className="mt-6 space-y-2 font-[var(--font-body-four)] text-sm text-white/85">
              <p>• Unified prompt + edit history</p>
              <p>• Cross-model comparison canvas</p>
              <p>• Team-ready export presets</p>
            </div>
          </article>

          <article className="rounded-3xl border border-[#0c2a3a]/15 bg-white p-6 lg:col-span-3">
            <p className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.18em] text-[#577587]">Model stack</p>
            <ul className="mt-4 space-y-2 font-[var(--font-body-four)] text-sm text-[#143246]">
              <li>Nano Banana Pro</li>
              <li>Flux 2</li>
              <li>gpt-image-1.5</li>
              <li>Seedream</li>
            </ul>
          </article>

          <article className="rounded-3xl border border-[#0c2a3a]/15 bg-[#d9f2ff] p-6 lg:col-span-5">
            <p className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.18em] text-[#355162]">Visual throughput</p>
            <div className="mt-3 grid grid-cols-8 gap-1">
              {Array.from({ length: 48 }).map((_, idx) => (
                <span
                  key={idx}
                  className="h-5 rounded-sm"
                  style={{
                    backgroundColor: idx % 9 === 0 ? lane.color : idx % 2 === 0 ? '#7fc8e8' : '#ffffff',
                  }}
                />
              ))}
            </div>
          </article>

          <article className="rounded-3xl border border-[#0c2a3a]/15 bg-white p-6 lg:col-span-4">
            <p className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.18em] text-[#577587]">Why power users switch</p>
            <p className="mt-3 font-[var(--font-body-four)] text-sm leading-relaxed text-[#1e3d51]">
              No more fragmented tools, no sync lag between models, and no manual handoff for revisions. T4 Canvas
              keeps the entire image workflow in one command center.
            </p>
          </article>
        </section>
      </div>
    </main>
  )
}
