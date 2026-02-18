import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const macros = [
  {
    name: 'AD-Variant Burst',
    command: 'mix --model flux2 --passes 8 --seedream-branch 12 --target ctr',
  },
  {
    name: 'Hero Reframe',
    command: 'edit --model gpt-image-1.5 --mask "subject" --compose diagonal --grade neon',
  },
  {
    name: 'Style Drift Guard',
    command: 'lock --reference campaign-kit --consistency high --model-swap nano-banana-pro',
  },
]

const stats = [
  ['Active jobs / hr', '2,800+'],
  ['Mean render time', '19s'],
  ['Teams onboarded', '1,420'],
  ['Prompt reuse accuracy', '96%'],
]

function ConceptThreePage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#05060c] font-chakra text-[#d9fff9]">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-8%] top-[-10%] h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,_rgba(0,255,194,0.28),_transparent_72%)] blur-2xl" />
        <div className="absolute right-[-12%] top-[12%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,_rgba(0,152,255,0.25),_transparent_70%)] blur-2xl" />
        <div className="texture-grid absolute inset-0 opacity-35" />
      </div>

      <header className="relative z-10 mx-auto flex w-full max-w-6xl items-center justify-between gap-4 border-b border-[#20ffd3]/25 px-6 py-5 md:px-10">
        <div className="rounded-full border border-[#2fffd7]/35 bg-[#06151a] px-4 py-2">
          <p className="font-space text-xs uppercase tracking-[0.24em] text-[#8fffe8]">T4 Canvas // Neon Ops Deck</p>
        </div>
        <nav className="hidden items-center gap-5 font-space text-xs uppercase tracking-[0.2em] text-[#98ffed] md:flex">
          <a href="#feed" className="transition hover:text-white">Live Feed</a>
          <a href="#macros" className="transition hover:text-white">Macros</a>
          <a href="#billing" className="transition hover:text-white">Billing</a>
        </nav>
        <Link
          to="/"
          className="rounded-full border border-[#26f9d0]/45 px-4 py-2 font-space text-xs uppercase tracking-[0.16em] text-[#b8fff1] transition hover:bg-[#082025]"
        >
          All Concepts
        </Link>
      </header>

      <main className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-20 pt-10 md:px-10">
        <section className="grid gap-7 md:grid-cols-[1.15fr_0.85fr]">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <p className="font-space text-xs uppercase tracking-[0.3em] text-[#74ffea]">Realtime Image Console</p>
            <h1 className="font-archivo mt-4 text-4xl uppercase leading-[0.9] tracking-wide text-[#ebfffb] md:text-6xl">
              Command every image model like a live ops system.
            </h1>
            <p className="mt-5 max-w-2xl text-base text-[#a6fff0] md:text-lg">
              T4 Canvas fuses generation and editing pipelines with power-user controls. Queue parallel runs, route by model strength, and ship polished assets in one interface.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 font-space text-xs uppercase tracking-[0.18em]">
              <button className="rounded-full border border-[#7dffe8]/60 bg-[#0a2a2f] px-5 py-3 text-[#d8fff7] transition hover:bg-[#124147]">
                Deploy Workflow
              </button>
              <button className="rounded-full border border-[#3ddfc0]/35 px-5 py-3 text-[#9efae9] transition hover:bg-[#0b1f26]">
                View Command Log
              </button>
            </div>
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, delay: 0.1 }}
            className="rounded-3xl border border-[#2ffff5]/22 bg-[#07151c]/90 p-5"
          >
            <p className="font-space text-xs uppercase tracking-[0.23em] text-[#7effea]">Queue Snapshot</p>
            <div className="mt-4 space-y-2 text-sm text-[#c5fff5]">
              {[
                'seedream: 14 branches compiling',
                'flux2: 3 premium renders underway',
                'gpt-image-1.5: 7 masked edit jobs',
                'nano banana pro: 29 ideation bursts',
              ].map((line) => (
                <div key={line} className="rounded-lg border border-[#32f2cf]/20 bg-[#0d232e] px-3 py-2 font-space text-[11px] uppercase tracking-[0.12em]">
                  {line}
                </div>
              ))}
            </div>
          </motion.aside>
        </section>

        <section id="feed" className="mt-14 overflow-hidden rounded-3xl border border-[#2efed6]/20 bg-[#041018] p-6">
          <p className="font-space text-xs uppercase tracking-[0.27em] text-[#85ffeb]">Live Creative Feed</p>
          <div className="mt-5 overflow-hidden">
            <div className="marquee-track flex min-w-max gap-4">
              {[...Array(12)].map((_, index) => (
                <div
                  key={`feed-${index}`}
                  className="h-32 w-48 rounded-2xl border border-[#31ffd8]/25 bg-[linear-gradient(130deg,_#061c27,_#0f4350,_#17142e)] p-3"
                >
                  <p className="font-space text-[10px] uppercase tracking-[0.2em] text-[#a7fff2]">Render {index + 1}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="macros" className="mt-14 grid gap-6 md:grid-cols-[0.88fr_1.12fr]">
          <div>
            <p className="font-space text-xs uppercase tracking-[0.27em] text-[#8dffec]">Shortcut Layer</p>
            <h2 className="font-archivo mt-3 text-3xl uppercase leading-tight text-[#e6fffb]">Macro blocks for repetitive high-stakes tasks.</h2>
          </div>
          <div className="space-y-3">
            {macros.map((macro, index) => (
              <motion.article
                key={macro.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                className="rounded-2xl border border-[#35f6cc]/20 bg-[#081922] p-4"
              >
                <p className="font-space text-[11px] uppercase tracking-[0.17em] text-[#8ffcea]">{macro.name}</p>
                <code className="mt-2 block rounded-lg border border-[#2fe2bf]/25 bg-[#051218] px-3 py-2 font-space text-[11px] text-[#c7fff4]">
                  {macro.command}
                </code>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="mt-14 grid gap-4 md:grid-cols-4">
          {stats.map(([label, value]) => (
            <div key={label} className="rounded-2xl border border-[#2bf8cf]/22 bg-[#08151d] p-4">
              <p className="font-space text-[10px] uppercase tracking-[0.22em] text-[#7ffff0]">{label}</p>
              <p className="font-archivo mt-3 text-3xl uppercase text-[#ebfffb]">{value}</p>
            </div>
          ))}
        </section>

        <section id="billing" className="mt-14 rounded-[30px] border border-[#38ffd8]/25 bg-[linear-gradient(120deg,_#0b2e35,_#0d4853)] p-8 md:p-12">
          <p className="font-space text-xs uppercase tracking-[0.28em] text-[#affff2]">Flat Fee Access</p>
          <h2 className="font-archivo mt-4 text-3xl uppercase leading-tight text-[#effffd] md:text-5xl">
            One monthly command pass for every model in the stack.
          </h2>
          <p className="mt-4 max-w-2xl text-[#c5fff3] md:text-lg">
            Stop budgeting per model. Stop throttling creative output. Run the full T4 Canvas system with predictable pricing and zero feature silos.
          </p>
          <button className="mt-8 rounded-full bg-[#d5fff8] px-7 py-3 font-space text-xs uppercase tracking-[0.18em] text-[#053238] transition hover:bg-white">
            Activate Studio License
          </button>
        </section>
      </main>
    </div>
  )
}

export default ConceptThreePage
