import { useState } from 'react'

const stackStats = [
  { label: 'ACTIVE QUEUES', value: '128', trend: '+18%' },
  { label: 'VARIANTS / HOUR', value: '3,420', trend: '+11%' },
  { label: 'EDIT LOOPS', value: '9.2', trend: '-6%' },
  { label: 'APPROVAL RATE', value: '94%', trend: '+4%' },
]

const queueTimeline = [
  'Prompt expansion across all model engines',
  'Model-specific guidance injection and render pass',
  'Upscale, inpaint, and variant dedupe automation',
  'Approval package generation for downstream teams',
]

export function ConceptThree() {
  const [mode, setMode] = useState<'quality' | 'speed'>('quality')

  return (
    <main className="bg-[#07080d] text-[#e8edf8]">
      <section className="mx-auto max-w-7xl px-6 pb-16 pt-32">
        <div className="overflow-hidden rounded-[2.2rem] border border-[#232b3f] bg-gradient-to-br from-[#0e1321] via-[#0b101b] to-[#080b13] p-7 shadow-[0_24px_90px_rgba(0,0,0,0.55)] sm:p-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="font-space text-xs tracking-[0.24em] text-[#8ba2d7]">T4 CANVAS COCKPIT</p>
              <h1 className="mt-4 font-sora text-5xl leading-[0.9] text-balance sm:text-6xl">
                Command every image model like mission control.
              </h1>
              <p className="mt-5 max-w-2xl font-space text-base text-[#b5c2df]">
                Generate and edit with Nano Banana Pro, Flux 2, gpt-image-1.5, and Seedream from one flat-fee studio built for power users.
              </p>
            </div>

            <div className="rounded-2xl border border-[#33415f] bg-[#101828]/70 p-4">
              <p className="font-space text-[11px] tracking-[0.2em] text-[#95aad9]">RUNTIME MODE</p>
              <div className="mt-3 flex rounded-full border border-[#3b4662] p-1">
                {(['quality', 'speed'] as const).map((item) => (
                  <button
                    key={item}
                    onClick={() => setMode(item)}
                    className={[
                      'rounded-full px-4 py-2 text-xs font-semibold tracking-[0.14em] transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8ea8de]',
                      mode === item ? 'bg-[#9fb8f0] text-[#0b1220]' : 'text-[#9aabd0] hover:bg-[#1a243a]',
                    ].join(' ')}
                  >
                    {item.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-7 rounded-2xl border border-[#2a334b] bg-[#0a0f1b] p-4">
            <div className="flex items-center justify-between text-[11px] tracking-[0.18em] text-[#7f95c7]">
              <span>COMMAND BAR</span>
              <span className="inline-flex items-center gap-2">
                <span className="h-2 w-2 animate-soft-pulse rounded-full bg-lime-300" />
                LIVE
              </span>
            </div>
            <p className="mt-3 rounded-xl border border-[#2a3348] bg-[#060912] px-4 py-3 font-space text-sm text-[#a4b5db]">
              /blend "futurewear portrait" --models=nanobanana,flux2,gpt-image-1.5,seedream --membership=t4-flat
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-18">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stackStats.map((stat) => (
            <article
              key={stat.label}
              className="rounded-2xl border border-[#202841] bg-[#0b101d] p-4 transition hover:-translate-y-1 hover:border-[#4b5f92]"
            >
              <p className="font-space text-[10px] tracking-[0.2em] text-[#7d92c4]">{stat.label}</p>
              <p className="mt-2 font-sora text-3xl text-[#eff4ff]">{stat.value}</p>
              <p className="mt-2 text-sm text-[#9eb0d5]">{stat.trend} vs last window</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-[#1d2336] bg-[#090c15] py-18">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="grid gap-4 sm:grid-cols-2">
            <article className="rounded-3xl border border-[#212c47] bg-[#0e1526] p-5">
              <p className="font-space text-xs tracking-[0.18em] text-[#86a0d8]">INSPECTOR</p>
              <h2 className="mt-3 font-sora text-2xl">Prompt DNA</h2>
              <p className="mt-3 text-sm text-[#a8b7d7]">
                Inspect composition directives, style weights, and negative prompt behavior before committing expensive runs.
              </p>
            </article>
            <article className="rounded-3xl border border-[#212c47] bg-[#0e1526] p-5">
              <p className="font-space text-xs tracking-[0.18em] text-[#86a0d8]">VARIANT MAP</p>
              <h2 className="mt-3 font-sora text-2xl">Branch Control</h2>
              <p className="mt-3 text-sm text-[#a8b7d7]">
                Fork high performers into structured branches and compare outcomes side-by-side before publishing.
              </p>
            </article>
          </div>

          <article className="rounded-3xl border border-[#263253] bg-gradient-to-b from-[#101b30] to-[#0d1425] p-6">
            <p className="font-space text-xs tracking-[0.18em] text-[#87a0d3]">PROCESS TIMELINE</p>
            <ol className="mt-4 space-y-4">
              {queueTimeline.map((step, index) => (
                <li key={step} className="flex gap-3">
                  <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[#4c6297] text-xs text-[#b8c8ed]">
                    {index + 1}
                  </span>
                  <p className="text-sm text-[#aec0e7]">{step}</p>
                </li>
              ))}
            </ol>
          </article>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-18">
        <div className="grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
          <article className="rounded-[2rem] border border-[#2a3658] bg-[#0d1527] p-7">
            <p className="font-space text-xs tracking-[0.18em] text-[#88a1d4]">PRICING DOCK</p>
            <h3 className="mt-4 font-sora text-4xl text-[#f2f6ff]">$39/month flat command license</h3>
            <p className="mt-4 max-w-2xl text-sm text-[#a9bbde]">
              All four image models, advanced editing, queued automation, and team seats included with zero per-model overages.
            </p>
            <button className="mt-7 rounded-full bg-[#9db8f2] px-7 py-3 text-xs font-semibold tracking-[0.16em] text-[#0d1321] transition hover:bg-[#b5c9f5] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9db8f2]">
              DEPLOY COCKPIT
            </button>
          </article>

          <article className="rounded-[2rem] border border-[#25314d] bg-[#090f1d] p-7">
            <p className="font-space text-xs tracking-[0.18em] text-[#7d97c6]">SYSTEM NOTE</p>
            <p className="mt-3 text-sm leading-relaxed text-[#9eb2d8]">
              T4 Canvas is tuned for image teams who need scale without chaos: one UI for generation, direction, editing, and delivery.
            </p>
            <div className="mt-6 space-y-3 text-xs tracking-[0.14em] text-[#7f92bc]">
              <p>UPTIME: 99.96%</p>
              <p>CONCURRENCY: 250 RENDERS / TEAM</p>
              <p>EXPORT PIPELINE: PSD, PNG, WEBP, PROMPT JSON</p>
            </div>
          </article>
        </div>
      </section>
    </main>
  )
}
