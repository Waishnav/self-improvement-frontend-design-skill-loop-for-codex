import { useState } from 'react'

const chapters = [
  {
    title: 'Write one brief for every model.',
    copy: 'T4 Canvas keeps one editorial voice while translating direction to Nano Banana Pro, Flux 2, gpt-image-1.5, and Seedream automatically.',
    tags: ['Style memory', 'Reference lock', 'Prompt variants'],
  },
  {
    title: 'Review in quiet, critique-first spaces.',
    copy: 'Teams compare full-frame output, annotate intent, and approve with less noise than generic AI dashboards.',
    tags: ['Split review', 'Inline notes', 'Stakeholder mode'],
  },
  {
    title: 'Run everything on one predictable bill.',
    copy: 'No fragmented subscriptions. Every model and editing tool ships under one monthly membership.',
    tags: ['Flat fee', 'Team seats', 'Commercial rights'],
  },
]

const modelRows = [
  {
    model: 'Nano Banana Pro',
    profile: 'Character continuity and expression control',
    result: 'Strong over long revision arcs',
  },
  {
    model: 'Flux 2',
    profile: 'Photoreal product storytelling',
    result: 'Reliable surface and lighting behavior',
  },
  {
    model: 'gpt-image-1.5',
    profile: 'Fast concept sprint iterations',
    result: 'High throughput for campaign exploration',
  },
  {
    model: 'Seedream',
    profile: 'Atmospheric cinematic direction',
    result: 'Expressive color mood transitions',
  },
]

export function ConceptTwo() {
  const [lens, setLens] = useState<'creative' | 'finance'>('creative')

  return (
    <main className="bg-[#f6efe2] text-[#20160f]">
      <section className="relative overflow-hidden px-6 pb-20 pt-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_86%_12%,rgba(130,88,51,0.2),transparent_30%),radial-gradient(circle_at_14%_92%,rgba(66,110,95,0.16),transparent_35%)]" />

        <div className="relative mx-auto max-w-5xl text-center">
          <p className="font-public text-xs tracking-[0.22em] text-[#6f5a47]">T4 CANVAS EDITORIAL CORE</p>
          <h1 className="mt-5 font-fraunces text-5xl leading-[0.9] text-balance sm:text-6xl md:text-7xl">
            Direct image generation
            <span className="block font-instrument italic text-[#7f4b2a]">like a modern magazine desk.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl font-public text-base text-[#3e2f25] sm:text-lg">
            One studio for generation and editing across all four engines, with one flat monthly price.
          </p>

          <div className="mx-auto mt-8 flex w-fit rounded-full border border-[#24170f]/20 bg-white/75 p-1">
            {(['creative', 'finance'] as const).map((item) => (
              <button
                key={item}
                onClick={() => setLens(item)}
                className={[
                  'rounded-full px-5 py-2 font-public text-xs font-semibold tracking-[0.14em] transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#20160f]',
                  lens === item ? 'bg-[#20160f] text-[#f8f1e8]' : 'text-[#463429] hover:bg-[#20160f]/10',
                ].join(' ')}
              >
                {item === 'creative' ? 'CREATIVE LENS' : 'FINANCE LENS'}
              </button>
            ))}
          </div>

          <div className="mt-7 grid gap-3 sm:grid-cols-3">
            {lens === 'creative' ? (
              <>
                <article className="rounded-2xl border border-[#20160f]/14 bg-white/75 p-4 text-left">
                  <p className="font-public text-xs tracking-[0.16em] text-[#786350]">VOICE</p>
                  <p className="mt-2 font-fraunces text-2xl">Consistent</p>
                </article>
                <article className="rounded-2xl border border-[#20160f]/14 bg-white/75 p-4 text-left">
                  <p className="font-public text-xs tracking-[0.16em] text-[#786350]">CRITIQUE</p>
                  <p className="mt-2 font-fraunces text-2xl">Focused</p>
                </article>
                <article className="rounded-2xl border border-[#20160f]/14 bg-white/75 p-4 text-left">
                  <p className="font-public text-xs tracking-[0.16em] text-[#786350]">OUTPUT</p>
                  <p className="mt-2 font-fraunces text-2xl">Publishable</p>
                </article>
              </>
            ) : (
              <>
                <article className="rounded-2xl border border-[#20160f]/14 bg-white/75 p-4 text-left">
                  <p className="font-public text-xs tracking-[0.16em] text-[#786350]">PLAN</p>
                  <p className="mt-2 font-fraunces text-2xl">$39 flat</p>
                </article>
                <article className="rounded-2xl border border-[#20160f]/14 bg-white/75 p-4 text-left">
                  <p className="font-public text-xs tracking-[0.16em] text-[#786350]">OVERAGES</p>
                  <p className="mt-2 font-fraunces text-2xl">None</p>
                </article>
                <article className="rounded-2xl border border-[#20160f]/14 bg-white/75 p-4 text-left">
                  <p className="font-public text-xs tracking-[0.16em] text-[#786350]">MODELS</p>
                  <p className="mt-2 font-fraunces text-2xl">All included</p>
                </article>
              </>
            )}
          </div>
        </div>
      </section>

      <section className="border-y border-[#20160f]/14 bg-[#fcf7ef]">
        <div className="mx-auto max-w-6xl overflow-hidden py-4">
          <div className="animate-marquee whitespace-nowrap font-public text-xs tracking-[0.26em] text-[#725d4a]">
            NANO BANANA PRO • FLUX 2 • GPT-IMAGE-1.5 • SEEDREAM • EDITORIAL ROUTING • SINGLE MEMBERSHIP •
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10">
        {chapters.map((chapter, index) => (
          <article key={chapter.title} className="grid gap-8 border-b border-[#20160f]/15 py-11 lg:grid-cols-[260px_minmax(0,1fr)]">
            <div className="self-start lg:sticky lg:top-24">
              <p className="font-public text-xs tracking-[0.18em] text-[#7b6652]">CHAPTER {index + 1}</p>
              <h2 className="mt-4 font-fraunces text-4xl leading-[0.95] sm:text-[2.6rem]">{chapter.title}</h2>
            </div>

            <div>
              <p className="max-w-2xl font-public text-lg leading-relaxed text-[#31261d]">{chapter.copy}</p>
              <div className="mt-5 grid gap-3 sm:grid-cols-3">
                {chapter.tags.map((tag) => (
                  <div key={tag} className="rounded-2xl border border-[#20160f]/12 bg-white/75 p-4">
                    <p className="font-public text-sm tracking-[0.06em] text-[#362a20]">{tag}</p>
                  </div>
                ))}
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="overflow-hidden rounded-[2rem] border border-[#20160f]/15 bg-white shadow-[0_20px_45px_rgba(38,27,16,0.08)]">
          <div className="border-b border-[#20160f]/12 px-6 py-5 font-public text-xs tracking-[0.2em] text-[#6e5a48]">
            MODEL EDITORIAL TABLE
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse text-left">
              <thead className="bg-[#f8f2e8] font-public text-xs tracking-[0.14em] text-[#6d5a49]">
                <tr>
                  <th className="px-6 py-4">MODEL</th>
                  <th className="px-6 py-4">PROFILE</th>
                  <th className="px-6 py-4">PRODUCTION RESULT</th>
                </tr>
              </thead>
              <tbody>
                {modelRows.map((row) => (
                  <tr key={row.model} className="border-t border-[#20160f]/10 font-public text-sm text-[#2f251b]">
                    <td className="px-6 py-4 font-semibold">{row.model}</td>
                    <td className="px-6 py-4">{row.profile}</td>
                    <td className="px-6 py-4">{row.result}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="relative bg-[#21170f] px-6 py-16 text-[#f8f1e9]">
        <div className="pointer-events-none absolute -left-8 top-7 hidden rotate-[-7deg] rounded-xl border border-[#f8f1e9]/30 bg-[#2a1e15] px-4 py-2 font-public text-[10px] tracking-[0.18em] text-[#decfbf] md:block">
          OFF-GRID NOTE: BUILT FOR POWER USERS
        </div>

        <div className="mx-auto flex max-w-6xl flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="font-public text-xs tracking-[0.22em] text-[#ccb9a4]">MEMBERSHIP CTA</p>
            <h3 className="mt-3 font-fraunces text-5xl leading-[0.9] sm:text-6xl">One fee. Every model. Every edit tool.</h3>
            <p className="mt-4 max-w-2xl font-public text-sm text-[#decfbe] sm:text-base">
              T4 Canvas runs on $39 per month for generation, editing, comparison workflows, and team collaboration.
            </p>
          </div>
          <button className="rounded-full bg-[#f6ecdf] px-8 py-3 font-public text-xs font-semibold tracking-[0.16em] text-[#1f1610] transition hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f6ecdf]">
            ENTER THE EDITORIAL STUDIO
          </button>
        </div>
      </section>

      <footer className="border-t border-[#f6ecdf]/14 bg-[#21170f] px-6 py-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 font-public text-xs tracking-[0.12em] text-[#baa58f] sm:flex-row sm:items-center sm:justify-between">
          <p>T4 CANVAS</p>
          <p>Image generation membership for teams that care about direction.</p>
        </div>
      </footer>
    </main>
  )
}
