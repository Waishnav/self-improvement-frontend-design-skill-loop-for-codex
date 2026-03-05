import { useState } from 'react'
import { Link } from 'react-router-dom'

/*
Concept: 1960s Swiss exhibition poster as a web launch page.
Screenshot moment: The giant red "4" cutting through the rigid grid while mode blocks flip copy.
What would feel wrong: Soft shadows, rounded pills, and decorative skeuomorphic UI.
*/

const modes = {
  launch: {
    label: 'Launch',
    title: 'Generate campaign roots in minutes.',
    detail: 'Start with Flux 2 variations and lock your composition before handoff.',
  },
  refine: {
    label: 'Refine',
    title: 'Edit with surgical precision.',
    detail: 'Use gpt-image-1.5 masks to revise only the zones that need correction.',
  },
  publish: {
    label: 'Publish',
    title: 'Ship one consistent visual voice.',
    detail: 'Blend output from all models while keeping brand framing tight.',
  },
} as const

type ModeKey = keyof typeof modes

function DesignThree() {
  const [mode, setMode] = useState<ModeKey>('launch')

  return (
    <main className="poster-grid min-h-screen overflow-hidden bg-[#f7f2e7] px-4 py-5 text-[#121212] sm:px-8">
      <div className="mx-auto max-w-6xl border border-[#121212] reveal">
        <header className="grid gap-2 border-b border-[#121212] px-4 py-4 font-['Work_Sans'] text-xs uppercase tracking-[0.1em] sm:grid-cols-3 sm:px-6">
          <p>T4 Canvas</p>
          <p className="text-center">Campaign Program 2026</p>
          <div className="flex gap-3 sm:justify-end">
            <Link to="/" className="underline decoration-1 underline-offset-3">
              concept index
            </Link>
            <a href="#cta" className="underline decoration-1 underline-offset-3">
              subscribe
            </a>
          </div>
        </header>

        <section className="relative grid gap-6 border-b border-[#121212] px-4 py-8 sm:px-6 lg:grid-cols-[2fr_1fr]">
          <p className="pointer-events-none absolute -left-2 top-0 font-['Bebas_Neue'] text-[clamp(10rem,34vw,22rem)] leading-none text-[#c51b1b]/85">
            4
          </p>
          <div className="relative z-10 pt-24 lg:pt-40">
            <p className="font-['Work_Sans'] text-xs uppercase tracking-[0.12em] text-[#c51b1b]">One seat includes four engines</p>
            <h1 className="mt-3 max-w-3xl font-['Bebas_Neue'] text-[clamp(3.2rem,12vw,9.5rem)] leading-[0.82] tracking-[0.02em]">
              Stop
              <span className="ml-3 italic text-[#c51b1b]">paying</span>
              <br />
              model by model.
            </h1>
            <p className="mt-5 max-w-xl font-['Work_Sans'] text-base leading-relaxed">
              T4 Canvas bundles Nano Banana Pro, Flux 2, gpt-image-1.5, and Seedream into one predictable monthly plan.
            </p>
          </div>
          <div className="relative z-10 border border-[#121212] bg-[#fdf9f0] p-4">
            <p className="font-['Work_Sans'] text-xs uppercase tracking-[0.1em]">Current mode</p>
            <h2 className="mt-3 font-['Bebas_Neue'] text-5xl leading-[0.88] text-[#c51b1b]">{modes[mode].label}</h2>
            <p className="mt-4 font-['Work_Sans'] text-sm leading-relaxed">{modes[mode].detail}</p>
          </div>
        </section>

        <section className="grid gap-6 px-4 py-8 sm:px-6 lg:grid-cols-[1fr_1.3fr]">
          <div>
            <p className="font-['Work_Sans'] text-xs uppercase tracking-[0.1em]">Workflow switch</p>
            <div className="mt-3 space-y-2">
              {(Object.keys(modes) as ModeKey[]).map((key) => (
                <button
                  key={key}
                  onClick={() => setMode(key)}
                  className={`w-full cursor-pointer border px-4 py-3 text-left font-['Work_Sans'] text-sm transition ${
                    mode === key ? 'border-[#c51b1b] bg-[#c51b1b] text-[#fff5ef]' : 'border-[#121212] hover:bg-[#efe6d7]'
                  }`}
                >
                  {modes[key].title}
                </button>
              ))}
            </div>
          </div>

          <div id="cta" className="grid gap-5 sm:grid-cols-[1fr_auto] sm:items-end">
            <div>
              <h3 className="font-['Bebas_Neue'] text-[clamp(2.4rem,6vw,5rem)] leading-[0.86]">Flat fee. Full output.</h3>
              <p className="mt-3 max-w-xl font-['Work_Sans'] text-sm leading-relaxed">
                Leave credit spreadsheets behind. Pay once and route each brief to the model that actually fits it.
              </p>
            </div>
            <button className="cursor-pointer border border-[#121212] bg-[#121212] px-6 py-4 font-['Work_Sans'] text-xs uppercase tracking-[0.1em] text-[#fff5ef] transition hover:-translate-y-0.5 hover:bg-[#c51b1b]">
              Reserve seat
            </button>
          </div>
        </section>
      </div>
    </main>
  )
}

export default DesignThree
