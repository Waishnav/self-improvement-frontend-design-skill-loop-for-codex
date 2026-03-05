import { useState } from 'react'
import { Link } from 'react-router-dom'

const modes = {
  generate: {
    title: 'Generation Mode',
    detail: 'Parallelize prompts across all four engines and compare outputs in a single matrix.',
    value: '72 Frames',
    timeline: ['Prompt stack queued', 'Multi-engine render', 'Best frame promoted'],
  },
  edit: {
    title: 'Editing Mode',
    detail: 'Route an existing image through model-specific edits while keeping intent locked.',
    value: '14 Variants',
    timeline: ['Source imported', 'Directed pass edits', 'Final grade exported'],
  },
} as const

type ModeKey = keyof typeof modes

export function DesignThree() {
  const [mode, setMode] = useState<ModeKey>('generate')
  const active = modes[mode]

  return (
    <main className="min-h-screen bg-[#f7f6f3] px-5 py-8 text-[#111] md:px-10">
      <div className="mx-auto max-w-7xl border border-[#151515] bg-white">
        <header className="grid border-b border-[#151515] md:grid-cols-[1fr_auto_auto]">
          <div className="border-b border-[#151515] px-5 py-6 md:border-b-0 md:border-r md:px-8">
            <p className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.2em] text-[#5a5a5a]">Swiss Grid</p>
            <h1 className="mt-2 font-[var(--font-display-three)] text-[clamp(2.8rem,8vw,6.8rem)] leading-[0.9] tracking-tight">
              T4 Canvas
            </h1>
          </div>
          <div className="border-b border-[#151515] px-5 py-6 md:border-b-0 md:border-r md:px-8">
            <p className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.2em] text-[#5a5a5a]">Stack</p>
            <p className="mt-2 font-[var(--font-body-three)] text-sm leading-relaxed">Nano Banana Pro · Flux 2 · gpt-image-1.5 · Seedream</p>
          </div>
          <div className="px-5 py-6 md:px-8">
            <Link to="/" className="font-[var(--font-body-three)] text-sm underline underline-offset-4">
              Back to Concepts
            </Link>
          </div>
        </header>

        <section className="grid border-b border-[#151515] md:grid-cols-[1.5fr_1fr]">
          <div className="border-b border-[#151515] p-6 md:border-b-0 md:border-r md:p-10">
            <h2 className="font-[var(--font-display-three)] text-[clamp(2.2rem,5vw,4.4rem)] leading-[0.9] tracking-tight">
              Precision layout for high-speed image direction.
            </h2>
            <p className="mt-5 max-w-2xl font-[var(--font-body-three)] text-lg leading-relaxed">
              A single flat monthly plan replaces scattered generation tools with one production-grade interface.
              Switch engines, preserve history, and keep direction coherent from first draft to final export.
            </p>
          </div>
          <div className="p-6 md:p-10">
            <p className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.2em] text-[#5a5a5a]">Mode Control</p>
            <div className="mt-3 grid grid-cols-2 gap-2">
              <button
                onClick={() => setMode('generate')}
                className="border border-[#151515] px-3 py-2 font-[var(--font-body-three)] text-sm transition hover:bg-[#efefef]"
                style={mode === 'generate' ? { backgroundColor: '#151515', color: '#fff' } : undefined}
              >
                Generate
              </button>
              <button
                onClick={() => setMode('edit')}
                className="border border-[#151515] px-3 py-2 font-[var(--font-body-three)] text-sm transition hover:bg-[#efefef]"
                style={mode === 'edit' ? { backgroundColor: '#151515', color: '#fff' } : undefined}
              >
                Edit
              </button>
            </div>
            <p className="mt-4 font-[var(--font-display-three)] text-5xl leading-none text-[#cb2027]">{active.value}</p>
            <p className="mt-2 font-[var(--font-body-three)] text-sm leading-relaxed">{active.detail}</p>
          </div>
        </section>

        <section className="grid md:grid-cols-3">
          <div className="border-b border-r border-[#151515] p-6 md:min-h-[280px] md:border-b-0 md:p-8">
            <p className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.2em] text-[#5a5a5a]">Sequence</p>
            <ol className="mt-4 space-y-3 font-[var(--font-body-three)] text-sm">
              {active.timeline.map((step, index) => (
                <li key={step} className="flex items-start gap-3">
                  <span className="inline-flex h-5 w-5 items-center justify-center border border-[#151515] text-[11px]">
                    {index + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>

          <div className="border-b border-r border-[#151515] p-6 md:min-h-[280px] md:border-b-0 md:p-8">
            <p className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.2em] text-[#5a5a5a]">Geometry</p>
            <div className="mt-4 grid grid-cols-6 gap-1">
              {Array.from({ length: 36 }).map((_, idx) => (
                <div
                  key={idx}
                  className="aspect-square border border-[#1f1f1f]"
                  style={idx % (mode === 'generate' ? 5 : 4) === 0 ? { backgroundColor: '#cb2027' } : undefined}
                />
              ))}
            </div>
          </div>

          <div className="p-6 md:min-h-[280px] md:p-8">
            <p className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.2em] text-[#5a5a5a]">Result Band</p>
            <h3 className="mt-4 font-[var(--font-display-three)] text-4xl leading-[0.95]">{active.title}</h3>
            <p className="mt-4 font-[var(--font-body-three)] text-sm leading-relaxed">
              Built for creators who care about layout discipline and quick iteration under campaign deadlines.
            </p>
            <div className="mt-6 border border-[#151515] px-4 py-3 font-[var(--font-body-three)] text-sm">
              Flat monthly pricing, all models unlocked.
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
