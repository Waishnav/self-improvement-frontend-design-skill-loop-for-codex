import { Link } from 'react-router-dom'

const models = [
  {
    name: 'Nano Banana Pro',
    trait: 'Rapid concept seeding for early direction setting.',
  },
  {
    name: 'Flux 2',
    trait: 'Detailed lighting and material realism for premium scenes.',
  },
  {
    name: 'gpt-image-1.5',
    trait: 'Language-native image editing for precise revisions.',
  },
  {
    name: 'Seedream',
    trait: 'Wide stylistic exploration without breaking composition.',
  },
]

const cases = [
  {
    title: 'Launch Campaigns',
    detail: 'Generate social, out-of-home, and web hero variants from one prompt system.',
  },
  {
    title: 'Product Worlds',
    detail: 'Build photoreal product narratives with model-by-model pass control.',
  },
  {
    title: 'Brand Refresh',
    detail: 'Test visual directions quickly and keep only the strongest style lines.',
  },
]

export function DesignFive() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#f4f6ef] text-[#1e2b25]">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-0 h-[34rem] w-[34rem] rounded-full bg-emerald-300/28 blur-[100px]" />
        <div className="absolute right-0 top-20 h-[30rem] w-[30rem] rounded-full bg-amber-200/45 blur-[100px]" />
        <div className="absolute bottom-10 left-1/3 h-72 w-72 rounded-full bg-teal-200/40 blur-[90px]" />
      </div>

      <header className="section-wrap relative py-8">
        <div className="flex flex-wrap items-center justify-between gap-3 rounded-full border border-[#6d8a7c]/35 bg-white/60 px-5 py-3 backdrop-blur-md">
          <Link to="/" className="font-jakarta text-xs uppercase tracking-[0.2em] text-[#5d7f6f] transition hover:text-[#29453a]">
            Explore concepts
          </Link>
          <p className="font-cormorant text-3xl leading-none text-[#1f3a2f]">T4 Canvas</p>
          <button className="rounded-full bg-[#1f3a2f] px-4 py-2 font-jakarta text-xs uppercase tracking-[0.16em] text-[#f4f6ef] transition hover:bg-[#152c23]">
            Start membership
          </button>
        </div>
      </header>

      <section className="section-wrap relative pb-16 pt-4">
        <div className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
          <div>
            <p className="font-jakarta text-xs uppercase tracking-[0.24em] text-[#5e7d6d]">Solstice House Direction</p>
            <h1 className="mt-5 font-cormorant text-6xl leading-[0.9] text-[#1f352b] sm:text-7xl lg:text-8xl">
              Crafted image intelligence for modern studios.
            </h1>
            <p className="mt-6 max-w-xl font-jakarta text-base leading-relaxed text-[#3f564b]">
              T4 Canvas blends Nano Banana Pro, Flux 2, gpt-image-1.5, and Seedream into one calm workspace. A single monthly fee gives your team premium generation and editing control.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <button className="rounded-full bg-[#1f3a2f] px-6 py-3 font-jakarta text-xs uppercase tracking-[0.18em] text-[#f4f6ef] transition hover:bg-[#13291f]">
                Enter studio
              </button>
              <button className="rounded-full border border-[#648472]/55 bg-white/60 px-6 py-3 font-jakarta text-xs uppercase tracking-[0.18em] text-[#274338] transition hover:bg-white/90">
                See process
              </button>
            </div>
          </div>

          <div className="relative rounded-[2.2rem] border border-[#7f9d8f]/45 bg-white/70 p-6 backdrop-blur-md">
            <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full border border-[#7f9d8f]/55 animate-floaty" />
            <p className="font-jakarta text-xs uppercase tracking-[0.2em] text-[#628371]">Greenhouse stack</p>
            <div className="mt-4 space-y-3">
              {models.map((model) => (
                <article key={model.name} className="rounded-2xl border border-[#9db5a9]/55 bg-[#f8fbf5] p-4">
                  <h2 className="font-cormorant text-3xl leading-none text-[#244135]">{model.name}</h2>
                  <p className="mt-1 font-jakarta text-sm text-[#476155]">{model.trait}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-wrap pb-16">
        <div className="rounded-[2.2rem] border border-[#7f9d8f]/45 bg-[#f9fbf6] p-6 sm:p-8">
          <h2 className="font-cormorant text-5xl leading-tight text-[#1f352b]">The studio rhythm</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <article className="rounded-2xl border border-[#a6bdae]/65 bg-white p-5">
              <p className="font-jakarta text-xs uppercase tracking-[0.19em] text-[#60806f]">Compose</p>
              <p className="mt-3 font-jakarta text-sm leading-relaxed text-[#42584d]">Arrange prompts, references, and guardrails with clear project context.</p>
            </article>
            <article className="rounded-2xl border border-[#a6bdae]/65 bg-white p-5">
              <p className="font-jakarta text-xs uppercase tracking-[0.19em] text-[#60806f]">Generate</p>
              <p className="mt-3 font-jakarta text-sm leading-relaxed text-[#42584d]">Run parallel model passes and compare outputs inside one visual timeline.</p>
            </article>
            <article className="rounded-2xl border border-[#a6bdae]/65 bg-white p-5">
              <p className="font-jakarta text-xs uppercase tracking-[0.19em] text-[#60806f]">Refine</p>
              <p className="mt-3 font-jakarta text-sm leading-relaxed text-[#42584d]">Apply selective edits, finalize packs, and publish confidently.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section-wrap pb-16">
        <div className="grid gap-5 lg:grid-cols-3">
          {cases.map((item) => (
            <article key={item.title} className="rounded-[2rem] border border-[#8ea89a]/55 bg-white/70 p-6 backdrop-blur-md">
              <p className="font-jakarta text-xs uppercase tracking-[0.18em] text-[#658575]">Use Case</p>
              <h3 className="mt-3 font-cormorant text-4xl leading-[0.94] text-[#1f352b]">{item.title}</h3>
              <p className="mt-3 font-jakarta text-sm leading-relaxed text-[#445c50]">{item.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-wrap pb-20">
        <div className="rounded-[2.4rem] border border-[#6f8f7f]/55 bg-[#1f3a2f] px-6 py-10 text-[#f4f6ef] sm:px-10">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="font-jakarta text-xs uppercase tracking-[0.22em] text-[#a9c2b5]">Membership close-out</p>
              <h2 className="mt-3 font-cormorant text-5xl leading-[0.9] sm:text-6xl">One gentle interface. Four serious models.</h2>
              <p className="mt-4 max-w-2xl font-jakarta text-sm leading-relaxed text-[#d5dfd8]">
                Flat monthly pricing keeps budgeting simple while your team keeps full creative range.
              </p>
            </div>
            <div>
              <p className="font-cormorant text-6xl leading-none">$79</p>
              <p className="font-jakarta text-xs uppercase tracking-[0.16em] text-[#a9c2b5]">per month</p>
              <button className="mt-4 rounded-full bg-[#dce7df] px-6 py-3 font-jakarta text-xs uppercase tracking-[0.18em] text-[#193025] transition hover:bg-[#f4f6ef]">
                Join T4 Canvas
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
