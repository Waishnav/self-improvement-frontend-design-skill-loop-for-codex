import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'

const moods = [
  {
    name: 'Cinematic Warmth',
    gradient: 'from-[#f8c38a] via-[#8f5f5b] to-[#2f3f56]',
    prompt: 'Soft tungsten highlights, atmospheric haze, refined product staging.',
  },
  {
    name: 'Coastal Clean',
    gradient: 'from-[#a8e4dc] via-[#5f8ea4] to-[#2d4a4e]',
    prompt: 'Salt-air palette, diffused daylight, organic material realism.',
  },
  {
    name: 'Midnight Luxe',
    gradient: 'from-[#f8d169] via-[#4a2f5f] to-[#12192e]',
    prompt: 'Velvet shadows, gold accents, high-end editorial contrast.',
  },
] as const

const editStages = [
  {
    name: 'Base Render',
    details: ['Initial multi-model pass', 'Composition lock', 'Prompt confidence score: 84'],
  },
  {
    name: 'Directed Edit',
    details: ['Localized relighting', 'Texture correction', 'Prompt confidence score: 92'],
  },
  {
    name: 'Publish Ready',
    details: ['Multi-ratio exports', 'Brand-safe color profile', 'Prompt confidence score: 97'],
  },
] as const

function ConceptFive() {
  const [activeMood, setActiveMood] = useState<(typeof moods)[number]['name']>(moods[0].name)
  const [activeStage, setActiveStage] = useState<(typeof editStages)[number]['name']>(editStages[1].name)

  const mood = useMemo(() => moods.find((item) => item.name === activeMood) ?? moods[0], [activeMood])
  const stage = useMemo(() => editStages.find((item) => item.name === activeStage) ?? editStages[0], [activeStage])

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#0e1821] text-[#eef4f2]">
      <div className="relative isolate">
        <div className="pointer-events-none absolute -left-24 top-28 h-72 w-72 rounded-full bg-[#facc15]/25 blur-3xl" />
        <div className="pointer-events-none absolute right-0 top-0 h-80 w-80 rounded-full bg-[#2dd4bf]/20 blur-3xl" />
      </div>

      <div className="relative mx-auto flex w-full max-w-7xl flex-col gap-16 px-6 pb-24 pt-8 md:px-10">
        <header className="rounded-3xl border border-[#f5e6be]/30 bg-[#13222f]/80 px-6 py-5 backdrop-blur">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="font-syne text-[11px] uppercase tracking-[0.3em] text-[#cbe9dd]">T4 Canvas</p>
              <p className="font-fraunces text-4xl md:text-5xl">Bloom Atelier</p>
            </div>
            <div className="flex items-center gap-4 text-xs uppercase tracking-[0.18em] text-[#dbece6]">
              <span>Single Membership • All Models</span>
              <Link
                to="/"
                className="rounded-full border border-[#dbece6]/45 px-4 py-2 transition hover:bg-[#dbece6]/12 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#dbece6]"
              >
                Concepts
              </Link>
            </div>
          </div>
        </header>

        <section className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-7">
            <p className="font-syne text-xs uppercase tracking-[0.3em] text-[#bde8d9]">Atmospheric Marketing Homepage</p>
            <h1 className="font-fraunces text-5xl leading-[0.92] md:text-7xl">Craft visual worlds, not just image prompts.</h1>
            <p className="max-w-2xl text-base text-[#d8e8e2] md:text-lg">
              T4 Canvas gives creators one workspace for Nano Banana Pro, Flux 2, gpt-image-1.5, and Seedream. Generate,
              refine, and publish everything under one flat monthly fee.
            </p>

            <div className="rounded-3xl border border-[#dceadf]/25 bg-[#13222f]/70 p-5">
              <p className="font-syne text-xs uppercase tracking-[0.24em] text-[#bde8d9]">Mood Direction</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {moods.map((item) => (
                  <button
                    key={item.name}
                    type="button"
                    onClick={() => setActiveMood(item.name)}
                    className={`rounded-full border px-4 py-2 text-sm transition ${
                      activeMood === item.name
                        ? 'border-[#f8e39e] bg-[#f8e39e]/20 text-[#fff4cb]'
                        : 'border-[#dceadf]/25 bg-[#0f1b26] text-[#d7e9e1] hover:border-[#f8e39e]/60'
                    }`}
                  >
                    {item.name}
                  </button>
                ))}
              </div>
              <p className="mt-3 text-sm text-[#d9e9e3]">{mood.prompt}</p>
            </div>
          </div>

          <aside className="rounded-3xl border border-[#dceadf]/25 bg-[#13222f]/80 p-6 shadow-[0_20px_60px_rgba(20,99,92,0.35)]">
            <p className="font-syne text-xs uppercase tracking-[0.24em] text-[#bde8d9]">Scene Capsule</p>
            <div className={`mt-4 rounded-2xl border border-white/20 bg-gradient-to-br ${mood.gradient} p-4`}>
              <div className="aspect-[4/5] rounded-xl border border-white/40 bg-[linear-gradient(130deg,rgba(255,255,255,0.45),rgba(255,255,255,0.1))] p-4">
                <p className="font-syne text-[10px] uppercase tracking-[0.22em] text-[#17232e]">Live Art Direction</p>
                <h2 className="mt-2 font-fraunces text-3xl leading-tight text-[#0f1b27]">Guided by mood, tuned by model intelligence.</h2>
              </div>
            </div>
            <div className="mt-4 grid gap-3 text-sm md:grid-cols-2">
              <div className="rounded-xl border border-[#dceadf]/25 bg-[#0f1b26] p-3">
                <p className="text-xs uppercase tracking-[0.16em] text-[#bde8d9]">Model Relay</p>
                <p className="mt-1 text-[#dbece5]">Nano Banana Pro → gpt-image-1.5 edit pass → Seedream finish</p>
              </div>
              <div className="rounded-xl border border-[#dceadf]/25 bg-[#0f1b26] p-3">
                <p className="text-xs uppercase tracking-[0.16em] text-[#bde8d9]">Billing Signal</p>
                <p className="mt-1 text-[#dbece5]">Same monthly price regardless of render volume.</p>
              </div>
            </div>
          </aside>
        </section>

        <section className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-3xl border border-[#dceadf]/25 bg-[#13222f]/70 p-6">
            <p className="font-syne text-xs uppercase tracking-[0.24em] text-[#bde8d9]">Creator Storyline</p>
            <div className="mt-4 grid gap-3">
              <article className="rounded-2xl border border-[#dceadf]/20 bg-[#0f1b26] p-4">
                <p className="font-fraunces text-2xl">Brand Teams</p>
                <p className="mt-2 text-sm text-[#d9e9e3]">Run launch campaigns with consistent visual language across channels.</p>
              </article>
              <article className="rounded-2xl border border-[#dceadf]/20 bg-[#0f1b26] p-4">
                <p className="font-fraunces text-2xl">Creative Agencies</p>
                <p className="mt-2 text-sm text-[#d9e9e3]">Deliver high-volume concept options without exploding production costs.</p>
              </article>
              <article className="rounded-2xl border border-[#dceadf]/20 bg-[#0f1b26] p-4">
                <p className="font-fraunces text-2xl">Independent Makers</p>
                <p className="mt-2 text-sm text-[#d9e9e3]">Move from idea to polished launch asset inside one controlled studio flow.</p>
              </article>
            </div>
          </div>

          <div className="rounded-3xl border border-[#dceadf]/25 bg-[#13222f]/70 p-6">
            <p className="font-syne text-xs uppercase tracking-[0.24em] text-[#bde8d9]">Edit Progress</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {editStages.map((item) => (
                <button
                  key={item.name}
                  type="button"
                  onClick={() => setActiveStage(item.name)}
                  className={`rounded-full border px-4 py-2 text-sm transition ${
                    activeStage === item.name
                      ? 'border-[#f8e39e] bg-[#f8e39e]/20 text-[#fff4cb]'
                      : 'border-[#dceadf]/25 bg-[#0f1b26] text-[#d7e9e1] hover:border-[#f8e39e]/60'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
            <div className="mt-5 grid gap-3 md:grid-cols-3">
              {stage.details.map((detail) => (
                <div key={detail} className="rounded-xl border border-[#dceadf]/25 bg-[#0f1b26] p-4">
                  <p className="text-sm text-[#dbece5]">{detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="rounded-3xl border border-[#f8e39e]/40 bg-gradient-to-r from-[#f8e39e]/20 via-[#4dd0c8]/20 to-[#a7f3d0]/20 p-8">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="font-syne text-xs uppercase tracking-[0.24em] text-[#f6f2d8]">Final Invitation</p>
              <h2 className="mt-2 font-fraunces text-4xl leading-none text-[#f8fcfa] md:text-5xl">Design, edit, and ship from one studio ritual.</h2>
            </div>
            <button
              type="button"
              className="rounded-full border border-[#f8e39e] bg-[#f8e39e] px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#1e2b32] transition hover:bg-[#ffe9a9] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f8e39e]"
            >
              Join T4 Canvas
            </button>
          </div>
        </section>
      </div>
    </main>
  )
}

export default ConceptFive
