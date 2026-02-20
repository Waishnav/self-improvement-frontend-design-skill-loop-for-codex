import { Link } from 'react-router-dom'

const modelGrid = [
  {
    name: 'Nano Banana Pro',
    role: 'Idea spark + rapid look-dev',
    style: 'from-cyan-300/40 to-blue-500/20',
  },
  {
    name: 'Flux 2',
    role: 'Photo detail and material realism',
    style: 'from-fuchsia-300/35 to-purple-500/20',
  },
  {
    name: 'gpt-image-1.5',
    role: 'Prompt interpretation and edits',
    style: 'from-amber-300/40 to-orange-500/20',
  },
  {
    name: 'Seedream',
    role: 'Stylization and expressive direction',
    style: 'from-emerald-300/35 to-teal-500/20',
  },
]

const pipeline = [
  {
    step: '01',
    title: 'Prompt Stack',
    copy: 'Draft one weighted prompt and seed references once, then blast it to all model lanes.',
  },
  {
    step: '02',
    title: 'Parallel Render',
    copy: 'Run simultaneous generations with lane-specific controls and immediate side-by-side deltas.',
  },
  {
    step: '03',
    title: 'Hybrid Edit Pass',
    copy: 'Pull the strongest frame into the editor and patch with inpaint, relight, and up-res in one flow.',
  },
]

export function ConceptOne() {
  return (
    <main className="mesh-bg grid-bg relative isolate overflow-x-hidden text-white">
      <div className="grain pointer-events-none absolute inset-0" />
      <div className="absolute left-[-12rem] top-24 h-96 w-96 rounded-full bg-cyan-400/20 blur-3xl" />
      <div className="absolute bottom-12 right-[-10rem] h-80 w-80 rounded-full bg-fuchsia-400/20 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6 pb-20 pt-8 sm:px-10 lg:px-16">
        <header className="mb-16 flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-cyan-100/80">T4 Canvas</p>
            <p className="font-['Syne'] text-lg font-bold text-white">Chromatic Observatory</p>
          </div>
          <nav className="hidden items-center gap-7 text-xs uppercase tracking-[0.2em] text-slate-200/80 md:flex">
            <a href="#models" className="transition hover:text-cyan-100">
              Models
            </a>
            <a href="#flow" className="transition hover:text-cyan-100">
              Workflow
            </a>
            <a href="#membership" className="transition hover:text-cyan-100">
              Membership
            </a>
          </nav>
          <Link
            to="/"
            className="rounded-full border border-cyan-300/45 bg-cyan-300/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-100 transition hover:border-cyan-200 hover:bg-cyan-300/20"
          >
            Concept Gallery
          </Link>
        </header>

        <section className="mb-20 grid items-start gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="reveal">
            <p className="mb-5 inline-flex rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.24em] text-cyan-100">
              Multi-model studio, one subscription
            </p>
            <h1 className="mb-6 max-w-3xl font-['Syne'] text-4xl font-extrabold leading-[0.92] text-white sm:text-6xl xl:text-7xl">
              Generate, remix, and ship visuals at orbit speed.
            </h1>
            <p className="mb-8 max-w-xl text-base leading-relaxed text-slate-200/90 sm:text-lg">
              T4 Canvas combines Nano Banana Pro, Flux 2, gpt-image-1.5, and Seedream in a single power-user workspace.
              Switch models instantly, preserve prompt lineage, and publish art-ready output with no pay-per-image surprises.
            </p>
            <div className="mb-10 flex flex-wrap gap-3">
              <button className="rounded-full border border-cyan-200/70 bg-cyan-300/30 px-6 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-cyan-50 transition hover:bg-cyan-200/35">
                Start Monthly Plan
              </button>
              <button className="rounded-full border border-white/25 bg-black/25 px-6 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-slate-100 transition hover:border-white/45">
                Watch 90-sec tour
              </button>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                ['2.6M+', 'Images generated this month'],
                ['4', 'Best-in-class models included'],
                ['0', 'Per-image overage fees'],
              ].map(([value, label]) => (
                <article className="rounded-2xl border border-white/15 bg-white/[0.04] p-4 shadow-glow" key={value}>
                  <p className="mb-1 font-['Syne'] text-2xl font-bold text-white">{value}</p>
                  <p className="text-xs uppercase tracking-[0.18em] text-cyan-100/80">{label}</p>
                </article>
              ))}
            </div>
          </div>

          <aside className="reveal rounded-3xl border border-white/20 bg-slate-950/60 p-6 shadow-glow" style={{ animationDelay: '180ms' }}>
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-cyan-100/80">Prompt Reactor</p>
            <div className="mb-4 rounded-2xl border border-white/10 bg-slate-900/80 p-4">
              <p className="mb-2 text-xs uppercase tracking-[0.16em] text-slate-400">Active Prompt</p>
              <p className="text-sm leading-relaxed text-slate-100">
                Futuristic sneaker campaign, studio fog, chrome accents, hyper-real textile fibers, dynamic rim light.
              </p>
            </div>
            <div className="space-y-3">
              {[
                ['Creativity', '78%'],
                ['Structure lock', '63%'],
                ['Texture fidelity', '91%'],
              ].map(([label, value]) => (
                <div key={label}>
                  <div className="mb-1 flex items-center justify-between text-xs uppercase tracking-[0.14em] text-slate-300">
                    <span>{label}</span>
                    <span>{value}</span>
                  </div>
                  <div className="h-2 rounded-full bg-white/10">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-cyan-300 via-fuchsia-300 to-amber-300"
                      style={{ width: value }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <button className="rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-xs uppercase tracking-[0.16em] text-slate-100 transition hover:border-cyan-200/60">
                Generate Batch
              </button>
              <button className="rounded-xl border border-cyan-200/60 bg-cyan-200/20 px-3 py-2 text-xs uppercase tracking-[0.16em] text-cyan-50 transition hover:bg-cyan-200/30">
                Open Editor
              </button>
            </div>
          </aside>
        </section>

        <section id="models" className="mb-20">
          <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
            <h2 className="font-['Syne'] text-3xl font-extrabold text-white sm:text-4xl">Model Lanes, One Interface</h2>
            <p className="max-w-lg text-sm leading-relaxed text-slate-200/90">
              Select the right renderer per shot while preserving seeds, prompt revisions, and outputs inside one canonical project.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {modelGrid.map((model) => (
              <article
                key={model.name}
                className="relative overflow-hidden rounded-3xl border border-white/15 bg-slate-950/55 p-6 shadow-glow"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${model.style} opacity-45`} />
                <div className="relative z-10">
                  <p className="mb-3 text-xs uppercase tracking-[0.25em] text-white/80">Dedicated lane</p>
                  <h3 className="mb-2 font-['Syne'] text-2xl font-bold text-white">{model.name}</h3>
                  <p className="text-sm leading-relaxed text-slate-100/90">{model.role}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="flow" className="mb-20">
          <div className="mb-8 max-w-3xl">
            <h2 className="mb-3 font-['Syne'] text-3xl font-extrabold text-white sm:text-4xl">Power Workflow in Three Moves</h2>
            <p className="text-sm leading-relaxed text-slate-200/90 sm:text-base">
              Keep decision velocity high with a pipeline tuned for iteration, not friction. Every step is designed for creative teams
              shipping at production pace.
            </p>
          </div>
          <div className="grid gap-4 lg:grid-cols-3">
            {pipeline.map((item) => (
              <article key={item.step} className="rounded-3xl border border-white/15 bg-white/[0.03] p-6 shadow-glow">
                <p className="mb-3 font-['IBM_Plex_Mono'] text-xs uppercase tracking-[0.26em] text-cyan-100/80">Step {item.step}</p>
                <h3 className="mb-3 font-['Syne'] text-2xl font-bold text-white">{item.title}</h3>
                <p className="text-sm leading-relaxed text-slate-200/90">{item.copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="membership" className="rounded-[2rem] border border-cyan-200/25 bg-gradient-to-r from-cyan-400/10 via-slate-950/55 to-fuchsia-400/10 p-8 shadow-glow sm:p-10">
          <div className="grid items-end gap-7 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <p className="mb-3 text-xs uppercase tracking-[0.3em] text-cyan-100/85">Flat fee membership</p>
              <h2 className="mb-3 font-['Syne'] text-3xl font-extrabold text-white sm:text-4xl">Everything unlocked. Predictable every month.</h2>
              <p className="max-w-2xl text-sm leading-relaxed text-slate-100/90 sm:text-base">
                One subscription gives your team access to every generation lane and the full editor toolkit. No confusing credit math,
                no model silos, no separate subscriptions to juggle.
              </p>
            </div>
            <article className="rounded-3xl border border-white/20 bg-black/30 p-6">
              <p className="mb-2 text-xs uppercase tracking-[0.24em] text-cyan-100/85">T4 Canvas Pro</p>
              <p className="mb-1 font-['Syne'] text-5xl font-extrabold text-white">$39</p>
              <p className="mb-4 text-sm text-slate-200/90">per month, billed monthly</p>
              <ul className="mb-6 space-y-2 text-sm text-slate-100/90">
                <li>Unlimited model switching</li>
                <li>Full image editing suite</li>
                <li>Team workspaces + version history</li>
              </ul>
              <button className="w-full rounded-xl border border-cyan-200/65 bg-cyan-300/25 px-4 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-cyan-50 transition hover:bg-cyan-200/30">
                Claim Launch Access
              </button>
            </article>
          </div>
        </section>
      </div>
    </main>
  )
}
