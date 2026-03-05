import { useState } from 'react'
import { Link } from 'react-router-dom'

const editions = [
  {
    id: 'creative',
    title: 'Creative Desk',
    headline: 'One subscription now carries every major image model under one newsroom roof.',
    quote: '"The brief changed three times before lunch. T4 Canvas kept pace."',
  },
  {
    id: 'agency',
    title: 'Agency Desk',
    headline: 'Campaign teams use model switching like editors use red pens: constantly.',
    quote: '"Flux for structure, Seedream for mood, done before the afternoon review."',
  },
  {
    id: 'solo',
    title: 'Solo Studio',
    headline: 'Independent creators now run enterprise-grade image pipelines without enterprise overhead.',
    quote: '"I ship in a day what used to take a week."',
  },
]

export function DesignTwo() {
  const [activeEdition, setActiveEdition] = useState(editions[0])

  return (
    <main className="min-h-screen bg-[#f4eee2] px-5 pb-12 pt-8 text-[#1f1a16] md:px-10 lg:px-14">
      <div className="mx-auto max-w-6xl border border-[#2a231e] bg-[#f7f1e6] shadow-[8px_8px_0_#2a231e]">
        <header className="border-b-2 border-[#2a231e] px-6 py-6 md:px-10">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#2a231e] pb-5">
            <p className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.28em]">Special Print</p>
            <h1 className="font-[var(--font-display-two)] text-4xl leading-none tracking-tight md:text-6xl">T4 CANVAS GAZETTE</h1>
            <Link to="/" className="font-[var(--font-body-two)] text-sm underline underline-offset-4">
              Return to Concept Grid
            </Link>
          </div>
          <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
            <p className="font-[var(--font-body-two)] text-sm">March 3, 2026 • Global Creative Desk</p>
            <p className="font-[var(--font-body-two)] text-sm">Flat Monthly Subscription Report</p>
          </div>
        </header>

        <section className="grid gap-0 md:grid-cols-[1.25fr_0.75fr]">
          <article className="border-b border-r border-[#2a231e] px-6 py-8 md:px-10">
            <p className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.2em]">Front Page Story</p>
            <h2 className="mt-3 font-[var(--font-display-two)] text-[clamp(2.9rem,6vw,5.8rem)] leading-[0.9] tracking-tight">
              {activeEdition.headline}
            </h2>
            <p className="mt-6 max-w-3xl font-[var(--font-body-two)] text-[1.07rem] leading-8">
              <span className="float-left mr-3 font-[var(--font-display-two)] text-7xl leading-[0.8] text-[#8b3122]">T</span>
              4 Canvas has emerged as a central desk for image production teams who no longer accept model lock-in.
              Inside one workspace, creators move between Nano Banana Pro, Flux 2, gpt-image-1.5, and Seedream
              while maintaining a single edit history and visual direction.
            </p>
            <blockquote className="mt-8 border-l-4 border-[#8b3122] pl-5 font-[var(--font-display-two)] text-3xl italic leading-tight text-[#8b3122]">
              {activeEdition.quote}
            </blockquote>
          </article>

          <aside className="grid border-b border-[#2a231e]">
            <div className="border-b border-[#2a231e] px-6 py-6 md:px-8">
              <p className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.2em]">Edition Selector</p>
              <div className="mt-3 space-y-2">
                {editions.map((edition) => (
                  <button
                    key={edition.id}
                    onClick={() => setActiveEdition(edition)}
                    className="w-full border border-[#2a231e] px-3 py-2 text-left font-[var(--font-body-two)] text-sm transition hover:bg-[#efe3d2]"
                    style={activeEdition.id === edition.id ? { backgroundColor: '#e9d8c0' } : undefined}
                  >
                    {edition.title}
                  </button>
                ))}
              </div>
            </div>

            <div className="px-6 py-6 md:px-8">
              <p className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.2em]">Model Desk Notes</p>
              <ul className="mt-3 space-y-3 font-[var(--font-body-two)] text-sm leading-relaxed">
                <li>Nano Banana Pro brings fast ideation for narrative scenes.</li>
                <li>Flux 2 handles precision framing and product geometry.</li>
                <li>gpt-image-1.5 excels at stylistic exploration under pressure.</li>
                <li>Seedream introduces texture and surreal mood on demand.</li>
              </ul>
            </div>
          </aside>
        </section>

        <section className="grid gap-0 md:grid-cols-3">
          <div className="border-r border-[#2a231e] px-6 py-7 md:px-8">
            <p className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.2em]">Lead Number</p>
            <p className="mt-2 font-[var(--font-display-two)] text-6xl leading-none text-[#8b3122]">1 Fee</p>
            <p className="mt-1 font-[var(--font-body-two)] text-sm">All major model families included monthly.</p>
          </div>
          <div className="border-r border-[#2a231e] px-6 py-7 md:px-8">
            <p className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.2em]">Layout Story</p>
            <p className="mt-2 font-[var(--font-body-two)] text-sm leading-relaxed">
              Editorial pacing keeps dense copy beside sparse moments, helping pricing and capability land harder.
            </p>
          </div>
          <div className="px-6 py-7 md:px-8">
            <p className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.2em]">Publisher Note</p>
            <p className="mt-2 font-[var(--font-body-two)] text-sm leading-relaxed">
              Replace fragmented app stacks with one studio that supports your full campaign cycle from prompt to final.
            </p>
          </div>
        </section>
      </div>
    </main>
  )
}
