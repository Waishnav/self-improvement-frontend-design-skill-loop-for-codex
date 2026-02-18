import { Link } from 'react-router-dom'

const concepts = [
  {
    name: 'Neon Reactor',
    route: '/1',
    style: 'Electro-noir launch sequence',
    summary: 'A hyper-charged hero with holographic cards, glowing gradients, and command-level urgency.',
    accent: 'from-cyan-300/45 via-blue-400/20 to-fuchsia-400/40',
  },
  {
    name: 'Editorial Atelier',
    route: '/2',
    style: 'Luxury print magazine',
    summary: 'A refined editorial composition with serif drama, elegant spacing, and premium storytelling.',
    accent: 'from-amber-200/60 via-rose-200/30 to-stone-200/70',
  },
  {
    name: 'Brutalist Charge',
    route: '/3',
    style: 'Raw anti-polish energy',
    summary: 'Hard edges, aggressive contrast, and loud callouts built for unapologetic power users.',
    accent: 'from-yellow-300/75 via-lime-200/40 to-amber-400/70',
  },
  {
    name: 'Aurora Organics',
    route: '/4',
    style: 'Dreamlike fluid motion',
    summary: 'Soft atmospheric gradients, translucent glass, and calm premium motion language.',
    accent: 'from-teal-200/70 via-cyan-100/50 to-indigo-200/60',
  },
  {
    name: 'Orbit Command',
    route: '/5',
    style: 'Mission control precision',
    summary: 'A tactical interface language where every section feels like high-performance tooling.',
    accent: 'from-blue-400/35 via-indigo-500/20 to-emerald-400/35',
  },
]

export default function GalleryPage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#090b14] px-6 py-10 text-white md:px-10">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_0%,rgba(72,114,255,0.26),transparent_40%),radial-gradient(circle_at_90%_20%,rgba(255,87,180,0.24),transparent_34%),radial-gradient(circle_at_55%_90%,rgba(75,220,180,0.18),transparent_40%)]" />
      <div className="pointer-events-none absolute inset-0 bg-noise opacity-30" />

      <div className="relative mx-auto flex max-w-7xl flex-col gap-8">
        <header className="rounded-3xl border border-white/15 bg-white/5 px-7 py-8 backdrop-blur">
          <p className="font-['IBM_Plex_Mono'] text-xs uppercase tracking-[0.32em] text-cyan-200">
            T4 Canvas Marketing Concepts
          </p>
          <h1 className="mt-4 max-w-3xl font-['Syne'] text-5xl font-semibold leading-[0.95] md:text-7xl">
            Five Distinct Campaign Directions for a Power User Image Studio
          </h1>
          <p className="mt-4 max-w-3xl text-base text-zinc-200 md:text-lg">
            T4 Canvas unifies Nano Banana Pro, Flux 2, gpt-image-1.5, and Seedream in one platform with a single monthly price.
            Pick a direction below and open the full-page concept.
          </p>
        </header>

        <main className="grid gap-5 sm:grid-cols-2 xl:grid-cols-5">
          {concepts.map((concept) => (
            <article
              key={concept.name}
              className="group relative isolate flex min-h-72 flex-col justify-between overflow-hidden rounded-3xl border border-white/15 bg-[#0f1324]/80 p-5 transition duration-300 hover:-translate-y-1 hover:border-white/35"
            >
              <div
                className={`pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br ${concept.accent} opacity-70 blur-2xl transition duration-300 group-hover:opacity-100`}
              />
              <div>
                <p className="font-['IBM_Plex_Mono'] text-xs uppercase tracking-[0.26em] text-white/70">{concept.style}</p>
                <h2 className="mt-3 font-['Syne'] text-3xl leading-none">{concept.name}</h2>
                <p className="mt-3 text-sm text-zinc-100/90">{concept.summary}</p>
              </div>
              <Link
                to={concept.route}
                className="inline-flex w-fit items-center gap-2 rounded-full border border-white/35 bg-white/10 px-4 py-2 font-['IBM_Plex_Mono'] text-xs uppercase tracking-[0.24em] text-white transition hover:bg-white/20"
              >
                Open Concept
              </Link>
            </article>
          ))}
        </main>

        <section className="rounded-3xl border border-cyan-200/40 bg-gradient-to-r from-cyan-500/15 via-transparent to-fuchsia-400/10 p-6">
          <h3 className="font-['Syne'] text-2xl">One Subscription. Four Model Engines. Infinite Iteration.</h3>
          <p className="mt-2 max-w-4xl text-zinc-200">
            Generate, upscale, remix, and style-transfer without switching products or managing credits. T4 Canvas is built for creators
            who demand speed, control, and consistency.
          </p>
        </section>
      </div>
    </div>
  )
}
