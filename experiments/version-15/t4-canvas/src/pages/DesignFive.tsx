import { Link } from 'react-router-dom'

const engines = [
  {
    name: 'Nano Banana Pro',
    vibe: 'Quick concept riffs and style memory loops',
    color: 'bg-[#f97316]',
  },
  {
    name: 'Flux 2',
    vibe: 'High-drama realism for launches and hero ads',
    color: 'bg-[#22c55e]',
  },
  {
    name: 'gpt-image-1.5',
    vibe: 'Prompt-faithful scenes with message precision',
    color: 'bg-[#0ea5e9]',
  },
  {
    name: 'Seedream',
    vibe: 'Stylized flavor, bold palettes, art-forward results',
    color: 'bg-[#e11d48]',
  },
]

const stats = [
  { label: 'Weekly Variants', value: '28k' },
  { label: 'Team Seats', value: '14' },
  { label: 'Avg Edit Passes', value: '7.2' },
  { label: 'Flat Fee', value: '$39' },
]

export default function DesignFive() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f5f0df] text-[#120f0e]">
      <section className="mx-auto max-w-7xl px-6 pb-12 pt-8 md:pt-12">
        <header className="flex items-center justify-between rounded-2xl border-4 border-black bg-[#fff9eb] px-4 py-3 shadow-[6px_6px_0_#000] md:px-5">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-[#4c423c]">T4 Canvas</p>
            <p className="font-playful-display text-2xl uppercase leading-none text-black">Kinetic Playground</p>
          </div>
          <Link
            to="/"
            className="rounded-xl border-2 border-black bg-[#fde047] px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-black transition hover:-translate-y-0.5"
          >
            Concepts
          </Link>
        </header>

        <div className="mt-8 rounded-[2rem] border-4 border-black bg-[#facc15] p-6 shadow-[10px_10px_0_#000] md:p-10">
          <p className="font-mono text-xs uppercase tracking-[0.34em] text-[#4b3400]">Image Generation For Operators</p>
          <h1 className="mt-4 max-w-4xl font-playful-display text-6xl uppercase leading-[0.86] text-black md:text-8xl">
            Loud Ideas.
            <br />
            Fast Variants.
            <br />
            One Flat Price.
          </h1>
          <p className="mt-5 max-w-2xl font-playful-body text-lg text-[#1d1714]">
            T4 Canvas is the power interface that combines Nano Banana Pro, Flux 2, gpt-image-1.5, and Seedream in
            one wild but controlled workflow for image teams.
          </p>
          <div className="mt-7 flex flex-wrap gap-4">
            <button className="rounded-xl border-2 border-black bg-black px-6 py-3 text-sm font-black uppercase tracking-[0.15em] text-white transition hover:bg-[#1f2937]">
              Start Studio
            </button>
            <button className="rounded-xl border-2 border-black bg-[#fff7db] px-6 py-3 text-sm font-black uppercase tracking-[0.15em] text-black transition hover:bg-white">
              Watch Tour
            </button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <h2 className="font-playful-display text-5xl uppercase leading-none text-black md:text-6xl">Engine Rumble</h2>
          <p className="max-w-md font-playful-body text-[#332b27]">
            Different models for different missions. One shared prompt and edit timeline for all of them.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {engines.map((engine, index) => (
            <article
              key={engine.name}
              className="relative rounded-3xl border-4 border-black bg-[#fff9eb] p-5 shadow-[8px_8px_0_#000]"
              style={{ transform: `rotate(${index % 2 === 0 ? '-1.2deg' : '1.2deg'})` }}
            >
              <div className={`inline-flex rounded-full border-2 border-black px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-white ${engine.color}`}>
                Live
              </div>
              <h3 className="mt-3 font-playful-display text-4xl uppercase leading-[0.92] text-black">{engine.name}</h3>
              <p className="mt-3 font-playful-body text-sm text-[#2f2824]">{engine.vibe}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-4 md:grid-cols-4">
          {stats.map((item, index) => (
            <article
              key={item.label}
              className="rounded-2xl border-4 border-black p-4 shadow-[7px_7px_0_#000]"
              style={{ background: ['#fb7185', '#38bdf8', '#34d399', '#f59e0b'][index] }}
            >
              <p className="font-mono text-[11px] uppercase tracking-[0.23em] text-black/80">{item.label}</p>
              <p className="mt-2 font-playful-display text-5xl uppercase leading-none text-black">{item.value}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-6 py-12 lg:grid-cols-[1fr_1fr]">
        <div className="rounded-[2rem] border-4 border-black bg-[#22d3ee] p-7 shadow-[10px_10px_0_#000]">
          <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-black/70">Workflow</p>
          <h3 className="mt-3 font-playful-display text-5xl uppercase leading-[0.86] text-black">Prompt Once. Compare Everywhere.</h3>
          <p className="mt-4 font-playful-body text-[#151110]">
            Send one prompt into all active engines, score winners instantly, and carry edits forward without losing context.
          </p>
        </div>

        <div className="rounded-[2rem] border-4 border-black bg-[#f472b6] p-7 shadow-[10px_10px_0_#000]">
          <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-black/70">Collaboration</p>
          <h3 className="mt-3 font-playful-display text-5xl uppercase leading-[0.86] text-black">Creative Teams Stay In Sync.</h3>
          <p className="mt-4 font-playful-body text-[#151110]">
            Notes, masks, prompt deltas, and exported packs are connected so every campaign stays coherent at scale.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 pt-10">
        <div className="rounded-[2.25rem] border-4 border-black bg-[#fff9eb] p-8 shadow-[12px_12px_0_#000] md:p-12">
          <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-[#423a35]">Membership</p>
          <h2 className="mt-3 max-w-4xl font-playful-display text-6xl uppercase leading-[0.86] text-black md:text-8xl">
            Four premium models.
            <br />
            One monthly bill.
          </h2>
          <p className="mt-5 max-w-2xl font-playful-body text-lg text-[#2f2824]">
            T4 Canvas gives power users full-fidelity image generation and editing without subscription sprawl.
          </p>
          <button className="mt-8 rounded-xl border-2 border-black bg-[#111827] px-7 py-3 text-sm font-black uppercase tracking-[0.15em] text-white transition hover:bg-black">
            Launch T4 Canvas
          </button>
        </div>
      </section>
    </main>
  )
}
