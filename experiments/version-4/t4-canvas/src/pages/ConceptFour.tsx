import { useMemo, useState } from 'react'

const collections = [
  { title: 'Streetwear launch set', span: 'sm:col-span-2', tone: 'from-[#214e47] to-[#8ce0c8]' },
  { title: 'Fragrance worldbuilding', span: 'sm:row-span-2', tone: 'from-[#2d4e82] to-[#b8d2ff]' },
  { title: 'Packaging sprint', span: '', tone: 'from-[#5f3558] to-[#efacd8]' },
  { title: 'OOH billboard suite', span: '', tone: 'from-[#804a27] to-[#f9c58d]' },
  { title: 'Social cut-downs', span: 'sm:col-span-2', tone: 'from-[#1f4f4b] to-[#97e2ce]' },
]

const models = [
  {
    id: 'nano',
    name: 'Nano Banana Pro',
    fit: 'Character arcs and pose continuity',
    gradient: 'from-[#2b6b6f] via-[#5ebbb1] to-[#e1fbef]',
    accent: '#9de7cf',
  },
  {
    id: 'flux',
    name: 'Flux 2',
    fit: 'Material realism and lighting control',
    gradient: 'from-[#2e426e] via-[#6f94df] to-[#e3edff]',
    accent: '#b9ccff',
  },
  {
    id: 'gpt',
    name: 'gpt-image-1.5',
    fit: 'Fast ideation and typographic compositions',
    gradient: 'from-[#663e5f] via-[#c278b8] to-[#ffe8f9]',
    accent: '#f3b8e8',
  },
  {
    id: 'seedream',
    name: 'Seedream',
    fit: 'Atmospheric cinematic art direction',
    gradient: 'from-[#754724] via-[#e09a5a] to-[#ffe8cd]',
    accent: '#f6c997',
  },
]

export function ConceptFour() {
  const [activeModel, setActiveModel] = useState(models[1])
  const [split, setSplit] = useState(54)

  const splitStyle = useMemo(() => ({ clipPath: `inset(0 ${100 - split}% 0 0)` }), [split])

  return (
    <main className="overflow-hidden bg-[#e8f2ed] text-[#13241f]">
      <section className="relative px-6 pb-16 pt-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_84%_14%,rgba(56,145,132,0.24),transparent_33%),radial-gradient(circle_at_12%_88%,rgba(79,113,176,0.18),transparent_36%)]" />

        <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_1fr] lg:items-end">
          <div>
            <p className="font-chivo text-xs tracking-[0.22em] text-[#2a5f54]">T4 CANVAS GALLERY ARC</p>
            <h1 className="mt-4 font-instrument text-6xl leading-[0.88] text-balance sm:text-7xl lg:text-8xl">
              Curate image systems
              <span className="block italic text-[#1f5447]">with gallery-grade control.</span>
            </h1>
            <p className="mt-5 max-w-xl font-chivo text-base text-[#24463b] sm:text-lg">
              Generate, edit, compare, and ship across all four models in one membership built for visual teams.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <button className="rounded-full bg-[#10231e] px-8 py-3 font-chivo text-xs font-semibold tracking-[0.16em] text-[#ecfff6] transition hover:bg-[#18352d] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#10231e]">
                OPEN GALLERY
              </button>
              <button className="rounded-full border border-[#10231e]/30 px-8 py-3 font-chivo text-xs font-semibold tracking-[0.16em] text-[#10231e] transition hover:bg-white/55 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#10231e]">
                VIEW CASES
              </button>
            </div>
          </div>

          <aside className="relative rounded-[2rem] border border-[#12342b]/18 bg-white/70 p-5 shadow-xl">
            <div className="absolute -right-5 -top-5 hidden rounded-full border border-[#13372e]/20 bg-white px-4 py-2 font-chivo text-xs tracking-[0.12em] text-[#275a4f] md:block">
              OFF-GRID STUDIO TAG
            </div>
            <div className="aspect-[16/11] rounded-3xl border border-[#12382d]/15 bg-gradient-to-br from-[#1c6258] via-[#68b9a8] to-[#e8fbef]" />
            <div className="mt-4 grid grid-cols-3 gap-3">
              <div className="rounded-2xl border border-[#13372d]/14 bg-white p-3">
                <p className="font-chivo text-[10px] tracking-[0.16em] text-[#3f6e63]">ACTIVE JOBS</p>
                <p className="mt-2 font-instrument text-3xl">342</p>
              </div>
              <div className="rounded-2xl border border-[#13372d]/14 bg-white p-3">
                <p className="font-chivo text-[10px] tracking-[0.16em] text-[#3f6e63]">APPROVAL</p>
                <p className="mt-2 font-instrument text-3xl">95%</p>
              </div>
              <div className="rounded-2xl border border-[#13372d]/14 bg-white p-3">
                <p className="font-chivo text-[10px] tracking-[0.16em] text-[#3f6e63]">AVG TURN</p>
                <p className="mt-2 font-instrument text-3xl">1.5m</p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid auto-rows-[160px] gap-3 sm:grid-cols-3 sm:auto-rows-[200px]">
          {collections.map((tile, index) => (
            <article
              key={tile.title}
              className={[
                'group relative overflow-hidden rounded-3xl border border-[#13362d]/14 p-5 transition hover:-translate-y-0.5',
                tile.span,
                index % 2 === 0 ? 'bg-white/75' : 'bg-[#dceee6]',
              ].join(' ')}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${tile.tone} opacity-0 transition duration-300 group-hover:opacity-100`} />
              <div className="relative h-full">
                <p className="font-chivo text-xs tracking-[0.14em] text-[#2b574c] group-hover:text-white/80">COLLECTION {index + 1}</p>
                <h2 className="mt-2 max-w-[18ch] font-instrument text-4xl leading-[0.9] text-[#112620] group-hover:text-white">{tile.title}</h2>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#102119] px-6 py-16 text-[#eaf8f2]">
        <div className="mx-auto grid max-w-7xl gap-7 lg:grid-cols-[1fr_1fr]">
          <div>
            <p className="font-chivo text-xs tracking-[0.2em] text-[#97cbb9]">MODEL SPOTLIGHT</p>
            <h3 className="mt-3 font-instrument text-5xl leading-[0.9] sm:text-6xl">Switch engines, keep direction intact.</h3>
            <p className="mt-4 max-w-xl font-chivo text-sm text-[#bfded2] sm:text-base">
              Route each scene to the model that best matches your intent, then keep everything synchronized on one timeline.
            </p>

            <div className="mt-6 grid gap-2">
              {models.map((model) => (
                <button
                  key={model.id}
                  onClick={() => setActiveModel(model)}
                  className={[
                    'rounded-2xl border px-4 py-3 text-left transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#caf8e6]',
                    activeModel.id === model.id
                      ? 'border-[#bff7e2] bg-[#173127]'
                      : 'border-[#315548] hover:border-[#5b8f7d] hover:bg-[#142922]',
                  ].join(' ')}
                >
                  <p className="font-instrument text-3xl leading-none">{model.name}</p>
                  <p className="mt-2 font-chivo text-sm text-[#b7d8cc]">{model.fit}</p>
                </button>
              ))}
            </div>
          </div>

          <article className="rounded-[2rem] border border-[#315548] bg-[#0c1813] p-6">
            <div className={`h-52 rounded-3xl bg-gradient-to-br ${activeModel.gradient}`} />
            <h4 className="mt-5 font-instrument text-5xl leading-[0.86]">{activeModel.name}</h4>
            <p className="mt-3 font-chivo text-sm text-[#bcddd1]">{activeModel.fit}</p>
            <div className="mt-5 rounded-2xl border border-[#355b4c] bg-[#12241d] p-4">
              <p className="font-chivo text-xs tracking-[0.16em] text-[#8fb9ab]">ART-DIRECTION FIT</p>
              <div className="mt-2 h-2 rounded-full bg-[#224237]">
                <div className="h-full rounded-full" style={{ width: '93%', backgroundColor: activeModel.accent }} />
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="rounded-[2rem] border border-[#14392f]/15 bg-white/70 p-6 sm:p-8">
          <p className="font-chivo text-xs tracking-[0.2em] text-[#3d675a]">COMPARE SURFACE</p>
          <h3 className="mt-3 font-instrument text-5xl leading-[0.88] text-[#112720] sm:text-6xl">Blend realism with dream logic.</h3>

          <div className="relative mt-6 overflow-hidden rounded-3xl border border-[#153d31]/18 bg-[#153d31]">
            <div className="aspect-[16/9] bg-gradient-to-br from-[#205c53] to-[#d4f4e4]" />
            <div className="absolute inset-0 bg-gradient-to-br from-[#3a5b97] to-[#e3edff]" style={splitStyle} />
            <div className="absolute inset-y-0" style={{ left: `${split}%` }}>
              <div className="h-full w-px bg-white/85" />
            </div>
            <div className="absolute left-4 top-4 rounded-full bg-black/40 px-3 py-1 font-chivo text-xs tracking-[0.14em] text-white">
              REALISM
            </div>
            <div className="absolute right-4 top-4 rounded-full bg-black/40 px-3 py-1 font-chivo text-xs tracking-[0.14em] text-white">
              ATMOSPHERE
            </div>
          </div>

          <label className="mt-6 block font-chivo text-xs tracking-[0.16em] text-[#3b6256]" htmlFor="gallery-compare">
            MIX RATIO
          </label>
          <input
            id="gallery-compare"
            type="range"
            min={12}
            max={88}
            value={split}
            onChange={(event) => setSplit(Number(event.target.value))}
            className="mt-2 h-2 w-full cursor-pointer appearance-none rounded-full bg-[#95c9b6]"
          />
        </div>
      </section>

      <section className="bg-[#102319] px-6 py-14 text-[#effff6]">
        <div className="mx-auto flex max-w-7xl flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="font-chivo text-xs tracking-[0.22em] text-[#98cab9]">FLAT MEMBERSHIP</p>
            <h3 className="mt-3 font-instrument text-5xl leading-[0.88] sm:text-6xl">$39 monthly. All models unlocked.</h3>
          </div>
          <button className="rounded-full bg-[#e9fff4] px-8 py-3 font-chivo text-xs font-semibold tracking-[0.16em] text-[#102319] transition hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
            START CREATING
          </button>
        </div>
      </section>
    </main>
  )
}
