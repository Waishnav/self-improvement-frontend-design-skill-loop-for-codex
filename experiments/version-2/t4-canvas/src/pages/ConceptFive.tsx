import { useState } from 'react'

const statements = [
  {
    title: 'No per-model taxes',
    copy: 'Run Nano Banana Pro, Flux 2, gpt-image-1.5, and Seedream without hidden counters or add-on licenses.',
  },
  {
    title: 'No soft defaults',
    copy: 'Push bold prompts, sharp edits, and wild art direction from one interface built for power creators.',
  },
  {
    title: 'No output bottlenecks',
    copy: 'Organize queues, compare branches, and ship campaign assets without leaving the board.',
  },
]

const ribbons = ['GENERATE', 'DIRECT', 'EDIT', 'COMPARE', 'SHIP']

export function ConceptFive() {
  const [focus, setFocus] = useState({ x: 48, y: 28 })

  return (
    <main
      className="relative overflow-hidden bg-[#f7f0e4] text-[#10100f]"
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
          background: `radial-gradient(circle at ${focus.x}% ${focus.y}%, rgba(226, 74, 45, 0.22), transparent 42%)`,
        }}
      />

      <section className="relative mx-auto max-w-7xl px-6 pb-18 pt-32">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <p className="font-spectral text-xs tracking-[0.24em] text-[#7c1813]">T4 CANVAS POSTER WEB</p>
            <h1 className="font-archivo mt-4 text-[3.35rem] leading-[0.86] uppercase sm:text-7xl lg:text-[6.1rem]">
              Build louder image campaigns from one brutal studio.
            </h1>
            <p className="mt-5 max-w-xl font-spectral text-lg text-[#2d2219]">
              One monthly fee unlocks Nano Banana Pro, Flux 2, gpt-image-1.5, and Seedream with precision editing tools and zero friction.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <button className="border-2 border-[#111] bg-[#e83e2c] px-7 py-3 font-archivo text-sm uppercase tracking-[0.08em] text-[#fff5f0] transition hover:-translate-y-0.5 hover:bg-[#d93624] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#111]">
                Enter Canvas
              </button>
              <button className="border-2 border-[#111] bg-[#fff8ef] px-7 py-3 font-archivo text-sm uppercase tracking-[0.08em] text-[#111] transition hover:-translate-y-0.5 hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#111]">
                See Membership
              </button>
            </div>
          </div>

          <div className="relative rounded-[2rem] border-2 border-[#111] bg-[#fff8ef] p-5 shadow-[10px_10px_0_#111]">
            <div className="absolute -top-4 right-5 rotate-[-5deg] border-2 border-[#111] bg-[#f8d64d] px-4 py-1 font-archivo text-xs uppercase tracking-[0.08em]">
              flat fee
            </div>
            <p className="font-spectral text-xs tracking-[0.16em] text-[#5c4838]">LIVE SYSTEM</p>
            <div className="mt-3 space-y-3 font-archivo text-sm uppercase tracking-[0.07em]">
              <div className="flex items-center justify-between border-2 border-[#111] bg-[#f0efe7] px-3 py-2">
                <span>Nano Banana Pro</span>
                <span>ONLINE</span>
              </div>
              <div className="flex items-center justify-between border-2 border-[#111] bg-[#f0efe7] px-3 py-2">
                <span>Flux 2</span>
                <span>ONLINE</span>
              </div>
              <div className="flex items-center justify-between border-2 border-[#111] bg-[#f0efe7] px-3 py-2">
                <span>gpt-image-1.5</span>
                <span>ONLINE</span>
              </div>
              <div className="flex items-center justify-between border-2 border-[#111] bg-[#f0efe7] px-3 py-2">
                <span>Seedream</span>
                <span>ONLINE</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative border-y-2 border-[#111] bg-[#fff8ef] px-6 py-14">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-4 md:grid-cols-3">
            {statements.map((statement) => (
              <article
                key={statement.title}
                className="border-2 border-[#111] bg-[#f6ecdd] p-5 transition hover:-translate-y-1 hover:bg-[#fff4e8]"
              >
                <h2 className="font-archivo text-2xl uppercase leading-tight">{statement.title}</h2>
                <p className="mt-3 font-spectral text-base leading-relaxed text-[#2e241b]">{statement.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative px-6 py-16">
        <div className="mx-auto max-w-7xl space-y-4">
          {ribbons.map((item, index) => (
            <div
              key={item}
              className={[
                'flex items-center justify-between border-2 border-[#111] px-5 py-4',
                index % 2 === 0 ? 'rotate-[-1.2deg] bg-[#f8d64d]' : 'rotate-[1deg] bg-[#e83e2c] text-[#fff3ee]',
              ].join(' ')}
            >
              <p className="font-archivo text-2xl uppercase sm:text-4xl">{item}</p>
              <p className="font-spectral text-sm tracking-[0.14em] uppercase">inside one studio</p>
            </div>
          ))}
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-6 pb-18">
        <div className="border-2 border-[#111] bg-[#111] p-7 text-[#fff7ed] shadow-[12px_12px_0_#f8d64d] sm:p-10">
          <p className="font-spectral text-xs tracking-[0.22em] text-[#f8d64d]">OFFER SLAB</p>
          <h3 className="mt-3 font-archivo text-5xl uppercase leading-none sm:text-6xl">$39 monthly</h3>
          <p className="mt-4 max-w-2xl font-spectral text-base text-[#f7d9c8]">
            Unlimited generation, premium editing, compare workflows, and team collaboration. One number, every engine included.
          </p>
          <button className="mt-7 border-2 border-[#f8d64d] bg-[#f8d64d] px-7 py-3 font-archivo text-sm uppercase tracking-[0.08em] text-[#111] transition hover:bg-[#ffe070] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f8d64d]">
            Claim Founding Pass
          </button>
        </div>
      </section>

      <footer className="border-t-2 border-[#111] bg-[#e83e2c] py-4 text-[#fff8ef]">
        <div className="animate-ticker whitespace-nowrap font-archivo text-lg uppercase tracking-[0.12em]">
          T4 CANVAS • IMAGE POWER USERS ONLY • ALL MODELS INCLUDED • NO FRAGMENTED WORKFLOWS •
        </div>
      </footer>
    </main>
  )
}
