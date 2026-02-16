import { useState } from 'react'

const galleryTiles = [
  { id: 'A', title: 'Beauty Launch', tones: 'Copper haze + studio flash' },
  { id: 'B', title: 'Fashion Cut', tones: 'Noir grain + chrome edge' },
  { id: 'C', title: 'Travel Splash', tones: 'Coastal cyan + dusk amber' },
  { id: 'D', title: 'Automotive', tones: 'Graphite polish + kinetic blur' },
]

const controls = [
  'Layer prompts with depth maps',
  'Blend outputs between model engines',
  'Edit with local mask precision',
  'Export campaign bundles instantly',
]

export function DesignFour() {
  const [split, setSplit] = useState(54)

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050d1f] text-[#d8e5ff] [font-family:'Hind',sans-serif]">
      <div className="drift-layer drift-a" />
      <div className="drift-layer drift-b" />
      <div className="drift-layer drift-c" />

      <section className="relative mx-auto grid max-w-7xl gap-10 px-6 pb-16 pt-28 lg:grid-cols-12">
        <div className="animate-rise lg:col-span-6 lg:pt-8">
          <p className="text-xs uppercase tracking-[0.25em] text-[#8ec5ff]">T4 Canvas / Layered Media Atelier</p>
          <h1 className="mt-5 max-w-xl text-5xl leading-[0.93] tracking-[-0.03em] text-white [font-family:'Outfit',sans-serif] sm:text-6xl lg:text-7xl">
            Compose image worlds with layered AI depth.
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-[#b6c9ee]">
            Mix Nano Banana Pro, Flux 2, gpt-image-1.5, and Seedream inside one cinematic workspace and one monthly plan.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <button className="rounded-full bg-[#9bd0ff] px-7 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#00122c] transition duration-220 hover:-translate-y-0.5 hover:bg-[#bfdfff] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#bfdfff]">
              Generate First Scene
            </button>
            <button className="rounded-full border border-[#9ec8ff]/45 bg-[#08152d]/80 px-7 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#d5e7ff] transition duration-220 hover:border-[#b6d6ff] hover:bg-[#0f2142] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9ec8ff]">
              Explore Gallery
            </button>
          </div>
        </div>

        <div className="animate-rise-delay relative lg:col-span-6">
          <article className="relative rounded-[2.4rem] border border-[#9ec8ff]/28 bg-[#08152c]/85 p-6 shadow-[0_24px_70px_rgba(0,0,0,0.45)]">
            <p className="text-xs uppercase tracking-[0.2em] text-[#96c9ff]">Live render blend</p>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {['Nano Banana Pro', 'Flux 2', 'gpt-image-1.5', 'Seedream'].map((model, index) => (
                <article
                  key={model}
                  className="rounded-2xl border border-[#b2d3ff]/20 bg-[#10254a]/70 p-4 transition duration-220 hover:-translate-y-0.5 hover:border-[#cde2ff]/40"
                >
                  <p className="text-xs uppercase tracking-[0.18em] text-[#8ec5ff]">Layer {index + 1}</p>
                  <p className="mt-2 text-sm text-[#eff6ff]">{model}</p>
                </article>
              ))}
            </div>
          </article>
          <article className="absolute -bottom-7 -left-7 hidden w-52 rounded-2xl border border-[#9ec8ff]/30 bg-[#0e2144]/85 p-4 lg:block">
            <p className="text-xs uppercase tracking-[0.2em] text-[#8ec5ff]">Queue state</p>
            <p className="mt-2 text-3xl font-semibold tracking-tight text-white [font-family:'Outfit',sans-serif]">824</p>
            <p className="text-xs text-[#b9d3f6]">frames in layered render</p>
          </article>
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-6 pb-18">
        <div className="grid gap-5 md:grid-cols-2">
          {galleryTiles.map((tile, index) => (
            <article
              key={tile.id}
              className={`rounded-[2rem] border border-[#9ec8ff]/24 p-6 shadow-[0_18px_45px_rgba(0,0,0,0.35)] transition duration-220 hover:-translate-y-1 hover:border-[#c9e0ff]/40 ${
                index % 2 === 0 ? 'bg-[#0c1c39]/85' : 'bg-[#11284f]/85'
              }`}
            >
              <p className="text-xs uppercase tracking-[0.2em] text-[#9bc8fd]">Collection {tile.id}</p>
              <p className="mt-3 text-3xl text-white [font-family:'Outfit',sans-serif]">{tile.title}</p>
              <p className="mt-2 text-sm text-[#bdd4f6]">{tile.tones}</p>
              <div className="mt-5 h-36 rounded-2xl bg-[radial-gradient(circle_at_20%_20%,rgba(160,201,255,0.7),transparent_45%),radial-gradient(circle_at_78%_36%,rgba(59,130,246,0.7),transparent_42%),linear-gradient(120deg,#122343_10%,#0a1327_90%)]" />
            </article>
          ))}
        </div>
      </section>

      <section className="relative bg-[#040a18]/85 px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-12">
          <article className="rounded-3xl border border-[#9ec8ff]/25 bg-[#091832]/80 p-6 lg:col-span-4">
            <p className="text-xs uppercase tracking-[0.2em] text-[#8ec5ff]">Before / after compare</p>
            <h2 className="mt-4 text-3xl leading-tight text-white [font-family:'Outfit',sans-serif]">
              Tune your blend point live.
            </h2>
            <p className="mt-3 text-sm text-[#bad2f2]">
              Slide from raw generation to post-processed finish and export the perfect midpoint.
            </p>
            <div className="mt-7 grid gap-3 text-sm">
              {controls.map((item) => (
                <p key={item} className="rounded-xl border border-[#a5cbf5]/18 bg-[#12284e]/70 px-3 py-2 text-[#d2e5ff]">
                  {item}
                </p>
              ))}
            </div>
          </article>

          <article className="rounded-[2rem] border border-[#9ec8ff]/24 bg-[#061126] p-5 lg:col-span-8">
            <div className="relative h-[340px] overflow-hidden rounded-2xl border border-[#9ec8ff]/24">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(76,161,255,0.85),transparent_43%),radial-gradient(circle_at_70%_75%,rgba(147,197,253,0.55),transparent_46%),linear-gradient(140deg,#11315f_0%,#06122a_100%)]" />
              <div
                className="absolute inset-0 border-r border-white/25 bg-[radial-gradient(circle_at_60%_20%,rgba(255,244,214,0.8),transparent_40%),radial-gradient(circle_at_50%_70%,rgba(251,191,36,0.55),transparent_38%),linear-gradient(130deg,#40220f_0%,#0b1225_100%)]"
                style={{ clipPath: `inset(0 ${100 - split}% 0 0)` }}
              />
              <div className="absolute inset-y-0" style={{ left: `${split}%` }}>
                <div className="absolute -left-0.5 h-full w-px bg-white/80" />
                <div className="absolute left-[-18px] top-1/2 h-9 w-9 -translate-y-1/2 rounded-full border border-white/65 bg-white/25 backdrop-blur" />
              </div>
              <div className="absolute bottom-4 left-4 rounded-full bg-black/45 px-3 py-1 text-xs uppercase tracking-[0.2em] text-[#d6e7ff]">
                Raw blend
              </div>
              <div className="absolute bottom-4 right-4 rounded-full bg-black/45 px-3 py-1 text-xs uppercase tracking-[0.2em] text-[#d6e7ff]">
                Final polish
              </div>
            </div>
            <input
              type="range"
              min={15}
              max={85}
              value={split}
              onChange={(event) => setSplit(Number(event.target.value))}
              className="mt-5 w-full accent-[#9bd0ff]"
              aria-label="Compare generated image and edited image"
            />
          </article>
        </div>
      </section>

      <section className="border-t border-[#9ec8ff]/25 bg-[#050e1f] px-6 py-16">
        <div className="mx-auto flex max-w-7xl flex-col gap-7 rounded-[2rem] border border-[#9ec8ff]/24 bg-[#0a1731] p-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-xl">
            <p className="text-xs uppercase tracking-[0.2em] text-[#8ec5ff]">Single monthly membership</p>
            <h2 className="mt-3 text-4xl leading-tight text-white [font-family:'Outfit',sans-serif]">
              All image models. One layered canvas.
            </h2>
          </div>
          <div className="text-right">
            <p className="text-xs uppercase tracking-[0.2em] text-[#99c8ff]">Pro Studio</p>
            <p className="mt-2 text-5xl font-semibold text-white [font-family:'Outfit',sans-serif]">$39</p>
            <p className="text-sm text-[#bdd5f6]">Monthly, unlimited creative routing.</p>
          </div>
        </div>
      </section>
    </main>
  )
}
