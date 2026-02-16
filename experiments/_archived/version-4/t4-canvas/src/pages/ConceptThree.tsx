import { useMemo, useState } from 'react'

type RunMode = 'quality' | 'velocity'

const modeLabels: Record<RunMode, string> = {
  quality: 'Quality lock',
  velocity: 'Velocity burst',
}

const modeStats: Record<RunMode, Array<{ label: string; value: string; delta: string }>> = {
  quality: [
    { label: 'Prompt fidelity', value: '96.9%', delta: '+4.8%' },
    { label: 'Revision loops', value: '2.1', delta: '-17%' },
    { label: 'Client approvals', value: '91%', delta: '+6.2%' },
    { label: 'Avg turn-around', value: '9m', delta: '-12%' },
  ],
  velocity: [
    { label: 'Variants / hour', value: '5,220', delta: '+27%' },
    { label: 'Queue latency', value: '63s', delta: '-21%' },
    { label: 'Parallel jobs', value: '640', delta: '+34%' },
    { label: 'Avg turn-around', value: '6m', delta: '-19%' },
  ],
}

const timeline: Record<RunMode, string[]> = {
  quality: [
    'Lock visual guardrails and ban low-signal prompt drift.',
    'Run four-engine pass with quality-first scheduler.',
    'Auto-cluster similar outputs and keep strongest branches.',
    'Open annotated review board with prompt lineage.',
  ],
  velocity: [
    'Expand seed scope and diversify composition intent.',
    'Burst dispatch across Nano Banana Pro, Flux 2, gpt-image-1.5, and Seedream.',
    'Promote top performers to live edit queue automatically.',
    'Ship campaign pack with compressed handoff artifacts.',
  ],
}

const panels = [
  {
    title: 'Inspector rail',
    copy: 'Read prompt DNA, negative weights, and reference lock states before burning compute.',
  },
  {
    title: 'Variant graph',
    copy: 'Branch winners, compare descendants, and isolate exactly where quality diverges.',
  },
  {
    title: 'Edit queue',
    copy: 'Chain inpaint, upscale, cleanup, and export without context switching.',
  },
]

const modelStatus = [
  { model: 'Nano Banana Pro', status: 'Stable', jobs: '170 live' },
  { model: 'Flux 2', status: 'Stable', jobs: '204 live' },
  { model: 'gpt-image-1.5', status: 'Burst', jobs: '146 live' },
  { model: 'Seedream', status: 'Stable', jobs: '120 live' },
]

export function ConceptThree() {
  const [mode, setMode] = useState<RunMode>('quality')
  const stats = useMemo(() => modeStats[mode], [mode])

  return (
    <main className="bg-[#05070d] text-[#ebf0ff]">
      <section className="mx-auto max-w-7xl px-6 pb-16 pt-28">
        <div className="overflow-hidden rounded-[2.2rem] border border-[#2a3350] bg-gradient-to-br from-[#0d1426] via-[#0a1020] to-[#070d16] p-6 shadow-[0_26px_90px_rgba(0,0,0,0.55)] sm:p-9">
          <div className="grid gap-8 lg:grid-cols-[1.04fr_0.96fr] lg:items-end">
            <div>
              <p className="font-mono text-xs tracking-[0.22em] text-[#8da5d3]">T4 CANVAS COMMAND STACK</p>
              <h1 className="mt-4 font-redhat text-5xl font-semibold leading-[0.9] text-balance sm:text-6xl">
                Run image operations
                <span className="block text-[#9fc6ff]">like a real control room.</span>
              </h1>
              <p className="mt-5 max-w-2xl font-chivo text-base text-[#b5c6e9] sm:text-lg">
                Generate and edit across four AI models with one command surface and one predictable monthly bill.
              </p>
            </div>

            <div className="relative rounded-2xl border border-[#33496f] bg-[#0f1a31]/85 p-4">
              <div className="absolute -right-5 -top-5 hidden rounded-xl border border-[#42608d] bg-[#10203a] px-4 py-2 font-mono text-[10px] tracking-[0.16em] text-[#a8c6ed] md:block">
                OFF-GRID STATUS POD
              </div>
              <p className="font-mono text-[11px] tracking-[0.2em] text-[#8ca6d8]">RUN MODE</p>
              <div className="mt-3 flex rounded-full border border-[#3d4f74] p-1">
                {(['quality', 'velocity'] as const).map((item) => (
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

              <p className="mt-4 rounded-xl border border-[#253b62] bg-[#060c18] px-4 py-3 font-mono text-sm text-[#afc8ed]">
                /launch --models=nanobanana,flux2,gpt-image-1.5,seedream --mode={mode}
              </p>
            </div>
          </div>

          <div className="mt-7 grid gap-2 rounded-2xl border border-[#2f4062] bg-[#091325] p-4 md:grid-cols-4">
            {modelStatus.map((item) => (
              <article key={item.model} className="rounded-xl border border-[#223555] bg-[#0a1428] px-3 py-3">
                <p className="font-mono text-[10px] tracking-[0.16em] text-[#819ac9]">{item.model}</p>
                <p className="mt-2 font-redhat text-xl leading-none text-[#edf3ff]">{item.status}</p>
                <p className="mt-1 font-chivo text-xs text-[#a8bddf]">{item.jobs}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <article
              key={stat.label}
              className="rounded-2xl border border-[#273857] bg-[#0a1223] p-5 transition hover:-translate-y-0.5 hover:border-[#4f6692]"
            >
              <p className="font-mono text-[10px] tracking-[0.2em] text-[#7f97c4]">{stat.label.toUpperCase()}</p>
              <p className="mt-3 font-redhat text-4xl leading-none text-[#f0f5ff]">{stat.value}</p>
              <p className="mt-3 font-chivo text-sm text-[#a8bce2]">{stat.delta} vs last month</p>
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
                <p className="mt-3 font-chivo text-sm text-[#abc0e8]">{panel.copy}</p>
              </article>
            ))}
            <article className="rounded-3xl border border-[#253554] bg-[#0c162a] p-5 sm:col-span-2">
              <p className="font-mono text-xs tracking-[0.16em] text-[#87a0cf]">{panels[2].title.toUpperCase()}</p>
              <p className="mt-3 font-redhat text-2xl leading-tight text-[#edf3ff]">{panels[2].title}</p>
              <p className="mt-3 font-chivo text-sm text-[#abc0e8]">{panels[2].copy}</p>
            </article>
          </div>

          <article className="rounded-3xl border border-[#2a3f65] bg-gradient-to-b from-[#0e1830] to-[#0a1223] p-6">
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
            <h3 className="mt-4 font-redhat text-4xl font-semibold leading-[0.92] text-[#f2f6ff] sm:text-5xl">$39 monthly for full control.</h3>
            <p className="mt-4 max-w-2xl font-chivo text-sm text-[#a8bddf] sm:text-base">
              All models, editing workflows, queue automation, and exports live under one plan with no model-specific surcharge.
            </p>
            <button className="mt-7 rounded-full bg-[#9ec5ff] px-8 py-3 font-mono text-xs font-semibold tracking-[0.16em] text-[#081120] transition hover:bg-[#b7d4ff] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9ec5ff]">
              DEPLOY COMMAND STACK
            </button>
          </article>

          <article className="rounded-[2rem] border border-[#263754] bg-[#091121] p-7">
            <p className="font-mono text-xs tracking-[0.18em] text-[#7f95c2]">SYSTEM CHANNEL</p>
            <div className="mt-4 space-y-3 font-mono text-xs tracking-[0.12em] text-[#98add5]">
              <p>UPTIME: 99.98%</p>
              <p>MAX CONCURRENCY: 320 JOBS / TEAM</p>
              <p>EXPORT: PNG, WEBP, PSD, PROMPT JSON</p>
              <p>PIPELINE: GENERATE TO EDIT TO REVIEW TO SHIP</p>
            </div>
          </article>
        </div>
      </section>
    </main>
  )
}
