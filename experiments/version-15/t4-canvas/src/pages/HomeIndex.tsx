import { Link } from 'react-router-dom'

type DemoCard = {
  id: string
  title: string
  subtitle: string
  copy: string
  path: string
  previewClass: string
}

const demos: DemoCard[] = [
  {
    id: 'I',
    title: 'Control Room Noir',
    subtitle: 'Industrial dark UI with precision telemetry',
    copy: 'A high-end mission control aesthetic for teams shipping image campaigns fast.',
    path: '/1',
    previewClass:
      'bg-[radial-gradient(circle_at_20%_20%,#f97316,transparent_45%),radial-gradient(circle_at_70%_70%,#38bdf8,transparent_45%),#0a0f17]',
  },
  {
    id: 'II',
    title: 'Editorial Spectrum',
    subtitle: 'Magazine-grade storytelling for product launch',
    copy: 'A bold publishing look that turns model specs into premium narrative sections.',
    path: '/2',
    previewClass:
      'bg-[radial-gradient(circle_at_80%_20%,#f59e0b,transparent_35%),linear-gradient(135deg,#faf6e9,#f8efe0_45%,#ffe1d1)]',
  },
  {
    id: 'III',
    title: 'Neon Circuit Bazaar',
    subtitle: 'Hyper-kinetic cyber storefront with electric contrast',
    copy: 'Kinetic lines, bright accents, and signal-heavy data blocks for power users.',
    path: '/3',
    previewClass:
      'bg-[radial-gradient(circle_at_30%_30%,#22d3ee,transparent_35%),radial-gradient(circle_at_70%_20%,#f472b6,transparent_35%),#05070f]',
  },
  {
    id: 'IV',
    title: 'Gallery Atelier',
    subtitle: 'Luxury minimalism with museum-like pacing',
    copy: 'Quiet confidence, typographic tension, and gallery framing for premium positioning.',
    path: '/4',
    previewClass:
      'bg-[linear-gradient(160deg,#f5f0e7_0%,#e6ddcf_45%,#d3c5af_100%)]',
  },
  {
    id: 'V',
    title: 'Kinetic Playground',
    subtitle: 'Brutalist color theatre with playful density',
    copy: 'A loud, expressive concept tuned for creators who want personality over polish.',
    path: '/5',
    previewClass:
      'bg-[radial-gradient(circle_at_20%_15%,#fdba74,transparent_30%),radial-gradient(circle_at_75%_20%,#34d399,transparent_35%),#fef08a]',
  },
]

export default function HomeIndex() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#070a12] text-white">
      <div className="pointer-events-none absolute inset-0 opacity-80">
        <div className="absolute left-[-12%] top-[-16%] h-96 w-96 rounded-full bg-[#4f46e5]/30 blur-3xl" />
        <div className="absolute right-[-8%] top-[24%] h-[28rem] w-[28rem] rounded-full bg-[#0ea5e9]/20 blur-3xl" />
        <div className="absolute bottom-[-16%] left-[24%] h-[26rem] w-[26rem] rounded-full bg-[#fb7185]/20 blur-3xl" />
      </div>

      <section className="relative mx-auto max-w-7xl px-6 py-12 md:py-20">
        <div className="rounded-3xl border border-white/20 bg-white/5 p-8 backdrop-blur md:p-12">
          <p className="font-mono text-xs uppercase tracking-[0.45em] text-sky-200">T4 Canvas</p>
          <h1 className="mt-4 max-w-4xl font-syne text-5xl leading-[0.95] text-white md:text-7xl">
            Five Distinct Universes for the Future of Image Generation
          </h1>
          <p className="mt-6 max-w-3xl text-base text-slate-200 md:text-lg">
            Pick a concept below. Every page sells the same product but through a different visual strategy,
            interaction rhythm, and typographic voice.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {demos.map((demo) => (
            <article
              key={demo.id}
              className="group flex h-full flex-col rounded-3xl border border-white/15 bg-white/5 p-5 backdrop-blur transition duration-500 hover:-translate-y-1 hover:border-white/40 hover:bg-white/10"
            >
              <div className={`relative h-44 overflow-hidden rounded-2xl ${demo.previewClass}`}>
                <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.45),transparent_45%)]" />
                <div className="absolute bottom-4 left-4 font-mono text-xs uppercase tracking-[0.3em] text-white/80">
                  Concept {demo.id}
                </div>
              </div>

              <h2 className="mt-5 font-syne text-2xl leading-tight text-white">{demo.title}</h2>
              <p className="mt-2 text-sm text-sky-100/90">{demo.subtitle}</p>
              <p className="mt-3 flex-1 text-sm text-slate-300">{demo.copy}</p>

              <Link
                to={demo.path}
                className="mt-6 inline-flex items-center justify-between rounded-xl border border-white/30 bg-white/10 px-4 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white/20"
              >
                Open Experience
                <span aria-hidden className="text-base">
                  ↗
                </span>
              </Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}
