import { Link } from 'react-router-dom'

const commandRail = [
  {
    label: 'Prompt Router',
    text: 'Route one idea into four model personalities without rewriting your prompt stack.',
  },
  {
    label: 'Style Voltage',
    text: 'Inject references, mood tags, and palette locks while preserving edit traceability.',
  },
  {
    label: 'Live Variants',
    text: 'Watch all generations update in parallel and fork the strongest branch instantly.',
  },
]

const benchmarkRows = [
  { model: 'Nano Banana Pro', bestFor: 'Fast ideation', avg: '1.6s', quality: '9.0 / 10' },
  { model: 'Flux 2', bestFor: 'Cinematic realism', avg: '2.2s', quality: '9.4 / 10' },
  { model: 'gpt-image-1.5', bestFor: 'Text fidelity', avg: '1.9s', quality: '9.1 / 10' },
  { model: 'Seedream', bestFor: 'Stylized artwork', avg: '2.0s', quality: '9.2 / 10' },
]

export default function DesignThree() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#04060c] text-[#eff6ff]">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-8%] top-[8%] h-80 w-80 rounded-full bg-[#22d3ee]/25 blur-3xl" />
        <div className="absolute right-[-10%] top-[24%] h-96 w-96 rounded-full bg-[#f472b6]/20 blur-3xl" />
        <div className="absolute bottom-[-8%] left-[34%] h-72 w-72 rounded-full bg-[#818cf8]/20 blur-3xl" />
        <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(148,163,184,0.35)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.35)_1px,transparent_1px)] [background-size:36px_36px]" />
      </div>

      <section className="relative mx-auto max-w-7xl px-6 pb-12 pt-8 md:pt-12">
        <header className="flex items-center justify-between rounded-2xl border border-cyan-200/35 bg-[#07101f]/70 px-5 py-3 backdrop-blur">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.34em] text-cyan-200">T4 Canvas</p>
            <p className="font-circuit-display text-2xl leading-none text-cyan-100">Neon Circuit Bazaar</p>
          </div>
          <Link
            to="/"
            className="rounded-full border border-cyan-200/40 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-100 transition hover:border-cyan-100 hover:bg-cyan-300/10"
          >
            All Concepts
          </Link>
        </header>

        <div className="mt-8 grid gap-7 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.38em] text-cyan-200">HIGH SIGNAL IMAGE GENERATION</p>
            <h1 className="mt-5 max-w-2xl font-circuit-display text-6xl leading-[0.88] text-[#f2f8ff] md:text-8xl">
              Push One Prompt.
              <br />
              Fire Four Models.
              <br />
              Keep The Best Frames.
            </h1>
            <p className="mt-6 max-w-xl text-base text-slate-200 md:text-lg">
              T4 Canvas is built for operators who work at speed. Run Nano Banana Pro, Flux 2, gpt-image-1.5,
              and Seedream in synchronized cycles with one monthly subscription.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <button className="rounded-full bg-cyan-300 px-6 py-3 text-sm font-bold uppercase tracking-[0.16em] text-black transition hover:bg-cyan-200">
                Enter Studio
              </button>
              <button className="rounded-full border border-cyan-200/50 bg-cyan-300/10 px-6 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-cyan-100 transition hover:border-cyan-100 hover:bg-cyan-300/20">
                See Workflow
              </button>
            </div>
          </div>

          <div className="rounded-[2rem] border border-cyan-200/35 bg-[#051225]/75 p-5 shadow-[0_20px_90px_rgba(34,211,238,0.18)] backdrop-blur">
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-cyan-300/35 bg-cyan-300/12 p-4">
                <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-cyan-100">Latency Median</p>
                <p className="mt-2 text-4xl font-bold text-white">1.9s</p>
              </div>
              <div className="rounded-2xl border border-fuchsia-300/35 bg-fuchsia-300/12 p-4">
                <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-fuchsia-100">Output Burst</p>
                <p className="mt-2 text-4xl font-bold text-white">16x</p>
              </div>
            </div>
            <div className="mt-3 rounded-2xl border border-white/20 bg-black/35 p-4">
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-cyan-200">Live Queue</p>
              <p className="mt-2 text-sm text-slate-200">
                Queue balancing distributes jobs by model strength while preserving a single revision timeline.
              </p>
              <div className="mt-3 h-2 rounded-full bg-white/10">
                <div className="h-2 w-[78%] rounded-full bg-gradient-to-r from-cyan-300 via-sky-300 to-fuchsia-300" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-6 py-12">
        <div className="mb-7 flex flex-wrap items-end justify-between gap-4">
          <h2 className="font-circuit-display text-5xl leading-[0.9] text-white md:text-6xl">Command Rail</h2>
          <p className="max-w-md text-sm text-slate-300">Designed for serious creators who iterate fast and refuse tab chaos.</p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {commandRail.map((card) => (
            <article
              key={card.label}
              className="rounded-3xl border border-cyan-200/30 bg-[#041224]/70 p-5 shadow-[0_12px_40px_rgba(34,211,238,0.1)]"
            >
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-cyan-200">Module</p>
              <h3 className="mt-3 font-circuit-display text-3xl text-cyan-50">{card.label}</h3>
              <p className="mt-3 text-sm text-slate-200">{card.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
          <div className="rounded-[2rem] border border-fuchsia-200/35 bg-fuchsia-300/10 p-7">
            <p className="font-mono text-[11px] uppercase tracking-[0.33em] text-fuchsia-100">Creator Missions</p>
            <h3 className="mt-4 font-circuit-display text-5xl leading-[0.9] text-white">Ship 40 Campaign Frames Before Noon.</h3>
            <p className="mt-4 max-w-xl text-sm text-slate-200">
              Use burst generation for ads, social launches, thumbnails, and concept decks. Keep every variation,
              compare side-by-side, and commit only the winners.
            </p>
          </div>
          <div className="rounded-[2rem] border border-cyan-200/35 bg-cyan-300/10 p-7">
            <p className="font-mono text-[11px] uppercase tracking-[0.33em] text-cyan-100">Studio Stack</p>
            <h3 className="mt-4 font-circuit-display text-5xl leading-[0.9] text-white">One Seat. Four Engines. Zero Friction.</h3>
            <p className="mt-4 max-w-xl text-sm text-slate-200">
              T4 Canvas preserves your creative velocity by centralizing prompting, editing, and export in a unified
              control surface.
            </p>
          </div>
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-6 py-12">
        <div className="overflow-hidden rounded-3xl border border-white/20 bg-[#071325]/80">
          <div className="grid grid-cols-4 border-b border-white/15 bg-white/5 px-4 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-100 md:px-6">
            <p>Model</p>
            <p>Best Use</p>
            <p>Avg Time</p>
            <p>Quality Index</p>
          </div>
          {benchmarkRows.map((row) => (
            <div key={row.model} className="grid grid-cols-4 border-b border-white/10 px-4 py-4 text-sm md:px-6">
              <p className="font-semibold text-white">{row.model}</p>
              <p className="text-slate-200">{row.bestFor}</p>
              <p className="text-slate-200">{row.avg}</p>
              <p className="text-slate-100">{row.quality}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-6 pb-20 pt-10">
        <div className="rounded-[2rem] border border-cyan-200/40 bg-gradient-to-r from-cyan-300/20 via-transparent to-fuchsia-300/20 p-8 md:p-12">
          <p className="font-mono text-[11px] uppercase tracking-[0.34em] text-cyan-100">Membership</p>
          <h2 className="mt-3 font-circuit-display text-6xl leading-[0.88] text-white md:text-8xl">$39 Monthly. Unlimited Studio Power.</h2>
          <p className="mt-4 max-w-2xl text-slate-100">
            All supported models, one predictable bill, and production-grade collaboration tooling for modern creative teams.
          </p>
          <button className="mt-8 rounded-full bg-white px-7 py-3 text-sm font-bold uppercase tracking-[0.16em] text-black transition hover:bg-cyan-100">
            Activate T4 Canvas
          </button>
        </div>
      </section>
    </main>
  )
}
