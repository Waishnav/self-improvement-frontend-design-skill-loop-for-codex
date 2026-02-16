import { Link } from 'react-router-dom'

const editorialPanels = [
  {
    title: 'Model Desk',
    body: 'Brief once and route to Nano Banana Pro, Flux 2, gpt-image-1.5, and Seedream at the same time.',
  },
  {
    title: 'Revision Ledger',
    body: 'Every iteration is indexed, diffed, and replayable across the entire team.',
  },
  {
    title: 'Budget Logic',
    body: 'Single monthly fee means experimentation stays aggressive without per-render anxiety.',
  },
]

export function DesignTwoPage() {
  return (
    <div
      className="paper-grid min-h-screen bg-[#f4efe5] text-[#211a15]"
      style={{ fontFamily: 'Manrope, sans-serif' }}
    >
      <header className="border-b border-black/20 px-6 py-6 sm:px-10">
        <div className="mx-auto flex max-w-[92rem] flex-wrap items-center justify-between gap-4">
          <Link
            to="/"
            className="border border-black/40 px-4 py-2 text-xs uppercase tracking-[0.32em] text-black/70 hover:bg-black/5"
          >
            T4 Canvas
          </Link>
          <p className="text-xs uppercase tracking-[0.28em] text-black/60">Edition 02 • Editorial Reactor</p>
        </div>
      </header>

      <main className="mx-auto max-w-[92rem] px-6 pb-20 pt-10 sm:px-10">
        <section className="relative grid gap-6 border-b border-black/25 pb-16 lg:grid-cols-12">
          <div className="lg:col-span-2">
            <p className="text-[11px] uppercase tracking-[0.28em] text-black/55">Field Report</p>
          </div>
          <div className="lg:col-span-7">
            <h1 className="text-6xl leading-[0.86] text-[#13100d] sm:text-7xl" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
              The image studio
              <span className="block">for teams that publish faster</span>
              <span className="block">than trends can move.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-black/70">
              T4 Canvas is a power interface for people who want model freedom and operational rigor in one place.
            </p>
          </div>
          <div className="lg:col-span-3 lg:pl-6">
            <div className="border border-black/20 bg-black/5 p-5">
              <p className="text-[11px] uppercase tracking-[0.24em] text-black/60">Monthly Structure</p>
              <p className="mt-3 text-4xl" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                Flat Fee
              </p>
              <p className="mt-2 text-sm leading-relaxed text-black/70">All four models, one plan, no render counter.</p>
            </div>
          </div>

          <aside className="absolute -bottom-10 right-[7%] hidden w-72 rotate-[-4deg] border border-black/25 bg-[#fff7dc] p-5 shadow-[0_20px_60px_rgba(20,14,9,0.18)] lg:block">
            <p className="text-[10px] uppercase tracking-[0.3em] text-black/55">OFF GRID NOTE</p>
            <p className="mt-3 text-xl leading-tight" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
              One brief, four engines, one decision room.
            </p>
          </aside>
        </section>

        <section className="grid gap-6 border-b border-black/20 py-16 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="text-[11px] uppercase tracking-[0.3em] text-black/55">Model Index</p>
            <ul className="mt-5 space-y-3 text-2xl" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
              <li>Nano Banana Pro</li>
              <li>Flux 2</li>
              <li>gpt-image-1.5</li>
              <li>Seedream</li>
            </ul>
          </div>
          <div className="lg:col-span-8 lg:border-l lg:border-black/20 lg:pl-10">
            <div className="grid gap-6 md:grid-cols-3">
              {editorialPanels.map((panel) => (
                <article key={panel.title} className="border border-black/20 bg-white/40 p-5">
                  <h2 className="text-3xl leading-none" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                    {panel.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-black/70">{panel.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="grid gap-6 py-16 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h2 className="text-5xl leading-[0.92]" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
              Editorial rhythm.
              <span className="block">Technical throughput.</span>
            </h2>
          </div>
          <div className="lg:col-span-5 lg:border-l lg:border-black/20 lg:pl-10">
            <p className="text-base leading-relaxed text-black/72">
              This interface is built for creative directors, campaign teams, and solo makers who need to steer multiple
              generation engines without context switching.
            </p>
            <Link
              to="/"
              className="mt-8 inline-flex border border-black/40 px-5 py-3 text-xs uppercase tracking-[0.24em] text-black/70 transition hover:bg-black hover:text-white"
            >
              Return to concept index
            </Link>
          </div>
        </section>
      </main>
    </div>
  )
}
