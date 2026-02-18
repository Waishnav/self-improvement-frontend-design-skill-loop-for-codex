import { Link } from 'react-router-dom'
import { MODEL_NAMES } from '../data/models'

export default function DesignTwoPage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#f3eee5] text-[#1c1712]">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(28,23,18,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(28,23,18,0.05)_1px,transparent_1px)] bg-[size:34px_34px]" />
      <div className="relative mx-auto flex w-full max-w-7xl flex-col gap-10 px-6 pb-16 pt-8 md:px-10">
        <header className="flex flex-wrap items-center justify-between gap-3 border-b border-[#1c1712]/20 pb-4">
          <div>
            <p className="font-['DM_Sans'] text-xs uppercase tracking-[0.32em] text-[#5b4f43]">Concept Two</p>
            <h1 className="font-['Cormorant_Garamond'] text-4xl">T4 Canvas Chronicle</h1>
          </div>
          <Link
            to="/"
            className="rounded-full border border-[#1c1712]/25 px-4 py-2 font-['DM_Sans'] text-xs uppercase tracking-[0.2em] text-[#1c1712] transition hover:bg-[#1c1712]/8"
          >
            View All Concepts
          </Link>
        </header>

        <main className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:gap-12">
          <section>
            <p className="font-['DM_Sans'] text-xs uppercase tracking-[0.36em] text-[#7f6f5f]">A Premium Creative Journal</p>
            <h2 className="mt-3 font-['Cormorant_Garamond'] text-[clamp(3rem,8vw,6.2rem)] leading-[0.88]">
              One Subscription for Every Visual Mood Board, Campaign, and Draft
            </h2>
            <p className="mt-5 max-w-2xl font-['DM_Sans'] text-lg leading-relaxed text-[#3a3028] first-letter:mr-2 first-letter:font-['Cormorant_Garamond'] first-letter:text-6xl first-letter:leading-none first-letter:text-[#231b13]">
              T4 Canvas brings elite model diversity into one elegant studio. Move from painterly moods to product realism in seconds,
              while preserving a single editorial workflow and predictable monthly cost.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {MODEL_NAMES.map((model) => (
                <div key={model} className="rounded-2xl border border-[#1c1712]/20 bg-[#fffdf8] px-4 py-3 font-['DM_Sans'] text-sm">
                  {model}
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <button className="rounded-full bg-[#1c1712] px-6 py-3 font-['DM_Sans'] text-xs uppercase tracking-[0.2em] text-[#f8f2e8] transition hover:bg-[#2b221a]">
                Start Your Studio
              </button>
              <button className="rounded-full border border-[#1c1712]/25 px-6 py-3 font-['DM_Sans'] text-xs uppercase tracking-[0.2em] text-[#1c1712] transition hover:bg-[#1c1712]/8">
                Read Product Notes
              </button>
            </div>
          </section>

          <aside className="space-y-4">
            <article className="rotate-[-2deg] rounded-3xl border border-[#1c1712]/20 bg-[#fffdf8] p-6 shadow-[8px_8px_0_rgba(28,23,18,0.12)]">
              <p className="font-['DM_Sans'] text-xs uppercase tracking-[0.24em] text-[#7f6f5f]">Editor&apos;s Pick</p>
              <h3 className="mt-2 font-['Cormorant_Garamond'] text-3xl">Creative Control Without Creative Friction</h3>
              <p className="mt-3 font-['DM_Sans'] text-sm text-[#3a3028]">
                Fine-tune style direction, composition, and texture while retaining speed usually reserved for one-click tools.
              </p>
            </article>
            <article className="rotate-[2deg] rounded-3xl border border-[#1c1712]/20 bg-[#ede4d4] p-6 shadow-[8px_8px_0_rgba(28,23,18,0.12)]">
              <p className="font-['DM_Sans'] text-xs uppercase tracking-[0.24em] text-[#5f5143]">Pricing Thesis</p>
              <h3 className="mt-2 font-['Cormorant_Garamond'] text-3xl">Flat Fee, Full Access</h3>
              <p className="mt-3 font-['DM_Sans'] text-sm text-[#3a3028]">
                Spend your time directing image outcomes, not balancing token spreadsheets across disconnected platforms.
              </p>
            </article>
          </aside>
        </main>
      </div>
    </div>
  )
}
