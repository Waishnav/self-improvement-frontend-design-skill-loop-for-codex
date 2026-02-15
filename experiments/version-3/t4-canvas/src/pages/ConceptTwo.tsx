import { useState } from 'react'

const chapters = [
  {
    title: 'Direct four engines with one editorial voice.',
    copy: 'Lock tone, framing, palette, and storytelling constraints once. T4 Canvas translates them into model-native instructions.',
    points: ['Direction templates', 'Prompt variants', 'Style memory'],
  },
  {
    title: 'Review images in quiet, critique-first layouts.',
    copy: 'Move through full-bleed comparisons, annotate intent, and approve without exposing clients to control overload.',
    points: ['Side-by-side review', 'Inline notes', 'Stakeholder mode'],
  },
  {
    title: 'Keep production on a single predictable bill.',
    copy: 'No separate subscriptions for Nano Banana Pro, Flux 2, gpt-image-1.5, and Seedream. Everything ships inside one membership.',
    points: ['Flat monthly fee', 'Team seats', 'Usage rights'],
  },
]

const rows = [
  {
    model: 'Nano Banana Pro',
    profile: 'Narrative portrait continuity',
    notes: 'Strong under iterative character revisions',
  },
  {
    model: 'Flux 2',
    profile: 'Photoreal product storytelling',
    notes: 'Reliable specular highlights and texture detail',
  },
  {
    model: 'gpt-image-1.5',
    profile: 'Concept sprint ideation',
    notes: 'Fast composition passes with clean typography',
  },
  {
    model: 'Seedream',
    profile: 'Atmospheric campaign art',
    notes: 'Expressive tone shifts with cinematic color mood',
  },
]

export function ConceptTwo() {
  const [lens, setLens] = useState<'creative' | 'finance'>('creative')

  return (
    <main className="bg-[#f5efe4] text-[#1c140d]">
      <section className="relative overflow-hidden px-6 pb-20 pt-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_86%_14%,rgba(138,90,50,0.18),transparent_30%),radial-gradient(circle_at_12%_92%,rgba(62,110,96,0.16),transparent_34%)]" />
        <div className="relative mx-auto max-w-5xl text-center">
          <p className="font-public text-xs tracking-[0.22em] text-[#6b5a49]">T4 CANVAS ATELIER BRIEF</p>
          <h1 className="mt-5 font-fraunces text-5xl leading-[0.9] text-balance sm:text-6xl md:text-7xl">
            Image direction,
            <span className="block font-instrument italic text-[#7f4f2b]">written like a manifesto.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl font-public text-base text-[#3f3125] sm:text-lg">
            Generate and edit with Nano Banana Pro, Flux 2, gpt-image-1.5, and Seedream in one flat-fee editorial studio.
          </p>

          <div className="mx-auto mt-8 flex w-fit rounded-full border border-[#1c140d]/20 bg-white/70 p-1">
            {(['creative', 'finance'] as const).map((item) => (
              <button
                key={item}
                onClick={() => setLens(item)}
                className={[
                  'rounded-full px-5 py-2 font-public text-xs font-semibold tracking-[0.14em] transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1c140d]',
                  lens === item
                    ? 'bg-[#1c140d] text-[#f7f0e6]'
                    : 'text-[#3f3125] hover:bg-[#1c140d]/10',
                ].join(' ')}
              >
                {item === 'creative' ? 'CREATIVE LENS' : 'FINANCE LENS'}
              </button>
            ))}
          </div>

          <div className="mt-7 grid gap-3 sm:grid-cols-3">
            {lens === 'creative' ? (
              <>
                <article className="rounded-2xl border border-[#1c140d]/14 bg-white/75 p-4 text-left">
                  <p className="font-public text-xs tracking-[0.16em] text-[#725d4a]">VOICE</p>
                  <p className="mt-2 font-fraunces text-2xl">Consistent</p>
                </article>
                <article className="rounded-2xl border border-[#1c140d]/14 bg-white/75 p-4 text-left">
                  <p className="font-public text-xs tracking-[0.16em] text-[#725d4a]">CRITIQUE</p>
                  <p className="mt-2 font-fraunces text-2xl">Focused</p>
                </article>
                <article className="rounded-2xl border border-[#1c140d]/14 bg-white/75 p-4 text-left">
                  <p className="font-public text-xs tracking-[0.16em] text-[#725d4a]">OUTPUT</p>
                  <p className="mt-2 font-fraunces text-2xl">Publishable</p>
                </article>
              </>
            ) : (
              <>
                <article className="rounded-2xl border border-[#1c140d]/14 bg-white/75 p-4 text-left">
                  <p className="font-public text-xs tracking-[0.16em] text-[#725d4a]">INVOICE</p>
                  <p className="mt-2 font-fraunces text-2xl">$39 flat</p>
                </article>
                <article className="rounded-2xl border border-[#1c140d]/14 bg-white/75 p-4 text-left">
                  <p className="font-public text-xs tracking-[0.16em] text-[#725d4a]">OVERAGES</p>
                  <p className="mt-2 font-fraunces text-2xl">None</p>
                </article>
                <article className="rounded-2xl border border-[#1c140d]/14 bg-white/75 p-4 text-left">
                  <p className="font-public text-xs tracking-[0.16em] text-[#725d4a]">TOOLS</p>
                  <p className="mt-2 font-fraunces text-2xl">All included</p>
                </article>
              </>
            )}
          </div>
        </div>
      </section>

      <section className="border-y border-[#1c140d]/14 bg-[#faf5ec]">
        <div className="mx-auto max-w-6xl overflow-hidden py-4">
          <div className="animate-marquee whitespace-nowrap font-public text-xs tracking-[0.26em] text-[#705b47]">
            NANO BANANA PRO • FLUX 2 • GPT-IMAGE-1.5 • SEEDREAM • SINGLE EDITORIAL SURFACE • FLAT MEMBERSHIP •
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10">
        {chapters.map((chapter, index) => (
          <article
            key={chapter.title}
            className="grid gap-8 border-b border-[#1c140d]/15 py-11 lg:grid-cols-[270px_minmax(0,1fr)]"
          >
            <div className="self-start lg:sticky lg:top-24">
              <p className="font-public text-xs tracking-[0.18em] text-[#7a6652]">CHAPTER {index + 1}</p>
              <h2 className="mt-4 font-fraunces text-4xl leading-[0.95] sm:text-[2.6rem]">{chapter.title}</h2>
            </div>

            <div>
              <p className="max-w-2xl font-public text-lg leading-relaxed text-[#2f251d]">{chapter.copy}</p>
              <div className="mt-5 grid gap-3 sm:grid-cols-3">
                {chapter.points.map((point) => (
                  <div key={point} className="rounded-2xl border border-[#1c140d]/12 bg-white/75 p-4">
                    <p className="font-public text-sm tracking-[0.06em] text-[#35291f]">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="overflow-hidden rounded-[2rem] border border-[#1c140d]/16 bg-white shadow-[0_20px_45px_rgba(38,27,16,0.08)]">
          <div className="border-b border-[#1c140d]/12 px-6 py-5 font-public text-xs tracking-[0.2em] text-[#6d5a48]">
            MODEL EDITORIAL TABLE
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse text-left">
              <thead className="bg-[#f8f2e8] font-public text-xs tracking-[0.14em] text-[#6c5a49]">
                <tr>
                  <th className="px-6 py-4">MODEL</th>
                  <th className="px-6 py-4">EDITORIAL PROFILE</th>
                  <th className="px-6 py-4">NOTES</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr key={row.model} className="border-t border-[#1c140d]/10 font-public text-sm text-[#2f251b]">
                    <td className="px-6 py-4 font-semibold">{row.model}</td>
                    <td className="px-6 py-4">{row.profile}</td>
                    <td className="px-6 py-4">{row.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="bg-[#1f1610] px-6 py-16 text-[#f8f1e9]">
        <div className="mx-auto flex max-w-6xl flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="font-public text-xs tracking-[0.22em] text-[#ccb9a4]">MEMBERSHIP OFFER</p>
            <h3 className="mt-3 font-fraunces text-5xl leading-[0.9] sm:text-6xl">One fee. Every engine. Every edit tool.</h3>
            <p className="mt-4 max-w-2xl font-public text-sm text-[#decfbe] sm:text-base">
              $39 per month for the complete T4 Canvas studio, including all model access and commercial production workflows.
            </p>
          </div>
          <button className="rounded-full bg-[#f6ecdf] px-8 py-3 font-public text-xs font-semibold tracking-[0.16em] text-[#1f1610] transition hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f6ecdf]">
            ENTER THE ATELIER
          </button>
        </div>
      </section>

      <footer className="border-t border-[#f6ecdf]/14 bg-[#1f1610] px-6 py-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 font-public text-xs tracking-[0.12em] text-[#baa58f] sm:flex-row sm:items-center sm:justify-between">
          <p>T4 CANVAS</p>
          <p>Built for image teams that treat AI output as craft.</p>
        </div>
      </footer>
    </main>
  )
}
