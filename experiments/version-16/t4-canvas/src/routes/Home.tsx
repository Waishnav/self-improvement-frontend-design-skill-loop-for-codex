import { Link } from 'react-router-dom'

const concepts = [
  {
    path: '/1',
    label: 'Concept 01',
    title: 'Neon Command Deck',
    tone: 'Cyber interface, velocity-first control room.',
    chips: ['Dark', 'Techno', 'High contrast'],
    gradient: 'from-cyan-400/40 via-sky-500/25 to-indigo-500/40',
  },
  {
    path: '/2',
    label: 'Concept 02',
    title: 'Editorial Atelier',
    tone: 'Luxury magazine rhythm with airy storytelling blocks.',
    chips: ['Light', 'Editorial', 'Serif-heavy'],
    gradient: 'from-amber-300/40 via-rose-300/25 to-orange-300/40',
  },
  {
    path: '/3',
    label: 'Concept 03',
    title: 'Brutalist Operations',
    tone: 'Bold type, utility grid, industrial product energy.',
    chips: ['Brutalist', 'Loud', 'Utility'],
    gradient: 'from-lime-300/45 via-yellow-300/35 to-orange-300/40',
  },
  {
    path: '/4',
    label: 'Concept 04',
    title: 'Organic Spectrum',
    tone: 'Dreamy gradients and soft biomorphic composition.',
    chips: ['Soft', 'Organic', 'Atmospheric'],
    gradient: 'from-emerald-300/35 via-cyan-200/40 to-blue-300/35',
  },
  {
    path: '/5',
    label: 'Concept 05',
    title: 'Noir Precision Studio',
    tone: 'Monochrome control surface with sharp red accents.',
    chips: ['Noir', 'Premium', 'Cinematic'],
    gradient: 'from-zinc-500/30 via-red-400/35 to-zinc-500/30',
  },
]

function Home() {
  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-[#080b11] px-6 py-8 text-slate-100 sm:px-10 lg:px-16">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-30 top-0 h-96 w-96 rounded-full bg-cyan-400/20 blur-[140px]" />
        <div className="absolute right-0 top-56 h-80 w-80 rounded-full bg-fuchsia-400/20 blur-[120px]" />
        <div className="absolute bottom-0 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-500/20 blur-[150px]" />
      </div>

      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8">
        <header className="section-shell surface-grain border border-slate-200/15 bg-white/5 p-5 backdrop-blur-xl">
          <div className="relative z-10 flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.22em] text-cyan-200/80">T4 Canvas</p>
              <h1 className="font-display text-3xl tracking-tight text-white sm:text-4xl">Choose A Design Universe</h1>
            </div>
            <p className="max-w-sm text-right text-sm text-slate-300">
              Five radically different homepage concepts for an all-in-one image generation studio.
            </p>
          </div>
        </header>

        <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {concepts.map((concept) => (
            <Link
              key={concept.path}
              to={concept.path}
              className="group section-shell surface-grain border border-slate-100/10 bg-black/35 p-5 transition hover:-translate-y-1 hover:border-cyan-200/50 hover:bg-slate-900/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${concept.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-100`} />
              <div className="relative z-10 flex h-full flex-col gap-4">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-slate-300">{concept.label}</span>
                  <span className="rounded-full border border-white/20 bg-white/5 px-3 py-1 text-[10px] uppercase tracking-[0.16em] text-white/75">
                    Open
                  </span>
                </div>
                <h2 className="font-display text-2xl leading-tight text-white">{concept.title}</h2>
                <p className="text-sm text-slate-200/85">{concept.tone}</p>
                <div className="mt-auto flex flex-wrap gap-2 pt-2">
                  {concept.chips.map((chip) => (
                    <span
                      key={chip}
                      className="rounded-full border border-white/20 bg-black/25 px-3 py-1 text-xs text-slate-100"
                    >
                      {chip}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </section>
      </div>
    </main>
  )
}

export default Home
