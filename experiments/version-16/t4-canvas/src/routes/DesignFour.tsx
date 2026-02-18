import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'

const intents = [
  {
    id: 'product',
    label: 'Product Spotlight',
    line: 'Turn rough concepts into polished product worlds with minimal prompting.',
  },
  {
    id: 'portrait',
    label: 'Portrait Narrative',
    line: 'Craft emotionally rich portraits while preserving styling continuity.',
  },
  {
    id: 'world',
    label: 'Worldbuilding',
    line: 'Design fantasy or sci-fi environments with layered atmosphere controls.',
  },
  {
    id: 'brand',
    label: 'Brand Campaign',
    line: 'Generate complete campaign families with coherent visual language.',
  },
]

const riverModes = [
  {
    id: 'explore',
    title: 'Explore',
    summary: 'Wide-output mode for discovering unexpected composition directions.',
  },
  {
    id: 'shape',
    title: 'Shape',
    summary: 'Refine promising drafts by controlling palette, lighting, and geometry.',
  },
  {
    id: 'finalize',
    title: 'Finalize',
    summary: 'Lock details and export production-ready variants for handoff.',
  },
]

const modelGarden = [
  {
    id: 'nano',
    name: 'Nano Banana Pro',
    trait: 'Fast ideation wave',
    use: 'Best for broad exploration and early concept forks.',
  },
  {
    id: 'flux',
    name: 'Flux 2',
    trait: 'Realism anchor',
    use: 'Excellent for detailed product scenes and natural lighting.',
  },
  {
    id: 'gpt-image',
    name: 'gpt-image-1.5',
    trait: 'Instruction precision',
    use: 'Reliable when exact edits and layout constraints matter.',
  },
  {
    id: 'seedream',
    name: 'Seedream',
    trait: 'Stylistic bloom',
    use: 'Adds artistic texture and character-rich rendering tone.',
  },
]

const quotes = [
  {
    id: 0,
    author: 'Maya, Creative Director',
    line: 'We moved from five disconnected tools to one flow, and our campaign cycle got dramatically faster.',
  },
  {
    id: 1,
    author: 'Jin, Product Marketer',
    line: 'Switching between models inside one timeline finally made experimentation manageable for the team.',
  },
  {
    id: 2,
    author: 'Luca, Founder',
    line: 'The flat fee changed how often we iterate. People test ideas freely instead of rationing output.',
  },
]

function DesignFour() {
  const [intentId, setIntentId] = useState(intents[0].id)
  const [riverId, setRiverId] = useState(riverModes[0].id)
  const [modelId, setModelId] = useState(modelGarden[1].id)
  const [billing, setBilling] = useState<'monthly' | 'yearly'>('monthly')
  const [quoteId, setQuoteId] = useState(quotes[0].id)

  const activeIntent = useMemo(() => intents.find((intent) => intent.id === intentId) ?? intents[0], [intentId])
  const activeRiver = useMemo(() => riverModes.find((mode) => mode.id === riverId) ?? riverModes[0], [riverId])
  const activeModel = useMemo(() => modelGarden.find((model) => model.id === modelId) ?? modelGarden[0], [modelId])
  const activeQuote = useMemo(() => quotes.find((quote) => quote.id === quoteId) ?? quotes[0], [quoteId])

  return (
    <main className="relative min-h-screen overflow-x-clip bg-[#ecf4f3] px-5 py-8 text-[#15302f] sm:px-8 lg:px-14">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-16 top-0 h-80 w-80 rounded-full bg-[#8adfd0]/60 blur-[110px]" />
        <div className="absolute right-0 top-44 h-[25rem] w-[25rem] rounded-full bg-[#b9d6ff]/50 blur-[120px]" />
        <div className="absolute bottom-0 left-1/3 h-96 w-96 rounded-full bg-[#d1f0b0]/40 blur-[130px]" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col gap-8">
        <header className="rounded-[2rem] border border-[#94bdb6] bg-white/60 px-6 py-5 backdrop-blur-xl">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[#3d7c73]">T4 Canvas</p>
              <h1 className="font-display text-4xl text-[#0f3230] sm:text-5xl">Organic Spectrum</h1>
            </div>
            <Link
              to="/"
              className="rounded-full border border-[#4f8e84] bg-white/60 px-5 py-2 text-xs uppercase tracking-[0.18em] text-[#1d4e48] transition hover:bg-[#d6ebe7]"
            >
              Concept Library
            </Link>
          </div>
        </header>

        <section className="section-shell border border-[#92bab3] bg-white/70 p-6 backdrop-blur-xl lg:p-8">
          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#3f796f]">Hero Interaction</p>
              <h2 className="mt-3 font-display text-5xl leading-[0.92] text-[#113532] sm:text-6xl">
                One flowing studio for every style of image work.
              </h2>
              <p className="mt-4 max-w-xl text-sm text-[#315956]">
                Generate and edit with Nano Banana Pro, Flux 2, gpt-image-1.5, and Seedream from a calm surface built for deep creative focus.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {intents.map((intent) => (
                  <button
                    key={intent.id}
                    type="button"
                    onClick={() => setIntentId(intent.id)}
                    className={`rounded-full border px-4 py-2 text-sm transition ${
                      intent.id === intentId
                        ? 'border-[#2b7f75] bg-[#2f8a7f] text-[#effaf8]'
                        : 'border-[#92bbb5] bg-white/75 text-[#2c5d58] hover:bg-[#ddefec]'
                    }`}
                  >
                    {intent.label}
                  </button>
                ))}
              </div>

              <div className="mt-6 rounded-2xl border border-[#93b9b3] bg-[#eaf7f4] p-4">
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#3f786f]">Current Intent</p>
                <p className="mt-2 text-lg font-semibold text-[#133a37]">{activeIntent.label}</p>
                <p className="mt-2 text-sm text-[#355f5a]">{activeIntent.line}</p>
              </div>
            </div>

            <aside className="relative overflow-hidden rounded-[1.8rem] border border-[#9cc4be] bg-[#eff9f7] p-5">
              <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-[#8fded0]/65 blur-xl" />
              <div className="absolute -left-12 bottom-0 h-40 w-40 rounded-full bg-[#b9dcfe]/60 blur-xl" />
              <div className="relative z-10 space-y-4">
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#3f7a70]">Live Canvas</p>
                <div className="animate-slow-float rounded-2xl border border-[#7fb4ac] bg-[linear-gradient(155deg,#d2f1ec_0%,#bfdefa_50%,#d9f4c4_100%)] p-5">
                  <p className="font-display text-3xl text-[#1a4843]">Adaptive Prompt River</p>
                  <p className="mt-2 text-sm text-[#2a5d57]">Morph and branch generations without leaving your composition context.</p>
                </div>
                <div className="grid grid-cols-2 gap-3 text-xs text-[#2a5a56]">
                  <div className="rounded-xl border border-[#8fbbb4] bg-white/65 p-3">4 models orchestrated</div>
                  <div className="rounded-xl border border-[#8fbbb4] bg-white/65 p-3">Prompt lineage tracking</div>
                  <div className="rounded-xl border border-[#8fbbb4] bg-white/65 p-3">Touch + keyboard ready</div>
                  <div className="rounded-xl border border-[#8fbbb4] bg-white/65 p-3">Collaborative comments</div>
                </div>
              </div>
            </aside>
          </div>
        </section>

        <section className="grid gap-5 lg:grid-cols-[1fr_1fr]">
          <article className="section-shell border border-[#95beb7] bg-white/75 p-5">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#3f7a70]">Creative River</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {riverModes.map((mode) => (
                <button
                  key={mode.id}
                  type="button"
                  onClick={() => setRiverId(mode.id)}
                  className={`rounded-full px-4 py-2 text-sm transition ${
                    mode.id === riverId
                      ? 'bg-[#2f8a7f] text-[#eaf8f6]'
                      : 'border border-[#92bbb5] bg-white/80 text-[#2f5f5a] hover:bg-[#ddf0ec]'
                  }`}
                >
                  {mode.title}
                </button>
              ))}
            </div>
            <div className="mt-4 rounded-2xl border border-[#8db8b0] bg-[#e6f4f1] p-4">
              <p className="text-sm text-[#2e5d58]">{activeRiver.summary}</p>
              <div className="mt-4 grid gap-2 text-sm text-[#24534e]">
                <div className="rounded-xl border border-[#89b4ad] bg-white/70 p-3">1. Build references from rough text intent</div>
                <div className="rounded-xl border border-[#89b4ad] bg-white/70 p-3">2. Re-run selected frames with targeted model strengths</div>
                <div className="rounded-xl border border-[#89b4ad] bg-white/70 p-3">3. Finalize in one layered edit board</div>
              </div>
            </div>
          </article>

          <article className="section-shell border border-[#95beb7] bg-white/75 p-5">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#3f7a70]">Model Garden</p>
            <div className="mt-4 grid gap-2 sm:grid-cols-2">
              {modelGarden.map((model) => (
                <button
                  key={model.id}
                  type="button"
                  onClick={() => setModelId(model.id)}
                  className={`rounded-2xl border px-3 py-3 text-left transition ${
                    model.id === modelId
                      ? 'border-[#2f867c] bg-[#2f8a7f] text-[#ecfbf8]'
                      : 'border-[#93bbb5] bg-[#edf7f5] text-[#275752] hover:bg-[#def1ed]'
                  }`}
                >
                  <p className="text-sm font-semibold">{model.name}</p>
                  <p className="mt-1 text-xs opacity-90">{model.trait}</p>
                </button>
              ))}
            </div>
            <div className="mt-4 rounded-2xl border border-[#89b2ac] bg-[#e5f2ef] p-4">
              <p className="font-semibold text-[#184944]">{activeModel.name}</p>
              <p className="mt-2 text-sm text-[#2d5f5a]">{activeModel.use}</p>
            </div>
          </article>
        </section>

        <section className="section-shell border border-[#90b9b2] bg-white/75 p-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#3f7a70]">Membership</p>
              <h3 className="mt-2 font-display text-4xl text-[#123a36]">Simple pricing. Deep capability.</h3>
              <p className="mt-2 text-sm text-[#315f59]">All four models, edits, collaboration, and exports are included.</p>

              <div className="mt-5 inline-flex rounded-full border border-[#8fb8b2] p-1 text-xs uppercase tracking-[0.15em]">
                <button
                  type="button"
                  onClick={() => setBilling('monthly')}
                  className={`rounded-full px-4 py-2 transition ${billing === 'monthly' ? 'bg-[#2f8a7f] text-[#ecfaf8]' : 'text-[#2f645f] hover:bg-[#dcefeb]'}`}
                >
                  Monthly
                </button>
                <button
                  type="button"
                  onClick={() => setBilling('yearly')}
                  className={`rounded-full px-4 py-2 transition ${billing === 'yearly' ? 'bg-[#2f8a7f] text-[#ecfaf8]' : 'text-[#2f645f] hover:bg-[#dcefeb]'}`}
                >
                  Yearly
                </button>
              </div>
            </div>

            <div className="rounded-2xl border border-[#84b0a8] bg-[#123f3b] p-5 text-[#dff4ef]">
              <p className="font-mono text-xs uppercase tracking-[0.14em] text-[#bce5dc]">Current Price</p>
              <p className="mt-3 text-4xl font-semibold">{billing === 'monthly' ? '$89' : '$71'}</p>
              <p className="text-xs uppercase tracking-[0.14em] text-[#bce5dc]">per user / month</p>
              <ul className="mt-4 space-y-2 text-sm text-[#d4f0ea]">
                <li>Unlimited generation sessions</li>
                <li>Model-aware prompt optimizer</li>
                <li>Version branch comparison grid</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section-shell border border-[#90b9b2] bg-white/80 p-6">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#3f7a70]">Studio Voices</p>
          <blockquote className="mt-4 rounded-2xl border border-[#8fb8b2] bg-[#e7f4f1] p-5">
            <p className="text-lg text-[#1a4b46]">“{activeQuote.line}”</p>
            <footer className="mt-3 text-sm font-semibold text-[#2f655f]">{activeQuote.author}</footer>
          </blockquote>
          <div className="mt-4 flex gap-2">
            {quotes.map((quote) => (
              <button
                key={quote.id}
                type="button"
                onClick={() => setQuoteId(quote.id)}
                className={`h-3 rounded-full transition ${quote.id === quoteId ? 'w-10 bg-[#2f8a7f]' : 'w-6 bg-[#8db8b1] hover:bg-[#5f9f96]'}`}
                aria-label={`Show quote ${quote.id + 1}`}
              />
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}

export default DesignFour
