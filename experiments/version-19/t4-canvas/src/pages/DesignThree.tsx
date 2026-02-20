import { Link } from 'react-router-dom'

const modes = [
  { title: 'Turbo Drafting', detail: 'Spin 20 seed variants in one burst and lock winning compositions quickly.' },
  { title: 'Style Morph', detail: 'Jump between painterly, cinematic, and product-photography aesthetics with tuned presets.' },
  { title: 'Live Repair', detail: 'Retouch selected regions while preserving structure and camera intent.' },
]

const feed = [
  { label: 'Flux 2', line: 'Synthwave storefront with rain + reflective marble floor.' },
  { label: 'Seedream', line: 'Character sheet exploring costume fabrics and color scripts.' },
  { label: 'gpt-image-1.5', line: 'Packaging mockup text localization for four markets.' },
  { label: 'Nano Banana Pro', line: 'Campaign concept batch for launch week social drops.' },
]

export function DesignThree() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#fff3e8] text-[#2a1f37]">
      <div className="pointer-events-none absolute inset-0">
        <div className="animate-drift absolute -top-16 left-0 h-64 w-64 rounded-full bg-fuchsia-300/45 blur-[50px]" />
        <div className="animate-drift absolute right-6 top-20 h-72 w-72 rounded-full bg-orange-300/55 blur-[60px]" />
        <div className="animate-drift absolute bottom-10 left-1/3 h-64 w-64 rounded-full bg-cyan-300/50 blur-[60px]" />
      </div>

      <header className="section-wrap relative py-8">
        <div className="flex flex-wrap items-center justify-between gap-3 rounded-full border border-[#9b66ce]/35 bg-white/75 px-5 py-3 backdrop-blur">
          <Link to="/" className="font-cabin text-xs uppercase tracking-[0.2em] text-[#71359f] transition hover:text-[#3a1d53]">
            Other Concepts
          </Link>
          <p className="font-baloo text-xl text-[#5d2787]">T4 Canvas</p>
          <button className="rounded-full bg-[#5d2787] px-4 py-2 font-cabin text-xs uppercase tracking-[0.16em] text-white transition hover:bg-[#411a60]">
            Join Flat Plan
          </button>
        </div>
      </header>

      <section className="section-wrap relative pb-14 pt-3">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="font-cabin text-xs uppercase tracking-[0.24em] text-[#7d46ad]">Candy Reactor</p>
            <h1 className="mt-4 font-baloo text-5xl leading-[0.95] text-[#3d1f57] sm:text-6xl lg:text-7xl">
              Build wild image campaigns at playful speed.
            </h1>
            <p className="mt-5 max-w-xl font-cabin text-lg leading-relaxed text-[#54366d]">
              One colorful workspace for Nano Banana Pro, Flux 2, gpt-image-1.5, and Seedream. Generate, remix, and ship with a single monthly price.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <button className="rounded-full bg-[#3d1f57] px-6 py-3 font-cabin text-xs uppercase tracking-[0.17em] text-white transition hover:bg-[#2d1642]">
                Start creating
              </button>
              <button className="rounded-full border border-[#7d46ad]/55 bg-white/60 px-6 py-3 font-cabin text-xs uppercase tracking-[0.17em] text-[#4d2b6f] transition hover:bg-white/90">
                View demo reel
              </button>
            </div>
          </div>

          <div className="relative rounded-[2rem] border-2 border-[#5d2787]/40 bg-white/80 p-6 shadow-[0_28px_50px_rgba(114,71,150,0.22)]">
            <div className="animate-pulse-ring absolute -right-4 -top-4 h-24 w-24 rounded-full border-2 border-[#f97316]/55" />
            <p className="font-cabin text-xs uppercase tracking-[0.18em] text-[#8c4abf]">Model mix</p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl bg-[#ffe3c9] p-4">
                <p className="font-baloo text-2xl text-[#8f4f19]">Nano Banana Pro</p>
              </div>
              <div className="rounded-2xl bg-[#e5dcff] p-4">
                <p className="font-baloo text-2xl text-[#5d2f9d]">Flux 2</p>
              </div>
              <div className="rounded-2xl bg-[#d9f8ff] p-4">
                <p className="font-baloo text-2xl text-[#0e7490]">gpt-image-1.5</p>
              </div>
              <div className="rounded-2xl bg-[#e9ffd9] p-4">
                <p className="font-baloo text-2xl text-[#3f7c17]">Seedream</p>
              </div>
            </div>
            <p className="mt-4 font-cabin text-sm text-[#5f4376]">Switch engines with one click and compare outputs in split-view strips.</p>
          </div>
        </div>
      </section>

      <section className="section-wrap pb-14">
        <div className="grid gap-5 md:grid-cols-3">
          {modes.map((mode) => (
            <article key={mode.title} className="rounded-[1.8rem] border border-[#9b66ce]/35 bg-white/80 p-5 shadow-[0_16px_30px_rgba(77,43,111,0.12)]">
              <h2 className="font-baloo text-3xl leading-tight text-[#42245f]">{mode.title}</h2>
              <p className="mt-3 font-cabin text-sm leading-relaxed text-[#553a6c]">{mode.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-wrap pb-14">
        <div className="rounded-[2rem] border-2 border-[#5d2787]/45 bg-[#3d1f57] p-6 text-white sm:p-8">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <h2 className="font-baloo text-4xl sm:text-5xl">Live prompt arcade</h2>
            <span className="rounded-full bg-white/15 px-4 py-2 font-cabin text-xs uppercase tracking-[0.16em]">Realtime feed</span>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {feed.map((item) => (
              <article key={item.line} className="rounded-2xl border border-white/25 bg-white/10 p-4">
                <p className="font-cabin text-xs uppercase tracking-[0.18em] text-orange-200">{item.label}</p>
                <p className="mt-2 font-cabin text-sm leading-relaxed text-violet-100">{item.line}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-wrap pb-20">
        <div className="grid gap-6 rounded-[2.2rem] border border-[#8a52bd]/45 bg-white/80 p-6 sm:p-9 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="font-cabin text-xs uppercase tracking-[0.24em] text-[#8c4abf]">Flat Fee Plan</p>
            <p className="mt-3 font-baloo text-5xl text-[#3d1f57] sm:text-6xl">$79 / month</p>
            <p className="mt-3 max-w-xl font-cabin text-sm leading-relaxed text-[#5f4376]">
              Unlimited model switching, advanced edits, project workspaces, and client-ready exports. Built for teams that move fast.
            </p>
          </div>
          <button className="rounded-full bg-[#f97316] px-7 py-3 font-cabin text-xs uppercase tracking-[0.17em] text-white transition hover:bg-[#dd620d]">
            Try T4 Canvas
          </button>
        </div>
      </section>
    </main>
  )
}
