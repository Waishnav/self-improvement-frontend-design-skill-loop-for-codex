import { Link } from 'react-router-dom'

const concepts = [
  {
    to: '/1',
    label: 'Chromatic Observatory',
    mood: 'Neon control-room maximalism',
    summary:
      'A high-energy launch narrative with luminous gradients, orbit cards, and cinematic conversion sections.',
    palette: 'from-cyan-400/35 via-fuchsia-500/25 to-amber-300/35',
  },
  {
    to: '/2',
    label: 'Editorial Atelier',
    mood: 'Magazine-grade luxury minimalism',
    summary:
      'A warm paper-toned composition with serif storytelling, asymmetric modules, and premium positioning.',
    palette: 'from-[#f5dcc7]/80 via-[#f7eee4]/85 to-[#d7b38d]/70',
  },
  {
    to: '/3',
    label: 'Voltage Brutalism',
    mood: 'Loud kinetic poster language',
    summary:
      'Sharp outlines, oversized type, rotated blocks, and bold utility messaging for no-compromise builders.',
    palette: 'from-[#ffe66d]/80 via-[#ff4f4f]/75 to-[#3a86ff]/80',
  },
  {
    to: '/4',
    label: 'Command Grid',
    mood: 'Industrial terminal precision',
    summary:
      'Monospace signals, queue telemetry, and tactical interface architecture for ops-driven teams.',
    palette: 'from-emerald-400/35 via-lime-300/20 to-teal-300/25',
  },
  {
    to: '/5',
    label: 'Aurora Bloom',
    mood: 'Organic premium softness',
    summary:
      'Fluid gradients, glass modules, and cinematic whitespace tuned for creative teams and brand studios.',
    palette: 'from-[#ffc2d1]/70 via-[#d7d5ff]/70 to-[#bbf7d0]/75',
  },
]

export function HomeHub() {
  return (
    <main className="mesh-bg relative isolate min-h-screen overflow-x-hidden px-6 py-12 text-slate-100 sm:px-10 lg:px-16">
      <div className="grain pointer-events-none absolute inset-0" />
      <div className="absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-cyan-300/10 to-transparent" />

      <div className="mx-auto max-w-7xl">
        <header className="mb-16 flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="mb-2 inline-flex rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.28em] text-cyan-100">
              T4 Canvas Studio Deck
            </p>
            <h1 className="font-['Syne'] text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
              Five Distinct Launch Concepts
            </h1>
          </div>
          <a
            className="rounded-full border border-cyan-300/45 bg-cyan-300/15 px-5 py-3 text-sm font-semibold text-cyan-100 transition hover:border-cyan-200 hover:bg-cyan-300/25"
            href="https://vite.dev"
            target="_blank"
            rel="noreferrer"
          >
            Built with Vite + React + Tailwind
          </a>
        </header>

        <section className="mb-14 grid gap-4 sm:grid-cols-3">
          {[
            ['Models on deck', 'Nano Banana Pro, Flux 2, gpt-image-1.5, Seedream'],
            ['Plan thesis', 'One flat monthly fee for generation + edits across the full model stack'],
            ['Audience', 'Power users, art directors, AI creators, and workflow-heavy teams'],
          ].map(([title, copy], index) => (
            <article
              className="reveal rounded-3xl border border-white/15 bg-white/[0.04] p-5 shadow-glow"
              key={title}
              style={{ animationDelay: `${index * 140}ms` }}
            >
              <p className="mb-2 text-xs uppercase tracking-[0.24em] text-cyan-100/80">{title}</p>
              <p className="text-sm leading-relaxed text-slate-200/95">{copy}</p>
            </article>
          ))}
        </section>

        <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {concepts.map((concept, index) => (
            <Link
              to={concept.to}
              className="group reveal relative overflow-hidden rounded-3xl border border-white/15 bg-white/[0.04] p-6 shadow-glow transition duration-500 hover:-translate-y-1 hover:border-white/35"
              key={concept.to}
              style={{ animationDelay: `${120 + index * 120}ms` }}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${concept.palette} opacity-45 transition duration-500 group-hover:opacity-60`}
              />
              <div className="relative z-10">
                <p className="mb-2 text-xs uppercase tracking-[0.28em] text-white/75">{concept.mood}</p>
                <h2 className="mb-3 font-['Syne'] text-2xl font-extrabold leading-tight text-white">
                  {concept.label}
                </h2>
                <p className="mb-6 text-sm leading-relaxed text-slate-100/90">{concept.summary}</p>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/45 bg-black/25 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-white">
                  Open concept
                  <span aria-hidden>→</span>
                </span>
              </div>
            </Link>
          ))}
        </section>
      </div>
    </main>
  )
}
