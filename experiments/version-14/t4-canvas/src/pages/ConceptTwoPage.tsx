import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const stories = [
  {
    title: 'Campaign Teams',
    body: 'Run high-volume concept rounds and preserve art direction across every deliverable.',
  },
  {
    title: 'Brand Studios',
    body: 'Move from moodboard to launch visuals while keeping visual language consistent.',
  },
  {
    title: 'Performance Creators',
    body: 'Generate ad variants at scale and iterate based on live conversion signals.',
  },
]

const stack = [
  ['Nano Banana Pro', 'Wild concept expansion for early ideation.'],
  ['Flux 2', 'High-fidelity renders with sharp product realism.'],
  ['gpt-image-1.5', 'Surgical edits, text repairs, and composition reshapes.'],
  ['Seedream', 'Mass variant generation without losing art direction.'],
]

function ConceptTwoPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#f4ede2] text-[#221912]">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-[-16%] top-[-16%] h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle,_rgba(30,76,255,0.22),_transparent_72%)]" />
        <div className="absolute left-[-12%] top-[42%] h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,_rgba(255,143,56,0.20),_transparent_70%)]" />
      </div>

      <header className="relative z-10 mx-auto flex w-full max-w-6xl items-center justify-between px-6 pb-8 pt-8 md:px-10">
        <div>
          <p className="font-space text-xs uppercase tracking-[0.28em] text-[#1e4cff]">T4 Canvas</p>
          <p className="font-fraunces mt-1 text-xl">Editorial Prism</p>
        </div>
        <nav className="hidden items-center gap-6 text-xs uppercase tracking-[0.2em] text-[#2d241f] md:flex">
          <a href="#positioning" className="transition hover:text-[#1e4cff]">Positioning</a>
          <a href="#stack" className="transition hover:text-[#1e4cff]">Model Stack</a>
          <a href="#pricing" className="transition hover:text-[#1e4cff]">Pricing</a>
        </nav>
        <Link
          to="/"
          className="rounded-full border border-[#2a211c]/20 bg-white/70 px-5 py-2 text-xs font-semibold uppercase tracking-[0.15em] transition hover:bg-white"
        >
          All Concepts
        </Link>
      </header>

      <main className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-20 md:px-10">
        <section className="grid gap-8 border-b border-[#2b211a]/20 pb-14 md:grid-cols-[1.2fr_0.8fr]">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <p className="font-space text-xs uppercase tracking-[0.3em] text-[#1e4cff]">Unified Image Studio</p>
            <h1 className="font-fraunces mt-4 text-5xl leading-[0.9] md:text-7xl">
              Luxury-grade visuals, delivered at software speed.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-[#3a2f28]">
              T4 Canvas combines generation and editing across frontier image models in one cohesive interface, priced as a single monthly subscription.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <button className="rounded-full bg-[#1e4cff] px-7 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-[#edf1ff] transition hover:bg-[#1639c7]">
                Start Building
              </button>
              <button className="rounded-full border border-[#1f1813]/25 px-7 py-3 text-sm font-semibold uppercase tracking-[0.16em] transition hover:bg-white/70">
                Tour Workspace
              </button>
            </div>
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.12 }}
            className="rounded-[28px] border border-[#2d231d]/15 bg-white/65 p-5 backdrop-blur"
          >
            <p className="font-space text-xs uppercase tracking-[0.22em] text-[#1e4cff]">Performance Snapshot</p>
            <div className="mt-5 grid gap-3 text-sm">
              {['41% faster concept cycles', '3.2x more usable variants', 'Single invoice for entire stack', 'No per-model seat planning'].map((item) => (
                <div key={item} className="rounded-xl border border-[#2a211b]/10 bg-[#fff8f0]/80 px-3 py-2 text-[#2d231c]">
                  {item}
                </div>
              ))}
            </div>
          </motion.aside>
        </section>

        <section id="positioning" className="mt-14 grid gap-6 md:grid-cols-3">
          {stories.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, delay: index * 0.1 }}
              className="rounded-3xl border border-[#2b211a]/15 bg-white/70 p-6"
            >
              <p className="font-space text-[10px] uppercase tracking-[0.25em] text-[#1e4cff]">Use Case</p>
              <h2 className="font-bricolage mt-3 text-2xl">{item.title}</h2>
              <p className="mt-3 text-sm text-[#463a33]">{item.body}</p>
            </motion.article>
          ))}
        </section>

        <section id="stack" className="mt-16 grid gap-8 md:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="font-space text-xs uppercase tracking-[0.25em] text-[#1e4cff]">Integrated Stack</p>
            <h2 className="font-fraunces mt-3 text-4xl leading-tight">Four specialized models, one creative memory.</h2>
            <p className="mt-4 text-[#3d322b]">Each model has a role. T4 Canvas orchestrates them as one system so edits and prompts remain coherent across iterations.</p>
          </div>
          <div className="space-y-3">
            {stack.map(([name, value]) => (
              <div key={name} className="rounded-2xl border border-[#2d231d]/15 bg-[#fffdf8] p-4">
                <p className="font-bricolage text-lg">{name}</p>
                <p className="mt-1 text-sm text-[#4b3e36]">{value}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="pricing" className="mt-16 rounded-[34px] border border-[#1f1813]/20 bg-[#1d46cf] p-8 text-[#f4f7ff] md:p-12">
          <p className="font-space text-xs uppercase tracking-[0.28em] text-[#d6deff]">Flat Fee Subscription</p>
          <h2 className="font-fraunces mt-4 max-w-3xl text-4xl leading-tight md:text-6xl">No token anxiety. No model roulette. One monthly rate.</h2>
          <p className="mt-5 max-w-2xl text-[#e0e8ff] md:text-lg">Use every model, every editing tool, every workspace feature with predictable billing designed for teams shipping visual campaigns weekly.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <button className="rounded-full bg-[#f5f8ff] px-7 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-[#1b41c2] transition hover:bg-white">
              Claim Early Access
            </button>
            <button className="rounded-full border border-[#ced8ff]/60 px-7 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-[#eaf0ff] transition hover:bg-[#3359d2]">
              Download One-Pager
            </button>
          </div>
        </section>
      </main>
    </div>
  )
}

export default ConceptTwoPage
