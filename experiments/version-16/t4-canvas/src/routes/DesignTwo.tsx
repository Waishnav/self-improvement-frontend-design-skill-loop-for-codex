import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'

const spotlightTracks = [
  {
    id: 'launch',
    title: 'Launch Campaign',
    note: 'Build launch imagery across social, ads, and hero visuals in one timeline.',
    mood: 'High energy layouts with rapid variant generation.',
  },
  {
    id: 'catalog',
    title: 'Product Catalog',
    note: 'Generate consistent packshots and stylized set scenes at scale.',
    mood: 'Consistency-first pipeline with locked brand motifs.',
  },
  {
    id: 'editorial',
    title: 'Editorial Series',
    note: 'Craft narrative-driven visual stories with controlled tone shifts.',
    mood: 'Art-directed typography and cinematic compositing.',
  },
]

const modelRecipes = [
  {
    id: 'nano',
    name: 'Nano Banana Pro',
    role: 'Rapid concept pass',
    detail: 'Use first for quick breadth and fast composition discovery.',
  },
  {
    id: 'flux',
    name: 'Flux 2',
    role: 'Precision realism',
    detail: 'Best for polished lighting and texture confidence in product scenes.',
  },
  {
    id: 'gpt-image',
    name: 'gpt-image-1.5',
    role: 'Instruction edit pass',
    detail: 'Strong at targeted revisions and controlled refinements per note.',
  },
  {
    id: 'seedream',
    name: 'Seedream',
    role: 'Expressive style layer',
    detail: 'Excellent for posterized moods and stylized final surfaces.',
  },
]

const storyboardModes = [
  {
    id: 'commerce',
    title: 'Commerce',
    lines: ['Hero product frame', '5 sku-focused variants', 'Lifestyle merge set'],
  },
  {
    id: 'brand',
    title: 'Brand Story',
    lines: ['Narrative opener', 'Character scene transitions', 'Closing call-to-action frame'],
  },
  {
    id: 'social',
    title: 'Social Burst',
    lines: ['Vertical poster stack', 'Hook-first thumbnail set', 'Comment-safe remix pack'],
  },
]

const faqs = [
  {
    id: 0,
    question: 'Can I switch models mid-project?',
    answer: 'Yes. Timelines preserve prompt history and masks even when you jump across engines.',
  },
  {
    id: 1,
    question: 'Do edits stay non-destructive?',
    answer: 'Every operation creates a branch. You can revert, compare, and merge results instantly.',
  },
  {
    id: 2,
    question: 'Is there a usage cap?',
    answer: 'The product is flat-fee. Team velocity scales without per-model token metering.',
  },
]

function DesignTwo() {
  const [trackId, setTrackId] = useState(spotlightTracks[1].id)
  const [recipeId, setRecipeId] = useState(modelRecipes[0].id)
  const [storyboardId, setStoryboardId] = useState(storyboardModes[0].id)
  const [seatCount, setSeatCount] = useState(6)
  const [openFaq, setOpenFaq] = useState(0)

  const activeTrack = useMemo(() => spotlightTracks.find((track) => track.id === trackId) ?? spotlightTracks[0], [trackId])
  const activeRecipe = useMemo(() => modelRecipes.find((recipe) => recipe.id === recipeId) ?? modelRecipes[0], [recipeId])
  const activeStoryboard = useMemo(
    () => storyboardModes.find((mode) => mode.id === storyboardId) ?? storyboardModes[0],
    [storyboardId],
  )

  const monthlyTotal = 49 + seatCount * 8

  return (
    <main className="min-h-screen overflow-x-clip bg-[#f7f2ea] px-5 py-8 text-[#1f1b16] sm:px-8 lg:px-14">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8">
        <header className="rounded-[2rem] border border-[#c7b9a8] bg-[#fdf8f2] px-6 py-5 shadow-[0_20px_80px_-40px_rgba(84,52,17,0.35)]">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[#936f43]">T4 Canvas</p>
              <h1 className="font-editorial text-5xl leading-none text-[#20150e] sm:text-6xl">Editorial Atelier</h1>
            </div>
            <Link
              to="/"
              className="rounded-full border border-[#ad8a62] px-5 py-2 text-xs uppercase tracking-[0.18em] text-[#5f3f1f] transition hover:bg-[#ead9c3]"
            >
              Back To Gallery
            </Link>
          </div>
        </header>

        <section className="section-shell border border-[#d7c9b9] bg-[#fff9f2] p-6 lg:p-8">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#8f6a44]">Hero Interaction</p>
              <h2 className="mt-3 font-serif text-5xl leading-[0.95] text-[#24170f] sm:text-6xl">
                A fashion-house take on AI image operations.
              </h2>
              <p className="mt-4 max-w-xl text-base text-[#4c3e32]">
                Blend Nano Banana Pro, Flux 2, gpt-image-1.5, and Seedream into a single editorial command line. One membership. Zero tool switching.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {spotlightTracks.map((track) => (
                  <button
                    key={track.id}
                    type="button"
                    onClick={() => setTrackId(track.id)}
                    className={`rounded-full border px-4 py-2 text-sm transition ${
                      track.id === trackId
                        ? 'border-[#8f6338] bg-[#2d2016] text-[#f9e7d0]'
                        : 'border-[#c9b299] bg-[#f7ede2] text-[#5a4130] hover:bg-[#efdfca]'
                    }`}
                  >
                    {track.title}
                  </button>
                ))}
              </div>

              <div className="mt-6 rounded-2xl border border-[#d1bdab] bg-[#fbf2e8] p-4">
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#846245]">Current Program</p>
                <p className="mt-2 text-xl font-semibold text-[#2c1f14]">{activeTrack.title}</p>
                <p className="mt-2 text-sm text-[#5f4a39]">{activeTrack.note}</p>
                <p className="mt-3 border-l-2 border-[#ab8760] pl-3 text-sm italic text-[#7c5d41]">{activeTrack.mood}</p>
              </div>
            </div>

            <aside className="relative overflow-hidden rounded-[1.75rem] border border-[#d8c4af] bg-[#f4e7d8] p-5">
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#d39d68]/35 blur-2xl" />
              <div className="absolute -bottom-10 -left-10 h-44 w-44 rounded-full bg-[#f2d8ba]/65 blur-2xl" />
              <div className="relative z-10 space-y-4">
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#7f5f42]">Issue 16 Cover</p>
                <div className="rounded-2xl border border-[#bc9d7d] bg-[#231912] p-4 text-[#ffeeda]">
                  <p className="font-serif text-3xl">Prompt, Curated.</p>
                  <p className="mt-2 text-sm text-[#e7cfb4]">All model outputs arranged as contact sheets for fast art direction rounds.</p>
                </div>
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="rounded-xl border border-[#b59170] bg-[#fff3e5] p-3">4 engines synchronized</div>
                  <div className="rounded-xl border border-[#b59170] bg-[#fff3e5] p-3">Unified edit timeline</div>
                  <div className="rounded-xl border border-[#b59170] bg-[#fff3e5] p-3">Style lock presets</div>
                  <div className="rounded-xl border border-[#b59170] bg-[#fff3e5] p-3">Brand-safe exports</div>
                </div>
              </div>
            </aside>
          </div>
        </section>

        <section className="grid gap-5 lg:grid-cols-[1fr_1fr]">
          <article className="section-shell border border-[#d4c2af] bg-[#fffaf4] p-5">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#8d6945]">Model Recipe Board</p>
            <div className="mt-4 grid gap-2 sm:grid-cols-2">
              {modelRecipes.map((recipe) => (
                <button
                  key={recipe.id}
                  type="button"
                  onClick={() => setRecipeId(recipe.id)}
                  className={`rounded-xl border px-3 py-3 text-left transition ${
                    recipe.id === recipeId
                      ? 'border-[#1f1a15] bg-[#2c2118] text-[#fcead5]'
                      : 'border-[#ceb8a0] bg-[#f7ecdf] text-[#4c3b2c] hover:bg-[#efdecb]'
                  }`}
                >
                  <p className="text-sm font-semibold">{recipe.name}</p>
                  <p className="mt-1 text-xs opacity-85">{recipe.role}</p>
                </button>
              ))}
            </div>
            <div className="mt-4 rounded-xl border border-[#ceb8a0] bg-[#f4e5d5] p-4">
              <p className="text-sm text-[#3f3124]">{activeRecipe.detail}</p>
            </div>
          </article>

          <article className="section-shell border border-[#d4c2af] bg-[#fffaf4] p-5">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#8d6945]">Storyboard Switcher</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {storyboardModes.map((mode) => (
                <button
                  key={mode.id}
                  type="button"
                  onClick={() => setStoryboardId(mode.id)}
                  className={`rounded-full px-4 py-2 text-sm transition ${
                    mode.id === storyboardId
                      ? 'bg-[#2e2319] text-[#fde9d0]'
                      : 'border border-[#ccb39a] bg-[#f8ede0] text-[#5b4532] hover:bg-[#efddc9]'
                  }`}
                >
                  {mode.title}
                </button>
              ))}
            </div>
            <ul className="mt-4 space-y-2 text-sm text-[#4d3f32]">
              {activeStoryboard.lines.map((line) => (
                <li key={line} className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#8f663f]" />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </article>
        </section>

        <section className="section-shell border border-[#cfb79e] bg-[#fef7ef] p-6">
          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#856040]">Membership Builder</p>
              <h3 className="mt-2 font-serif text-4xl text-[#24160d]">Flat-fee billing that scales with your team.</h3>
              <p className="mt-2 text-sm text-[#5d4a38]">Drag seats and instantly preview your monthly total. All engines remain unlocked.</p>
              <label className="mt-6 block text-xs uppercase tracking-[0.16em] text-[#7f5c3f]" htmlFor="seatCount">
                Seats: {seatCount}
              </label>
              <input
                id="seatCount"
                type="range"
                min={1}
                max={20}
                value={seatCount}
                onChange={(event) => setSeatCount(Number(event.target.value))}
                className="mt-3 w-full accent-[#7d5128]"
              />
            </div>
            <div className="rounded-2xl border border-[#bc9b7b] bg-[#2a1f16] p-5 text-[#f7e6d2]">
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-[#ebcfae]">Invoice Preview</p>
              <p className="mt-4 text-4xl font-semibold">${monthlyTotal}</p>
              <p className="text-xs uppercase tracking-[0.14em] text-[#d5b89a]">per month</p>
              <ul className="mt-5 space-y-2 text-sm text-[#ead8c4]">
                <li>Unlimited generation across all four models</li>
                <li>Shared review board and approval comments</li>
                <li>Versioned exports in PNG, JPG, and WebP</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section-shell border border-[#ccb49b] bg-[#fff8f1] p-6">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#856040]">Questions</p>
          <div className="mt-4 space-y-3">
            {faqs.map((faq) => (
              <div key={faq.id} className="rounded-2xl border border-[#d5c0aa] bg-[#fdf3e8] p-4">
                <button
                  type="button"
                  onClick={() => setOpenFaq((value) => (value === faq.id ? -1 : faq.id))}
                  className="flex w-full items-center justify-between gap-3 text-left"
                >
                  <span className="text-base font-semibold text-[#2a1e15]">{faq.question}</span>
                  <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#8e6a46]">{openFaq === faq.id ? 'Hide' : 'Open'}</span>
                </button>
                {openFaq === faq.id ? <p className="mt-3 text-sm text-[#554433]">{faq.answer}</p> : null}
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}

export default DesignTwo
