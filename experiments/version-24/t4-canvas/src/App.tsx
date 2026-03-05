import { BrowserRouter, Link, Navigate, Route, Routes } from 'react-router-dom'

// Decision 1 — Metaphor: A curated design gallery where each room sells T4 Canvas through a different art direction language.
// Decision 2 — Screenshot Moment: Every route has one oversized typographic focal point that collides with an atmospheric visual layer.
// Decision 3 — Wrong Thing: Reusing one startup-wireframe skeleton (left hero copy + right mockup + identical cards) would flatten the concepts.

const concepts = [
  {
    path: '/1',
    title: 'Afterburn Deck',
    mood: 'Dark control room with warm plasma light and sharp telemetry.',
    tone: 'Cinematic power'
  },
  {
    path: '/2',
    title: 'Paper Signal',
    mood: 'Editorial spread on warm paper with serif drama and annotations.',
    tone: 'Magazine craft'
  },
  {
    path: '/3',
    title: 'Blueprint Engine',
    mood: 'Measured technical sheet with grid math and precision copy.',
    tone: 'Technical precision'
  },
  {
    path: '/4',
    title: 'Poster Riot',
    mood: 'Layered collage, rotated blocks, and loud launch energy.',
    tone: 'Art-school chaos'
  },
  {
    path: '/5',
    title: 'Quiet Monograph',
    mood: 'Luxury book-page pacing with restrained contrast and rhythm.',
    tone: 'Premium minimal'
  }
]

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HubPage />} />
        <Route path="/1" element={<AfterburnDeck />} />
        <Route path="/2" element={<PaperSignal />} />
        <Route path="/3" element={<BlueprintEngine />} />
        <Route path="/4" element={<PosterRiot />} />
        <Route path="/5" element={<QuietMonograph />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

function HubPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#f2efe8] px-6 pb-24 pt-14 text-[#14110f] md:px-12">
      <div className="paper-noise pointer-events-none absolute inset-0 opacity-30" />
      <div className="relative mx-auto max-w-6xl">
        <p className="font-mono text-xs uppercase tracking-[0.22em] text-[#9f5d41]">T4 Canvas</p>
        <h1 className="font-display-mixed mt-4 text-[clamp(3.3rem,11vw,8.8rem)] leading-[0.88] text-[#1a120f]">
          One studio.
          <span className="ml-3 font-display-serif italic text-[#b24721]">Four models.</span>
          Infinite visual intent.
        </h1>
        <p className="mt-6 max-w-3xl font-body text-lg text-[#3f312a] md:text-xl">
          Built for power users who need Nano Banana Pro, Flux 2, gpt-image-1.5, and Seedream in one flat-fee workspace.
          Choose a concept below.
        </p>

        <section className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {concepts.map((concept, index) => (
            <Link
              key={concept.path}
              to={concept.path}
              className="group relative overflow-hidden rounded-[1.75rem] border border-[#cdb9ac] bg-[#fffaf4] p-6 transition duration-500 hover:-translate-y-1 hover:border-[#a34a29]"
            >
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_85%_15%,rgba(193,87,52,0.2),transparent_60%)] opacity-0 transition duration-500 group-hover:opacity-100" />
              <p className="relative font-mono text-xs uppercase tracking-[0.18em] text-[#9a6a54]">Concept {index + 1}</p>
              <h2 className="relative mt-3 font-display-sans text-4xl leading-none text-[#241813]">{concept.title}</h2>
              <p className="relative mt-4 font-body text-base text-[#4a3931]">{concept.mood}</p>
              <div className="relative mt-8 flex items-center justify-between">
                <span className="font-body text-sm text-[#6a4f42]">{concept.tone}</span>
                <span className="font-mono text-xs uppercase tracking-[0.18em] text-[#9f5d41]">Open</span>
              </div>
            </Link>
          ))}
        </section>
      </div>
    </main>
  )
}

function AfterburnDeck() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050505] px-6 pb-24 pt-10 text-[#f4ecdf] md:px-12">
      <div className="pointer-events-none absolute -left-24 top-8 h-80 w-80 rounded-full bg-[#ff6b2f]/30 blur-[110px]" />
      <div className="pointer-events-none absolute right-[-120px] top-[35%] h-[380px] w-[380px] rounded-full bg-[#f7b267]/20 blur-[130px]" />
      <div className="relative mx-auto max-w-6xl">
        <header className="flex items-center justify-between">
            <p className="font-display-sans text-2xl tracking-[0.07em]">T4 Canvas</p>
          <Link className="font-mono text-xs uppercase tracking-[0.2em] text-[#f3a36c] transition hover:text-[#ffd8bb]" to="/">
            All Concepts
          </Link>
        </header>

        <section className="mt-16 text-center">
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-[#f3a36c]">Afterburn Deck</p>
          <h1 className="font-display-sans mt-4 text-[clamp(4.4rem,14vw,12rem)] uppercase leading-[0.86] tracking-[0.03em]">
            Image Engines
            <span className="block text-[#ff8f55]">At Full Throttle</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl font-body text-lg text-[#d3c7b8]">
            Route complex prompts across Nano Banana Pro, Flux 2, gpt-image-1.5, and Seedream in one cockpit with one monthly bill.
          </p>
        </section>

        <section className="mt-16 grid gap-5 md:grid-cols-12">
          <article className="afterburn-card md:col-span-7">
            <p className="font-mono text-[0.68rem] uppercase tracking-[0.2em] text-[#f3a36c]">Model Relay</p>
            <h2 className="mt-4 font-display-sans text-5xl leading-[0.9] uppercase text-[#f8f2e8]">One Prompt, Four Passes</h2>
            <p className="mt-4 max-w-lg font-body text-[#d3c7b8]">
              Fire baseline generation, style mutation, clean-up, and upscale in a chained batch while each model handles its strongest phase.
            </p>
          </article>
          <article className="afterburn-card md:col-span-5 md:row-span-2">
            <p className="font-mono text-[0.68rem] uppercase tracking-[0.2em] text-[#f3a36c]">Control Signal</p>
            <div className="mt-4 space-y-4 font-body text-sm text-[#dfd2c2]">
              <div className="rounded-lg border border-[#7c4f35] p-4">
                <p className="font-mono text-[0.64rem] uppercase tracking-[0.2em] text-[#ffb98a]">Latency</p>
                <p className="mt-2 text-3xl text-[#f8f2e8]">2.4s avg</p>
              </div>
              <div className="rounded-lg border border-[#7c4f35] p-4">
                <p className="font-mono text-[0.64rem] uppercase tracking-[0.2em] text-[#ffb98a]">Daily Runs</p>
                <p className="mt-2 text-3xl text-[#f8f2e8]">Unlimited</p>
              </div>
            </div>
          </article>
          <article className="afterburn-card md:col-span-4">
            <h3 className="font-display-sans text-3xl uppercase tracking-[0.04em] text-[#f8f2e8]">Nano Banana Pro</h3>
            <p className="mt-3 font-body text-sm text-[#d3c7b8]">Reference-faithful composites and nuanced lighting transitions.</p>
          </article>
          <article className="afterburn-card md:col-span-8">
            <h3 className="font-display-sans text-3xl uppercase tracking-[0.04em] text-[#f8f2e8]">Flux 2 + gpt-image-1.5 + Seedream</h3>
            <p className="mt-3 font-body text-sm text-[#d3c7b8]">
              Use Flux 2 for shape language, gpt-image-1.5 for semantic steering, Seedream for texture realism. Then compare every output in synchronized boards.
            </p>
          </article>
        </section>
      </div>
    </main>
  )
}

function PaperSignal() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#f5eee4] px-6 pb-24 pt-10 text-[#211a16] md:px-12">
      <div className="paper-noise pointer-events-none absolute inset-0 opacity-40" />
      <div className="relative mx-auto grid max-w-6xl gap-10 lg:grid-cols-[120px_1fr]">
        <aside className="hidden lg:flex lg:items-center lg:justify-center">
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-[#9f5b42] [writing-mode:vertical-rl]">
            Paper Signal Edition
          </p>
        </aside>
        <div>
          <header className="flex items-start justify-between gap-5">
            <p className="font-display-serif text-2xl italic text-[#8c3424]">T4 Canvas</p>
            <Link className="font-body text-sm text-[#6c5144] underline-offset-4 transition hover:underline" to="/">
              Gallery Index
            </Link>
          </header>

          <section className="mt-14">
            <h1 className="font-display-serif text-[clamp(4rem,11vw,9rem)] leading-[0.85] text-[#261d19]">
              Run an entire
              <span className="ml-3 italic text-[#a44330]">image studio</span>
              <br />
              like a single publication.
            </h1>
            <p className="mt-6 max-w-2xl font-body text-lg text-[#4b3c34]">
              Every model has a voice. T4 Canvas lets you assign those voices to one repeatable workflow, then edit and publish without leaving the same desk.
            </p>
          </section>

          <section className="mt-20 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <article className="rounded-[1.8rem] border border-[#c9b6a7] bg-[#fbf7f2] p-8">
              <p className="font-display-serif text-5xl italic text-[#8c3424]">"We stopped juggling tabs."
              </p>
              <p className="mt-6 font-body text-base leading-relaxed text-[#4b3c34]">
                Prompt drafts, seed locking, style versions, and destructive edits all sit in one timeline. Compare states by model, not by guesswork.
              </p>
            </article>
            <article className="rounded-[1.8rem] border border-[#c9b6a7] bg-[#f8f0e6] p-8">
              <h2 className="font-display-serif text-4xl leading-[0.9]">Flat fee, full stack</h2>
              <ul className="mt-6 space-y-3 font-body text-sm text-[#4b3c34]">
                <li>Nano Banana Pro for scene fidelity</li>
                <li>Flux 2 for bold shape exploration</li>
                <li>gpt-image-1.5 for precise prompt control</li>
                <li>Seedream for surface texture realism</li>
              </ul>
            </article>
          </section>
        </div>
      </div>
    </main>
  )
}

function BlueprintEngine() {
  return (
    <main className="blueprint-grid relative min-h-screen overflow-hidden bg-[#eff4f8] px-6 pb-24 pt-10 text-[#0f202f] md:px-12">
      <div className="relative mx-auto max-w-6xl">
        <header className="flex items-center justify-between">
          <div>
            <p className="font-mono text-[0.65rem] uppercase tracking-[0.24em] text-[#4f708a]">Spec Sheet</p>
            <p className="font-blueprint-display text-2xl">T4 Canvas</p>
          </div>
          <Link className="font-mono text-xs uppercase tracking-[0.22em] text-[#4f708a] transition hover:text-[#214661]" to="/">
            Return
          </Link>
        </header>

        <section className="mt-14 border border-[#b1c5d4] bg-[#f4f8fb]/90 p-8">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <h1 className="font-blueprint-display text-[clamp(3.5rem,10vw,8.4rem)] leading-[0.85] tracking-[-0.02em] text-[#12283b]">
              GENERATION
              <span className="block text-[#46718f]">BLUEPRINT</span>
            </h1>
            <p className="max-w-sm font-mono text-xs leading-relaxed tracking-[0.08em] text-[#37566c]">
              Centralized model orchestration for image creators running high-volume ideation, editing, and variation management.
            </p>
          </div>
        </section>

        <section className="mt-10 grid gap-4 md:grid-cols-6">
          <article className="blueprint-card md:col-span-2">
            <p className="font-mono text-[0.64rem] uppercase tracking-[0.2em] text-[#4f708a]">Input</p>
            <h2 className="mt-3 font-blueprint-display text-3xl leading-none">Prompt Graph</h2>
            <p className="mt-3 font-body text-sm text-[#2f4d63]">Nested prompt modules, reusable style DNA, and deterministic seeds.</p>
          </article>
          <article className="blueprint-card md:col-span-4">
            <p className="font-mono text-[0.64rem] uppercase tracking-[0.2em] text-[#4f708a]">Execution Matrix</p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {['Nano Banana Pro', 'Flux 2', 'gpt-image-1.5', 'Seedream'].map((model, i) => (
                <div key={model} className="border border-[#adc2d0] bg-[#f7fbff] px-4 py-3">
                  <p className="font-mono text-[0.62rem] uppercase tracking-[0.2em] text-[#6f8da1]">Node {String(i + 1).padStart(2, '0')}</p>
                  <p className="mt-2 font-body text-sm text-[#1d364a]">{model}</p>
                </div>
              ))}
            </div>
          </article>
          <article className="blueprint-card md:col-span-6">
            <div className="grid gap-8 md:grid-cols-3">
              <div>
                <p className="font-mono text-[0.62rem] uppercase tracking-[0.2em] text-[#6f8da1]">Throughput</p>
                <p className="mt-2 font-blueprint-display text-4xl text-[#16334a]">24h / 24h</p>
              </div>
              <div>
                <p className="font-mono text-[0.62rem] uppercase tracking-[0.2em] text-[#6f8da1]">Billing Mode</p>
                <p className="mt-2 font-blueprint-display text-4xl text-[#16334a]">Flat Monthly</p>
              </div>
              <div>
                <p className="font-mono text-[0.62rem] uppercase tracking-[0.2em] text-[#6f8da1]">Output Control</p>
                <p className="mt-2 font-blueprint-display text-4xl text-[#16334a]">Versioned</p>
              </div>
            </div>
          </article>
        </section>
      </div>
    </main>
  )
}

function PosterRiot() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#f7f3e9] px-6 pb-24 pt-10 text-[#1b1713] md:px-12">
      <div className="pointer-events-none absolute -right-20 -top-24 h-80 w-80 rounded-full bg-[#ef542e]/25 blur-3xl" />
      <div className="pointer-events-none absolute -left-24 bottom-12 h-72 w-72 rounded-full bg-[#d8af45]/30 blur-3xl" />
      <div className="relative mx-auto max-w-6xl">
        <header className="flex items-center justify-between">
          <p className="font-display-bold text-3xl uppercase tracking-tight">T4 Canvas</p>
          <Link className="font-body text-sm underline decoration-[#9c371b]/50 underline-offset-4 transition hover:decoration-[#9c371b]" to="/">
            Back to Concepts
          </Link>
        </header>

        <section className="mt-12 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <h1 className="font-display-bold text-[clamp(4.2rem,12vw,10rem)] uppercase leading-[0.83] text-[#16110f]">
              Make Images
              <span className="block rotate-[-2deg] text-[#c23e20]">Like Posters</span>
              Not Prompts
            </h1>
            <p className="mt-6 max-w-xl font-body text-lg text-[#3c2e28]">
              T4 Canvas is where model outputs become a curated visual campaign. Build variants fast, pin the winners, and remix in-place.
            </p>
          </div>
          <div className="poster-stack h-[340px] rounded-[2rem] border border-[#ccb9a5] bg-[#fffaf1] p-5">
            <div className="h-full rounded-[1.4rem] border border-[#b89477] bg-[linear-gradient(150deg,#f7e4c9,#fef9ef)] p-6">
              <p className="font-mono text-[0.62rem] uppercase tracking-[0.2em] text-[#9c371b]">Launch Board</p>
              <p className="mt-4 font-display-bold text-6xl leading-[0.84] text-[#19130f]">4
                <span className="ml-2 text-[#c23e20]">MODELS</span>
              </p>
              <p className="mt-5 font-body text-sm text-[#4a3b32]">Mix Nano Banana Pro, Flux 2, gpt-image-1.5, and Seedream under one plan.</p>
            </div>
          </div>
        </section>

        <section className="mt-20 grid gap-4 md:grid-cols-12">
          <article className="riot-card md:col-span-5 md:rotate-[-1.5deg]">
            <h2 className="font-display-bold text-4xl leading-[0.88]">Direction Control</h2>
            <p className="mt-3 font-body text-sm text-[#4a3b32]">Save style recipes once and push them across new campaigns in seconds.</p>
          </article>
          <article className="riot-card md:col-span-7 md:translate-y-5 md:rotate-[0.8deg]">
            <h2 className="font-display-bold text-4xl leading-[0.88]">Rapid Mutation</h2>
            <p className="mt-3 font-body text-sm text-[#4a3b32]">Generate families of options with tracked seeds, then edit only what matters.</p>
          </article>
          <article className="riot-card md:col-span-3 md:-translate-y-4 md:rotate-[-2deg]">
            <h2 className="font-display-bold text-3xl leading-[0.9]">Flat Fee</h2>
            <p className="mt-3 font-body text-sm text-[#4a3b32]">No model-by-model budgeting.</p>
          </article>
          <article className="riot-card md:col-span-9 md:rotate-[1.2deg]">
            <h2 className="font-display-bold text-4xl leading-[0.88]">Editing Without Context Switching</h2>
            <p className="mt-3 font-body text-sm text-[#4a3b32]">Mask, upscale, restyle, and compare in the same board where prompts live.</p>
          </article>
        </section>
      </div>
    </main>
  )
}

function QuietMonograph() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#f9f8f4] px-6 pb-24 pt-10 text-[#1d1917] md:px-12">
          <p className="pointer-events-none absolute -left-8 top-20 font-monograph-display text-[clamp(5rem,18vw,16rem)] italic leading-none text-[#d9d1c4]/50">
        Canvas
      </p>
      <div className="relative mx-auto max-w-4xl">
        <header className="flex items-center justify-between">
          <p className="font-monograph-display text-3xl italic">T4 Canvas</p>
          <Link className="font-body text-sm text-[#5a4a3f] transition hover:text-[#b27b35]" to="/">
            View All Concepts
          </Link>
        </header>

        <section className="mt-20 max-w-3xl">
            <h1 className="font-monograph-display text-[clamp(4rem,10vw,8rem)] leading-[0.88] text-[#1f1814]">
            Serious image work,
            <span className="ml-3 italic text-[#b27b35]">without tool sprawl.</span>
          </h1>
          <p className="mt-8 font-body text-xl leading-relaxed text-[#3d342f]">
            T4 Canvas unifies generation and editing across Nano Banana Pro, Flux 2, gpt-image-1.5, and Seedream. Build fast, review cleanly, and keep the entire process inside one premium studio.
          </p>
        </section>

        <section className="mt-24 space-y-16 border-l border-[#d7ccbc] pl-8">
          <article>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#b27b35]">01</p>
            <h2 className="mt-3 font-monograph-display text-5xl leading-[0.9]">Create in parallel</h2>
            <p className="mt-4 max-w-2xl font-body text-base leading-relaxed text-[#4d433d]">
              Fire variants from every model simultaneously, then sort outputs by visual intent instead of by provider dashboard.
            </p>
          </article>
          <article>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#b27b35]">02</p>
            <h2 className="mt-3 font-monograph-display text-5xl leading-[0.9]">Edit with memory</h2>
            <p className="mt-4 max-w-2xl font-body text-base leading-relaxed text-[#4d433d]">
              Version history, masks, and prompt lineage stay attached to every image, so revisions never lose context.
            </p>
          </article>
          <article>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#b27b35]">03</p>
            <h2 className="mt-3 font-monograph-display text-5xl leading-[0.9]">Subscribe once</h2>
            <p className="mt-4 max-w-2xl font-body text-base leading-relaxed text-[#4d433d]">
              A single monthly plan unlocks the full model stack for teams that care about speed and craft.
            </p>
          </article>
        </section>
      </div>
    </main>
  )
}

export default App
