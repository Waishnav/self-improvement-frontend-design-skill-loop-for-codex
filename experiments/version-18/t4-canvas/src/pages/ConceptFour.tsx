import { Link } from 'react-router-dom'

const queueRows = [
  ['Brand campaign moodboards', 'Flux 2', 'Running'],
  ['Social drop variant set', 'gpt-image-1.5', 'Queued'],
  ['Character style transfer', 'Seedream', 'Completed'],
  ['Concept splash burst', 'Nano Banana Pro', 'Running'],
]

export function ConceptFour() {
  return (
    <main className="scanline relative min-h-screen overflow-x-hidden bg-[#050805] px-6 py-8 text-[#b9f9c2] sm:px-10 lg:px-16">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_10%,rgba(34,197,94,0.2),transparent_32%),radial-gradient(circle_at_88%_14%,rgba(132,204,22,0.16),transparent_34%),linear-gradient(180deg,#040604_0%,#060806_100%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.08)_1px,transparent_1px)] bg-[size:34px_34px]" />

      <div className="relative z-10 mx-auto max-w-7xl font-['IBM_Plex_Mono']">
        <header className="mb-14 flex flex-wrap items-center justify-between gap-4 border border-[#3f914e]/45 bg-black/40 px-4 py-3">
          <div>
            <p className="text-[10px] uppercase tracking-[0.2em] text-[#8bd89b]">T4 Canvas</p>
            <p className="text-sm uppercase tracking-[0.15em] text-[#d9ffe0]">Command Grid Interface</p>
          </div>
          <nav className="hidden items-center gap-7 text-[11px] uppercase tracking-[0.15em] text-[#99e4a8] md:flex">
            <a href="#telemetry" className="hover:text-[#d9ffe0]">
              Telemetry
            </a>
            <a href="#automation" className="hover:text-[#d9ffe0]">
              Automation
            </a>
            <a href="#access" className="hover:text-[#d9ffe0]">
              Access
            </a>
          </nav>
          <Link
            to="/"
            className="border border-[#5ab56a]/50 bg-[#0e1b0f]/80 px-3 py-2 text-[11px] uppercase tracking-[0.14em] text-[#b9f9c2] hover:border-[#8fe39d]"
          >
            Concept Gallery
          </Link>
        </header>

        <section className="mb-16 grid gap-5 lg:grid-cols-[1.12fr_0.88fr]">
          <article className="border border-[#4fa460]/45 bg-black/45 p-6">
            <p className="mb-3 text-[11px] uppercase tracking-[0.2em] text-[#8bd89b]">Ops-grade creative engine</p>
            <h1 className="mb-5 max-w-3xl text-4xl font-semibold leading-[1.05] text-[#ddffe4] sm:text-6xl">
              Run four image models like a coordinated system.
            </h1>
            <p className="mb-6 max-w-xl text-sm leading-relaxed text-[#afe8ba]">
              T4 Canvas merges Nano Banana Pro, Flux 2, gpt-image-1.5, and Seedream into one tactical studio. Execute parallel runs,
              compare outputs, and edit finals without switching platforms.
            </p>
            <div className="flex flex-wrap gap-3">
              <button className="border border-[#73cd85] bg-[#17451f]/75 px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#d2ffd9] hover:bg-[#1f5d2a]">
                Deploy Studio Plan
              </button>
              <button className="border border-[#4fa460] bg-transparent px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#b9f9c2] hover:border-[#7fd991]">
                Read Command Docs
              </button>
            </div>
          </article>

          <article className="border border-[#4fa460]/45 bg-[#020402]/90 p-5">
            <p className="mb-3 text-[11px] uppercase tracking-[0.18em] text-[#8bd89b]">live terminal</p>
            <div className="space-y-3 text-xs text-[#9fe7ad]">
              {[
                '$ t4 session init --project launch-capsule',
                '> Linking model lanes: nano-banana-pro, flux-2, gpt-image-1.5, seedream',
                '> Prompt graph synced (12 nodes)',
                '> Generation burst started: 64 frames / lane',
                '> Editor relay armed: inpaint | relight | upscale',
              ].map((line) => (
                <p className="border border-[#2b5e33]/45 bg-[#071008]/80 px-3 py-2" key={line}>
                  {line}
                </p>
              ))}
            </div>
          </article>
        </section>

        <section id="telemetry" className="mb-16 border border-[#4fa460]/45 bg-black/45 p-6">
          <div className="mb-5 flex flex-wrap items-end justify-between gap-4">
            <h2 className="text-2xl font-semibold uppercase tracking-[0.1em] text-[#e2ffe6] sm:text-3xl">Queue Telemetry</h2>
            <p className="max-w-xl text-xs leading-relaxed text-[#afe8ba] sm:text-sm">
              Coordinate generations and edits across all model lanes with deterministic history for every output.
            </p>
          </div>
          <div className="overflow-x-auto border border-[#3b8047]/50">
            <table className="min-w-full border-collapse text-left text-xs sm:text-sm">
              <thead className="bg-[#102714] text-[#d8ffdf]">
                <tr>
                  <th className="px-4 py-3 uppercase tracking-[0.14em]">Job</th>
                  <th className="px-4 py-3 uppercase tracking-[0.14em]">Model</th>
                  <th className="px-4 py-3 uppercase tracking-[0.14em]">Status</th>
                </tr>
              </thead>
              <tbody>
                {queueRows.map(([job, model, status]) => (
                  <tr className="border-t border-[#2f6a3a]/50" key={job}>
                    <td className="px-4 py-3 text-[#ccffd4]">{job}</td>
                    <td className="px-4 py-3 text-[#afe8ba]">{model}</td>
                    <td className="px-4 py-3">
                      <span className="inline-flex border border-[#4fa460]/60 bg-[#14331a]/70 px-2 py-1 text-[11px] uppercase tracking-[0.12em] text-[#ddffe4]">
                        {status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section id="automation" className="mb-16 grid gap-4 md:grid-cols-3">
          {[
            ['Prompt compiler', 'Transforms one master prompt into lane-specific instruction sets and weighting profiles.'],
            ['Edit relay', 'Moves selected frames through inpaint, relight, and upscale without lossy hops.'],
            ['Version ledger', 'Stores every revision with side-by-side diffing for deterministic rollbacks.'],
          ].map(([title, copy]) => (
            <article className="border border-[#4fa460]/45 bg-black/45 p-5" key={title}>
              <p className="mb-2 text-[11px] uppercase tracking-[0.18em] text-[#8bd89b]">module</p>
              <h3 className="mb-3 text-lg font-semibold uppercase tracking-[0.06em] text-[#e2ffe6]">{title}</h3>
              <p className="text-xs leading-relaxed text-[#afe8ba] sm:text-sm">{copy}</p>
            </article>
          ))}
        </section>

        <section id="access" className="border border-[#5cb86d]/55 bg-[#081108]/90 p-7">
          <div className="grid items-end gap-5 lg:grid-cols-[1.08fr_0.92fr]">
            <div>
              <p className="mb-2 text-[11px] uppercase tracking-[0.2em] text-[#8bd89b]">flat subscription control</p>
              <h2 className="mb-3 text-3xl font-semibold uppercase tracking-[0.08em] text-[#e2ffe6] sm:text-4xl">One command: scale creativity.</h2>
              <p className="max-w-xl text-xs leading-relaxed text-[#afe8ba] sm:text-sm">
                One monthly plan unlocks every model lane and editing subsystem. Run large generation queues without variable credit costs.
              </p>
            </div>
            <article className="border border-[#4fa460]/45 bg-black/50 p-5">
              <p className="mb-1 text-[11px] uppercase tracking-[0.16em] text-[#8bd89b]">T4 Canvas Ops Plan</p>
              <p className="text-5xl font-semibold text-[#ddffe4]">$39</p>
              <p className="mb-4 text-xs uppercase tracking-[0.14em] text-[#9de3ab]">monthly flat fee</p>
              <button className="w-full border border-[#73cd85] bg-[#17451f]/80 px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.17em] text-[#d7ffde] hover:bg-[#20662d]">
                Authorize Access
              </button>
            </article>
          </div>
        </section>
      </div>
    </main>
  )
}
