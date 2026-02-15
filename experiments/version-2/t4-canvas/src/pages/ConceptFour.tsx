import { useMemo, useState } from 'react'

const models = [
  {
    id: 'nano',
    name: 'Nano Banana Pro',
    tone: 'Character consistency with luxurious lighting control.',
    palette: 'from-[#0f4b4f] via-[#1f8474] to-[#f4f5d4]',
    strength: 'Portrait direction',
  },
  {
    id: 'flux',
    name: 'Flux 2',
    tone: 'Photoreal product surfaces with controlled reflections.',
    palette: 'from-[#1f365c] via-[#4f70a8] to-[#d9edff]',
    strength: 'Studio realism',
  },
  {
    id: 'gpt',
    name: 'gpt-image-1.5',
    tone: 'Rapid campaign ideation with strong type composition.',
    palette: 'from-[#5d2e6e] via-[#a85fbf] to-[#ffe7ff]',
    strength: 'Fast concepting',
  },
  {
    id: 'seedream',
    name: 'Seedream',
    tone: 'Dreamlike art direction for bolder mood campaigns.',
    palette: 'from-[#5a2f18] via-[#b26d3c] to-[#ffe6c9]',
    strength: 'Mood-heavy visuals',
  },
]

const galleryTiles = [
  'Campaign stills',
  'Fashion composites',
  'Product hero frames',
  'Environment sketches',
  'Packaging explorations',
  'Social cutdowns',
]

export function ConceptFour() {
  const [activeModel, setActiveModel] = useState(models[0])
  const [split, setSplit] = useState(56)

  const splitStyle = useMemo(
    () => ({
      clipPath: `inset(0 ${100 - split}% 0 0)`,
    }),
    [split],
  )

  return (
    <main className="overflow-hidden bg-[#e9f3ec] text-[#102219]">
      <section className="relative px-6 pb-16 pt-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_12%,rgba(31,132,116,0.24),transparent_32%),radial-gradient(circle_at_8%_88%,rgba(86,133,217,0.16),transparent_34%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-end">
          <div>
            <p className="font-bricolage text-xs tracking-[0.24em] text-[#1f5f4f]">T4 CANVAS GALLERY MODE</p>
            <h1 className="mt-4 font-bricolage text-5xl font-semibold leading-[0.9] text-balance sm:text-6xl lg:text-7xl">
              Curate high-volume image worlds without losing artistry.
            </h1>
            <p className="mt-5 max-w-xl font-manrope text-base text-[#1b372d] sm:text-lg">
              Generate, edit, and compare Nano Banana Pro, Flux 2, gpt-image-1.5, and Seedream outputs in one flat-fee visual studio.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <button className="rounded-full bg-[#102219] px-7 py-3 font-manrope text-xs font-semibold tracking-[0.16em] text-[#f2fff7] transition hover:bg-[#19392b] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#102219]">
                OPEN GALLERY
              </button>
              <button className="rounded-full border border-[#102219]/30 px-7 py-3 font-manrope text-xs font-semibold tracking-[0.16em] text-[#102219] transition hover:bg-white/50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#102219]">
                VIEW CASES
              </button>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="animate-float-y rounded-[1.8rem] border border-white/70 bg-gradient-to-br from-[#0e7f7d] to-[#8ed4cb] p-5 text-white shadow-xl">
              <p className="font-manrope text-xs tracking-[0.14em] text-white/75">FEATURED COLLECTION</p>
              <p className="mt-2 font-bricolage text-2xl">Autumn streetwear atlas</p>
            </div>
            <div className="rounded-[1.8rem] border border-[#103225]/15 bg-white/75 p-5 shadow-lg">
              <p className="font-manrope text-xs tracking-[0.14em] text-[#2d5445]">PROCESS</p>
              <p className="mt-2 font-bricolage text-2xl">Brief / render / refine / deliver</p>
            </div>
            <div className="rounded-[1.8rem] border border-[#103225]/15 bg-white/75 p-5 shadow-lg sm:col-span-2">
              <p className="font-manrope text-xs tracking-[0.14em] text-[#2d5445]">ACTIVE MEMBERS</p>
              <p className="mt-2 font-bricolage text-3xl">18,400 creators shaping campaigns daily</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {galleryTiles.map((tile, index) => (
            <article
              key={tile}
              className={[
                'group rounded-3xl border border-[#113327]/12 p-5 transition hover:-translate-y-1 hover:bg-white/80',
                index % 2 === 0 ? 'bg-white/65' : 'bg-[#dff0e8]',
              ].join(' ')}
            >
              <p className="font-manrope text-xs tracking-[0.14em] text-[#315c4d]">COLLECTION {index + 1}</p>
              <h2 className="mt-2 font-bricolage text-2xl text-[#13281f]">{tile}</h2>
              <div className="mt-4 h-28 rounded-2xl border border-[#123729]/15 bg-gradient-to-br from-white/80 to-[#b8ddd1] transition group-hover:from-[#fff] group-hover:to-[#d0eee6]" />
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#0f1e17] px-6 py-18 text-[#ecf8f2]">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_1fr]">
          <div>
            <p className="font-manrope text-xs tracking-[0.2em] text-[#9ed0bf]">MODEL SPOTLIGHT</p>
            <h3 className="mt-3 font-bricolage text-4xl sm:text-5xl">Switch engines, preserve creative intent.</h3>
            <p className="mt-4 max-w-xl font-manrope text-sm text-[#c6e5da] sm:text-base">Interactive compare surface for rapid style decisions and production-level continuity.</p>

            <div className="mt-6 grid gap-2">
              {models.map((model) => (
                <button
                  key={model.id}
                  onClick={() => setActiveModel(model)}
                  className={[
                    'rounded-2xl border px-4 py-3 text-left transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b4f0db]',
                    activeModel.id === model.id
                      ? 'border-[#b5f3dd] bg-[#173127]'
                      : 'border-[#2f4f41] hover:border-[#5e8f7c] hover:bg-[#152a22]',
                  ].join(' ')}
                >
                  <p className="font-bricolage text-xl">{model.name}</p>
                  <p className="font-manrope text-sm text-[#b5d8cc]">{model.strength}</p>
                </button>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-[#2f4d40] bg-[#0c1713] p-6">
            <div className={`h-52 rounded-3xl bg-gradient-to-br ${activeModel.palette}`} />
            <h4 className="mt-5 font-bricolage text-3xl">{activeModel.name}</h4>
            <p className="mt-3 font-manrope text-sm text-[#bbded0]">{activeModel.tone}</p>
            <div className="mt-5 grid grid-cols-2 gap-3">
              <div className="rounded-2xl border border-[#355847] bg-[#11241b] p-4">
                <p className="font-manrope text-xs tracking-[0.14em] text-[#89b7a8]">BEST AT</p>
                <p className="mt-2 font-bricolage text-xl">{activeModel.strength}</p>
              </div>
              <div className="rounded-2xl border border-[#355847] bg-[#11241b] p-4">
                <p className="font-manrope text-xs tracking-[0.14em] text-[#89b7a8]">MEMBERSHIP</p>
                <p className="mt-2 font-bricolage text-xl">Included</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-18">
        <div className="rounded-[2rem] border border-[#113126]/15 bg-white/75 p-6 sm:p-8">
          <p className="font-manrope text-xs tracking-[0.2em] text-[#396757]">COMPARE SLIDER</p>
          <h3 className="mt-3 font-bricolage text-4xl text-[#12251c] sm:text-5xl">Blend realism and fantasy with precision.</h3>

          <div className="relative mt-7 overflow-hidden rounded-3xl border border-[#153e30]/20 bg-[#12362b]">
            <div className="aspect-[16/9] bg-gradient-to-br from-[#1e6f5f] to-[#b8e7d8]" />
            <div className="absolute inset-0 bg-gradient-to-br from-[#4e6eb2] to-[#e5eeff]" style={splitStyle} />
            <div className="absolute inset-y-0" style={{ left: `${split}%` }}>
              <div className="h-full w-px bg-white/80" />
            </div>
            <div className="absolute left-4 top-4 rounded-full bg-black/45 px-3 py-1 font-manrope text-xs tracking-[0.14em] text-white">
              BASE DIRECTION
            </div>
            <div className="absolute right-4 top-4 rounded-full bg-black/45 px-3 py-1 font-manrope text-xs tracking-[0.14em] text-white">
              STYLE OVERLAY
            </div>
          </div>

          <label className="mt-6 block font-manrope text-xs tracking-[0.16em] text-[#355b4e]" htmlFor="compare-split">
            STYLE MIX
          </label>
          <input
            id="compare-split"
            type="range"
            min={15}
            max={85}
            value={split}
            onChange={(event) => setSplit(Number(event.target.value))}
            className="mt-2 h-2 w-full cursor-pointer appearance-none rounded-full bg-[#9ecfbe] accent-[#205540]"
          />
        </div>
      </section>

      <section className="bg-[#102218] px-6 py-14 text-[#f0fef5]">
        <div className="mx-auto flex max-w-7xl flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="font-manrope text-xs tracking-[0.22em] text-[#9ed0bf]">FLAT MEMBERSHIP</p>
            <h3 className="mt-3 font-bricolage text-4xl sm:text-5xl">$39 monthly for every model and edit tool.</h3>
          </div>
          <button className="rounded-full bg-[#e7fff4] px-7 py-3 font-manrope text-xs font-semibold tracking-[0.16em] text-[#102218] transition hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
            START CREATING
          </button>
        </div>
      </section>
    </main>
  )
}
