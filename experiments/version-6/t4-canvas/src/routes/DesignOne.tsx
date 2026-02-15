import { useState } from 'react'

type ModelCard = {
  name: string
  tone: string
  speed: string
  strength: string
  palette: [string, string]
}

const modelCards: ModelCard[] = [
  {
    name: 'Nano Banana Pro',
    tone: 'Hyper-real brand photography',
    speed: '12s average render',
    strength: 'Excellent skin texture and studio-light control',
    palette: ['#f97316', '#0ea5e9'],
  },
  {
    name: 'Flux 2',
    tone: 'Stylized editorial look',
    speed: '9s average render',
    strength: 'Strong concept art consistency across large batches',
    palette: ['#22c55e', '#3b82f6'],
  },
  {
    name: 'gpt-image-1.5',
    tone: 'Prompt-accurate compositions',
    speed: '11s average render',
    strength: 'Reliable typography and layout-aware generations',
    palette: ['#ec4899', '#f59e0b'],
  },
  {
    name: 'Seedream',
    tone: 'Dreamlike mixed media',
    speed: '10s average render',
    strength: 'Expressive texture layering with surreal color language',
    palette: ['#14b8a6', '#a855f7'],
  },
]

const collectionCards = [
  {
    title: 'Campaign Frames',
    prompt: 'low-angle sneaker launch shot, chromed fog, city rain',
    className: 'lg:col-span-2 bg-[#1a2732] text-[#fef3c7]',
  },
  {
    title: 'Product Macro',
    prompt: 'watch dial reflections, soft rim light, dark velvet',
    className: 'bg-[#fef3c7] text-[#111827]',
  },
  {
    title: 'Fashion Edit',
    prompt: 'runway portrait, directional key light, subtle motion',
    className: 'bg-[#1d4ed8] text-[#dbeafe]',
  },
  {
    title: 'Packaging Scene',
    prompt: 'floating bottle, citrus slices, hard noon shadows',
    className: 'lg:col-span-2 bg-[#14532d] text-[#dcfce7]',
  },
  {
    title: 'Album Artwork',
    prompt: 'grainy collage, halftone textures, fluorescent ink',
    className: 'bg-[#7c2d12] text-[#ffedd5]',
  },
]

const pipeline = [
  'Prompt in natural language',
  'Switch model family',
  'Mask and repaint details',
  'Upscale and export sets',
]

export function DesignOne() {
  const [activeModel, setActiveModel] = useState<ModelCard>(modelCards[0])
  const [blend, setBlend] = useState(56)

  const compareMessage =
    blend < 34 ? 'Flux 2 leads' : blend > 67 ? 'gpt-image-1.5 leads' : 'Balanced blend'

  return (
    <main className="font-gallery-body overflow-x-hidden bg-[#090f14] pt-24 text-[#f8f6ef]">
      <section className="relative overflow-hidden border-b border-white/10 bg-[#0a1218]">
        <div className="absolute inset-0 opacity-75 [background:radial-gradient(circle_at_15%_20%,#0f766e66,transparent_40%),radial-gradient(circle_at_80%_30%,#fb923c55,transparent_35%),linear-gradient(120deg,#0a1218,#07090d)]" />
        <div className="relative mx-auto grid max-w-6xl gap-10 px-6 pb-20 pt-32 lg:grid-cols-[1.15fr_1fr] lg:items-center">
          <div>
            <p className="mb-5 inline-flex items-center rounded-full border border-[#f59e0b66] bg-[#f59e0b26] px-4 py-1 text-xs uppercase tracking-[0.2em] text-[#fde68a]">
              T4 Canvas Membership
            </p>
            <h1 className="font-gallery-display text-5xl leading-[0.95] text-[#fbf8f1] sm:text-6xl">
              Build visual worlds at production speed.
            </h1>
            <p className="mt-5 max-w-xl text-base text-[#d8d4ca] sm:text-lg">
              Generate, edit, and upscale with four frontier models under one monthly membership.
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {modelCards.map((model) => (
                <button
                  key={model.name}
                  type="button"
                  onClick={() => setActiveModel(model)}
                  className={[
                    'rounded-full border px-3 py-2 text-xs font-semibold uppercase tracking-[0.16em] transition duration-200',
                    activeModel.name === model.name
                      ? 'border-white/70 bg-white text-[#0b1015]'
                      : 'border-white/20 bg-white/5 text-white/70 hover:border-white/45 hover:text-white',
                  ].join(' ')}
                >
                  {model.name}
                </button>
              ))}
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              <article className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-[10px] uppercase tracking-[0.2em] text-white/55">Active Profile</p>
                <p className="mt-1 text-sm font-semibold">{activeModel.tone}</p>
              </article>
              <article className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-[10px] uppercase tracking-[0.2em] text-white/55">Speed</p>
                <p className="mt-1 text-sm font-semibold">{activeModel.speed}</p>
              </article>
              <article className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-[10px] uppercase tracking-[0.2em] text-white/55">Flat Plan</p>
                <p className="mt-1 text-sm font-semibold">Unlimited revisions</p>
              </article>
            </div>
          </div>

          <div className="relative h-[430px]">
            <article className="absolute left-1 top-0 w-[66%] rounded-3xl border border-white/15 bg-[#0f1722] p-4 shadow-2xl shadow-black/50">
              <div className="h-44 rounded-2xl [background:linear-gradient(130deg,#f97316,#0ea5e9)]" />
              <p className="mt-3 text-xs uppercase tracking-[0.17em] text-white/70">Campaign Frame A</p>
            </article>
            <article className="absolute bottom-14 right-2 w-[62%] rounded-3xl border border-white/15 bg-[#0f1722] p-4 shadow-2xl shadow-black/50">
              <div className="h-44 rounded-2xl [background:linear-gradient(120deg,#10b981,#1d4ed8)]" />
              <p className="mt-3 text-xs uppercase tracking-[0.17em] text-white/70">Repaint Pass B</p>
            </article>
            <article className="absolute bottom-0 left-7 w-[58%] rounded-3xl border border-white/15 bg-[#0f1722] p-4 shadow-2xl shadow-black/50">
              <div className="h-32 rounded-2xl [background:linear-gradient(120deg,#ec4899,#f59e0b)]" />
              <p className="mt-3 text-xs uppercase tracking-[0.17em] text-white/70">Upscale Set C</p>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-[#ece7dd] py-20 text-[#1a1d1f]">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-8 flex items-end justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[#475569]">Collection Mosaic</p>
              <h2 className="font-gallery-display mt-2 text-4xl leading-[1] sm:text-5xl">Prompt Library</h2>
            </div>
            <p className="max-w-xs text-sm text-[#334155]">Pin successful generations and relaunch them in any model family.</p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {collectionCards.map((card) => (
              <article
                key={card.title}
                className={`rounded-3xl border border-black/10 p-5 transition duration-300 hover:-translate-y-1 hover:shadow-xl ${card.className}`}
              >
                <h3 className="text-xl font-semibold">{card.title}</h3>
                <p className="mt-3 text-sm opacity-85">{card.prompt}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0f1a22] py-20 text-[#e2e8f0]">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 lg:grid-cols-[1.1fr_1fr]">
          <article className="rounded-3xl border border-white/10 bg-[#111f29] p-6">
            <p className="text-xs uppercase tracking-[0.2em] text-[#94a3b8]">Detail Spotlight</p>
            <h2 className="mt-3 font-gallery-display text-4xl leading-[0.95] text-white">{activeModel.name}</h2>
            <p className="mt-4 max-w-md text-sm text-[#cbd5e1]">{activeModel.strength}</p>
            <div
              className="mt-5 h-48 rounded-2xl"
              style={{
                background: `linear-gradient(125deg, ${activeModel.palette[0]}, ${activeModel.palette[1]})`,
              }}
            />
          </article>

          <article className="rounded-3xl border border-white/10 bg-[#111f29] p-6">
            <p className="text-xs uppercase tracking-[0.2em] text-[#94a3b8]">Workflow Rail</p>
            <ol className="mt-5 space-y-3">
              {pipeline.map((step, index) => (
                <li key={step} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/15 px-4 py-3">
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/85 text-xs font-bold text-[#0f172a]">
                    {index + 1}
                  </span>
                  <span className="text-sm text-[#e2e8f0]">{step}</span>
                </li>
              ))}
            </ol>
          </article>
        </div>
      </section>

      <section className="bg-[#f5f0e7] py-20 text-[#0f172a]">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[#64748b]">Interactive Compare</p>
              <h2 className="font-gallery-display mt-2 text-4xl leading-[1] sm:text-5xl">Blend Explorer</h2>
            </div>
            <p className="rounded-full bg-[#0f172a] px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#f8fafc]">
              {compareMessage}
            </p>
          </div>

          <div className="relative h-80 overflow-hidden rounded-3xl border border-[#33415533] bg-[#0f172a]">
            <div className="absolute inset-0 p-8 text-[#bae6fd] [background:linear-gradient(130deg,#0f172a,#1d4ed8)]">
              <p className="text-xs uppercase tracking-[0.2em] text-[#dbeafe]">Flux 2</p>
              <p className="mt-3 max-w-sm text-sm">Expressive brush shapes with kinetic lighting and broad cinematic contrast.</p>
            </div>
            <div
              className="absolute inset-0 z-20 p-8 text-[#fde68a] [background:linear-gradient(130deg,#431407,#ea580c)]"
              style={{ clipPath: `inset(0 ${100 - blend}% 0 0)` }}
            >
              <p className="text-xs uppercase tracking-[0.2em] text-[#ffedd5]">gpt-image-1.5</p>
              <p className="mt-3 max-w-sm text-sm">Sharper compositional intent with typography-safe elements and cleaner product edges.</p>
            </div>
            <div className="absolute inset-y-0 z-30 w-[2px] bg-white/90" style={{ left: `${blend}%` }} />
          </div>

          <label className="mt-5 block text-xs uppercase tracking-[0.2em] text-[#475569]" htmlFor="blend-range">
            Dial model blend
          </label>
          <input
            id="blend-range"
            type="range"
            min={0}
            max={100}
            value={blend}
            onChange={(event) => setBlend(Number(event.target.value))}
            className="mt-2 h-2 w-full cursor-ew-resize appearance-none rounded-full bg-[#cbd5e1]"
          />
        </div>
      </section>

      <section className="bg-[#fb923c] py-16 text-[#1c1917]">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-6 px-6">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-[#431407]">One Plan. Four Engines.</p>
            <h2 className="font-gallery-display mt-2 text-4xl leading-[0.95]">Ship your next visual campaign faster.</h2>
          </div>
          <button
            type="button"
            className="rounded-full bg-[#1c1917] px-6 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-[#fff7ed] transition hover:-translate-y-0.5 hover:bg-black"
          >
            Claim Studio Access
          </button>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-[#0c1116] py-8">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-6 text-xs uppercase tracking-[0.18em] text-white/60">
          <p>T4 Canvas</p>
          <p>Built for image teams scaling output weekly.</p>
        </div>
      </footer>
    </main>
  )
}
