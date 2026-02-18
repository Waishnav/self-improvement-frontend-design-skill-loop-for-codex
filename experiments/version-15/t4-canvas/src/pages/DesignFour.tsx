import { Link } from 'react-router-dom'

const rooms = [
  {
    name: 'Direction Room',
    model: 'Nano Banana Pro',
    detail: 'Shape early visual language and lock art direction cues for every downstream draft.',
  },
  {
    name: 'Realism Room',
    model: 'Flux 2',
    detail: 'Refine product fidelity, lighting nuance, and photographic credibility at campaign quality.',
  },
  {
    name: 'Message Room',
    model: 'gpt-image-1.5',
    detail: 'Ensure the scene tells the right story with precise prompt interpretation and composition logic.',
  },
  {
    name: 'Expression Room',
    model: 'Seedream',
    detail: 'Introduce distinctive color, style, and tone when your campaign demands a signature look.',
  },
]

const process = [
  {
    title: 'Compose',
    body: 'Define intent, references, and constraints in one compact brief.',
  },
  {
    title: 'Generate',
    body: 'Launch synchronized output across all selected models in a shared canvas.',
  },
  {
    title: 'Refine',
    body: 'Apply edits, compare variants, and finalize production assets without context loss.',
  },
]

export default function DesignFour() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f3eee5] text-[#171311]">
      <section className="mx-auto max-w-7xl px-6 pb-14 pt-8 md:pt-12">
        <header className="flex items-center justify-between rounded-full border border-[#2f2722]/20 bg-[#f8f3ea]/80 px-5 py-3 backdrop-blur">
          <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-[#4f433b]">T4 Canvas Atelier</p>
          <Link
            to="/"
            className="rounded-full border border-[#2f2722]/30 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#2f2722] transition hover:bg-[#2f2722] hover:text-[#f8f3ea]"
          >
            View Concepts
          </Link>
        </header>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.34em] text-[#5f534a]">Premium Image Operations</p>
            <h1 className="mt-5 max-w-3xl font-atelier-display text-6xl leading-[0.9] text-[#14100e] md:text-8xl">
              A Quiet Interface.
              <br />
              A Powerful Studio.
            </h1>
            <p className="mt-6 max-w-xl font-atelier-body text-lg text-[#3a312b]">
              T4 Canvas unifies Nano Banana Pro, Flux 2, gpt-image-1.5, and Seedream into a single calm workspace
              designed for high-output creative teams.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <button className="rounded-full bg-[#1d1714] px-6 py-3 text-sm font-semibold uppercase tracking-[0.15em] text-[#f7f0e7] transition hover:bg-black">
                Join Membership
              </button>
              <button className="rounded-full border border-[#2f2722]/35 px-6 py-3 text-sm font-semibold uppercase tracking-[0.15em] text-[#2a221e] transition hover:bg-[#e9dfd1]">
                Book Walkthrough
              </button>
            </div>
          </div>

          <div className="grid gap-4 rounded-[2rem] border border-[#2f2722]/20 bg-[#ede4d7] p-5">
            <div className="rounded-2xl border border-[#2f2722]/15 bg-[#f8f3ea] p-4">
              <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-[#5b4f47]">Monthly Plan</p>
              <p className="mt-2 font-atelier-display text-6xl leading-none">$39</p>
            </div>
            <div className="rounded-2xl border border-[#2f2722]/15 bg-[#f8f3ea] p-4">
              <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-[#5b4f47]">Average Delivery Gain</p>
              <p className="mt-2 font-atelier-display text-5xl leading-none">+2.7x</p>
            </div>
            <div className="rounded-2xl border border-[#2f2722]/15 bg-[#1f1916] p-4 text-[#f8f3ea]">
              <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-[#d4bfa9]">Studio Promise</p>
              <p className="mt-2 font-atelier-body text-sm">No model silos, no billing fragmentation, no output dead ends.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="mb-8 flex items-end justify-between gap-4">
          <h2 className="font-atelier-display text-5xl leading-none text-[#171311] md:text-6xl">Curated Model Rooms</h2>
          <p className="max-w-md font-atelier-body text-[#433832]">
            Assign the right model to the right stage and keep every artifact in one continuity layer.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {rooms.map((room) => (
            <article key={room.name} className="rounded-3xl border border-[#2f2722]/20 bg-[#f8f3ea] p-6">
              <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-[#5f534a]">{room.model}</p>
              <h3 className="mt-3 font-atelier-display text-4xl leading-[0.9] text-[#1a1512]">{room.name}</h3>
              <p className="mt-3 font-atelier-body text-sm text-[#4c3f38]">{room.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="rounded-[2rem] border border-[#2f2722]/20 bg-[#1d1714] p-7 text-[#f6ede3] md:p-10">
          <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-[#d5bca2]">Studio Sequence</p>
          <div className="mt-7 grid gap-4 md:grid-cols-3">
            {process.map((step) => (
              <article key={step.title} className="rounded-2xl border border-[#d8c3b0]/20 bg-[#2a211d] p-5">
                <h3 className="font-atelier-display text-4xl leading-none">{step.title}</h3>
                <p className="mt-3 font-atelier-body text-sm text-[#e9ddcf]">{step.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-6 py-12 lg:grid-cols-[1fr_1fr]">
        <div className="rounded-[2rem] border border-[#2f2722]/20 bg-[#f8f3ea] p-7">
          <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-[#5f534a]">Operational Detail</p>
          <h3 className="mt-4 font-atelier-display text-5xl leading-[0.92] text-[#181310]">Edit Once, Propagate Everywhere.</h3>
          <p className="mt-4 font-atelier-body text-[#443a34]">
            Apply masked edits, typography corrections, or style changes and synchronize across all chosen output
            branches automatically.
          </p>
        </div>

        <div className="rounded-[2rem] border border-[#2f2722]/20 bg-[#e5d8c6] p-7">
          <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-[#5f534a]">Team Value</p>
          <h3 className="mt-4 font-atelier-display text-5xl leading-[0.92] text-[#181310]">From Art Direction To Delivery In One Place.</h3>
          <p className="mt-4 font-atelier-body text-[#443a34]">
            Strategy, generation, iteration, and export remain connected so creative decisions stay coherent at scale.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 pt-10">
        <div className="rounded-[2rem] border border-[#2f2722]/25 bg-[#f8f3ea] p-8 md:p-12">
          <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-[#5f534a]">Membership</p>
          <h2 className="mt-3 max-w-4xl font-atelier-display text-6xl leading-[0.88] text-[#181310] md:text-8xl">
            One premium subscription for every serious image workflow.
          </h2>
          <p className="mt-5 max-w-2xl font-atelier-body text-lg text-[#443a34]">
            T4 Canvas is built for teams that need creative control, output quality, and operational simplicity.
          </p>
          <button className="mt-8 rounded-full bg-[#1b1512] px-7 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-[#f8f3ea] transition hover:bg-black">
            Start T4 Canvas
          </button>
        </div>
      </section>
    </main>
  )
}
