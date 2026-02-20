import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'

const qualityProfiles = {
  Raw: {
    summary: 'Fastest generation mode for concept storms and rough moodboards.',
    outputs: '520 outputs/day',
    render: '1.9s latency target',
  },
  Balanced: {
    summary: 'Default production mode for paid campaigns and polished explorations.',
    outputs: '420 outputs/day',
    render: '2.6s latency target',
  },
  Maximum: {
    summary: 'High-fidelity mode for hero assets, close-up textures, and print work.',
    outputs: '290 outputs/day',
    render: '3.8s latency target',
  },
}

type QualityProfile = keyof typeof qualityProfiles

export function DesignThreePage() {
  const [queueVelocity, setQueueVelocity] = useState(120)
  const [profile, setProfile] = useState<QualityProfile>('Balanced')

  const eta = useMemo(() => {
    const minutes = Math.max(4, Math.round(960 / queueVelocity))
    return `${minutes} min batch ETA`
  }, [queueVelocity])

  const batchPerHour = useMemo(() => {
    return Math.round((queueVelocity / 120) * 72)
  }, [queueVelocity])

  return (
    <main className="relative min-h-screen overflow-x-clip bg-[#0a0a0a] text-[#fffceb]">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(255,209,65,0.08)_1px,transparent_1px),linear-gradient(0deg,rgba(255,209,65,0.05)_1px,transparent_1px)] bg-[size:56px_56px]" />
      <div className="pointer-events-none absolute right-[-80px] top-16 h-60 w-60 rotate-12 bg-[#ffd248] blur-3xl opacity-35" />

      <section className="relative mx-auto w-full max-w-6xl px-6 py-8 md:px-10 lg:py-12">
        <header className="mb-12 flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="font-mono-tech text-[11px] uppercase tracking-[0.34em] text-[#ffe58f]">T4 Canvas</p>
            <p className="font-archivo text-sm uppercase tracking-[0.08em] text-[#d5c38f]">Concept: Brutalist Ops</p>
          </div>
          <Link
            to="/"
            className="rounded-full border border-[#f5cd46] px-5 py-2 font-mono-tech text-xs uppercase tracking-[0.2em] text-[#fbe9a9] transition hover:bg-[#ffd248] hover:text-[#17130a]"
          >
            All Concepts
          </Link>
        </header>

        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-6">
            <p className="inline-flex rounded-md border border-[#f0c847]/60 bg-[#f0c847]/10 px-3 py-1 font-mono-tech text-[10px] uppercase tracking-[0.18em] text-[#ffecaa]">
              FOR TEAMS THAT MEASURE CREATIVE IN OUTPUT PER HOUR
            </p>
            <h1 className="font-unbounded text-4xl uppercase leading-[0.95] text-[#fff4bf] md:text-6xl">
              One command desk for every image model you trust.
            </h1>
            <p className="max-w-2xl font-archivo text-base text-[#f8e9ba]/80 md:text-lg">
              Drive Nano Banana Pro, Flux 2, gpt-image-1.5, and Seedream through one brutalist interface
              built for fast operators. Generate, edit, and upscale in a single queue with a single monthly fee.
            </p>

            <div className="rounded-3xl border border-[#f5cd46]/55 bg-[#111111] p-5">
              <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
                <p className="font-mono-tech text-xs uppercase tracking-[0.17em] text-[#f7d96f]">Queue Velocity</p>
                <p className="font-unbounded text-2xl text-[#ffe589]">{queueVelocity} jobs/hr</p>
              </div>
              <input
                type="range"
                min={40}
                max={240}
                step={5}
                value={queueVelocity}
                onChange={(event) => setQueueVelocity(Number(event.target.value))}
                className="w-full accent-[#f3cb4d]"
              />
              <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                <div className="rounded-xl border border-[#f5cd46]/35 bg-black/35 p-3">
                  <p className="font-mono-tech text-[10px] uppercase tracking-[0.16em] text-[#f4d981]/75">Estimated Throughput</p>
                  <p className="mt-1 font-unbounded text-xl text-[#ffe8a2]">{batchPerHour} batches</p>
                </div>
                <div className="rounded-xl border border-[#f5cd46]/35 bg-black/35 p-3">
                  <p className="font-mono-tech text-[10px] uppercase tracking-[0.16em] text-[#f4d981]/75">Current Batch</p>
                  <p className="mt-1 font-unbounded text-xl text-[#ffe8a2]">{eta}</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <button
                type="button"
                className="rounded-md bg-[#ffd248] px-6 py-3 font-mono-tech text-xs uppercase tracking-[0.2em] text-[#1c1606] transition hover:bg-[#ffde74]"
              >
                Launch Queue
              </button>
              <button
                type="button"
                className="rounded-md border border-[#f5cd46]/45 px-6 py-3 font-mono-tech text-xs uppercase tracking-[0.2em] text-[#fcecb6] transition hover:border-[#f5cd46]"
              >
                See Operator Tour
              </button>
            </div>
          </div>

          <aside className="relative overflow-hidden rounded-3xl border border-[#f5cd46]/50 bg-[#121212] p-6">
            <div className="absolute -right-14 top-8 h-32 w-32 rotate-12 border border-[#f5cd46]/45" />
            <p className="font-mono-tech text-[11px] uppercase tracking-[0.16em] text-[#f3d77f]">Active Model Grid</p>
            <div className="mt-4 grid gap-3">
              {[
                ['Nano Banana Pro', 'Prompt logic + fast ideation'],
                ['Flux 2', 'Photoreal detail + depth control'],
                ['gpt-image-1.5', 'Reliable transforms + safety'],
                ['Seedream', 'Expressive stylization + character work'],
              ].map(([name, role]) => (
                <div key={name} className="rounded-xl border border-[#f5cd46]/30 bg-black/30 p-4">
                  <p className="font-unbounded text-lg uppercase text-[#fff2be]">{name}</p>
                  <p className="mt-1 text-sm text-[#eedca6]/78">{role}</p>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section className="relative mx-auto w-full max-w-6xl px-6 pb-8 md:px-10">
        <div className="grid gap-4 md:grid-cols-3">
          {[
            ['Unified Prompt DNA', 'Version every prompt and branch ideas without breaking lineage.'],
            ['Hard Approval Gates', 'Lock client-ready frames with immutable review stamps.'],
            ['Flat Plan Control', 'Eliminate model-by-model pricing drift for every campaign.'],
          ].map(([title, body]) => (
            <article key={title} className="rounded-xl border border-[#f5cd46]/35 bg-[#131313] p-5">
              <h2 className="font-unbounded text-xl uppercase text-[#fff4c2]">{title}</h2>
              <p className="mt-2 text-sm text-[#e8d7a1]/78">{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="relative mx-auto w-full max-w-6xl px-6 py-12 md:px-10">
        <div className="rounded-3xl border border-[#f5cd46]/45 bg-[#111111] p-6 md:p-8">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
            <h2 className="font-unbounded text-3xl uppercase leading-none text-[#fff2b8] md:text-4xl">Render Profile Monitor</h2>
            <div className="flex flex-wrap gap-2">
              {(Object.keys(qualityProfiles) as QualityProfile[]).map((name) => (
                <button
                  key={name}
                  type="button"
                  onClick={() => setProfile(name)}
                  className={`rounded-md px-4 py-2 font-mono-tech text-[11px] uppercase tracking-[0.16em] transition ${
                    profile === name
                      ? 'bg-[#ffd248] text-[#1c1606]'
                      : 'border border-[#f5cd46]/35 text-[#f2dd9b] hover:border-[#f5cd46]/55'
                  }`}
                >
                  {name}
                </button>
              ))}
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <article className="rounded-xl border border-[#f5cd46]/30 bg-black/30 p-4">
              <p className="font-mono-tech text-[10px] uppercase tracking-[0.16em] text-[#ebd58e]/75">Mode Summary</p>
              <p className="mt-2 text-sm text-[#f6e5b2]/82">{qualityProfiles[profile].summary}</p>
            </article>
            <article className="rounded-xl border border-[#f5cd46]/30 bg-black/30 p-4">
              <p className="font-mono-tech text-[10px] uppercase tracking-[0.16em] text-[#ebd58e]/75">Daily Capacity</p>
              <p className="mt-2 font-unbounded text-2xl uppercase text-[#fff2bd]">{qualityProfiles[profile].outputs}</p>
            </article>
            <article className="rounded-xl border border-[#f5cd46]/30 bg-black/30 p-4">
              <p className="font-mono-tech text-[10px] uppercase tracking-[0.16em] text-[#ebd58e]/75">Render Target</p>
              <p className="mt-2 font-unbounded text-2xl uppercase text-[#fff2bd]">{qualityProfiles[profile].render}</p>
            </article>
          </div>
        </div>
      </section>

      <section className="relative mx-auto w-full max-w-6xl px-6 pb-14 md:px-10 lg:pb-20">
        <div className="grid gap-4 lg:grid-cols-[1fr_1fr]">
          <article className="rounded-2xl border border-[#f5cd46]/35 bg-[#131313] p-6">
            <p className="font-mono-tech text-[11px] uppercase tracking-[0.18em] text-[#f4d983]">Why operators switch</p>
            <ul className="mt-4 space-y-2 text-sm text-[#f0ddaa]/80">
              <li>Team velocity jumped 2.7x after unifying model workflows.</li>
              <li>Approval loops tightened with in-app comparison stacks.</li>
              <li>No extra invoicing logic for each model family.</li>
            </ul>
          </article>
          <article className="rounded-2xl border border-[#ffd248] bg-[#ffd248] p-6 text-[#21180a]">
            <p className="font-mono-tech text-[11px] uppercase tracking-[0.18em]">Flat monthly access</p>
            <h3 className="mt-2 font-unbounded text-4xl uppercase leading-none">$199</h3>
            <p className="mt-2 text-sm">Every model. Every edit tool. One predictable cost.</p>
            <button
              type="button"
              className="mt-5 rounded-md border border-[#221a0c] px-5 py-3 font-mono-tech text-xs uppercase tracking-[0.18em] transition hover:bg-[#221a0c] hover:text-[#ffe9a2]"
            >
              Activate Studio Access
            </button>
          </article>
        </div>
      </section>
    </main>
  )
}
