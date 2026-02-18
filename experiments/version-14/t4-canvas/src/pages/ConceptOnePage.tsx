import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const models = [
  {
    name: 'Nano Banana Pro',
    role: 'Idea pressure-tests and style jumps in seconds.',
    badge: 'Rapid Ideation',
  },
  {
    name: 'Flux 2',
    role: 'Photoreal fidelity with cinematic control ranges.',
    badge: 'Photo Precision',
  },
  {
    name: 'gpt-image-1.5',
    role: 'Text-aware edits and narrative visual continuity.',
    badge: 'Narrative Editing',
  },
  {
    name: 'Seedream',
    role: 'High-volume concept branching with stylistic range.',
    badge: 'Scale Engine',
  },
]

const workflow = [
  'Drop a messy prompt and attach references.',
  'Route the job to the model stack that fits the goal.',
  'Refine with masking, outpaint, relight, and blend modes.',
  'Export campaign-ready assets in one click set.',
]

function ConceptOnePage() {
  return (
    <div className="grain-overlay relative min-h-screen overflow-hidden bg-[#08070b] text-[#f6f1ee]">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-12%] top-[-12%] h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,_rgba(255,80,43,0.33),_transparent_70%)] blur-3xl" />
        <div className="absolute right-[-10%] top-[8%] h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,_rgba(255,205,156,0.22),_transparent_70%)] blur-3xl" />
        <div className="texture-grid absolute inset-0 opacity-25" />
      </div>

      <header className="relative z-10 mx-auto flex w-full max-w-6xl items-center justify-between gap-5 px-6 pb-6 pt-7 md:px-10">
        <div>
          <p className="font-space text-xs uppercase tracking-[0.28em] text-[#ffc19f]">T4 Canvas</p>
          <p className="font-syne mt-1 text-lg text-white">Noir Control Room</p>
        </div>
        <nav className="hidden items-center gap-5 text-xs uppercase tracking-[0.17em] text-[#ffcfb5] md:flex">
          <a href="#models" className="transition hover:text-white">Models</a>
          <a href="#flow" className="transition hover:text-white">Workflow</a>
          <a href="#proof" className="transition hover:text-white">Proof</a>
        </nav>
        <Link
          to="/"
          className="rounded-full border border-white/20 bg-white/8 px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-[#ffe8d8] transition hover:bg-white/20"
        >
          All Concepts
        </Link>
      </header>

      <main className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-20 md:px-10">
        <section className="grid gap-8 rounded-[30px] border border-[#f7b18f]/30 bg-black/35 p-7 shadow-2xl shadow-black/50 backdrop-blur-xl md:grid-cols-[1.15fr_0.85fr] md:p-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <p className="font-space text-xs uppercase tracking-[0.3em] text-[#ffb993]">Campaign Engine</p>
            <h1 className="font-syne mt-4 text-4xl leading-[0.92] tracking-tight text-[#fff5ef] md:text-6xl">
              Build images like a creative director with a fighter-jet dashboard.
            </h1>
            <p className="mt-6 max-w-xl text-[#f5d7c6] md:text-lg">
              Every run keeps your references, revisions, and model decisions in context. No tab chaos. No pricing traps.
              Just focused output from concept to final frame.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <button className="rounded-full bg-[#ff6b3d] px-6 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-[#240f08] transition hover:bg-[#ff855e]">
                Start Free Month
              </button>
              <button className="rounded-full border border-[#f3b18a]/50 px-6 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-[#ffd7bf] transition hover:bg-[#2b160e]">
                Watch Demo
              </button>
            </div>
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="rounded-3xl border border-[#f6b291]/25 bg-[#1b1110]/90 p-5"
          >
            <p className="font-space text-xs uppercase tracking-[0.23em] text-[#f5b38f]">Live Prompt Console</p>
            <div className="mt-4 rounded-2xl border border-[#f7bd9f]/20 bg-[#110a09] p-4">
              <p className="font-space text-xs text-[#f8d7c6]">Prompt</p>
              <p className="mt-2 text-sm text-[#ffe7da]">
                "Luxury sneaker launch image, rain-soaked asphalt reflections, neon signage, dynamic camera tilt"
              </p>
            </div>
            <div className="mt-4 grid gap-3 text-sm">
              {['Model stack: Flux 2 + gpt-image-1.5', 'Aspect: 4:5', 'Passes: 6', 'Turnaround: 24s'].map((item) => (
                <div key={item} className="rounded-xl border border-[#f4b797]/20 bg-[#2a1a17] px-3 py-2 text-[#ffd8c1]">
                  {item}
                </div>
              ))}
            </div>
          </motion.aside>
        </section>

        <section id="models" className="mt-14">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="font-syne text-3xl text-white md:text-4xl">Model Arsenal</h2>
            <p className="max-w-md text-sm text-[#f3c9b2]">Switch models mid-iteration and keep one shared creative memory across every run.</p>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {models.map((model, index) => (
              <motion.article
                key={model.name}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: index * 0.07 }}
                className="rounded-2xl border border-[#f7b292]/25 bg-[#170f0e]/85 p-5"
              >
                <p className="font-space text-[10px] uppercase tracking-[0.26em] text-[#ffc8ad]">{model.badge}</p>
                <h3 className="font-bricolage mt-3 text-xl text-white">{model.name}</h3>
                <p className="mt-3 text-sm text-[#f0c8b0]">{model.role}</p>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="flow" className="mt-16 grid gap-6 rounded-[28px] border border-[#efb190]/30 bg-[#140d0b]/90 p-6 md:grid-cols-[0.85fr_1.15fr] md:p-8">
          <div>
            <p className="font-space text-xs uppercase tracking-[0.25em] text-[#ffc4a5]">Execution Loop</p>
            <h2 className="font-syne mt-3 text-3xl text-white">From rough thought to campaign-ready in one loop.</h2>
          </div>
          <ol className="grid gap-3">
            {workflow.map((step, index) => (
              <li key={step} className="rounded-2xl border border-[#f8ba9c]/20 bg-[#211411] p-4">
                <p className="font-space text-[10px] uppercase tracking-[0.26em] text-[#ffb997]">Phase 0{index + 1}</p>
                <p className="mt-2 text-sm text-[#ffe2d1]">{step}</p>
              </li>
            ))}
          </ol>
        </section>

        <section id="proof" className="mt-16">
          <h2 className="font-syne text-3xl text-white md:text-4xl">Launch-Ready Proof Wall</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <div className="floaty h-52 rounded-3xl border border-[#f8be9f]/30 bg-[linear-gradient(140deg,_#2b1712,_#6a2f1d,_#27130f)] p-4">
              <p className="font-space text-[10px] uppercase tracking-[0.25em] text-[#ffd6bd]">Fashion Campaign</p>
            </div>
            <div className="h-52 rounded-3xl border border-[#f6c2a5]/30 bg-[linear-gradient(130deg,_#101821,_#3b6a78,_#111013)] p-4 md:translate-y-8">
              <p className="font-space text-[10px] uppercase tracking-[0.25em] text-[#d8f6ff]">Product Hero</p>
            </div>
            <div className="h-52 rounded-3xl border border-[#f6c6a9]/30 bg-[linear-gradient(120deg,_#1c0f15,_#4f2648,_#24101a)] p-4">
              <p className="font-space text-[10px] uppercase tracking-[0.25em] text-[#ffd8f2]">Album Artwork</p>
            </div>
          </div>
        </section>

        <section className="mt-16 rounded-[30px] border border-[#f7ba98]/35 bg-[linear-gradient(110deg,_#34160d,_#7f321f)] p-8 md:p-12">
          <p className="font-space text-xs uppercase tracking-[0.29em] text-[#ffe0cb]">One Price. Full Stack.</p>
          <h2 className="font-syne mt-4 max-w-3xl text-3xl text-[#fff5ed] md:text-5xl">Unlimited creative cycles for one flat monthly fee.</h2>
          <p className="mt-4 max-w-2xl text-[#ffe3d2] md:text-lg">Stop paying by model. Stop context-switching between tools. T4 Canvas gives your team one workspace to generate and edit at production speed.</p>
          <button className="mt-8 rounded-full bg-[#ffe6d6] px-7 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-[#311206] transition hover:bg-white">
            Claim Your Seat
          </button>
        </section>
      </main>
    </div>
  )
}

export default ConceptOnePage
