import { Link } from 'react-router-dom'

const matrix = [
  {
    model: 'Nano Banana Pro',
    use: 'rapid campaign ideation',
    speed: 'instant',
  },
  {
    model: 'Flux 2',
    use: 'high-detail renders',
    speed: 'high fidelity',
  },
  {
    model: 'gpt-image-1.5',
    use: 'text-directed edits',
    speed: 'surgical',
  },
  {
    model: 'Seedream',
    use: 'variant expansion',
    speed: 'elastic',
  },
]

export function DesignFour() {
  return (
    <main className="min-h-screen bg-[#f1efdd] text-[#10100d]">
      <header className="section-wrap py-7">
        <div className="flex flex-wrap items-center justify-between gap-3 border-4 border-[#10100d] bg-[#f1efdd] px-4 py-3">
          <Link to="/" className="font-ibm-mono text-xs uppercase tracking-[0.2em] text-[#10100d]">Concept Index</Link>
          <p className="font-bebas text-3xl leading-none tracking-[0.08em]">T4 Canvas</p>
          <button className="border-2 border-[#10100d] bg-[#d8ff41] px-4 py-2 font-ibm-mono text-[11px] uppercase tracking-[0.18em] transition hover:bg-[#c2ec26]">
            Start membership
          </button>
        </div>
      </header>

      <section className="section-wrap pb-14 pt-4">
        <div className="grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="border-4 border-[#10100d] bg-[#10100d] p-6 text-[#f1efdd] sm:p-8">
            <p className="font-ibm-mono text-xs uppercase tracking-[0.26em] text-[#d8ff41]">Brutalist Grid</p>
            <h1 className="mt-4 font-bebas text-[3.3rem] leading-[0.9] tracking-[0.02em] sm:text-[5rem] lg:text-[6.2rem]">
              STOP APP HOPPING. RUN EVERY MODEL HERE.
            </h1>
            <p className="mt-4 max-w-xl font-ibm-mono text-sm leading-relaxed text-[#dbd9c6]">
              Nano Banana Pro, Flux 2, gpt-image-1.5, and Seedream in one command-heavy studio. Flat monthly pricing. Zero credit math.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <button className="bg-[#d8ff41] px-5 py-3 font-ibm-mono text-[11px] uppercase tracking-[0.18em] text-[#11110d] transition hover:bg-[#c6eb35]">
                Enter control panel
              </button>
              <button className="border border-[#f1efdd] px-5 py-3 font-ibm-mono text-[11px] uppercase tracking-[0.18em] text-[#f1efdd] transition hover:bg-[#f1efdd] hover:text-[#11110d]">
                View stack
              </button>
            </div>
          </div>

          <div className="grid gap-4">
            <div className="border-4 border-[#10100d] bg-[#d8ff41] p-5">
              <p className="font-ibm-mono text-xs uppercase tracking-[0.18em]">Flat Plan</p>
              <p className="mt-2 font-bebas text-6xl leading-none">$79</p>
              <p className="font-ibm-mono text-xs uppercase tracking-[0.15em]">Per month, all engines unlocked</p>
            </div>
            <div className="border-4 border-[#10100d] bg-[#f1efdd] p-5">
              <p className="font-ibm-mono text-xs uppercase tracking-[0.18em]">Output Velocity</p>
              <p className="mt-2 font-bebas text-5xl leading-none">3.2x</p>
              <p className="mt-1 font-ibm-mono text-xs uppercase tracking-[0.14em]">More approved selects per sprint</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-wrap pb-14">
        <div className="border-4 border-[#10100d] bg-[#f8f6e8] p-5 sm:p-7">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b-2 border-[#10100d] pb-4">
            <h2 className="font-bebas text-4xl tracking-[0.04em]">MODEL MATRIX</h2>
            <p className="font-ibm-mono text-[11px] uppercase tracking-[0.2em]">Fixed monthly access across all lanes</p>
          </div>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {matrix.map((item) => (
              <article key={item.model} className="border-2 border-[#10100d] bg-[#f1efdd] p-4">
                <p className="font-bebas text-3xl leading-none tracking-[0.03em]">{item.model}</p>
                <p className="mt-3 font-ibm-mono text-[11px] uppercase tracking-[0.16em] text-[#4d4d41]">Use case: {item.use}</p>
                <p className="mt-1 font-ibm-mono text-[11px] uppercase tracking-[0.16em] text-[#4d4d41]">Response profile: {item.speed}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-wrap pb-14">
        <div className="grid gap-4 lg:grid-cols-[0.95fr_1.05fr]">
          <article className="border-4 border-[#10100d] bg-[#10100d] p-6 text-[#f1efdd]">
            <p className="font-bebas text-4xl leading-none tracking-[0.04em]">OPERATIONS BOARD</p>
            <ul className="mt-5 space-y-4">
              <li className="font-ibm-mono text-sm leading-relaxed">PROMPT STACKING: merge refs, constraints, and negative controls in one panel.</li>
              <li className="font-ibm-mono text-sm leading-relaxed">LANE SPLIT: dispatch to all four models with predefined quality profiles.</li>
              <li className="font-ibm-mono text-sm leading-relaxed">EDIT PASS: run targeted replacements and texture fixes per region.</li>
              <li className="font-ibm-mono text-sm leading-relaxed">EXPORT: deliver approved renders with version notes attached.</li>
            </ul>
          </article>

          <article className="border-4 border-[#10100d] bg-[#d8ff41] p-6 sm:p-8">
            <p className="font-ibm-mono text-[11px] uppercase tracking-[0.2em] text-[#22220f]">Team result</p>
            <h3 className="mt-3 font-bebas text-[3rem] leading-[0.88] tracking-[0.02em] sm:text-[4rem]">
              "T4 Canvas replaced six disconnected tools in two weeks."
            </h3>
            <p className="mt-3 font-ibm-mono text-xs uppercase tracking-[0.16em] text-[#2f2f1a]">Rhea Lin • Creative Ops Lead • Vortex Studio</p>
          </article>
        </div>
      </section>

      <section className="section-wrap pb-20">
        <div className="border-4 border-[#10100d] bg-[#10100d] px-5 py-8 text-[#f1efdd] sm:px-8">
          <div className="grid gap-5 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="font-ibm-mono text-[11px] uppercase tracking-[0.22em] text-[#d8ff41]">Close-out</p>
              <h2 className="mt-3 font-bebas text-5xl leading-[0.9] tracking-[0.03em] sm:text-6xl">RUN IMAGE PRODUCTION LIKE A CONTROL ROOM.</h2>
            </div>
            <button className="bg-[#d8ff41] px-7 py-3 font-ibm-mono text-[11px] uppercase tracking-[0.19em] text-[#10100d] transition hover:bg-[#c2eb2a]">
              Activate plan
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}
