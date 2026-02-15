import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'

type ChapterId = 'seed' | 'shape' | 'ship'

const chapters: {
  id: ChapterId
  index: string
  title: string
  summary: string
  metric: string
}[] = [
  {
    id: 'seed',
    index: '01',
    title: 'Seed the visual narrative',
    summary: 'Set campaign tone, references, and composition constraints.',
    metric: 'Prompt confidence +34%',
  },
  {
    id: 'shape',
    index: '02',
    title: 'Shape multi-model output',
    summary: 'Run all models in parallel and review synchronized variants.',
    metric: 'Revision rounds -41%',
  },
  {
    id: 'ship',
    index: '03',
    title: 'Ship scene-to-channel bundles',
    summary: 'Export launch packs with prompt history and handoff metadata.',
    metric: 'Time-to-publish 2.1h',
  },
]

export function RouteFour() {
  const [chapter, setChapter] = useState<ChapterId>('seed')

  const active = useMemo(
    () => chapters.find((item) => item.id === chapter) ?? chapters[0],
    [chapter],
  )

  return (
    <main className="font-body-4 min-h-screen bg-[#fbf6ee] text-[#2c1f15]">
      <header className="sticky top-0 z-20 border-b border-[#d9c6b3] bg-[#fbf6ee]/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
          <Link
            to="/"
            className="font-display-4 text-2xl leading-none text-[#3d2a1c] transition hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#8a6f54]"
          >
            T4 Canvas
          </Link>
          <div className="text-[11px] uppercase tracking-[0.23em] text-[#8e745d]">Story Scroll</div>
        </div>
      </header>

      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-12 sm:px-8 lg:grid-cols-[1fr_1fr] lg:items-start">
        <div>
          <p className="text-xs uppercase tracking-[0.24em] text-[#8f745e]">Atelier Narrative Mode</p>
          <h1 className="font-display-4 mt-3 text-5xl leading-[0.95] text-[#2e1f13] sm:text-6xl">
            Tell a campaign story before pixels render.
          </h1>
          <p className="mt-4 max-w-xl text-sm text-[#5e4b3b] sm:text-base">
            Move from mood direction to publish-ready exports in one connected
            studio flow across Nano Banana Pro, Flux 2, gpt-image-1.5, and Seedream.
          </p>

          <div className="mt-7 flex flex-wrap gap-2">
            {chapters.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setChapter(item.id)}
                className={`rounded-full border px-4 py-2 text-xs uppercase tracking-[0.2em] transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#6f5138] ${
                  chapter === item.id
                    ? 'border-[#3d2819] bg-[#3d2819] text-[#f8ecdf]'
                    : 'border-[#c8af97] bg-white text-[#523b2b] hover:border-[#8a6f54]'
                }`}
              >
                Chapter {item.index}
              </button>
            ))}
          </div>
        </div>

        <aside className="rounded-3xl border border-[#d4beaa] bg-[#fffaf3] p-6 shadow-[0_16px_40px_-30px_rgba(52,30,14,0.35)]">
          <p className="text-xs uppercase tracking-[0.22em] text-[#8a6f54]">Current Chapter</p>
          <h2 className="font-display-4 mt-3 text-4xl leading-tight text-[#311f12]">{active.title}</h2>
          <p className="mt-3 text-sm text-[#5f4d3d]">{active.summary}</p>
          <p className="mt-5 inline-flex rounded-full border border-[#b99270] bg-[#f7eadf] px-3 py-1 text-xs uppercase tracking-[0.2em] text-[#6e4f34]">
            {active.metric}
          </p>
        </aside>
      </section>

      <section className="mx-auto grid max-w-6xl gap-4 px-5 sm:px-8 lg:grid-cols-3">
        <article className="rounded-2xl border border-[#ddc8b4] bg-[#fff9f1] p-5">
          <p className="text-xs uppercase tracking-[0.18em] text-[#8f745e]">Brief to visual language</p>
          <p className="mt-3 text-sm text-[#4f3f33]">Translate product claims into scene grammar, lighting tone, and texture personality.</p>
        </article>
        <article className="rounded-2xl border border-[#ddc8b4] bg-[#fff9f1] p-5">
          <p className="text-xs uppercase tracking-[0.18em] text-[#8f745e]">Model-aware composition edits</p>
          <p className="mt-3 text-sm text-[#4f3f33]">Switch models while preserving structure, references, and framing guardrails.</p>
        </article>
        <article className="rounded-2xl border border-[#ddc8b4] bg-[#fff9f1] p-5">
          <p className="text-xs uppercase tracking-[0.18em] text-[#8f745e]">Publish-ready export stacks</p>
          <p className="mt-3 text-sm text-[#4f3f33]">Package approved outputs with prompts, masks, and campaign channel notes.</p>
        </article>
      </section>

      <section className="mx-auto grid max-w-6xl gap-4 px-5 py-12 sm:px-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-3xl border border-[#d3b79f] bg-[#2d1e14] p-6 text-[#f4e6d7]">
          <p className="text-xs uppercase tracking-[0.22em] text-[#ceb49b]">Story Step Timeline</p>
          <div className="mt-5 space-y-3">
            {chapters.map((item) => (
              <div
                key={item.id}
                className={`rounded-2xl border p-4 transition ${
                  chapter === item.id
                    ? 'border-[#f0dac2] bg-[#3a281b]'
                    : 'border-[#6d5441] bg-[#342417]'
                }`}
              >
                <p className="text-xs uppercase tracking-[0.18em] text-[#cdb194]">Chapter {item.index}</p>
                <p className="mt-2 text-lg font-semibold text-[#fff4e9]">{item.title}</p>
                <p className="mt-1 text-sm text-[#dec4ae]">{item.summary}</p>
              </div>
            ))}
          </div>
        </div>

        <aside className="rounded-3xl border border-[#d3b79f] bg-[#f5e6d5] p-6">
          <p className="text-xs uppercase tracking-[0.22em] text-[#8f745d]">Membership Offer</p>
          <h3 className="font-display-4 mt-2 text-4xl text-[#39271a]">$39</h3>
          <p className="mt-2 text-sm text-[#5f4a39]">Flat monthly studio for all four generation engines and shared prompt memory.</p>
          <button
            type="button"
            className="mt-5 w-full rounded-full border border-[#513827] bg-[#513827] px-4 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#f5e9dc] transition hover:bg-[#3b281b] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#513827]"
          >
            Enter Story Pass
          </button>
        </aside>
      </section>
    </main>
  )
}
