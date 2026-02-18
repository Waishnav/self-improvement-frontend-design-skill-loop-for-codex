import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const concepts = [
  {
    route: '/1',
    name: 'Noir Control Room',
    theme: 'Cinematic darkness, red plasma glows, mission-control density.',
    highlight: 'Optimized for speed-run creators and studio teams.',
  },
  {
    route: '/2',
    name: 'Editorial Prism',
    theme: 'Magazine-grade light mode, serif drama, confident whitespace.',
    highlight: 'Built for polished campaign creatives and agencies.',
  },
  {
    route: '/3',
    name: 'Neon Ops Deck',
    theme: 'Arcade terminal energy with electric telemetry overlays.',
    highlight: 'Built for power users who think in shortcuts.',
  },
  {
    route: '/4',
    name: 'Organic Atelier',
    theme: 'Soft gradients, tactile cards, narrative-first storytelling.',
    highlight: 'Built for artists and brand storytellers.',
  },
  {
    route: '/5',
    name: 'Industrial Signal',
    theme: 'Brutalist structure, high-contrast type, hard-edge utility.',
    highlight: 'Built for builders who value clarity over ornament.',
  },
]

function HubPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#06090c] pb-24 text-[#f0f6f7]">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-12%] top-[-18%] h-[460px] w-[460px] rounded-full bg-[radial-gradient(circle_at_center,_rgba(51,182,255,0.35),_transparent_70%)] blur-2xl" />
        <div className="absolute right-[-14%] top-[10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_at_center,_rgba(255,108,45,0.30),_transparent_70%)] blur-2xl" />
        <div className="texture-grid absolute inset-0 opacity-35" />
      </div>

      <header className="relative z-10 mx-auto flex w-full max-w-6xl items-center justify-between px-6 pb-8 pt-8 md:px-10">
        <div>
          <p className="font-syne text-xs uppercase tracking-[0.35em] text-[#8fd2ff]">T4 Canvas</p>
          <p className="mt-1 text-sm text-white/70">Power image generation studio</p>
        </div>
        <a
          href="#concept-grid"
          className="rounded-full border border-white/20 bg-white/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.18em] transition hover:bg-white/20"
        >
          Explore Concepts
        </a>
      </header>

      <main className="relative z-10 mx-auto w-full max-w-6xl px-6 md:px-10">
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="rounded-[32px] border border-white/12 bg-black/35 p-7 backdrop-blur-xl md:p-12"
        >
          <p className="font-space text-xs uppercase tracking-[0.3em] text-[#9de7ff]">Flat-Fee Image Operating System</p>
          <h1 className="font-syne mt-4 max-w-4xl text-4xl leading-[0.95] tracking-tight text-white md:text-6xl">
            One subscription.
            <br />
            Four frontier models.
            <br />
            Infinite campaign output.
          </h1>
          <p className="mt-6 max-w-3xl text-base text-[#d5e1e3] md:text-lg">
            T4 Canvas unifies Nano Banana Pro, Flux 2, gpt-image-1.5, and Seedream in one professional interface.
            Generate, remix, upscale, and ship studio-grade visuals without juggling tools or billing tiers.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {['Nano Banana Pro', 'Flux 2', 'gpt-image-1.5', 'Seedream'].map((model) => (
              <span
                key={model}
                className="rounded-full border border-[#7acfff]/40 bg-[#0e1e2c] px-4 py-2 text-sm font-medium text-[#d8f4ff]"
              >
                {model}
              </span>
            ))}
          </div>
        </motion.section>

        <section id="concept-grid" className="mt-14">
          <div className="mb-6 flex items-end justify-between gap-5">
            <h2 className="font-syne text-2xl font-semibold text-white md:text-4xl">Choose a homepage direction</h2>
            <p className="max-w-sm text-right text-sm text-white/65">Five distinct visual identities. Same product story, different creative DNA.</p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {concepts.map((concept, index) => (
              <motion.article
                key={concept.name}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.65, delay: index * 0.08, ease: 'easeOut' }}
                className="group relative overflow-hidden rounded-3xl border border-white/14 bg-[#0b1118]/90 p-6"
              >
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,_rgba(143,210,255,0.17),_transparent_50%)] opacity-0 transition duration-500 group-hover:opacity-100" />
                <p className="font-space text-xs uppercase tracking-[0.27em] text-[#a4e7ff]">Concept {index + 1}</p>
                <h3 className="font-bricolage mt-4 text-2xl text-white">{concept.name}</h3>
                <p className="mt-3 text-sm text-[#d2dde0]">{concept.theme}</p>
                <p className="mt-3 text-sm text-[#8ccde9]">{concept.highlight}</p>
                <Link
                  to={concept.route}
                  className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/25 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white transition group-hover:border-[#8fd2ff] group-hover:bg-[#13263c]"
                >
                  Open Direction
                  <span aria-hidden>→</span>
                </Link>
              </motion.article>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}

export default HubPage
