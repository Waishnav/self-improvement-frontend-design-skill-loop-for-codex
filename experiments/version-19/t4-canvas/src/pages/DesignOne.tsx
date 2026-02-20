import { Link } from 'react-router-dom'

const modelModules = [
  {
    model: 'Nano Banana Pro',
    origin: 'Gemini',
    profile: 'Ultra-fast ideation loops with reliable prompt adherence for high-volume concept rounds.',
    score: '97ms avg queue',
  },
  {
    model: 'Flux 2',
    origin: 'Flux stack',
    profile: 'High-fidelity cinematic rendering with complex lighting and strong detail persistence.',
    score: '4K texture lock',
  },
  {
    model: 'gpt-image-1.5',
    origin: 'OpenAI',
    profile: 'Instruction-heavy edits and style transfer with precise textual transformations.',
    score: 'Prompt compliance 96%',
  },
  {
    model: 'Seedream',
    origin: 'Bytedance',
    profile: 'Expressive concept variants and character-friendly composition consistency.',
    score: '12 variant burst',
  },
]

const workflow = [
  {
    title: '1. Stack prompts',
    body: 'Chain references, masks, and negative controls in one command surface without context hopping.',
  },
  {
    title: '2. Fork model lanes',
    body: 'Route one prompt to all engines with tuned presets. Compare results in synchronized strips.',
  },
  {
    title: '3. Surgical edits',
    body: 'Use region-based operations for lighting, texture, and compositional repairs before export.',
  },
  {
    title: '4. Ship packs',
    body: 'Bundle selects with metadata, version hashes, and client-ready delivery links instantly.',
  },
]

export function DesignOne() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#020612] text-slate-100">
      <div className="pointer-events-none absolute inset-0 mesh-fade opacity-70" />
      <div className="pointer-events-none absolute -left-20 top-20 h-72 w-72 rounded-full bg-cyan-500/25 blur-[100px]" />
      <div className="pointer-events-none absolute right-0 top-28 h-80 w-80 rounded-full bg-orange-500/20 blur-[130px]" />

      <div className="relative">
        <header className="section-wrap flex items-center justify-between py-7">
          <Link to="/" className="font-orbitron text-xs uppercase tracking-[0.2em] text-cyan-200/90 transition hover:text-cyan-100">
            Back to Concepts
          </Link>
          <div className="hidden gap-8 font-sora text-xs text-slate-300 md:flex">
            <span>Models</span>
            <span>Workflow</span>
            <span>Pricing</span>
            <span>Enterprise</span>
          </div>
          <button className="rounded-full border border-cyan-300/60 px-4 py-2 font-orbitron text-xs uppercase tracking-[0.14em] text-cyan-100 transition hover:bg-cyan-300/10">
            Start Trial
          </button>
        </header>

        <section className="section-wrap pb-20 pt-8 lg:pb-28">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="font-orbitron text-xs uppercase tracking-[0.26em] text-cyan-300">Signal Forge Direction</p>
              <h1 className="mt-5 max-w-2xl font-orbitron text-4xl leading-[1.02] text-shadow-tight sm:text-6xl lg:text-7xl">
                Command every model from one image battlefield.
              </h1>
              <p className="mt-6 max-w-xl font-sora text-base leading-relaxed text-slate-300">
                T4 Canvas is a power-user studio where Nano Banana Pro, Flux 2, gpt-image-1.5, and Seedream run side-by-side. One flat monthly fee unlocks generation, editing, and export at full speed.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <button className="rounded-full bg-cyan-300 px-6 py-3 font-orbitron text-xs uppercase tracking-[0.15em] text-slate-950 transition hover:bg-cyan-200">
                  Launch Studio
                </button>
                <button className="rounded-full border border-slate-500 px-6 py-3 font-orbitron text-xs uppercase tracking-[0.15em] text-slate-100 transition hover:border-slate-200">
                  Watch Live Session
                </button>
              </div>
            </div>

            <div className="glass-panel noise-overlay relative overflow-hidden rounded-3xl p-6">
              <div className="absolute left-0 top-0 h-px w-20 bg-cyan-300/70 animate-scan" />
              <p className="font-orbitron text-xs uppercase tracking-[0.2em] text-cyan-200">Live Queue</p>
              <div className="mt-4 space-y-3 font-sora">
                <div className="rounded-2xl border border-cyan-200/20 bg-cyan-300/10 p-4">
                  <p className="text-xs uppercase tracking-[0.16em] text-cyan-200">Scene build</p>
                  <p className="mt-2 text-sm text-slate-200">Flux 2 resolving neon rain reflections on chrome surfaces.</p>
                </div>
                <div className="rounded-2xl border border-orange-200/20 bg-orange-300/10 p-4">
                  <p className="text-xs uppercase tracking-[0.16em] text-orange-200">Edit pass</p>
                  <p className="mt-2 text-sm text-slate-200">gpt-image-1.5 replacing signage language while preserving depth.</p>
                </div>
                <div className="rounded-2xl border border-emerald-200/20 bg-emerald-300/10 p-4">
                  <p className="text-xs uppercase tracking-[0.16em] text-emerald-200">Variant burst</p>
                  <p className="mt-2 text-sm text-slate-200">Seedream spinning 12 art-direction variations for selection.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-wrap pb-16">
          <div className="mb-6 flex items-end justify-between">
            <h2 className="font-orbitron text-2xl uppercase tracking-[0.12em] text-cyan-100">Model array</h2>
            <p className="font-sora text-sm text-slate-400">Every lane available with one subscription.</p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {modelModules.map((item) => (
              <article key={item.model} className="rounded-3xl border border-slate-700/80 bg-slate-900/70 p-5 transition duration-300 hover:border-cyan-300/50">
                <div className="flex items-center justify-between">
                  <h3 className="font-orbitron text-lg text-slate-100">{item.model}</h3>
                  <span className="font-sora text-xs uppercase tracking-[0.14em] text-cyan-200">{item.origin}</span>
                </div>
                <p className="mt-3 font-sora text-sm leading-relaxed text-slate-300">{item.profile}</p>
                <p className="mt-4 font-orbitron text-xs uppercase tracking-[0.14em] text-amber-200">{item.score}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section-wrap pb-16">
          <div className="rounded-[2rem] border border-slate-700/80 bg-slate-900/55 p-6 sm:p-8">
            <h2 className="font-orbitron text-2xl uppercase tracking-[0.12em] text-slate-100">Pipeline choreography</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {workflow.map((step) => (
                <div key={step.title} className="rounded-2xl border border-slate-700/80 bg-slate-950/45 p-4">
                  <h3 className="font-orbitron text-sm uppercase tracking-[0.16em] text-cyan-200">{step.title}</h3>
                  <p className="mt-2 font-sora text-sm leading-relaxed text-slate-300">{step.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-wrap pb-20">
          <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
            <article className="rounded-[2rem] border border-emerald-300/30 bg-emerald-300/10 p-6 sm:p-8">
              <p className="font-orbitron text-xs uppercase tracking-[0.2em] text-emerald-200">Benchmark board</p>
              <div className="mt-5 grid gap-4 sm:grid-cols-3">
                <div>
                  <p className="font-orbitron text-3xl text-slate-100">18x</p>
                  <p className="mt-1 font-sora text-xs text-slate-300">faster concept throughput</p>
                </div>
                <div>
                  <p className="font-orbitron text-3xl text-slate-100">94%</p>
                  <p className="mt-1 font-sora text-xs text-slate-300">fewer tool switches</p>
                </div>
                <div>
                  <p className="font-orbitron text-3xl text-slate-100">1 feed</p>
                  <p className="mt-1 font-sora text-xs text-slate-300">for all model outputs</p>
                </div>
              </div>
            </article>

            <article className="rounded-[2rem] border border-cyan-300/35 bg-slate-900/80 p-6 sm:p-8">
              <p className="font-orbitron text-xs uppercase tracking-[0.2em] text-cyan-200">Flat Fee Membership</p>
              <p className="mt-4 font-orbitron text-5xl text-cyan-100">$79</p>
              <p className="mt-1 font-sora text-sm text-slate-300">per month. No credits. No model silos.</p>
              <button className="mt-6 w-full rounded-full bg-cyan-300 px-5 py-3 font-orbitron text-xs uppercase tracking-[0.14em] text-slate-950 transition hover:bg-cyan-200">
                Activate T4 Canvas
              </button>
            </article>
          </div>
        </section>
      </div>
    </main>
  )
}
