import { Link } from 'react-router-dom'

const modelCards = [
  {
    name: 'Nano Banana Pro',
    focus: 'Gemini native ideation loops and style memory',
    speed: '1.6s avg draft',
    control: 'Prompt + style stack',
  },
  {
    name: 'Flux 2',
    focus: 'Cinematic realism with dramatic composition control',
    speed: '2.2s avg draft',
    control: 'Depth + camera + texture',
  },
  {
    name: 'gpt-image-1.5',
    focus: 'Clean product imagery and semantic prompt precision',
    speed: '1.9s avg draft',
    control: 'Scene logic + text fidelity',
  },
  {
    name: 'Seedream',
    focus: 'Stylized worlds, poster aesthetics, and bold color swings',
    speed: '2.0s avg draft',
    control: 'Mood packs + variant lattice',
  },
]

const workflow = [
  {
    step: 'Signal Ingestion',
    detail: 'Drop references, captions, and constraints into a single command rail.',
  },
  {
    step: 'Multi-Model Burst',
    detail: 'T4 Canvas runs synchronized generations across your selected engines.',
  },
  {
    step: 'Revision Heatmap',
    detail: 'Track edits by mask, model, and prompt delta in one continuous timeline.',
  },
  {
    step: 'Client-Ready Export',
    detail: 'Ship layered assets, social crops, and campaign variants in one click.',
  },
]

export default function DesignOne() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#070b13] text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_15%,rgba(249,115,22,0.28),transparent_40%),radial-gradient(circle_at_80%_20%,rgba(56,189,248,0.22),transparent_38%),radial-gradient(circle_at_55%_90%,rgba(99,102,241,0.2),transparent_42%)]" />
        <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:44px_44px]" />
      </div>

      <section className="relative mx-auto max-w-7xl px-6 pb-16 pt-8 md:pt-12">
        <header className="flex items-center justify-between rounded-2xl border border-white/20 bg-black/30 px-5 py-3 backdrop-blur">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.35em] text-orange-200">T4 Canvas</p>
            <p className="font-noir-title text-2xl leading-none text-white">CONTROL DECK</p>
          </div>
          <Link
            to="/"
            className="rounded-full border border-white/30 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-200 transition hover:border-white hover:text-white"
          >
            All Concepts
          </Link>
        </header>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.42em] text-sky-200">POWER USER IMAGE OPERATIONS</p>
            <h1 className="mt-5 max-w-2xl font-noir-title text-6xl leading-[0.9] text-white md:text-8xl">
              One Flat Fee.
              <br />
              Four Elite Engines.
              <br />
              Infinite Visual Output.
            </h1>
            <p className="mt-6 max-w-xl text-base text-slate-200 md:text-lg">
              T4 Canvas is the command surface for teams that cannot afford weak outputs. Generate, compare,
              and revise across Nano Banana Pro, Flux 2, gpt-image-1.5, and Seedream in one workflow.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <button className="rounded-full bg-orange-400 px-6 py-3 text-sm font-bold uppercase tracking-[0.16em] text-black transition hover:bg-orange-300">
                Start Monthly Plan
              </button>
              <button className="rounded-full border border-white/40 bg-white/5 px-6 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-white transition hover:border-white hover:bg-white/10">
                Watch 110s Demo
              </button>
            </div>
          </div>

          <div className="grid gap-4 rounded-3xl border border-white/20 bg-black/35 p-5 backdrop-blur md:grid-cols-2">
            <div className="rounded-2xl border border-orange-300/35 bg-orange-300/10 p-4">
              <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-orange-100">Average Cycle</p>
              <p className="mt-2 text-4xl font-bold text-orange-100">42s</p>
              <p className="mt-2 text-xs text-orange-50/90">From prompt to final export stack</p>
            </div>
            <div className="rounded-2xl border border-sky-300/35 bg-sky-300/10 p-4">
              <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-sky-100">Monthly Yield</p>
              <p className="mt-2 text-4xl font-bold text-sky-100">13k+</p>
              <p className="mt-2 text-xs text-sky-50/90">Images shipped per studio seat</p>
            </div>
            <div className="rounded-2xl border border-white/20 bg-white/5 p-4 md:col-span-2">
              <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-white/80">Mission Note</p>
              <p className="mt-2 text-sm text-slate-200">
                Stop paying for separate subscriptions and disconnected editors. T4 Canvas unifies the best image
                engines behind one predictable price.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-6 py-12">
        <div className="mb-6 flex items-end justify-between gap-4">
          <h2 className="font-noir-title text-4xl text-white md:text-5xl">Model Matrix</h2>
          <p className="max-w-md text-right text-sm text-slate-300">
            Mix models by project stage: ideation, photoreal drafts, text-heavy scenes, or stylized campaigns.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {modelCards.map((model) => (
            <article
              key={model.name}
              className="group rounded-2xl border border-white/20 bg-black/35 p-5 transition duration-300 hover:border-orange-200/60 hover:bg-black/45"
            >
              <h3 className="font-noir-title text-3xl text-white">{model.name}</h3>
              <p className="mt-2 text-sm text-slate-200">{model.focus}</p>
              <div className="mt-4 grid grid-cols-2 gap-3 text-xs">
                <div className="rounded-xl border border-white/20 bg-white/5 p-3">
                  <p className="font-mono uppercase tracking-[0.18em] text-slate-400">Speed</p>
                  <p className="mt-1 text-slate-100">{model.speed}</p>
                </div>
                <div className="rounded-xl border border-white/20 bg-white/5 p-3">
                  <p className="font-mono uppercase tracking-[0.18em] text-slate-400">Control</p>
                  <p className="mt-1 text-slate-100">{model.control}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-6 py-12">
        <div className="rounded-3xl border border-white/20 bg-black/35 p-6 backdrop-blur md:p-10">
          <h2 className="font-noir-title text-4xl text-white md:text-5xl">Operating Sequence</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {workflow.map((item, index) => (
              <div key={item.step} className="relative rounded-2xl border border-white/15 bg-white/5 p-5">
                <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-orange-200">Step {index + 1}</p>
                <h3 className="mt-3 text-2xl font-bold text-white">{item.step}</h3>
                <p className="mt-2 text-sm text-slate-200">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-6 pb-20 pt-12">
        <div className="rounded-[2rem] border border-orange-200/40 bg-gradient-to-r from-orange-300/25 via-orange-200/10 to-sky-300/20 p-8 md:p-12">
          <p className="font-mono text-[11px] uppercase tracking-[0.35em] text-orange-100">Flat Fee Membership</p>
          <h2 className="mt-4 font-noir-title text-5xl text-white md:text-7xl">$39 / month</h2>
          <p className="mt-4 max-w-2xl text-slate-100">
            Unlimited exploration, model switching, collaborative revision history, and pro export tooling. No
            per-model billing chaos.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <button className="rounded-full bg-white px-6 py-3 text-sm font-bold uppercase tracking-[0.16em] text-black transition hover:bg-orange-100">
              Claim Studio Access
            </button>
            <button className="rounded-full border border-white/50 bg-black/20 px-6 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-white transition hover:border-white hover:bg-black/30">
              Talk To Sales
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}
