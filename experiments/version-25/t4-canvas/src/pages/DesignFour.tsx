import { useState } from 'react'
import { Link } from 'react-router-dom'

/*
Concept: Curated gallery wall and placard notes.
Screenshot moment: The layered paper cards drifting around the serif headline with the open FAQ placard.
What would feel wrong: Hard tech gradients, strict symmetry, and sterile corporate copy.
*/

const faq = [
  {
    question: 'What is included in the flat fee?',
    answer: 'All four generation engines, prompt history, image edits, and team libraries are included.',
  },
  {
    question: 'Can teams share style presets?',
    answer: 'Yes. Save visual directions once, then apply them across Nano Banana Pro, Flux 2, and Seedream.',
  },
  {
    question: 'Does editing cost extra credits?',
    answer: 'No. gpt-image-1.5 edits and mask passes are part of the same monthly plan.',
  },
]

function DesignFour() {
  const [open, setOpen] = useState(0)

  return (
    <main className="min-h-screen bg-[#f6f2ea] px-5 py-7 text-[#2d2620] sm:px-10">
      <div className="mx-auto max-w-6xl reveal">
        <header className="flex flex-wrap items-center justify-between gap-3">
          <p className="font-['Atkinson_Hyperlegible'] text-xs uppercase tracking-[0.12em] text-[#8f4c39]">T4 Canvas Atelier</p>
          <div className="flex items-center gap-5 font-['Atkinson_Hyperlegible'] text-sm">
            <span>For image teams</span>
            <Link to="/" className="underline decoration-1 underline-offset-4 transition hover:text-[#8f4c39]">
              concept index
            </Link>
          </div>
        </header>

        <section className="mt-8 grid gap-7 lg:grid-cols-[1.3fr_1fr]">
          <div className="relative min-h-[460px] overflow-hidden border border-[#b9ab9a] bg-[#fbf7f0] p-6 sm:p-8">
            <div className="pointer-events-none absolute -left-16 top-12 h-56 w-56 rounded-[42%_58%_54%_46%] bg-[#d7b89f]/45" />
            <div className="pointer-events-none absolute -right-12 bottom-16 h-48 w-48 rounded-[61%_39%_35%_65%] bg-[#b58a74]/35" />

            <p className="relative z-10 font-['Atkinson_Hyperlegible'] text-xs uppercase tracking-[0.1em] text-[#8f4c39]">Gallery Statement</p>
            <h1 className="relative z-10 mt-3 max-w-3xl font-['DM_Serif_Display'] text-[clamp(3.1rem,9.5vw,8rem)] leading-[0.86]">
              One studio.
              <span className="ml-3 italic text-[#8f4c39]">Every</span>
              style direction.
            </h1>
            <p className="relative z-10 mt-5 max-w-xl font-['Atkinson_Hyperlegible'] text-base leading-relaxed">
              Move from rough concept to ad-ready frame across Nano Banana Pro, Flux 2, gpt-image-1.5, and Seedream,
              without buying separate model plans.
            </p>

            <div className="relative z-10 mt-8 flex flex-wrap gap-3">
              <button className="cursor-pointer border border-[#7b5f4f] bg-[#7b5f4f] px-6 py-3 font-['Atkinson_Hyperlegible'] text-sm text-[#fff5ee] transition hover:-translate-y-0.5 hover:bg-[#8f4c39]">
                Start studio pass
              </button>
              <a
                href="#faq"
                className="border border-[#b9ab9a] bg-[#f5eee4] px-6 py-3 font-['Atkinson_Hyperlegible'] text-sm transition hover:bg-[#eadfce]"
              >
                See what is included
              </a>
            </div>

            <div className="absolute right-4 top-5 rotate-3 border border-[#b9ab9a] bg-[#fff9ef] p-3 font-['Atkinson_Hyperlegible'] text-xs shadow-[0_10px_20px_rgba(0,0,0,0.06)]">
              Curator Note: Flat fee means teams iterate freely.
            </div>
          </div>

          <aside id="faq" className="border border-[#b9ab9a] bg-[#faf4ea] p-5 sm:p-6">
            <p className="font-['Atkinson_Hyperlegible'] text-xs uppercase tracking-[0.11em] text-[#8f4c39]">Placard FAQ</p>
            <div className="mt-4 space-y-3">
              {faq.map((item, index) => (
                <button
                  key={item.question}
                  onClick={() => setOpen(index)}
                  className={`w-full cursor-pointer border p-4 text-left transition ${
                    open === index ? 'border-[#7b5f4f] bg-[#f2e5d5]' : 'border-[#cfc0ae] bg-[#fffaf1] hover:bg-[#f6ece0]'
                  }`}
                >
                  <p className="font-['DM_Serif_Display'] text-2xl leading-[1.05]">{item.question}</p>
                  {open === index ? (
                    <p className="mt-3 font-['Atkinson_Hyperlegible'] text-sm leading-relaxed text-[#5d5046]">{item.answer}</p>
                  ) : null}
                </button>
              ))}
            </div>
          </aside>
        </section>
      </div>
    </main>
  )
}

export default DesignFour
