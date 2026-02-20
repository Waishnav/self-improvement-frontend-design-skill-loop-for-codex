import { useState } from 'react'
import { Link } from 'react-router-dom'

const directions = [
  {
    name: 'Launch Product',
    headline: 'Make your hero shot feel like a premium cover story.',
    detail: 'Balance photoreal precision from Flux 2 with punchy variants from Nano Banana Pro.',
    palette: 'from-rose-200 to-orange-100',
    insight: '31 campaign versions delivered within two days.',
  },
  {
    name: 'Fashion Capsule',
    headline: 'Build editorial fashion narratives from a single reference board.',
    detail: 'Seedream handles expression-rich subjects while gpt-image-1.5 keeps continuity locked.',
    palette: 'from-violet-200 to-fuchsia-100',
    insight: '14 lookbook spreads generated in one review sprint.',
  },
  {
    name: 'Narrative World',
    headline: 'Generate cohesive scenes with tone consistency across episodes.',
    detail: 'Drive art direction with prompt stacks and preserve narrative motifs frame by frame.',
    palette: 'from-sky-200 to-teal-100',
    insight: '96 storyboard frames approved without tool switching.',
  },
]

const layoutModes = {
  Poster: ['Hero crop + title lockup', 'Three alt color grades', 'Export set for social + print'],
  Story: ['Vertical sequence with scene continuity', 'Automatic caption-safe framing', 'Version history per frame'],
  Catalog: ['Grid product compositions', 'SKU-consistent background control', 'Batch export to campaign kit'],
}

type LayoutMode = keyof typeof layoutModes

export function DesignTwoPage() {
  const [activeDirection, setActiveDirection] = useState(0)
  const [layoutMode, setLayoutMode] = useState<LayoutMode>('Poster')
  const direction = directions[activeDirection]

  return (
    <main className="paper-overlay relative min-h-screen overflow-x-clip bg-[#f7f1e8] text-[#231d18]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_85%_8%,rgba(255,153,86,0.23),transparent_35%),radial-gradient(circle_at_14%_20%,rgba(255,228,182,0.35),transparent_38%),linear-gradient(180deg,#f7f1e8,#f2e4d1)]" />

      <section className="relative mx-auto w-full max-w-6xl px-6 py-8 md:px-10 lg:py-12">
        <header className="mb-12 flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="font-mono-tech text-[11px] uppercase tracking-[0.3em] text-[#6e5642]">T4 Canvas</p>
            <p className="font-archivo text-sm text-[#7d634c]">Concept: Editorial Atelier</p>
          </div>
          <Link
            to="/"
            className="rounded-full border border-[#684b32]/30 px-5 py-2 font-mono-tech text-xs uppercase tracking-[0.18em] text-[#5b432f] transition hover:border-[#4f3321] hover:text-[#2d1e13]"
          >
            All Concepts
          </Link>
        </header>

        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-7">
            <p className="inline-flex rounded-full border border-[#8f6f52]/40 bg-[#fff9f0]/75 px-3 py-1 font-mono-tech text-[10px] uppercase tracking-[0.2em] text-[#7d5d3f]">
              Curated visual storytelling for modern marketing teams
            </p>
            <h1 className="font-editorial text-5xl leading-[0.95] md:text-7xl">Design campaigns like a monthly art magazine.</h1>
            <p className="max-w-2xl font-archivo text-base text-[#4b3a2c]/85 md:text-lg">
              T4 Canvas combines Nano Banana Pro, Flux 2, gpt-image-1.5, and Seedream into a single
              editorial workflow so teams can generate, refine, and publish visual narratives without
              tool fatigue.
            </p>

            <div className="grid gap-3 sm:grid-cols-3">
              {directions.map((item, index) => (
                <button
                  key={item.name}
                  type="button"
                  onClick={() => setActiveDirection(index)}
                  className={`rounded-2xl border px-4 py-3 text-left transition ${
                    index === activeDirection
                      ? 'border-[#3d2818] bg-[#fffaf2] text-[#2d1c11]'
                      : 'border-[#6f543d]/25 bg-[#fff5e8]/70 text-[#5d4734] hover:border-[#6f543d]/45'
                  }`}
                >
                  <p className="font-archivo text-sm font-semibold uppercase tracking-[0.08em]">{item.name}</p>
                  <p className="mt-1 text-xs text-[#634d3a]/80">{item.insight}</p>
                </button>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <button
                type="button"
                className="rounded-full bg-[#2d1e13] px-6 py-3 font-archivo text-sm font-semibold uppercase tracking-[0.12em] text-[#fff6eb] transition hover:bg-[#1f140c]"
              >
                Request Invite
              </button>
              <button
                type="button"
                className="rounded-full border border-[#5f4733]/35 px-6 py-3 font-mono-tech text-xs uppercase tracking-[0.18em] text-[#4a3525] transition hover:border-[#3f2a1b] hover:text-[#2d1e13]"
              >
                Browse Examples
              </button>
            </div>
          </div>

          <aside className="relative overflow-hidden rounded-[32px] border border-[#684b32]/25 bg-[#fff8ef] p-6 shadow-[0_30px_80px_rgba(73,47,25,0.15)]">
            <div className={`mb-4 rounded-2xl bg-gradient-to-br ${direction.palette} p-[1px]`}>
              <div className="rounded-[15px] bg-[#fdf8f1] p-5">
                <p className="font-mono-tech text-[11px] uppercase tracking-[0.16em] text-[#6c553f]">Current Direction</p>
                <h2 className="mt-2 font-editorial text-4xl leading-none text-[#1f140d]">{direction.name}</h2>
                <p className="mt-4 font-archivo text-sm text-[#4f3d30]">{direction.headline}</p>
              </div>
            </div>
            <div className="grid grid-cols-[1.15fr_0.85fr] gap-3">
              <div className="rounded-2xl bg-[#f0e0ce] p-4">
                <p className="font-mono-tech text-[10px] uppercase tracking-[0.16em] text-[#5a452f]">Campaign Note</p>
                <p className="mt-2 text-sm text-[#423225]">{direction.detail}</p>
              </div>
              <div className="rounded-2xl bg-[#e8cfb3] p-4">
                <p className="font-mono-tech text-[10px] uppercase tracking-[0.16em] text-[#5a452f]">Turnaround</p>
                <p className="mt-2 font-editorial text-3xl leading-none">36h</p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="relative mx-auto w-full max-w-6xl px-6 pb-8 md:px-10">
        <div className="grid gap-4 md:grid-cols-3">
          {[
            ['All-model blending', 'Switch base model mid-project while preserving prompt DNA.'],
            ['Edit-first revisions', 'Annotate, mask, and rerender targeted zones without restart.'],
            ['Flat fee confidence', 'Predict creative cost with one monthly number for the whole team.'],
          ].map(([title, body]) => (
            <article key={title} className="rounded-2xl border border-[#76593f]/20 bg-[#fff7ec]/75 p-5">
              <h3 className="font-archivo text-xl font-bold uppercase tracking-[0.04em] text-[#2e2015]">{title}</h3>
              <p className="mt-2 text-sm text-[#5b4532]">{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="relative mx-auto w-full max-w-6xl px-6 py-12 md:px-10">
        <div className="rounded-[30px] border border-[#6e5238]/25 bg-[#fff9f1] p-6 md:p-8">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
            <h2 className="font-editorial text-4xl leading-none md:text-5xl">Layout Director</h2>
            <div className="flex flex-wrap gap-2">
              {(Object.keys(layoutModes) as LayoutMode[]).map((mode) => (
                <button
                  key={mode}
                  type="button"
                  onClick={() => setLayoutMode(mode)}
                  className={`rounded-full px-4 py-2 font-mono-tech text-[11px] uppercase tracking-[0.15em] transition ${
                    layoutMode === mode
                      ? 'bg-[#2b1c12] text-[#fff4e9]'
                      : 'border border-[#6f543d]/30 text-[#5b432f] hover:border-[#6f543d]/55 hover:text-[#2d1e13]'
                  }`}
                >
                  {mode}
                </button>
              ))}
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {layoutModes[layoutMode].map((line) => (
              <div key={line} className="rounded-2xl border border-[#6f543d]/20 bg-[#f8ead8] p-4 text-sm text-[#513c2a]">
                {line}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative mx-auto w-full max-w-6xl px-6 pb-14 md:px-10 lg:pb-20">
        <div className="grid gap-4 lg:grid-cols-[1fr_1fr]">
          <article className="rounded-[28px] border border-[#6f543d]/25 bg-[#f4e3cf] p-7">
            <p className="font-mono-tech text-[11px] uppercase tracking-[0.2em] text-[#5e4733]">Client Perspective</p>
            <p className="mt-3 font-editorial text-3xl leading-tight text-[#23170f]">
              "We stopped juggling three subscriptions and finally got a visual pipeline our whole team loves."
            </p>
            <p className="mt-3 text-sm text-[#4f3a2a]">Creative Lead, Aster Supply Co.</p>
          </article>
          <article className="rounded-[28px] border border-[#6f543d]/25 bg-[#fff8ef] p-7">
            <h3 className="font-archivo text-2xl font-bold uppercase tracking-[0.04em] text-[#2e2015]">Flat Monthly Plan</h3>
            <p className="mt-3 text-sm text-[#4a382b]">$199 per seat. Unlimited model switching, full edit stack, and campaign exports.</p>
            <button
              type="button"
              className="mt-6 rounded-full bg-[#2d1e13] px-6 py-3 font-archivo text-sm font-semibold uppercase tracking-[0.14em] text-[#fff6eb] transition hover:bg-[#1f140c]"
            >
              Start Building Campaigns
            </button>
          </article>
        </div>
      </section>
    </main>
  )
}
