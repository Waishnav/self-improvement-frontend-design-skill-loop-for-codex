import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'

type Model = {
  id: string
  name: string
  source: string
  speed: number
  fidelity: number
  control: number
  style: string
  prompt: string
}

const models: Model[] = [
  {
    id: 'nano',
    name: 'Nano Banana Pro',
    source: 'Gemini',
    speed: 95,
    fidelity: 82,
    control: 78,
    style: 'Rapid concepting and variation bursts.',
    prompt: 'Midnight sneaker ad, reflective puddles, cinematic rim light, 35mm grain.',
  },
  {
    id: 'flux',
    name: 'Flux 2',
    source: 'Flux',
    speed: 84,
    fidelity: 89,
    control: 86,
    style: 'Balanced realism with crisp micro-detailing.',
    prompt: 'Architectural render, brutalist library, soft morning fog, polished concrete.',
  },
  {
    id: 'gpt-image',
    name: 'gpt-image-1.5',
    source: 'OpenAI',
    speed: 82,
    fidelity: 92,
    control: 93,
    style: 'Instruction-following precision for edits and composites.',
    prompt: 'Replace sky with copper dusk, preserve shadows, upscale textures only on foreground.',
  },
  {
    id: 'seedream',
    name: 'Seedream',
    source: 'ByteDance',
    speed: 88,
    fidelity: 87,
    control: 85,
    style: 'Stylized art direction with smooth lighting transitions.',
    prompt: 'Dreamcore portrait, floating ribbons, chromatic bloom, hand-painted finish.',
  },
]

const workflows = [
  {
    id: 'generate',
    title: 'Generate',
    summary: 'Spin fresh concepts in seconds with multi-model queues.',
    steps: ['Prompt + references', 'Run all models in parallel', 'Promote the strongest drafts'],
  },
  {
    id: 'edit',
    title: 'Edit',
    summary: 'Layer direct edits without leaving your timeline.',
    steps: ['Mask regions', 'Apply instruction edits', 'Branch new style variants'],
  },
  {
    id: 'remix',
    title: 'Remix',
    summary: 'Blend two generations into one controlled composite.',
    steps: ['Select source frames', 'Tune blend intent', 'Lock brand consistency preset'],
  },
]

const queueProfiles = [
  {
    id: 'burst',
    title: 'Burst Queue',
    note: 'Max throughput. Great for ideation sprints.',
    avgTime: '6.8s',
    consistency: 74,
    costImpact: 'Flat fee protected',
  },
  {
    id: 'balanced',
    title: 'Balanced Queue',
    note: 'Recommended. Steady speed and cleaner prompts.',
    avgTime: '9.2s',
    consistency: 88,
    costImpact: 'Flat fee protected',
  },
  {
    id: 'quality',
    title: 'Quality Queue',
    note: 'Longer renders with maximal fidelity tuning.',
    avgTime: '14.4s',
    consistency: 94,
    costImpact: 'Flat fee protected',
  },
]

function DesignOne() {
  const [modelId, setModelId] = useState(models[2].id)
  const [workflowId, setWorkflowId] = useState(workflows[0].id)
  const [billing, setBilling] = useState<'monthly' | 'yearly'>('yearly')
  const [queueId, setQueueId] = useState(queueProfiles[1].id)

  const activeModel = useMemo(() => models.find((model) => model.id === modelId) ?? models[0], [modelId])
  const activeWorkflow = useMemo(
    () => workflows.find((workflow) => workflow.id === workflowId) ?? workflows[0],
    [workflowId],
  )
  const activeQueue = useMemo(
    () => queueProfiles.find((profile) => profile.id === queueId) ?? queueProfiles[1],
    [queueId],
  )

  return (
    <main className="relative min-h-screen overflow-x-clip bg-[#030712] px-5 py-8 text-slate-100 sm:px-8 lg:px-14">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.18),transparent_40%),radial-gradient(circle_at_82%_18%,rgba(167,139,250,0.2),transparent_42%),linear-gradient(180deg,rgba(15,23,42,0.95),rgba(2,6,23,1))]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.08)_1px,transparent_1px)] bg-[size:60px_60px] opacity-20" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col gap-8">
        <header className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-cyan-200/20 bg-slate-950/70 px-5 py-4 backdrop-blur-xl">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.26em] text-cyan-200/80">T4 Canvas</p>
            <h1 className="font-display text-3xl text-white">Neon Command Deck</h1>
          </div>
          <div className="flex items-center gap-3">
            <span className="rounded-full border border-cyan-300/40 bg-cyan-400/10 px-3 py-1 font-mono text-xs uppercase tracking-[0.16em] text-cyan-100">
              Flat Monthly Fee
            </span>
            <Link
              to="/"
              className="rounded-full border border-slate-400/40 px-4 py-2 text-xs uppercase tracking-[0.16em] text-slate-200 transition hover:border-cyan-200 hover:text-cyan-100"
            >
              View All Concepts
            </Link>
          </div>
        </header>

        <section className="section-shell surface-grain border border-cyan-200/20 bg-slate-950/60 p-6 backdrop-blur-xl lg:p-8">
          <div className="relative z-10 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="space-y-6">
              <div className="space-y-3">
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-cyan-200/80">Hero Interaction</p>
                <h2 className="font-display text-4xl leading-tight text-white lg:text-5xl">
                  Launch every top image model from one velocity-first cockpit.
                </h2>
                <p className="max-w-xl text-sm text-slate-300">
                  Route each prompt through Nano Banana Pro, Flux 2, gpt-image-1.5, and Seedream at once, then lock your final pick with versioned edits.
                </p>
              </div>

              <div className="no-scrollbar flex gap-2 overflow-x-auto pb-1">
                {models.map((model) => (
                  <button
                    key={model.id}
                    type="button"
                    onClick={() => setModelId(model.id)}
                    className={`rounded-full border px-4 py-2 text-sm transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200 ${
                      model.id === modelId
                        ? 'border-cyan-200 bg-cyan-300/20 text-cyan-50'
                        : 'border-slate-500/50 bg-slate-900/70 text-slate-300 hover:border-cyan-200/60 hover:text-cyan-100'
                    }`}
                  >
                    {model.name}
                  </button>
                ))}
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                {[
                  { label: 'Speed', value: activeModel.speed },
                  { label: 'Fidelity', value: activeModel.fidelity },
                  { label: 'Control', value: activeModel.control },
                ].map((metric) => (
                  <div key={metric.label} className="rounded-xl border border-cyan-100/20 bg-cyan-950/30 p-3">
                    <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-cyan-100/80">{metric.label}</p>
                    <p className="mt-2 text-2xl font-semibold text-cyan-100">{metric.value}</p>
                    <div className="mt-2 h-1.5 rounded-full bg-cyan-100/20">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-cyan-200 to-blue-400"
                        style={{ width: `${metric.value}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <aside className="rounded-2xl border border-slate-400/20 bg-slate-900/70 p-4">
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-slate-300">Active Model</p>
              <h3 className="mt-2 text-2xl font-semibold text-white">{activeModel.name}</h3>
              <p className="mt-1 text-sm text-cyan-200">Source: {activeModel.source}</p>
              <p className="mt-4 text-sm text-slate-300">{activeModel.style}</p>
              <div className="mt-5 rounded-xl border border-cyan-200/20 bg-slate-950/80 p-3">
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-cyan-100/80">Prompt Snapshot</p>
                <p className="mt-2 text-sm text-slate-200">{activeModel.prompt}</p>
              </div>
            </aside>
          </div>
        </section>

        <section className="grid gap-5 lg:grid-cols-[1fr_1fr]">
          <div className="section-shell border border-slate-400/30 bg-slate-900/75 p-5">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-cyan-200/85">Workflow Mode</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {workflows.map((workflow) => (
                <button
                  key={workflow.id}
                  type="button"
                  onClick={() => setWorkflowId(workflow.id)}
                  className={`rounded-full px-4 py-2 text-sm transition ${
                    workflow.id === workflowId
                      ? 'bg-cyan-300 text-slate-950'
                      : 'border border-slate-500/50 bg-transparent text-slate-300 hover:border-cyan-300/70 hover:text-cyan-100'
                  }`}
                >
                  {workflow.title}
                </button>
              ))}
            </div>
            <p className="mt-4 text-sm text-slate-200">{activeWorkflow.summary}</p>
            <ul className="mt-4 space-y-2 text-sm text-slate-300">
              {activeWorkflow.steps.map((step) => (
                <li key={step} className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-200" />
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="section-shell border border-slate-400/30 bg-slate-900/75 p-5">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-cyan-200/85">Queue Profile</p>
            <div className="mt-4 grid gap-2 sm:grid-cols-3">
              {queueProfiles.map((profile) => (
                <button
                  key={profile.id}
                  type="button"
                  onClick={() => setQueueId(profile.id)}
                  className={`rounded-xl border px-3 py-3 text-left transition ${
                    profile.id === queueId
                      ? 'border-cyan-200 bg-cyan-300/20 text-cyan-50'
                      : 'border-slate-500/50 bg-slate-950/70 text-slate-300 hover:border-cyan-200/60'
                  }`}
                >
                  <p className="text-sm font-semibold">{profile.title}</p>
                  <p className="mt-1 text-xs opacity-85">{profile.avgTime}</p>
                </button>
              ))}
            </div>
            <p className="mt-4 text-sm text-slate-300">{activeQueue.note}</p>
            <div className="mt-4 rounded-xl border border-slate-500/40 bg-slate-950/70 p-3">
              <div className="flex items-center justify-between text-sm text-slate-200">
                <span>Consistency score</span>
                <span>{activeQueue.consistency}</span>
              </div>
              <div className="mt-2 h-2 rounded-full bg-slate-700">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-cyan-300 to-blue-500"
                  style={{ width: `${activeQueue.consistency}%` }}
                />
              </div>
              <p className="mt-3 text-xs text-slate-400">{activeQueue.costImpact}</p>
            </div>
          </div>
        </section>

        <section className="section-shell border border-cyan-200/25 bg-gradient-to-r from-cyan-500/20 via-blue-500/10 to-indigo-500/20 p-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-cyan-100">Single Plan Pricing</p>
              <h3 className="font-display text-3xl text-white">Flat fee, every model unlocked.</h3>
              <p className="mt-2 max-w-2xl text-sm text-cyan-50/90">
                Teams stay in one workspace, compare results side-by-side, and scale outputs without worrying about model-by-model metering.
              </p>
            </div>

            <div className="rounded-2xl border border-cyan-100/30 bg-slate-950/70 p-4">
              <div className="mb-3 flex rounded-full border border-cyan-100/30 p-1 text-xs uppercase tracking-[0.14em]">
                <button
                  type="button"
                  onClick={() => setBilling('monthly')}
                  className={`rounded-full px-3 py-1 transition ${billing === 'monthly' ? 'bg-cyan-300 text-slate-950' : 'text-slate-300 hover:text-cyan-100'}`}
                >
                  Monthly
                </button>
                <button
                  type="button"
                  onClick={() => setBilling('yearly')}
                  className={`rounded-full px-3 py-1 transition ${billing === 'yearly' ? 'bg-cyan-300 text-slate-950' : 'text-slate-300 hover:text-cyan-100'}`}
                >
                  Yearly
                </button>
              </div>
              <p className="text-center text-3xl font-semibold text-white">{billing === 'yearly' ? '$79' : '$99'}</p>
              <p className="text-center text-xs uppercase tracking-[0.15em] text-cyan-100/90">per user / month</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}

export default DesignOne
