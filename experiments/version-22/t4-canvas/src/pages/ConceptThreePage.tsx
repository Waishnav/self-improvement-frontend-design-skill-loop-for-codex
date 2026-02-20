import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'

type OrbitMode = {
  id: 'portraits' | 'products' | 'worlds'
  label: string
  promise: string
  message: string
  palette: string
}

const orbitModes: OrbitMode[] = [
  {
    id: 'portraits',
    label: 'Portrait Direction',
    promise: 'Gentle skin tones, expressive storytelling, and look continuity.',
    message: 'Build character campaigns with delicate light control and style consistency.',
    palette: '#ff8ab5',
  },
  {
    id: 'products',
    label: 'Product Styling',
    promise: 'Soft materials, clean reflections, and premium merch framing.',
    message: 'Design calm commerce hero shots that still convert under heavy ad pressure.',
    palette: '#6db9ff',
  },
  {
    id: 'worlds',
    label: 'World Building',
    promise: 'Dreamlike spaces with balanced surrealism and readable structure.',
    message: 'Craft imaginative settings while preserving narrative clarity scene to scene.',
    palette: '#8a8bff',
  },
]

const flowSteps = [
  {
    title: 'Mood intake',
    body: 'Capture references, adjectives, and prohibited motifs so the system understands constraints before generation.',
  },
  {
    title: 'Model choreography',
    body: 'Assign models by strength and keep the same context memory as you iterate through styles and crops.',
  },
  {
    title: 'Refine and ship',
    body: 'Narrow to winners, apply edits, and package final assets without leaving the workspace.',
  },
]

const scenePacks = [
  {
    id: 'editorial',
    label: 'Editorial',
    cards: ['City dusk portrait set', 'Soft magazine spread frames', 'Minimal fashion still life'],
  },
  {
    id: 'commerce',
    label: 'Commerce',
    cards: ['Glass bottle macro sweep', 'Layered shelf product family', 'Outdoor activewear burst'],
  },
  {
    id: 'fantasy',
    label: 'Fantasy',
    cards: ['Sky temple exploration', 'Luminescent forest portraits', 'Dream arcade skyline'],
  },
]

export function ConceptThreePage() {
  const [activeMode, setActiveMode] = useState<OrbitMode>(orbitModes[0])
  const [activePack, setActivePack] = useState<(typeof scenePacks)[number]['id']>('editorial')

  const selectedPack = useMemo(
    () => scenePacks.find((pack) => pack.id === activePack) ?? scenePacks[0],
    [activePack],
  )

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#fff7ee] text-[#2e2342]">
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute -left-16 top-16 h-[360px] w-[360px] rounded-full bg-[#ffb7c9]/50 blur-3xl" />
        <div className="absolute right-0 top-1/4 h-[420px] w-[420px] rounded-full bg-[#9ddcff]/45 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-[320px] w-[320px] rounded-full bg-[#cdc0ff]/40 blur-3xl" />
      </div>

      <header className="relative border-b border-[#d8cae8] bg-[#fff7ee]/85 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-5 lg:px-10">
          <div>
            <p className="font-nunito text-xs uppercase tracking-[0.32em] text-[#7f6d97]">T4 Canvas</p>
            <p className="font-quicksand text-2xl font-semibold text-[#382552]">Soft Orbit</p>
          </div>
          <nav className="hidden items-center gap-8 font-nunito text-xs uppercase tracking-[0.18em] text-[#7a6c8c] md:flex">
            <a href="#flow">Flow</a>
            <a href="#library">Scene Library</a>
            <a href="#subscribe">Subscribe</a>
          </nav>
          <Link
            to="/"
            className="rounded-full border border-[#c7bad7] bg-white/60 px-4 py-2 font-nunito text-xs uppercase tracking-[0.2em] text-[#4e3e67]"
          >
            Concept Index
          </Link>
        </div>
      </header>

      <section className="relative mx-auto grid w-full max-w-6xl gap-8 px-6 pb-16 pt-14 lg:grid-cols-[1.02fr_0.98fr] lg:px-10">
        <div>
          <p className="font-nunito text-xs uppercase tracking-[0.28em] text-[#897aa0]">Calm power for creative teams</p>
          <h1 className="mt-4 font-quicksand text-5xl font-semibold leading-[0.95] text-[#332046] sm:text-6xl">
            Generate bold image ideas without losing your calm design rhythm.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-[#625576]">
            T4 Canvas blends Nano Banana Pro, Flux 2, gpt-image-1.5, and Seedream behind one gentle workflow and one flat
            monthly fee. Explore fast, refine softly, ship confidently.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {orbitModes.map((mode) => (
              <button
                key={mode.id}
                type="button"
                onClick={() => setActiveMode(mode)}
                className="rounded-full border px-4 py-2 font-nunito text-xs uppercase tracking-[0.18em] transition"
                style={{
                  borderColor: activeMode.id === mode.id ? mode.palette : '#c6b7da',
                  background: activeMode.id === mode.id ? `${mode.palette}33` : 'rgba(255,255,255,0.55)',
                  color: activeMode.id === mode.id ? '#322146' : '#5f5076',
                }}
              >
                {mode.label}
              </button>
            ))}
          </div>

          <div className="mt-9 flex flex-wrap gap-3">
            <button className="rounded-full bg-[#34214a] px-6 py-3 font-nunito text-xs uppercase tracking-[0.18em] text-[#fff7ee]">
              Start Dream Session
            </button>
            <button className="rounded-full border border-[#c6b8d8] bg-white/60 px-6 py-3 font-nunito text-xs uppercase tracking-[0.18em] text-[#5f5076]">
              Browse Example Briefs
            </button>
          </div>
        </div>

        <aside className="relative overflow-hidden rounded-[2.2rem] border border-[#d5c6e4] bg-white/65 p-7 shadow-[0_25px_40px_rgba(128,104,157,0.18)]">
          <div className="absolute -right-8 -top-8 h-36 w-36 rounded-full opacity-70 blur-2xl" style={{ backgroundColor: activeMode.palette }} />
          <p className="font-nunito text-xs uppercase tracking-[0.2em] text-[#827198]">Current Intent</p>
          <h2 className="mt-2 font-quicksand text-3xl font-semibold text-[#352349]">{activeMode.label}</h2>
          <p className="mt-3 text-sm leading-relaxed text-[#635578]">{activeMode.promise}</p>

          <div className="mt-6 rounded-3xl border border-[#dacbe8] bg-[#fffaf5] p-4">
            <p className="font-nunito text-[11px] uppercase tracking-[0.16em] text-[#84749c]">Preview note</p>
            <p className="mt-2 text-sm leading-relaxed text-[#594a6f]">{activeMode.message}</p>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3 text-xs">
            <div className="rounded-2xl border border-[#dbcde8] bg-white/80 p-3">
              <p className="font-nunito uppercase tracking-[0.15em] text-[#7d6d94]">Mood score</p>
              <p className="mt-2 font-quicksand text-2xl font-semibold text-[#39254f]">96%</p>
            </div>
            <div className="rounded-2xl border border-[#dbcde8] bg-white/80 p-3">
              <p className="font-nunito uppercase tracking-[0.15em] text-[#7d6d94]">Variants/hr</p>
              <p className="mt-2 font-quicksand text-2xl font-semibold text-[#39254f]">134</p>
            </div>
          </div>
        </aside>
      </section>

      <section id="flow" className="relative border-y border-[#e2d4ed] bg-[#fffdf8]/80 py-16">
        <div className="mx-auto w-full max-w-6xl px-6 lg:px-10">
          <h2 className="font-quicksand text-4xl font-semibold text-[#35244b]">Three-step orbit flow</h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#625676]">
            Keep your process breathable: collect intent, choreograph model strengths, and ship final boards without noisy
            tooling overhead.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {flowSteps.map((step, index) => (
              <article key={step.title} className="rounded-3xl border border-[#dfd0ea] bg-white/75 p-5">
                <p className="font-nunito text-[11px] uppercase tracking-[0.2em] text-[#836f99]">Step {index + 1}</p>
                <h3 className="mt-2 font-quicksand text-2xl font-semibold text-[#3d2a54]">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#625677]">{step.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="library" className="relative mx-auto w-full max-w-6xl px-6 py-16 lg:px-10">
        <div className="grid gap-9 lg:grid-cols-[0.92fr_1.08fr]">
          <div>
            <h2 className="font-quicksand text-4xl font-semibold text-[#35244b]">Scene library controls</h2>
            <p className="mt-3 text-sm leading-relaxed text-[#5f5275]">
              Choose a pack and refresh the working board instantly. Teams can switch from editorial to commerce or fantasy
              without spinning up a new project.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {scenePacks.map((pack) => (
                <button
                  key={pack.id}
                  type="button"
                  onClick={() => setActivePack(pack.id)}
                  className="rounded-full border px-4 py-2 font-nunito text-xs uppercase tracking-[0.18em] transition"
                  style={{
                    borderColor: activePack === pack.id ? '#3a2750' : '#ccbde0',
                    background: activePack === pack.id ? '#3a2750' : '#ffffff99',
                    color: activePack === pack.id ? '#fff7ee' : '#604f77',
                  }}
                >
                  {pack.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {selectedPack.cards.map((card, index) => (
              <article
                key={card}
                className={`rounded-3xl border border-[#dccde9] p-5 ${index % 2 === 0 ? 'bg-[#fff9f4]' : 'bg-[#f6f9ff]'}`}
              >
                <p className="font-nunito text-[11px] uppercase tracking-[0.18em] text-[#826f99]">Scene mock {index + 1}</p>
                <h3 className="mt-2 font-quicksand text-2xl font-semibold text-[#3a2750]">{card}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#65597a]">
                  Built with prompt chains that preserve composition, mood, and brand language across revisions.
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="subscribe" className="relative border-t border-[#dfd0eb] bg-[#2f1f43] py-16 text-[#f8f0ff]">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 lg:flex-row lg:items-end lg:justify-between lg:px-10">
          <div className="max-w-2xl">
            <p className="font-nunito text-xs uppercase tracking-[0.3em] text-[#d7b9ff]">One monthly ritual</p>
            <h2 className="mt-3 font-quicksand text-5xl font-semibold leading-[0.92]">Pay once. Compose with every model.</h2>
            <p className="mt-4 text-sm leading-relaxed text-[#dfcaef]">
              Flat pricing keeps budgeting simple while creative output scales with each team member and every campaign.
            </p>
          </div>
          <div className="rounded-3xl border border-[#dabcfb]/40 bg-[#fdf5ff] p-6 text-[#301f44]">
            <p className="font-nunito text-xs uppercase tracking-[0.2em]">Orbit Plan</p>
            <p className="mt-2 font-quicksand text-5xl font-semibold">$79</p>
            <p className="text-sm">per creator / month</p>
            <button className="mt-5 w-full rounded-full bg-[#321f46] px-5 py-3 font-nunito text-xs uppercase tracking-[0.2em] text-[#fff7ee]">
              Start Soft Orbit
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}
