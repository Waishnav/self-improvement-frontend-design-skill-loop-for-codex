import { Link } from 'react-router-dom'

const concepts = [
  {
    id: '1',
    title: 'Neon Runtime',
    tone: 'Dark kinetic launch page with command-center energy.',
    accent: 'from-lime-300 via-cyan-300 to-emerald-500',
    chip: 'Realtime orchestration',
  },
  {
    id: '2',
    title: 'Editorial Atelier',
    tone: 'Magazine-grade storytelling with tactile print aesthetics.',
    accent: 'from-rose-200 via-orange-200 to-amber-300',
    chip: 'Campaign art direction',
  },
  {
    id: '3',
    title: 'Brutalist Ops',
    tone: 'Hard-edged control room built for power users.',
    accent: 'from-yellow-300 via-orange-400 to-red-500',
    chip: 'Queue command board',
  },
  {
    id: '4',
    title: 'Prism Habitat',
    tone: 'Glassy cinematic playground with atmospheric depth.',
    accent: 'from-cyan-200 via-teal-200 to-sky-300',
    chip: 'Non-destructive remixing',
  },
  {
    id: '5',
    title: 'Retro Flight Deck',
    tone: 'Analog-future interface with terminal-grade precision.',
    accent: 'from-blue-300 via-indigo-300 to-fuchsia-300',
    chip: 'Cost simulator + pipeline maps',
  },
]

export function HubPage() {
  return (
    <main className="relative min-h-screen overflow-x-clip bg-[#06070b] text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_10%,rgba(122,255,220,0.16),transparent_40%),radial-gradient(circle_at_85%_15%,rgba(255,214,97,0.16),transparent_35%),radial-gradient(circle_at_40%_88%,rgba(159,132,255,0.12),transparent_38%)]" />
      <section className="relative mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 py-14 md:px-10 lg:py-20">
        <div className="space-y-6">
          <p className="font-mono-tech text-xs uppercase tracking-[0.35em] text-white/70">T4 Canvas</p>
          <h1 className="max-w-4xl font-unbounded text-4xl leading-[1.02] md:text-6xl">
            Five radical homepage concepts for an all-model image generation studio.
          </h1>
          <p className="max-w-2xl text-base text-white/75 md:text-lg">
            Every concept sells the same core promise: generate and edit with Nano Banana Pro, Flux 2,
            gpt-image-1.5, and Seedream under one flat monthly plan.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {concepts.map((concept) => (
            <Link
              key={concept.id}
              to={`/${concept.id}`}
              className="group relative overflow-hidden rounded-3xl border border-white/15 bg-white/5 p-6 transition duration-300 hover:-translate-y-1 hover:border-white/40 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-300"
            >
              <div className={`mb-6 h-28 rounded-2xl bg-gradient-to-br ${concept.accent} p-[1px]`}>
                <div className="flex h-full items-end rounded-[15px] bg-black/65 px-4 py-3">
                  <span className="font-mono-tech text-[11px] uppercase tracking-[0.2em] text-white/85">
                    {concept.chip}
                  </span>
                </div>
              </div>
              <div className="space-y-3">
                <h2 className="font-syne text-2xl font-semibold leading-tight">{concept.title}</h2>
                <p className="text-sm text-white/70">{concept.tone}</p>
              </div>
              <div className="mt-8 flex items-center justify-between text-xs uppercase tracking-[0.22em] text-white/75">
                <span>Open concept</span>
                <span className="transition group-hover:translate-x-1">Explore</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}
