import { Link } from 'react-router-dom'

const concepts = [
  {
    path: '/1',
    title: 'Neon Cinema',
    subtitle: 'Full-Bleed Atmospheric Launch',
    swatch: 'from-fuchsia-500/80 via-orange-400/70 to-emerald-300/80',
    blurb: 'A dramatic story-first landing page with immersive gradient light and model switching.',
  },
  {
    path: '/2',
    title: 'Morning Edition',
    subtitle: 'Broadsheet Editorial Style',
    swatch: 'from-amber-200 via-orange-100 to-rose-100',
    blurb: 'A printed-media aesthetic with masthead typography, columns, and pull quotes.',
  },
  {
    path: '/3',
    title: 'Grid Protocol',
    subtitle: 'Swiss Poster System',
    swatch: 'from-zinc-900 via-zinc-700 to-red-600',
    blurb: 'A strict modular layout with high contrast, bold data moments, and precision spacing.',
  },
  {
    path: '/4',
    title: 'Control Room',
    subtitle: 'Bento Product Narrative',
    swatch: 'from-cyan-300 via-sky-200 to-indigo-200',
    blurb: 'A dashboard-marketing hybrid with asymmetric cards and active pipeline controls.',
  },
  {
    path: '/5',
    title: 'Split Voltage',
    subtitle: 'Dual-Panel Campaign Page',
    swatch: 'from-lime-300 via-yellow-300 to-orange-400',
    blurb: 'A bold split-screen composition balancing cinematic copy with generative artwork.',
  },
]

export function HomeGrid() {
  return (
    <main className="min-h-screen bg-[#0c0d12] px-6 py-10 text-white md:px-10 lg:px-14">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10">
        <header className="space-y-5">
          <p className="font-[var(--font-mono)] text-xs uppercase tracking-[0.2em] text-zinc-400">T4 Canvas</p>
          <h1 className="max-w-4xl font-[var(--font-display-one)] text-5xl leading-[0.95] tracking-tight md:text-7xl">
            Pick a homepage direction that feels impossible to ignore.
          </h1>
          <p className="max-w-2xl font-[var(--font-body-one)] text-base text-zinc-300 md:text-lg">
            Five radically different campaign concepts for the same product story: one flat monthly fee,
            every major image model, and a power interface for professionals.
          </p>
        </header>

        <section className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {concepts.map((concept) => (
            <Link
              key={concept.path}
              to={concept.path}
              className="group rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur transition duration-500 hover:-translate-y-1 hover:border-white/30"
            >
              <div
                className={`mb-5 h-36 rounded-2xl bg-gradient-to-br ${concept.swatch} shadow-[inset_0_0_60px_rgba(0,0,0,0.22)]`}
              />
              <p className="font-[var(--font-mono)] text-xs uppercase tracking-[0.18em] text-zinc-400">
                {concept.subtitle}
              </p>
              <h2 className="mt-2 font-[var(--font-display-three)] text-3xl tracking-tight text-white transition group-hover:text-cyan-200">
                {concept.title}
              </h2>
              <p className="mt-3 font-[var(--font-body-three)] text-sm leading-relaxed text-zinc-300">{concept.blurb}</p>
            </Link>
          ))}
        </section>
      </div>
    </main>
  )
}
