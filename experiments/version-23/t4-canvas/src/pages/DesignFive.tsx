import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'

const scenes = [
  {
    id: 'cinematic',
    name: 'Cinematic',
    copy: 'Build theatrical campaign frames with heavy atmosphere and dramatic lighting arcs.',
    palette: ['#d9ff3e', '#ffa22c', '#ff5d5d'],
  },
  {
    id: 'product',
    name: 'Product',
    copy: 'Generate tactile studio product shots with sharp material realism and precise geometry.',
    palette: ['#8cffd1', '#43b2ff', '#1d4ee9'],
  },
  {
    id: 'surreal',
    name: 'Surreal',
    copy: 'Compose dreamlike visual worlds where brand motifs become impossible image stories.',
    palette: ['#ff9df2', '#ba63ff', '#6524ff'],
  },
]

export function DesignFive() {
  const [activeScene, setActiveScene] = useState(scenes[0].id)

  const scene = useMemo(() => scenes.find((item) => item.id === activeScene) ?? scenes[0], [activeScene])

  return (
    <main className="min-h-screen bg-[#09090c] text-white">
      <div className="grid min-h-screen lg:grid-cols-2">
        <section className="flex flex-col justify-between border-b border-white/15 px-6 py-8 md:px-10 lg:border-b-0 lg:border-r">
          <header className="flex items-start justify-between gap-4">
            <div>
              <p className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.23em] text-white/60">Split Voltage</p>
              <p className="mt-2 font-[var(--font-body-five)] text-sm text-white/75">Power-user image studio</p>
            </div>
            <Link
              to="/"
              className="rounded-full border border-white/30 px-4 py-1.5 font-[var(--font-body-five)] text-sm transition hover:bg-white/10"
            >
              Concepts
            </Link>
          </header>

          <div className="my-10">
            <h1 className="font-[var(--font-display-five)] text-[clamp(4rem,11vw,9rem)] leading-[0.8] tracking-tight text-[#d6ff3f]">
              ALL
              <span className="block text-white">MODELS.</span>
              <span className="block text-white">ONE FEE.</span>
            </h1>
            <p className="mt-6 max-w-xl font-[var(--font-body-five)] text-lg leading-relaxed text-white/80">
              T4 Canvas unifies Nano Banana Pro, Flux 2, gpt-image-1.5, and Seedream in one workspace built for fast
              campaign production and high-pressure iteration.
            </p>
          </div>

          <footer className="grid gap-3 sm:grid-cols-3">
            {scenes.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveScene(item.id)}
                className="rounded-xl border px-3 py-3 text-left transition hover:-translate-y-0.5"
                style={
                  activeScene === item.id
                    ? { borderColor: item.palette[0], boxShadow: `0 0 0 1px ${item.palette[0]}66 inset` }
                    : { borderColor: 'rgba(255,255,255,0.25)' }
                }
              >
                <p className="font-[var(--font-display-five)] text-3xl leading-none">{item.name}</p>
                <p className="mt-1 font-[var(--font-mono)] text-[11px] uppercase tracking-[0.18em] text-white/60">Scene profile</p>
              </button>
            ))}
          </footer>
        </section>

        <section className="relative overflow-hidden px-6 py-8 md:px-10">
          <div
            className="absolute inset-0 opacity-70 transition-all duration-700"
            style={{
              background: `radial-gradient(circle at 20% 25%, ${scene.palette[0]} 0%, transparent 36%), radial-gradient(circle at 70% 45%, ${scene.palette[1]} 0%, transparent 37%), radial-gradient(circle at 55% 82%, ${scene.palette[2]} 0%, #070709 64%)`,
            }}
          />
          <div className="relative flex h-full flex-col justify-between">
            <div className="rounded-3xl border border-white/20 bg-black/30 p-5 backdrop-blur-xl md:p-6">
              <p className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.2em] text-white/70">Active scene</p>
              <h2 className="mt-2 font-[var(--font-display-five)] text-5xl leading-none" style={{ color: scene.palette[0] }}>
                {scene.name}
              </h2>
              <p className="mt-3 max-w-xl font-[var(--font-body-five)] text-sm leading-relaxed text-white/85">{scene.copy}</p>
            </div>

            <div className="grid gap-3 md:grid-cols-2">
              <div className="rounded-2xl border border-white/20 bg-black/25 p-4 backdrop-blur">
                <p className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.2em] text-white/70">Model matrix</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {['Nano Banana Pro', 'Flux 2', 'gpt-image-1.5', 'Seedream'].map((model) => (
                    <span key={model} className="rounded-full border border-white/25 px-3 py-1 font-[var(--font-body-five)] text-xs text-white/90">
                      {model}
                    </span>
                  ))}
                </div>
              </div>
              <div className="rounded-2xl border border-white/20 bg-black/25 p-4 backdrop-blur">
                <p className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.2em] text-white/70">Price lock</p>
                <p className="mt-2 font-[var(--font-display-five)] text-6xl leading-none">$69</p>
                <p className="font-[var(--font-body-five)] text-sm text-white/80">monthly flat plan</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
