const chapters = [
  {
    title: 'Model direction with editorial precision',
    lead: 'Build a single narrative and hand exact style intent to every model without drifting tone.',
    bullets: [
      'Reusable direction cards for campaigns and product stories',
      'Prompt variants with locked palette and composition notes',
      'Per-model voice guides for consistent outputs under pressure',
    ],
  },
  {
    title: 'A slower interface for sharper decisions',
    lead: 'Cut visual noise and compare outputs in calm, side-by-side layouts designed for critique sessions.',
    bullets: [
      'Minimal compare rails with image-first hierarchy',
      'Instant annotation layers for creative review',
      'Approval mode for clients that need clarity, not controls',
    ],
  },
  {
    title: 'One membership for every creative seat',
    lead: 'No extra model licenses, no purchasing puzzles, no fragmented workflows across teams.',
    bullets: [
      'Flat monthly fee with all engines unlocked',
      'Shared workspace roles for strategists, designers, and editors',
      'Export-ready packages with revision history attached',
    ],
  },
]

const modelRows = [
  ['Nano Banana Pro', 'Cinematic portrait direction', 'High'],
  ['Flux 2', 'Product realism and lighting', 'Very High'],
  ['gpt-image-1.5', 'Fast narrative sketching', 'High'],
  ['Seedream', 'Art-forward moodboards', 'Very High'],
]

export function ConceptTwo() {
  return (
    <main className="bg-[#f2ede3] text-[#18140f]">
      <section className="relative overflow-hidden px-6 pb-20 pt-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_88%_14%,rgba(159,92,47,0.12),transparent_36%),radial-gradient(circle_at_16%_88%,rgba(74,116,100,0.12),transparent_42%)]" />
        <div className="relative mx-auto max-w-5xl text-center">
          <p className="font-ibm text-xs tracking-[0.28em] text-[#6d5a47]">T4 CANVAS JOURNAL</p>
          <h1 className="mt-5 font-cormorant text-5xl leading-[0.9] text-balance sm:text-6xl md:text-7xl">
            The image studio for teams with taste.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl font-ibm text-base text-[#42362b] sm:text-lg">
            Direct Nano Banana Pro, Flux 2, gpt-image-1.5, and Seedream in a single elegant workspace with one predictable monthly fee.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <button className="rounded-full bg-[#18140f] px-7 py-3 font-ibm text-xs font-semibold tracking-[0.15em] text-[#f5efe5] transition hover:bg-[#2b2219] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#18140f]">
              REQUEST INVITE
            </button>
            <button className="rounded-full border border-[#18140f]/30 px-7 py-3 font-ibm text-xs font-semibold tracking-[0.15em] text-[#18140f] transition hover:border-[#18140f]/50 hover:bg-[#18140f]/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#18140f]">
              READ EDITION ONE
            </button>
          </div>
        </div>
      </section>

      <section className="border-y border-[#18140f]/15 bg-[#f7f2ea]">
        <div className="mx-auto max-w-6xl px-6 py-4">
          <p className="font-ibm text-xs tracking-[0.22em] text-[#5e4c3c]">
            CREATIVE DIRECTION. MODEL COMPARISON. EDIT APPROVAL. DELIVERY PIPELINE.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10">
        {chapters.map((chapter, index) => (
          <article
            key={chapter.title}
            className="grid gap-8 border-b border-[#18140f]/15 py-12 lg:grid-cols-[270px_minmax(0,1fr)]"
          >
            <div className="self-start lg:sticky lg:top-28">
              <p className="font-ibm text-xs tracking-[0.18em] text-[#7a6652]">CHAPTER {index + 1}</p>
              <h2 className="mt-4 font-cormorant text-4xl leading-[0.95] sm:text-[2.7rem]">{chapter.title}</h2>
            </div>

            <div className="space-y-6">
              <p className="max-w-2xl font-ibm text-lg leading-relaxed text-[#2e241b]">{chapter.lead}</p>
              <div className="grid gap-3 sm:grid-cols-3">
                {chapter.bullets.map((bullet) => (
                  <div key={bullet} className="rounded-2xl border border-[#18140f]/12 bg-white/70 p-4">
                    <p className="font-ibm text-sm leading-relaxed text-[#2e241b]">{bullet}</p>
                  </div>
                ))}
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className="mx-auto max-w-6xl px-6 py-18">
        <div className="overflow-hidden rounded-[2rem] border border-[#18140f]/15 bg-white shadow-[0_18px_40px_rgba(24,20,15,0.08)]">
          <div className="border-b border-[#18140f]/12 px-6 py-5 font-ibm text-xs tracking-[0.2em] text-[#75624d]">
            MODEL BRIEFING TABLE
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse text-left">
              <thead className="bg-[#f7f2ea] font-ibm text-xs tracking-[0.14em] text-[#705d49]">
                <tr>
                  <th className="px-6 py-4">ENGINE</th>
                  <th className="px-6 py-4">BEST FOR</th>
                  <th className="px-6 py-4">STYLE CONTROL</th>
                </tr>
              </thead>
              <tbody>
                {modelRows.map((row) => (
                  <tr key={row[0]} className="border-t border-[#18140f]/10 font-ibm text-sm text-[#2f251b]">
                    <td className="px-6 py-4 font-semibold">{row[0]}</td>
                    <td className="px-6 py-4">{row[1]}</td>
                    <td className="px-6 py-4">{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="bg-[#19120d] px-6 py-16 text-[#f8f1e7]">
        <div className="mx-auto max-w-5xl text-center">
          <p className="font-ibm text-xs tracking-[0.24em] text-[#cab9a4]">MEMBERSHIP OFFER</p>
          <h3 className="mt-4 font-cormorant text-5xl leading-none sm:text-6xl">One fee. Every image engine.</h3>
          <p className="mx-auto mt-5 max-w-2xl font-ibm text-sm text-[#d9cdbd] sm:text-base">
            Unlock the full T4 Canvas studio for $39 monthly, including advanced editing, team workspaces, and unlimited concept iterations.
          </p>
          <button className="mt-8 rounded-full bg-[#f6ecdf] px-8 py-3 font-ibm text-xs font-semibold tracking-[0.16em] text-[#1c140f] transition hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f6ecdf]">
            ENTER THE STUDIO
          </button>
        </div>
      </section>

      <footer className="border-t border-[#f6ecdf]/15 bg-[#19120d] px-6 py-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 font-ibm text-xs tracking-[0.12em] text-[#baa58f] sm:flex-row sm:items-center sm:justify-between">
          <p>T4 CANVAS</p>
          <p>For creative directors, image researchers, and AI-native studios.</p>
        </div>
      </footer>
    </main>
  )
}
