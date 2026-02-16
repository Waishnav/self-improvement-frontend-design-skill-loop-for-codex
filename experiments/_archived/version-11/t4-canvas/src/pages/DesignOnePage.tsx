import { Link } from 'react-router-dom'

const modelCards = [
  { name: 'Nano Banana Pro', trait: 'Concept sculpting at high velocity' },
  { name: 'Flux 2', trait: 'Cinematic lighting and detail composition' },
  { name: 'gpt-image-1.5', trait: 'Prompt steering with structural control' },
  { name: 'Seedream', trait: 'Style transfer and editorial finishing' },
]

const controlRail = [
  'Simultaneous prompt fan-out to every engine',
  'Unified history timeline for before-after comparisons',
  'Layer-aware edits without leaving the generation flow',
]

export function DesignOnePage() {
  return (
    <div className="relative overflow-hidden bg-[#070b18] text-[#eff2ff]" style={{ fontFamily: 'Manrope, sans-serif' }}>
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 top-8 h-96 w-[34rem] rotate-[-20deg] rounded-[3rem] bg-gradient-to-r from-[#4ee4ff]/40 to-transparent blur-3xl" />
        <div className="absolute -right-20 top-20 h-96 w-[36rem] rotate-[18deg] rounded-[4rem] bg-gradient-to-l from-[#ff55bf]/35 to-transparent blur-3xl" />
        <div className="absolute bottom-0 left-1/2 h-80 w-2/3 -translate-x-1/2 bg-gradient-to-t from-[#4451ff]/30 to-transparent blur-3xl" />
      </div>

      <header className="relative mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 pt-8 sm:px-10 lg:px-0">
        <Link to="/" className="rounded-full border border-white/20 px-4 py-2 text-xs uppercase tracking-[0.24em] text-white/80">
          T4 Canvas
        </Link>
        <nav className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.18em] text-white/70">
          <Link to="/2" className="rounded-full border border-white/15 px-3 py-2 hover:border-white/35">
            Editorial Reactor
          </Link>
          <Link to="/3" className="rounded-full border border-white/15 px-3 py-2 hover:border-white/35">
            Command Deck
          </Link>
        </nav>
      </header>

      <main className="relative mx-auto max-w-6xl px-6 pb-24 pt-12 sm:px-10 lg:px-0">
        <section className="grid items-end gap-10 lg:grid-cols-[1.06fr_0.94fr]">
          <div>
            <p className="mb-6 inline-flex rounded-full border border-white/20 px-4 py-2 text-xs uppercase tracking-[0.25em] text-white/75">
              Prismatic Overdrive
            </p>
            <h1
              className="text-5xl leading-[0.86] sm:text-6xl lg:text-7xl"
              style={{ fontFamily: 'Bricolage Grotesque, sans-serif' }}
            >
              Build impossible image ideas,
              <span className="mt-2 block bg-gradient-to-r from-[#66ecff] via-[#9e9bff] to-[#ff79c5] bg-clip-text text-transparent">
                then ship them from one command center.
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-white/72">
              T4 Canvas combines Nano Banana Pro, Flux 2, gpt-image-1.5, and Seedream under one monthly plan for teams
              that iterate fast and care about craft.
            </p>
            <div className="mt-9 flex flex-wrap gap-3 text-sm text-white/80">
              <span className="rounded-full border border-cyan-200/35 bg-cyan-300/10 px-4 py-2">Unlimited concept rounds</span>
              <span className="rounded-full border border-fuchsia-200/30 bg-fuchsia-300/10 px-4 py-2">Instant model swap</span>
              <span className="rounded-full border border-indigo-200/35 bg-indigo-300/10 px-4 py-2">Shared asset library</span>
            </div>
          </div>

          <div className="relative min-h-[420px]">
            <div className="absolute right-4 top-4 w-[76%] -rotate-6 rounded-[2rem] border border-cyan-100/20 bg-[#0f1d42]/80 p-6 shadow-[0_30px_80px_rgba(8,9,25,0.5)] backdrop-blur">
              <p className="text-[11px] uppercase tracking-[0.2em] text-cyan-100/80">Rapid Scene Build</p>
              <p className="mt-3 text-2xl leading-tight">"Volcanic desert + reflective chrome dragon + editorial lighting"</p>
            </div>
            <div className="absolute left-0 top-28 w-[74%] rotate-[6deg] rounded-[2rem] border border-white/20 bg-gradient-to-br from-[#1b1f58]/80 to-[#4f2869]/70 p-6 shadow-[0_30px_100px_rgba(12,6,28,0.58)] backdrop-blur">
              <p className="text-[11px] uppercase tracking-[0.2em] text-white/75">Cross-Model Compare</p>
              <div className="mt-4 space-y-3">
                {modelCards.slice(0, 3).map((model) => (
                  <div key={model.name} className="rounded-xl border border-white/15 bg-black/20 p-3">
                    <p className="text-sm font-semibold">{model.name}</p>
                    <p className="text-xs text-white/70">{model.trait}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute bottom-0 right-0 w-[68%] rounded-[1.8rem] border border-white/15 bg-[#10162f]/85 p-5 backdrop-blur">
              <p className="text-[11px] uppercase tracking-[0.2em] text-white/65">Output Feed</p>
              <p className="mt-3 text-3xl" style={{ fontFamily: 'IBM Plex Mono, monospace' }}>
                124 renders this hour
              </p>
            </div>
          </div>
        </section>
      </main>

      <section className="relative -mt-10 px-6 pb-16 sm:px-10 lg:px-0">
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2.2rem] border border-white/20 bg-white/6 p-8 backdrop-blur">
          <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-[#6deeff] via-[#9ea7ff] to-[#ff71c9]" />
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <h2 className="text-3xl text-white" style={{ fontFamily: 'Bricolage Grotesque, sans-serif' }}>
                One operator stack for every visual experiment
              </h2>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {modelCards.map((model) => (
                  <article key={model.name} className="rounded-2xl border border-white/15 bg-[#0e1328]/70 p-4">
                    <p className="text-sm uppercase tracking-[0.16em] text-white/60">Model</p>
                    <h3 className="mt-2 text-xl">{model.name}</h3>
                    <p className="mt-2 text-sm text-white/70">{model.trait}</p>
                  </article>
                ))}
              </div>
            </div>
            <ul className="space-y-4 rounded-2xl border border-white/15 bg-[#090e1d]/80 p-6">
              {controlRail.map((item) => (
                <li key={item} className="rounded-xl border border-white/10 px-4 py-4 text-sm leading-relaxed text-white/75">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="w-full border-y border-white/15 bg-gradient-to-r from-[#061a2f] via-[#112851] to-[#2a1245] px-6 py-16 sm:px-10 lg:px-0">
        <div className="mx-auto grid max-w-[90rem] gap-8 lg:grid-cols-3">
          {[
            { k: '12s', v: 'Average idea-to-first-render time' },
            { k: '4x', v: 'More outputs per brief compared to single-model workflows' },
            { k: '$39', v: 'Flat monthly plan for all model access' },
          ].map((stat) => (
            <article key={stat.v} className="rounded-3xl border border-white/20 bg-black/20 p-7">
              <p className="text-5xl text-cyan-100" style={{ fontFamily: 'Bricolage Grotesque, sans-serif' }}>
                {stat.k}
              </p>
              <p className="mt-3 text-sm uppercase tracking-[0.15em] text-white/70">{stat.v}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-24 pt-14 text-center sm:px-10 lg:px-0">
        <p className="text-xs uppercase tracking-[0.22em] text-white/55">Ready to scale visual output without tool sprawl?</p>
        <h2 className="mt-4 text-4xl leading-tight sm:text-5xl" style={{ fontFamily: 'Bricolage Grotesque, sans-serif' }}>
          Keep your creative team in one studio.
        </h2>
        <Link
          to="/"
          className="mt-8 inline-flex rounded-full border border-white/25 bg-white/10 px-6 py-3 text-sm uppercase tracking-[0.2em] transition hover:bg-white/20"
        >
          Back to design index
        </Link>
      </section>
    </div>
  )
}
