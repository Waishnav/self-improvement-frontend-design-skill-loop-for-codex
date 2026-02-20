import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'

type ModelCard = {
  id: 'banana' | 'flux' | 'gpt' | 'seedream'
  name: string
  focus: string
  latency: string
  quality: string
  accent: string
}

const modelCards: ModelCard[] = [
  {
    id: 'banana',
    name: 'Nano Banana Pro',
    focus: 'Complex instruction fidelity and editorial structure locking.',
    latency: '17s avg',
    quality: '9.2/10',
    accent: '#45d2ff',
  },
  {
    id: 'flux',
    name: 'Flux 2',
    focus: 'Rapid exploration across broad style spaces at scale.',
    latency: '11s avg',
    quality: '8.7/10',
    accent: '#78ff9f',
  },
  {
    id: 'gpt',
    name: 'gpt-image-1.5',
    focus: 'Balanced composition and reliable prompt parsing in production.',
    latency: '20s avg',
    quality: '9.4/10',
    accent: '#ffbe5c',
  },
  {
    id: 'seedream',
    name: 'Seedream',
    focus: 'Texture-heavy fantasy generation for stylized narrative sets.',
    latency: '26s avg',
    quality: '9.0/10',
    accent: '#ffa3d7',
  },
]

const queueItems = [
  { id: 'Q-401', status: 'running', owner: 'Aiko', model: 'Flux 2', objective: 'Sports launch visuals' },
  { id: 'Q-398', status: 'review', owner: 'Nina', model: 'Nano Banana Pro', objective: 'Campaign direction board' },
  { id: 'Q-395', status: 'running', owner: 'Miles', model: 'gpt-image-1.5', objective: 'SKU hero image batch' },
  { id: 'Q-391', status: 'queued', owner: 'Rico', model: 'Seedream', objective: 'Fantasy concept expansion' },
  { id: 'Q-387', status: 'review', owner: 'Lana', model: 'Flux 2', objective: 'Colorway exploration' },
]

const presets = [
  {
    title: 'Commerce Sprint',
    detail: 'Auto-crops, white-label backgrounds, and style-safe consistency checks for stores.',
  },
  {
    title: 'Campaign Burst',
    detail: 'Delivers ad-ready hero frames with fallback compositions for paid social formats.',
  },
  {
    title: 'Narrative Block',
    detail: 'Builds shotlist variants from one story seed while preserving mood continuity.',
  },
]

export function ConceptTwoPage() {
  const [activeModel, setActiveModel] = useState<ModelCard>(modelCards[0])
  const [queueFilter, setQueueFilter] = useState<'all' | 'running' | 'review' | 'queued'>('all')

  const filteredQueue = useMemo(() => {
    if (queueFilter === 'all') {
      return queueItems
    }

    return queueItems.filter((item) => item.status === queueFilter)
  }, [queueFilter])

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#020817] text-[#dce8ff]">
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute -left-20 top-10 h-[460px] w-[460px] rounded-full bg-[#0f4bc9]/30 blur-3xl" />
        <div className="absolute right-0 top-1/3 h-[420px] w-[420px] rounded-full bg-[#00b8f3]/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-[360px] w-[360px] rounded-full bg-[#0d8c76]/20 blur-3xl" />
      </div>

      <header className="relative border-b border-[#4a6aa7]/20 bg-[#030d22]/80 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-5 lg:px-10">
          <div>
            <p className="font-share-tech text-xs uppercase tracking-[0.3em] text-[#7d96c7]">T4 Canvas</p>
            <p className="font-archivo text-xl font-semibold uppercase tracking-[0.08em]">Command Surface</p>
          </div>
          <nav className="hidden items-center gap-8 font-archivo text-xs uppercase tracking-[0.2em] text-[#9eb5e0] md:flex">
            <a href="#orchestration">Orchestration</a>
            <a href="#queue">Live Queue</a>
            <a href="#plan">Plan</a>
          </nav>
          <Link
            to="/"
            className="rounded-full border border-[#86a5dd]/35 px-4 py-2 font-archivo text-xs uppercase tracking-[0.18em] text-[#d6e5ff]"
          >
            Concept Index
          </Link>
        </div>
      </header>

      <section id="orchestration" className="relative mx-auto grid w-full max-w-6xl gap-10 px-6 pb-16 pt-14 lg:grid-cols-[1.05fr_0.95fr] lg:px-10">
        <div>
          <p className="font-share-tech text-xs uppercase tracking-[0.3em] text-[#89a8da]">
            Unified Model Operations
          </p>
          <h1 className="mt-4 font-archivo text-5xl font-semibold uppercase leading-[0.9] sm:text-6xl">
            Run every image model like a single production pipeline.
          </h1>
          <p className="mt-6 max-w-xl text-sm leading-relaxed text-[#a3b6d9] sm:text-base">
            T4 Canvas is built for teams that need speed, visibility, and clean handoffs. Route tasks across Nano Banana
            Pro, Flux 2, gpt-image-1.5, and Seedream without context loss.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {modelCards.map((model) => (
              <button
                key={model.id}
                type="button"
                onClick={() => setActiveModel(model)}
                className="rounded-xl border px-4 py-3 text-left transition"
                style={{
                  borderColor: activeModel.id === model.id ? model.accent : '#5f78ab5a',
                  background: activeModel.id === model.id ? `${model.accent}22` : '#071128',
                }}
              >
                <p className="font-archivo text-xs uppercase tracking-[0.16em] text-[#e0ebff]">{model.name}</p>
                <p className="mt-1 font-share-tech text-[11px] uppercase tracking-[0.13em] text-[#8ca4cc]">
                  {model.latency}
                </p>
              </button>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <button className="rounded-full bg-[#ebf3ff] px-5 py-3 font-archivo text-xs uppercase tracking-[0.2em] text-[#05112d]">
              Launch Workspace
            </button>
            <button className="rounded-full border border-[#88a7de]/35 px-5 py-3 font-archivo text-xs uppercase tracking-[0.2em] text-[#d7e5ff]">
              Review Performance Sheet
            </button>
          </div>
        </div>

        <aside className="rounded-[1.9rem] border border-[#6d88bd]/25 bg-[#040f28]/90 p-6 shadow-[0_25px_45px_rgba(4,20,60,0.5)]">
          <p className="font-share-tech text-xs uppercase tracking-[0.25em] text-[#8ea8d8]">Selected Engine</p>
          <h2 className="mt-3 font-archivo text-3xl font-semibold uppercase">{activeModel.name}</h2>
          <p className="mt-4 text-sm leading-relaxed text-[#a7bbdf]">{activeModel.focus}</p>

          <div className="mt-6 grid grid-cols-2 gap-3">
            <div className="rounded-2xl border border-[#5976b0]/30 bg-[#091634] p-4">
              <p className="font-share-tech text-[11px] uppercase tracking-[0.15em] text-[#8ea7d5]">Latency</p>
              <p className="mt-2 font-archivo text-2xl font-semibold">{activeModel.latency}</p>
            </div>
            <div className="rounded-2xl border border-[#5976b0]/30 bg-[#091634] p-4">
              <p className="font-share-tech text-[11px] uppercase tracking-[0.15em] text-[#8ea7d5]">Quality</p>
              <p className="mt-2 font-archivo text-2xl font-semibold">{activeModel.quality}</p>
            </div>
          </div>

          <div className="mt-6 rounded-2xl border border-[#5976b0]/30 bg-[#07142f] p-4">
            <p className="font-share-tech text-[11px] uppercase tracking-[0.15em] text-[#8ea7d5]">Signal Integrity</p>
            <div className="mt-3 h-3 overflow-hidden rounded-full bg-[#1a2e57]">
              <div className="h-full rounded-full" style={{ width: '82%', backgroundColor: activeModel.accent }} />
            </div>
            <p className="mt-3 text-xs uppercase tracking-[0.12em] text-[#99afd8]">82% prompt-to-output consistency this week</p>
          </div>
        </aside>
      </section>

      <section id="queue" className="relative border-y border-[#5a78b4]/20 bg-[#040f27]/90 py-16">
        <div className="mx-auto w-full max-w-6xl px-6 lg:px-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h2 className="font-archivo text-4xl font-semibold uppercase">Live queue visibility</h2>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#a7bbdd]">
                Filter current generation runs by status. Every operator sees the same queue context and can jump into
                edits without losing history.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {(['all', 'running', 'review', 'queued'] as const).map((status) => (
                <button
                  key={status}
                  type="button"
                  onClick={() => setQueueFilter(status)}
                  className="rounded-full border px-4 py-2 font-share-tech text-xs uppercase tracking-[0.16em] transition"
                  style={{
                    borderColor: queueFilter === status ? '#dce8ff' : '#5978b470',
                    background: queueFilter === status ? '#dce8ff' : 'transparent',
                    color: queueFilter === status ? '#04112c' : '#a9bde0',
                  }}
                >
                  {status}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-8 overflow-hidden rounded-3xl border border-[#5e7db8]/25 bg-[#06132f]">
            <table className="w-full min-w-[620px] text-left">
              <thead className="border-b border-[#5071af]/25 text-[11px] uppercase tracking-[0.16em] text-[#88a5d7]">
                <tr>
                  <th className="px-5 py-4 font-share-tech font-normal">Queue ID</th>
                  <th className="px-5 py-4 font-share-tech font-normal">Owner</th>
                  <th className="px-5 py-4 font-share-tech font-normal">Model</th>
                  <th className="px-5 py-4 font-share-tech font-normal">Objective</th>
                  <th className="px-5 py-4 font-share-tech font-normal">Status</th>
                </tr>
              </thead>
              <tbody>
                {filteredQueue.map((job) => (
                  <tr key={job.id} className="border-b border-[#5071af]/20 last:border-none">
                    <td className="px-5 py-4 font-share-tech text-xs uppercase tracking-[0.12em] text-[#cde0ff]">
                      {job.id}
                    </td>
                    <td className="px-5 py-4 text-sm text-[#bdd0f0]">{job.owner}</td>
                    <td className="px-5 py-4 text-sm text-[#bdd0f0]">{job.model}</td>
                    <td className="px-5 py-4 text-sm text-[#bdd0f0]">{job.objective}</td>
                    <td className="px-5 py-4">
                      <span className="rounded-full border border-[#7f9ed4]/40 px-3 py-1 font-share-tech text-[11px] uppercase tracking-[0.13em] text-[#d6e5ff]">
                        {job.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="relative mx-auto grid w-full max-w-6xl gap-6 px-6 py-16 lg:grid-cols-3 lg:px-10">
        {presets.map((preset) => (
          <article key={preset.title} className="rounded-3xl border border-[#5f7db8]/25 bg-[#06122d] p-6">
            <p className="font-share-tech text-[11px] uppercase tracking-[0.18em] text-[#8ca8d8]">Preset</p>
            <h3 className="mt-3 font-archivo text-2xl font-semibold uppercase">{preset.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-[#adc1e3]">{preset.detail}</p>
          </article>
        ))}
      </section>

      <section id="plan" className="relative border-t border-[#5a78b4]/20 bg-[#010711] py-16">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 lg:flex-row lg:items-end lg:justify-between lg:px-10">
          <div className="max-w-2xl">
            <p className="font-share-tech text-xs uppercase tracking-[0.3em] text-[#7899cd]">Flat fee infrastructure</p>
            <h2 className="mt-4 font-archivo text-5xl font-semibold uppercase leading-[0.9]">
              One operating bill. No model-by-model sprawl.
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-[#a8bddf]">
              Consolidate generation spend into a single predictable monthly plan while keeping operator-level model choice.
            </p>
          </div>
          <div className="rounded-3xl border border-[#6a89c3]/30 bg-[#071634] p-6">
            <p className="font-share-tech text-xs uppercase tracking-[0.2em] text-[#9ab3de]">Control Plan</p>
            <p className="mt-2 font-archivo text-5xl font-semibold">$79</p>
            <p className="text-sm text-[#a4bbde]">per operator / monthly</p>
            <button className="mt-6 w-full rounded-full bg-[#dce8ff] px-5 py-3 font-archivo text-xs uppercase tracking-[0.18em] text-[#05112d]">
              Activate Studio Access
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}
