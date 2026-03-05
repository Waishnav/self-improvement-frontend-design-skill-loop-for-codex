import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'

type ModelConfig = {
  id: string
  name: string
  pitch: string
  accent: string
  art: string
}

const modelConfigs: ModelConfig[] = [
  {
    id: 'banana',
    name: 'Nano Banana Pro',
    pitch: 'Gemini-powered concept exploration with deeply stylized scene direction.',
    accent: '#f5d76b',
    art: 'radial-gradient(circle at 25% 20%, #ffe48f 0%, transparent 40%), radial-gradient(circle at 75% 40%, #f1530d 0%, transparent 42%), radial-gradient(circle at 50% 80%, #c82ff2 0%, #0b0714 60%)',
  },
  {
    id: 'flux',
    name: 'Flux 2',
    pitch: 'High-control drafting for product angles, lighting passes, and composition locking.',
    accent: '#7af7ce',
    art: 'radial-gradient(circle at 30% 20%, #59ffe2 0%, transparent 36%), radial-gradient(circle at 80% 55%, #1ee7a8 0%, transparent 35%), radial-gradient(circle at 45% 82%, #1c4350 0%, #070b11 62%)',
  },
  {
    id: 'gpt',
    name: 'gpt-image-1.5',
    pitch: 'Creative ideation tuned for cinematic prompts and rapid style pivots mid-session.',
    accent: '#8dd5ff',
    art: 'radial-gradient(circle at 23% 26%, #73c6ff 0%, transparent 37%), radial-gradient(circle at 78% 48%, #3464f2 0%, transparent 41%), radial-gradient(circle at 55% 82%, #212f75 0%, #090b15 65%)',
  },
  {
    id: 'seedream',
    name: 'Seedream',
    pitch: 'Expressive generative textures for campaigns that need surreal visual signatures.',
    accent: '#fca5de',
    art: 'radial-gradient(circle at 27% 26%, #ff88d5 0%, transparent 35%), radial-gradient(circle at 73% 46%, #e63ed4 0%, transparent 37%), radial-gradient(circle at 55% 80%, #7f2ed1 0%, #100614 60%)',
  },
]

export function DesignOne() {
  const [active, setActive] = useState(modelConfigs[0].id)

  const selected = useMemo(() => {
    return modelConfigs.find((model) => model.id === active) ?? modelConfigs[0]
  }, [active])

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#05030a] text-[#f6f2ff] concept-one-grain">
      <div className="concept-one-light pointer-events-none absolute inset-0" />
      <div className="relative mx-auto flex w-full max-w-7xl flex-col px-6 pb-20 pt-8 md:px-10 lg:px-14">
        <header className="flex items-center justify-between">
          <p className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.22em] text-white/70">T4 Canvas</p>
          <Link
            to="/"
            className="rounded-full border border-white/25 px-4 py-1.5 font-[var(--font-body-one)] text-sm text-white/90 transition hover:border-white hover:bg-white/10"
          >
            All Concepts
          </Link>
        </header>

        <section className="mt-12 grid items-end gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="font-[var(--font-body-one)] text-sm uppercase tracking-[0.18em] text-fuchsia-200/80">Full-Bleed Cinematic</p>
            <h1 className="mt-3 font-[var(--font-display-one)] text-[clamp(3.8rem,10vw,8.4rem)] leading-[0.85] tracking-[-0.03em]">
              Build campaign visuals at
              <span className="block italic text-[#f6d47a]">studio velocity.</span>
            </h1>
            <p className="mt-6 max-w-2xl font-[var(--font-body-one)] text-lg leading-relaxed text-white/80">
              One monthly subscription. Four elite models. Infinite iterations for launches, ads, posters,
              and cinematic worlds that normally demand a full design team.
            </p>
          </div>

          <div className="rounded-3xl border border-white/15 bg-white/5 p-5 backdrop-blur-xl">
            <p className="font-[var(--font-mono)] text-xs uppercase tracking-[0.2em] text-white/60">Active Engine</p>
            <h2 className="mt-2 font-[var(--font-display-one)] text-4xl leading-none tracking-tight" style={{ color: selected.accent }}>
              {selected.name}
            </h2>
            <p className="mt-3 font-[var(--font-body-one)] text-sm leading-relaxed text-white/75">{selected.pitch}</p>
          </div>
        </section>

        <section className="mt-10 grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="relative min-h-[360px] rounded-[2rem] border border-white/15 bg-black/30 p-4 shadow-[0_40px_120px_rgba(0,0,0,0.5)]">
            <div className="absolute inset-4 rounded-[1.6rem] border border-white/10" />
            <div
              className="absolute inset-8 rounded-[1.4rem] transition-all duration-500"
              style={{ background: selected.art }}
            />
            <div className="absolute bottom-8 left-8 rounded-full border border-white/30 bg-black/30 px-4 py-1.5 font-[var(--font-mono)] text-xs uppercase tracking-[0.15em] text-white/80">
              Live style simulation
            </div>
          </div>

          <div className="space-y-4">
            {modelConfigs.map((model) => (
              <button
                key={model.id}
                onClick={() => setActive(model.id)}
                className="group w-full rounded-2xl border border-white/15 bg-white/5 p-4 text-left transition duration-300 hover:-translate-y-0.5 hover:border-white/40"
                style={active === model.id ? { borderColor: model.accent, boxShadow: `0 0 0 1px ${model.accent}55 inset` } : undefined}
              >
                <p className="font-[var(--font-display-one)] text-2xl tracking-tight text-white">{model.name}</p>
                <p className="mt-1 font-[var(--font-body-one)] text-sm text-white/70 group-hover:text-white/90">{model.pitch}</p>
              </button>
            ))}
          </div>
        </section>

        <section className="mt-20 grid gap-8 rounded-[2rem] border border-white/15 bg-white/5 p-8 md:grid-cols-3">
          <div>
            <p className="font-[var(--font-mono)] text-xs uppercase tracking-[0.2em] text-white/60">Flat Plan</p>
            <p className="mt-2 font-[var(--font-display-one)] text-5xl leading-none text-[#f6d47a]">$49</p>
            <p className="mt-1 font-[var(--font-body-one)] text-sm text-white/70">per month, all engines included</p>
          </div>
          <p className="md:col-span-2 font-[var(--font-body-one)] text-lg leading-relaxed text-white/80">
            Switch models mid-brief without changing tools. T4 Canvas keeps prompts, references, and edits in
            one timeline so production never stalls.
          </p>
        </section>
      </div>
    </main>
  )
}
