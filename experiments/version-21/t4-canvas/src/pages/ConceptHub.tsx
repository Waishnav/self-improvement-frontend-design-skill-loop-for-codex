import { Link } from 'react-router-dom'

const concepts = [
  {
    name: 'Pulse Command',
    subtitle: 'Mission control aesthetic with live model telemetry and queue presets.',
    tone: 'High-contrast operations deck',
    path: '/1',
    accent: 'from-[#0b1d2f] via-[#102f4b] to-[#0f1a24]',
    glow: 'shadow-[0_0_0_1px_rgba(94,234,212,0.28),0_18px_60px_rgba(12,74,110,0.55)]',
  },
  {
    name: 'Paper Runway',
    subtitle: 'Editorial campaign layout with tactile print cues and luxury pacing.',
    tone: 'Magazine-first storytelling',
    path: '/2',
    accent: 'from-[#f6efe4] via-[#f4d8b6] to-[#f8f2e8]',
    glow: 'shadow-[0_0_0_1px_rgba(146,64,14,0.18),0_16px_42px_rgba(120,53,15,0.24)]',
  },
  {
    name: 'Neon Collider',
    subtitle: 'Arcade-inspired velocity page with kinetic controls and glow physics.',
    tone: 'High-energy performance hype',
    path: '/3',
    accent: 'from-[#100927] via-[#1f1345] to-[#041d2f]',
    glow: 'shadow-[0_0_0_1px_rgba(45,212,191,0.35),0_16px_52px_rgba(14,116,144,0.45)]',
  },
  {
    name: 'Grid Foundry',
    subtitle: 'Brutalist command board tuned for power workflows and batch output.',
    tone: 'Industrial operating surface',
    path: '/4',
    accent: 'from-[#efefee] via-[#ddd9d1] to-[#f5f3ee]',
    glow: 'shadow-[0_0_0_1px_rgba(31,31,31,0.24),0_12px_32px_rgba(0,0,0,0.2)]',
  },
  {
    name: 'Bloom Atelier',
    subtitle: 'Atmospheric art direction with organic gradients and cinematic polish.',
    tone: 'Boutique creative studio',
    path: '/5',
    accent: 'from-[#10232f] via-[#2f2d48] to-[#264844]',
    glow: 'shadow-[0_0_0_1px_rgba(250,204,21,0.22),0_18px_52px_rgba(15,118,110,0.38)]',
  },
] as const

const models = ['Nano Banana Pro', 'Flux 2', 'gpt-image-1.5', 'Seedream'] as const

function ConceptHub() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[radial-gradient(circle_at_20%_20%,#1f2937_0,#0b1020_30%,#04060c_100%)] text-white">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-6 pb-20 pt-8 md:px-10">
        <header className="rounded-3xl border border-white/15 bg-white/5 p-6 backdrop-blur">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl space-y-3">
              <p className="font-syne text-xs uppercase tracking-[0.35em] text-cyan-200">T4 Canvas Design Lab</p>
              <h1 className="font-bricolage text-4xl leading-[0.95] md:text-6xl">Five bold landing concepts for your all-model image studio.</h1>
              <p className="max-w-2xl text-sm text-slate-200 md:text-base">
                Every concept sells one promise: one flat monthly fee for pro-grade generation and editing across Nano Banana Pro,
                Flux 2, gpt-image-1.5, and Seedream.
              </p>
            </div>
            <div className="grid gap-2 rounded-2xl border border-white/15 bg-black/30 p-4 text-xs text-slate-200">
              <p className="font-syne uppercase tracking-[0.24em] text-cyan-200">Model Stack</p>
              <div className="flex flex-wrap gap-2">
                {models.map((model) => (
                  <span key={model} className="rounded-full border border-cyan-200/30 bg-cyan-200/10 px-3 py-1">
                    {model}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </header>

        <section className="grid gap-6 sm:grid-cols-2 xl:grid-cols-5">
          {concepts.map((concept, index) => (
            <article
              key={concept.name}
              className={`group relative overflow-hidden rounded-3xl border border-white/15 bg-gradient-to-br ${concept.accent} p-6 ${concept.glow} transition duration-300 hover:-translate-y-1`}
            >
              <div className="absolute -right-7 -top-7 h-20 w-20 rounded-full bg-white/25 blur-2xl" />
              <div className="relative flex h-full flex-col gap-4">
                <p className="font-syne text-xs uppercase tracking-[0.28em] text-white/80">Concept {index + 1}</p>
                <h2 className="font-bricolage text-2xl leading-tight text-white">{concept.name}</h2>
                <p className="text-sm text-white/90">{concept.subtitle}</p>
                <p className="mt-auto text-xs uppercase tracking-[0.22em] text-white/70">{concept.tone}</p>
                <Link
                  to={concept.path}
                  className="inline-flex w-fit items-center gap-2 rounded-full border border-white/35 bg-black/30 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-black/45 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-200"
                >
                  Open Concept
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </article>
          ))}
        </section>
      </div>
    </main>
  )
}

export default ConceptHub
