import { Link } from 'react-router-dom'

const explorations = [
  {
    path: '/1',
    name: 'Prismatic Overdrive',
    note: 'Layered canvas hero with diagonal pressure and overlap breaks.',
    palette: 'from-[#74f9ff] via-[#7e88ff] to-[#ff63d1]',
  },
  {
    path: '/2',
    name: 'Editorial Reactor',
    note: 'Strict magazine grid interrupted by one disruptive off-grid plane.',
    palette: 'from-[#f0ddc3] via-[#f9f5ea] to-[#9d6f5a]',
  },
  {
    path: '/3',
    name: 'Command Deck',
    note: 'Cockpit-dense operator system followed by sparse decompression.',
    palette: 'from-[#1dffb6] via-[#0f2c38] to-[#102f28]',
  },
  {
    path: '/4',
    name: 'Narrative Spine',
    note: 'Sticky storytelling backbone with scene handoff planes.',
    palette: 'from-[#f2ddd7] via-[#b8c2f8] to-[#5560ac]',
  },
  {
    path: '/5',
    name: 'Poster Monolith',
    note: 'Framed poster stacks with a hard full-bleed slab in the middle.',
    palette: 'from-[#ff7a18] via-[#ffd857] to-[#f53c4e]',
  },
]

export function HomePage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#05070c] text-[#f5f7ff]">
      <div className="pointer-events-none absolute inset-0 opacity-30">
        <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-[#19b3ff] blur-[130px]" />
        <div className="absolute right-0 top-44 h-72 w-72 rounded-full bg-[#8f55ff] blur-[150px]" />
        <div className="absolute bottom-8 left-1/2 h-72 w-96 -translate-x-1/2 rounded-full bg-[#ff4f96] blur-[170px]" />
      </div>

      <main className="relative mx-auto flex min-h-screen w-full max-w-7xl flex-col px-6 pb-16 pt-10 sm:px-10 lg:px-16">
        <header className="mb-14 flex flex-wrap items-center justify-between gap-4">
          <p className="rounded-full border border-white/20 px-4 py-2 text-xs uppercase tracking-[0.26em] text-white/80">
            T4 Canvas • Creative Router
          </p>
          <p className="text-xs uppercase tracking-[0.22em] text-white/65">
            One flat monthly fee • Nano Banana Pro • Flux 2 • gpt-image-1.5 • Seedream
          </p>
        </header>

        <section className="mb-12 max-w-4xl">
          <h1
            className="animate-rise text-5xl font-semibold leading-[0.94] text-white sm:text-7xl"
            style={{ fontFamily: 'Bricolage Grotesque, sans-serif' }}
          >
            T4 Canvas
            <span className="block bg-gradient-to-r from-[#7de9ff] via-[#a9a4ff] to-[#ff8ed4] bg-clip-text text-transparent">
              image generation studio for serious builders
            </span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/75">
            Pick a creative direction and drop into a full marketing homepage concept. Every route below is a distinct
            visual system for the same product story.
          </p>
        </section>

        <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {explorations.map((item, idx) => (
            <Link
              key={item.path}
              to={item.path}
              className="group relative overflow-hidden rounded-3xl border border-white/15 bg-white/5 p-6 transition duration-500 hover:-translate-y-1 hover:border-white/35 hover:bg-white/10"
            >
              <div
                className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${item.palette} opacity-80 transition-opacity duration-300 group-hover:opacity-100`}
              />
              <span className="inline-flex rounded-full border border-white/20 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-white/70">
                Concept {idx + 1}
              </span>
              <h2
                className="mt-5 text-3xl leading-none text-white"
                style={{ fontFamily: idx % 2 === 0 ? 'Sora, sans-serif' : 'Fraunces, serif' }}
              >
                {item.name}
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-white/70">{item.note}</p>
              <div className="mt-8 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.15em] text-white/85">
                Open design <span className="transition-transform group-hover:translate-x-1">→</span>
              </div>
            </Link>
          ))}
        </section>
      </main>
    </div>
  )
}
