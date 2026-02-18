import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'

const lensModes = [
  {
    id: 'scene',
    title: 'Scene Cut',
    description: 'Compose full campaign frames with cinematic depth and strict art direction.',
    indicator: 'Frames/min: 14',
  },
  {
    id: 'detail',
    title: 'Detail Audit',
    description: 'Zoom into fabric, texture, and typography edges for production confidence.',
    indicator: 'Inspection score: 93',
  },
  {
    id: 'morph',
    title: 'Style Morph',
    description: 'Blend outputs from multiple engines while preserving structure and intent.',
    indicator: 'Blend certainty: 89',
  },
]

const personas = [
  {
    id: 'growth',
    title: 'Growth Team',
    bullets: ['Rapid ad variant loops', 'Audience segment packs', 'Weekly performance refresh'],
  },
  {
    id: 'brand',
    title: 'Brand Studio',
    bullets: ['Tone-safe visual systems', 'Guideline lock presets', 'Long-form campaign arcs'],
  },
  {
    id: 'product',
    title: 'Product Marketing',
    bullets: ['Feature callout renders', 'UI + lifestyle composites', 'Launch kit exports'],
  },
]

const constraintOptions = [
  'Safe prompt screening',
  'Brand color lock',
  'Reference image pinning',
  'Typography guardrails',
  'Licensing metadata tags',
  'Export watermark rules',
]

const faqs = [
  {
    id: 0,
    q: 'How does flat pricing work with multiple models?',
    a: 'Every paid seat includes unlimited access to Nano Banana Pro, Flux 2, gpt-image-1.5, and Seedream in one workspace.',
  },
  {
    id: 1,
    q: 'Can teams collaborate in real time?',
    a: 'Yes. Shared prompt boards, branch comparisons, comments, and approvals are built in.',
  },
  {
    id: 2,
    q: 'Is this only for generation or also editing?',
    a: 'Both. You can generate, inpaint, outpaint, remix, and perform instruction-based edits in one flow.',
  },
]

function DesignFive() {
  const [lensId, setLensId] = useState(lensModes[0].id)
  const [personaId, setPersonaId] = useState(personas[1].id)
  const [enabledConstraints, setEnabledConstraints] = useState<string[]>([
    constraintOptions[0],
    constraintOptions[1],
    constraintOptions[2],
  ])
  const [teamSize, setTeamSize] = useState(8)
  const [openFaqId, setOpenFaqId] = useState(0)

  const activeLens = useMemo(() => lensModes.find((lens) => lens.id === lensId) ?? lensModes[0], [lensId])
  const activePersona = useMemo(() => personas.find((persona) => persona.id === personaId) ?? personas[0], [personaId])

  const toggleConstraint = (constraint: string) => {
    setEnabledConstraints((current) =>
      current.includes(constraint)
        ? current.filter((item) => item !== constraint)
        : [...current, constraint],
    )
  }

  const monthlyPrice = 59 + teamSize * 10

  return (
    <main className="min-h-screen overflow-x-clip bg-[#080808] px-5 py-8 text-[#f1efea] sm:px-8 lg:px-14">
      <div className="mx-auto flex max-w-7xl flex-col gap-8">
        <header className="rounded-3xl border border-[#5a5a5a] bg-[#111111] px-6 py-5 shadow-[0_18px_80px_-35px_rgba(255,56,56,0.35)]">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-[#c6b8ab]">T4 Canvas</p>
              <h1 className="font-noir text-4xl font-bold tracking-tight text-[#f8f4ec] sm:text-5xl">Noir Precision Studio</h1>
            </div>
            <Link
              to="/"
              className="rounded-full border border-[#737373] px-5 py-2 text-xs uppercase tracking-[0.16em] text-[#ded8cf] transition hover:border-[#f05151] hover:text-[#ffd7d7]"
            >
              See Concepts
            </Link>
          </div>
        </header>

        <section className="section-shell border border-[#444] bg-[#111] p-6 lg:p-8">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_85%_12%,rgba(255,85,85,0.25),transparent_35%),radial-gradient(circle_at_10%_90%,rgba(255,255,255,0.08),transparent_40%)]" />
          <div className="relative z-10 grid gap-7 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#c7bbb1]">Hero Interaction</p>
              <h2 className="mt-3 font-noir text-5xl leading-[0.92] text-[#f7f1e8] sm:text-6xl">
                Run image generation like a high-stakes post-production suite.
              </h2>
              <p className="mt-4 max-w-xl text-sm text-[#cfc5bb]">
                Move between Nano Banana Pro, Flux 2, gpt-image-1.5, and Seedream with one command surface tuned for serious operators.
              </p>

              <div className="mt-6 grid gap-2 sm:grid-cols-3">
                {lensModes.map((lens) => (
                  <button
                    key={lens.id}
                    type="button"
                    onClick={() => setLensId(lens.id)}
                    className={`rounded-xl border px-3 py-3 text-left transition ${
                      lens.id === lensId
                        ? 'border-[#f05151] bg-[#2a1111] text-[#ffe8e8]'
                        : 'border-[#4f4f4f] bg-[#151515] text-[#d9d1c8] hover:border-[#9f5f5f]'
                    }`}
                  >
                    <p className="font-noir text-lg">{lens.title}</p>
                    <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.14em] opacity-85">{lens.indicator}</p>
                  </button>
                ))}
              </div>

              <div className="mt-4 rounded-2xl border border-[#4f4f4f] bg-[#181818] p-4">
                <p className="font-semibold text-[#f6eee4]">{activeLens.title}</p>
                <p className="mt-2 text-sm text-[#cbc0b5]">{activeLens.description}</p>
              </div>
            </div>

            <aside className="rounded-2xl border border-[#525252] bg-[#141414] p-4">
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#c5b9ad]">Signal Board</p>
              <div className="mt-4 grid gap-3 text-sm">
                <div className="rounded-xl border border-[#555] bg-[#0f0f0f] p-3">
                  <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#c6b8ab]">Multi-model parity</p>
                  <p className="mt-1 text-2xl font-semibold text-[#f9f2e7]">97%</p>
                </div>
                <div className="rounded-xl border border-[#555] bg-[#0f0f0f] p-3">
                  <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#c6b8ab]">Avg render time</p>
                  <p className="mt-1 text-2xl font-semibold text-[#f9f2e7]">10.4s</p>
                </div>
                <div className="rounded-xl border border-[#555] bg-[#0f0f0f] p-3">
                  <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#c6b8ab]">Review-ready frames</p>
                  <p className="mt-1 text-2xl font-semibold text-[#f9f2e7]">412</p>
                </div>
              </div>
            </aside>
          </div>
        </section>

        <section className="grid gap-5 lg:grid-cols-[1fr_1fr]">
          <article className="section-shell border border-[#4b4b4b] bg-[#111111] p-5">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#c5b9ad]">Persona Filter</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {personas.map((persona) => (
                <button
                  key={persona.id}
                  type="button"
                  onClick={() => setPersonaId(persona.id)}
                  className={`rounded-full px-4 py-2 text-sm transition ${
                    persona.id === personaId
                      ? 'bg-[#f05151] text-[#160a0a]'
                      : 'border border-[#5d5d5d] bg-[#171717] text-[#d9d1c8] hover:border-[#8a6a6a]'
                  }`}
                >
                  {persona.title}
                </button>
              ))}
            </div>
            <ul className="mt-4 space-y-2 text-sm text-[#cec2b8]">
              {activePersona.bullets.map((bullet) => (
                <li key={bullet} className="rounded-xl border border-[#4e4e4e] bg-[#171717] p-3">
                  {bullet}
                </li>
              ))}
            </ul>
          </article>

          <article className="section-shell border border-[#4b4b4b] bg-[#111111] p-5">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#c5b9ad]">Constraint Matrix</p>
            <div className="mt-4 grid gap-2 sm:grid-cols-2">
              {constraintOptions.map((constraint) => {
                const active = enabledConstraints.includes(constraint)
                return (
                  <button
                    key={constraint}
                    type="button"
                    onClick={() => toggleConstraint(constraint)}
                    className={`rounded-xl border px-3 py-3 text-left text-sm transition ${
                      active
                        ? 'border-[#f05151] bg-[#2a1111] text-[#ffe4e4]'
                        : 'border-[#4f4f4f] bg-[#151515] text-[#d2c7bc] hover:border-[#7d6363]'
                    }`}
                  >
                    <p>{constraint}</p>
                    <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.14em]">
                      {active ? 'Enabled' : 'Disabled'}
                    </p>
                  </button>
                )
              })}
            </div>
          </article>
        </section>

        <section className="section-shell border border-[#4b4b4b] bg-[#111111] p-6">
          <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#c5b9ad]">Flat Fee Calculator</p>
              <h3 className="mt-2 font-noir text-4xl text-[#f8f2ea]">Predictable billing, no model juggling.</h3>
              <p className="mt-2 text-sm text-[#cec2b8]">Move the team-size dial. Every seat keeps all models unlocked.</p>
              <label htmlFor="teamSize" className="mt-5 block font-mono text-xs uppercase tracking-[0.14em] text-[#c7bbb0]">
                Team size: {teamSize}
              </label>
              <input
                id="teamSize"
                type="range"
                min={1}
                max={30}
                value={teamSize}
                onChange={(event) => setTeamSize(Number(event.target.value))}
                className="mt-3 w-full accent-[#ef5656]"
              />
            </div>

            <div className="rounded-2xl border border-[#6b5b5b] bg-[#1a1010] p-5 text-[#f5e9df]">
              <p className="font-mono text-xs uppercase tracking-[0.15em] text-[#d7beb3]">Monthly total</p>
              <p className="mt-3 text-5xl font-semibold">${monthlyPrice}</p>
              <p className="text-xs uppercase tracking-[0.15em] text-[#d7beb3]">all models included</p>
              <ul className="mt-4 space-y-2 text-sm text-[#ead8ce]">
                <li>Unlimited generation and editing lanes</li>
                <li>Shared review with role-based permissions</li>
                <li>Export presets for campaign channels</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section-shell border border-[#4b4b4b] bg-[#111111] p-6">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#c5b9ad]">FAQ</p>
          <div className="mt-4 space-y-3">
            {faqs.map((faq) => (
              <div key={faq.id} className="rounded-2xl border border-[#4f4f4f] bg-[#171717] p-4">
                <button
                  type="button"
                  onClick={() => setOpenFaqId((value) => (value === faq.id ? -1 : faq.id))}
                  className="flex w-full items-center justify-between gap-3 text-left"
                >
                  <span className="font-semibold text-[#f5eee4]">{faq.q}</span>
                  <span className="font-mono text-xs uppercase tracking-[0.14em] text-[#caaea4]">{openFaqId === faq.id ? 'Hide' : 'Open'}</span>
                </button>
                {openFaqId === faq.id ? <p className="mt-3 text-sm text-[#d2c4b8]">{faq.a}</p> : null}
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}

export default DesignFive
