const statements = [
  'From blank brief to campaign-ready scenes in one session.',
  'Switch between Nano Banana Pro, Flux 2, gpt-image-1.5, and Seedream instantly.',
  'Edit, repaint, upscale, and export without leaving the canvas.',
]

const ribbons = [
  { title: 'Model Stack', text: 'Four top image engines, one creative surface.' },
  { title: 'Power Controls', text: 'Mask edits, prompt versions, and reusable style kits.' },
  { title: 'Flat Pricing', text: 'One monthly membership with no hidden model fees.' },
]

export function DesignFive() {
  return (
    <main className="font-poster-body overflow-x-hidden bg-[#f4ede0] pt-24 text-[#1a1712]">
      <section className="relative overflow-hidden border-b-4 border-[#1a1712] bg-[#f4ede0]">
        <div className="poster-marquee border-y-4 border-[#1a1712] bg-[#facc15] py-2 font-poster-display text-4xl uppercase tracking-[0.08em] text-[#1a1712]">
          T4 Canvas • T4 Canvas • T4 Canvas • T4 Canvas •
        </div>
        <div className="mx-auto grid max-w-6xl gap-8 px-6 pb-20 pt-16 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <div>
            <p className="font-poster-mono text-xs uppercase tracking-[0.22em] text-[#7c2d12]">G5 / Poster Web</p>
            <h1 className="font-poster-display mt-4 text-[clamp(3rem,8vw,7.2rem)] leading-[0.83] uppercase text-[#1a1712]">
              Generate poster-grade campaign art at absurd speed.
            </h1>
            <p className="mt-5 max-w-xl text-base text-[#3f3a30] sm:text-lg">
              T4 Canvas gives power users one flat monthly studio for generation and editing across four flagship models.
            </p>
          </div>

          <article className="rotate-[-2deg] border-4 border-[#1a1712] bg-[#ef4444] p-5 text-[#fff7ed] shadow-[12px_12px_0_#1a1712]">
            <p className="font-poster-mono text-[11px] uppercase tracking-[0.2em]">Membership Drop</p>
            <p className="font-poster-display mt-2 text-6xl leading-none">$39</p>
            <p className="font-poster-mono mt-2 text-[11px] uppercase tracking-[0.2em]">Per month. All models unlocked.</p>
          </article>
        </div>
      </section>

      <section className="bg-[#1a1712] py-16 text-[#fff7ed]">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="font-poster-display text-5xl leading-[0.9] uppercase">Framed Statements</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {statements.map((statement, index) => (
              <article
                key={statement}
                className={[
                  'border-4 border-[#fff7ed] p-5 text-lg leading-snug shadow-[8px_8px_0_#facc15]',
                  index === 1 ? 'bg-[#ef4444] text-[#fff1e8]' : 'bg-[#111827]',
                ].join(' ')}
              >
                {statement}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-y-4 border-[#1a1712] bg-[#facc15] py-16">
        <div className="mx-auto max-w-6xl space-y-4 px-6">
          {ribbons.map((ribbon, index) => (
            <article
              key={ribbon.title}
              className={[
                'border-4 border-[#1a1712] px-5 py-4 transition duration-300 hover:translate-x-1',
                index % 2 === 0 ? 'translate-x-0 bg-[#f4ede0]' : 'translate-x-4 bg-[#ef4444] text-[#fff1e8]',
              ].join(' ')}
            >
              <p className="font-poster-display text-3xl leading-none uppercase">{ribbon.title}</p>
              <p className="mt-2 text-sm">{ribbon.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#ef4444] py-16 text-[#fff1e8]">
        <div className="mx-auto max-w-6xl border-4 border-[#1a1712] bg-[#1a1712] p-8 shadow-[14px_14px_0_#facc15]">
          <p className="font-poster-mono text-[11px] uppercase tracking-[0.22em] text-[#facc15]">Offer Slab</p>
          <h2 className="font-poster-display mt-3 text-6xl leading-[0.86] uppercase">Create everything. Pay once monthly.</h2>
          <div className="mt-7 flex flex-wrap items-center gap-4">
            <button
              type="button"
              className="border-4 border-[#f4ede0] bg-[#f4ede0] px-6 py-3 font-poster-mono text-[11px] font-bold uppercase tracking-[0.2em] text-[#1a1712] transition hover:-translate-y-0.5 hover:bg-[#facc15]"
            >
              Join T4 Canvas
            </button>
            <span className="font-poster-mono text-[11px] uppercase tracking-[0.2em] text-[#f5f5f4]">Cancel anytime. No per-render charges.</span>
          </div>
        </div>
      </section>

      <footer className="border-t-4 border-[#1a1712] bg-[#f4ede0] py-3">
        <div className="poster-tape overflow-hidden whitespace-nowrap font-poster-display text-3xl uppercase tracking-[0.09em] text-[#1a1712]">
          T4 Canvas • Power User Image Studio • T4 Canvas • Power User Image Studio •
        </div>
      </footer>
    </main>
  )
}
