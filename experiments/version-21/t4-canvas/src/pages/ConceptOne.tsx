import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'

const modelProfiles = {
  'Nano Banana Pro': {
    strength: 'Prompt fidelity and scene planning',
    speed: '42 sec avg render',
    bestFor: 'Commercial lifestyle composites',
  },
  'Flux 2': {
    strength: 'Texture detail and bold stylization',
    speed: '27 sec avg render',
    bestFor: 'Concept art and campaign key visuals',
  },
  'gpt-image-1.5': {
    strength: 'Instruction following and visual edits',
    speed: '33 sec avg render',
    bestFor: 'Iterative production pipelines',
  },
  Seedream: {
    strength: 'Color grading and atmospheric scenes',
    speed: '30 sec avg render',
    bestFor: 'Brand storytelling and cinematic stills',
  },
} as const

const missionModes = [
  {
    name: 'Launch Drop',
    output: 'High-clarity product reveals for paid campaigns',
  },
  {
    name: 'Narrative Ads',
    output: 'Story-driven lifestyle scenes with consistent character direction',
  },
  {
    name: 'Rapid Variants',
    output: 'Fast A/B packs across ratios and lighting setups',
  },
] as const

const queuePresets = [
  {
    name: 'Focused',
    jobs: 4,
    eta: '10 min',
    note: 'Best for critical hero frames.',
  },
  {
    name: 'Balanced',
    jobs: 12,
    eta: '16 min',
    note: 'Mix of concepting and polish passes.',
  },
  {
    name: 'Surge',
    jobs: 30,
    eta: '26 min',
    note: 'Launch-day creative throughput.',
  },
] as const

type ModelName = keyof typeof modelProfiles

function ConceptOne() {
  const [activeMission, setActiveMission] = useState<(typeof missionModes)[number]['name']>(missionModes[0].name)
  const [activeModel, setActiveModel] = useState<ModelName>('Nano Banana Pro')
  const [activePreset, setActivePreset] = useState<(typeof queuePresets)[number]['name']>(queuePresets[1].name)

  const mission = useMemo(() => missionModes.find((item) => item.name === activeMission) ?? missionModes[0], [activeMission])
  const preset = useMemo(() => queuePresets.find((item) => item.name === activePreset) ?? queuePresets[0], [activePreset])

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#060d14] text-slate-100">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_15%,rgba(14,165,233,0.2),transparent_45%),radial-gradient(circle_at_20%_80%,rgba(34,197,94,0.16),transparent_50%)]" />
      <div className="relative mx-auto flex w-full max-w-7xl flex-col gap-16 px-6 pb-24 pt-8 md:px-10">
        <header className="flex items-center justify-between rounded-2xl border border-cyan-300/20 bg-slate-900/70 px-5 py-4 backdrop-blur">
          <div>
            <p className="font-syne text-[11px] uppercase tracking-[0.32em] text-cyan-200">T4 Canvas</p>
            <p className="font-bricolage text-xl">Pulse Command</p>
          </div>
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-cyan-100/90">
            <span>Flat Monthly Access</span>
            <Link
              to="/"
              className="rounded-full border border-cyan-100/35 px-4 py-2 transition hover:bg-cyan-200/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-100"
            >
              Concepts
            </Link>
          </div>
        </header>

        <section className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-8">
            <div className="space-y-5">
              <p className="font-syne text-xs uppercase tracking-[0.32em] text-cyan-200">Mission-Critical Image Generation</p>
              <h1 className="font-bricolage text-5xl leading-[0.92] text-white md:text-7xl">Command every model from one power cockpit.</h1>
              <p className="max-w-xl text-base text-slate-300">
                T4 Canvas unifies Nano Banana Pro, Flux 2, gpt-image-1.5, and Seedream under one flat monthly fee, so your
                team can iterate without watching per-image costs.
              </p>
            </div>

            <div className="space-y-3 rounded-3xl border border-cyan-200/20 bg-slate-900/70 p-5">
              <p className="font-syne text-xs uppercase tracking-[0.22em] text-cyan-100">Mission Mode</p>
              <div className="flex flex-wrap gap-2">
                {missionModes.map((mode) => (
                  <button
                    key={mode.name}
                    type="button"
                    onClick={() => setActiveMission(mode.name)}
                    className={`rounded-full border px-4 py-2 text-sm transition ${
                      activeMission === mode.name
                        ? 'border-cyan-100 bg-cyan-200/15 text-cyan-100'
                        : 'border-slate-700 bg-slate-900/50 text-slate-300 hover:border-cyan-200/40'
                    }`}
                  >
                    {mode.name}
                  </button>
                ))}
              </div>
              <p className="text-sm text-slate-200">{mission.output}</p>
            </div>
          </div>

          <aside className="space-y-5 rounded-3xl border border-cyan-200/25 bg-gradient-to-b from-cyan-200/10 to-slate-950/75 p-6 shadow-[0_20px_60px_rgba(14,165,233,0.2)]">
            <p className="font-syne text-xs uppercase tracking-[0.24em] text-cyan-100">Live Preview</p>
            <div className="rounded-2xl border border-cyan-100/20 bg-slate-900/80 p-4">
              <p className="text-xs uppercase tracking-[0.16em] text-cyan-100/80">Selected Model</p>
              <p className="mt-2 font-bricolage text-2xl text-cyan-100">{activeModel}</p>
              <p className="mt-2 text-sm text-slate-300">{modelProfiles[activeModel].strength}</p>
            </div>
            <div className="grid gap-3 text-sm">
              <div className="rounded-xl border border-cyan-100/20 bg-slate-900/60 p-3">
                <p className="text-xs uppercase tracking-[0.16em] text-cyan-100/70">Queue Mode</p>
                <p className="mt-1 text-lg text-white">{preset.name}</p>
                <p className="text-slate-300">{preset.jobs} prompts • ETA {preset.eta}</p>
              </div>
              <div className="rounded-xl border border-cyan-100/20 bg-slate-900/60 p-3">
                <p className="text-xs uppercase tracking-[0.16em] text-cyan-100/70">Best For</p>
                <p className="mt-1 text-slate-200">{modelProfiles[activeModel].bestFor}</p>
              </div>
            </div>
          </aside>
        </section>

        <section className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="rounded-3xl border border-cyan-200/20 bg-slate-900/60 p-5">
            <p className="font-syne text-xs uppercase tracking-[0.24em] text-cyan-100">Model Matrix</p>
            <div className="mt-4 grid gap-3">
              {(Object.keys(modelProfiles) as ModelName[]).map((model) => (
                <button
                  key={model}
                  type="button"
                  onClick={() => setActiveModel(model)}
                  className={`rounded-xl border px-4 py-3 text-left transition ${
                    activeModel === model
                      ? 'border-cyan-100 bg-cyan-200/15'
                      : 'border-slate-700 bg-slate-950/55 hover:border-cyan-200/35'
                  }`}
                >
                  <p className="font-semibold text-white">{model}</p>
                  <p className="mt-1 text-sm text-slate-300">{modelProfiles[model].speed}</p>
                </button>
              ))}
            </div>
          </div>

          <div className="grid gap-4 rounded-3xl border border-cyan-200/20 bg-slate-950/55 p-5">
            <p className="font-syne text-xs uppercase tracking-[0.24em] text-cyan-100">Queue Presets</p>
            <div className="flex flex-wrap gap-2">
              {queuePresets.map((queue) => (
                <button
                  key={queue.name}
                  type="button"
                  onClick={() => setActivePreset(queue.name)}
                  className={`rounded-full border px-4 py-2 text-sm transition ${
                    activePreset === queue.name
                      ? 'border-cyan-100 bg-cyan-100/15 text-cyan-100'
                      : 'border-slate-700 bg-slate-900 text-slate-300 hover:border-cyan-200/35'
                  }`}
                >
                  {queue.name}
                </button>
              ))}
            </div>
            <div className="grid gap-3 md:grid-cols-3">
              <div className="rounded-xl border border-cyan-100/20 bg-slate-900/50 p-4">
                <p className="text-xs uppercase tracking-[0.18em] text-cyan-100/75">Active Jobs</p>
                <p className="mt-2 font-bricolage text-3xl text-white">{preset.jobs}</p>
              </div>
              <div className="rounded-xl border border-cyan-100/20 bg-slate-900/50 p-4">
                <p className="text-xs uppercase tracking-[0.18em] text-cyan-100/75">Delivery Time</p>
                <p className="mt-2 font-bricolage text-3xl text-white">{preset.eta}</p>
              </div>
              <div className="rounded-xl border border-cyan-100/20 bg-slate-900/50 p-4">
                <p className="text-xs uppercase tracking-[0.18em] text-cyan-100/75">Monthly Billing</p>
                <p className="mt-2 font-bricolage text-3xl text-white">Flat</p>
              </div>
            </div>
            <p className="text-sm text-slate-300">{preset.note}</p>
          </div>
        </section>

        <section className="rounded-3xl border border-cyan-100/25 bg-gradient-to-r from-cyan-500/20 to-emerald-400/20 p-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="font-syne text-xs uppercase tracking-[0.24em] text-cyan-100">Ready for launch</p>
              <h2 className="mt-3 font-bricolage text-3xl text-white md:text-4xl">Build your image pipeline once. Run it across every model.</h2>
            </div>
            <button
              type="button"
              className="rounded-full border border-white/70 bg-white px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-slate-900 transition hover:bg-cyan-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Start Monthly Plan
            </button>
          </div>
        </section>
      </div>
    </main>
  )
}

export default ConceptOne
