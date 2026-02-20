import { Link } from 'react-router-dom'

const concepts = [
  {
    path: '/1',
    label: 'Editorial Heat',
    temperature: 'Warm',
    description:
      'Print-era art direction meets modern AI tooling with cinematic paper textures and atelier pacing.',
    swatch: 'from-[#f6dcc2] via-[#e8b27f] to-[#8f3d2f]',
  },
  {
    path: '/2',
    label: 'Command Surface',
    temperature: 'Cool',
    description:
      'A high-density control deck for power users that feels like a live operations room.',
    swatch: 'from-[#05152f] via-[#003d74] to-[#18d6ff]',
  },
  {
    path: '/3',
    label: 'Soft Orbit',
    temperature: 'Pastel',
    description:
      'Rounded cloud-like composition focused on approachable workflows and calm productivity.',
    swatch: 'from-[#ffefdf] via-[#d4f1ff] to-[#ffcde6]',
  },
  {
    path: '/4',
    label: 'Brutal Signal',
    temperature: 'High Contrast',
    description:
      'Bold, blunt hierarchy that communicates speed and certainty with unapologetic force.',
    swatch: 'from-[#fff4d0] via-[#ff4141] to-[#111111]',
  },
  {
    path: '/5',
    label: 'Terminal Bloom',
    temperature: 'Phosphor',
    description:
      'Retro tech atmosphere with glowing telemetry and command-line storytelling.',
    swatch: 'from-[#05110a] via-[#113f26] to-[#b8ff6a]',
  },
]

export function HomePage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#0a111f] text-[#ebedf5]">
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute -left-32 top-12 h-80 w-80 rounded-full bg-[#2d69ff]/20 blur-3xl" />
        <div className="absolute right-0 top-40 h-96 w-96 rounded-full bg-[#ffa77c]/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-[#62f3ff]/15 blur-3xl" />
      </div>

      <section className="relative mx-auto flex w-full max-w-6xl flex-col px-6 pb-20 pt-16 lg:px-10">
        <div className="mb-14 max-w-3xl">
          <p className="font-archivo text-xs uppercase tracking-[0.45em] text-[#9fb4d9]">
            T4 Canvas Marketing Concepts
          </p>
          <h1 className="mt-4 font-cormorant text-5xl leading-[0.95] text-[#f8f7f3] sm:text-6xl">
            Five radically different homepages for one all-model image studio.
          </h1>
          <p className="mt-6 max-w-2xl text-base text-[#b8c0d7] sm:text-lg">
            Explore distinct visual directions for promoting a single flat-fee creative engine with Nano Banana Pro,
            Flux 2, gpt-image-1.5, and Seedream inside one workflow.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {concepts.map((concept) => (
            <Link
              key={concept.path}
              to={concept.path}
              className="group rounded-3xl border border-white/15 bg-white/5 p-5 backdrop-blur transition hover:-translate-y-1 hover:border-white/35 hover:bg-white/10"
            >
              <div className={`h-24 rounded-2xl bg-gradient-to-br ${concept.swatch}`} />
              <p className="mt-5 font-share-tech text-xs uppercase tracking-[0.24em] text-[#8ba5cd]">
                {concept.temperature} Identity
              </p>
              <h2 className="mt-2 font-archivo text-2xl font-semibold leading-tight text-[#f4f6fc]">
                {concept.label}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-[#bdc7de]">{concept.description}</p>
              <span className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 font-archivo text-xs uppercase tracking-[0.25em] text-[#f8f9ff] transition group-hover:border-white/40">
                Open Concept
              </span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}
