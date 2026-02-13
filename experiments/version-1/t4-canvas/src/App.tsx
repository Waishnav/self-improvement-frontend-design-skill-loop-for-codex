import { Link, Navigate, Route, Routes, useLocation } from 'react-router-dom'

const concepts = [
  { path: '/1', label: '01 Pulse Grid' },
  { path: '/2', label: '02 Control Deck' },
  { path: '/3', label: '03 Poster Rush' },
  { path: '/4', label: '04 Gallery Noir' },
  { path: '/5', label: '05 Story Flux' },
]

const models = ['Nano Banana Pro', 'Flux 2', 'gpt-image-1.5', 'Seedream']

function ConceptSwitcher() {
  const { pathname } = useLocation()

  return (
    <nav className="fixed right-4 top-4 z-50 flex flex-wrap items-center gap-2 rounded-full border border-white/20 bg-black/40 p-2 backdrop-blur-md">
      {concepts.map((concept) => {
        const active = pathname === concept.path

        return (
          <Link
            className={`rounded-full px-3 py-1.5 text-xs font-semibold tracking-[0.08em] transition duration-[220ms] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${
              active
                ? 'bg-white text-black'
                : 'bg-white/10 text-white hover:-translate-y-0.5 hover:bg-white/20'
            }`}
            key={concept.path}
            to={concept.path}
          >
            {concept.label}
          </Link>
        )
      })}
    </nav>
  )
}

function ModelChips({ dark = false }: { dark?: boolean }) {
  return (
    <div className="flex flex-wrap gap-2">
      {models.map((model) => (
        <span
          className={`rounded-full border px-3 py-1 text-xs font-semibold tracking-[0.08em] transition duration-[220ms] hover:-translate-y-0.5 ${
            dark
              ? 'border-emerald-300/30 bg-emerald-900/20 text-emerald-100'
              : 'border-white/25 bg-white/10 text-white'
          }`}
          key={model}
        >
          {model}
        </span>
      ))}
    </div>
  )
}

function DesignOne() {
  const cards = [
    {
      title: 'Multi-model prompts',
      body: 'Route one prompt to every model and compare four renders in one timeline.',
    },
    {
      title: 'Precision edits',
      body: 'Mask, outpaint, and iterate without context switching between tools.',
    },
    {
      title: 'Flat monthly fee',
      body: 'No credit roulette. One predictable subscription for nonstop production.',
    },
  ]

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#110f17] text-[#fff6eb]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_14%_18%,rgba(255,122,80,0.36),transparent_36%),radial-gradient(circle_at_84%_22%,rgba(77,199,255,0.28),transparent_30%),linear-gradient(160deg,#110f17_0%,#1f1632_52%,#140f1e_100%)]" />
      <div className="pointer-events-none absolute -right-28 top-24 h-72 w-72 rounded-full border border-orange-200/30 bg-orange-300/20 blur-2xl orbital" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-56 w-full noise-grid opacity-30" />

      <section className="relative mx-auto max-w-6xl px-6 pb-16 pt-28 md:px-10">
        <p className="hero-rise text-sm font-semibold uppercase tracking-[0.35em] text-orange-200">T4 Canvas</p>
        <h1 className="hero-rise hero-rise-delay mt-4 max-w-3xl font-display text-5xl font-extrabold leading-[0.95] md:text-7xl">
          Generate cinematic images at studio velocity.
        </h1>
        <p className="hero-rise hero-rise-delay-2 mt-6 max-w-2xl text-base text-orange-100/90 md:text-lg">
          Nano Banana Pro, Flux 2, gpt-image-1.5, and Seedream in one workflow for a single flat monthly plan.
        </p>

        <div className="mt-9 flex flex-wrap gap-4">
          <button className="rounded-full bg-white px-6 py-3 text-sm font-bold tracking-[0.1em] text-black transition duration-[220ms] hover:-translate-y-0.5 hover:scale-[1.02] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
            Start Creating
          </button>
          <button className="rounded-full border border-white/40 bg-white/5 px-6 py-3 text-sm font-bold tracking-[0.1em] transition duration-[220ms] hover:border-white hover:bg-white/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
            Watch 90s Demo
          </button>
        </div>

        <div className="mt-10">
          <ModelChips />
        </div>
      </section>

      <section className="relative mx-auto grid max-w-6xl gap-4 px-6 pb-20 md:grid-cols-3 md:px-10">
        {cards.map((card, index) => (
          <article
            className="card-tilt rounded-3xl border border-white/20 bg-white/[0.08] p-6 backdrop-blur-sm transition duration-[220ms] hover:border-orange-200/70 hover:bg-white/[0.14]"
            key={card.title}
            style={{ animationDelay: `${index * 140}ms` }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-orange-100/80">0{index + 1}</p>
            <h2 className="mt-2 text-2xl font-bold">{card.title}</h2>
            <p className="mt-3 text-sm text-orange-100/80">{card.body}</p>
          </article>
        ))}
      </section>
    </main>
  )
}

function DesignTwo() {
  const metrics = [
    ['Avg render', '5.8s'],
    ['Prompt variants', '12'],
    ['Teams online', '1,248'],
    ['Model sync', '99.9%'],
  ]

  return (
    <main className="min-h-screen bg-[#04110d] text-[#d8ffe7]">
      <div className="scanlines">
        <section className="mx-auto max-w-7xl px-5 pb-10 pt-28 lg:px-10">
          <div className="grid gap-6 lg:grid-cols-[260px_minmax(0,1fr)]">
            <aside className="rounded-3xl border border-emerald-200/20 bg-[#081f18]/80 p-6 backdrop-blur-sm">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-emerald-200/80">Deck Nodes</p>
              <div className="mt-4 space-y-3">
                {['Prompt Matrix', 'Mask Queue', 'Style Rails', 'Export Relay'].map((item) => (
                  <button
                    className="w-full rounded-xl border border-emerald-200/20 bg-emerald-900/20 px-3 py-2 text-left text-sm font-semibold transition duration-[220ms] hover:border-emerald-100/60 hover:bg-emerald-700/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-100"
                    key={item}
                  >
                    {item}
                  </button>
                ))}
              </div>
              <div className="mt-6">
                <ModelChips dark />
              </div>
            </aside>

            <div className="grid gap-6">
              <header className="rounded-3xl border border-emerald-200/20 bg-gradient-to-br from-[#0a2c21] via-[#0d3d2e] to-[#071711] p-8">
                <p className="font-mono text-xs uppercase tracking-[0.25em] text-emerald-200/80">T4 Canvas Control Deck</p>
                <h1 className="mt-3 max-w-3xl font-mono text-4xl font-semibold uppercase leading-[0.98] md:text-6xl">
                  Run image generation like an operations center.
                </h1>
                <p className="mt-5 max-w-2xl text-base text-emerald-100/80 md:text-lg">
                  One workspace for every major model, one subscription, and total throughput visibility.
                </p>
                <div className="mt-7 flex flex-wrap gap-3">
                  <button className="rounded-xl bg-emerald-100 px-5 py-2.5 text-sm font-semibold text-emerald-950 transition duration-[220ms] hover:-translate-y-0.5 hover:scale-[1.02] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-50">
                    Start Session
                  </button>
                  <button className="rounded-xl border border-emerald-100/40 bg-emerald-900/20 px-5 py-2.5 text-sm font-semibold text-emerald-50 transition duration-[220ms] hover:border-emerald-100/80 hover:bg-emerald-800/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-50">
                    Request Enterprise
                  </button>
                </div>
              </header>

              <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                {metrics.map(([label, value]) => (
                  <article
                    className="rounded-2xl border border-emerald-200/20 bg-[#071911] p-4 transition duration-[220ms] hover:-translate-y-0.5 hover:border-emerald-100/60 hover:bg-[#0c271c]"
                    key={label}
                  >
                    <p className="font-mono text-xs uppercase tracking-[0.2em] text-emerald-200/70">{label}</p>
                    <p className="mt-2 text-3xl font-bold text-emerald-100">{value}</p>
                  </article>
                ))}
              </section>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}

function DesignThree() {
  const strips = [
    {
      title: 'Prompt Blast',
      copy: 'Launch one prompt into every engine and keep the best output.',
      bg: 'bg-[#ff5f2e]',
    },
    {
      title: 'Edit Sprint',
      copy: 'Inpaint and outpaint at poster speed without app switching.',
      bg: 'bg-[#ffd84f]',
    },
    {
      title: 'Single Bill',
      copy: 'Unlimited creative momentum with a flat monthly subscription.',
      bg: 'bg-[#43c7ff]',
    },
  ]

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#fff3d4] text-[#101010]">
      <div className="absolute left-[-7rem] top-10 hidden h-64 w-64 rounded-full border-8 border-black/20 md:block" />
      <div className="absolute right-[-5rem] top-[-4rem] h-48 w-48 rounded-3xl bg-[#ff5f2e] rotate-12 poster-shadow" />
      <section className="relative mx-auto max-w-6xl px-6 pb-16 pt-28 md:px-10">
        <p className="inline-block rotate-[-4deg] border-4 border-black bg-[#43c7ff] px-3 py-1 font-mono text-xs font-bold uppercase tracking-[0.22em]">
          T4 Canvas
        </p>
        <h1 className="mt-7 max-w-4xl font-poster text-6xl uppercase leading-[0.88] md:text-8xl lg:text-9xl">
          Make every model shout on one creative stage.
        </h1>
        <p className="mt-6 max-w-2xl border-l-4 border-black pl-4 text-base font-semibold md:text-lg">
          Nano Banana Pro, Flux 2, gpt-image-1.5, and Seedream. One plan. Infinite runs.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <button className="border-4 border-black bg-black px-6 py-3 text-sm font-black uppercase tracking-[0.12em] text-[#fff3d4] transition duration-[220ms] hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[6px_6px_0_0_#000] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black">
            Open Beta
          </button>
          <button className="border-4 border-black bg-[#ffd84f] px-6 py-3 text-sm font-black uppercase tracking-[0.12em] transition duration-[220ms] hover:-translate-y-1 hover:bg-[#ffc413] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black">
            Pricing Deck
          </button>
        </div>
      </section>

      <section className="relative mx-auto grid max-w-6xl gap-4 px-6 pb-20 md:grid-cols-3 md:px-10">
        {strips.map((strip) => (
          <article
            className={`group border-4 border-black ${strip.bg} p-5 poster-shadow transition duration-[220ms] hover:-translate-y-1 hover:translate-x-1`}
            key={strip.title}
          >
            <h2 className="font-poster text-4xl uppercase leading-none">{strip.title}</h2>
            <p className="mt-3 max-w-[22ch] font-semibold">{strip.copy}</p>
            <p className="mt-6 font-mono text-xs uppercase tracking-[0.2em]">Click to inspect mode</p>
            <div className="mt-1 h-1 w-0 bg-black transition-all duration-[220ms] group-hover:w-20" />
          </article>
        ))}
      </section>
    </main>
  )
}

function DesignFour() {
  const values = [
    ['Model blend', 'Switch models mid-edit and preserve composition.'],
    ['Art direction memory', 'Save visual recipes and share with your team.'],
    ['Client-safe exports', 'Deliver clean folders with version history built in.'],
  ]

  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#f6f2e7_0%,#efe7db_52%,#f9f6ef_100%)] text-[#1f2327]">
      <section className="mx-auto max-w-7xl px-6 pb-20 pt-28 md:px-10">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_460px] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#595f66]">T4 Canvas Atelier</p>
            <h1 className="mt-4 max-w-3xl font-serif text-5xl leading-[0.95] md:text-7xl">
              The gallery-grade command center for AI image craft.
            </h1>
            <p className="mt-5 max-w-xl text-base text-[#4f555c] md:text-lg">
              Curate outputs across Nano Banana Pro, Flux 2, gpt-image-1.5, and Seedream without changing your creative rhythm.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <button className="rounded-full border border-[#1f2327] bg-[#1f2327] px-6 py-3 text-sm font-semibold text-[#f8f2e9] transition duration-[220ms] hover:-translate-y-0.5 hover:bg-[#343a42] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1f2327]">
                Reserve Access
              </button>
              <button className="rounded-full border border-[#1f2327]/30 bg-white/70 px-6 py-3 text-sm font-semibold transition duration-[220ms] hover:border-[#1f2327]/60 hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1f2327]">
                View Brand Film
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <article className="luxe-frame col-span-2 h-52 rounded-[2rem] bg-[radial-gradient(circle_at_30%_35%,#fffdf7_0%,#d8c6af_46%,#91806d_100%)]" />
            <article className="luxe-frame h-48 rounded-[2rem] bg-[radial-gradient(circle_at_20%_20%,#fdede0_0%,#d2ad90_52%,#8c6b55_100%)]" />
            <article className="luxe-frame h-48 rounded-[2rem] bg-[radial-gradient(circle_at_70%_30%,#faf0ff_0%,#bda7d4_45%,#6e5f86_100%)]" />
          </div>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {values.map(([title, copy]) => (
            <article
              className="rounded-3xl border border-[#1f2327]/15 bg-white/60 p-6 backdrop-blur-sm transition duration-[220ms] hover:-translate-y-0.5 hover:border-[#1f2327]/35"
              key={title}
            >
              <h2 className="font-serif text-2xl">{title}</h2>
              <p className="mt-3 text-sm text-[#5e646b]">{copy}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}

function DesignFive() {
  const journey = [
    {
      phase: '01 Draft',
      text: 'Build a seed prompt once, then fan out to every model in parallel.',
    },
    {
      phase: '02 Refine',
      text: 'Use mask-aware edits and style locks to iterate without visual drift.',
    },
    {
      phase: '03 Ship',
      text: 'Export approved frames with naming logic and client-ready bundles.',
    },
  ]

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#060913] text-[#ebf2ff]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(33,108,255,0.34),transparent_35%),radial-gradient(circle_at_95%_12%,rgba(0,244,179,0.22),transparent_34%),linear-gradient(180deg,#060913_0%,#090f21_42%,#0c1226_100%)]" />

      <section className="relative mx-auto max-w-6xl px-6 pb-10 pt-28 md:px-10">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200/90">T4 Canvas / Story Flux</p>
        <h1 className="mt-4 max-w-3xl font-display text-5xl font-black leading-[0.92] md:text-7xl">
          Your AI image pipeline, finally in one narrative flow.
        </h1>
        <p className="mt-5 max-w-2xl text-base text-cyan-100/80 md:text-lg">
          Create with Nano Banana Pro, Flux 2, gpt-image-1.5, and Seedream on one flat monthly price.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <button className="rounded-full bg-cyan-200 px-6 py-3 text-sm font-bold tracking-[0.1em] text-slate-950 transition duration-[220ms] hover:-translate-y-0.5 hover:scale-[1.02] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-100">
            Launch Workspace
          </button>
          <button className="rounded-full border border-cyan-100/40 bg-cyan-200/10 px-6 py-3 text-sm font-bold tracking-[0.1em] transition duration-[220ms] hover:border-cyan-100 hover:bg-cyan-200/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-100">
            Compare Plans
          </button>
        </div>
      </section>

      <section className="relative mx-auto grid max-w-6xl gap-8 px-6 pb-20 md:px-10 lg:grid-cols-[280px_minmax(0,1fr)]">
        <aside className="lg:sticky lg:top-28 lg:h-fit">
          <div className="timeline-glow rounded-3xl border border-cyan-100/20 bg-[#0a1431]/80 p-5 backdrop-blur-sm">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-cyan-100/70">Model Stack</p>
            <ul className="mt-3 space-y-2 text-sm text-cyan-100/90">
              {models.map((model) => (
                <li className="rounded-xl border border-cyan-100/20 bg-cyan-100/5 px-3 py-2" key={model}>
                  {model}
                </li>
              ))}
            </ul>
          </div>
        </aside>

        <div className="space-y-4">
          {journey.map((item, index) => (
            <article
              className="rounded-3xl border border-cyan-100/20 bg-[#0f1d43]/55 p-6 backdrop-blur-sm transition duration-[220ms] hover:-translate-y-0.5 hover:border-cyan-100/70 hover:bg-[#15295d]/65"
              key={item.phase}
            >
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-cyan-200/70">{item.phase}</p>
              <p className="mt-2 max-w-[38ch] text-lg font-semibold">{item.text}</p>
              <div
                className="mt-4 h-1.5 rounded-full bg-[linear-gradient(90deg,rgba(115,231,255,0.7),rgba(42,114,255,0.9))]"
                style={{ width: `${64 + index * 12}%` }}
              />
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}

function App() {
  return (
    <>
      <ConceptSwitcher />
      <Routes>
        <Route element={<Navigate replace to="/1" />} path="/" />
        <Route element={<DesignOne />} path="/1" />
        <Route element={<DesignTwo />} path="/2" />
        <Route element={<DesignThree />} path="/3" />
        <Route element={<DesignFour />} path="/4" />
        <Route element={<DesignFive />} path="/5" />
        <Route element={<Navigate replace to="/1" />} path="*" />
      </Routes>
    </>
  )
}

export default App
