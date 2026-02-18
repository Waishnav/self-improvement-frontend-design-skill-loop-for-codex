import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const rituals = [
  {
    name: 'Mood Anchoring',
    text: 'Pin references and color intentions before generation to keep visual continuity across campaigns.',
  },
  {
    name: 'Model Blending',
    text: 'Shift from Nano Banana Pro exploration to Flux 2 fidelity without dropping prompt memory.',
  },
  {
    name: 'Gentle Refinement',
    text: 'Use gpt-image-1.5 edits for composition surgery, then branch with Seedream for finals.',
  },
]

const quotes = [
  {
    line: 'We replaced three tools and finally got one coherent visual voice.',
    author: 'Lena, Creative Director',
  },
  {
    line: 'The flat fee changed how freely we experiment. Output doubled in two weeks.',
    author: 'Ira, Brand Studio Lead',
  },
]

function ConceptFourPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#f6f4ef] text-[#2e2a24]">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-14%] top-[-18%] h-[620px] w-[620px] rounded-full bg-[radial-gradient(circle,_rgba(255,184,155,0.45),_transparent_70%)]" />
        <div className="absolute right-[-10%] top-[28%] h-[560px] w-[560px] rounded-full bg-[radial-gradient(circle,_rgba(130,197,181,0.45),_transparent_72%)]" />
        <div className="absolute left-[30%] top-[58%] h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,_rgba(146,178,230,0.35),_transparent_75%)]" />
      </div>

      <header className="relative z-10 mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-6 pb-6 pt-8 md:px-10">
        <div>
          <p className="font-space text-xs uppercase tracking-[0.25em] text-[#6a7168]">T4 Canvas</p>
          <p className="font-cormorant mt-1 text-2xl">Organic Atelier</p>
        </div>
        <nav className="hidden items-center gap-5 text-xs uppercase tracking-[0.2em] text-[#5a554c] md:flex">
          <a href="#rituals" className="transition hover:text-[#302a24]">Rituals</a>
          <a href="#gallery" className="transition hover:text-[#302a24]">Gallery</a>
          <a href="#join" className="transition hover:text-[#302a24]">Join</a>
        </nav>
        <Link
          to="/"
          className="rounded-full border border-[#4a4339]/18 bg-white/55 px-5 py-2 text-xs font-semibold uppercase tracking-[0.14em] transition hover:bg-white/80"
        >
          All Concepts
        </Link>
      </header>

      <main className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-20 md:px-10">
        <section className="grid gap-8 rounded-[34px] border border-[#615749]/15 bg-white/60 p-7 backdrop-blur md:grid-cols-[1.08fr_0.92fr] md:p-11">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <p className="font-space text-xs uppercase tracking-[0.3em] text-[#697365]">Calm Power Interface</p>
            <h1 className="font-cormorant mt-4 text-5xl leading-[0.92] md:text-7xl">A studio where image generation feels crafted, not rushed.</h1>
            <p className="mt-5 max-w-2xl text-lg text-[#4a443c]">
              T4 Canvas gives creative teams a focused environment to generate, edit, and harmonize imagery across Nano Banana Pro, Flux 2, gpt-image-1.5, and Seedream.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <button className="rounded-full bg-[#2f564f] px-7 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-[#edf7f5] transition hover:bg-[#244842]">
                Enter Studio
              </button>
              <button className="rounded-full border border-[#4c4338]/25 px-7 py-3 text-sm font-semibold uppercase tracking-[0.14em] transition hover:bg-white/80">
                View Workflows
              </button>
            </div>
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, x: 22 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, delay: 0.1 }}
            className="space-y-3 rounded-3xl border border-[#5c554a]/15 bg-[#f9f6f0]/80 p-5"
          >
            {['Prompt Memory Board', 'Unified Edit Layers', 'Reference-Aware Variants', 'One Flat Team Subscription'].map((item) => (
              <div key={item} className="rounded-xl border border-[#5a5146]/14 bg-white/65 px-3 py-2 text-sm text-[#3f372f]">
                {item}
              </div>
            ))}
          </motion.aside>
        </section>

        <section id="rituals" className="mt-14 grid gap-5 md:grid-cols-3">
          {rituals.map((ritual, index) => (
            <motion.article
              key={ritual.name}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: index * 0.09 }}
              className="rounded-3xl border border-[#5c5449]/15 bg-white/65 p-6"
            >
              <p className="font-space text-[10px] uppercase tracking-[0.25em] text-[#677a74]">Creative Ritual</p>
              <h2 className="font-cormorant mt-3 text-3xl leading-none">{ritual.name}</h2>
              <p className="mt-3 text-sm text-[#4a433b]">{ritual.text}</p>
            </motion.article>
          ))}
        </section>

        <section id="gallery" className="mt-16 grid gap-6 md:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[30px] border border-[#5f564a]/15 bg-white/70 p-6">
            <p className="font-space text-xs uppercase tracking-[0.25em] text-[#6a7168]">Gallery Rhythm</p>
            <h2 className="font-cormorant mt-3 text-4xl">A visual language that stays coherent across model shifts.</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="h-40 rounded-3xl bg-[linear-gradient(135deg,_#f4c4a8,_#f4dfbe,_#d5d1f0)]" />
              <div className="h-40 rounded-3xl bg-[linear-gradient(145deg,_#d3ebdf,_#cde2f2,_#f5d4ca)]" />
              <div className="h-40 rounded-3xl bg-[linear-gradient(140deg,_#f4dfbd,_#f1c7b0,_#d2e7e2)] sm:col-span-2" />
            </div>
          </div>

          <div className="space-y-4">
            {quotes.map((quote) => (
              <figure key={quote.author} className="rounded-3xl border border-[#5f564a]/15 bg-white/80 p-5">
                <blockquote className="font-cormorant text-3xl leading-tight text-[#2f2923]">"{quote.line}"</blockquote>
                <figcaption className="mt-4 text-sm uppercase tracking-[0.14em] text-[#6a6359]">{quote.author}</figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section id="join" className="mt-16 rounded-[34px] border border-[#4a4338]/18 bg-[#2e4d49] p-8 text-[#edf7f4] md:p-12">
          <p className="font-space text-xs uppercase tracking-[0.29em] text-[#cae8e1]">Simple Billing</p>
          <h2 className="font-cormorant mt-4 max-w-3xl text-4xl leading-tight md:text-6xl">All models included. One monthly fee. No creative brakes.</h2>
          <p className="mt-4 max-w-2xl text-[#d9eeea] md:text-lg">Scale image creation without treating experimentation as a luxury line item. T4 Canvas keeps your entire creative engine inside one predictable plan.</p>
          <button className="mt-8 rounded-full bg-[#edf7f4] px-7 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-[#26403d] transition hover:bg-white">
            Start Your Month
          </button>
        </section>
      </main>
    </div>
  )
}

export default ConceptFourPage
