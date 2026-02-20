import { Link } from 'react-router-dom'

const concepts = [
  {
    id: '1',
    title: 'Signal Forge',
    strap: 'Cinematic control-room direction with data-rich power UI energy.',
    accent: 'from-cyan-400 via-sky-500 to-amber-300',
    mode: 'High-contrast dark',
  },
  {
    id: '2',
    title: 'Editorial Atelier',
    strap: 'Luxury magazine storytelling with tactile paper moods.',
    accent: 'from-amber-200 via-rose-200 to-stone-300',
    mode: 'Soft tonal light',
  },
  {
    id: '3',
    title: 'Candy Reactor',
    strap: 'Playful maximalist launch page full of kinetic color.',
    accent: 'from-fuchsia-400 via-orange-300 to-yellow-200',
    mode: 'Vibrant punch',
  },
  {
    id: '4',
    title: 'Brutalist Grid',
    strap: 'Raw industrial layout with command-line confidence.',
    accent: 'from-lime-300 via-yellow-300 to-orange-400',
    mode: 'Bold neutral contrast',
  },
  {
    id: '5',
    title: 'Solstice House',
    strap: 'Organic luxury world blending craft and AI precision.',
    accent: 'from-emerald-300 via-teal-200 to-amber-200',
    mode: 'Balanced earthy',
  },
]

export function HomeHub() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-950 px-4 pb-16 pt-10 text-slate-100 sm:px-6 lg:px-10">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-emerald-500/20 blur-[110px]" />
        <div className="absolute right-0 top-28 h-96 w-96 rounded-full bg-orange-500/20 blur-[130px]" />
        <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-cyan-500/20 blur-[120px]" />
      </div>

      <div className="section-wrap relative">
        <header className="mb-10 rounded-3xl border border-slate-700/60 bg-slate-900/70 p-6 backdrop-blur-md md:p-8">
          <p className="font-orbitron text-xs uppercase tracking-[0.24em] text-emerald-300">T4 Canvas • Design Benchmark Build</p>
          <div className="mt-4 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <h1 className="font-orbitron text-3xl leading-tight text-shadow-tight sm:text-4xl lg:text-5xl">Choose a launch world.</h1>
              <p className="mt-3 max-w-2xl font-sora text-sm text-slate-300 sm:text-base">
                Five different marketing homepages for an image-gen power studio unifying Nano Banana Pro, Flux 2, gpt-image-1.5, and Seedream under one monthly flat fee.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-600/60 bg-slate-800/55 px-4 py-3 font-sora text-xs text-slate-200">
              All concepts are responsive and production-ready React + Tailwind routes.
            </div>
          </div>
        </header>

        <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {concepts.map((concept) => (
            <article
              key={concept.id}
              className="group relative overflow-hidden rounded-3xl border border-slate-700/70 bg-slate-900/75 p-5 transition duration-500 hover:-translate-y-1.5 hover:border-slate-400/80 hover:shadow-[0_24px_60px_rgba(0,0,0,0.45)]"
            >
              <div className={`h-2 w-full rounded-full bg-gradient-to-r ${concept.accent}`} />
              <p className="mt-5 font-orbitron text-xs uppercase tracking-[0.2em] text-slate-400">Concept {concept.id}</p>
              <h2 className="mt-2 font-orbitron text-2xl text-slate-100">{concept.title}</h2>
              <p className="mt-3 min-h-16 font-sora text-sm leading-relaxed text-slate-300">{concept.strap}</p>
              <div className="mt-4 flex items-center justify-between">
                <span className="rounded-full border border-slate-600/70 px-3 py-1 font-sora text-xs text-slate-200">{concept.mode}</span>
                <Link
                  to={`/${concept.id}`}
                  className="rounded-full bg-white px-4 py-2 font-orbitron text-xs uppercase tracking-[0.15em] text-slate-900 transition hover:bg-emerald-200"
                >
                  Open design
                </Link>
              </div>
            </article>
          ))}
        </section>
      </div>
    </main>
  )
}
