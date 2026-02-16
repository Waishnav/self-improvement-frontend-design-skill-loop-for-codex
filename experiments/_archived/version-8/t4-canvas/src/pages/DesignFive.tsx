import { useState } from 'react'

const pillars = [
  {
    title: 'Calm Production',
    copy: 'Queue hundreds of renders without losing visual continuity across campaigns and formats.',
  },
  {
    title: 'Art-Direction Memory',
    copy: 'Store style vectors once and apply them to Nano Banana Pro, Flux 2, gpt-image-1.5, and Seedream.',
  },
  {
    title: 'Reliable Delivery',
    copy: 'Export every cut with prompt traces so teams can reproduce edits on demand.',
  },
]

export function DesignFive() {
  const [billing, setBilling] = useState<'monthly' | 'annual'>('monthly')
  const monthly = billing === 'monthly'

  return (
    <div className="theme-five relative min-h-screen overflow-x-clip bg-[#f6f1e8] text-[#261e14]">
      <div className="lux-gradient pointer-events-none absolute inset-0 -z-10" />

      <main className="mx-auto max-w-6xl px-6 pb-32 pt-10 sm:px-10">
        <header className="flex flex-wrap items-center justify-between gap-4">
          <p className="font-[Manrope] text-xs uppercase tracking-[0.28em] text-[#6e5a43]">T4 Canvas / Quiet Luxury</p>
          <button className="rounded-full border border-[#6d5b44]/35 bg-[#fff8ef]/70 px-5 py-2 text-xs uppercase tracking-[0.18em] transition hover:bg-[#fff3e0] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6d5b44]">
            Request Access
          </button>
        </header>

        <section className="mt-14 text-center">
          <p className="font-[Cormorant_Garamond] text-2xl italic text-[#4f3d2b]">for image teams that value control and taste</p>
          <h1 className="mx-auto mt-4 max-w-[11ch] font-[Cormorant_Garamond] text-6xl leading-[0.9] text-[#23180e] sm:text-8xl">
            Refined AI visuals without workflow chaos.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-[#4d3f33]">
            T4 Canvas unifies generation and editing across four top models while preserving your brand language at every step.
          </p>
        </section>

        <section className="mt-14 rounded-[2rem] border border-[#7a664f]/20 bg-[#1f1913] p-6 text-[#f1e7d7] sm:p-8">
          <div className="grid gap-5 sm:grid-cols-3">
            <article className="rounded-2xl border border-[#d4c0a2]/20 bg-[#2c241d] p-5">
              <p className="text-xs uppercase tracking-[0.2em] text-[#d5be9a]">Nano Banana Pro</p>
              <p className="mt-2 text-sm text-[#eadbc6]">Fast concept exploration with polished baselines.</p>
            </article>
            <article className="rounded-2xl border border-[#d4c0a2]/20 bg-[#2c241d] p-5">
              <p className="text-xs uppercase tracking-[0.2em] text-[#d5be9a]">Flux 2</p>
              <p className="mt-2 text-sm text-[#eadbc6]">Compositional precision for campaigns and product launches.</p>
            </article>
            <article className="rounded-2xl border border-[#d4c0a2]/20 bg-[#2c241d] p-5">
              <p className="text-xs uppercase tracking-[0.2em] text-[#d5be9a]">gpt-image-1.5 + Seedream</p>
              <p className="mt-2 text-sm text-[#eadbc6]">Detail correction, style polish, and final delivery finish.</p>
            </article>
          </div>
        </section>

        <section className="mt-14 grid gap-4 sm:grid-cols-3">
          {pillars.map((pillar) => (
            <article key={pillar.title} className="rounded-3xl border border-[#7a664f]/25 bg-[#fcf8f0]/75 p-6 shadow-[0_14px_35px_rgba(68,49,34,0.08)] backdrop-blur">
              <h2 className="font-[Cormorant_Garamond] text-3xl leading-tight text-[#261b10]">{pillar.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-[#4d3f32]">{pillar.copy}</p>
            </article>
          ))}
        </section>

        <section className="mt-14 rounded-[2rem] border border-[#7a664f]/25 bg-[#f3ecdf]/90 p-7 sm:p-10">
          <p className="text-xs uppercase tracking-[0.2em] text-[#6f5a44]">Quote Plane</p>
          <blockquote className="mt-4 max-w-4xl font-[Cormorant_Garamond] text-4xl leading-tight text-[#2b1f14] sm:text-5xl">
            “T4 Canvas replaced four disconnected tools with one elegant studio where our visual system stays coherent.”
          </blockquote>
          <p className="mt-4 text-sm uppercase tracking-[0.16em] text-[#68533d]">Ari Moore · Creative Director, Northline Atelier</p>
        </section>

        <section className="mt-14 rounded-[2rem] border border-[#7a664f]/30 bg-[#201a15] p-7 text-[#f2e8d9] sm:p-9">
          <div className="flex flex-wrap items-center justify-between gap-5">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[#d8bf9f]">Pricing Strip</p>
              <h2 className="mt-2 font-[Cormorant_Garamond] text-4xl sm:text-5xl">Single membership, complete image stack.</h2>
            </div>
            <div className="inline-flex rounded-full border border-[#d8bf9f]/35 bg-[#2f261f] p-1">
              <button
                type="button"
                onClick={() => setBilling('monthly')}
                className={`rounded-full px-4 py-2 text-xs uppercase tracking-[0.16em] transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d8bf9f] ${
                  monthly ? 'bg-[#d8bf9f] text-[#241910]' : 'text-[#e9d8c2] hover:bg-[#3a2f27]'
                }`}
              >
                Monthly
              </button>
              <button
                type="button"
                onClick={() => setBilling('annual')}
                className={`rounded-full px-4 py-2 text-xs uppercase tracking-[0.16em] transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d8bf9f] ${
                  !monthly ? 'bg-[#d8bf9f] text-[#241910]' : 'text-[#e9d8c2] hover:bg-[#3a2f27]'
                }`}
              >
                Annual
              </button>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="font-[Cormorant_Garamond] text-7xl leading-none text-[#f7eedf]">
                ${monthly ? '39' : '31'}
              </p>
              <p className="text-xs uppercase tracking-[0.2em] text-[#d8bf9f]">per month {monthly ? '' : '(billed yearly)'}</p>
            </div>
            <button className="rounded-full border border-[#d8bf9f]/40 bg-[#d8bf9f]/20 px-6 py-3 text-xs uppercase tracking-[0.2em] text-[#f4eadc] transition hover:bg-[#d8bf9f]/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d8bf9f]">
              Enter T4 Canvas
            </button>
          </div>
        </section>

        <footer className="mt-12 text-xs uppercase tracking-[0.2em] text-[#7a634a]">
          T4 Canvas / Premium Image Operations / One Flat Membership
        </footer>
      </main>
    </div>
  )
}
