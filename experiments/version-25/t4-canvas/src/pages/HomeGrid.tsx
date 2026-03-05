import { Link } from 'react-router-dom'

const concepts = [
  {
    href: '/1',
    name: 'Sunday Edition',
    tone: 'Editorial paper artifact',
    highlight: 'Masthead typography + column rhythm + live pricing switch.',
    bg: 'bg-[#f4eee3]',
    text: 'text-[#231d18]',
    accent: 'text-[#a53f29]',
  },
  {
    href: '/2',
    name: 'Control Deck',
    tone: 'Mission console interface',
    highlight: 'Model dialer + telemetry UI + terminal copy voice.',
    bg: 'bg-[#050705]',
    text: 'text-[#d2f8d2]',
    accent: 'text-[#efb84f]',
  },
  {
    href: '/3',
    name: 'Swiss Signal',
    tone: 'Constructivist campaign poster',
    highlight: 'Rigid poster grid + giant figures + mode switching.',
    bg: 'bg-[#f6f2e8]',
    text: 'text-[#111111]',
    accent: 'text-[#c51b1b]',
  },
  {
    href: '/4',
    name: 'Gallery Drift',
    tone: 'Curated art wall',
    highlight: 'Asymmetric composition + floating notes + accordion proof.',
    bg: 'bg-[#f6f2ea]',
    text: 'text-[#2d2620]',
    accent: 'text-[#8f4c39]',
  },
  {
    href: '/5',
    name: 'Noir Atelier',
    tone: 'Cinematic premium launch',
    highlight: 'Stage switcher + luminous depth + dramatic typography.',
    bg: 'bg-[#050505]',
    text: 'text-[#f0e9da]',
    accent: 'text-[#df9f52]',
  },
]

function HomeGrid() {
  return (
    <main className="min-h-screen bg-[#111213] px-5 py-12 text-[#f5f2ea] sm:px-10">
      <div className="mx-auto max-w-6xl reveal">
        <p className="font-['IBM_Plex_Mono'] text-xs tracking-[0.08em] text-[#f2b95e]">T4 CANVAS</p>
        <h1 className="mt-5 max-w-4xl font-['Fraunces'] text-[clamp(2.8rem,8vw,6.6rem)] leading-[0.9]">
          Five campaign-grade homepage directions for one image studio.
        </h1>
        <p className="mt-5 max-w-2xl font-['Plus_Jakarta_Sans'] text-base text-[#ddd6cb] sm:text-lg">
          Every route is a complete visual identity. Pick one for launch, or blend parts into your final brand system.
        </p>
      </div>

      <section className="mx-auto mt-12 grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-6 reveal delay-100">
        {concepts.map((concept, index) => (
          <Link
            key={concept.name}
            to={concept.href}
            className={`${concept.bg} ${concept.text} group relative overflow-hidden border border-white/10 p-6 transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(0,0,0,0.35)] ${
              index === 0 || index === 3 ? 'lg:col-span-4' : 'lg:col-span-2'
            }`}
          >
            <p className="font-['IBM_Plex_Mono'] text-xs uppercase tracking-[0.12em] opacity-70">Design {index + 1}</p>
            <h2 className="mt-3 font-['DM_Serif_Display'] text-4xl leading-[0.9]">{concept.name}</h2>
            <p className="mt-2 font-['Work_Sans'] text-sm opacity-75">{concept.tone}</p>
            <p className="mt-6 max-w-sm font-['Work_Sans'] text-sm leading-relaxed">{concept.highlight}</p>
            <span
              className={`${concept.accent} mt-10 inline-flex items-center gap-2 font-['Space_Grotesk'] text-sm transition group-hover:gap-3`}
            >
              Open concept
              <span aria-hidden="true">→</span>
            </span>
            <div className="pointer-events-none absolute -right-12 -top-10 h-40 w-40 rounded-full border border-current/20 opacity-35" />
          </Link>
        ))}
      </section>
    </main>
  )
}

export default HomeGrid
