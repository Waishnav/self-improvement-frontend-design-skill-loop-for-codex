import { Link } from 'react-router-dom'
import { MODEL_NAMES } from '../data/models'

export default function DesignOnePage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#06070f] text-zinc-100">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_16%_18%,rgba(27,214,255,0.26),transparent_35%),radial-gradient(circle_at_85%_12%,rgba(255,84,189,0.25),transparent_34%),radial-gradient(circle_at_64%_82%,rgba(97,113,255,0.28),transparent_40%)]" />
      <div className="pointer-events-none absolute inset-0 bg-noise opacity-25" />
      <div className="pointer-events-none absolute -left-24 top-20 h-72 w-72 rounded-full border border-cyan-300/30 animate-spin-slow" />
      <div className="pointer-events-none absolute -right-12 bottom-16 h-52 w-52 rounded-full border border-fuchsia-300/35 animate-float" />

      <div className="relative mx-auto flex w-full max-w-7xl flex-col gap-10 px-6 pb-16 pt-8 md:px-10">
        <header className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="font-['IBM_Plex_Mono'] text-xs uppercase tracking-[0.3em] text-cyan-200">Concept One</p>
            <h1 className="font-['Syne'] text-2xl font-bold">T4 Canvas</h1>
          </div>
          <Link
            to="/"
            className="rounded-full border border-cyan-200/45 bg-cyan-300/10 px-4 py-2 font-['IBM_Plex_Mono'] text-xs uppercase tracking-[0.2em] text-cyan-100 transition hover:bg-cyan-300/20"
          >
            View All Concepts
          </Link>
        </header>

        <main className="grid items-center gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <section>
            <p className="font-['IBM_Plex_Mono'] text-xs uppercase tracking-[0.35em] text-fuchsia-200">Power-User Image Studio</p>
            <h2 className="mt-4 max-w-3xl font-['Syne'] text-[clamp(2.8rem,8vw,7.2rem)] font-semibold leading-[0.88] text-white">
              Run Your Entire Image Pipeline in One Kinetic Workspace
            </h2>
            <p className="mt-5 max-w-2xl text-lg text-zinc-200/95">
              Create, edit, and iterate with Nano Banana Pro, Flux 2, gpt-image-1.5, and Seedream without model switching overhead.
              One flat subscription. Full creative velocity.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <button className="rounded-full bg-gradient-to-r from-cyan-300 to-blue-400 px-6 py-3 font-['IBM_Plex_Mono'] text-xs font-semibold uppercase tracking-[0.2em] text-[#04111e] transition hover:brightness-110">
                Start Building
              </button>
              <button className="rounded-full border border-white/35 bg-white/10 px-6 py-3 font-['IBM_Plex_Mono'] text-xs uppercase tracking-[0.2em] text-white transition hover:bg-white/20">
                Watch 42-Second Demo
              </button>
            </div>
          </section>

          <section className="relative overflow-hidden rounded-3xl border border-white/20 bg-[#0f1430]/80 p-6 shadow-[0_0_70px_rgba(79,194,255,0.18)] backdrop-blur">
            <div className="absolute -right-10 -top-12 h-40 w-40 rounded-full bg-fuchsia-400/25 blur-3xl" />
            <div className="absolute -bottom-12 -left-8 h-44 w-44 rounded-full bg-cyan-400/20 blur-3xl" />
            <div className="relative">
              <p className="font-['IBM_Plex_Mono'] text-xs uppercase tracking-[0.25em] text-cyan-100">Live Model Deck</p>
              <div className="mt-4 grid gap-3">
                {MODEL_NAMES.map((model) => (
                  <div
                    key={model}
                    className="rounded-2xl border border-white/20 bg-white/8 px-4 py-3 font-['Syne'] text-lg leading-tight text-white/95"
                  >
                    {model}
                  </div>
                ))}
              </div>
              <div className="mt-5 rounded-2xl border border-cyan-200/30 bg-cyan-300/10 p-4">
                <p className="font-['IBM_Plex_Mono'] text-xs uppercase tracking-[0.24em] text-cyan-100">Pricing Layer</p>
                <p className="mt-2 font-['Syne'] text-2xl">One Flat Monthly Fee</p>
                <p className="mt-1 text-sm text-zinc-200">No credit packs. No model silos. No surprise ceilings.</p>
              </div>
            </div>
          </section>
        </main>

        <section className="grid gap-4 md:grid-cols-3" id="workflow">
          {[
            {
              title: 'Prompt Stack Memory',
              text: 'Pin reusable prompt modules and swap model engines without rewriting your creative DNA.',
            },
            {
              title: 'Timeline-First Editing',
              text: 'Version every render, branch aesthetic experiments, and promote winners to production packs.',
            },
            {
              title: 'Ops-Grade Exporting',
              text: 'Batch outputs for social, ads, packaging, and product UI in one synchronized run.',
            },
          ].map((item) => (
            <article
              key={item.title}
              className="rounded-3xl border border-white/15 bg-gradient-to-b from-white/10 to-white/5 p-5 backdrop-blur-sm"
            >
              <h3 className="font-['Syne'] text-2xl">{item.title}</h3>
              <p className="mt-2 text-zinc-200">{item.text}</p>
            </article>
          ))}
        </section>
      </div>
    </div>
  )
}
