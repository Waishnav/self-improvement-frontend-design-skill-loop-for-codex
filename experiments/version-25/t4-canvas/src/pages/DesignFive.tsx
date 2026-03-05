import { useState } from 'react'
import { Link } from 'react-router-dom'

/*
Concept: Cinematic title card and backstage control deck.
Screenshot moment: The giant Fraunces headline with amber light bloom and stage toggle panel.
What would feel wrong: Flat white UI, playful stickers, and low-contrast gray text.
*/

type Stage = 'generate' | 'edit'

const stageCopy = {
  generate: {
    title: 'Generate Scene',
    detail: 'Spin broad concept rounds in Flux 2 and Seedream until the creative director nods.',
  },
  edit: {
    title: 'Edit Scene',
    detail: 'Drop into gpt-image-1.5 to fix details, remove noise, and polish final campaign cuts.',
  },
}

function DesignFive() {
  const [stage, setStage] = useState<Stage>('generate')

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050505] px-5 py-7 text-[#efe7d9] sm:px-10">
      <div className="noir-glow left-[5%] top-[8%] h-52 w-52 bg-[#c67937]" />
      <div className="noir-glow right-[10%] top-[30%] h-64 w-64 bg-[#8e4e2e]" />
      <div className="noir-glow bottom-[5%] left-[35%] h-72 w-72 bg-[#d3a25b]" />

      <div className="relative mx-auto max-w-6xl reveal">
        <header className="flex flex-wrap items-center justify-between gap-3 border-b border-[#3a3128] pb-4">
          <p className="font-['Plus_Jakarta_Sans'] text-xs uppercase tracking-[0.12em] text-[#dba160]">T4 Canvas Studio Cut</p>
          <div className="flex items-center gap-5 font-['Plus_Jakarta_Sans'] text-sm text-[#d7cdc0]">
            <span>All models unlocked</span>
            <Link to="/" className="transition hover:text-[#dba160]">
              explore concepts
            </Link>
          </div>
        </header>

        <section className="py-10 text-center">
          <p className="font-['Plus_Jakarta_Sans'] text-xs uppercase tracking-[0.12em] text-[#dba160]">Launch Sequence</p>
          <h1 className="mx-auto mt-4 max-w-5xl font-['Fraunces'] text-[clamp(3.2rem,10.5vw,8.8rem)] leading-[0.84] tracking-[-0.02em]">
            Direct every
            <span className="mx-3 italic text-[#dba160]">image</span>
            from one premium stage.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl font-['Plus_Jakarta_Sans'] text-base leading-relaxed text-[#d4c8b9] sm:text-lg">
            Replace stacked subscriptions with one monthly pass for Nano Banana Pro, Flux 2, gpt-image-1.5, and Seedream.
          </p>
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
          <div className="border border-[#3a3128] bg-[#0d0b09]/90 p-6 sm:p-8">
            <div className="inline-flex border border-[#55463a] p-1">
              <button
                onClick={() => setStage('generate')}
                className={`cursor-pointer px-4 py-2 font-['Plus_Jakarta_Sans'] text-xs uppercase tracking-[0.1em] transition ${
                  stage === 'generate' ? 'bg-[#dba160] text-[#1b130b]' : 'text-[#d7cdc0] hover:bg-[#1c1713]'
                }`}
              >
                Generate
              </button>
              <button
                onClick={() => setStage('edit')}
                className={`cursor-pointer px-4 py-2 font-['Plus_Jakarta_Sans'] text-xs uppercase tracking-[0.1em] transition ${
                  stage === 'edit' ? 'bg-[#dba160] text-[#1b130b]' : 'text-[#d7cdc0] hover:bg-[#1c1713]'
                }`}
              >
                Edit
              </button>
            </div>

            <h2 className="mt-5 font-['Fraunces'] text-5xl leading-[0.9]">{stageCopy[stage].title}</h2>
            <p className="mt-4 max-w-xl font-['Plus_Jakarta_Sans'] text-sm leading-relaxed text-[#c8bba9]">{stageCopy[stage].detail}</p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <div className="border border-[#3a3128] bg-[#15110d] p-4">
                <p className="font-['Plus_Jakarta_Sans'] text-xs uppercase tracking-[0.1em] text-[#dba160]">Average project time</p>
                <p className="mt-2 font-['Fraunces'] text-4xl">-38%</p>
              </div>
              <div className="border border-[#3a3128] bg-[#15110d] p-4">
                <p className="font-['Plus_Jakarta_Sans'] text-xs uppercase tracking-[0.1em] text-[#dba160]">Model switches</p>
                <p className="mt-2 font-['Fraunces'] text-4xl">1 click</p>
              </div>
            </div>
          </div>

          <aside className="flex flex-col justify-between border border-[#3a3128] bg-[#0a0908]/85 p-6">
            <div>
              <p className="font-['Plus_Jakarta_Sans'] text-xs uppercase tracking-[0.11em] text-[#dba160]">Subscription</p>
              <p className="mt-4 font-['Fraunces'] text-7xl leading-none">
                $49
                <span className="ml-2 font-['Plus_Jakarta_Sans'] text-sm">monthly</span>
              </p>
              <p className="mt-2 font-['Plus_Jakarta_Sans'] text-sm text-[#c8bba9]">Unlimited generation and edits. No credit meter.</p>
            </div>
            <button className="mt-8 cursor-pointer border border-[#dba160] bg-[#dba160] px-4 py-3 font-['Plus_Jakarta_Sans'] text-xs uppercase tracking-[0.1em] text-[#1b130b] transition hover:-translate-y-0.5 hover:bg-[#edbe7a]">
              Start monthly access
            </button>
          </aside>
        </section>
      </div>
    </main>
  )
}

export default DesignFive
