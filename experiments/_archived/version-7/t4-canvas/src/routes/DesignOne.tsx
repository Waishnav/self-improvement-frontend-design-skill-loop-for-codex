import { useMemo, useState } from 'react'

const modelRows = [
  {
    model: 'Nano Banana Pro',
    pace: '11s avg render',
    use: 'High-fidelity product shots',
  },
  {
    model: 'Flux 2',
    pace: '6s avg render',
    use: 'Fast ideation and style sprinting',
  },
  {
    model: 'gpt-image-1.5',
    pace: '9s avg render',
    use: 'Editorial visuals with precise prompts',
  },
  {
    model: 'Seedream',
    pace: '8s avg render',
    use: 'Dreamlike storytelling compositions',
  },
]

const pipeline = [
  'Describe outcome, not tools',
  'Route prompt to best-fit model',
  'Blend seeds and style controls',
  'Ship finished artboards instantly',
]

const results = [
  { metric: '12.7M', detail: 'images generated this quarter' },
  { metric: '91%', detail: 'fewer manual touch-ups post render' },
  { metric: '4x', detail: 'faster campaign turnaround for teams' },
]

export function DesignOne() {
  const [pointer, setPointer] = useState({ x: 0, y: 0 })

  const glow = useMemo(
    () => ({
      background: `radial-gradient(560px circle at ${pointer.x}px ${pointer.y}px, rgba(255,140,66,0.30), transparent 62%)`,
    }),
    [pointer],
  )

  return (
    <main
      className="relative overflow-hidden bg-[#110d0d] text-[#fff4e6] [font-family:'Manrope',sans-serif]"
      onMouseMove={(event) => setPointer({ x: event.clientX, y: event.clientY })}
    >
      <div className="pointer-events-none absolute inset-0" style={glow} />
      <div className="pointer-events-none absolute -left-28 top-24 h-64 w-64 rounded-full bg-[#f59e0b]/20 blur-[90px]" />
      <div className="pointer-events-none absolute bottom-[-7rem] right-[-4rem] h-96 w-96 rounded-full bg-[#fb923c]/15 blur-[120px]" />

      <section className="relative mx-auto grid max-w-7xl gap-10 px-6 pb-20 pt-28 lg:grid-cols-12 lg:pb-24">
        <div className="animate-rise lg:col-span-7 lg:pt-10">
          <p className="mb-6 inline-flex rounded-full border border-[#ffedd5]/30 bg-[#1b1514] px-4 py-2 text-xs uppercase tracking-[0.26em] text-[#fed7aa]">
            T4 Canvas / Asymmetric Control Room
          </p>
          <h1 className="max-w-xl text-5xl font-semibold leading-[0.95] tracking-[-0.03em] text-[#fff6ed] [font-family:'Sora',sans-serif] sm:text-6xl lg:text-7xl">
            Direct four image engines like one instrument.
          </h1>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-[#f9d9bc] sm:text-lg">
            Generate, remix, and upscale with Nano Banana Pro, Flux 2, gpt-image-1.5, and Seedream in one flat monthly studio.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <button className="rounded-full bg-[#fff6ed] px-7 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#120d0b] transition duration-220 hover:-translate-y-0.5 hover:bg-[#ffd8b4] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ffd8b4]">
              Start Free Sandbox
            </button>
            <button className="rounded-full border border-[#fed7aa]/40 bg-[#1a1210]/70 px-7 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#fee2cc] transition duration-220 hover:border-[#fed7aa] hover:bg-[#2b1a15] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#fed7aa]">
              Watch Workflow
            </button>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {results.map((item) => (
              <article
                key={item.metric}
                className="rounded-2xl border border-[#ffedd5]/20 bg-[#1a120f]/80 p-4 transition duration-360 hover:-translate-y-1 hover:border-[#fdba74]/40"
              >
                <p className="text-3xl font-semibold tracking-tight text-[#ffedd5] [font-family:'Sora',sans-serif]">{item.metric}</p>
                <p className="mt-2 text-sm text-[#f6c6a4]">{item.detail}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="relative animate-rise-delay lg:col-span-5">
          <div className="relative rounded-[2.2rem] border border-[#fed7aa]/25 bg-[#1a120f]/95 p-6 shadow-[0_20px_80px_rgba(0,0,0,0.45)]">
            <p className="mb-5 text-xs uppercase tracking-[0.22em] text-[#fdba74]">Model Router</p>
            <ul className="space-y-4">
              {modelRows.map((row) => (
                <li
                  key={row.model}
                  className="rounded-xl border border-[#ffedd5]/15 bg-[#231714]/85 p-4 transition duration-220 hover:border-[#fdba74]/40 hover:bg-[#2c1b15]"
                >
                  <div className="flex items-start justify-between gap-3">
                    <p className="text-sm font-semibold text-[#ffedd5]">{row.model}</p>
                    <span className="rounded-full bg-[#3a231a] px-2.5 py-1 text-[10px] uppercase tracking-[0.15em] text-[#fdba74]">
                      {row.pace}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-[#f5c7a8]">{row.use}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="absolute -bottom-8 -left-8 hidden w-44 rounded-2xl border border-[#ffd1a8]/35 bg-[#2a1812]/80 p-4 backdrop-blur lg:block">
            <p className="text-[10px] uppercase tracking-[0.22em] text-[#ffcc9d]">Live Jobs</p>
            <p className="mt-2 text-2xl font-semibold text-[#fff3e4] [font-family:'Sora',sans-serif]">438</p>
            <p className="mt-1 text-xs text-[#f9cea9]">Processing across all models</p>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-[#2a1a15] bg-[#16100f] py-8">
        <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#16100f] to-transparent" />
        <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#16100f] to-transparent" />
        <div className="marquee-track flex min-w-max items-center gap-3 px-6">
          {pipeline.concat(pipeline).map((step, idx) => (
            <p
              key={`${step}-${idx}`}
              className="rounded-full border border-[#fdba74]/25 bg-[#2a1b15] px-4 py-2 text-xs uppercase tracking-[0.2em] text-[#fed7aa]"
            >
              {step}
            </p>
          ))}
        </div>
      </section>

      <section className="relative mx-auto grid max-w-7xl gap-8 px-6 py-20 lg:grid-cols-12">
        <article className="rounded-3xl border border-[#fef3c7]/15 bg-[#1a120f] p-7 lg:col-span-4">
          <p className="text-xs uppercase tracking-[0.2em] text-[#fdba74]">Pipeline</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#fff5e8] [font-family:'Sora',sans-serif]">
            One prompt, many outcomes.
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-[#f6cfb2]">
            Chain model specialties and preserve visual continuity across campaigns.
          </p>
        </article>

        <div className="relative rounded-[2rem] border border-[#fef3c7]/20 bg-[#120d0c] p-8 lg:col-span-8">
          <div className="absolute -right-4 -top-5 h-24 w-24 rounded-full border border-[#fdba74]/40" />
          <ol className="grid gap-4 text-sm text-[#fbe0c9] sm:grid-cols-2">
            {pipeline.map((step, index) => (
              <li
                key={step}
                className="group rounded-2xl border border-[#fff7ed]/10 bg-[#221713] p-4 transition duration-220 hover:border-[#fdba74]/40"
              >
                <p className="text-xs uppercase tracking-[0.2em] text-[#fdba74]">Step {index + 1}</p>
                <p className="mt-2 text-base text-[#fff0e0]">{step}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="relative bg-[#0f0a09] px-6 py-20">
        <div className="mx-auto max-w-7xl rounded-[2.2rem] border border-[#ffedd5]/15 bg-[#18110f] p-8 lg:p-12">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[#fbbf82]">Single Membership</p>
              <h2 className="mt-4 max-w-lg text-4xl font-semibold leading-tight text-[#fff7ed] [font-family:'Sora',sans-serif]">
                Every model unlocked. One predictable monthly spend.
              </h2>
            </div>
            <div className="rounded-2xl border border-[#fed7aa]/20 bg-[#231712] p-6">
              <p className="text-xs uppercase tracking-[0.2em] text-[#f9c69a]">Creator Plan</p>
              <p className="mt-3 text-5xl font-semibold tracking-tight text-[#fff7ed] [font-family:'Sora',sans-serif]">$39</p>
              <p className="mt-1 text-sm text-[#f6c7a6]">Per month, flat and transparent.</p>
              <button className="mt-6 w-full rounded-xl bg-[#fff0df] px-5 py-3 text-sm font-semibold uppercase tracking-[0.17em] text-[#1a100c] transition duration-220 hover:bg-[#ffd8b4] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ffd8b4]">
                Claim Launch Pricing
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
