import { Link } from 'react-router-dom'

const modelNotes = [
  {
    name: 'Nano Banana Pro',
    edge: 'Lightning draft cycles and smart prompt rewrites.',
  },
  {
    name: 'Flux 2',
    edge: 'Editorial-grade lighting, fabrics, and architecture detail.',
  },
  {
    name: 'gpt-image-1.5',
    edge: 'Precise image edits with language-first control.',
  },
  {
    name: 'Seedream',
    edge: 'Expressive alternate takes for creative exploration.',
  },
]

const rituals = [
  'Build a narrative board and prompt stack in one canvas.',
  'Route to all models for a first draft spread in parallel.',
  'Refine only chosen frames with region-aware edits.',
  'Export approved sets with production metadata attached.',
]

export function DesignTwo() {
  return (
    <main className="min-h-screen bg-[#f7f0e6] text-[#2f261e]">
      <header className="section-wrap py-8">
        <div className="flex items-center justify-between border-b border-[#b79d81]/45 pb-4">
          <Link to="/" className="font-source text-xs uppercase tracking-[0.22em] text-[#675543] transition hover:text-[#2f261e]">
            Browse Concepts
          </Link>
          <p className="font-source text-xs uppercase tracking-[0.18em] text-[#7f6a53]">T4 Canvas Membership</p>
          <button className="rounded-full border border-[#7f6a53]/60 px-4 py-2 font-source text-xs uppercase tracking-[0.16em] text-[#2f261e] transition hover:bg-[#dfceb8]/45">
            Start now
          </button>
        </div>
      </header>

      <section className="section-wrap pb-16 pt-4">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="font-source text-xs uppercase tracking-[0.28em] text-[#876f57]">Editorial Atelier</p>
            <h1 className="mt-6 font-fraunces text-5xl leading-[0.98] text-[#2e261f] sm:text-6xl lg:text-7xl">
              A magazine-grade front page for image generation professionals.
            </h1>
            <p className="mt-6 max-w-xl font-source text-lg leading-relaxed text-[#4f4032]">
              T4 Canvas combines Nano Banana Pro, Flux 2, gpt-image-1.5, and Seedream in one studio. One flat monthly price gives your team generation, editing, and production export without seat complexity.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <button className="rounded-full bg-[#2f261e] px-6 py-3 font-source text-xs uppercase tracking-[0.17em] text-[#fdf7ef] transition hover:bg-[#564635]">
                Open studio
              </button>
              <button className="rounded-full border border-[#7f6a53]/60 px-6 py-3 font-source text-xs uppercase tracking-[0.17em] text-[#2f261e] transition hover:bg-[#e8d8c5]">
                Read workflow
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-[2.4rem] border border-[#b79d81]/45 bg-[#fef8ef] p-5 shadow-[0_30px_60px_rgba(111,82,51,0.15)]">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-[#c9b39a]/60 bg-[#f8efe2] p-4">
                  <p className="font-source text-xs uppercase tracking-[0.16em] text-[#8d755e]">Issue Note</p>
                  <p className="mt-2 font-fraunces text-2xl leading-tight text-[#352a21]">Every model. One desk.</p>
                </div>
                <div className="rounded-2xl border border-[#c9b39a]/60 bg-[#ece0d0] p-4">
                  <p className="font-source text-xs uppercase tracking-[0.16em] text-[#8d755e]">Price Frame</p>
                  <p className="mt-2 font-fraunces text-2xl leading-tight text-[#352a21]">$79 monthly flat fee</p>
                </div>
                <div className="rounded-2xl border border-[#c9b39a]/60 bg-[#f8efe2] p-4 sm:col-span-2">
                  <p className="font-source text-xs uppercase tracking-[0.16em] text-[#8d755e]">Production Pace</p>
                  <p className="mt-2 font-source text-sm leading-relaxed text-[#4d3d2f]">
                    Creative teams report 3x more approved image directions per sprint after moving model testing, editing, and exports into a single environment.
                  </p>
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute -bottom-5 left-12 h-20 w-20 rounded-full border border-[#ba9a7a]/65" />
          </div>
        </div>
      </section>

      <section className="border-y border-[#c8b197]/45 bg-[#f3e8d9] py-7">
        <div className="section-wrap overflow-hidden whitespace-nowrap">
          <div className="animate-marquee inline-flex min-w-max gap-10 pr-10 font-source text-xs uppercase tracking-[0.23em] text-[#7d654c]">
            <span>Model orchestration</span>
            <span>Art direction aware edits</span>
            <span>Flat-fee collaboration</span>
            <span>Client-ready exports</span>
            <span>Creative operations simplified</span>
            <span>Model orchestration</span>
            <span>Art direction aware edits</span>
            <span>Flat-fee collaboration</span>
          </div>
        </div>
      </section>

      <section className="section-wrap py-16">
        <div className="grid gap-7 lg:grid-cols-[1fr_1fr]">
          <article className="rounded-[2rem] border border-[#bea184]/55 bg-[#fcf6ed] p-7">
            <h2 className="font-fraunces text-4xl text-[#31271f]">Model folio</h2>
            <p className="mt-3 max-w-lg font-source text-sm text-[#4f4032]">The studio keeps each engine visible with its own strengths, not hidden behind generic presets.</p>
            <div className="mt-6 space-y-4">
              {modelNotes.map((item) => (
                <div key={item.name} className="rounded-2xl border border-[#c9b39a]/70 bg-[#f7edde] p-4">
                  <p className="font-source text-xs uppercase tracking-[0.18em] text-[#7f684f]">{item.name}</p>
                  <p className="mt-2 font-source text-sm text-[#4f4032]">{item.edge}</p>
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-[2rem] border border-[#bea184]/55 bg-[#efe2d1] p-7">
            <h2 className="font-fraunces text-4xl text-[#31271f]">Studio ritual</h2>
            <ol className="mt-6 space-y-4">
              {rituals.map((item, index) => (
                <li key={item} className="flex gap-4">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[#8d755e] font-source text-[11px] text-[#594533]">
                    {index + 1}
                  </span>
                  <p className="font-source text-sm leading-relaxed text-[#4b3b2d]">{item}</p>
                </li>
              ))}
            </ol>
            <div className="mt-8 rounded-2xl border border-[#c9b39a]/70 bg-[#f9f0e4] p-5">
              <p className="font-source text-xs uppercase tracking-[0.16em] text-[#7d664d]">Close-out</p>
              <p className="mt-2 font-fraunces text-2xl text-[#31271f]">One membership. Full creative control.</p>
            </div>
          </article>
        </div>
      </section>

      <section className="section-wrap pb-20">
        <div className="rounded-[2.4rem] border border-[#b79d81]/55 bg-[#2f261e] px-6 py-10 text-[#f9efe1] sm:px-10">
          <p className="font-source text-xs uppercase tracking-[0.24em] text-[#d9bea1]">Membership</p>
          <div className="mt-5 grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <h2 className="font-fraunces text-4xl leading-tight sm:text-5xl">Move from model hopping to creative publishing velocity.</h2>
              <p className="mt-3 max-w-2xl font-source text-sm text-[#e2d3c2]">
                T4 Canvas makes your team faster by keeping generation, editing, and export in one elegant workspace.
              </p>
            </div>
            <button className="rounded-full bg-[#f8ebdc] px-7 py-3 font-source text-xs uppercase tracking-[0.17em] text-[#2f261e] transition hover:bg-[#f4ddc2]">
              Claim membership
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}
