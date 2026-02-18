import { Link } from 'react-router-dom'
import { MODEL_NAMES } from '../data/models'

export default function DesignFourPage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#ebf8ff] text-[#08253f]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(115,241,220,0.55),transparent_35%),radial-gradient(circle_at_78%_15%,rgba(126,172,255,0.5),transparent_33%),radial-gradient(circle_at_50%_80%,rgba(255,207,226,0.55),transparent_42%)]" />
      <div className="pointer-events-none absolute left-[-8%] top-[24%] h-80 w-80 rounded-full bg-cyan-200/40 blur-3xl animate-drift" />
      <div className="pointer-events-none absolute right-[-6%] top-[35%] h-72 w-72 rounded-full bg-indigo-200/45 blur-3xl animate-float" />

      <div className="relative mx-auto flex w-full max-w-7xl flex-col gap-10 px-6 pb-16 pt-8 md:px-10">
        <header className="flex flex-wrap items-center justify-between gap-3 rounded-full border border-white/60 bg-white/65 px-6 py-3 backdrop-blur">
          <div>
            <p className="font-['Manrope'] text-[11px] uppercase tracking-[0.28em] text-[#2e5a80]">Concept Four</p>
            <h1 className="font-['Bricolage_Grotesque'] text-2xl">T4 Canvas Aurora Flow</h1>
          </div>
          <Link
            to="/"
            className="rounded-full border border-[#2e5a80]/25 bg-white/70 px-4 py-2 font-['Manrope'] text-xs uppercase tracking-[0.2em] text-[#1c4569] transition hover:bg-white"
          >
            View All Concepts
          </Link>
        </header>

        <main className="grid items-center gap-8 lg:grid-cols-[1.12fr_0.88fr]">
          <section>
            <p className="font-['Manrope'] text-xs uppercase tracking-[0.32em] text-[#3a6d96]">Fluid Creative Studio</p>
            <h2 className="mt-3 font-['Bricolage_Grotesque'] text-[clamp(2.8rem,8vw,6.6rem)] leading-[0.9] text-[#0a3254]">
              Shape Images Like Weather Systems, Not Static Files
            </h2>
            <p className="mt-5 max-w-2xl text-lg text-[#16486f]">
              T4 Canvas merges four elite generation models into a single atmosphere. Blend styles, branch edits, and move from idea to
              production-ready assets with one subscription.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <button className="rounded-full bg-[#0f4e7e] px-6 py-3 font-['Manrope'] text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-[#0c4169]">
                Enter The Studio
              </button>
              <button className="rounded-full border border-[#0f4e7e]/35 bg-white/60 px-6 py-3 font-['Manrope'] text-xs uppercase tracking-[0.2em] text-[#0f4e7e] transition hover:bg-white">
                Explore Workflow
              </button>
            </div>
          </section>

          <aside className="rounded-[2rem] border border-white/70 bg-white/65 p-6 shadow-[0_30px_60px_rgba(12,64,105,0.15)] backdrop-blur">
            <p className="font-['Manrope'] text-xs uppercase tracking-[0.24em] text-[#2e5a80]">Model Cloud</p>
            <div className="mt-4 grid gap-3">
              {MODEL_NAMES.map((model, index) => (
                <div
                  key={model}
                  className="rounded-2xl border border-[#2e5a80]/18 bg-gradient-to-r from-white to-[#dff4ff] px-4 py-3"
                  style={{ animationDelay: `${index * 140}ms` }}
                >
                  <p className="font-['Bricolage_Grotesque'] text-lg text-[#0f3d62]">{model}</p>
                </div>
              ))}
            </div>
            <div className="mt-5 rounded-2xl border border-[#2e5a80]/20 bg-[#d9f0ff]/65 p-4">
              <p className="font-['Manrope'] text-xs uppercase tracking-[0.24em] text-[#2e5a80]">Subscription Philosophy</p>
              <p className="mt-1 font-['Bricolage_Grotesque'] text-2xl text-[#0f3d62]">One Flat Monthly Plan</p>
              <p className="mt-1 text-sm text-[#1b557f]">Predictable cost for high-velocity visual experimentation.</p>
            </div>
          </aside>
        </main>

        <section className="grid gap-4 md:grid-cols-3">
          {[
            {
              title: 'Mood Layering',
              copy: 'Blend references and style strengths into custom presets that persist across engines.',
            },
            {
              title: 'Gentle Iteration',
              copy: 'Non-destructive edits keep every prior version available for instant aesthetic rewind.',
            },
            {
              title: 'Export Streams',
              copy: 'Push final outputs to campaign folders and social-ready packs in one unified action.',
            },
          ].map((item) => (
            <article key={item.title} className="rounded-3xl border border-white/70 bg-white/55 p-5 backdrop-blur">
              <h3 className="font-['Bricolage_Grotesque'] text-2xl text-[#0f3d62]">{item.title}</h3>
              <p className="mt-2 text-[#1b557f]">{item.copy}</p>
            </article>
          ))}
        </section>
      </div>
    </div>
  )
}
