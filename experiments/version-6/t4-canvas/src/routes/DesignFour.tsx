const storyChapters = [
  {
    step: 'Scene 01',
    title: 'Brief to visual direction',
    text: 'Drop a loose brief and T4 Canvas proposes structured prompt angles for every model lane.',
    tag: 'Sparse to dense rhythm break',
  },
  {
    step: 'Scene 02',
    title: 'Model choreography',
    text: 'Nano Banana Pro handles realism while Flux 2 and Seedream branch into stylized campaign variants.',
    tag: 'Sticky chapter reveal',
  },
  {
    step: 'Scene 03',
    title: 'Edit loop in context',
    text: 'Mask, repaint, and upscale without leaving the project timeline, then pin approved frames.',
    tag: 'Text-led to media-led break',
  },
  {
    step: 'Scene 04',
    title: 'Campaign handoff',
    text: 'Deliver production-ready image sets for socials, landing pages, and paid ad systems.',
    tag: 'Light to dark transition',
  },
]

const metrics = [
  { label: 'Approved visuals per week', value: '1,140+' },
  { label: 'Average revision rounds', value: '2.1' },
  { label: 'Team members collaborating', value: '32' },
  { label: 'Monthly creative spend saved', value: '48%' },
]

export function DesignFour() {
  return (
    <main className="font-story-body overflow-x-hidden bg-[#f7f2ea] pt-24 text-[#1f1b17]">
      <section className="relative min-h-[78vh] overflow-hidden border-b border-[#3f2d1f33] bg-[#2f241f] text-[#f8f1e7]">
        <div className="absolute -left-16 top-20 h-72 w-72 rounded-full bg-[#f59e0b3d] blur-3xl" />
        <div className="absolute -right-8 bottom-6 h-64 w-64 rounded-full bg-[#fb718566] blur-3xl" />
        <div className="relative mx-auto grid max-w-6xl gap-10 px-6 pb-20 pt-28 lg:grid-cols-[1fr_0.95fr] lg:items-end">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-[#fcd34d]">G8 / Story Scroll</p>
            <h1 className="font-story-display mt-4 max-w-xl text-5xl leading-[0.92] sm:text-7xl">Tell a campaign story before pixels render.</h1>
            <p className="mt-5 max-w-xl text-base text-[#e7d7c5] sm:text-lg">
              T4 Canvas turns a creative direction into staged visual scenes across four image engines.
            </p>
          </div>

          <article className="rounded-3xl border border-white/20 bg-[#ffffff1f] p-6 backdrop-blur-sm">
            <p className="text-xs uppercase tracking-[0.2em] text-[#fef3c7]">Hero Scene Control</p>
            <p className="mt-3 text-sm text-[#fef7ee]">
              Set tone, audience, and campaign goal. The studio composes style paths for Nano Banana Pro, Flux 2,
              gpt-image-1.5, and Seedream automatically.
            </p>
            <div className="mt-5 h-40 rounded-2xl [background:linear-gradient(130deg,#f59e0b,#ef4444,#1d4ed8)]" />
          </article>
        </div>
      </section>

      <section className="border-b border-[#3f2d1f2f] bg-[#f7f2ea] py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-[0.95fr_1.1fr]">
          <aside className="lg:sticky lg:top-24 lg:h-[calc(100vh-8rem)]">
            <article className="rounded-3xl border border-[#3f2d1f33] bg-[#fff9ee] p-6 shadow-xl shadow-[#3f2d1f1f]">
              <p className="text-xs uppercase tracking-[0.2em] text-[#7c2d12]">Sticky Narrative Rail</p>
              <h2 className="font-story-display mt-3 text-4xl leading-[0.92]">A scroll-built storyboard.</h2>
              <p className="mt-4 text-sm text-[#5f5147]">
                Each chapter reframes the same campaign objective with a new layout rhythm and model emphasis.
              </p>
            </article>
          </aside>

          <div className="space-y-12">
            {storyChapters.map((chapter) => (
              <article
                key={chapter.step}
                className="min-h-64 rounded-3xl border border-[#3f2d1f30] bg-[#fffdf8] p-6 shadow-lg shadow-[#3f2d1f14]"
              >
                <p className="text-xs uppercase tracking-[0.2em] text-[#b45309]">{chapter.step}</p>
                <h3 className="font-story-display mt-3 text-4xl leading-[0.94] text-[#201612]">{chapter.title}</h3>
                <p className="mt-4 max-w-xl text-base text-[#5f5147]">{chapter.text}</p>
                <p className="mt-6 inline-flex rounded-full border border-[#b4530933] bg-[#fef3c733] px-3 py-1 text-[10px] uppercase tracking-[0.16em] text-[#92400e]">
                  {chapter.tag}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#131313] py-20 text-[#f5f5f4]">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
            <h2 className="font-story-display text-4xl leading-[0.95]">Key Metrics Board</h2>
            <p className="text-xs uppercase tracking-[0.2em] text-[#d6d3d1]">Tracked across active teams</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {metrics.map((metric) => (
              <article key={metric.label} className="rounded-2xl border border-white/15 bg-white/5 p-5">
                <p className="text-xs uppercase tracking-[0.2em] text-[#d6d3d1]">{metric.label}</p>
                <p className="font-story-display mt-3 text-4xl leading-none text-white">{metric.value}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f59e0b] py-16 text-[#2f241f]">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-6 px-6">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-[#78350f]">Offer Reveal</p>
            <h2 className="font-story-display mt-2 text-5xl leading-[0.9]">One membership. Endless campaign scenes.</h2>
          </div>
          <button
            type="button"
            className="rounded-full border border-[#78350f55] bg-[#2f241f] px-6 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#fff7ed] transition hover:-translate-y-0.5 hover:bg-black"
          >
            Start T4 Canvas
          </button>
        </div>
      </section>

      <footer className="border-t border-[#3f2d1f33] bg-[#f7f2ea] py-8">
        <div className="mx-auto max-w-6xl px-6 text-xs uppercase tracking-[0.2em] text-[#7c6d61]">
          Story-driven image generation for teams who ship on schedule.
        </div>
      </footer>
    </main>
  )
}
