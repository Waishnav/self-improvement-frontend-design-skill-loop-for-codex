import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'

/*
Concept: Sunday broadsheet technology section.
Screenshot moment: The oversized split headline with "Canvas" in terracotta over paper grain and masthead rules.
What would feel wrong: Neon glows, glass cards, and symmetric startup blocks.
*/

type Billing = 'monthly' | 'yearly'

const rates = {
  monthly: { price: 39, note: 'cancel anytime' },
  yearly: { price: 31, note: 'billed annually, 2 months free' },
}

function DesignOne() {
  const [billing, setBilling] = useState<Billing>('monthly')
  const current = useMemo(() => rates[billing], [billing])

  return (
    <main className="paper-grain min-h-screen bg-[#f6efe5] px-5 py-6 text-[#1e1814] sm:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl border border-[#3f3128] bg-[#f8f2e8] p-4 sm:p-8 reveal">
        <header className="border-y border-[#3f3128] py-3">
          <div className="grid gap-2 text-xs sm:grid-cols-3">
            <p className="font-['Public_Sans']">T4 CANVAS CHRONICLE</p>
            <p className="text-center font-['Public_Sans'] uppercase tracking-[0.08em]">Issue 01 • Image Studio Desk</p>
            <div className="flex justify-between gap-3 font-['Public_Sans'] sm:justify-end">
              <span>Single flat fee</span>
              <span>All four models</span>
            </div>
          </div>
        </header>

        <section className="relative border-b border-[#3f3128] pb-10 pt-8">
          <p className="font-['Public_Sans'] text-xs uppercase tracking-[0.12em] text-[#8f4d35]">Front Page Story</p>
          <h1 className="mt-3 max-w-5xl font-['Cormorant_Garamond'] text-[clamp(3.2rem,10vw,8.4rem)] leading-[0.88]">
            Build bold campaigns in one
            <span className="ml-3 italic text-[#a84b2e]">Canvas.</span>
          </h1>
          <p className="mt-5 max-w-2xl font-['Public_Sans'] text-base leading-relaxed sm:text-lg">
            Nano Banana Pro, Flux 2, gpt-image-1.5, and Seedream now live in one studio. Generate, revise, upscale,
            and deliver from a single seat.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <button className="cursor-pointer border border-[#2a221d] bg-[#1f1914] px-6 py-3 font-['Public_Sans'] text-sm text-[#f8f2e8] transition hover:-translate-y-0.5 hover:bg-[#a84b2e]">
              Start 7-day trial
            </button>
            <Link
              to="/"
              className="border border-[#3f3128] px-6 py-3 font-['Public_Sans'] text-sm transition hover:bg-[#ece1d2]"
            >
              View all concepts
            </Link>
          </div>
          <p className="absolute -right-2 bottom-2 origin-bottom-right rotate-180 font-['Public_Sans'] text-[11px] uppercase tracking-[0.18em] text-[#8b7a68] [writing-mode:vertical-rl]">
            Design study one
          </p>
        </section>

        <section className="grid gap-6 border-b border-[#3f3128] py-8 md:grid-cols-3">
          <article>
            <h2 className="font-['Cormorant_Garamond'] text-3xl">Newsroom Speed</h2>
            <p className="mt-3 font-['Public_Sans'] text-sm leading-relaxed">
              Draft ten concepts in Flux 2, pick two, then push polished edits in gpt-image-1.5 without moving projects.
            </p>
          </article>
          <article>
            <h2 className="font-['Cormorant_Garamond'] text-3xl">Model Desk</h2>
            <ul className="mt-3 space-y-2 font-['Public_Sans'] text-sm">
              <li>Nano Banana Pro: ad-ready realism</li>
              <li>Seedream: stylized illustration runs</li>
              <li>Flux 2: high-control concept frames</li>
            </ul>
          </article>
          <article>
            <h2 className="font-['Cormorant_Garamond'] text-3xl">Editor Notes</h2>
            <p className="mt-3 border-l-2 border-[#3f3128] pl-4 font-['Public_Sans'] text-sm leading-relaxed italic">
              "One subscription replaced four disconnected pipelines. We ship faster and redo less."
            </p>
          </article>
        </section>

        <section className="grid gap-7 py-8 md:grid-cols-[1.3fr_1fr]">
          <div>
            <p className="font-['Public_Sans'] text-xs uppercase tracking-[0.1em] text-[#8f4d35]">Subscription Desk</p>
            <h3 className="mt-3 font-['Cormorant_Garamond'] text-5xl leading-[0.9]">Flat fee, full model stack.</h3>
            <p className="mt-4 max-w-xl font-['Public_Sans'] text-sm leading-relaxed">
              No credits, no add-ons, no separate contracts. Every seat includes generation, canvas edits, and team history.
            </p>
          </div>
          <div className="border border-[#3f3128] bg-[#f0e5d7] p-5">
            <div className="inline-flex gap-2 border border-[#3f3128] p-1">
              <button
                onClick={() => setBilling('monthly')}
                className={`cursor-pointer px-3 py-1 font-['Public_Sans'] text-xs uppercase tracking-[0.08em] transition ${
                  billing === 'monthly' ? 'bg-[#2a221d] text-[#f8f2e8]' : 'hover:bg-[#e0d2c0]'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBilling('yearly')}
                className={`cursor-pointer px-3 py-1 font-['Public_Sans'] text-xs uppercase tracking-[0.08em] transition ${
                  billing === 'yearly' ? 'bg-[#2a221d] text-[#f8f2e8]' : 'hover:bg-[#e0d2c0]'
                }`}
              >
                Yearly
              </button>
            </div>
            <p className="mt-4 font-['Cormorant_Garamond'] text-6xl leading-none">
              ${current.price}
              <span className="ml-2 align-middle font-['Public_Sans'] text-sm">per seat/mo</span>
            </p>
            <p className="mt-2 font-['Public_Sans'] text-xs text-[#4c3c32]">{current.note}</p>
            <button className="mt-5 w-full cursor-pointer border border-[#2a221d] bg-[#2a221d] px-4 py-3 font-['Public_Sans'] text-sm text-[#f8f2e8] transition hover:bg-[#a84b2e]">
              Claim founding access
            </button>
          </div>
        </section>
      </div>
    </main>
  )
}

export default DesignOne
