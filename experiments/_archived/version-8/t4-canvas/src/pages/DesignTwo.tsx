const chapters = [
  {
    title: 'Brief to visual language',
    copy: 'Write a raw brief once. T4 Canvas rewires it for each model and keeps mood continuity while styles diverge.',
    note: 'Chapter 01',
  },
  {
    title: 'Model-aware composition edits',
    copy: 'Switch from Flux 2 framing to Seedream texture without rebuilding your scene graph. Keep masks, crop logic, and references aligned.',
    note: 'Chapter 02',
  },
  {
    title: 'Publish-ready export stacks',
    copy: 'Deliver social, print, and campaign variants in one sweep with model metadata attached for exact revision replay.',
    note: 'Chapter 03',
  },
]

const modelRows = [
  {
    model: 'Nano Banana Pro',
    bestFor: 'Concept velocity + sketch ideation',
    signature: 'Rapid scenario branching with style lock',
  },
  {
    model: 'Flux 2',
    bestFor: 'Hard composition control',
    signature: 'Precise structure and camera discipline',
  },
  {
    model: 'gpt-image-1.5',
    bestFor: 'Edits, repair, and rewrite loops',
    signature: 'Prompt expansion and contextual inpainting',
  },
  {
    model: 'Seedream',
    bestFor: 'Art direction and visual finish',
    signature: 'Expressive style packs with high coherence',
  },
]

export function DesignTwo() {
  return (
    <div className="theme-two min-h-screen overflow-x-clip bg-[#f5efe1] text-[#1f1a16]">
      <main className="mx-auto max-w-6xl px-6 pb-32 pt-10 sm:px-10">
        <header className="flex flex-wrap items-center justify-between gap-4 border-b border-[#30231b]/20 pb-5">
          <p className="font-[Manrope] text-xs uppercase tracking-[0.28em] text-[#7f5a45]">T4 Canvas / Editorial Flow</p>
          <p className="text-sm text-[#5b4a3f]">Built for art directors and image teams</p>
        </header>

        <section className="mt-10 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <span className="inline-block border border-[#2e241d]/25 px-3 py-1 text-xs uppercase tracking-[0.2em] text-[#6c4b3a]">
              Manifesto Hero
            </span>
            <h1 className="mt-4 max-w-[12ch] font-[Playfair_Display] text-5xl leading-[0.95] text-[#19110b] sm:text-7xl">
              One studio for every image voice.
            </h1>
            <p className="mt-5 max-w-xl font-[Manrope] text-lg text-[#42352c]">
              Route each idea through four frontier models, keep intent intact, and ship final visuals under one flat monthly plan.
            </p>
          </div>

          <article className="rounded-[2rem] border border-[#3c2d24]/20 bg-[#fffaf2]/90 p-6 shadow-[0_16px_40px_rgba(55,34,22,0.12)]">
            <p className="text-xs uppercase tracking-[0.2em] text-[#7f5a45]">Issue 08</p>
            <p className="mt-3 font-[Playfair_Display] text-2xl leading-tight text-[#1f120a]">
              T4 Canvas removes model switching tax from your creative process.
            </p>
            <div className="mt-5 flex flex-wrap gap-2 text-xs uppercase tracking-[0.16em] text-[#5b4a3f]">
              <span className="rounded-full border border-[#4a382e]/25 px-3 py-1">prompt memory</span>
              <span className="rounded-full border border-[#4a382e]/25 px-3 py-1">style continuity</span>
              <span className="rounded-full border border-[#4a382e]/25 px-3 py-1">instant handoff</span>
            </div>
          </article>
        </section>

        <section className="mt-16 grid gap-10 lg:grid-cols-[260px_1fr]">
          <aside className="rounded-3xl border border-[#2f221a]/20 bg-[#efe5d4]/70 p-5 lg:sticky lg:top-10 lg:h-fit">
            <p className="font-[Playfair_Display] text-2xl text-[#26160c]">Chapter Rail</p>
            <p className="mt-2 text-sm text-[#58463a]">Scroll through the pipeline story while the chapter index stays in view.</p>
            <ul className="mt-6 space-y-2">
              {chapters.map((chapter) => (
                <li key={chapter.note} className="border-b border-[#2f221a]/15 pb-2 text-sm text-[#2e2017]">
                  {chapter.note}
                </li>
              ))}
            </ul>
          </aside>

          <div className="space-y-8">
            {chapters.map((chapter, index) => (
              <article
                key={chapter.title}
                className={`rounded-3xl border p-6 transition hover:-translate-y-1 hover:shadow-xl sm:p-8 ${
                  index % 2 === 0
                    ? 'border-[#2b1f18]/20 bg-[#fff8ec]'
                    : 'border-[#3d2a20]/20 bg-[#f2e6d6]'
                }`}
              >
                <p className="text-xs uppercase tracking-[0.18em] text-[#725644]">{chapter.note}</p>
                <h2 className="mt-3 font-[Playfair_Display] text-3xl leading-tight text-[#1f130c]">{chapter.title}</h2>
                <p className="mt-3 max-w-2xl text-base leading-relaxed text-[#3f3229]">{chapter.copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-16 rounded-[2rem] border border-[#2f221a]/20 bg-[#fffaf3] p-6 sm:p-8">
          <p className="text-xs uppercase tracking-[0.22em] text-[#7a5f4d]">Model Table</p>
          <div className="mt-5 overflow-x-auto">
            <table className="w-full min-w-[680px] border-collapse text-left">
              <thead>
                <tr className="border-b border-[#2f221a]/20 text-xs uppercase tracking-[0.2em] text-[#715644]">
                  <th className="pb-3 font-medium">Model</th>
                  <th className="pb-3 font-medium">Best For</th>
                  <th className="pb-3 font-medium">Signature</th>
                </tr>
              </thead>
              <tbody>
                {modelRows.map((row) => (
                  <tr key={row.model} className="border-b border-[#2f221a]/10 align-top">
                    <td className="py-4 pr-3 font-[Playfair_Display] text-xl text-[#24150c]">{row.model}</td>
                    <td className="py-4 pr-3 text-[#3f3228]">{row.bestFor}</td>
                    <td className="py-4 text-[#4c3b30]">{row.signature}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-16 rounded-[2.2rem] border border-[#2e221b]/25 bg-[#2b1b13] p-7 text-[#f6ecdd] sm:p-10">
          <p className="text-xs uppercase tracking-[0.2em] text-[#f4d8b8]">Membership CTA</p>
          <div className="mt-4 flex flex-wrap items-end justify-between gap-6">
            <div>
              <h2 className="max-w-[13ch] font-[Playfair_Display] text-4xl leading-[0.95] sm:text-5xl">Flat monthly. Four premium models.</h2>
              <p className="mt-3 max-w-lg text-[#dbc6ac]">
                Start in Nano Banana Pro, refine in Flux 2, clean in gpt-image-1.5, and finish in Seedream without paying model-by-model fees.
              </p>
            </div>
            <div className="rounded-2xl border border-[#f4d8b8]/35 bg-[#3a261b] p-5 text-center">
              <p className="text-xs uppercase tracking-[0.2em] text-[#f4d8b8]">Studio Pass</p>
              <p className="mt-2 font-[Playfair_Display] text-5xl text-[#fff4e5]">$39</p>
              <p className="text-xs uppercase tracking-[0.16em] text-[#e7d1b7]">per month</p>
            </div>
          </div>
        </section>

        <footer className="mt-14 text-xs uppercase tracking-[0.2em] text-[#7f6553]">
          T4 Canvas / Unified Image Operations / Editorial Workflow
        </footer>
      </main>
    </div>
  )
}
