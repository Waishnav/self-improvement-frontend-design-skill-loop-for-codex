import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'

type HeroMode = {
  id: 'campaign' | 'product' | 'story'
  label: string
  signal: string
  detail: string
  model: string
  accent: string
}

const heroModes: HeroMode[] = [
  {
    id: 'campaign',
    label: 'Campaign Direction',
    signal: '84% faster concept rounds',
    detail:
      'Generate first-pass editorial boards and copy-ready ad angles in one pass, then refine without switching tools.',
    model: 'Nano Banana Pro + Flux 2',
    accent: '#8d3b31',
  },
  {
    id: 'product',
    label: 'Product Hero Lab',
    signal: '3x more launch visuals',
    detail:
      'Stage premium product shots across materials, lighting, and perspectives before your first real-world shoot day.',
    model: 'gpt-image-1.5 + Seedream',
    accent: '#2a5a84',
  },
  {
    id: 'story',
    label: 'Story Scene Weaving',
    signal: '7 mood variants per brief',
    detail:
      'Move from rough narrative beats to coherent visual sequences without losing color logic or character consistency.',
    model: 'Flux 2 + Seedream',
    accent: '#4f4a8a',
  },
]

const modelAtelier = [
  {
    name: 'Nano Banana Pro',
    note: 'Gemini depth for nuanced instruction following and concept fidelity.',
  },
  {
    name: 'Flux 2',
    note: 'High-speed ideation for broad style exploration and rapid forks.',
  },
  {
    name: 'gpt-image-1.5',
    note: 'Precise prompt interpretation with strong compositional balance.',
  },
  {
    name: 'Seedream',
    note: 'Texture-rich surrealism that upgrades character and world building.',
  },
]

const workflowTracks = {
  ads: [
    'Load campaign brief and audience cues.',
    'Generate 12 visual territories in mixed aspect ratios.',
    'Auto-rank by persuasion score and edit intent.',
    'Ship final short-list to the brand review board.',
  ],
  ecommerce: [
    'Upload product references and lighting constraints.',
    'Draft studio, lifestyle, and macro detail sets.',
    'Lock winning direction and spin off commerce crops.',
    'Export catalog-ready images with alt text bundles.',
  ],
  cinematic: [
    'Map story beats into visual chapter cards.',
    'Develop location continuity with style controls.',
    'Branch mood palettes for scene-by-scene tension.',
    'Deliver boards and shotlist packets for production.',
  ],
}

export function ConceptOnePage() {
  const [activeMode, setActiveMode] = useState<HeroMode>(heroModes[0])
  const [activeTrack, setActiveTrack] = useState<keyof typeof workflowTracks>('ads')

  const trackTitle = useMemo(() => {
    if (activeTrack === 'ads') {
      return 'Paid Campaign Sprint'
    }

    if (activeTrack === 'ecommerce') {
      return 'Commerce Drop Week'
    }

    return 'Narrative World Build'
  }, [activeTrack])

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f3e4d3] text-[#24160f]">
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute left-0 top-0 h-[520px] w-[520px] rounded-full bg-[#ce8e57]/20 blur-3xl" />
        <div className="absolute right-0 top-1/3 h-[420px] w-[420px] rounded-full bg-[#a87b56]/20 blur-3xl" />
      </div>

      <header className="relative border-b border-[#4f2f1d]/10 bg-[#f3e4d3]/90 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-5 lg:px-10">
          <div>
            <p className="font-archivo text-xs uppercase tracking-[0.35em] text-[#6a3e2a]">T4 Canvas</p>
            <p className="font-cormorant text-2xl">Editorial Heat</p>
          </div>
          <nav className="hidden items-center gap-8 font-archivo text-xs uppercase tracking-[0.2em] text-[#5a3729] md:flex">
            <a href="#atelier">Atelier</a>
            <a href="#workflow">Workflow</a>
            <a href="#pricing">Flat Fee</a>
          </nav>
          <Link
            to="/"
            className="rounded-full border border-[#523325]/35 px-4 py-2 font-archivo text-xs uppercase tracking-[0.2em] text-[#3f2418]"
          >
            Concept Index
          </Link>
        </div>
      </header>

      <section className="relative mx-auto grid w-full max-w-6xl gap-10 px-6 pb-16 pt-14 lg:grid-cols-[1.1fr_0.9fr] lg:px-10">
        <div>
          <p className="font-archivo text-xs uppercase tracking-[0.35em] text-[#8c5135]">
            Single Subscription • All Models
          </p>
          <h1 className="mt-4 font-cormorant text-5xl leading-[0.9] sm:text-6xl lg:text-7xl">
            Build image campaigns with the flow of a modern creative studio.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-[#4a2b1e] sm:text-lg">
            T4 Canvas combines Nano Banana Pro, Flux 2, gpt-image-1.5, and Seedream into one monthly plan so teams can
            direct, iterate, and deliver without model hopping.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            {heroModes.map((mode) => (
              <button
                key={mode.id}
                type="button"
                onClick={() => setActiveMode(mode)}
                className="rounded-full border px-4 py-2 font-archivo text-xs uppercase tracking-[0.2em] transition"
                style={{
                  borderColor: activeMode.id === mode.id ? mode.accent : '#7f4f3b66',
                  color: activeMode.id === mode.id ? '#f3e4d3' : '#4a2b1e',
                  backgroundColor: activeMode.id === mode.id ? mode.accent : 'transparent',
                }}
              >
                {mode.label}
              </button>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-4 font-archivo text-xs uppercase tracking-[0.2em] text-[#6b3f2a]">
            <button className="rounded-full bg-[#24160f] px-6 py-3 text-[#f3e4d3]">Start Free Storyboard</button>
            <button className="rounded-full border border-[#513223]/30 px-6 py-3">Watch Studio Tour</button>
          </div>
        </div>

        <aside className="relative overflow-hidden rounded-[2rem] border border-[#5d3e30]/20 bg-[#f7ecdf] p-7 shadow-[0_25px_50px_rgba(66,28,7,0.14)]">
          <p className="font-archivo text-xs uppercase tracking-[0.28em] text-[#7a4a33]">Live Direction</p>
          <p className="mt-3 font-cormorant text-4xl leading-[0.9] text-[#2f1b12]">{activeMode.signal}</p>
          <p className="mt-4 text-sm leading-relaxed text-[#4d2f21]">{activeMode.detail}</p>

          <div className="mt-7 rounded-3xl border border-[#734532]/25 bg-[#fff7ef] p-4">
            <p className="font-archivo text-[11px] uppercase tracking-[0.2em] text-[#6a3f2b]">Active model stack</p>
            <p className="mt-2 font-cormorant text-2xl text-[#2d1a12]">{activeMode.model}</p>
            <p className="mt-3 text-sm leading-relaxed text-[#573524]">
              Prompt memory, iterative edits, and style inheritance stay connected across all image generations.
            </p>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3 text-xs">
            <div className="rounded-2xl border border-[#704734]/25 bg-[#fcf4ea] p-3">
              <p className="font-archivo uppercase tracking-[0.15em] text-[#6f4431]">Queue latency</p>
              <p className="mt-2 font-cormorant text-2xl">21s</p>
            </div>
            <div className="rounded-2xl border border-[#704734]/25 bg-[#fcf4ea] p-3">
              <p className="font-archivo uppercase tracking-[0.15em] text-[#6f4431]">Saved monthly</p>
              <p className="mt-2 font-cormorant text-2xl">$1,140</p>
            </div>
          </div>
        </aside>
      </section>

      <section id="atelier" className="relative border-y border-[#5a3a2a]/15 bg-[#f7ebde]/70 py-16">
        <div className="mx-auto w-full max-w-6xl px-6 lg:px-10">
          <h2 className="font-cormorant text-4xl">The model atelier</h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#533224]">
            Every generator keeps its personality, but the interface unifies prompt history, variant branching, and edit
            controls so your team stays inside one coherent creative room.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {modelAtelier.map((model) => (
              <article key={model.name} className="rounded-3xl border border-[#613e2d]/20 bg-[#fff7ef] p-5">
                <h3 className="font-archivo text-sm uppercase tracking-[0.2em] text-[#6a3f2b]">{model.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#4d2e20]">{model.note}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="workflow" className="relative mx-auto w-full max-w-6xl px-6 py-16 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className="font-cormorant text-4xl">Workflow storyboard</h2>
            <p className="mt-3 text-sm leading-relaxed text-[#503022]">
              Switch tracks and watch the production cadence re-map in real time. Same platform, different creative tempo.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {([
                ['ads', 'Campaign'],
                ['ecommerce', 'Commerce'],
                ['cinematic', 'Narrative'],
              ] as const).map(([key, label]) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => setActiveTrack(key)}
                  className="rounded-full border px-4 py-2 font-archivo text-xs uppercase tracking-[0.2em] transition"
                  style={{
                    borderColor: activeTrack === key ? '#2f1b12' : '#6b43316b',
                    background: activeTrack === key ? '#2f1b12' : 'transparent',
                    color: activeTrack === key ? '#f8ecdf' : '#4f3022',
                  }}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-[#634030]/20 bg-[#fff7ef] p-6 sm:p-8">
            <p className="font-archivo text-xs uppercase tracking-[0.24em] text-[#6b402c]">{trackTitle}</p>
            <ol className="mt-6 space-y-4">
              {workflowTracks[activeTrack].map((step, index) => (
                <li key={step} className="flex gap-4">
                  <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#724634]/25 font-archivo text-xs uppercase tracking-[0.1em] text-[#5e3929]">
                    {index + 1}
                  </span>
                  <p className="text-sm leading-relaxed text-[#4c2e21]">{step}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section id="pricing" className="relative border-t border-[#5a3a2a]/15 bg-[#2a1710] py-16 text-[#f6e9db]">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 lg:flex-row lg:items-end lg:justify-between lg:px-10">
          <div className="max-w-2xl">
            <p className="font-archivo text-xs uppercase tracking-[0.3em] text-[#d6b896]">Flat monthly fee</p>
            <h2 className="mt-3 font-cormorant text-5xl leading-[0.9]">One subscription. Four image engines. Zero switching tax.</h2>
            <p className="mt-5 text-sm leading-relaxed text-[#dcc7b3]">
              Replace stacked generator subscriptions with a single operating layer and a single bill. Scale seats without
              sacrificing creative control.
            </p>
          </div>
          <div className="rounded-3xl border border-[#d9b287]/30 bg-[#f8ecd9] p-6 text-[#2b170f]">
            <p className="font-archivo text-xs uppercase tracking-[0.24em]">Studio Plan</p>
            <p className="mt-2 font-cormorant text-5xl">$79</p>
            <p className="text-sm">per creator, billed monthly</p>
            <button className="mt-5 w-full rounded-full bg-[#2d1a12] px-5 py-3 font-archivo text-xs uppercase tracking-[0.2em] text-[#f8ecdf]">
              Claim Studio Access
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}
