import { useMemo, useState } from 'react'

type Mode = 'quality' | 'speed'

const modeLabels: Record<Mode, string> = {
  quality: 'Quality lock',
  speed: 'Rapid throughput',
}

const modeStats: Record<Mode, Array<{ label: string; value: string; delta: string }>> = {
  quality: [
    { label: 'Render confidence', value: '97.2%', delta: '+3.1%' },
    { label: 'Revision loops', value: '2.4', delta: '-18%' },
    { label: 'Prompt fidelity', value: '94.8%', delta: '+5.2%' },
    { label: 'Approval speed', value: '11m', delta: '-9%' },
  ],
  speed: [
    { label: 'Variants per hour', value: '4,880', delta: '+22%' },
    { label: 'Queue turnaround', value: '74s', delta: '-14%' },
    { label: 'Parallel jobs', value: '512', delta: '+31%' },
    { label: 'Approval speed', value: '8m', delta: '-16%' },
  ],
}

const timeline: Record<Mode, string[]> = {
  quality: [
    'Inject style guards and model-specific tone constraints.',
    'Render four-engine pass with quality priority scheduler.',
    'Auto-dedupe similar outputs and preserve best compositions.',
    'Publish review board with lineage and edit checkpoints.',
  ],
  speed: [
    'Expand seed set and diversify layout intent automatically.',
    'Burst dispatch across Nano Banana Pro, Flux 2, gpt-image-1.5, and Seedream.',
    'Promote top-scoring variants to live edit queue instantly.',
    'Ship campaign pack with compressed turn-around artifacts.',
  ],
}

const panels = [
  {
    title: 'Inspector rail',
    text: 'Read prompt DNA, negative weights, and reference lock states before spending render time.',
  },
  {
    title: 'Variant graph',
    text: 'Branch winners, compare descendants, and isolate the exact moment quality diverges.',
  },
  {
    title: 'Edit queue',
    text: 'Chain inpaint, upscale, and cleanup passes in one pipeline with no context loss.',
  },
]

export function ConceptThree() {
  const [mode, setMode] = useState<Mode>('quality')
  const stats = useMemo(() => modeStats[mode], [mode])

  return (
    <main className="bg-[#05070d] text-[#eaf0ff]">
      <section className="mx-auto max-w-7xl px-6 pb-16 pt-28">
        <div className="overflow-hidden rounded-[2.1rem] border border-[#26314d] bg-gradient-to-br from-[#0c1322] via-[#0a1020] to-[#080d17] p-6 shadow-[0_26px_90px_rgba(0,0,0,0.55)] sm:p-9">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="font-mono text-xs tracking-[0.22em] text-[#8aa4d4]">T4 CANVAS OPS DECK</p>
              <h1 className="mt-4 font-redhat text-5xl font-semibold leading-[0.9] text-balance sm:text-6xl">
                Run image generation
                <span className="block text-[#9ec5ff]">like an operations floor.</span>
              </h1>
              <p className="mt-5 max-w-2xl font-chivo text-base text-[#b4c5e8] sm:text-lg">
                One console for generation and edits across Nano Banana Pro, Flux 2, gpt-image-1.5, and Seedream.
              </p>
            </div>

            <div className="rounded-2xl border border-[#33486f] bg-[#0f1a2f]/80 p-4">
              <p className="font-mono text-[11px] tracking-[0.2em] text-[#8ca6d8]">EXECUTION MODE</p>
              <div className="mt-3 flex rounded-full border border-[#3d4e72] p-1">
                {(['quality', 'speed'] as const).map((item) => (
                  <button
                    key={item}
                    onClick={() => setMode(item)}
                    className={[
                      'rounded-full px-4 py-2 font-mono text-xs transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#a8c7ff]',
                      mode === item ? 'bg-[#9ec5ff] text-[#071121]' : 'text-[#9cb1d9] hover:bg-[#17253f]',
                    ].join(' ')}
                  >
                    {modeLabels[item].toUpperCase()}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-7 rounded-2xl border border-[#2f4063] bg-[#091325] p-4">
            <div className="flex flex-wrap items-center justify-between gap-2 font-mono text-[11px] tracking-[0.16em] text-[#86a1ce]">
              <span>COMMAND BAR</span>
              <span className="inline-flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-lime-300 animate-pulse-dot" />
                LIVE / {mode.toUpperCase()}
              </span>
            </div>
            <p className="mt-3 rounded-xl border border-[#243b63] bg-[#060c18] px-4 py-3 font-mono text-sm text-[#aac3ea]">
              /launch --brief="future campaign set" --models=nanobanana,flux2,gpt-image-1.5,seedream --mode={mode}
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <article
              key={stat.label}
              className="rounded-2xl border border-[#263756] bg-[#0a1223] p-5 transition hover:-translate-y-0.5 hover:border-[#4f6692]"
            >
              <p className="font-mono text-[10px] tracking-[0.2em] text-[#7f97c4]">{stat.label.toUpperCase()}</p>
              <p className="mt-3 font-redhat text-4xl leading-none text-[#f0f5ff]">{stat.value}</p>
              <p className="mt-3 font-chivo text-sm text-[#a8bce2]">{stat.delta} vs last cycle</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-[#1f2b44] bg-[#080e1b] py-16">
        <div className="mx-auto grid max-w-7xl gap-5 px-6 lg:grid-cols-[1fr_0.98fr]">
          <div className="grid gap-4 sm:grid-cols-2">
            {panels.slice(0, 2).map((panel) => (
              <article key={panel.title} className="rounded-3xl border border-[#253554] bg-[#0c162a] p-5">
                <p className="font-mono text-xs tracking-[0.16em] text-[#87a0cf]">{panel.title.toUpperCase()}</p>
                <p className="mt-3 font-redhat text-2xl leading-tight text-[#edf3ff]">{panel.title}</p>
                <p className="mt-3 font-chivo text-sm text-[#abc0e8]">{panel.text}</p>
              </article>
            ))}
            <article className="rounded-3xl border border-[#253554] bg-[#0c162a] p-5 sm:col-span-2">
              <p className="font-mono text-xs tracking-[0.16em] text-[#87a0cf]">{panels[2].title.toUpperCase()}</p>
              <p className="mt-3 font-redhat text-2xl leading-tight text-[#edf3ff]">{panels[2].title}</p>
              <p className="mt-3 font-chivo text-sm text-[#abc0e8]">{panels[2].text}</p>
            </article>
          </div>

          <article className="rounded-3xl border border-[#2a3e65] bg-gradient-to-b from-[#0e1830] to-[#0a1223] p-6">
            <p className="font-mono text-xs tracking-[0.18em] text-[#8aa4d4]">QUEUE TIMELINE</p>
            <ol className="mt-4 space-y-4">
              {timeline[mode].map((step, index) => (
                <li key={step} className="flex gap-3">
                  <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[#4c6394] font-mono text-xs text-[#b6c8ee]">
                    {index + 1}
                  </span>
                  <p className="font-chivo text-sm text-[#aec1e7]">{step}</p>
                </li>
              ))}
            </ol>
          </article>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-5 lg:grid-cols-[1.04fr_0.96fr]">
          <article className="rounded-[2rem] border border-[#2b3f63] bg-[#0d172b] p-7">
            <p className="font-mono text-xs tracking-[0.18em] text-[#8ea8d8]">PRICING DOCK</p>
            <h3 className="mt-4 font-redhat text-4xl font-semibold leading-[0.92] text-[#f2f6ff] sm:text-5xl">
              $39 monthly for full control.
            </h3>
            <p className="mt-4 max-w-2xl font-chivo text-sm text-[#a8bddf] sm:text-base">
              Every model, every editor, team seats, queue automation, and export pipelines under one predictable subscription.
            </p>
            <button className="mt-7 rounded-full bg-[#9ec5ff] px-8 py-3 font-mono text-xs font-semibold tracking-[0.16em] text-[#081120] transition hover:bg-[#b7d4ff] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9ec5ff]">
              DEPLOY OPS DECK
            </button>
          </article>

          <article className="rounded-[2rem] border border-[#263754] bg-[#091121] p-7">
            <p className="font-mono text-xs tracking-[0.18em] text-[#7f95c2]">SYSTEM CHANNEL</p>
            <div className="mt-4 space-y-3 font-mono text-xs tracking-[0.12em] text-[#98add5]">
              <p>UPTIME: 99.97%</p>
              <p>MAX CONCURRENCY: 300 JOBS / TEAM</p>
              <p>EXPORT: PNG, WEBP, PSD, PROMPT JSON</p>
              <p>PIPELINE: GENERATE TO EDIT TO REVIEW TO SHIP</p>
            </div>
          </article>
        </div>
      </section>
    </main>
  )
}
