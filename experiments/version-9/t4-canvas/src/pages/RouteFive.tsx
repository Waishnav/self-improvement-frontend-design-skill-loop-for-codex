import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'

type PosterMode = 'generate' | 'remix' | 'publish'

const posterModes: { id: PosterMode; label: string; lineOne: string; lineTwo: string; note: string }[] = [
  {
    id: 'generate',
    label: 'Generate',
    lineOne: 'BUILD IMAGE WORLDS',
    lineTwo: 'AT CAMPAIGN SPEED.',
    note: 'Run broad visual sweeps for early concept exploration.',
  },
  {
    id: 'remix',
    label: 'Remix',
    lineOne: 'SHAPE WILD OUTPUTS',
    lineTwo: 'INTO BRAND SYSTEMS.',
    note: 'Refine selected frames with constrained composition edits.',
  },
  {
    id: 'publish',
    label: 'Publish',
    lineOne: 'SHIP FINAL VISUALS',
    lineTwo: 'WITHOUT TOOL CHAOS.',
    note: 'Export ready-to-launch packages with traceable prompt history.',
  },
]

const ribbons = [
  'STYLE LOCK PRESETS',
  'MODEL HANDOFF MEMORY',
  'INSTANT UPSCALE ROUTES',
  'BATCH CAMPAIGN EXPORTS',
]

export function RouteFive() {
  const [mode, setMode] = useState<PosterMode>('generate')
  const active = useMemo(
    () => posterModes.find((item) => item.id === mode) ?? posterModes[0],
    [mode],
  )

  return (
    <main className="font-body-5 min-h-screen bg-[#05070a] text-[#f7f2df]">
      <header className="border-b-4 border-[#f5d907] bg-[#111111]">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
          <Link
            to="/"
            className="font-display-5 text-3xl uppercase tracking-[0.08em] text-[#f5d907] transition hover:text-[#ffe957] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#f5d907]"
          >
            T4 Canvas
          </Link>
          <p className="text-xs uppercase tracking-[0.25em] text-[#f7e96f]">Poster Web Mode</p>
        </div>
      </header>

      <section className="poster-lines border-b-4 border-[#f5d907] bg-[#0c0c0c] px-5 py-10 sm:px-8 sm:py-12">
        <div className="mx-auto max-w-6xl">
          <div className="mb-6 flex flex-wrap gap-2">
            {posterModes.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setMode(item.id)}
                className={`rounded-none border px-4 py-2 text-xs uppercase tracking-[0.22em] transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#f5d907] ${
                  mode === item.id
                    ? 'border-[#f5d907] bg-[#f5d907] text-black'
                    : 'border-[#f5d907] bg-transparent text-[#f6eaa0] hover:bg-[#f5d907] hover:text-black'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <h1 className="font-display-5 text-6xl leading-[0.86] tracking-[0.03em] text-[#f5d907] sm:text-7xl lg:text-8xl">
            {active.lineOne}
            <span className="mt-2 block text-[#ff4a3d]">{active.lineTwo}</span>
          </h1>
          <p className="mt-4 max-w-xl text-sm uppercase tracking-[0.16em] text-[#f6edb7]">
            {active.note}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-10 sm:px-8">
        <div className="grid gap-3 sm:grid-cols-2">
          {ribbons.map((ribbon, index) => (
            <article
              key={ribbon}
              className={`border-2 p-4 text-sm font-semibold uppercase tracking-[0.18em] transition hover:-translate-y-0.5 ${
                index % 2 === 0
                  ? 'border-[#f5d907] bg-[#101010] text-[#f5e98b]'
                  : 'border-[#ff4a3d] bg-[#191919] text-[#ffd8cf]'
              }`}
            >
              {ribbon}
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-4 px-5 pb-12 sm:px-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="border-2 border-[#f5d907] bg-[#111111] p-6">
          <p className="text-xs uppercase tracking-[0.24em] text-[#f5e98b]">Framed Statements</p>
          <div className="mt-5 space-y-3">
            <p className="border border-[#ff4a3d] bg-[#1f0f0c] p-3 text-sm uppercase tracking-[0.16em] text-[#ffd8cf]">One fee. Four generation engines.</p>
            <p className="border border-[#f5d907] bg-[#17160c] p-3 text-sm uppercase tracking-[0.16em] text-[#f5e98b]">Edit in context, publish with traceability.</p>
            <p className="border border-[#00d1ff] bg-[#0b1720] p-3 text-sm uppercase tracking-[0.16em] text-[#b9f0ff]">From brief to launch assets in one studio.</p>
          </div>
        </div>

        <aside className="border-2 border-[#ff4a3d] bg-[#28110d] p-6">
          <p className="text-xs uppercase tracking-[0.22em] text-[#ffd8cf]">Monthly Pass</p>
          <h2 className="font-display-5 mt-2 text-6xl text-[#ff4a3d]">$39</h2>
          <p className="mt-3 text-sm uppercase tracking-[0.14em] text-[#ffe7e2]">Flat access to every model, every route, every export stack.</p>
          <button
            type="button"
            className="mt-5 w-full border-2 border-[#f5d907] bg-[#f5d907] px-4 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-black transition hover:bg-[#fff07a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#f5d907]"
          >
            Activate Studio
          </button>
        </aside>
      </section>

      <footer className="overflow-hidden border-t-4 border-[#f5d907] bg-[#090909] py-4">
        <div className="motion-safe-marquee flex min-w-max gap-10 px-6 text-xs uppercase tracking-[0.22em] text-[#f6edb7] motion-reduce:animate-none">
          <span>T4 Canvas</span>
          <span>Nano Banana Pro</span>
          <span>Flux 2</span>
          <span>gpt-image-1.5</span>
          <span>Seedream</span>
          <span>T4 Canvas</span>
          <span>Nano Banana Pro</span>
          <span>Flux 2</span>
          <span>gpt-image-1.5</span>
          <span>Seedream</span>
        </div>
      </footer>
    </main>
  )
}
