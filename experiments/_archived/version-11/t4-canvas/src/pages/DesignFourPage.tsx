import { Link } from 'react-router-dom'

const storyScenes = [
  {
    id: 'Scene 01',
    title: 'Ingest the Brief',
    body: 'Drop moodboards, references, and style intents once. The studio maps every artifact to a shared workspace.',
    tone: 'from-[#fde8df] to-[#eec7d2]',
  },
  {
    id: 'Scene 02',
    title: 'Cross-Model Burst',
    body: 'Push the same creative ask through Nano Banana Pro, Flux 2, gpt-image-1.5, and Seedream simultaneously.',
    tone: 'from-[#d6d9ff] to-[#b1bbff]',
  },
  {
    id: 'Scene 03',
    title: 'Narrative Refinement',
    body: 'Annotate, branch, and refine imagery in narrative order, so campaigns stay cohesive across channels.',
    tone: 'from-[#d7f5ef] to-[#ade6d6]',
  },
  {
    id: 'Scene 04',
    title: 'Ship at Scale',
    body: 'Finalize outputs with unified export presets while staying under one predictable monthly fee.',
    tone: 'from-[#ffefb8] to-[#ffd38a]',
  },
]

export function DesignFourPage() {
  return (
    <div className="min-h-screen bg-[#fffaf6] text-[#2a1d24]" style={{ fontFamily: 'Manrope, sans-serif' }}>
      <header className="border-b border-[#2a1d24]/15 px-6 py-6 sm:px-10">
        <div className="mx-auto flex max-w-[94rem] flex-wrap items-center justify-between gap-3">
          <Link
            to="/"
            className="rounded-full border border-[#2a1d24]/30 px-4 py-2 text-xs uppercase tracking-[0.28em] text-[#2a1d24]/70"
          >
            T4 Canvas
          </Link>
          <p className="text-xs uppercase tracking-[0.28em] text-[#2a1d24]/60">Narrative Spine</p>
        </div>
      </header>

      <main className="mx-auto max-w-[94rem] px-6 pb-24 pt-10 sm:px-10">
        <section className="mb-10 grid gap-8 lg:grid-cols-[0.38fr_0.62fr]">
          <aside className="lg:sticky lg:top-8 lg:self-start">
            <p className="text-[11px] uppercase tracking-[0.3em] text-[#6f4e5e]">Story Spine</p>
            <h1 className="mt-4 text-5xl leading-[0.9] sm:text-6xl" style={{ fontFamily: 'Fraunces, serif' }}>
              Build image campaigns as one continuous narrative.
            </h1>
            <p className="mt-4 max-w-md text-base leading-relaxed text-[#4c3541]">
              T4 Canvas is a sequence-first studio: four leading models, one timeline, one monthly operating model.
            </p>
            <div className="mt-8 space-y-3 border-l border-[#2a1d24]/20 pl-4">
              {storyScenes.map((scene) => (
                <p key={scene.id} className="text-xs uppercase tracking-[0.22em] text-[#6e5060]">
                  {scene.id}
                </p>
              ))}
            </div>
          </aside>

          <div className="space-y-8">
            {storyScenes.map((scene, idx) => (
              <article
                key={scene.id}
                className="relative overflow-hidden rounded-[2.2rem] border border-[#2a1d24]/15 bg-white p-8"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${scene.tone} opacity-70`} />
                <div className="relative">
                  <p className="text-[11px] uppercase tracking-[0.3em] text-[#5b3f4d]">{scene.id}</p>
                  <h2 className="mt-4 text-4xl leading-[0.94] text-[#281922]" style={{ fontFamily: 'Fraunces, serif' }}>
                    {scene.title}
                  </h2>
                  <p className="mt-4 max-w-xl text-base leading-relaxed text-[#412a36]">{scene.body}</p>
                </div>

                {idx < storyScenes.length - 1 && (
                  <div
                    className="pointer-events-none absolute -bottom-12 left-[6%] right-[6%] h-16 bg-[#fffaf6]"
                    style={{ clipPath: 'polygon(0 0, 100% 0, 88% 100%, 12% 100%)' }}
                  />
                )}
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-[2.4rem] border border-[#2a1d24]/15 bg-[#2a1d24] px-8 py-12 text-[#f7e9ef] sm:px-12">
          <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.26em] text-[#f7e9ef]/70">Model Spine</p>
              <h2 className="mt-3 text-4xl leading-tight sm:text-5xl" style={{ fontFamily: 'Fraunces, serif' }}>
                Nano Banana Pro, Flux 2, gpt-image-1.5, and Seedream work from one evolving plotline.
              </h2>
            </div>
            <div className="space-y-3 text-sm uppercase tracking-[0.2em] text-[#f7e9ef]/75">
              <p className="rounded-xl border border-[#f7e9ef]/25 px-4 py-3">Unified sequencing and shot continuity</p>
              <p className="rounded-xl border border-[#f7e9ef]/25 px-4 py-3">Shared approval stages across teams</p>
              <p className="rounded-xl border border-[#f7e9ef]/25 px-4 py-3">Single monthly plan for all usage</p>
            </div>
          </div>
        </section>

        <Link
          to="/"
          className="mt-10 inline-flex rounded-full border border-[#2a1d24]/30 px-5 py-3 text-xs uppercase tracking-[0.25em] text-[#2a1d24]/70 transition hover:bg-[#2a1d24] hover:text-[#fffaf6]"
        >
          Return to concept index
        </Link>
      </main>
    </div>
  )
}
