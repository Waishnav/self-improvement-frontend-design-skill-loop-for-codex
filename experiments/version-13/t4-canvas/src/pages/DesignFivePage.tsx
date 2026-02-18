import { Link } from 'react-router-dom'
import { MODEL_NAMES } from '../data/models'

const throughput = [
  { label: 'Campaign Concepts', value: '240 / week' },
  { label: 'On-Brand Variants', value: '600 / week' },
  { label: 'Average Render Loop', value: '19s' },
]

export default function DesignFivePage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#060c19] text-[#d7e6ff]">
      <div className="pointer-events-none absolute inset-0 grid-overlay" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_10%,rgba(106,166,255,0.28),transparent_35%),radial-gradient(circle_at_83%_18%,rgba(50,218,174,0.22),transparent_36%),radial-gradient(circle_at_50%_82%,rgba(60,112,255,0.2),transparent_40%)]" />

      <div className="relative mx-auto flex w-full max-w-7xl flex-col gap-8 px-6 pb-16 pt-8 md:px-10">
        <header className="rounded-2xl border border-[#8aaeff]/28 bg-[#0f1a31]/82 px-5 py-4 backdrop-blur">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="font-['IBM_Plex_Mono'] text-xs uppercase tracking-[0.28em] text-[#9bc2ff]">Concept Five</p>
              <h1 className="font-['Bricolage_Grotesque'] text-3xl">T4 Canvas Orbit Command</h1>
            </div>
            <Link
              to="/"
              className="rounded-full border border-[#8aaeff]/40 bg-[#8aaeff]/12 px-4 py-2 font-['IBM_Plex_Mono'] text-xs uppercase tracking-[0.2em] text-[#c8dcff] transition hover:bg-[#8aaeff]/22"
            >
              View All Concepts
            </Link>
          </div>
        </header>

        <main className="grid gap-6 xl:grid-cols-[1.12fr_0.88fr]">
          <section className="rounded-3xl border border-[#8aaeff]/26 bg-[#0a1226]/88 p-7">
            <p className="font-['IBM_Plex_Mono'] text-xs uppercase tracking-[0.34em] text-[#90b7ff]">Mission-Critical Creation</p>
            <h2 className="mt-3 max-w-4xl font-['Bricolage_Grotesque'] text-[clamp(2.6rem,7vw,6.2rem)] leading-[0.9] text-white">
              Your Entire Image Ops Layer, Tuned for Throughput and Style Precision
            </h2>
            <p className="mt-5 max-w-2xl text-lg text-[#bad0fa]">
              Generate and edit with Nano Banana Pro, Flux 2, gpt-image-1.5, and Seedream from one tactical workspace with one monthly
              subscription.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {throughput.map((item) => (
                <article key={item.label} className="rounded-2xl border border-[#8aaeff]/25 bg-[#111f3e] p-4">
                  <p className="font-['IBM_Plex_Mono'] text-[11px] uppercase tracking-[0.22em] text-[#9bc2ff]">{item.label}</p>
                  <p className="mt-2 font-['Bricolage_Grotesque'] text-2xl text-white">{item.value}</p>
                </article>
              ))}
            </div>
            <div className="mt-7 flex flex-wrap gap-3">
              <button className="rounded-full bg-[#4cd8b0] px-6 py-3 font-['IBM_Plex_Mono'] text-xs font-semibold uppercase tracking-[0.2em] text-[#05221b] transition hover:bg-[#5de3bd]">
                Activate Workspace
              </button>
              <button className="rounded-full border border-[#8aaeff]/40 bg-[#8aaeff]/10 px-6 py-3 font-['IBM_Plex_Mono'] text-xs uppercase tracking-[0.2em] text-[#c8dcff] transition hover:bg-[#8aaeff]/20">
                Download Product Brief
              </button>
            </div>
          </section>

          <aside className="rounded-3xl border border-[#8aaeff]/24 bg-[#0f1a31]/88 p-6">
            <p className="font-['IBM_Plex_Mono'] text-xs uppercase tracking-[0.24em] text-[#9bc2ff]">Engine Matrix</p>
            <div className="mt-4 space-y-3">
              {MODEL_NAMES.map((model, index) => (
                <article key={model} className="rounded-2xl border border-[#8aaeff]/20 bg-[#111f3e] p-4">
                  <div className="flex items-center justify-between gap-4">
                    <p className="font-['Bricolage_Grotesque'] text-lg text-[#e5efff]">{model}</p>
                    <span className="rounded-full bg-[#4cd8b0]/18 px-2.5 py-1 font-['IBM_Plex_Mono'] text-[10px] uppercase tracking-[0.2em] text-[#93f0d3]">
                      Live
                    </span>
                  </div>
                  <div className="mt-3 h-1.5 rounded-full bg-[#1f335f]">
                    <div className="h-1.5 rounded-full bg-[#4cd8b0]" style={{ width: `${76 + index * 6}%` }} />
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-5 rounded-2xl border border-[#8aaeff]/20 bg-[#0b1428] p-4 font-['IBM_Plex_Mono'] text-xs leading-relaxed text-[#a8c4f5]">
              <p className="uppercase tracking-[0.22em] text-[#9bc2ff]">Command Note</p>
              <p className="mt-2">Flat-fee access removes budgeting friction and keeps creative teams in execution mode.</p>
            </div>
          </aside>
        </main>
      </div>
    </div>
  )
}
