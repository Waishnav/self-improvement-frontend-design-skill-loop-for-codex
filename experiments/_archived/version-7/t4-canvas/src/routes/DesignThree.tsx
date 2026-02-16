import { useEffect, useRef, useState } from 'react'

const chapters = [
  {
    id: 'chapter-1',
    title: 'Draft the narrative frame',
    note: 'Start with story beats and visual tone, then branch prompts across the model stack.',
    signal: 'Scene integrity: 96%',
  },
  {
    id: 'chapter-2',
    title: 'Cross-model continuity pass',
    note: 'Preserve characters, lighting, and composition while switching engines for speed or texture.',
    signal: 'Consistency drift: 1.8%',
  },
  {
    id: 'chapter-3',
    title: 'Edit and ship inside one loop',
    note: 'Use inpaint and relight controls, then export campaign sets with deterministic variants.',
    signal: 'Revision velocity: 3.2x',
  },
]

const metricBoard = [
  { label: 'Weekly campaigns produced', value: '184' },
  { label: 'Average team seats', value: '11' },
  { label: 'Brand match confidence', value: '92/100' },
]

export function DesignThree() {
  const [activeChapter, setActiveChapter] = useState(0)
  const chapterRefs = useRef<Array<HTMLElement | null>>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return
          }

          const index = Number((entry.target as HTMLElement).dataset.index)
          if (!Number.isNaN(index)) {
            setActiveChapter(index)
          }
        })
      },
      {
        threshold: 0.45,
        rootMargin: '-10% 0px -35% 0px',
      },
    )

    chapterRefs.current.forEach((element) => {
      if (element) {
        observer.observe(element)
      }
    })

    return () => observer.disconnect()
  }, [])

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f4efe7] text-[#1f1a17] [font-family:'Source Sans 3',sans-serif]">
      <section className="relative mx-auto grid max-w-7xl gap-10 px-6 pb-16 pt-28 lg:grid-cols-12">
        <div className="animate-rise lg:col-span-6">
          <p className="text-xs uppercase tracking-[0.24em] text-[#7c4a2d]">T4 Canvas / Story Split Studio</p>
          <h1 className="mt-5 max-w-xl text-5xl leading-[0.94] tracking-[-0.03em] text-[#231916] [font-family:'Cormorant Garamond',serif] sm:text-6xl lg:text-7xl">
            Build image stories without leaving your timeline.
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-[#5f4d42]">
            Move from rough scene prompts to production-grade campaigns across Nano Banana Pro, Flux 2, gpt-image-1.5, and Seedream.
          </p>
          <button className="mt-9 rounded-full border border-[#7c4a2d]/30 bg-[#2f1f17] px-7 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#f8ede0] transition duration-220 hover:bg-[#442a1d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7c4a2d]">
            Start Narrative Session
          </button>
        </div>

        <div className="animate-rise-delay relative lg:col-span-6">
          <div className="rounded-[2.4rem] border border-[#7c4a2d]/18 bg-[#f9f5ef] p-6 shadow-[0_24px_60px_rgba(35,25,22,0.1)]">
            <p className="text-xs uppercase tracking-[0.2em] text-[#7c4a2d]">Current chapter</p>
            <p className="mt-3 text-3xl leading-tight text-[#231916] [font-family:'Cormorant Garamond',serif]">
              {chapters[activeChapter].title}
            </p>
            <p className="mt-3 text-sm text-[#6a5649]">{chapters[activeChapter].note}</p>
            <p className="mt-4 inline-flex rounded-full border border-[#7c4a2d]/25 bg-[#f1e8db] px-3 py-1 text-xs uppercase tracking-[0.16em] text-[#6f3f25]">
              {chapters[activeChapter].signal}
            </p>
          </div>
          <div className="absolute -bottom-7 -left-6 h-24 w-28 rounded-[1.8rem] border border-[#7c4a2d]/25 bg-[#efe1d0] p-3 text-xs uppercase tracking-[0.2em] text-[#5f3c29]">
            Scroll to advance
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-6 pb-20 lg:grid-cols-12">
        <aside className="lg:col-span-4">
          <div className="sticky top-24 rounded-3xl border border-[#7c4a2d]/20 bg-[#fbf7f1] p-6">
            <p className="text-xs uppercase tracking-[0.2em] text-[#7c4a2d]">Story progress</p>
            <div className="mt-5 space-y-4">
              {chapters.map((chapter, index) => (
                <article
                  key={chapter.id}
                  className={`rounded-2xl border p-4 transition duration-220 ${
                    index === activeChapter
                      ? 'border-[#7c4a2d]/35 bg-[#f2e7da]'
                      : 'border-[#7c4a2d]/15 bg-white/65'
                  }`}
                >
                  <p className="text-xs uppercase tracking-[0.2em] text-[#7c4a2d]">Chapter {index + 1}</p>
                  <p className="mt-2 text-xl leading-tight text-[#2e1e19] [font-family:'Cormorant Garamond',serif]">{chapter.title}</p>
                </article>
              ))}
            </div>
          </div>
        </aside>

        <div className="space-y-12 lg:col-span-8">
          {chapters.map((chapter, index) => (
            <section
              key={chapter.id}
              ref={(element) => {
                chapterRefs.current[index] = element
              }}
              data-index={index}
              className="relative min-h-[70vh] rounded-[2rem] border border-[#7c4a2d]/22 bg-[#f9f4ec] p-8 shadow-[0_24px_50px_rgba(60,40,24,0.08)]"
            >
              <div className="absolute -right-5 top-8 h-14 w-14 rounded-full border border-[#7c4a2d]/25 bg-[#f2e4d3]" />
              <p className="text-xs uppercase tracking-[0.2em] text-[#7c4a2d]">Scene {index + 1}</p>
              <h2 className="mt-4 text-4xl leading-tight text-[#231916] [font-family:'Cormorant Garamond',serif]">
                {chapter.title}
              </h2>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-[#5e4d42]">{chapter.note}</p>
              <div className="mt-8 grid max-w-2xl gap-4 sm:grid-cols-2">
                <article className="rounded-2xl border border-[#7c4a2d]/20 bg-[#fff9f2] p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-[#845035]">Model blend</p>
                  <p className="mt-2 text-sm text-[#604d42]">Nano Banana Pro + gpt-image-1.5 for realistic composition and brand-safe copy framing.</p>
                </article>
                <article className="rounded-2xl border border-[#7c4a2d]/20 bg-[#fff9f2] p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-[#845035]">Lock signal</p>
                  <p className="mt-2 text-sm text-[#604d42]">{chapter.signal}</p>
                </article>
              </div>
            </section>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#2d1e18] px-6 py-20 text-[#f8ede2]">
        <div className="absolute inset-y-0 right-0 w-[40%] rotate-3 bg-[#6b3d2a]/35" />
        <div className="relative mx-auto grid max-w-7xl gap-6 lg:grid-cols-3">
          {metricBoard.map((metric) => (
            <article key={metric.label} className="rounded-3xl border border-[#f0d7bf]/20 bg-[#34231d]/90 p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-[#deb894]">{metric.label}</p>
              <p className="mt-4 text-4xl text-[#fff1e2] [font-family:'Cormorant Garamond',serif]">{metric.value}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto flex max-w-7xl flex-col gap-7 px-6 py-16 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-xl">
          <p className="text-xs uppercase tracking-[0.2em] text-[#7c4a2d]">Membership</p>
          <h2 className="mt-3 text-4xl leading-tight text-[#231916] [font-family:'Cormorant Garamond',serif]">
            One studio fee for the full storytelling stack.
          </h2>
        </div>
        <div className="rounded-2xl border border-[#7c4a2d]/25 bg-[#fcf8f1] px-7 py-6 text-right">
          <p className="text-xs uppercase tracking-[0.2em] text-[#7c4a2d]">Power creator</p>
          <p className="mt-2 text-5xl text-[#231916] [font-family:'Cormorant Garamond',serif]">$39</p>
          <p className="text-sm text-[#5f4d42]">Monthly, includes all four models.</p>
        </div>
      </section>
    </main>
  )
}
