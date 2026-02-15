import { useState } from 'react'

type ControlMode = 'studio' | 'batch' | 'edit'

const controlPanels: Record<
  ControlMode,
  {
    title: string
    description: string
    stats: Array<{ label: string; value: string }>
  }
> = {
  studio: {
    title: 'Studio Session',
    description: 'Prompt blending with style anchors and instant quality telemetry.',
    stats: [
      { label: 'Average draft latency', value: '7.4s' },
      { label: 'Model handoff success', value: '98.1%' },
      { label: 'Prompt branch depth', value: '24 branches' },
    ],
  },
  batch: {
    title: 'Batch Pipeline',
    description: 'Generate campaign sets across all models with deterministic variation rules.',
    stats: [
      { label: 'Images per run', value: '512' },
      { label: 'Parallel queues', value: '16 workers' },
      { label: 'Retry waste', value: '1.9%' },
    ],
  },
  edit: {
    title: 'Edit Surgeon',
    description: 'Inpaint, relight, and color-match without jumping to external tools.',
    stats: [
      { label: 'Mask precision', value: '2px avg' },
      { label: 'Revision speed', value: '3.1s' },
      { label: 'Consistency score', value: '94/100' },
    ],
  },
}

const modelTable = [
  {
    model: 'Nano Banana Pro',
    signature: 'Photoreal depth and controlled lighting',
    sweetSpot: 'Campaign hero visuals',
    throughput: '4.2k renders/day',
  },
  {
    model: 'Flux 2',
    signature: 'High-velocity concept variation',
    sweetSpot: 'Moodboards and direction finding',
    throughput: '9.6k renders/day',
  },
  {
    model: 'gpt-image-1.5',
    signature: 'Structured prompt compliance',
    sweetSpot: 'Branded editorial art',
    throughput: '5.8k renders/day',
  },
  {
    model: 'Seedream',
    signature: 'Stylized atmosphere and surreal texture',
    sweetSpot: 'Narrative compositions',
    throughput: '6.3k renders/day',
  },
]

const controls: Array<{ key: ControlMode; label: string }> = [
  { key: 'studio', label: 'Studio' },
  { key: 'batch', label: 'Batch' },
  { key: 'edit', label: 'Edit' },
]

export function DesignTwo() {
  const [mode, setMode] = useState<ControlMode>('studio')
  const panel = controlPanels[mode]

  return (
    <main
      className="relative min-h-screen overflow-hidden bg-[#edf0f4] text-[#111218] [font-family:'IBM Plex Sans',sans-serif]"
      style={{
        backgroundImage:
          'linear-gradient(to right, rgba(17,18,24,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(17,18,24,0.05) 1px, transparent 1px)',
        backgroundSize: '56px 56px',
      }}
    >
      <section className="mx-auto grid max-w-7xl gap-8 px-6 pb-16 pt-28 lg:grid-cols-12">
        <div className="animate-rise lg:col-span-8">
          <p className="text-xs uppercase tracking-[0.26em] text-[#2563eb]">T4 Canvas / Swiss Data Control</p>
          <h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-[0.9] tracking-[-0.03em] text-[#0f172a] [font-family:'IBM Plex Sans Condensed',sans-serif] sm:text-6xl lg:text-7xl">
            Precision image generation for teams that track everything.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#273041]">
            One subscription unifies Nano Banana Pro, Flux 2, gpt-image-1.5, and Seedream with measurable speed, quality, and consistency.
          </p>
        </div>

        <aside className="animate-rise-delay rounded-3xl border border-[#131722]/20 bg-white/75 p-6 shadow-[0_18px_40px_rgba(17,18,24,0.08)] backdrop-blur lg:col-span-4 lg:self-start">
          <p className="text-xs uppercase tracking-[0.2em] text-[#1d4ed8]">Live Throughput</p>
          <p className="mt-3 text-5xl font-semibold tracking-tight text-[#0f172a] [font-family:'IBM Plex Sans Condensed',sans-serif]">
            22.1k
          </p>
          <p className="mt-1 text-sm text-[#3c485b]">Images processed in the last 24 hours.</p>
          <div className="mt-6 grid gap-3">
            <div className="rounded-xl border border-[#111827]/10 bg-[#f8fafc] p-3 text-sm text-[#1e293b]">
              Uptime <span className="float-right font-semibold">99.96%</span>
            </div>
            <div className="rounded-xl border border-[#111827]/10 bg-[#f8fafc] p-3 text-sm text-[#1e293b]">
              Median queue <span className="float-right font-semibold">12 sec</span>
            </div>
          </div>
        </aside>
      </section>

      <section className="border-y border-[#111827]/15 bg-[#f7f9fc]/80 py-12">
        <div className="mx-auto max-w-7xl px-6">
          <header className="mb-6 grid gap-4 md:grid-cols-[1.2fr_0.8fr]">
            <h2 className="text-3xl font-semibold tracking-tight text-[#0f172a] [font-family:'IBM Plex Sans Condensed',sans-serif]">
              Model matrix
            </h2>
            <p className="text-sm leading-relaxed text-[#334155]">
              Strict routing logic automatically chooses the right model or blends two outputs when variance confidence drops.
            </p>
          </header>

          <div className="overflow-hidden rounded-3xl border border-[#0f172a]/15 bg-white/85 shadow-[0_14px_30px_rgba(15,23,42,0.08)]">
            <div className="hidden grid-cols-[1fr_1.2fr_1fr_1fr] border-b border-[#0f172a]/10 bg-[#f1f5f9] px-6 py-4 text-xs uppercase tracking-[0.18em] text-[#334155] md:grid">
              <p>Model</p>
              <p>Signature</p>
              <p>Sweet spot</p>
              <p>Throughput</p>
            </div>
            <div>
              {modelTable.map((row) => (
                <article
                  key={row.model}
                  className="grid gap-2 border-b border-[#0f172a]/10 px-6 py-5 text-sm text-[#1f2937] last:border-b-0 md:grid-cols-[1fr_1.2fr_1fr_1fr]"
                >
                  <p className="font-semibold text-[#0f172a]">{row.model}</p>
                  <p>{row.signature}</p>
                  <p>{row.sweetSpot}</p>
                  <p className="font-medium text-[#1d4ed8]">{row.throughput}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-6 py-16 lg:grid-cols-12">
        <article className="rounded-3xl border border-[#0f172a]/15 bg-white p-6 shadow-[0_14px_30px_rgba(15,23,42,0.08)] lg:col-span-4">
          <p className="text-xs uppercase tracking-[0.2em] text-[#2563eb]">Interactive mode compare</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#0f172a] [font-family:'IBM Plex Sans Condensed',sans-serif]">
            Shift the operating surface.
          </h2>
          <div className="mt-6 inline-flex rounded-full border border-[#0f172a]/15 bg-[#f8fafc] p-1">
            {controls.map((control) => (
              <button
                key={control.key}
                onClick={() => setMode(control.key)}
                className={`rounded-full px-4 py-2 text-xs font-medium uppercase tracking-[0.14em] transition duration-220 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1d4ed8] ${
                  mode === control.key
                    ? 'bg-[#0f172a] text-white'
                    : 'text-[#334155] hover:bg-[#e2e8f0]'
                }`}
              >
                {control.label}
              </button>
            ))}
          </div>
        </article>

        <article className="rounded-3xl border border-[#0f172a]/15 bg-white p-6 shadow-[0_14px_30px_rgba(15,23,42,0.08)] lg:col-span-8">
          <p className="text-xs uppercase tracking-[0.2em] text-[#0f172a]">{panel.title}</p>
          <p className="mt-3 max-w-2xl text-lg leading-relaxed text-[#334155]">{panel.description}</p>
          <div className="mt-7 grid gap-4 sm:grid-cols-3">
            {panel.stats.map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-[#0f172a]/12 bg-[#f8fafc] p-4">
                <p className="text-xs uppercase tracking-[0.16em] text-[#475569]">{stat.label}</p>
                <p className="mt-2 text-3xl font-semibold tracking-tight text-[#0f172a] [font-family:'IBM Plex Sans Condensed',sans-serif]">
                  {stat.value}
                </p>
              </div>
            ))}
          </div>
        </article>
      </section>

      <section className="relative border-y border-[#0f172a]/15 bg-[#0f172a] px-6 py-16 text-[#dbeafe]">
        <div className="absolute left-0 top-0 h-full w-1/3 bg-gradient-to-r from-[#1d4ed8]/40 to-transparent" />
        <div className="relative mx-auto flex max-w-7xl flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-xl">
            <p className="text-xs uppercase tracking-[0.24em] text-[#bfdbfe]">Flat pricing for power users</p>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight text-white [font-family:'IBM Plex Sans Condensed',sans-serif]">
              No per-image fees. No plan gymnastics.
            </h2>
          </div>
          <div className="rounded-2xl border border-[#dbeafe]/25 bg-[#0b1220] px-8 py-6">
            <p className="text-xs uppercase tracking-[0.2em] text-[#93c5fd]">Pro Studio</p>
            <p className="mt-2 text-5xl font-semibold tracking-tight text-white [font-family:'IBM Plex Sans Condensed',sans-serif]">
              $39
            </p>
            <p className="text-sm text-[#bfdbfe]">Monthly membership</p>
            <button className="mt-5 rounded-full bg-white px-6 py-2.5 text-sm font-semibold uppercase tracking-[0.17em] text-[#0f172a] transition duration-220 hover:bg-[#dbeafe] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#93c5fd]">
              Join T4 Canvas
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}
