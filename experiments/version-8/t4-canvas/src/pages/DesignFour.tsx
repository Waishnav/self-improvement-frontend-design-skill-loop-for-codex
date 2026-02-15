import { useMemo, useState } from 'react'

type ModelKey = 'banana' | 'flux' | 'gpt' | 'seedream'

const models: Record<
  ModelKey,
  {
    name: string
    vibe: string
    summary: string
    chips: string[]
    palette: string
  }
> = {
  banana: {
    name: 'Nano Banana Pro',
    vibe: 'Rapid ideation with polished defaults',
    summary: 'Perfect for discovering visual directions fast before committing budget to deeper renders.',
    chips: ['concept sprint', 'style anchors', 'fast variants'],
    palette: 'from-[#4ec4ff] via-[#44ffd9] to-[#a5ff85]',
  },
  flux: {
    name: 'Flux 2',
    vibe: 'Compositional precision and cinematic structure',
    summary: 'Dial in camera, spacing, and geometry when layout fidelity matters more than stylistic drift.',
    chips: ['camera control', 'pose lock', 'framing discipline'],
    palette: 'from-[#67a0ff] via-[#9475ff] to-[#6ef4ff]',
  },
  gpt: {
    name: 'gpt-image-1.5',
    vibe: 'Repair and contextual edit engine',
    summary: 'Patch artifacts, rewrite prompts, and preserve scene consistency while refining details.',
    chips: ['smart inpaint', 'prompt rewrite', 'cleanup pass'],
    palette: 'from-[#76d7ff] via-[#7ce2ff] to-[#a8fff5]',
  },
  seedream: {
    name: 'Seedream',
    vibe: 'Signature style finishing and grade control',
    summary: 'Push expressive palettes and textured output for final campaign-ready visual language.',
    chips: ['style polish', 'texture blend', 'final grade'],
    palette: 'from-[#57e8ff] via-[#4dcbff] to-[#66f8bf]',
  },
}

const mosaicTiles = [
  {
    title: 'Streetwear Drop',
    ratio: 'sm:col-span-2 sm:row-span-2',
    gradient: 'from-[#43d0ff]/75 via-[#3556ff]/55 to-[#08143f]',
  },
  {
    title: 'Retro Sci-Fi Poster',
    ratio: '',
    gradient: 'from-[#54ffcf]/70 via-[#2cc5ff]/50 to-[#0a1d52]',
  },
  {
    title: 'Luxury Product Macro',
    ratio: '',
    gradient: 'from-[#7b9cff]/70 via-[#3fd5ff]/55 to-[#0d2b64]',
  },
  {
    title: 'Architectural Scene',
    ratio: '',
    gradient: 'from-[#40d4ff]/70 via-[#2f81ff]/45 to-[#132c6f]',
  },
  {
    title: 'Campaign Portrait',
    ratio: 'sm:col-span-2',
    gradient: 'from-[#74ffe2]/70 via-[#48a5ff]/45 to-[#0e2455]',
  },
]

export function DesignFour() {
  const [activeModel, setActiveModel] = useState<ModelKey>('banana')
  const [split, setSplit] = useState(58)

  const model = useMemo(() => models[activeModel], [activeModel])

  return (
    <div className="theme-four min-h-screen overflow-x-clip bg-[#050d1e] text-[#e5f8ff]">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_18%_22%,rgba(65,225,255,0.24),transparent_36%),radial-gradient(circle_at_82%_18%,rgba(90,133,255,0.21),transparent_38%),linear-gradient(180deg,#071227,#030914)]" />

      <main className="mx-auto max-w-7xl px-5 pb-32 pt-8 sm:px-10">
        <header className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="font-[Sora] text-xs uppercase tracking-[0.3em] text-cyan-200/75">T4 Canvas // Gallery First</p>
            <p className="mt-2 font-[Sora] text-lg text-white">Build image systems, not isolated renders.</p>
          </div>
          <button className="rounded-full border border-cyan-100/40 bg-cyan-300/15 px-5 py-2 text-xs uppercase tracking-[0.2em] text-cyan-100 transition hover:bg-cyan-300/25 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-100">
            Join The Beta
          </button>
        </header>

        <section className="mt-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <article className="rounded-[2rem] border border-cyan-200/20 bg-[#0d1c36]/65 p-6 shadow-[0_20px_70px_rgba(47,199,255,0.16)] backdrop-blur-xl sm:p-8">
            <span className="inline-flex rounded-full border border-cyan-100/30 px-3 py-1 text-xs uppercase tracking-[0.2em] text-cyan-100">
              Media Hero
            </span>
            <h1 className="mt-4 max-w-[13ch] font-[Sora] text-4xl leading-tight text-white sm:text-6xl">
              Shape every campaign image from one creative cockpit.
            </h1>
            <p className="mt-4 max-w-xl text-lg text-cyan-50/90">
              Generate, compare, and refine outputs across four frontier models without leaving your momentum.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-cyan-100/20 bg-cyan-100/5 p-4">
                <p className="text-xs uppercase tracking-[0.18em] text-cyan-100/80">Projects</p>
                <p className="mt-2 text-3xl font-semibold text-white">312</p>
              </div>
              <div className="rounded-2xl border border-cyan-100/20 bg-cyan-100/5 p-4">
                <p className="text-xs uppercase tracking-[0.18em] text-cyan-100/80">Model Handoffs</p>
                <p className="mt-2 text-3xl font-semibold text-white">8.9k</p>
              </div>
              <div className="rounded-2xl border border-cyan-100/20 bg-cyan-100/5 p-4">
                <p className="text-xs uppercase tracking-[0.18em] text-cyan-100/80">Average Loop</p>
                <p className="mt-2 text-3xl font-semibold text-white">34s</p>
              </div>
            </div>
          </article>

          <article className="relative overflow-hidden rounded-[2rem] border border-cyan-200/20 bg-[#0a1832]/80 p-5 sm:p-6">
            <div className={`absolute inset-0 bg-gradient-to-br ${model.palette} opacity-35`} />
            <div className="relative">
              <p className="text-xs uppercase tracking-[0.2em] text-cyan-50/80">Spotlight Model</p>
              <h2 className="mt-2 font-[Sora] text-3xl text-white">{model.name}</h2>
              <p className="mt-2 text-cyan-50/90">{model.vibe}</p>
              <p className="mt-4 max-w-md text-sm text-cyan-50/80">{model.summary}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {model.chips.map((chip) => (
                  <span key={chip} className="rounded-full border border-cyan-100/35 bg-cyan-100/15 px-3 py-1 text-xs uppercase tracking-[0.16em] text-cyan-50">
                    {chip}
                  </span>
                ))}
              </div>
            </div>
          </article>
        </section>

        <section className="mt-14 grid auto-rows-[140px] gap-4 sm:grid-cols-3 sm:auto-rows-[170px]">
          {mosaicTiles.map((tile) => (
            <article
              key={tile.title}
              className={`group relative overflow-hidden rounded-3xl border border-cyan-100/20 ${tile.ratio}`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${tile.gradient} transition duration-300 group-hover:scale-105`} />
              <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(1,4,10,0.66),transparent)]" />
              <p className="absolute bottom-3 left-3 font-[Sora] text-sm uppercase tracking-[0.14em] text-cyan-50">{tile.title}</p>
            </article>
          ))}
        </section>

        <section className="mt-14 grid gap-7 rounded-[2rem] border border-cyan-200/20 bg-[#071226]/80 p-6 sm:p-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-cyan-100">Interactive Compare</p>
            <h2 className="mt-3 max-w-[12ch] font-[Sora] text-4xl leading-tight text-white">Switch models and preview style behavior.</h2>
            <div className="mt-5 flex flex-wrap gap-2">
              {Object.entries(models).map(([key, value]) => {
                const isActive = activeModel === key

                return (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setActiveModel(key as ModelKey)}
                    className={`rounded-full border px-3 py-2 text-xs uppercase tracking-[0.16em] transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-100 ${
                      isActive
                        ? 'border-cyan-100/70 bg-cyan-200/25 text-white'
                        : 'border-cyan-100/25 bg-cyan-100/5 text-cyan-100 hover:border-cyan-100/50'
                    }`}
                  >
                    {value.name}
                  </button>
                )
              })}
            </div>
            <p className="mt-5 text-sm text-cyan-100/80">
              Active profile: <span className="font-semibold text-white">{model.name}</span>.
            </p>
          </div>

          <div className="space-y-4">
            <div className="relative h-60 overflow-hidden rounded-2xl border border-cyan-100/25 bg-[#061022]">
              <div className="absolute inset-0 bg-gradient-to-br from-[#253bff]/40 to-[#31f7d4]/35" />
              <div
                className={`absolute inset-y-0 right-0 bg-gradient-to-br ${model.palette} transition-all duration-300`}
                style={{ width: `${100 - split}%` }}
              />
              <div
                className="absolute inset-y-0 w-px bg-white/80"
                style={{ left: `${split}%` }}
              />
              <p className="absolute left-3 top-3 text-xs uppercase tracking-[0.18em] text-cyan-100/85">Base Layout</p>
              <p className="absolute right-3 top-3 text-xs uppercase tracking-[0.18em] text-cyan-100/85">{model.name}</p>
            </div>
            <label className="flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-cyan-100/75">
              blend split
              <input
                type="range"
                min={20}
                max={80}
                value={split}
                onChange={(event) => setSplit(Number(event.target.value))}
                className="w-full accent-cyan-200"
              />
            </label>
          </div>
        </section>

        <section className="mt-14 rounded-[2rem] border border-cyan-100/30 bg-gradient-to-r from-[#0f2745] via-[#123159] to-[#0f2a40] p-7 sm:p-9">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-cyan-100/85">Membership Bar</p>
              <h2 className="mt-3 max-w-[14ch] font-[Sora] text-4xl leading-tight text-white">One monthly pass for every model in your stack.</h2>
            </div>
            <div className="rounded-2xl border border-cyan-100/30 bg-[#061327]/70 p-5 text-center">
              <p className="text-xs uppercase tracking-[0.2em] text-cyan-100/85">T4 Pro</p>
              <p className="mt-2 text-5xl font-semibold text-white">$39</p>
              <p className="text-xs uppercase tracking-[0.16em] text-cyan-100/70">flat monthly fee</p>
            </div>
          </div>
        </section>

        <footer className="mt-12 text-xs uppercase tracking-[0.2em] text-cyan-200/65">
          T4 Canvas / Gallery Ops / Unified Model Membership
        </footer>
      </main>
    </div>
  )
}
