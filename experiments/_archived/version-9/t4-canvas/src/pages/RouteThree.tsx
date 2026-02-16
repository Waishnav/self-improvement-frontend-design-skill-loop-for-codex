import { useState } from 'react'
import { Link } from 'react-router-dom'

type QueueMode = 'draft' | 'refine' | 'publish'

const queueModes: { id: QueueMode; label: string; eta: string; message: string }[] = [
  {
    id: 'draft',
    label: 'Draft',
    eta: 'ETA 2m 40s',
    message: 'Fast concept burst with constrained detail settings.',
  },
  {
    id: 'refine',
    label: 'Refine',
    eta: 'ETA 6m 10s',
    message: 'Priority pass with texture cleanup and composition lock.',
  },
  {
    id: 'publish',
    label: 'Publish',
    eta: 'ETA 3m 55s',
    message: 'Export-ready pass with metadata and approval packaging.',
  },
]

const lanes = ['Nano Banana Pro', 'Flux 2', 'gpt-image-1.5', 'Seedream']

export function RouteThree() {
  const [mode, setMode] = useState<QueueMode>('draft')
  const [lane, setLane] = useState(lanes[1])

  const activeMode = queueModes.find((item) => item.id === mode) ?? queueModes[0]

  return (
    <main className="font-body-3 min-h-screen bg-[#040812] text-[#d8ebff]">
      <header className="border-b border-cyan-300/20 bg-[#02060d]/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
          <Link
            to="/"
            className="font-display-3 text-sm uppercase tracking-[0.24em] text-cyan-100 transition hover:text-cyan-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-cyan-200"
          >
            T4 Canvas
          </Link>
          <p className="text-[11px] uppercase tracking-[0.23em] text-cyan-100/70">Operator Cockpit</p>
        </div>
      </header>

      <section className="mx-auto grid max-w-6xl gap-8 px-5 py-12 sm:px-8 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <p className="text-xs uppercase tracking-[0.24em] text-cyan-100/65">Command Surface</p>
          <h1 className="font-display-3 mt-3 text-4xl font-semibold uppercase leading-[0.92] text-[#e8f5ff] sm:text-5xl">
            Command your image pipeline like mission control.
          </h1>
          <p className="mt-4 max-w-xl text-sm text-cyan-100/75 sm:text-base">
            Assign model lanes, inspect queue health, and publish campaign-ready
            outputs from one synchronized studio pass.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {queueModes.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setMode(item.id)}
                className={`rounded-full border px-4 py-2 text-xs uppercase tracking-[0.2em] transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-cyan-200 ${
                  mode === item.id
                    ? 'border-cyan-200 bg-cyan-200 text-[#04101f]'
                    : 'border-cyan-300/35 bg-[#091221] text-cyan-100 hover:border-cyan-200'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        <aside className="rounded-3xl border border-cyan-300/25 bg-[#071425] p-5">
          <p className="text-xs uppercase tracking-[0.2em] text-cyan-100/70">Queue Snapshot</p>
          <h2 className="mt-4 text-2xl font-semibold text-cyan-50">{activeMode.eta}</h2>
          <p className="mt-3 text-sm text-cyan-100/75">{activeMode.message}</p>
          <dl className="mt-6 grid grid-cols-3 gap-3 text-xs uppercase tracking-[0.14em]">
            <div className="rounded-xl border border-cyan-300/20 bg-cyan-900/15 p-3 text-cyan-100/80">
              <dt>Active jobs</dt>
              <dd className="mt-2 text-lg font-semibold text-cyan-50">19</dd>
            </div>
            <div className="rounded-xl border border-cyan-300/20 bg-cyan-900/15 p-3 text-cyan-100/80">
              <dt>Pass rate</dt>
              <dd className="mt-2 text-lg font-semibold text-cyan-50">98.1%</dd>
            </div>
            <div className="rounded-xl border border-cyan-300/20 bg-cyan-900/15 p-3 text-cyan-100/80">
              <dt>Branches</dt>
              <dd className="mt-2 text-lg font-semibold text-cyan-50">24</dd>
            </div>
          </dl>
        </aside>
      </section>

      <section className="mx-auto grid max-w-6xl gap-4 px-5 sm:grid-cols-2 sm:px-8 lg:grid-cols-4">
        {lanes.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setLane(item)}
            className={`rounded-2xl border p-4 text-left transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-cyan-200 ${
              lane === item
                ? 'border-cyan-100 bg-cyan-100/15'
                : 'border-cyan-300/20 bg-[#071425] hover:border-cyan-200/60'
            }`}
          >
            <p className="text-xs uppercase tracking-[0.2em] text-cyan-100/70">Lane</p>
            <p className="mt-2 text-sm font-semibold text-cyan-50">{item}</p>
            <p className="mt-3 text-xs text-cyan-100/70">Switch lane focus for queue diagnostics and render staging.</p>
          </button>
        ))}
      </section>

      <section className="mx-auto grid max-w-6xl gap-4 px-5 py-12 sm:px-8 lg:grid-cols-[1.3fr_0.7fr]">
        <div className="rounded-3xl border border-cyan-300/20 bg-[#061225] p-5">
          <h2 className="text-sm uppercase tracking-[0.2em] text-cyan-100/70">Queue Timeline</h2>
          <ul className="mt-4 space-y-3">
            <li className="rounded-2xl border border-cyan-300/15 bg-[#0a1a30] p-4">
              <p className="text-xs uppercase tracking-[0.18em] text-cyan-100/65">Now rendering</p>
              <p className="mt-2 text-sm text-cyan-50">{lane} generating concept set A with {mode} profile.</p>
            </li>
            <li className="rounded-2xl border border-cyan-300/15 bg-[#0a1a30] p-4">
              <p className="text-xs uppercase tracking-[0.18em] text-cyan-100/65">Inspector rail</p>
              <p className="mt-2 text-sm text-cyan-50">Mask integrity checks passed on 12 of 12 queued frames.</p>
            </li>
            <li className="rounded-2xl border border-cyan-300/15 bg-[#0a1a30] p-4">
              <p className="text-xs uppercase tracking-[0.18em] text-cyan-100/65">Next handoff</p>
              <p className="mt-2 text-sm text-cyan-50">Export package emits layered PNG + JSON prompt chain.</p>
            </li>
          </ul>
        </div>

        <aside className="rounded-3xl border border-cyan-200/35 bg-gradient-to-b from-cyan-200/20 via-blue-200/5 to-transparent p-5">
          <p className="text-xs uppercase tracking-[0.24em] text-cyan-100/80">One Fee Studio</p>
          <h3 className="mt-3 text-4xl font-semibold text-cyan-50">$39</h3>
          <p className="mt-2 text-sm text-cyan-100/80">Flat monthly access for all four models and every queue lane.</p>
          <button
            type="button"
            className="mt-6 w-full rounded-full border border-cyan-100 bg-cyan-100 px-4 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#061227] transition hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-cyan-100"
          >
            Launch Command Pass
          </button>
        </aside>
      </section>
    </main>
  )
}
