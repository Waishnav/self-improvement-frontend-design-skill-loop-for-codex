import { useState } from 'react'
import { Link } from 'react-router-dom'

/*
Concept: 1970s mission control terminal wall.
Screenshot moment: The centered command headline with live model panel over phosphor grid and scanlines.
What would feel wrong: Rounded app cards, pastel tones, and decorative gradients.
*/

const models = {
  nano: {
    name: 'Nano Banana Pro',
    role: 'Photoreal shot synthesis for campaign work.',
    setting: 'Lens priority • skin fidelity • realistic lighting',
  },
  flux: {
    name: 'Flux 2',
    role: 'Fast concept exploration with high prompt response.',
    setting: 'Prompt depth • variation seed • composition lock',
  },
  gpt: {
    name: 'gpt-image-1.5',
    role: 'Precision editing, inpainting, and layered revisions.',
    setting: 'Mask confidence • region blend • typography control',
  },
  seedream: {
    name: 'Seedream',
    role: 'Art-direction styles from sketch to final frame.',
    setting: 'Style vector • texture bias • palette clamp',
  },
} as const

type ModelKey = keyof typeof models

function DesignTwo() {
  const [active, setActive] = useState<ModelKey>('nano')

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050705] px-5 py-6 text-[#d9f8da] sm:px-10">
      <div className="scanlines pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute -left-32 top-24 h-72 w-72 rounded-full bg-[#2d8f43]/20 blur-[120px]" />
      <div className="pointer-events-none absolute -right-24 bottom-24 h-64 w-64 rounded-full bg-[#c7862a]/20 blur-[120px]" />

      <div className="relative mx-auto max-w-6xl border border-[#2a4f2d] bg-[#071108]/90 p-4 sm:p-8 reveal">
        <header className="grid gap-2 border-b border-[#2a4f2d] pb-4 font-['IBM_Plex_Mono'] text-xs uppercase tracking-[0.12em] sm:grid-cols-3">
          <p>T4 Canvas Command</p>
          <p className="text-center text-[#efb84f]">status: operational</p>
          <div className="flex gap-3 sm:justify-end">
            <span>latency 89ms</span>
            <span>uptime 99.98%</span>
          </div>
        </header>

        <section className="border-b border-[#2a4f2d] py-10 text-center">
          <p className="font-['IBM_Plex_Mono'] text-xs uppercase tracking-[0.14em] text-[#efb84f]">Control Room Brief</p>
          <h1 className="mx-auto mt-5 max-w-4xl font-['Space_Grotesk'] text-[clamp(3rem,9vw,8rem)] leading-[0.84] tracking-[-0.03em]">
            Run every model
            <span className="mx-3 italic text-[#efb84f]">without</span>
            leaving the cockpit.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl font-['Space_Grotesk'] text-lg text-[#c2e2c2]">
            One monthly seat for generation, edits, and version history across all engines.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <button className="cursor-pointer border border-[#3e6942] bg-[#122715] px-6 py-3 font-['IBM_Plex_Mono'] text-xs uppercase tracking-[0.12em] transition hover:-translate-y-0.5 hover:bg-[#214726]">
              boot studio
            </button>
            <Link
              to="/"
              className="border border-[#3e6942] px-6 py-3 font-['IBM_Plex_Mono'] text-xs uppercase tracking-[0.12em] transition hover:bg-[#122715]"
            >
              all concepts
            </Link>
          </div>
        </section>

        <section className="grid gap-6 py-8 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <p className="mb-3 font-['IBM_Plex_Mono'] text-xs uppercase tracking-[0.14em] text-[#93c793]">Model selector</p>
            <div className="grid gap-2 sm:grid-cols-2">
              {(Object.keys(models) as ModelKey[]).map((key) => (
                <button
                  key={key}
                  onClick={() => setActive(key)}
                  className={`cursor-pointer border px-4 py-4 text-left transition ${
                    active === key
                      ? 'border-[#efb84f] bg-[#1a2111]'
                      : 'border-[#2a4f2d] bg-[#09140a] hover:border-[#3a6a3f]'
                  }`}
                >
                  <p className="font-['Space_Grotesk'] text-lg leading-tight">{models[key].name}</p>
                  <p className="mt-1 font-['IBM_Plex_Mono'] text-[11px] uppercase tracking-[0.1em] text-[#8fb38f]">engaged</p>
                </button>
              ))}
            </div>
          </div>

          <aside className="border border-[#2a4f2d] bg-[#081108] p-5">
            <p className="font-['IBM_Plex_Mono'] text-xs uppercase tracking-[0.14em] text-[#efb84f]">active module</p>
            <h2 className="mt-3 font-['Space_Grotesk'] text-3xl leading-[0.92]">{models[active].name}</h2>
            <p className="mt-4 font-['Space_Grotesk'] text-sm leading-relaxed text-[#c5e4c5]">{models[active].role}</p>
            <p className="mt-5 border-l-2 border-[#efb84f] pl-3 font-['IBM_Plex_Mono'] text-xs uppercase tracking-[0.08em] text-[#efb84f]">
              {models[active].setting}
            </p>
            <button className="mt-6 w-full cursor-pointer border border-[#efb84f] px-4 py-3 font-['IBM_Plex_Mono'] text-xs uppercase tracking-[0.13em] text-[#efb84f] transition hover:bg-[#efb84f] hover:text-[#122715]">
              queue render
            </button>
          </aside>
        </section>
      </div>
    </main>
  )
}

export default DesignTwo
