import { Link } from 'react-router-dom'

const concepts = [
  {
    title: 'Prism Gallery',
    subtitle: 'Gallery-first campaign with card choreography',
    graph: 'G4',
    interaction: 'I6',
    tone: 'from-amber-300/30 via-orange-200/15 to-teal-300/20',
    route: '/1',
  },
  {
    title: 'Swiss Command Ledger',
    subtitle: 'Editorial data grid with dynamic comparison surfaces',
    graph: 'G9',
    interaction: 'I3',
    tone: 'from-slate-100/25 via-zinc-100/5 to-red-200/30',
    route: '/2',
  },
  {
    title: 'Operator Cockpit',
    subtitle: 'Dense control stack with live panel cadence',
    graph: 'G3',
    interaction: 'I7',
    tone: 'from-cyan-300/30 via-emerald-200/15 to-slate-100/20',
    route: '/3',
  },
  {
    title: 'Story Scroll Atelier',
    subtitle: 'Sticky narrative journey with staged scene reveals',
    graph: 'G8',
    interaction: 'I2',
    tone: 'from-orange-200/30 via-rose-200/15 to-lime-100/20',
    route: '/4',
  },
  {
    title: 'Poster Kinetics',
    subtitle: 'Typography-led web poster with animated verbal rhythm',
    graph: 'G5',
    interaction: 'I1',
    tone: 'from-red-300/40 via-yellow-200/10 to-zinc-200/20',
    route: '/5',
  },
] as const

export function HomePage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#07080d] px-5 py-8 text-slate-100 sm:px-8 lg:px-14">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_0%,rgba(56,189,248,0.18),transparent_50%),radial-gradient(circle_at_100%_100%,rgba(251,191,36,0.15),transparent_36%)]" />

      <header className="relative mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur">
        <div>
          <p className="text-xs uppercase tracking-[0.26em] text-slate-300">T4 Canvas</p>
          <h1 className="mt-1 text-xl font-semibold text-white sm:text-2xl">
            Five Distinct Launch Concepts
          </h1>
        </div>
        <a
          href="#concept-grid"
          className="rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm font-medium transition hover:border-cyan-200 hover:bg-cyan-200/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-cyan-200"
        >
          Browse Concepts
        </a>
      </header>

      <section className="relative mx-auto mt-10 flex w-full max-w-6xl flex-col gap-4">
        <p className="max-w-3xl text-sm text-slate-300 sm:text-base">
          T4 Canvas is a single-fee image studio for Nano Banana Pro, Flux 2,
          gpt-image-1.5, and Seedream. Pick a direction and open it instantly.
        </p>
      </section>

      <section
        id="concept-grid"
        className="relative mx-auto mt-8 grid w-full max-w-6xl gap-4 pb-10 sm:grid-cols-2 lg:grid-cols-3"
      >
        {concepts.map((concept) => (
          <Link
            key={concept.route}
            to={concept.route}
            className="group relative overflow-hidden rounded-2xl border border-white/15 bg-[#0e1118]/85 p-5 transition duration-300 hover:-translate-y-1 hover:border-white/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-amber-200"
          >
            <div
              className={`absolute inset-0 opacity-80 transition duration-300 group-hover:opacity-100 bg-gradient-to-br ${concept.tone}`}
            />
            <div className="relative z-10 flex h-full flex-col">
              <p className="text-xs uppercase tracking-[0.25em] text-slate-200/90">
                {concept.graph} · {concept.interaction}
              </p>
              <h2 className="mt-3 text-2xl font-semibold text-white">
                {concept.title}
              </h2>
              <p className="mt-2 text-sm text-slate-100/90">{concept.subtitle}</p>
              <div className="mt-6 inline-flex w-fit items-center gap-2 rounded-full border border-white/30 bg-black/30 px-3 py-1 text-xs uppercase tracking-[0.2em] text-white transition group-hover:border-white/50">
                Open Concept
              </div>
            </div>
          </Link>
        ))}
      </section>
    </main>
  )
}
