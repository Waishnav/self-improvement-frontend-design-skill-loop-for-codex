import { useEffect, useState } from 'react'

type ModelRow = {
  model: string
  style: string
  avgLatency: string
  maxBatch: string
  bestFor: string
}

const modelRows: ModelRow[] = [
  {
    model: 'Nano Banana Pro',
    style: 'Photoreal editorial',
    avgLatency: '12.1s',
    maxBatch: '24 frames',
    bestFor: 'Product launches and lifestyle campaigns',
  },
  {
    model: 'Flux 2',
    style: 'Illustrative cinematic',
    avgLatency: '9.4s',
    maxBatch: '32 frames',
    bestFor: 'Concept art and storyboard ideation',
  },
  {
    model: 'gpt-image-1.5',
    style: 'Prompt-accurate composition',
    avgLatency: '10.8s',
    maxBatch: '20 frames',
    bestFor: 'Typography-aware ad layouts',
  },
  {
    model: 'Seedream',
    style: 'Surreal texture blends',
    avgLatency: '10.0s',
    maxBatch: '28 frames',
    bestFor: 'Experimental campaigns and art-driven concepts',
  },
]

const matrixRows = [
  {
    feature: 'Inpainting precision',
    nano: 'Excellent',
    flux: 'Good',
    gpt: 'Excellent',
    seedream: 'Good',
  },
  {
    feature: 'Layout obedience',
    nano: 'Good',
    flux: 'Medium',
    gpt: 'Excellent',
    seedream: 'Medium',
  },
  {
    feature: 'Style transfer range',
    nano: 'Good',
    flux: 'Excellent',
    gpt: 'Good',
    seedream: 'Excellent',
  },
  {
    feature: 'Batch consistency',
    nano: 'Excellent',
    flux: 'Excellent',
    gpt: 'Good',
    seedream: 'Good',
  },
]

const specs = [
  { label: 'Monthly Plan', value: '$39 flat' },
  { label: 'Concurrent Jobs', value: '8 lanes' },
  { label: 'Team Seats Included', value: '5 seats' },
  { label: 'Export Presets', value: 'PNG, JPG, WebP, PSD-ready' },
]

export function DesignTwo() {
  const [jobs, setJobs] = useState(312)
  const [latency, setLatency] = useState(1.4)
  const [utilization, setUtilization] = useState(74)

  useEffect(() => {
    const interval = setInterval(() => {
      setJobs((value) => value + Math.floor(Math.random() * 4))
      setLatency(Number((1 + Math.random() * 1.4).toFixed(2)))
      setUtilization((value) => {
        const next = value + (Math.random() > 0.5 ? 2 : -2)
        return Math.max(61, Math.min(89, next))
      })
    }, 1600)

    return () => clearInterval(interval)
  }, [])

  return (
    <main className="font-grid-body overflow-x-hidden bg-[#f7f7f2] pb-8 pt-24 text-[#101314]">
      <section className="border-b border-[#11111122] bg-[#f7f7f2]">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 pb-20 pt-32 lg:grid-cols-[1.2fr_0.9fr]">
          <div>
            <p className="font-grid-mono text-[11px] uppercase tracking-[0.2em] text-[#56606a]">G9 / Swiss Data Surface</p>
            <h1 className="font-grid-display mt-4 max-w-3xl text-5xl leading-[0.9] text-[#0b0f10] sm:text-7xl">
              Precision image operations without budget drift.
            </h1>
            <p className="mt-5 max-w-2xl text-base text-[#2b3238] sm:text-lg">
              T4 Canvas unifies four image engines in a single flat monthly membership built for high-volume creative teams.
            </p>
          </div>

          <aside className="rounded-2xl border border-[#11111133] bg-[#ffffff] p-5">
            <div className="flex items-center justify-between border-b border-[#1111111f] pb-3">
              <p className="font-grid-mono text-[10px] uppercase tracking-[0.22em] text-[#4a5562]">Live Operations</p>
              <span className="inline-flex items-center gap-2 font-grid-mono text-[10px] uppercase tracking-[0.2em] text-[#0f766e]">
                <span className="h-2 w-2 animate-pulse rounded-full bg-[#0f766e]" />
                Active
              </span>
            </div>
            <dl className="mt-4 space-y-3">
              <div className="flex items-end justify-between border-b border-dashed border-[#1f293733] pb-2">
                <dt className="font-grid-mono text-[10px] uppercase tracking-[0.2em] text-[#475569]">Jobs Today</dt>
                <dd className="font-grid-display text-3xl leading-none">{jobs}</dd>
              </div>
              <div className="flex items-end justify-between border-b border-dashed border-[#1f293733] pb-2">
                <dt className="font-grid-mono text-[10px] uppercase tracking-[0.2em] text-[#475569]">Avg Queue (mins)</dt>
                <dd className="font-grid-display text-3xl leading-none">{latency}</dd>
              </div>
              <div className="flex items-end justify-between">
                <dt className="font-grid-mono text-[10px] uppercase tracking-[0.2em] text-[#475569]">GPU Utilization</dt>
                <dd className="font-grid-display text-3xl leading-none">{utilization}%</dd>
              </div>
            </dl>
          </aside>
        </div>
      </section>

      <section className="border-b border-[#11111122] bg-white py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-4 flex flex-wrap items-center justify-between gap-4">
            <h2 className="font-grid-display text-3xl leading-none text-[#0f172a]">Model Data Rows</h2>
            <p className="font-grid-mono text-[10px] uppercase tracking-[0.2em] text-[#64748b]">Updated in real time</p>
          </div>
          <div className="divide-y divide-[#0f172a22] border-y border-[#0f172a33]">
            {modelRows.map((row) => (
              <article key={row.model} className="grid gap-3 px-1 py-5 sm:grid-cols-[1.1fr_1fr_120px_120px] sm:items-center">
                <div>
                  <h3 className="font-grid-display text-2xl leading-none text-[#111827]">{row.model}</h3>
                  <p className="mt-1 text-sm text-[#374151]">{row.bestFor}</p>
                </div>
                <p className="text-sm text-[#374151]">{row.style}</p>
                <p className="font-grid-mono text-xs uppercase tracking-[0.16em] text-[#111827]">{row.avgLatency}</p>
                <p className="font-grid-mono text-xs uppercase tracking-[0.16em] text-[#111827]">{row.maxBatch}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#ecf0f3] py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="font-grid-display text-3xl text-[#0f172a]">Comparison Matrix</h2>
          <div className="mt-5 overflow-x-auto rounded-2xl border border-[#0f172a25] bg-white">
            <table className="min-w-full border-collapse text-left text-sm text-[#111827]">
              <thead className="bg-[#f8fafc] font-grid-mono text-[10px] uppercase tracking-[0.18em] text-[#475569]">
                <tr>
                  <th className="px-4 py-3">Feature</th>
                  <th className="px-4 py-3">Nano Banana Pro</th>
                  <th className="px-4 py-3">Flux 2</th>
                  <th className="px-4 py-3">gpt-image-1.5</th>
                  <th className="px-4 py-3">Seedream</th>
                </tr>
              </thead>
              <tbody>
                {matrixRows.map((row) => (
                  <tr key={row.feature} className="border-t border-[#0f172a17]">
                    <td className="px-4 py-3 font-medium">{row.feature}</td>
                    <td className="px-4 py-3">{row.nano}</td>
                    <td className="px-4 py-3">{row.flux}</td>
                    <td className="px-4 py-3">{row.gpt}</td>
                    <td className="px-4 py-3">{row.seedream}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="bg-[#0f172a] py-16 text-[#e2e8f0]">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="font-grid-display text-3xl">Spec Blocks</h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {specs.map((item) => (
              <article key={item.label} className="rounded-2xl border border-white/15 bg-white/5 p-4">
                <p className="font-grid-mono text-[10px] uppercase tracking-[0.2em] text-[#94a3b8]">{item.label}</p>
                <p className="mt-2 text-lg font-semibold text-white">{item.value}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-[#111827] bg-[#14b8a6] py-12 text-[#052f30]">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-5 px-6">
          <div>
            <p className="font-grid-mono text-[10px] uppercase tracking-[0.2em]">Membership CTA</p>
            <h2 className="font-grid-display mt-2 text-4xl leading-[0.95]">Move from prompts to campaigns in one dashboard.</h2>
          </div>
          <button
            type="button"
            className="rounded-full bg-[#042f2e] px-6 py-3 font-grid-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-[#e6fffb] transition hover:-translate-y-0.5 hover:bg-black"
          >
            Start Flat Plan
          </button>
        </div>
      </section>

      <footer className="mx-auto mt-8 max-w-6xl px-6 font-grid-mono text-[10px] uppercase tracking-[0.22em] text-[#475569]">
        <p>© 2026 T4 Canvas. Operational benchmarks shown for illustration.</p>
      </footer>
    </main>
  )
}
