import { Link } from 'react-router-dom'

const highlights = [
  {
    model: 'Nano Banana Pro',
    title: 'Concept Sprint Editor',
    text: 'Turns rough references into coherent direction boards with smart style carry-over.',
  },
  {
    model: 'Flux 2',
    title: 'Photoreal Campaign Craft',
    text: 'Builds glossy, cinematic product scenes with nuanced light and texture control.',
  },
  {
    model: 'gpt-image-1.5',
    title: 'Text-True Image Logic',
    text: 'Reliable prompt interpretation for scenes where message precision matters.',
  },
  {
    model: 'Seedream',
    title: 'Visual Flavor Engine',
    text: 'Injects memorable style variation when campaigns need strong aesthetic identity.',
  },
]

const manifesto = [
  'One payment instead of four overlapping subscriptions.',
  'A shared workspace where art direction and production live together.',
  'Fast comparative output so teams choose the right model per task.',
]

export default function DesignTwo() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f7f0e3] text-[#231a16]">
      <section className="relative mx-auto max-w-7xl px-6 pb-12 pt-8 md:pt-12">
        <div className="absolute left-2 top-20 hidden h-48 w-48 rotate-[-18deg] rounded-full border border-[#7f5d4f]/40 md:block" />
        <div className="absolute right-8 top-10 hidden h-44 w-44 rounded-full bg-[#e6c6ab]/40 blur-2xl md:block" />

        <header className="relative flex items-center justify-between rounded-full border border-[#7f5d4f]/40 bg-[#fff7ec]/80 px-5 py-3 backdrop-blur">
          <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-[#6a4a3e]">T4 Canvas Studio</p>
          <Link
            to="/"
            className="rounded-full border border-[#7f5d4f]/45 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#51372f] transition hover:bg-[#51372f] hover:text-[#fff7ec]"
          >
            Concept Deck
          </Link>
        </header>

        <div className="relative mt-10 grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.35em] text-[#8f5f49]">Issue 01: The Unified Image Desk</p>
            <h1 className="mt-5 max-w-2xl font-editorial-display text-6xl leading-[0.9] text-[#1b110d] md:text-8xl">
              Marketing Images,
              <br />
              Curated Like
              <br />
              A Magazine.
            </h1>
            <p className="mt-6 max-w-xl font-editorial-body text-lg text-[#3d2a22]">
              T4 Canvas blends top image models into one refined studio workflow so teams can move from concept
              to campaign visuals without tool switching fatigue.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <button className="rounded-full bg-[#2b1a14] px-6 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-[#f8efe5] transition hover:bg-[#130b08]">
                Start Membership
              </button>
              <button className="rounded-full border border-[#5f4235]/45 px-6 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-[#402b23] transition hover:bg-[#e8d2bc]/70">
                Browse Case Study
              </button>
            </div>
          </div>

          <div className="grid gap-4 rounded-[2rem] border border-[#8a6150]/35 bg-[#fff8ee]/80 p-5 shadow-[0_20px_70px_rgba(70,30,12,0.12)]">
            <div className="rounded-2xl border border-[#8a6150]/35 bg-[#2b1a14] p-5 text-[#f9ede1]">
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#f2c6a8]">Editorial Note</p>
              <p className="mt-3 font-editorial-body text-lg leading-relaxed">
                "The right model depends on the frame. T4 Canvas makes that choice tactical, not expensive."
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-[#8a6150]/35 bg-[#f2e2cf] p-4">
                <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#704d3f]">Cycle Time</p>
                <p className="mt-2 font-editorial-display text-5xl leading-none">-63%</p>
              </div>
              <div className="rounded-2xl border border-[#8a6150]/35 bg-[#fbeee0] p-4">
                <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#704d3f]">Monthly Spend</p>
                <p className="mt-2 font-editorial-display text-5xl leading-none">$39</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <h2 className="font-editorial-display text-5xl leading-none text-[#20120e] md:text-6xl">The Model Salon</h2>
          <p className="max-w-md font-editorial-body text-[#4f372e]">
            Each engine has a role. T4 Canvas keeps them together so every creative decision stays inside one studio.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {highlights.map((item) => (
            <article key={item.model} className="rounded-3xl border border-[#815a4b]/30 bg-[#fff9ef] p-5 shadow-[0_18px_45px_rgba(70,30,12,0.12)]">
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#7d5548]">{item.model}</p>
              <h3 className="mt-3 font-editorial-display text-3xl leading-[0.95] text-[#27150f]">{item.title}</h3>
              <p className="mt-3 font-editorial-body text-sm text-[#4e362d]">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-6 py-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-[2rem] border border-[#8a6150]/35 bg-[#2a1a14] p-7 text-[#f7ecdf] md:p-9">
          <p className="font-mono text-[11px] uppercase tracking-[0.34em] text-[#eec8ab]">Studio Manifesto</p>
          <ul className="mt-6 space-y-4 font-editorial-body text-lg leading-relaxed">
            {manifesto.map((line) => (
              <li key={line} className="rounded-2xl border border-[#c99f81]/25 bg-[#3a241c] px-4 py-3">
                {line}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-[2rem] border border-[#8a6150]/30 bg-[#efe0cd] p-7 md:p-9">
          <p className="font-mono text-[11px] uppercase tracking-[0.34em] text-[#6b483b]">Member Story</p>
          <h3 className="mt-4 font-editorial-display text-4xl leading-[0.95] text-[#24140f]">"Our art team regained velocity in two weeks."</h3>
          <p className="mt-5 font-editorial-body text-[#4d352c]">
            Ad campaign variants that used to take days now happen before lunch. The team compares outputs across
            models and chooses the strongest direction with full edit continuity.
          </p>
          <p className="mt-6 font-mono text-xs uppercase tracking-[0.25em] text-[#6d4b3c]">Mia Santos, Creative Director, Arcwell</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 pt-10">
        <div className="rounded-[2rem] border border-[#7b5548]/35 bg-[#fff7ec] p-8 shadow-[0_24px_70px_rgba(70,30,12,0.14)] md:p-12">
          <p className="font-mono text-[11px] uppercase tracking-[0.34em] text-[#785242]">Subscription</p>
          <h2 className="mt-3 font-editorial-display text-6xl leading-[0.9] text-[#241510] md:text-8xl">One studio plan. Every model inside.</h2>
          <p className="mt-5 max-w-2xl font-editorial-body text-lg text-[#4e352c]">
            T4 Canvas gives your team premium image generation and editing without fragmented billing or fractured UX.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <button className="rounded-full bg-[#241510] px-6 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-[#fff6ed] transition hover:bg-[#110b08]">
              Get Access
            </button>
            <button className="rounded-full border border-[#7b5548]/45 px-6 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-[#402b24] transition hover:bg-[#f1dfcc]">
              Compare Plans
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}
