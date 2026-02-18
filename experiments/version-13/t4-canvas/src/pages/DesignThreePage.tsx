import { Link } from 'react-router-dom'
import { MODEL_NAMES } from '../data/models'

export default function DesignThreePage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f8ea24] text-black">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-6 pb-14 pt-8 md:px-10">
        <header className="flex flex-wrap items-center justify-between gap-3 border-4 border-black bg-white px-4 py-3 shadow-[6px_6px_0_#000]">
          <div>
            <p className="font-['IBM_Plex_Mono'] text-[11px] uppercase tracking-[0.28em]">Concept Three</p>
            <h1 className="font-['Anton'] text-3xl uppercase">T4 Canvas / Brutalist Mode</h1>
          </div>
          <Link
            to="/"
            className="border-2 border-black bg-[#f8ea24] px-4 py-2 font-['IBM_Plex_Mono'] text-xs uppercase tracking-[0.2em] transition hover:-translate-y-0.5 hover:shadow-[3px_3px_0_#000]"
          >
            View All Concepts
          </Link>
        </header>

        <main className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <section className="relative border-4 border-black bg-white p-7 shadow-[10px_10px_0_#000]">
            <p className="font-['IBM_Plex_Mono'] text-xs uppercase tracking-[0.3em]">No Polite Marketing</p>
            <h2 className="mt-3 font-['Anton'] text-[clamp(3rem,9vw,7rem)] uppercase leading-[0.87]">One Fee. Four Models. No Excuses.</h2>
            <p className="mt-4 max-w-2xl font-['IBM_Plex_Mono'] text-sm leading-relaxed">
              T4 Canvas is for builders who generate hundreds of assets weekly and need speed, repeatability, and real aesthetic range.
              Nano Banana Pro, Flux 2, gpt-image-1.5, and Seedream ship in one relentless workflow.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <button className="border-2 border-black bg-black px-5 py-3 font-['IBM_Plex_Mono'] text-xs uppercase tracking-[0.22em] text-[#f8ea24] transition hover:bg-[#1f1f1f]">
                Launch Studio
              </button>
              <button className="border-2 border-black bg-transparent px-5 py-3 font-['IBM_Plex_Mono'] text-xs uppercase tracking-[0.22em] transition hover:bg-black hover:text-[#f8ea24]">
                See Benchmarks
              </button>
            </div>
            <div className="absolute -right-4 -top-4 rotate-[8deg] border-2 border-black bg-[#ff4f19] px-3 py-1 font-['IBM_Plex_Mono'] text-xs uppercase tracking-[0.18em] text-white">
              Power User Stack
            </div>
          </section>

          <aside className="space-y-4">
            <article className="border-4 border-black bg-black p-5 text-[#f8ea24] shadow-[8px_8px_0_#000]">
              <p className="font-['IBM_Plex_Mono'] text-xs uppercase tracking-[0.24em]">Supported Engines</p>
              <ul className="mt-3 space-y-2 font-['Anton'] text-3xl uppercase leading-none">
                {MODEL_NAMES.map((model) => (
                  <li key={model}>{model}</li>
                ))}
              </ul>
            </article>
            <article className="border-4 border-black bg-white p-5 shadow-[8px_8px_0_#000]">
              <p className="font-['IBM_Plex_Mono'] text-xs uppercase tracking-[0.24em]">Core Promise</p>
              <p className="mt-2 font-['IBM_Plex_Mono'] text-sm leading-relaxed">
                Replace tool-hopping with one command center. Explore visual extremes, refine winners, and export confidently.
              </p>
            </article>
          </aside>
        </main>

        <section className="grid gap-4 md:grid-cols-3">
          {[
            'Versioned prompts and render history for every campaign.',
            'Editable control points for style strength and composition drift.',
            'Bulk variants for social, product, and paid media dimensions.',
          ].map((item) => (
            <article key={item} className="border-4 border-black bg-white p-5 shadow-[6px_6px_0_#000]">
              <p className="font-['IBM_Plex_Mono'] text-sm leading-relaxed">{item}</p>
            </article>
          ))}
        </section>
      </div>
    </div>
  )
}
