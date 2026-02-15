const statements = [
  {
    title: 'One fee. Four generation engines.',
    detail:
      'Nano Banana Pro, Flux 2, gpt-image-1.5, and Seedream run as one creative stack inside T4 Canvas.',
  },
  {
    title: 'Poster-grade outputs in minutes.',
    detail:
      'Build campaign visuals, artboards, and social cuts from a single workspace without brittle tool hops.',
  },
  {
    title: 'Editing is built into generation.',
    detail:
      'Mask, relight, revise, and export polished assets without breaking prompt continuity.',
  },
]

const ribbons = [
  'Style lock presets',
  'Model handoff memory',
  'Instant upscale routes',
  'Batch campaign exports',
]

export function DesignFive() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f7eddc] text-[#1a120a] [font-family:'Archivo',sans-serif]">
      <section className="relative overflow-hidden border-b border-[#1a120a]/20 px-6 pb-14 pt-28">
        <div className="absolute inset-x-0 top-20 -rotate-2 bg-[#d83f21] py-3 text-center text-sm font-semibold uppercase tracking-[0.25em] text-[#fff2de]">
          Flat monthly access for image power users
        </div>

        <div className="mx-auto mt-20 max-w-7xl">
          <p className="text-xs uppercase tracking-[0.25em] text-[#8f3a28]">T4 Canvas / Poster Stack Edition</p>
          <h1 className="mt-5 max-w-4xl text-[3.4rem] leading-[0.84] tracking-[0.01em] text-[#131313] [font-family:'Bebas Neue',cursive] sm:text-[4.8rem] lg:text-[7.5rem]">
            Generate. Remix. Publish.
            <br />
            One canvas.
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-[#4e2f22]">
            T4 Canvas turns four top image models into one aggressive creative machine with a single membership price.
          </p>
        </div>

        <div className="poster-marquee mt-12 flex min-w-max gap-4 border-y border-[#1a120a]/20 py-4 text-3xl uppercase tracking-[0.18em] text-[#2f2018] [font-family:'Bebas Neue',cursive]">
          {['Nano Banana Pro', 'Flux 2', 'gpt-image-1.5', 'Seedream', 'Nano Banana Pro', 'Flux 2', 'gpt-image-1.5', 'Seedream'].map(
            (model, index) => (
              <span key={`${model}-${index}`} className="rounded-full border border-[#1a120a]/20 px-5 py-1">
                {model}
              </span>
            ),
          )}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-7 px-6 py-16 lg:grid-cols-12">
        {statements.map((statement, index) => (
          <article
            key={statement.title}
            className={`relative rounded-[1.8rem] border border-[#1a120a]/20 p-6 shadow-[0_18px_45px_rgba(27,18,10,0.11)] transition duration-220 hover:-translate-y-1 ${
              index === 1
                ? 'bg-[#16120f] text-[#fff1da] lg:col-span-5 lg:-translate-y-4'
                : 'bg-[#fef9f0] lg:col-span-3'
            } ${index === 2 ? 'lg:col-span-4' : ''}`}
          >
            <p className="text-xs uppercase tracking-[0.2em] text-[#8f3a28]">Statement {index + 1}</p>
            <h2 className="mt-3 text-4xl leading-[0.9] [font-family:'Bebas Neue',cursive] sm:text-5xl">{statement.title}</h2>
            <p className="mt-4 text-sm leading-relaxed opacity-85">{statement.detail}</p>
            <div className="absolute -right-3 top-4 h-10 w-10 border border-current/25" />
          </article>
        ))}
      </section>

      <section className="relative border-y border-[#1a120a]/20 bg-[#131110] px-6 py-16 text-[#f9ead3]">
        <div className="absolute right-[-8%] top-[-12%] h-72 w-72 rotate-12 border border-[#f9ead3]/20" />
        <div className="mx-auto max-w-7xl">
          <h2 className="text-5xl leading-none [font-family:'Bebas Neue',cursive] sm:text-7xl">Feature Ribbons</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {ribbons.map((ribbon, index) => (
              <article
                key={ribbon}
                className={`rounded-xl border px-5 py-4 text-xl uppercase tracking-[0.14em] [font-family:'Bebas Neue',cursive] ${
                  index % 2 === 0
                    ? 'border-[#f9ead3]/28 bg-[#211b18]'
                    : 'border-[#f9ead3]/28 bg-[#3b1f14]'
                }`}
              >
                {ribbon}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative px-6 py-16">
        <div className="mx-auto grid max-w-7xl gap-7 lg:grid-cols-12">
          <article className="rounded-[1.8rem] border border-[#1a120a]/20 bg-[#fff8ec] p-7 lg:col-span-7">
            <p className="text-xs uppercase tracking-[0.2em] text-[#8f3a28]">Offer slab</p>
            <h2 className="mt-3 text-6xl leading-[0.86] [font-family:'Bebas Neue',cursive] sm:text-7xl">
              All models.
              <br />
              One subscription.
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-[#4b2f22]">
              Avoid per-image billing and channel every campaign through one high-power studio stack.
            </p>
          </article>

          <article className="rounded-[1.8rem] border border-[#1a120a]/20 bg-[#d83f21] p-7 text-[#fff5e5] lg:col-span-5">
            <p className="text-xs uppercase tracking-[0.2em]">Power User Plan</p>
            <p className="mt-3 text-8xl leading-none [font-family:'Bebas Neue',cursive]">$39</p>
            <p className="mt-2 text-sm uppercase tracking-[0.14em]">Per month, unlimited generation flow</p>
            <button className="mt-7 rounded-full border border-[#fff2df]/60 bg-[#fff2df] px-6 py-3 text-sm font-semibold uppercase tracking-[0.17em] text-[#7f2d1c] transition duration-220 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white">
              Activate T4 Canvas
            </button>
          </article>
        </div>
      </section>

      <footer className="border-t border-[#1a120a]/20 bg-[#181311] px-6 py-6 text-[#fce9d0]">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 text-xs uppercase tracking-[0.18em]">
          <p>T4 Canvas</p>
          <p>Creative Operating System for AI Image Teams</p>
          <p>Launch Edition</p>
        </div>
      </footer>
    </main>
  )
}
