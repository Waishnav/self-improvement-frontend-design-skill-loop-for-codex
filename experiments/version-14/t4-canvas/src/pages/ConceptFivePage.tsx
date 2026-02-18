import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const modules = [
  {
    name: 'Generation Rack',
    text: 'Launch jobs across all four models without breaking project context.',
  },
  {
    name: 'Edit Rig',
    text: 'Mask, relight, repaint, and upscale in one deterministic panel stack.',
  },
  {
    name: 'Output Mill',
    text: 'Publish ad sets, hero frames, and variant packs in one export burst.',
  },
]

const faqs = [
  ['Can I use every model under one plan?', 'Yes. Nano Banana Pro, Flux 2, gpt-image-1.5, and Seedream are included in the same subscription.'],
  ['Is this for teams or solo creators?', 'Both. It scales from one power user to multi-seat creative ops teams.'],
  ['Do edits stay linked to source generations?', 'Yes. Every revision remains attached to the origin run so you can trace decisions.'],
]

function ConceptFivePage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#efede6] font-plex text-[#11100f]">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-[-8%] top-[-10%] h-[420px] w-[420px] rotate-12 border-[42px] border-[#d9ff47]" />
        <div className="absolute left-[-10%] top-[52%] h-[320px] w-[320px] -rotate-12 border-[30px] border-[#121212]/12" />
      </div>

      <header className="relative z-10 border-b-4 border-[#10100e] bg-[#efede6]">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-6 py-5 md:px-10">
          <div>
            <p className="font-space text-xs uppercase tracking-[0.26em]">T4 Canvas</p>
            <p className="font-bebas text-4xl uppercase leading-none tracking-wide">Industrial Signal</p>
          </div>
          <nav className="hidden items-center gap-6 text-xs font-semibold uppercase tracking-[0.2em] md:flex">
            <a href="#system" className="transition hover:text-[#56611a]">System</a>
            <a href="#ledger" className="transition hover:text-[#56611a]">Ledger</a>
            <a href="#faq" className="transition hover:text-[#56611a]">FAQ</a>
          </nav>
          <Link
            to="/"
            className="rounded-full border-2 border-[#10100e] px-5 py-2 text-xs font-semibold uppercase tracking-[0.15em] transition hover:bg-[#10100e] hover:text-[#f5f3ed]"
          >
            All Concepts
          </Link>
        </div>
      </header>

      <main className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-20 pt-10 md:px-10">
        <section className="grid gap-6 border-4 border-[#10100e] bg-white p-6 md:grid-cols-[1.1fr_0.9fr] md:p-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <p className="font-space text-xs uppercase tracking-[0.28em] text-[#586118]">Power User Surface</p>
            <h1 className="font-bebas mt-3 text-6xl uppercase leading-[0.85] tracking-wide md:text-8xl">Built for operators who ship image campaigns at velocity.</h1>
            <p className="mt-4 max-w-2xl text-base text-[#2c2a27] md:text-lg">
              T4 Canvas gives serious creators one hard-working interface for generation and editing across four leading image models, billed as one flat monthly product.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <button className="rounded-none border-2 border-[#10100e] bg-[#d9ff47] px-7 py-3 text-sm font-bold uppercase tracking-[0.14em] transition hover:bg-[#c7f423]">
                Start Production
              </button>
              <button className="rounded-none border-2 border-[#10100e] px-7 py-3 text-sm font-bold uppercase tracking-[0.14em] transition hover:bg-[#f1efe7]">
                See Live Demo
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="grid gap-3"
          >
            {['Unified prompt memory', 'Cross-model routing', 'Versioned edit history', 'Deterministic export packs'].map((line) => (
              <div key={line} className="border-2 border-[#10100e] bg-[#efede6] px-4 py-3 text-sm uppercase tracking-[0.1em]">
                {line}
              </div>
            ))}
          </motion.div>
        </section>

        <section id="system" className="mt-12 grid gap-4 md:grid-cols-3">
          {modules.map((module, index) => (
            <motion.article
              key={module.name}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              className="border-4 border-[#10100e] bg-white p-5"
            >
              <p className="font-space text-[10px] uppercase tracking-[0.26em] text-[#586118]">Module 0{index + 1}</p>
              <h2 className="font-bebas mt-2 text-4xl uppercase leading-none">{module.name}</h2>
              <p className="mt-3 text-sm text-[#282622]">{module.text}</p>
            </motion.article>
          ))}
        </section>

        <section id="ledger" className="mt-12 border-4 border-[#10100e] bg-[#10100e] p-6 text-[#f2f0e7] md:p-10">
          <p className="font-space text-xs uppercase tracking-[0.27em] text-[#d9ff47]">Value Ledger</p>
          <h2 className="font-bebas mt-3 text-5xl uppercase leading-none md:text-7xl">One subscription. Full model floor access.</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <div className="border-2 border-[#d9ff47]/40 p-4">
              <p className="font-space text-[10px] uppercase tracking-[0.23em] text-[#d9ff47]">Included Models</p>
              <ul className="mt-3 space-y-2 text-sm uppercase tracking-[0.08em] text-[#edf7b9]">
                <li>Nano Banana Pro</li>
                <li>Flux 2</li>
                <li>gpt-image-1.5</li>
                <li>Seedream</li>
              </ul>
            </div>
            <div className="border-2 border-[#d9ff47]/40 p-4">
              <p className="font-space text-[10px] uppercase tracking-[0.23em] text-[#d9ff47]">Included Capability</p>
              <ul className="mt-3 space-y-2 text-sm uppercase tracking-[0.08em] text-[#edf7b9]">
                <li>Generation + editing</li>
                <li>Team workspaces</li>
                <li>Versioned history</li>
                <li>Commercial exports</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="faq" className="mt-12 grid gap-4">
          {faqs.map(([q, a]) => (
            <article key={q} className="border-4 border-[#10100e] bg-white p-5">
              <h3 className="font-bebas text-4xl uppercase leading-none">{q}</h3>
              <p className="mt-3 max-w-4xl text-sm text-[#2a2824] md:text-base">{a}</p>
            </article>
          ))}
        </section>

        <section className="mt-12 border-4 border-[#10100e] bg-[#d9ff47] p-8">
          <p className="font-space text-xs uppercase tracking-[0.27em] text-[#2f3800]">No hidden tiers</p>
          <h2 className="font-bebas mt-3 text-6xl uppercase leading-[0.85] text-[#10100e] md:text-8xl">Run every model without watching a meter.</h2>
          <button className="mt-6 rounded-none border-2 border-[#10100e] bg-[#10100e] px-7 py-3 text-sm font-bold uppercase tracking-[0.14em] text-[#f5f3eb] transition hover:bg-[#2b2b27]">
            Lock In Monthly Access
          </button>
        </section>
      </main>
    </div>
  )
}

export default ConceptFivePage
