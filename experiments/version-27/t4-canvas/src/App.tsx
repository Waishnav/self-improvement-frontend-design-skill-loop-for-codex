import type { ReactNode } from 'react'
import { useMemo, useState } from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'

type DesignCard = {
  path: string
  title: string
  concept: string
  summary: string
  palette: string
  bullets: string[]
}

const designCards: DesignCard[] = [
  {
    path: '/1',
    title: 'Studio Ledger',
    concept: 'Warm launch page with pricing discipline and model comparison first.',
    summary:
      'Editorial warmth, direct pricing language, and a model matrix that reads like a buying guide instead of a glow-heavy hero.',
    palette: 'Warm black, oat, rust',
    bullets: ['comparison-led layout', 'clear plan framing', 'human-readable sections'],
  },
  {
    path: '/2',
    title: 'Operator Desk',
    concept: 'Product-minded marketing page anchored by a believable app surface.',
    summary:
      'Shows how T4 Canvas works through queues, revisions, and delivery states rather than decorative chrome.',
    palette: 'Graphite, smoke, moss',
    bullets: ['normal app shell', 'queue and review surfaces', 'calm dark mode'],
  },
  {
    path: '/3',
    title: 'Print House',
    concept: 'Magazine-like launch page with stronger type and a quiet paper palette.',
    summary:
      'Uses structured columns, comparison rows, and proof blocks without falling into SaaS-card repetition.',
    palette: 'Paper, ink, burgundy',
    bullets: ['print rhythm', 'comparison table', 'proof-first storytelling'],
  },
  {
    path: '/4',
    title: 'Workshop Floor',
    concept: 'Industrial campaign page focused on workflow speed and output control.',
    summary:
      'Uses numbered sections, tight grids, and restrained accents to feel specific without drifting into AI dashboard habits.',
    palette: 'Coal, steel, ember',
    bullets: ['numbered system', 'workflow sequence', 'high-contrast CTA'],
  },
  {
    path: '/5',
    title: 'Field Manual',
    concept: 'A spec-sheet landing page with practical detail and quieter sales language.',
    summary:
      'Frames the product like a tool buyers can evaluate quickly: limits, formats, turnaround, review steps, and plan fit.',
    palette: 'Stone, slate, green',
    bullets: ['spec framing', 'dense information', 'tool-manual tone'],
  },
]

const modelRows = [
  ['Nano Banana Pro', 'Rapid ideation and expressive edits', 'Text guidance, brush repair, concept pivots'],
  ['Flux 2', 'Sharp visual fidelity for campaigns', 'Packaging, mockups, editorial stills'],
  ['gpt-image-1.5', 'Reliable generalist output', 'Social assets, product scenes, remixing'],
  ['Seedream', 'Illustration-heavy direction', 'Character sets, stylized key art, sequences'],
]

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/1" element={<StudioLedgerPage />} />
        <Route path="/2" element={<OperatorDeskPage />} />
        <Route path="/3" element={<PrintHousePage />} />
        <Route path="/4" element={<WorkshopFloorPage />} />
        <Route path="/5" element={<FieldManualPage />} />
      </Routes>
    </BrowserRouter>
  )
}

function AppFrame({
  children,
  className,
}: {
  children: ReactNode
  className: string
}) {
  return <div className={`min-h-screen ${className}`}>{children}</div>
}

function SiteHeader({
  inverse = false,
}: {
  inverse?: boolean
}) {
  const text = inverse ? 'text-stone-100' : 'text-stone-900'
  const border = inverse ? 'border-white/10' : 'border-stone-900/10'
  const subtle = inverse ? 'text-stone-400' : 'text-stone-600'

  return (
    <header className={`border-b ${border}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-8">
        <Link className={`font-grotesk text-sm font-semibold tracking-[0.08em] ${text}`} to="/">
          T4 Canvas
        </Link>
        <nav className={`flex items-center gap-6 text-sm ${subtle}`}>
          <a href="#models">Models</a>
          <a href="#workflow">Workflow</a>
          <a href="#pricing">Pricing</a>
          <Link
            className={`rounded-lg border px-3 py-2 transition-colors ${inverse ? 'border-white/15 hover:bg-white/8' : 'border-stone-900/10 hover:bg-stone-900/5'} ${text}`}
            to="/"
          >
            View all concepts
          </Link>
        </nav>
      </div>
    </header>
  )
}

function HomePage() {
  return (
    <AppFrame className="bg-[#12110f] text-stone-100">
      <div className="mx-auto max-w-7xl px-6 py-10 sm:px-8">
        <div className="mb-16 flex items-center justify-between border-b border-white/10 pb-4">
          <div>
            <div className="font-grotesk text-sm tracking-[0.1em] text-stone-400">T4 Canvas</div>
            <h1 className="mt-2 max-w-3xl font-grotesk text-4xl font-semibold tracking-tight text-stone-100 sm:text-6xl">
              Five launch directions for one image studio.
            </h1>
          </div>
          <div className="hidden max-w-sm text-sm leading-6 text-stone-400 lg:block">
            Version 27 emphasizes less decorative AI chrome and stronger information structure. Each route keeps a
            clear section flow, direct CTA, and a real reason for its layout.
          </div>
        </div>

        <section className="grid gap-10 lg:grid-cols-[1.25fr_0.75fr]">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {designCards.map((design) => (
              <Link
                key={design.path}
                className="group flex h-full flex-col justify-between rounded-xl border border-white/10 bg-white/5 p-6 transition-colors hover:border-stone-300/30 hover:bg-white/8"
                to={design.path}
              >
                <div>
                  <div className="font-grotesk text-xs tracking-[0.08em] text-stone-400">{design.palette}</div>
                  <h2 className="mt-3 font-grotesk text-2xl font-semibold text-stone-100">{design.title}</h2>
                  <p className="mt-3 text-sm leading-6 text-stone-300">{design.summary}</p>
                </div>
                <div className="mt-8">
                  <div className="border-t border-white/10 pt-4">
                    {design.bullets.map((bullet) => (
                      <div key={bullet} className="py-1 text-sm text-stone-400">
                        {bullet}
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 font-grotesk text-sm font-medium text-stone-100">Open concept</div>
                </div>
              </Link>
            ))}
          </div>

          <aside className="space-y-6 rounded-xl border border-white/10 bg-[#1a1815] p-6">
            <div>
              <h2 className="font-grotesk text-xl font-semibold text-stone-100">What this benchmark keeps fixed</h2>
              <div className="mt-4 space-y-3 text-sm leading-6 text-stone-300">
                <p>One product, one stack, one root landing page, and five alternate directions hosted on separate routes.</p>
                <p>The comparison is in layout judgment, typography, page rhythm, and whether the story stays useful instead of decorative.</p>
              </div>
            </div>
            <div className="rounded-xl border border-white/10 bg-black/20 p-5">
              <div className="grid gap-3 text-sm text-stone-300">
                <div className="flex items-center justify-between">
                  <span>Stack</span>
                  <span className="text-stone-100">Vite + React + Tailwind + Bun</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Routes</span>
                  <span className="text-stone-100">/1 to /5</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Product</span>
                  <span className="text-stone-100">AI image studio</span>
                </div>
              </div>
            </div>
            <div className="rounded-xl border border-dashed border-stone-500/40 p-5 text-sm leading-6 text-stone-400">
              The root page is intentionally direct: quick navigation first, evaluation context second. No route labels in the
              header, no hero card pretending to be the whole site.
            </div>
          </aside>
        </section>
      </div>
    </AppFrame>
  )
}

function StudioLedgerPage() {
  return (
    <AppFrame className="bg-[#181513] text-stone-100">
      <SiteHeader inverse />
      <main className="mx-auto max-w-7xl px-6 py-10 sm:px-8">
        <section className="border-b border-white/10 pb-12">
          <div className="grid gap-8 lg:grid-cols-[1.25fr_0.75fr] lg:items-end">
            <div>
              <div className="font-grotesk text-sm tracking-[0.08em] text-[#c59a7a]">A single subscription for image work that actually ships</div>
              <h1 className="mt-4 max-w-4xl font-serif-display text-5xl leading-none text-stone-100 sm:text-7xl">
                T4 Canvas keeps model choice in the workflow, not in a pricing maze.
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-7 text-stone-300">
                Pick the right engine for the frame, compare outputs in one review lane, and move from rough idea to approved
                campaign asset without leaving the same workspace.
              </p>
            </div>
            <div className="grid gap-4 rounded-xl border border-white/10 bg-[#211d1a] p-5">
              <div className="flex items-baseline justify-between border-b border-white/10 pb-4">
                <span className="font-grotesk text-sm tracking-[0.08em] text-stone-400">Flat monthly plan</span>
                <span className="font-grotesk text-4xl font-semibold text-stone-100">$48</span>
              </div>
              <div className="grid gap-3 text-sm text-stone-300">
                <div className="flex justify-between">
                  <span>All four model families</span>
                  <span className="text-stone-100">Included</span>
                </div>
                <div className="flex justify-between">
                  <span>Review rounds</span>
                  <span className="text-stone-100">Unlimited</span>
                </div>
                <div className="flex justify-between">
                  <span>Shared project boards</span>
                  <span className="text-stone-100">Team ready</span>
                </div>
              </div>
              <div className="mt-2 flex gap-3">
                <button className="rounded-lg bg-[#c59a7a] px-4 py-3 font-grotesk text-sm font-medium text-black transition-colors hover:bg-[#d8ae8f]">
                  Start a studio
                </button>
                <button className="rounded-lg border border-white/15 px-4 py-3 font-grotesk text-sm font-medium text-stone-100 transition-colors hover:bg-white/8">
                  See the queue
                </button>
              </div>
            </div>
          </div>
        </section>

        <section id="models" className="grid gap-8 py-12 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <h2 className="font-grotesk text-3xl font-semibold text-stone-100">Choose by output, not by vendor tab.</h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-stone-300">
              Every project board keeps prompts, revisions, references, and approved exports together. The model list is shown
              as a practical decision table so teams can swap engines without losing the thread.
            </p>
          </div>
          <div className="overflow-hidden rounded-xl border border-white/10">
            {modelRows.map(([name, fit, jobs]) => (
              <div key={name} className="grid gap-3 border-b border-white/10 bg-[#1c1917] px-5 py-4 last:border-b-0 md:grid-cols-[0.85fr_0.85fr_1.2fr]">
                <div className="font-grotesk text-base font-medium text-stone-100">{name}</div>
                <div className="text-sm text-stone-300">{fit}</div>
                <div className="text-sm text-stone-400">{jobs}</div>
              </div>
            ))}
          </div>
        </section>

        <section id="workflow" className="grid gap-6 border-t border-white/10 py-12 md:grid-cols-3">
          {[
            ['Build a brief', 'Collect references, set the visual bar, define aspect ratio, and keep stakeholders in the same thread.'],
            ['Compare outputs', 'Run several models against the same brief and review them with notes, votes, and revision checkpoints.'],
            ['Export final sets', 'Package approved images by campaign, format, or client handoff without leaving the board.'],
          ].map(([title, copy], index) => (
            <div key={title} className="rounded-xl border border-white/10 bg-[#1b1715] p-5">
              <div className="font-grotesk text-sm text-[#c59a7a]">0{index + 1}</div>
              <h3 className="mt-4 font-grotesk text-xl font-semibold text-stone-100">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-stone-300">{copy}</p>
            </div>
          ))}
        </section>

        <section id="pricing" className="border-t border-white/10 py-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
            <div>
              <h2 className="font-grotesk text-3xl font-semibold text-stone-100">Simple enough for procurement, flexible enough for a studio.</h2>
              <p className="mt-4 max-w-xl text-sm leading-7 text-stone-300">
                The plan is built for teams that need volume, revision history, and model choice without stacking separate tools.
              </p>
            </div>
            <div className="rounded-xl border border-white/10 bg-[#211d1a] p-6">
              <div className="grid gap-4 text-sm text-stone-300">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <span>Monthly plan</span>
                  <span className="font-grotesk text-2xl font-semibold text-stone-100">$48 / seat</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Teams</span>
                  <span className="text-stone-100">Shared boards, approvals, export packs</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Ops</span>
                  <span className="text-stone-100">Activity log and prompt history</span>
                </div>
                <div className="mt-4">
                  <button className="w-full rounded-lg bg-stone-100 px-4 py-3 font-grotesk text-sm font-medium text-black transition-colors hover:bg-stone-200">
                    Start 14-day trial
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </AppFrame>
  )
}

function OperatorDeskPage() {
  const [activeView, setActiveView] = useState<'queue' | 'review' | 'library'>('queue')

  const panelBody = useMemo(() => {
    if (activeView === 'queue') {
      return [
        ['Holiday launch pack', '6 variations pending review', 'Flux 2'],
        ['Product cleanup batch', 'Retouch pass in progress', 'gpt-image-1.5'],
        ['Character exploration', 'Awaiting art director notes', 'Seedream'],
      ]
    }

    if (activeView === 'review') {
      return [
        ['Frame A07', 'Approved for paid social', '2 comments resolved'],
        ['Frame B14', 'Needs tighter crop on the hero product', '1 blocker'],
        ['Frame C03', 'Ready to export in 4 aspect ratios', 'No blockers'],
      ]
    }

    return [
      ['Summer capsule', '42 approved assets', 'Tagged by ratio'],
      ['Q2 product scenes', '19 final exports', 'Shared with sales'],
      ['Illustration toolkit', '31 reusable pieces', 'Ready for remix'],
    ]
  }, [activeView])

  return (
    <AppFrame className="bg-[#111315] text-stone-100">
      <SiteHeader inverse />
      <main className="mx-auto max-w-7xl px-6 py-10 sm:px-8">
        <section className="grid gap-10 border-b border-white/10 pb-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <div className="font-grotesk text-sm tracking-[0.08em] text-[#91a48e]">A calmer way to run image production</div>
            <h1 className="mt-3 max-w-2xl font-grotesk text-5xl font-semibold tracking-tight text-stone-100 sm:text-6xl">
              One desk for briefs, runs, reviews, and approved exports.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-stone-300">
              T4 Canvas sells the product through workflow evidence. Teams can see the queue, compare revisions, and trace
              decisions without squinting through ornamental charts or soft-glow panels.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <button className="rounded-lg bg-[#91a48e] px-4 py-3 font-grotesk text-sm font-medium text-black transition-colors hover:bg-[#a6b8a3]">
                Book a walkthrough
              </button>
              <button className="rounded-lg border border-white/10 px-4 py-3 font-grotesk text-sm font-medium text-stone-100 transition-colors hover:bg-white/6">
                Explore the live queue
              </button>
            </div>
          </div>

          <div className="rounded-xl border border-white/10 bg-[#171a1d]">
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
              <div>
                <div className="font-grotesk text-sm font-medium text-stone-100">Campaign Workspace</div>
                <div className="text-xs text-stone-400">Brieffed, generated, reviewed, and shipped in one lane</div>
              </div>
              <div className="flex gap-2">
                {(['queue', 'review', 'library'] as const).map((view) => (
                  <button
                    key={view}
                    className={`rounded-lg px-3 py-2 text-sm transition-colors ${
                      activeView === view ? 'bg-[#91a48e] text-black' : 'border border-white/10 text-stone-300 hover:bg-white/6'
                    }`}
                    onClick={() => setActiveView(view)}
                    type="button"
                  >
                    {view}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid gap-0 lg:grid-cols-[0.62fr_0.38fr]">
              <div className="border-b border-white/10 lg:border-b-0 lg:border-r lg:border-white/10">
                {panelBody.map(([title, status, model]) => (
                  <div key={title} className="grid gap-2 border-b border-white/10 px-5 py-4 last:border-b-0 md:grid-cols-[1fr_1fr_auto] md:items-center">
                    <div className="font-grotesk text-base font-medium text-stone-100">{title}</div>
                    <div className="text-sm text-stone-300">{status}</div>
                    <div className="text-xs tracking-[0.08em] text-stone-400">{model}</div>
                  </div>
                ))}
              </div>
              <div className="space-y-4 p-5">
                <div className="rounded-xl border border-white/10 bg-black/15 p-4">
                  <div className="text-xs tracking-[0.08em] text-stone-400">Review notes</div>
                  <div className="mt-3 text-sm leading-6 text-stone-300">
                    Art directors can pin the selected frame, add precise change notes, and keep approvals visible to everyone.
                  </div>
                </div>
                <div className="rounded-xl border border-white/10 bg-black/15 p-4">
                  <div className="text-xs tracking-[0.08em] text-stone-400">Exports</div>
                  <div className="mt-3 grid gap-2 text-sm text-stone-300">
                    <div className="flex justify-between">
                      <span>Square social</span>
                      <span className="text-stone-100">Approved</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Story crop</span>
                      <span className="text-stone-100">Queued</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Web hero</span>
                      <span className="text-stone-100">Approved</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-6 py-12 md:grid-cols-3">
          {[
            ['Fewer tabs', 'Prompt, review, export, and file history stay in one place instead of being split across tools.'],
            ['Real status', 'Tables and queues do the explanatory work. The interface does not rely on fake trend lines to look complete.'],
            ['Safer handoff', 'Each project keeps approval state and ratio variants visible so teams can ship the right asset the first time.'],
          ].map(([title, copy]) => (
            <div key={title} className="rounded-xl border border-white/10 p-5">
              <h2 className="font-grotesk text-xl font-semibold text-stone-100">{title}</h2>
              <p className="mt-3 text-sm leading-6 text-stone-300">{copy}</p>
            </div>
          ))}
        </section>

        <section className="grid gap-8 border-t border-white/10 py-12 lg:grid-cols-[1fr_1fr]">
          <div>
            <h2 className="font-grotesk text-3xl font-semibold text-stone-100">Why teams switch</h2>
            <div className="mt-5 space-y-4 text-sm leading-7 text-stone-300">
              <p>They want one subscription that fits ideation, retouch, key art, and production batches.</p>
              <p>They want model choice without opening four separate products and rebuilding the same context every time.</p>
              <p>They want normal interface patterns: tables, notes, queues, and approvals that make operational sense.</p>
            </div>
          </div>
          <div className="rounded-xl border border-white/10 bg-[#171a1d] p-6">
            <div className="grid gap-4 text-sm text-stone-300">
              <div className="flex justify-between border-b border-white/10 pb-3">
                <span>Plan</span>
                <span className="font-grotesk text-xl font-semibold text-stone-100">$48 / seat</span>
              </div>
              <div className="flex justify-between">
                <span>Shared boards</span>
                <span className="text-stone-100">Yes</span>
              </div>
              <div className="flex justify-between">
                <span>Review threads</span>
                <span className="text-stone-100">Yes</span>
              </div>
              <div className="flex justify-between">
                <span>Output variants</span>
                <span className="text-stone-100">Included</span>
              </div>
              <button className="mt-4 rounded-lg bg-stone-100 px-4 py-3 font-grotesk text-sm font-medium text-black transition-colors hover:bg-stone-200">
                Start with your next campaign
              </button>
            </div>
          </div>
        </section>
      </main>
    </AppFrame>
  )
}

function PrintHousePage() {
  return (
    <AppFrame className="bg-[#f5f0e8] text-[#201a17]">
      <SiteHeader />
      <main className="mx-auto grid max-w-7xl gap-12 px-6 py-10 sm:px-8">
        <section className="grid gap-10 border-b border-[#201a17]/10 pb-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <div className="font-grotesk text-sm tracking-[0.08em] text-[#7b2e2c]">A launch page built like a print spread</div>
            <h1 className="mt-4 max-w-4xl font-serif-display text-5xl leading-none sm:text-7xl">
              Your image studio should explain itself in the first scroll.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-[#4d4037]">
              T4 Canvas keeps the promise direct: one place to brief, compare, refine, and ship image work across Nano Banana
              Pro, Flux 2, gpt-image-1.5, and Seedream.
            </p>
          </div>
          <div className="grid gap-4">
            <div className="border border-[#201a17]/10 bg-white/60 p-5">
              <div className="font-grotesk text-sm tracking-[0.08em] text-[#7b2e2c]">What changes</div>
              <div className="mt-4 grid gap-3 text-sm leading-6 text-[#4d4037]">
                <p>Teams stop shopping for the right model in separate tabs.</p>
                <p>Reviewers stop losing context between exports and revision notes.</p>
                <p>Procurement sees one plan instead of four mismatched tools.</p>
              </div>
            </div>
            <div className="grid gap-px overflow-hidden border border-[#201a17]/10 bg-[#201a17]/10 sm:grid-cols-3">
              {[
                ['Flat fee', '$48 / seat'],
                ['Model families', '4 included'],
                ['Output lanes', 'Social, web, print'],
              ].map(([label, value]) => (
                <div key={label} className="bg-[#f8f4ee] p-4">
                  <div className="text-xs tracking-[0.08em] text-[#6d625a]">{label}</div>
                  <div className="mt-2 font-grotesk text-xl font-semibold text-[#201a17]">{value}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <h2 className="font-grotesk text-3xl font-semibold">Model fit at a glance</h2>
            <p className="mt-4 text-sm leading-7 text-[#4d4037]">
              The comparison is written as a working reference table rather than a marketing icon grid, because the choice has to
              help someone produce a better frame.
            </p>
          </div>
          <div className="overflow-hidden border border-[#201a17]/10">
            {modelRows.map(([name, fit, jobs]) => (
              <div key={name} className="grid gap-3 border-b border-[#201a17]/10 bg-white/60 px-5 py-4 last:border-b-0 md:grid-cols-[0.8fr_0.85fr_1.2fr]">
                <div className="font-grotesk text-base font-medium">{name}</div>
                <div className="text-sm text-[#3f342c]">{fit}</div>
                <div className="text-sm text-[#6d625a]">{jobs}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-6 border-t border-[#201a17]/10 pt-12 md:grid-cols-[1.1fr_0.9fr]">
          <div className="grid gap-6 sm:grid-cols-2">
            {[
              ['Brief once', 'References, target tone, aspect ratios, and delivery needs are captured up front.'],
              ['Generate wide', 'Try multiple engines against the same brief without starting the project over.'],
              ['Review clearly', 'Comment on frames, mark preferred outputs, and request targeted revisions.'],
              ['Ship cleanly', 'Approved assets stay grouped by campaign and export format.'],
            ].map(([title, copy]) => (
              <div key={title} className="border border-[#201a17]/10 bg-white/60 p-5">
                <h3 className="font-grotesk text-lg font-semibold">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#4d4037]">{copy}</p>
              </div>
            ))}
          </div>
          <div className="border border-[#201a17]/10 bg-[#7b2e2c] p-6 text-stone-50">
            <div className="font-grotesk text-sm tracking-[0.08em] text-stone-200">Proof</div>
            <h2 className="mt-3 font-serif-display text-4xl leading-none">Campaign teams use one studio because one studio is easier to trust.</h2>
            <p className="mt-4 text-sm leading-7 text-stone-200">
              T4 Canvas feels less like a collection of prompts and more like a tool a real creative operation could adopt.
            </p>
            <button className="mt-8 rounded-lg bg-stone-50 px-4 py-3 font-grotesk text-sm font-medium text-[#7b2e2c] transition-colors hover:bg-white">
              Start a review board
            </button>
          </div>
        </section>
      </main>
    </AppFrame>
  )
}

function WorkshopFloorPage() {
  return (
    <AppFrame className="bg-[#17191c] text-stone-100">
      <SiteHeader inverse />
      <main className="mx-auto max-w-7xl px-6 py-10 sm:px-8">
        <section className="grid gap-10 border-b border-white/10 pb-12 lg:grid-cols-[1fr_1fr]">
          <div>
            <div className="font-grotesk text-sm tracking-[0.08em] text-[#db8a58]">Built for teams moving quickly</div>
            <h1 className="mt-4 max-w-3xl font-grotesk text-5xl font-semibold tracking-tight text-stone-100 sm:text-6xl">
              T4 Canvas keeps speed useful by keeping the workflow visible.
            </h1>
          </div>
          <div className="grid gap-4 text-sm leading-7 text-stone-300">
            <p>
              This direction leans industrial rather than luxurious. Strong dividers, restrained color, and numbered sections do the
              work so the page feels deliberate without using AI-default glow.
            </p>
            <div className="flex gap-3">
              <button className="rounded-lg bg-[#db8a58] px-4 py-3 font-grotesk text-sm font-medium text-black transition-colors hover:bg-[#ea9b69]">
                Start generating
              </button>
              <button className="rounded-lg border border-white/10 px-4 py-3 font-grotesk text-sm font-medium text-stone-100 transition-colors hover:bg-white/6">
                Compare plans
              </button>
            </div>
          </div>
        </section>

        <section className="grid gap-px py-12 md:grid-cols-4">
          {[
            ['01', 'Brief and references'],
            ['02', 'Parallel model runs'],
            ['03', 'Review and notes'],
            ['04', 'Export packs'],
          ].map(([number, label]) => (
            <div key={number} className="border border-white/10 bg-[#1d2024] p-5">
              <div className="font-grotesk text-3xl font-semibold text-[#db8a58]">{number}</div>
              <div className="mt-8 font-grotesk text-lg font-medium text-stone-100">{label}</div>
            </div>
          ))}
        </section>

        <section className="grid gap-8 border-t border-white/10 py-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className="font-grotesk text-3xl font-semibold text-stone-100">A product that shows the work</h2>
            <p className="mt-4 text-sm leading-7 text-stone-300">
              Teams do not need synthetic dashboards full of filler. They need to see what is in review, what is approved, and which
              model produced the strongest result for the brief.
            </p>
          </div>
          <div className="overflow-hidden rounded-xl border border-white/10">
            {[
              ['Revision lane', 'Every frame carries comments, selections, and export status in the same record.'],
              ['Model choice', 'Switch between speed, fidelity, and style without rebuilding project context.'],
              ['Delivery view', 'Approved outputs are grouped by campaign and aspect ratio for handoff.'],
            ].map(([title, copy]) => (
              <div key={title} className="grid gap-3 border-b border-white/10 bg-[#1d2024] px-5 py-5 last:border-b-0 md:grid-cols-[0.45fr_1fr]">
                <div className="font-grotesk text-base font-medium text-stone-100">{title}</div>
                <div className="text-sm leading-6 text-stone-300">{copy}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-6 md:grid-cols-3">
          {[
            ['All image models in one plan', 'Procurement buys one seat and the studio keeps real optionality.'],
            ['Clear revision trail', 'Notes follow the asset instead of living in a second tool.'],
            ['Exports that match channels', 'Web, paid social, print, and retail assets can be packed from the same board.'],
          ].map(([title, copy]) => (
            <div key={title} className="rounded-xl border border-white/10 bg-[#1d2024] p-5">
              <h3 className="font-grotesk text-lg font-semibold text-stone-100">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-stone-300">{copy}</p>
            </div>
          ))}
        </section>
      </main>
    </AppFrame>
  )
}

function FieldManualPage() {
  const [activePanel, setActivePanel] = useState<'specs' | 'delivery' | 'review'>('specs')

  const panelContent: Record<'specs' | 'delivery' | 'review', string[]> = {
    specs: [
      'Four model families under one subscription.',
      'Prompt history and references stored at project level.',
      'Exports grouped by campaign and aspect ratio.',
    ],
    delivery: [
      'Approved images move into export packs instantly.',
      'Ratios for web, story, print, and retail can be queued together.',
      'Teams can hand off final sets without rebuilding metadata.',
    ],
    review: [
      'Comment directly on frames and keep notes attached to the chosen image.',
      'Mark preferred outputs without leaving the board.',
      'Keep decision history visible to every collaborator.',
    ],
  }

  return (
    <AppFrame className="bg-[#eef0eb] text-[#1f2520]">
      <SiteHeader />
      <main className="mx-auto max-w-7xl px-6 py-10 sm:px-8">
        <section className="grid gap-10 border-b border-[#1f2520]/10 pb-12 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <div className="font-grotesk text-sm tracking-[0.08em] text-[#3f6c53]">Field manual edition</div>
            <h1 className="mt-4 max-w-3xl font-grotesk text-5xl font-semibold tracking-tight sm:text-6xl">
              Evaluate T4 Canvas like a working tool, not a brand moodboard.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-[#465047]">
              This concept treats the homepage like a spec sheet. It answers the questions buyers and operators usually have first:
              what is included, what gets easier, and how the workflow stays organized.
            </p>
          </div>
          <div className="grid gap-px overflow-hidden border border-[#1f2520]/10 bg-[#1f2520]/10 sm:grid-cols-2">
            {[
              ['Plan', '$48 / seat monthly'],
              ['Models', 'Nano Banana Pro, Flux 2, gpt-image-1.5, Seedream'],
              ['Use cases', 'Campaign imagery, retouching, illustration, concepting'],
              ['Teams', 'Shared boards and review threads'],
            ].map(([label, value]) => (
              <div key={label} className="bg-[#f7f8f4] p-5">
                <div className="text-xs tracking-[0.08em] text-[#5f6a61]">{label}</div>
                <div className="mt-2 text-sm leading-6 text-[#1f2520]">{value}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-8 py-12 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <h2 className="font-grotesk text-3xl font-semibold">Quick reference</h2>
            <div className="mt-5 grid gap-2">
              {(['specs', 'delivery', 'review'] as const).map((panel) => (
                <button
                  key={panel}
                  className={`rounded-lg border px-4 py-3 text-left text-sm transition-colors ${
                    activePanel === panel
                      ? 'border-[#3f6c53] bg-[#3f6c53] text-stone-50'
                      : 'border-[#1f2520]/10 bg-[#f7f8f4] text-[#1f2520] hover:bg-white'
                  }`}
                  onClick={() => setActivePanel(panel)}
                  type="button"
                >
                  {panel}
                </button>
              ))}
            </div>
          </div>
          <div className="rounded-xl border border-[#1f2520]/10 bg-[#f7f8f4] p-6">
            <div className="grid gap-4">
              {panelContent[activePanel].map((item) => (
                <div key={item} className="border-b border-[#1f2520]/10 pb-4 text-sm leading-7 text-[#465047] last:border-b-0 last:pb-0">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="grid gap-6 border-t border-[#1f2520]/10 py-12 md:grid-cols-3">
          {[
            ['For creative leads', 'Choose the right engine, compare visual direction, and keep review notes attached to the winning frame.'],
            ['For production teams', 'Move approved assets into export packs by channel without remaking the workflow in another app.'],
            ['For procurement', 'Buy one subscription that covers multiple image workflows instead of stitching together separate vendors.'],
          ].map(([title, copy]) => (
            <div key={title} className="rounded-xl border border-[#1f2520]/10 bg-[#f7f8f4] p-5">
              <h3 className="font-grotesk text-lg font-semibold">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-[#465047]">{copy}</p>
            </div>
          ))}
        </section>

        <section className="grid gap-8 border-t border-[#1f2520]/10 py-12 lg:grid-cols-[1fr_1fr]">
          <div>
            <h2 className="font-grotesk text-3xl font-semibold">Bottom line</h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-[#465047]">
              T4 Canvas is easiest to explain when it is framed like a practical studio tool. The clearer the structure, the more
              believable the product becomes.
            </p>
          </div>
          <div className="rounded-xl border border-[#1f2520]/10 bg-[#1f2520] p-6 text-stone-100">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <span className="font-grotesk text-sm tracking-[0.08em] text-stone-400">Start point</span>
              <span className="font-grotesk text-2xl font-semibold">$48 / seat</span>
            </div>
            <div className="mt-4 grid gap-3 text-sm text-stone-300">
              <div className="flex justify-between">
                <span>Models</span>
                <span className="text-stone-100">All included</span>
              </div>
              <div className="flex justify-between">
                <span>Project history</span>
                <span className="text-stone-100">Saved</span>
              </div>
              <div className="flex justify-between">
                <span>Review workflow</span>
                <span className="text-stone-100">Shared</span>
              </div>
            </div>
            <button className="mt-6 rounded-lg bg-stone-100 px-4 py-3 font-grotesk text-sm font-medium text-black transition-colors hover:bg-white">
              Start a team trial
            </button>
          </div>
        </section>
      </main>
    </AppFrame>
  )
}

export default App
