import { Link } from 'react-router-dom'

const cockpitWidgets = [
  ['Prompt Queue', '26 active'],
  ['Render Rate', '8.4/sec'],
  ['Engine Focus', 'Flux 2'],
  ['Consistency', '94%'],
  ['Auto Upscale', 'ON'],
  ['Style Locks', '12 presets'],
]

const pipelineRows = [
  { label: 'Seedream', score: '++ texture fidelity' },
  { label: 'gpt-image-1.5', score: '++ scene reasoning' },
  { label: 'Nano Banana Pro', score: '++ ideation burst' },
  { label: 'Flux 2', score: '++ cinematic control' },
]

export function DesignThreePage() {
  return (
    <div
      className="scanlines min-h-screen bg-[#041512] text-[#d7ffe7]"
      style={{ fontFamily: 'Rajdhani, sans-serif' }}
    >
      <header className="border-b border-emerald-200/20 px-6 py-6 sm:px-10">
        <div className="mx-auto flex max-w-[96rem] flex-wrap items-center justify-between gap-4">
          <Link
            to="/"
            className="rounded-sm border border-emerald-200/30 px-4 py-2 text-xs uppercase tracking-[0.32em] text-emerald-100/80"
          >
            T4 Canvas
          </Link>
          <p className="text-xs uppercase tracking-[0.28em] text-emerald-100/60">Command Deck</p>
        </div>
      </header>

      <main className="mx-auto max-w-[96rem] px-6 pb-24 pt-8 sm:px-10">
        <section className="rounded-3xl border border-emerald-200/20 bg-[#031f1a]/70 p-5 shadow-[0_30px_100px_rgba(0,0,0,0.4)] md:p-7">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-4 border-b border-emerald-200/20 pb-4">
            <h1 className="text-4xl uppercase leading-none text-emerald-100 sm:text-6xl">Multi-Model Operations Console</h1>
            <p className="text-xs uppercase tracking-[0.24em] text-emerald-100/65">Nano Banana Pro • Flux 2 • gpt-image-1.5 • Seedream</p>
          </div>

          <div className="grid gap-4 lg:grid-cols-[1.4fr_0.6fr]">
            <div className="grid gap-4 md:grid-cols-3">
              {cockpitWidgets.map(([label, value]) => (
                <article key={label} className="rounded-2xl border border-emerald-100/20 bg-black/25 p-4">
                  <p className="text-[11px] uppercase tracking-[0.23em] text-emerald-100/70">{label}</p>
                  <p className="mt-3 text-3xl" style={{ fontFamily: 'Space Mono, monospace' }}>
                    {value}
                  </p>
                </article>
              ))}
            </div>

            <aside className="rounded-2xl border border-emerald-100/20 bg-black/35 p-4">
              <p className="text-[11px] uppercase tracking-[0.26em] text-emerald-100/60">Pipeline Heatmap</p>
              <div className="mt-4 space-y-3">
                {pipelineRows.map((row) => (
                  <div key={row.label} className="rounded-xl border border-emerald-100/15 bg-emerald-100/[0.04] p-3">
                    <p className="text-sm uppercase tracking-[0.18em] text-emerald-100/70">{row.label}</p>
                    <p className="text-lg text-emerald-100">{row.score}</p>
                  </div>
                ))}
              </div>
            </aside>
          </div>

          <div className="mt-5 grid gap-4 md:grid-cols-4">
            {[
              'Distributed prompt fan-out',
              'Shared annotation timeline',
              'One-click seed transfer',
              'Flat monthly operating cost',
            ].map((item) => (
              <div key={item} className="rounded-xl border border-emerald-100/20 bg-black/25 px-3 py-2 text-xs uppercase tracking-[0.18em] text-emerald-100/70">
                {item}
              </div>
            ))}
          </div>
        </section>
      </main>

      <section className="mx-auto mt-2 min-h-[44vh] max-w-[88rem] rounded-[2.6rem] border border-[#b1b291] bg-[#efefd8] px-8 py-14 text-[#25241a] sm:px-12">
        <p className="text-xs uppercase tracking-[0.3em] text-[#57543a]">Decompression Band</p>
        <h2 className="mt-6 max-w-4xl text-4xl leading-[1.02] sm:text-6xl" style={{ fontFamily: 'Fraunces, serif' }}>
          Dense tools up front.
          <span className="block">Calm decision space in the middle.</span>
        </h2>
        <p className="mt-6 max-w-2xl text-base text-[#47442f]">
          T4 Canvas keeps heavy controls where power users need them, then opens a quiet review zone where teams choose
          what ships.
        </p>
      </section>

      <section className="mx-auto max-w-[92rem] px-6 pb-24 pt-14 sm:px-10">
        <div className="grid gap-5 md:grid-cols-3">
          {[
            {
              title: 'Command Views',
              detail: 'Instantly flip between model-specific tuning panels and cross-model compare panels.',
            },
            {
              title: 'Revision Memory',
              detail: 'Every render stays attached to prompt lineage, seed metadata, and team comments.',
            },
            {
              title: 'One Plan',
              detail: 'No token counting or render billing. Create at full speed under a single subscription.',
            },
          ].map((card) => (
            <article key={card.title} className="rounded-2xl border border-emerald-100/25 bg-[#082521]/80 p-6">
              <h3 className="text-3xl uppercase leading-none text-emerald-100">{card.title}</h3>
              <p className="mt-3 text-base leading-relaxed text-emerald-50/75">{card.detail}</p>
            </article>
          ))}
        </div>
        <Link
          to="/"
          className="mt-10 inline-flex rounded-sm border border-emerald-100/35 px-5 py-3 text-xs uppercase tracking-[0.25em] text-emerald-100/85 transition hover:bg-emerald-100/10"
        >
          Return to concept index
        </Link>
      </section>
    </div>
  )
}
