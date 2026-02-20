import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'

const workflows = [
  {
    name: 'Batch Forge',
    command: 't4 run --preset launch --models nano,flux,gpt,seedream --jobs 18',
    outcome: 'Mass-generate campaign variants with one command profile.',
  },
  {
    name: 'Edit Relay',
    command: 't4 edit --source board-41 --model gpt-image-1.5 --passes 6 --style-lock',
    outcome: 'Run structured edit loops while preserving visual consistency.',
  },
  {
    name: 'Final Polish',
    command: 't4 finish --model seedream --color-grade cinematic --export all',
    outcome: 'Finalize assets for paid, social, and storefront delivery.',
  },
] as const

const resolutionFactors = {
  '2K': 1,
  '4K': 0.72,
  '8K': 0.46,
} as const

function ConceptFour() {
  const [activeWorkflow, setActiveWorkflow] = useState<(typeof workflows)[number]['name']>(workflows[0].name)
  const [jobs, setJobs] = useState(16)
  const [resolution, setResolution] = useState<keyof typeof resolutionFactors>('4K')

  const workflow = useMemo(() => workflows.find((item) => item.name === activeWorkflow) ?? workflows[0], [activeWorkflow])
  const throughput = Math.round(jobs * 8 * resolutionFactors[resolution])

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#efede8] text-[#111111]">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-14 px-6 pb-24 pt-8 md:px-10">
        <header className="rounded-none border-4 border-black bg-[#f9f7f2] p-5">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="font-syne text-[11px] uppercase tracking-[0.32em] text-[#4b4b4b]">T4 Canvas</p>
              <h1 className="font-bricolage text-4xl uppercase tracking-tight md:text-5xl">Grid Foundry</h1>
            </div>
            <div className="flex items-center gap-4 text-xs uppercase tracking-[0.18em] text-[#2a2a2a]">
              <span>Flat Monthly Compute Layer</span>
              <Link
                to="/"
                className="border-2 border-black bg-black px-4 py-2 text-white transition hover:bg-[#2b2b2b] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Concepts
              </Link>
            </div>
          </div>
        </header>

        <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="border-4 border-black bg-[#f9f7f2] p-6">
            <p className="font-syne text-xs uppercase tracking-[0.28em] text-[#4c4c4c]">Power User Marketing Surface</p>
            <h2 className="mt-4 font-bricolage text-5xl uppercase leading-[0.92] md:text-7xl">Run every image model like infrastructure.</h2>
            <p className="mt-4 max-w-2xl text-base text-[#2f2f2f] md:text-lg">
              T4 Canvas combines Nano Banana Pro, Flux 2, gpt-image-1.5, and Seedream in one production board with predictable
              monthly billing so your team can scale output without cost spikes.
            </p>

            <div className="mt-6 border-2 border-black bg-[#ffffff] p-4">
              <p className="font-syne text-xs uppercase tracking-[0.22em] text-[#4c4c4c]">Workflow Mode</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {workflows.map((item) => (
                  <button
                    key={item.name}
                    type="button"
                    onClick={() => setActiveWorkflow(item.name)}
                    className={`border-2 px-4 py-2 text-sm font-semibold uppercase tracking-[0.08em] transition ${
                      activeWorkflow === item.name
                        ? 'border-black bg-black text-white'
                        : 'border-black bg-[#f3f0ea] text-black hover:bg-black hover:text-white'
                    }`}
                  >
                    {item.name}
                  </button>
                ))}
              </div>
              <p className="mt-3 text-sm text-[#2f2f2f]">{workflow.outcome}</p>
            </div>
          </div>

          <aside className="border-4 border-black bg-[#111111] p-6 text-[#f8f8f8]">
            <p className="font-syne text-xs uppercase tracking-[0.24em] text-[#c7c7c7]">Command Surface</p>
            <div className="mt-4 border-2 border-white bg-black p-4 font-mono text-sm leading-relaxed text-[#dbff8a]">
              {workflow.command}
            </div>
            <div className="mt-5 grid gap-3">
              <div className="border-2 border-white/55 bg-black p-3">
                <p className="text-xs uppercase tracking-[0.16em] text-[#b9b9b9]">Billing</p>
                <p className="mt-1 text-base">Single monthly subscription, no image metering.</p>
              </div>
              <div className="border-2 border-white/55 bg-black p-3">
                <p className="text-xs uppercase tracking-[0.16em] text-[#b9b9b9]">Model Pool</p>
                <p className="mt-1 text-base">Nano Banana Pro • Flux 2 • gpt-image-1.5 • Seedream</p>
              </div>
            </div>
          </aside>
        </section>

        <section className="grid gap-6 lg:grid-cols-[0.88fr_1.12fr]">
          <div className="border-4 border-black bg-[#f9f7f2] p-6">
            <p className="font-syne text-xs uppercase tracking-[0.24em] text-[#4c4c4c]">System Blueprint</p>
            <div className="mt-4 grid gap-3">
              <div className="border-2 border-black bg-white p-3">
                <p className="text-xs uppercase tracking-[0.16em] text-[#4c4c4c]">Brief Intake</p>
                <p className="mt-1">Prompt templates, reference board, and channel targets.</p>
              </div>
              <div className="border-2 border-black bg-white p-3">
                <p className="text-xs uppercase tracking-[0.16em] text-[#4c4c4c]">Parallel Generation</p>
                <p className="mt-1">Distribute jobs across all available models and style profiles.</p>
              </div>
              <div className="border-2 border-black bg-white p-3">
                <p className="text-xs uppercase tracking-[0.16em] text-[#4c4c4c]">Export Layer</p>
                <p className="mt-1">Publish-ready packs for ads, landing pages, storefronts, and socials.</p>
              </div>
            </div>
          </div>

          <div className="border-4 border-black bg-[#f9f7f2] p-6">
            <p className="font-syne text-xs uppercase tracking-[0.24em] text-[#4c4c4c]">Queue Simulator</p>
            <div className="mt-4 grid gap-4 md:grid-cols-[0.9fr_1.1fr]">
              <div>
                <label htmlFor="jobs" className="text-xs uppercase tracking-[0.16em] text-[#4c4c4c]">
                  Concurrent Jobs
                </label>
                <input
                  id="jobs"
                  type="range"
                  min={4}
                  max={40}
                  value={jobs}
                  onChange={(event) => setJobs(Number(event.target.value))}
                  className="mt-2 w-full accent-black"
                />
                <p className="mt-2 text-sm">{jobs} active prompts</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {(Object.keys(resolutionFactors) as (keyof typeof resolutionFactors)[]).map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => setResolution(item)}
                      className={`border-2 px-3 py-1 text-xs uppercase tracking-[0.12em] transition ${
                        resolution === item
                          ? 'border-black bg-black text-white'
                          : 'border-black bg-white text-black hover:bg-black hover:text-white'
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid gap-3">
                <div className="border-2 border-black bg-white p-4">
                  <p className="text-xs uppercase tracking-[0.16em] text-[#4c4c4c]">Throughput</p>
                  <p className="mt-2 font-bricolage text-4xl">{throughput}</p>
                  <p className="text-sm">images per hour at {resolution}</p>
                </div>
                <div className="border-2 border-black bg-white p-4">
                  <p className="text-xs uppercase tracking-[0.16em] text-[#4c4c4c]">Use Case</p>
                  <p className="mt-2 text-sm text-[#1f1f1f]">Scale launch-day creative output without changing budget assumptions.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-4 border-black bg-[#111111] p-8 text-white">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="font-syne text-xs uppercase tracking-[0.24em] text-[#c7c7c7]">Production Closeout</p>
              <h3 className="mt-2 font-bricolage text-4xl uppercase leading-none md:text-5xl">Keep output rising. Keep spend fixed.</h3>
            </div>
            <button
              type="button"
              className="border-2 border-white bg-white px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-black transition hover:bg-[#d9d9d9] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Book A Studio Demo
            </button>
          </div>
        </section>
      </div>
    </main>
  )
}

export default ConceptFour
