import { Link } from 'react-router-dom'

const lanes = [
  {
    title: 'Nano Banana Pro',
    detail: 'Fast draft lane for exploring shape language and lighting direction.',
  },
  {
    title: 'Flux 2',
    detail: 'Photographic realism tuned for product, fashion, and environment scenes.',
  },
  {
    title: 'gpt-image-1.5',
    detail: 'Instruction-following edits for precise composition and iterative refinements.',
  },
  {
    title: 'Seedream',
    detail: 'Expressive stylization pass for campaign variance and art-forward options.',
  },
]

export function ConceptTwo() {
  return (
    <main className="editorial-paper relative min-h-screen overflow-x-hidden bg-[#f5eee3] px-6 py-8 text-[#1f1510] sm:px-10 lg:px-16">
      <div className="absolute left-0 top-0 h-56 w-full bg-gradient-to-b from-[#f7d4b2]/50 to-transparent" />
      <div className="mx-auto max-w-7xl">
        <header className="mb-16 flex flex-wrap items-center justify-between gap-4 border-b border-[#8f7356]/30 pb-6">
          <div>
            <p className="text-xs uppercase tracking-[0.26em] text-[#7f5f42]">T4 Canvas</p>
            <p className="font-['Instrument_Serif'] text-2xl leading-none text-[#2b1c14]">Editorial Atelier</p>
          </div>
          <nav className="hidden items-center gap-8 text-xs uppercase tracking-[0.22em] text-[#6e5239] md:flex">
            <a href="#manifesto" className="transition hover:text-[#2b1c14]">
              Manifesto
            </a>
            <a href="#toolkit" className="transition hover:text-[#2b1c14]">
              Toolkit
            </a>
            <a href="#stories" className="transition hover:text-[#2b1c14]">
              Stories
            </a>
          </nav>
          <Link
            to="/"
            className="rounded-full border border-[#886b4f]/50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#5c442f] transition hover:bg-[#e6d5c2]"
          >
            Concept Gallery
          </Link>
        </header>

        <section className="mb-20 grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="mb-5 inline-flex rounded-full border border-[#8f7356]/45 bg-[#f1dfcb]/75 px-4 py-2 text-xs uppercase tracking-[0.22em] text-[#694b31]">
              One fee for every creative lane
            </p>
            <h1 className="mb-6 max-w-3xl font-['Instrument_Serif'] text-5xl leading-[0.94] text-[#25170f] sm:text-6xl xl:text-7xl">
              The image engine for teams that care about taste.
            </h1>
            <p className="mb-8 max-w-xl text-base leading-relaxed text-[#3f2a1e] sm:text-lg">
              T4 Canvas unifies Nano Banana Pro, Flux 2, gpt-image-1.5, and Seedream into one polished workflow for generation,
              refinement, and campaign-ready delivery.
            </p>
            <div className="flex flex-wrap gap-3">
              <button className="rounded-full bg-[#2c1a11] px-7 py-3 text-sm font-semibold uppercase tracking-[0.15em] text-[#f8eee0] transition hover:bg-[#1f130c]">
                Start Studio Plan
              </button>
              <button className="rounded-full border border-[#8e7357]/60 px-7 py-3 text-sm font-semibold uppercase tracking-[0.15em] text-[#4b3425] transition hover:bg-[#e8d9c7]">
                View Walkthrough
              </button>
            </div>
          </div>

          <div className="relative h-full min-h-[25rem]">
            <article className="absolute left-0 top-0 w-[72%] rounded-[1.6rem] border border-[#8f7356]/45 bg-[#ead8c3] p-6 shadow-[0_22px_45px_-30px_rgba(50,25,10,0.6)]">
              <p className="mb-2 text-xs uppercase tracking-[0.2em] text-[#6d4f35]">Campaign board</p>
              <h2 className="mb-3 font-['Instrument_Serif'] text-3xl leading-none text-[#27180f]">Autumn Product Story</h2>
              <p className="text-sm leading-relaxed text-[#4c3526]">
                Build ten visual directions in one afternoon, then lock the final cut with frame-level edits.
              </p>
            </article>
            <article className="absolute bottom-6 right-0 w-[72%] rounded-[1.6rem] border border-[#8f7356]/45 bg-[#fff7ed] p-6 shadow-[0_22px_45px_-30px_rgba(50,25,10,0.6)]">
              <p className="mb-3 text-xs uppercase tracking-[0.2em] text-[#77593f]">Live snapshot</p>
              <div className="grid grid-cols-2 gap-3">
                {['Nano Banana Pro', 'Flux 2', 'gpt-image-1.5', 'Seedream'].map((item) => (
                  <div className="rounded-xl border border-[#a88b6c]/35 bg-[#f4e6d5] p-3 text-xs uppercase tracking-[0.12em] text-[#5b412d]" key={item}>
                    {item}
                  </div>
                ))}
              </div>
            </article>
          </div>
        </section>

        <section id="manifesto" className="mb-20 grid gap-6 md:grid-cols-2">
          <article className="rounded-[1.8rem] border border-[#8f7356]/35 bg-[#efe2d3] p-7">
            <p className="mb-2 text-xs uppercase tracking-[0.23em] text-[#6d4f35]">Positioning</p>
            <h2 className="mb-4 font-['Instrument_Serif'] text-4xl leading-none text-[#22140d]">No credits. No complexity tax.</h2>
            <p className="text-sm leading-relaxed text-[#463022] sm:text-base">
              Keep financial planning simple: one subscription, every model available, full editing controls included. The creative floor
              rises when experimentation is no longer penalized.
            </p>
          </article>
          <article id="toolkit" className="rounded-[1.8rem] border border-[#8f7356]/35 bg-[#fff7ed] p-7">
            <p className="mb-2 text-xs uppercase tracking-[0.23em] text-[#6d4f35]">Toolkit</p>
            <h2 className="mb-4 font-['Instrument_Serif'] text-4xl leading-none text-[#22140d]">A model desk, not a model maze.</h2>
            <p className="text-sm leading-relaxed text-[#463022] sm:text-base">
              Every output, seed, and prompt revision stays in one project memory. Move between models without context loss.
            </p>
          </article>
        </section>

        <section className="mb-20">
          <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
            <h2 className="font-['Instrument_Serif'] text-4xl leading-none text-[#25170f] sm:text-5xl">The four-model desk</h2>
            <p className="max-w-xl text-sm leading-relaxed text-[#493224] sm:text-base">
              Assign each model where it performs best, then sequence outputs into a unified editorial timeline.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {lanes.map((lane) => (
              <article className="rounded-[1.4rem] border border-[#8f7356]/35 bg-[#fdf5eb] p-6" key={lane.title}>
                <p className="mb-3 text-xs uppercase tracking-[0.2em] text-[#72533a]">Model lane</p>
                <h3 className="mb-2 font-['Instrument_Serif'] text-3xl leading-none text-[#291a11]">{lane.title}</h3>
                <p className="text-sm leading-relaxed text-[#4c3526]">{lane.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="stories" className="mb-20 grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
          <article className="rounded-[1.8rem] border border-[#8f7356]/35 bg-[#26170f] p-8 text-[#f8eee0]">
            <p className="mb-2 text-xs uppercase tracking-[0.23em] text-[#d7b491]">Studio quote</p>
            <blockquote className="mb-5 font-['Instrument_Serif'] text-4xl leading-[1.02] sm:text-5xl">
              “We replaced three disconnected subscriptions with T4 Canvas and doubled our weekly campaign output.”
            </blockquote>
            <p className="text-sm uppercase tracking-[0.16em] text-[#efd6be]">Art Director, Meridian Objects</p>
          </article>
          <div className="grid gap-4">
            <article className="rounded-[1.5rem] border border-[#8f7356]/35 bg-[#efe1d2] p-6">
              <p className="mb-1 text-xs uppercase tracking-[0.2em] text-[#715239]">Weekly cadence</p>
              <p className="font-['Instrument_Serif'] text-4xl leading-none text-[#291a11]">42 campaigns</p>
              <p className="mt-2 text-sm text-[#4c3526]">Generated, curated, and retouched with one team and one workspace.</p>
            </article>
            <article className="rounded-[1.5rem] border border-[#8f7356]/35 bg-[#fff7ed] p-6">
              <p className="mb-1 text-xs uppercase tracking-[0.2em] text-[#715239]">Consistency score</p>
              <p className="font-['Instrument_Serif'] text-4xl leading-none text-[#291a11]">96/100</p>
              <p className="mt-2 text-sm text-[#4c3526]">Brand-safe output quality across all model lanes and revisions.</p>
            </article>
          </div>
        </section>

        <section className="rounded-[2rem] border border-[#8f7356]/35 bg-[#f3e3cf] p-8 sm:p-10">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="mb-2 text-xs uppercase tracking-[0.24em] text-[#72533a]">Membership</p>
              <h2 className="font-['Instrument_Serif'] text-4xl leading-none text-[#25170f] sm:text-5xl">One fee. Infinite visual iterations.</h2>
            </div>
            <button className="rounded-full bg-[#2a180f] px-7 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-[#f8eee0] transition hover:bg-[#1f130d]">
              Join T4 Canvas
            </button>
          </div>
        </section>
      </div>
    </main>
  )
}
