import { useEffect, useState } from 'react'

const presets = {
  cinematic: {
    label: 'Cinematic Product',
    tone: 'Moody highlights, metallic bloom, dramatic edge light',
    eta: '22s',
  },
  fantasy: {
    label: 'Fantasy Worldbuild',
    tone: 'Painterly depth, saturated fog, mythic scale',
    eta: '29s',
  },
  editorial: {
    label: 'Editorial Portrait',
    tone: 'Controlled skin texture, studio backdrop, sharp styling',
    eta: '17s',
  },
} as const

type PresetKey = keyof typeof presets

const modelLoad = [68, 74, 61, 79, 66, 72]

const modelCards = [
  {
    name: 'Nano Banana Pro',
    mode: 'Instant ideation',
    stat: '42 active prompts',
  },
  {
    name: 'Flux 2',
    mode: 'Controlled composition',
    stat: '18 precision jobs',
  },
  {
    name: 'gpt-image-1.5',
    mode: 'Prompt rewrites + edits',
    stat: '31 smart edits',
  },
  {
    name: 'Seedream',
    mode: 'Stylized generations',
    stat: '26 style stacks',
  },
]

const queueTimeline = [
  {
    title: 'Prompt graph compiled',
    detail: 'Weights split across Nano Banana Pro and Flux 2',
  },
  {
    title: 'Variant branching',
    detail: '16 seeded outputs created with auto-caption tags',
  },
  {
    title: 'Upscale + repair pass',
    detail: 'gpt-image-1.5 inpainted artifacts and sharpened faces',
  },
  {
    title: 'Delivery pack exported',
    detail: 'Seedream style packs and social aspect ratios attached',
  },
]

export function DesignOne() {
  const [activePreset, setActivePreset] = useState<PresetKey>('cinematic')
  const [load, setLoad] = useState(modelLoad[0])

  useEffect(() => {
    let index = 0
    const interval = window.setInterval(() => {
      index = (index + 1) % modelLoad.length
      setLoad(modelLoad[index])
    }, 2200)

    return () => window.clearInterval(interval)
  }, [])

  const preset = presets[activePreset]

  return (
    <div className="theme-one relative min-h-screen overflow-x-clip pb-32 text-slate-100">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(46,235,181,0.25),transparent_38%),radial-gradient(circle_at_82%_12%,rgba(67,198,255,0.22),transparent_42%),radial-gradient(circle_at_52%_88%,rgba(10,22,44,0.95),transparent_42%)]" />

      <main className="relative mx-auto max-w-6xl px-6 pb-16 pt-8 sm:px-10 sm:pt-10">
        <header className="flex flex-wrap items-center justify-between gap-4">
          <p className="font-[Space_Grotesk] text-sm uppercase tracking-[0.34em] text-emerald-200/80">
            T4 Canvas // Command Deck
          </p>
          <button className="rounded-full border border-emerald-200/40 bg-emerald-200/10 px-5 py-2 text-xs uppercase tracking-[0.2em] text-emerald-100 transition hover:bg-emerald-200/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-200">
            Reserve Early Access
          </button>
        </header>

        <section className="mt-10 grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
          <div className="space-y-6">
            <span className="inline-flex rounded-full border border-cyan-200/30 bg-cyan-300/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-cyan-100">
              Cockpit Stack
            </span>
            <h1 className="max-w-[16ch] font-[Space_Grotesk] text-4xl font-semibold leading-[0.98] text-white sm:text-6xl">
              One deck. Four models. Unlimited image firepower.
            </h1>
            <p className="max-w-xl font-[Manrope] text-lg text-slate-200/90">
              Compose, remix, and upscale inside one power workspace with instant model handoffs and a single monthly membership.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              {Object.entries(presets).map(([key, value]) => {
                const selected = activePreset === key

                return (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setActivePreset(key as PresetKey)}
                    className={`rounded-full border px-4 py-2 text-xs uppercase tracking-[0.16em] transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-200 ${
                      selected
                        ? 'border-cyan-200/70 bg-cyan-200/20 text-cyan-50'
                        : 'border-slate-200/20 bg-slate-900/50 text-slate-300 hover:border-cyan-100/40 hover:text-cyan-100'
                    }`}
                  >
                    {value.label}
                  </button>
                )
              })}
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              <article className="rounded-2xl border border-slate-200/10 bg-slate-900/60 p-4 backdrop-blur">
                <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Preset Tone</p>
                <p className="mt-2 text-sm text-slate-200">{preset.tone}</p>
              </article>
              <article className="rounded-2xl border border-slate-200/10 bg-slate-900/60 p-4 backdrop-blur">
                <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Queue ETA</p>
                <p className="mt-2 text-2xl font-semibold text-white">{preset.eta}</p>
              </article>
              <article className="rounded-2xl border border-slate-200/10 bg-slate-900/60 p-4 backdrop-blur">
                <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Plan</p>
                <p className="mt-2 text-sm text-slate-200">Flat monthly. No credits.</p>
              </article>
            </div>
          </div>

          <aside className="rounded-3xl border border-cyan-200/25 bg-slate-950/70 p-6 shadow-[0_20px_80px_rgba(11,208,168,0.17)] backdrop-blur-xl">
            <div className="flex items-center justify-between">
              <p className="font-[Space_Grotesk] text-sm uppercase tracking-[0.2em] text-cyan-100">Live Dispatch</p>
              <span className="inline-flex items-center gap-2 text-xs text-emerald-200">
                <span className="h-2 w-2 rounded-full bg-emerald-300 animate-pulse" /> synced
              </span>
            </div>
            <div className="mt-5 rounded-2xl border border-slate-200/15 bg-slate-900/70 p-4">
              <p className="text-xs uppercase tracking-[0.16em] text-slate-400">Prompt</p>
              <p className="mt-2 text-sm leading-relaxed text-slate-100">
                Futuristic sneaker launch scene, translucent rain, reflective asphalt, camera low-angle tracking shot.
              </p>
            </div>
            <div className="mt-4 space-y-3">
              <div className="flex items-center justify-between text-xs uppercase tracking-[0.18em] text-slate-400">
                <span>Pipeline Utilization</span>
                <span className="text-cyan-100">{load}%</span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-slate-800">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-emerald-300 via-cyan-300 to-blue-300 transition-all duration-700"
                  style={{ width: `${load}%` }}
                />
              </div>
            </div>
            <ul className="mt-4 space-y-2">
              {modelCards.map((item) => (
                <li
                  key={item.name}
                  className="flex items-center justify-between rounded-xl border border-slate-200/10 bg-slate-900/40 px-3 py-2"
                >
                  <div>
                    <p className="text-sm font-medium text-slate-100">{item.name}</p>
                    <p className="text-xs text-slate-400">{item.mode}</p>
                  </div>
                  <p className="text-xs uppercase tracking-[0.16em] text-cyan-100">{item.stat}</p>
                </li>
              ))}
            </ul>
          </aside>
        </section>

        <section className="mt-14 grid gap-6 lg:grid-cols-[1.25fr_0.75fr]">
          <article className="rounded-3xl border border-slate-100/10 bg-slate-950/70 p-6 backdrop-blur-xl">
            <p className="font-[Space_Grotesk] text-sm uppercase tracking-[0.22em] text-emerald-200">Queue Timeline</p>
            <div className="mt-6 space-y-5">
              {queueTimeline.map((step, index) => (
                <div key={step.title} className="grid grid-cols-[auto_1fr] gap-4">
                  <div className="mt-1 flex flex-col items-center">
                    <span className="h-3 w-3 rounded-full bg-cyan-200" />
                    {index < queueTimeline.length - 1 && <span className="mt-1 h-full w-px bg-cyan-200/25" />}
                  </div>
                  <div className="pb-2">
                    <p className="text-base font-medium text-white">{step.title}</p>
                    <p className="mt-1 text-sm text-slate-300">{step.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-3xl border border-emerald-100/20 bg-gradient-to-br from-emerald-200/10 via-cyan-300/10 to-slate-950 p-6">
            <p className="text-xs uppercase tracking-[0.22em] text-emerald-100">Membership Dock</p>
            <h2 className="mt-4 max-w-[13ch] font-[Space_Grotesk] text-3xl leading-tight text-white">
              Flat monthly access for every image workflow.
            </h2>
            <p className="mt-3 text-sm text-slate-200/85">
              Generate, edit, upscale, and organize across Nano Banana Pro, Flux 2, gpt-image-1.5, and Seedream with no per-model unlock.
            </p>
            <div className="mt-6 rounded-2xl border border-cyan-100/25 bg-slate-950/70 p-4">
              <p className="text-xs uppercase tracking-[0.18em] text-cyan-100">Studio Plan</p>
              <p className="mt-2 text-4xl font-semibold text-white">$39</p>
              <p className="text-xs uppercase tracking-[0.18em] text-slate-400">monthly, cancel anytime</p>
            </div>
            <button className="mt-5 w-full rounded-2xl border border-emerald-100/40 bg-emerald-200/20 px-4 py-3 text-sm font-semibold text-emerald-50 transition hover:bg-emerald-200/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-100">
              Start Building in T4 Canvas
            </button>
          </article>
        </section>

        <footer className="mt-14 border-t border-slate-200/10 pt-5 text-xs uppercase tracking-[0.2em] text-slate-400">
          T4 Canvas / Batch Control / Real-time Inspector / Unified Membership
        </footer>
      </main>
    </div>
  )
}
