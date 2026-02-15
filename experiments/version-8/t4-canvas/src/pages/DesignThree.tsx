const manifesto = [
  'No credit anxiety.',
  'No model lock-in.',
  'No waiting room UX.',
]

const ribbons = [
  'Prompt Drafting Engine',
  'Cross-Model Scene Memory',
  'Batch Style Mutation',
  'Context-Aware Inpainting',
  'Campaign Ratio Packs',
]

export function DesignThree() {
  return (
    <div className="theme-three min-h-screen overflow-x-clip bg-[#f9f3df] text-black">
      <main className="mx-auto max-w-7xl px-4 pb-28 pt-5 sm:px-8">
        <header className="flex items-center justify-between border-4 border-black bg-[#ffe28a] px-4 py-3">
          <p className="font-[IBM_Plex_Mono] text-xs uppercase tracking-[0.25em]">T4 Canvas Poster Web</p>
          <a
            href="#pricing"
            className="rounded-full border-2 border-black bg-black px-4 py-1 text-xs uppercase tracking-[0.2em] text-[#ffe28a] transition hover:bg-[#222] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            Start Today
          </a>
        </header>

        <section className="mt-4 border-4 border-black bg-[#fff8e9] p-4 sm:p-8">
          <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
            <div>
              <p className="font-[IBM_Plex_Mono] text-xs uppercase tracking-[0.24em]">Typographic Hero</p>
              <h1 className="mt-3 max-w-[10ch] font-[Anton] text-[3rem] uppercase leading-[0.9] sm:text-[5rem]">
                Build wild images at studio speed.
              </h1>
              <p className="mt-4 max-w-xl text-lg text-black/80">
                T4 Canvas fuses Nano Banana Pro, Flux 2, gpt-image-1.5, and Seedream under one flat monthly workflow.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <button className="border-2 border-black bg-black px-5 py-2 font-[IBM_Plex_Mono] text-xs uppercase tracking-[0.18em] text-[#ffe28a] transition hover:bg-[#292929] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">
                  Open The Studio
                </button>
                <button className="border-2 border-black bg-[#f9f3df] px-5 py-2 font-[IBM_Plex_Mono] text-xs uppercase tracking-[0.18em] transition hover:bg-[#f4e8be] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">
                  Watch Workflow
                </button>
              </div>
            </div>

            <div className="space-y-3">
              {manifesto.map((line) => (
                <p
                  key={line}
                  className="kinetic-word border-2 border-black bg-[#ffb347] px-3 py-2 font-[Anton] text-3xl uppercase leading-none sm:text-4xl"
                >
                  {line}
                </p>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-4 grid gap-4 md:grid-cols-3">
          <article className="border-4 border-black bg-[#dbf6ff] p-5">
            <p className="font-[IBM_Plex_Mono] text-xs uppercase tracking-[0.18em]">Frame Block A</p>
            <h2 className="mt-3 font-[Anton] text-3xl uppercase leading-none">Model Handoff</h2>
            <p className="mt-3 text-black/80">Pass one prompt through four engines without dropping your art direction intent.</p>
          </article>

          <article className="border-4 border-black bg-[#ffd3d3] p-5 md:translate-y-6">
            <p className="font-[IBM_Plex_Mono] text-xs uppercase tracking-[0.18em]">Frame Block B</p>
            <h2 className="mt-3 font-[Anton] text-3xl uppercase leading-none">Batch Mutation</h2>
            <p className="mt-3 text-black/80">Spawn layout, grade, and texture variants with controllable randomness.</p>
          </article>

          <article className="border-4 border-black bg-[#d7ffd1] p-5">
            <p className="font-[IBM_Plex_Mono] text-xs uppercase tracking-[0.18em]">Frame Block C</p>
            <h2 className="mt-3 font-[Anton] text-3xl uppercase leading-none">Fast Revision</h2>
            <p className="mt-3 text-black/80">Use gpt-image-1.5 for surgical fixes, then finish style in Seedream.</p>
          </article>
        </section>

        <section className="mt-6 space-y-3 overflow-hidden">
          {ribbons.map((item, index) => (
            <div
              key={item}
              className={`relative border-4 border-black px-4 py-3 font-[Anton] text-2xl uppercase sm:text-3xl ${
                index % 2 === 0 ? 'bg-[#ffed54]' : 'bg-[#ffa875]'
              }`}
            >
              <div className={`ticker-track ${index % 2 === 0 ? 'ticker-left' : 'ticker-right'}`}>{item} • {item} • {item} • {item}</div>
            </div>
          ))}
        </section>

        <section id="pricing" className="mt-6 border-4 border-black bg-black px-5 py-8 text-[#f9f3df] sm:px-8">
          <p className="font-[IBM_Plex_Mono] text-xs uppercase tracking-[0.22em] text-[#ffd95e]">Offer Slab</p>
          <div className="mt-4 grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div>
              <h2 className="max-w-[12ch] font-[Anton] text-5xl uppercase leading-[0.9] sm:text-7xl">One plan. All image power.</h2>
              <p className="mt-3 max-w-xl text-[#efe2c6]">
                Run ideation in Nano Banana Pro, lock structure with Flux 2, patch details in gpt-image-1.5, and style-finish in Seedream.
              </p>
            </div>
            <div className="border-4 border-[#f9f3df] bg-[#121212] p-5">
              <p className="font-[IBM_Plex_Mono] text-xs uppercase tracking-[0.18em]">T4 Studio Membership</p>
              <p className="mt-2 font-[Anton] text-7xl leading-none text-[#ffd95e]">$39</p>
              <p className="font-[IBM_Plex_Mono] text-xs uppercase tracking-[0.2em] text-[#efe2c6]">per month / cancel any time</p>
              <button className="mt-5 w-full border-2 border-[#ffd95e] bg-[#ffd95e] px-4 py-3 font-[IBM_Plex_Mono] text-xs uppercase tracking-[0.22em] text-black transition hover:bg-[#ffe98f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ffd95e]">
                Claim Your Workspace
              </button>
            </div>
          </div>
        </section>

        <footer className="mt-6 border-4 border-black bg-[#ffed54] px-4 py-3 font-[IBM_Plex_Mono] text-xs uppercase tracking-[0.2em]">
          T4 Canvas Tape: Creative Ops Without Model Walls
        </footer>
      </main>
    </div>
  )
}
