import { Link } from 'react-router-dom'

const petals = [
  {
    title: 'Nano Banana Pro',
    copy: 'Rapid concept petals for ideation and visual exploration.',
  },
  {
    title: 'Flux 2',
    copy: 'Photoreal grounding for campaign and product imagery.',
  },
  {
    title: 'gpt-image-1.5',
    copy: 'Instructional refinement with compositional precision.',
  },
  {
    title: 'Seedream',
    copy: 'Expressive stylization for signature brand moments.',
  },
]

export function ConceptFive() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#f4f7ff] px-6 py-8 text-[#1a2637] sm:px-10 lg:px-16">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_8%_16%,rgba(255,192,203,0.45),transparent_34%),radial-gradient(circle_at_82%_8%,rgba(196,181,253,0.55),transparent_32%),radial-gradient(circle_at_75%_82%,rgba(134,239,172,0.45),transparent_30%)]" />
      <div className="pointer-events-none absolute left-[-6rem] top-48 h-60 w-60 animate-float rounded-full bg-pink-300/45 blur-2xl" />
      <div className="pointer-events-none absolute bottom-24 right-[-5rem] h-56 w-56 animate-float rounded-full bg-indigo-300/40 blur-2xl [animation-delay:1.2s]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <header className="mb-16 flex flex-wrap items-center justify-between gap-4 border-b border-[#89a1c2]/35 pb-6">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-[#516782]">T4 Canvas</p>
            <p className="font-['Cormorant_Garamond'] text-3xl leading-none text-[#1f2f44]">Aurora Bloom</p>
          </div>
          <nav className="hidden items-center gap-8 text-xs uppercase tracking-[0.2em] text-[#4f6783] md:flex">
            <a href="#constellation" className="hover:text-[#23354d]">
              Constellation
            </a>
            <a href="#workflow" className="hover:text-[#23354d]">
              Workflow
            </a>
            <a href="#join" className="hover:text-[#23354d]">
              Join
            </a>
          </nav>
          <Link
            to="/"
            className="rounded-full border border-[#7f97ba]/45 bg-white/60 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#2d425c] transition hover:bg-white/80"
          >
            Concept Gallery
          </Link>
        </header>

        <section className="mb-20 grid items-center gap-8 lg:grid-cols-[1.08fr_0.92fr]">
          <div>
            <p className="mb-5 inline-flex rounded-full border border-white/70 bg-white/70 px-4 py-2 text-xs uppercase tracking-[0.2em] text-[#466281]">
              Calm interface, high-output engine
            </p>
            <h1 className="mb-6 max-w-3xl font-['Cormorant_Garamond'] text-5xl leading-[0.92] text-[#1d2b40] sm:text-6xl xl:text-7xl">
              Make extraordinary images without creative friction.
            </h1>
            <p className="mb-8 max-w-xl text-base leading-relaxed text-[#364f69] sm:text-lg">
              T4 Canvas offers one serene control surface for Nano Banana Pro, Flux 2, gpt-image-1.5, and Seedream. Create across
              styles, then refine with advanced editing while your team stays inside one visual memory.
            </p>
            <div className="flex flex-wrap gap-3">
              <button className="rounded-full border border-[#1f3855]/25 bg-[#2f4e73] px-7 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-[#f3f8ff] transition hover:bg-[#223c59]">
                Start Membership
              </button>
              <button className="rounded-full border border-[#7d95b7]/55 bg-white/60 px-7 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-[#29445f] transition hover:bg-white/80">
                Preview Studio
              </button>
            </div>
          </div>

          <aside className="glass-card rounded-[2rem] p-6 sm:p-7">
            <p className="mb-4 text-xs uppercase tracking-[0.22em] text-[#4e6682]">Session snapshot</p>
            <div className="mb-4 grid gap-3 sm:grid-cols-2">
              {[
                ['Active canvases', '18'],
                ['Prompt branches', '73'],
                ['Final exports', '1.4k'],
                ['Team seats', '12'],
              ].map(([label, value]) => (
                <article className="rounded-2xl border border-white/70 bg-white/70 p-4" key={label}>
                  <p className="text-[11px] uppercase tracking-[0.16em] text-[#59708b]">{label}</p>
                  <p className="font-['Cormorant_Garamond'] text-4xl leading-none text-[#243752]">{value}</p>
                </article>
              ))}
            </div>
            <div className="rounded-2xl border border-white/70 bg-white/65 p-4">
              <p className="mb-2 text-[11px] uppercase tracking-[0.16em] text-[#59708b]">Current prompt</p>
              <p className="text-sm leading-relaxed text-[#2d425d]">
                Botanical perfume bottle, dew droplets, reflective stone plinth, moonlit haze, editorial color grading.
              </p>
            </div>
          </aside>
        </section>

        <section id="constellation" className="mb-20">
          <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
            <h2 className="font-['Cormorant_Garamond'] text-4xl leading-none text-[#1d2b40] sm:text-5xl">Model Constellation</h2>
            <p className="max-w-xl text-sm leading-relaxed text-[#39506a] sm:text-base">
              Orchestrate each model in the role it performs best, then thread results into one coherent campaign narrative.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {petals.map((petal) => (
              <article className="glass-card rounded-[1.6rem] p-6" key={petal.title}>
                <p className="mb-2 text-xs uppercase tracking-[0.2em] text-[#5a728e]">Model lane</p>
                <h3 className="mb-2 font-['Cormorant_Garamond'] text-4xl leading-none text-[#233750]">{petal.title}</h3>
                <p className="text-sm leading-relaxed text-[#3b536e]">{petal.copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="workflow" className="mb-20 grid gap-4 lg:grid-cols-3">
          {[
            ['Compose', 'Create a central art direction prompt with references and style constraints.'],
            ['Bloom', 'Generate parallel variants across all model lanes and capture best compositions.'],
            ['Polish', 'Refine with edits, upscale finals, and publish polished assets in one timeline.'],
          ].map(([title, text], index) => (
            <article
              className="glass-card rounded-[1.5rem] p-6"
              key={title}
              style={{ transform: `translateY(${index % 2 === 0 ? '0px' : '18px'})` }}
            >
              <p className="mb-2 text-xs uppercase tracking-[0.2em] text-[#5a728e]">Phase {index + 1}</p>
              <h3 className="mb-2 font-['Cormorant_Garamond'] text-4xl leading-none text-[#233750]">{title}</h3>
              <p className="text-sm leading-relaxed text-[#3b536e]">{text}</p>
            </article>
          ))}
        </section>

        <section id="join" className="glass-card rounded-[2rem] p-8 sm:p-10">
          <div className="grid items-end gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="mb-2 text-xs uppercase tracking-[0.24em] text-[#5b738f]">Single-plan pricing</p>
              <h2 className="mb-3 font-['Cormorant_Garamond'] text-5xl leading-none text-[#1f3148] sm:text-6xl">Every model. Every edit tool. One monthly fee.</h2>
              <p className="max-w-2xl text-sm leading-relaxed text-[#39506a] sm:text-base">
                Skip the fragmented tooling stack. T4 Canvas gives your team one elegant workspace where exploration and execution happen
                together.
              </p>
            </div>
            <article className="rounded-[1.4rem] border border-white/75 bg-white/75 p-6">
              <p className="mb-1 text-xs uppercase tracking-[0.17em] text-[#5d7792]">T4 Canvas Bloom Plan</p>
              <p className="font-['Cormorant_Garamond'] text-6xl leading-none text-[#223650]">$39</p>
              <p className="mb-4 text-sm text-[#45607d]">per month</p>
              <button className="w-full rounded-full border border-[#254364]/30 bg-[#2f4e73] px-4 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-[#eef5ff] transition hover:bg-[#203c59]">
                Join T4 Canvas
              </button>
            </article>
          </div>
        </section>
      </div>
    </main>
  )
}
