import { useEffect, useState } from 'react'

const statusPanels = [
  {
    title: 'Prompt Throughput',
    value: '214 / hr',
    detail: 'Auto-routes to fastest matching model lane.',
  },
  {
    title: 'Edit Accuracy',
    value: '96.2%',
    detail: 'Mask-based revision pass success before manual touch-up.',
  },
  {
    title: 'Output Approval',
    value: '89%',
    detail: 'Assets approved on first review by campaign teams.',
  },
  {
    title: 'Export Reliability',
    value: '99.98%',
    detail: 'Queued exports complete without rerun.',
  },
]

const inspectionRules = [
  'Style lock prevents accidental palette drift',
  'Safe-margin overlays for ad placements',
  'Prompt versioning with side-by-side replays',
  'Per-model negative prompt profiles',
]

const queueTimeline = [
  {
    stage: 'Parse Intent',
    info: 'Natural prompt decomposed into composition and style constraints.',
  },
  {
    stage: 'Model Assignment',
    info: 'T4 Canvas picks Nano Banana Pro, Flux 2, gpt-image-1.5, or Seedream based on objective.',
  },
  {
    stage: 'Render + Repair',
    info: 'Image pass plus optional inpaint refinement and detail cleanup.',
  },
  {
    stage: 'Publish Set',
    info: 'Exports are grouped by channel: web, social, and print.',
  },
]

export function DesignThree() {
  const [activeStep, setActiveStep] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((value) => (value + 1) % queueTimeline.length)
    }, 1800)

    return () => clearInterval(timer)
  }, [])

  return (
    <main className="font-cockpit-body overflow-x-hidden bg-[#05090f] pt-24 text-[#dce7f5]">
      <section className="border-b border-white/10 bg-[#05090f]">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 pb-20 pt-32 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <p className="font-cockpit-mono text-[10px] uppercase tracking-[0.22em] text-[#7dd3fc]">G3 / Cockpit Stack</p>
            <h1 className="font-cockpit-display mt-4 max-w-xl text-5xl leading-[0.9] text-[#f8fbff] sm:text-6xl">
              Command your image pipeline like mission control.
            </h1>
            <p className="mt-5 max-w-xl text-base text-[#c1ccdb]">
              Route prompts across four models, inspect outputs, and publish batch-perfect assets from one cockpit.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 text-xs uppercase tracking-[0.14em] text-[#93c5fd]">
              <span className="rounded-full border border-[#7dd3fc55] bg-[#0ea5e91a] px-3 py-1">Nano Banana Pro</span>
              <span className="rounded-full border border-[#7dd3fc55] bg-[#0ea5e91a] px-3 py-1">Flux 2</span>
              <span className="rounded-full border border-[#7dd3fc55] bg-[#0ea5e91a] px-3 py-1">gpt-image-1.5</span>
              <span className="rounded-full border border-[#7dd3fc55] bg-[#0ea5e91a] px-3 py-1">Seedream</span>
            </div>
          </div>

          <article className="rounded-3xl border border-[#7dd3fc33] bg-[#0b1220] p-5 shadow-[0_30px_70px_-30px_#0ea5e955]">
            <div className="mb-4 flex items-center justify-between">
              <p className="font-cockpit-mono text-[10px] uppercase tracking-[0.22em] text-[#93c5fd]">Command Panel</p>
              <span className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-[#34d399]">
                <span className="h-2 w-2 animate-pulse rounded-full bg-[#34d399]" />
                Healthy
              </span>
            </div>
            <div className="rounded-2xl border border-white/10 bg-[#030711] p-4 font-cockpit-mono text-xs text-[#bae6fd]">
              <p>&gt; queue --campaign "spring launch" --shots 48</p>
              <p>&gt; route --priority realism high</p>
              <p>&gt; apply-style "neo editorial"</p>
              <p className="mt-2 text-[#34d399]">✓ 8 lanes active • 0 failures</p>
            </div>
            <button
              type="button"
              className="mt-4 w-full rounded-xl border border-[#38bdf833] bg-[#0ea5e926] px-4 py-3 font-cockpit-mono text-xs uppercase tracking-[0.16em] text-[#e0f2fe] transition hover:bg-[#0ea5e944]"
            >
              Open Full Studio
            </button>
          </article>
        </div>
      </section>

      <section className="border-b border-white/10 bg-[#060d18] py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="font-cockpit-display text-3xl text-white">Status Panels</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {statusPanels.map((panel, index) => (
              <article
                key={panel.title}
                className="panel-rise group rounded-2xl border border-white/10 bg-[#0c1627] p-5 transition duration-300 hover:-translate-y-1 hover:border-[#7dd3fc66]"
                style={{ animationDelay: `${index * 90}ms` }}
              >
                <p className="font-cockpit-mono text-[10px] uppercase tracking-[0.2em] text-[#93c5fd]">{panel.title}</p>
                <p className="mt-3 font-cockpit-display text-4xl leading-none text-white">{panel.value}</p>
                <p className="mt-3 text-sm text-[#c7d2e3] opacity-90 transition group-hover:opacity-100">{panel.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#e2e8f0] py-16 text-[#0f172a]">
        <div className="mx-auto grid max-w-6xl gap-6 px-6 lg:grid-cols-[1.35fr_0.9fr]">
          <article className="rounded-3xl border border-[#0f172a29] bg-white p-6 shadow-xl shadow-[#94a3b833]">
            <p className="font-cockpit-mono text-[10px] uppercase tracking-[0.22em] text-[#475569]">Constraint Protocols</p>
            <h2 className="font-cockpit-display mt-3 text-4xl leading-[0.92]">Inspector Rail</h2>
            <ul className="mt-5 space-y-3 text-sm text-[#1e293b]">
              {inspectionRules.map((rule) => (
                <li key={rule} className="rounded-2xl border border-[#0f172a22] bg-[#f8fafc] px-4 py-3">
                  {rule}
                </li>
              ))}
            </ul>
          </article>

          <aside className="lg:sticky lg:top-24 lg:h-fit">
            <article className="rounded-3xl border border-[#0f172a2e] bg-[#0f172a] p-5 text-[#dbeafe] shadow-2xl shadow-[#0f172a33]">
              <p className="font-cockpit-mono text-[10px] uppercase tracking-[0.22em] text-[#7dd3fc]">Inspector Snapshot</p>
              <dl className="mt-4 space-y-3 text-sm">
                <div className="flex items-center justify-between border-b border-white/10 pb-2">
                  <dt>Queued Batch</dt>
                  <dd className="font-cockpit-mono">24 frames</dd>
                </div>
                <div className="flex items-center justify-between border-b border-white/10 pb-2">
                  <dt>Selected Mode</dt>
                  <dd className="font-cockpit-mono">Hybrid realism</dd>
                </div>
                <div className="flex items-center justify-between">
                  <dt>Reviewer Status</dt>
                  <dd className="font-cockpit-mono text-[#34d399]">Green</dd>
                </div>
              </dl>
            </article>
          </aside>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#0b1220] py-16">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="font-cockpit-display text-3xl text-white">Queue Timeline</h2>
          <div className="mt-6 space-y-4">
            {queueTimeline.map((item, index) => (
              <article
                key={item.stage}
                className={[
                  'rounded-2xl border p-4 transition duration-300',
                  activeStep === index
                    ? 'border-[#7dd3fc88] bg-[#1d4ed833] text-white'
                    : 'border-white/10 bg-[#0a101b] text-[#bfd0e7]',
                ].join(' ')}
              >
                <div className="flex items-center justify-between gap-3">
                  <h3 className="font-cockpit-display text-2xl leading-none">{item.stage}</h3>
                  <span className="font-cockpit-mono text-[10px] uppercase tracking-[0.2em] text-[#7dd3fc]">
                    Step {index + 1}
                  </span>
                </div>
                <p className="mt-2 text-sm">{item.info}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#bef264] py-14 text-[#182c05]">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-6 px-6">
          <div>
            <p className="font-cockpit-mono text-[10px] uppercase tracking-[0.2em]">Pricing Dock</p>
            <h2 className="font-cockpit-display mt-2 text-4xl leading-[0.93]">Flat monthly studio. Zero model juggling.</h2>
            <p className="mt-2 max-w-xl text-sm">One membership unlocks every image engine, editing lane, and export profile in T4 Canvas.</p>
          </div>
          <div className="rounded-2xl border border-[#36531466] bg-[#ecfccb] p-4 text-right">
            <p className="font-cockpit-mono text-[10px] uppercase tracking-[0.2em] text-[#3f6212]">Studio Seat</p>
            <p className="font-cockpit-display mt-2 text-4xl leading-none">$39/mo</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-[#05090f] py-8">
        <div className="mx-auto max-w-6xl px-6 font-cockpit-mono text-[10px] uppercase tracking-[0.22em] text-[#64748b]">
          T4 Canvas cockpit is tuned for teams shipping daily creative output.
        </div>
      </footer>
    </main>
  )
}
