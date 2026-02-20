import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'

type TerminalPreset = {
  id: 'adburst' | 'catalog' | 'mythic'
  label: string
  command: string
  output: string[]
  stack: string
}

const presets: TerminalPreset[] = [
  {
    id: 'adburst',
    label: 'Ad Burst',
    command: 'render --campaign launch --tempo fast --variants 12',
    output: ['Loading brand profile...', 'Routing to Nano Banana Pro + Flux 2', 'Draft board ready in 00:17'],
    stack: 'Nano Banana Pro + Flux 2',
  },
  {
    id: 'catalog',
    label: 'Catalog Sweep',
    command: 'render --catalog q2 --angles studio,macro --count 48',
    output: ['Syncing product sheet...', 'Routing to gpt-image-1.5', 'Batch set complete in 00:26'],
    stack: 'gpt-image-1.5',
  },
  {
    id: 'mythic',
    label: 'Mythic Build',
    command: 'render --world astral_harbor --mood nocturne --depth max',
    output: ['Loading narrative seeds...', 'Routing to Seedream + Flux 2', 'Scene pack compiled in 00:31'],
    stack: 'Seedream + Flux 2',
  },
]

const logFeed = [
  { type: 'deploy', stamp: '21:09', line: 'Deployed campaign board for Atlas Shoes with 14 approved variants.' },
  { type: 'queue', stamp: '20:42', line: 'Queue load stabilized after shifting fantasy jobs to Seedream cluster.' },
  { type: 'billing', stamp: '20:11', line: 'Flat monthly plan reconciled. No overage events detected.' },
  { type: 'deploy', stamp: '19:36', line: 'Released commerce set with 76 resized outputs to downstream CMS.' },
  { type: 'queue', stamp: '18:58', line: 'Paused low-priority prompts to keep launch campaign at top throughput.' },
]

const modelNodes = [
  { name: 'Nano Banana Pro', note: 'Instruction depth', left: '12%', top: '20%' },
  { name: 'Flux 2', note: 'Speed backbone', left: '62%', top: '12%' },
  { name: 'gpt-image-1.5', note: 'Composition lock', left: '18%', top: '62%' },
  { name: 'Seedream', note: 'Texture engine', left: '64%', top: '66%' },
]

export function ConceptFivePage() {
  const [activePreset, setActivePreset] = useState<TerminalPreset>(presets[0])
  const [activeLogFilter, setActiveLogFilter] = useState<'all' | 'deploy' | 'queue' | 'billing'>('all')

  const visibleLogs = useMemo(() => {
    if (activeLogFilter === 'all') {
      return logFeed
    }

    return logFeed.filter((log) => log.type === activeLogFilter)
  }, [activeLogFilter])

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#020906] text-[#c5f8a2]">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_top,_rgba(93,255,112,0.16),_transparent_55%),linear-gradient(rgba(109,255,142,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(109,255,142,0.08)_1px,transparent_1px)] bg-[size:auto,34px_34px,34px_34px]" />

      <header className="relative border-b border-[#5ce576]/30 bg-[#030f0a]/90">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 py-5 md:flex-row md:items-center md:justify-between lg:px-10">
          <div>
            <p className="font-share-tech text-xs uppercase tracking-[0.3em] text-[#8fe59d]">T4 Canvas</p>
            <p className="font-vt323 text-4xl leading-none text-[#c5f8a2]">Terminal Bloom</p>
          </div>
          <nav className="flex flex-wrap items-center gap-6 font-share-tech text-xs uppercase tracking-[0.16em] text-[#94dca7]">
            <a href="#console">Console</a>
            <a href="#network">Model Network</a>
            <a href="#logs">Mission Logs</a>
            <Link to="/" className="rounded-full border border-[#68d77d]/45 px-4 py-2 text-[11px] tracking-[0.18em]">
              Concept Index
            </Link>
          </nav>
        </div>
      </header>

      <section id="console" className="relative mx-auto grid w-full max-w-6xl gap-10 px-6 pb-16 pt-14 lg:grid-cols-[1.06fr_0.94fr] lg:px-10">
        <div>
          <p className="font-share-tech text-xs uppercase tracking-[0.3em] text-[#85d192]">
            Unified image command system
          </p>
          <h1 className="mt-4 font-vt323 text-6xl leading-[0.86] text-[#d2ffb5] sm:text-7xl">
            WRITE ONE COMMAND.
            <br />
            ORCHESTRATE FOUR MODELS.
          </h1>
          <p className="mt-6 max-w-xl font-share-tech text-sm leading-relaxed text-[#9fd6aa]">
            T4 Canvas is a power interface where Nano Banana Pro, Flux 2, gpt-image-1.5, and Seedream run inside one
            command flow and one flat monthly subscription.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {presets.map((preset) => (
              <button
                key={preset.id}
                type="button"
                onClick={() => setActivePreset(preset)}
                className="rounded-full border px-4 py-2 font-share-tech text-xs uppercase tracking-[0.16em] transition"
                style={{
                  borderColor: activePreset.id === preset.id ? '#c8ffa8' : '#5fad69',
                  background: activePreset.id === preset.id ? '#c8ffa833' : 'transparent',
                  color: activePreset.id === preset.id ? '#d8ffba' : '#9ad2a3',
                }}
              >
                {preset.label}
              </button>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <button className="rounded-full border border-[#c8ffa8] bg-[#c8ffa8] px-6 py-3 font-share-tech text-xs uppercase tracking-[0.18em] text-[#03220f]">
              Initialize Session
            </button>
            <button className="rounded-full border border-[#69b574] px-6 py-3 font-share-tech text-xs uppercase tracking-[0.18em] text-[#9fd2a9]">
              Inspect Command Reference
            </button>
          </div>
        </div>

        <aside className="rounded-[1.9rem] border border-[#4d9c5e]/45 bg-[#04160d]/90 p-6 shadow-[0_20px_45px_rgba(0,0,0,0.55)]">
          <p className="font-share-tech text-xs uppercase tracking-[0.2em] text-[#8bd498]">Current preset</p>
          <p className="mt-2 font-vt323 text-4xl text-[#d4ffb8]">{activePreset.label}</p>

          <div className="mt-5 rounded-2xl border border-[#4f9f5f]/40 bg-[#021109] p-4">
            <p className="font-share-tech text-[11px] uppercase tracking-[0.15em] text-[#8fd59c]">Command</p>
            <p className="mt-2 font-share-tech text-xs text-[#b4ecba]">$ {activePreset.command}</p>
          </div>

          <div className="mt-5 space-y-3 rounded-2xl border border-[#4f9f5f]/40 bg-[#021109] p-4">
            {activePreset.output.map((line) => (
              <p key={line} className="font-share-tech text-xs text-[#a9dfb0]">
                &gt; {line}
              </p>
            ))}
          </div>

          <p className="mt-5 rounded-xl border border-[#4f9f5f]/40 bg-[#04160d] p-3 font-share-tech text-xs uppercase tracking-[0.13em] text-[#9edaab]">
            Active stack: {activePreset.stack}
          </p>
        </aside>
      </section>

      <section id="network" className="relative border-y border-[#4f9f5f]/40 bg-[#030f09]/95 py-16">
        <div className="mx-auto w-full max-w-6xl px-6 lg:px-10">
          <h2 className="font-vt323 text-6xl leading-none text-[#d3ffb7]">MODEL NETWORK MAP</h2>
          <p className="mt-3 max-w-2xl font-share-tech text-sm leading-relaxed text-[#9ad1a6]">
            The routing graph keeps every model available while preserving session memory, prompt lineage, and output
            provenance.
          </p>

          <div className="relative mt-8 h-[380px] rounded-3xl border border-[#4f9f5f]/45 bg-[#04140c]">
            <div className="absolute left-1/2 top-1/2 h-36 w-36 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#78c786]/45 bg-[#0a2616]/70" />
            <p className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-share-tech text-[11px] uppercase tracking-[0.16em] text-[#b9f4c0]">
              T4 Router
            </p>
            {modelNodes.map((node) => (
              <article
                key={node.name}
                className="absolute w-40 -translate-x-1/2 rounded-2xl border border-[#5cab6a]/45 bg-[#072012]/85 p-3"
                style={{ left: node.left, top: node.top }}
              >
                <p className="font-share-tech text-[11px] uppercase tracking-[0.14em] text-[#b4eebb]">{node.name}</p>
                <p className="mt-1 font-share-tech text-[11px] text-[#8ec898]">{node.note}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="logs" className="relative mx-auto w-full max-w-6xl px-6 py-16 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className="font-vt323 text-6xl leading-none text-[#d3ffb7]">MISSION LOGS</h2>
            <p className="mt-3 font-share-tech text-sm leading-relaxed text-[#95cb9f]">
              Filter log types and inspect what happened across deployment, queueing, and billing in real time.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {(['all', 'deploy', 'queue', 'billing'] as const).map((type) => (
                <button
                  key={type}
                  type="button"
                  onClick={() => setActiveLogFilter(type)}
                  className="rounded-full border px-4 py-2 font-share-tech text-xs uppercase tracking-[0.15em] transition"
                  style={{
                    borderColor: activeLogFilter === type ? '#c8ffa8' : '#5aa968',
                    background: activeLogFilter === type ? '#c8ffa833' : 'transparent',
                    color: activeLogFilter === type ? '#d8ffba' : '#99d2a3',
                  }}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            {visibleLogs.map((log) => (
              <article key={`${log.stamp}-${log.line}`} className="rounded-2xl border border-[#549f63]/40 bg-[#04160d]/85 p-4">
                <div className="flex items-center justify-between gap-3 font-share-tech text-[11px] uppercase tracking-[0.14em] text-[#86c391]">
                  <span>{log.type}</span>
                  <span>{log.stamp}</span>
                </div>
                <p className="mt-3 font-share-tech text-xs leading-relaxed text-[#a6ddaf]">{log.line}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative border-t border-[#4f9f5f]/40 bg-[#010804] py-16">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 lg:flex-row lg:items-end lg:justify-between lg:px-10">
          <div className="max-w-2xl">
            <p className="font-share-tech text-xs uppercase tracking-[0.28em] text-[#80c98d]">Flat monthly signal</p>
            <h2 className="mt-3 font-vt323 text-6xl leading-none text-[#d2ffb5]">ONE PLAN / ALL ENGINES / $79</h2>
            <p className="mt-4 font-share-tech text-sm leading-relaxed text-[#8fc999]">
              Scale image production without watching per-model billing dashboards all month.
            </p>
          </div>
          <button className="rounded-full border border-[#c8ffa8] bg-[#c8ffa8] px-7 py-3 font-share-tech text-xs uppercase tracking-[0.18em] text-[#03220f]">
            Engage T4 Canvas
          </button>
        </div>
      </section>
    </main>
  )
}
