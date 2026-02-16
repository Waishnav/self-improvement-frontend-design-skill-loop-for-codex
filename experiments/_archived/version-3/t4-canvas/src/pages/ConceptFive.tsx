import { useState } from 'react'

const statements = [
  {
    title: 'NO PER-MODEL TAXES',
    copy: 'Nano Banana Pro, Flux 2, gpt-image-1.5, and Seedream are all unlocked on day one.',
  },
  {
    title: 'NO SAFE DEFAULT LOOKS',
    copy: 'Route prompts, branch edits, and compose visual systems with aggressive creative control.',
  },
  {
    title: 'NO FRAGMENTED WORKFLOW',
    copy: 'Generate, inpaint, compare, and ship campaign packs in one board built for power users.',
  },
]

const ribbons = ['GENERATE', 'DIRECT', 'EDIT', 'COMPARE', 'SHIP']

export function ConceptFive() {
  const [focus, setFocus] = useState({ x: 48, y: 30 })

  return (
    <main
      className="relative overflow-hidden bg-[#f7f0e4] text-[#121110]"
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect()
        const x = ((event.clientX - rect.left) / rect.width) * 100
        const y = ((event.clientY - rect.top) / rect.height) * 100
        setFocus({ x, y })
      }}
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: `radial-gradient(circle at ${focus.x}% ${focus.y}%, rgba(230, 68, 37, 0.24), transparent 42%)`,
        }}
      />

      <section className="relative mx-auto max-w-7xl px-6 pb-16 pt-28">
        <div className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-end">
          <div>
            <p className="font-public text-xs tracking-[0.24em] text-[#7a1a12]">T4 CANVAS RIOT POSTER</p>
            <h1 className="mt-4 font-bebas text-[4.4rem] leading-[0.82] text-balance sm:text-[6rem] lg:text-[7.5rem]">
              BUILD LOUDER
              <span className="block text-[#df3e2a]">IMAGE CAMPAIGNS</span>
              <span className="block">FROM ONE STUDIO</span>
            </h1>
            <p className="mt-4 max-w-xl font-public text-base text-[#2c2219] sm:text-lg">
              One membership powers generation and edits across all four models, with zero upsell traps and zero workflow drift.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <button className="border-2 border-[#111] bg-[#e53e27] px-8 py-3 font-bebas text-2xl leading-none tracking-[0.04em] text-[#fff5f0] transition hover:-translate-y-0.5 hover:bg-[#d73722] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#111]">
                ENTER CANVAS
              </button>
              <button className="border-2 border-[#111] bg-[#fff9ef] px-8 py-3 font-bebas text-2xl leading-none tracking-[0.04em] text-[#111] transition hover:-translate-y-0.5 hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#111]">
                SEE PLAN
              </button>
            </div>
          </div>

          <aside className="relative rounded-[2rem] border-2 border-[#111] bg-[#fff8ef] p-5 shadow-[10px_10px_0_#111]">
            <div className="absolute -top-4 right-5 rotate-[-4deg] border-2 border-[#111] bg-[#f8d64d] px-4 py-1 font-bebas text-xl leading-none tracking-[0.05em]">
              FLAT FEE
            </div>
            <p className="font-public text-xs tracking-[0.16em] text-[#5d4838]">ENGINE STATUS</p>
            <div className="mt-3 space-y-2">
              {['Nano Banana Pro', 'Flux 2', 'gpt-image-1.5', 'Seedream'].map((engine) => (
                <div key={engine} className="flex items-center justify-between border-2 border-[#111] bg-[#f2efe8] px-3 py-2">
                  <span className="font-bebas text-2xl leading-none">{engine}</span>
                  <span className="font-public text-xs tracking-[0.14em]">ONLINE</span>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section className="relative border-y-2 border-[#111] bg-[#fff8ef] px-6 py-12">
        <div className="mx-auto max-w-7xl grid gap-4 md:grid-cols-3">
          {statements.map((statement) => (
            <article
              key={statement.title}
              className="border-2 border-[#111] bg-[#f6ecdd] p-5 transition hover:-translate-y-1 hover:bg-[#fff4e8]"
            >
              <h2 className="font-bebas text-4xl leading-[0.9]">{statement.title}</h2>
              <p className="mt-3 font-public text-base leading-relaxed text-[#2f241b]">{statement.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="relative px-6 py-14">
        <div className="mx-auto max-w-7xl space-y-3">
          {ribbons.map((item, index) => (
            <div
              key={item}
              className={[
                'flex items-center justify-between border-2 border-[#111] px-5 py-4',
                index % 2 === 0 ? 'rotate-[-1.2deg] bg-[#f8d64d]' : 'rotate-[1deg] bg-[#e53e27] text-[#fff4ef]',
              ].join(' ')}
            >
              <p className="font-bebas text-5xl leading-none">{item}</p>
              <p className="font-public text-xs tracking-[0.2em] uppercase">inside one studio</p>
            </div>
          ))}
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-6 pb-16">
        <div className="border-2 border-[#111] bg-[#111] p-7 text-[#fff7ed] shadow-[12px_12px_0_#f8d64d] sm:p-10">
          <p className="font-public text-xs tracking-[0.22em] text-[#f8d64d]">OFFER SLAB</p>
          <h3 className="mt-3 font-bebas text-7xl leading-[0.85] sm:text-8xl">$39 MONTHLY</h3>
          <p className="mt-4 max-w-2xl font-public text-base text-[#f7d9c8]">
            Unlimited generation, premium editing stack, model compare workflows, and team collaboration included in one plan.
          </p>
          <button className="mt-7 border-2 border-[#f8d64d] bg-[#f8d64d] px-8 py-3 font-bebas text-2xl leading-none tracking-[0.04em] text-[#111] transition hover:bg-[#ffe070] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f8d64d]">
            CLAIM FOUNDING PASS
          </button>
        </div>
      </section>

      <footer className="border-t-2 border-[#111] bg-[#e53e27] py-4 text-[#fff8ef]">
        <div className="animate-marquee whitespace-nowrap font-bebas text-4xl leading-none tracking-[0.06em]">
          T4 CANVAS • POWER USER IMAGE STUDIO • ALL MODELS INCLUDED • ONE FLAT PRICE •
        </div>
      </footer>
    </main>
  )
}
