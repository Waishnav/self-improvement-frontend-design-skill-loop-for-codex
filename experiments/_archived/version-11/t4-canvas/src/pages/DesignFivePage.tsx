import { Link } from 'react-router-dom'

const stackCards = [
  {
    heading: 'Engine Stack',
    copy: 'Nano Banana Pro, Flux 2, gpt-image-1.5, and Seedream in one operator console.',
  },
  {
    heading: 'Control Stack',
    copy: 'Prompt branching, style locking, and asset lineage all in one continuous flow.',
  },
  {
    heading: 'Revenue Stack',
    copy: 'A flat monthly fee removes the tax on experimentation.',
  },
]

export function DesignFivePage() {
  return (
    <div className="min-h-screen bg-[#f6ead5] text-[#18110a]" style={{ fontFamily: 'Sora, sans-serif' }}>
      <header className="border-b-[3px] border-black px-6 py-6 sm:px-10">
        <div className="mx-auto flex max-w-[96rem] flex-wrap items-center justify-between gap-3">
          <Link to="/" className="border-[3px] border-black bg-[#ffeb60] px-4 py-2 text-xs uppercase tracking-[0.3em]">
            T4 Canvas
          </Link>
          <p className="text-xs uppercase tracking-[0.28em]">Poster Monolith</p>
        </div>
      </header>

      <main className="mx-auto max-w-[96rem] px-6 pb-20 pt-8 sm:px-10">
        <section className="relative mb-14 overflow-hidden border-[4px] border-black bg-[#fff9eb] p-6 sm:p-10">
          <div className="absolute -right-14 -top-12 h-44 w-44 rotate-[12deg] border-[4px] border-black bg-[#ff6a3d]" />
          <div className="absolute -left-20 bottom-10 h-36 w-56 -rotate-[18deg] border-[4px] border-black bg-[#4ed7d1]" />
          <p className="relative z-10 inline-block border-2 border-black bg-white px-3 py-1 text-[11px] uppercase tracking-[0.26em]">
            Studio Campaign System
          </p>
          <h1 className="relative z-10 mt-6 max-w-4xl text-6xl leading-[0.86] sm:text-7xl" style={{ fontFamily: 'Anton, sans-serif' }}>
            ONE MONTHLY PLAN.
            <span className="block text-[#e43b2f]">FOUR IMAGE ENGINES.</span>
            <span className="block">ZERO CREATIVE BRAKES.</span>
          </h1>
          <p className="relative z-10 mt-6 max-w-2xl text-lg leading-relaxed">
            T4 Canvas is built for power users who want to generate, compare, and refine high-volume image concepts in a
            single interface.
          </p>
        </section>

        <section className="mb-14 grid gap-6 md:grid-cols-3">
          {stackCards.map((card, idx) => (
            <article
              key={card.heading}
              className="relative border-[3px] border-black bg-white p-6 shadow-[8px_8px_0_#000]"
              style={{ transform: `translateY(${idx % 2 === 0 ? '0px' : '10px'})` }}
            >
              <p className="text-xs uppercase tracking-[0.24em]">{card.heading}</p>
              <p className="mt-4 text-2xl leading-tight" style={{ fontFamily: 'Anton, sans-serif' }}>
                {card.copy}
              </p>
            </article>
          ))}
        </section>
      </main>

      <section className="mb-14 w-full border-y-[4px] border-black bg-[#ff5b43] px-6 py-16 text-[#fff7e8] sm:px-10">
        <div className="mx-auto grid max-w-[98rem] gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <h2 className="text-5xl leading-[0.9] sm:text-7xl" style={{ fontFamily: 'Anton, sans-serif' }}>
            FULL-BLEED CREATIVE PRESSURE.
            <span className="block text-[#ffe165]">FAST TEAM DECISIONS.</span>
          </h2>
          <div className="space-y-3 text-base uppercase tracking-[0.16em] text-[#fff5dd]">
            <p className="border-2 border-[#fff5dd] px-4 py-3">Realtime cross-model preview rails</p>
            <p className="border-2 border-[#fff5dd] px-4 py-3">Branch history that never breaks context</p>
            <p className="border-2 border-[#fff5dd] px-4 py-3">Flat fee keeps every sprint unconstrained</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[88rem] px-6 pb-24 sm:px-10">
        <div className="rounded-[2.2rem] border-[4px] border-black bg-[#fff9eb] p-8 sm:p-10">
          <p className="text-xs uppercase tracking-[0.28em]">Closeout Frame</p>
          <h3 className="mt-4 text-5xl leading-[0.9] sm:text-6xl" style={{ fontFamily: 'Anton, sans-serif' }}>
            T4 Canvas is your image generation command poster, brought to life.
          </h3>
          <Link
            to="/"
            className="mt-8 inline-flex border-[3px] border-black bg-[#ffe165] px-6 py-3 text-xs uppercase tracking-[0.24em] transition hover:bg-[#ffd038]"
          >
            Return to concept index
          </Link>
        </div>
      </section>
    </div>
  )
}
