import { type CSSProperties, useState } from 'react'
import { Link } from 'react-router-dom'

const studioModels = ['Nano Banana Pro', 'Flux 2', 'gpt-image-1.5', 'Seedream']

const designEntries = [
  {
    title: 'Poster Orbit',
    subtitle: 'Swiss exhibition style with kinetic color orbit',
    route: '/1',
    palette: 'Warm editorial print',
  },
  {
    title: 'Command Deck',
    subtitle: 'Mission control dashboard voice with scanline atmosphere',
    route: '/2',
    palette: 'Dark phosphor terminal',
  },
  {
    title: 'Issue Zero',
    subtitle: 'Luxury magazine spread with expressive typography pacing',
    route: '/3',
    palette: 'Soft cream editorial',
  },
  {
    title: 'Blueprint Atlas',
    subtitle: 'Technical drawing language with measurable precision',
    route: '/4',
    palette: 'Monochrome cobalt linework',
  },
  {
    title: 'Cut + Assemble',
    subtitle: 'Art-school collage with playful composition friction',
    route: '/5',
    palette: 'High-contrast print collage',
  },
]

function StudioNav({ title, tone }: { title: string; tone: string }) {
  return (
    <header className="mx-auto flex w-full max-w-[1260px] items-center justify-between px-6 py-6 md:px-10">
      <Link
        to="/"
        className="font-['Work_Sans'] text-sm tracking-[0.14em] text-[var(--muted)] transition hover:text-[var(--text)]"
      >
        T4 CANVAS
      </Link>
      <p className="hidden font-['Work_Sans'] text-xs uppercase tracking-[0.2em] text-[var(--muted)] md:block">{tone}</p>
      <span className="font-['Work_Sans'] text-sm text-[var(--text)]">{title}</span>
    </header>
  )
}

export function HomePage() {
  return (
    <main
      className="min-h-screen bg-[var(--bg)] px-6 py-10 text-[var(--text)] md:px-10"
      style={
        {
          '--bg': '#f0ece3',
          '--surface': '#fbf7ef',
          '--text': '#191512',
          '--muted': '#796f62',
          '--accent': '#ad4b2d',
          '--accent-soft': '#e9d4c4',
        } as CSSProperties
      }
    >
      <div className="mx-auto max-w-[1300px]">
        <div className="fade-rise">
          <p className="font-['Source_Sans_3'] text-xs uppercase tracking-[0.2em] text-[var(--muted)]">Image Generation Studio</p>
          <h1 className="mt-5 max-w-4xl font-['Bebas_Neue'] text-[clamp(3.6rem,11vw,8.8rem)] leading-[0.9] tracking-tight">
            T4 <span className="text-[var(--accent)]">Canvas</span>
          </h1>
          <p className="mt-4 max-w-2xl font-['Work_Sans'] text-lg text-[var(--muted)]">
            One monthly fee. Four elite image models. Five radically different homepage directions.
          </p>
        </div>

        <section className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {designEntries.map((entry, index) => (
            <article
              key={entry.title}
              className={`fade-rise flex min-h-[240px] flex-col justify-between rounded-3xl border border-[var(--accent-soft)] bg-[var(--surface)] p-7 delay-${(index % 3) + 1}`}
            >
              <div>
                <p className="font-['Source_Sans_3'] text-xs uppercase tracking-[0.16em] text-[var(--muted)]">{entry.palette}</p>
                <h2 className="mt-3 font-['Bebas_Neue'] text-5xl leading-none tracking-tight">{entry.title}</h2>
                <p className="mt-3 font-['Work_Sans'] text-sm text-[var(--muted)]">{entry.subtitle}</p>
              </div>
              <Link
                to={entry.route}
                className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-[var(--text)] px-5 py-2 font-['Work_Sans'] text-sm font-semibold text-[var(--surface)] transition hover:-translate-y-0.5 hover:bg-[var(--accent)]"
              >
                Open design
                <span aria-hidden>→</span>
              </Link>
            </article>
          ))}
        </section>

        <div className="mt-10 rounded-3xl border border-[var(--accent-soft)] bg-[var(--surface)] p-6 md:p-8">
          <p className="font-['Source_Sans_3'] text-xs uppercase tracking-[0.16em] text-[var(--muted)]">Included models</p>
          <div className="mt-4 flex flex-wrap gap-3">
            {studioModels.map((model) => (
              <span
                key={model}
                className="rounded-full border border-[var(--accent-soft)] px-4 py-2 font-['Work_Sans'] text-sm text-[var(--text)]"
              >
                {model}
              </span>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}

/*
Concept for /1
1. Real-world artifact: 1960s Swiss exhibition poster reimagined as a live product launch wall.
2. Screenshot moment: the giant stacked headline with a warm orbit disc following the pointer behind "Canvas".
3. Wrong for this concept: glossy UI cards, soft glass blur, and generic SaaS icon-row symmetry.
*/
export function PosterOrbitPage() {
  const [activeModel, setActiveModel] = useState(studioModels[0])
  const [orb, setOrb] = useState({ x: 78, y: 32 })

  const modelStories: Record<string, { headline: string; line: string; speed: string }> = {
    'Nano Banana Pro': {
      headline: 'Concept sketches in under 4 seconds',
      line: 'Use when you need many directional looks before committing to polish.',
      speed: 'Burst mode',
    },
    'Flux 2': {
      headline: 'Poster-grade contrast and cinematic depth',
      line: 'Use for dramatic hero visuals with rich shadows and bolder lighting decisions.',
      speed: 'Detail mode',
    },
    'gpt-image-1.5': {
      headline: 'Prompt-to-layout precision for campaigns',
      line: 'Use when text hierarchy and branded composition matter as much as image beauty.',
      speed: 'Campaign mode',
    },
    Seedream: {
      headline: 'Dreamlike textures for surreal storytelling',
      line: 'Use when your visuals should feel handcrafted, strange, and memorable.',
      speed: 'Atmosphere mode',
    },
  }

  return (
    <main
      className="relative overflow-hidden bg-[var(--bg)] text-[var(--text)]"
      style={
        {
          '--bg': '#f5efe3',
          '--text': '#201a16',
          '--muted': '#6f655c',
          '--accent': '#c25731',
          '--surface': '#efe3d2',
        } as CSSProperties
      }
    >
      <div className="grain" />
      <StudioNav title="Poster Orbit" tone="Swiss Print Rhythm" />

      <section
        className="relative mx-auto flex min-h-[86vh] w-full max-w-[1260px] flex-col justify-center px-6 pb-16 pt-8 md:px-10"
        onMouseMove={(event) => {
          const box = event.currentTarget.getBoundingClientRect()
          const x = ((event.clientX - box.left) / box.width) * 100
          const y = ((event.clientY - box.top) / box.height) * 100
          setOrb({ x, y })
        }}
      >
        <div
          className="pointer-events-none absolute h-[360px] w-[360px] rounded-full bg-[var(--accent)]/35 blur-3xl transition-transform duration-500"
          style={{ left: `calc(${orb.x}% - 180px)`, top: `calc(${orb.y}% - 180px)` }}
        />
        <p className="fade-rise z-10 font-['Work_Sans'] text-xs uppercase tracking-[0.18em] text-[var(--muted)]">Monthly flat fee. Unlimited direction.</p>
        <h1 className="fade-rise delay-1 z-10 mt-4 max-w-5xl font-['Bebas_Neue'] text-[clamp(4rem,14vw,12rem)] leading-[0.82] tracking-tight">
          GENERATE<br />
          EDIT<br />
          <span className="italic text-[var(--accent)]">CANVAS</span>
        </h1>
        <p className="fade-rise delay-2 z-10 mt-6 max-w-2xl font-['Work_Sans'] text-lg text-[var(--muted)]">
          T4 Canvas puts Nano Banana Pro, Flux 2, gpt-image-1.5, and Seedream in one studio so your image workflow never stalls between tools.
        </p>
        <Link
          to="/"
          className="fade-rise delay-3 z-10 mt-10 inline-flex w-fit items-center gap-2 rounded-full bg-[var(--text)] px-7 py-3 font-['Work_Sans'] text-sm font-semibold text-[var(--bg)] transition hover:-translate-y-0.5 hover:bg-[var(--accent)]"
        >
          Start subscription
          <span aria-hidden>↗</span>
        </Link>
      </section>

      <section className="mx-auto grid w-full max-w-[1260px] gap-8 px-6 pb-20 md:grid-cols-[1.1fr,1.6fr] md:px-10">
        <article className="fade-rise border-l-4 border-[var(--accent)] pl-5">
          <p className="font-['Bebas_Neue'] text-[clamp(3.8rem,9vw,7rem)] leading-none tracking-tight">4</p>
          <p className="font-['Work_Sans'] text-sm uppercase tracking-[0.18em] text-[var(--muted)]">Pro Models Included</p>
        </article>
        <article className="fade-rise delay-1 grid gap-5 md:grid-cols-[1.3fr,1fr]">
          <div className="rounded-3xl bg-[var(--surface)] p-6">
            <p className="font-['Work_Sans'] text-xs uppercase tracking-[0.16em] text-[var(--muted)]">Why teams switch</p>
            <p className="mt-4 font-['Work_Sans'] text-lg leading-relaxed">
              No token bundles, no model lock-in, no workflow tab-sprawl. Prompt once, route to the model that best fits your intent.
            </p>
          </div>
          <div className="rounded-3xl border border-[var(--text)] p-6">
            <p className="font-['Work_Sans'] text-xs uppercase tracking-[0.16em] text-[var(--muted)]">Average weekly output</p>
            <p className="mt-3 font-['Bebas_Neue'] text-7xl leading-none tracking-tight">2,340</p>
            <p className="font-['Work_Sans'] text-sm text-[var(--muted)]">Images shipped per studio account.</p>
          </div>
        </article>
      </section>

      <section className="mx-auto w-full max-w-[1260px] px-6 pb-20 md:px-10">
        <div className="rounded-[2rem] border border-[var(--text)] bg-[var(--bg)] p-6 md:p-10">
          <p className="font-['Work_Sans'] text-sm text-[var(--muted)]">Pick a model and watch the studio behavior shift instantly.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            {studioModels.map((model) => (
              <button
                key={model}
                type="button"
                onClick={() => setActiveModel(model)}
                className={`rounded-full px-5 py-2 font-['Work_Sans'] text-sm transition ${
                  activeModel === model
                    ? 'bg-[var(--text)] text-[var(--bg)]'
                    : 'border border-[var(--text)] text-[var(--text)] hover:bg-[var(--surface)]'
                }`}
              >
                {model}
              </button>
            ))}
          </div>
          <article className="mt-8 grid gap-4 md:grid-cols-[1.7fr,1fr]">
            <div className="rounded-3xl bg-[var(--surface)] p-6">
              <p className="font-['Bebas_Neue'] text-[clamp(2rem,6vw,3.8rem)] leading-none tracking-tight">
                {modelStories[activeModel].headline}
              </p>
              <p className="mt-4 font-['Work_Sans'] text-base text-[var(--muted)]">{modelStories[activeModel].line}</p>
            </div>
            <div className="rounded-3xl border border-[var(--text)] p-6">
              <p className="font-['Work_Sans'] text-xs uppercase tracking-[0.16em] text-[var(--muted)]">Mode</p>
              <p className="mt-3 font-['Bebas_Neue'] text-5xl leading-none tracking-tight">{modelStories[activeModel].speed}</p>
              <button
                type="button"
                className="mt-6 rounded-full bg-[var(--accent)] px-4 py-2 font-['Work_Sans'] text-sm font-semibold text-[var(--bg)] transition hover:scale-[1.03]"
              >
                Generate with {activeModel}
              </button>
            </div>
          </article>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1260px] px-6 pb-20 md:px-10">
        <div className="grid gap-6 rounded-[2.2rem] bg-[var(--text)] p-8 text-[var(--bg)] md:grid-cols-[1.2fr,1fr]">
          <div>
            <p className="font-['Work_Sans'] text-xs uppercase tracking-[0.16em] text-[var(--bg)]/70">Simple billing</p>
            <p className="mt-4 font-['Bebas_Neue'] text-[clamp(3rem,7vw,5.6rem)] leading-none tracking-tight">$39 / month</p>
            <p className="mt-3 max-w-xl font-['Work_Sans'] text-[var(--bg)]/80">
              Every model unlocked, commercial usage included, and zero rate-limit anxiety for active production teams.
            </p>
          </div>
          <div className="rounded-3xl border border-[var(--bg)]/30 p-5">
            <p className="font-['Work_Sans'] text-sm text-[var(--bg)]/80">Includes editing, upscale, variation chains, and shared team boards.</p>
            <Link
              to="/"
              className="mt-6 inline-flex rounded-full bg-[var(--accent)] px-5 py-2 font-['Work_Sans'] text-sm font-semibold text-[var(--bg)] transition hover:-translate-y-0.5 hover:brightness-110"
            >
              Claim launch price
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

/*
Concept for /2
1. Real-world artifact: a 1969 mission control terminal upgraded for AI image operations.
2. Screenshot moment: green monochrome command board with blinking cursor and live mode switch output.
3. Wrong for this concept: pastel gradients, soft rounded SaaS cards, and decorative marketing copy.
*/
export function CommandDeckPage() {
  const modes = [
    {
      id: 'rapid',
      label: 'Rapid Draft',
      command: 't4 run --model=nano-banana-pro --shots=12 --style=wide',
      output: '12 exploratory frames queued with aggressive composition variance.',
    },
    {
      id: 'ad',
      label: 'Ad Polish',
      command: 't4 run --model=gpt-image-1.5 --layout=brand-safe --quality=ultra',
      output: '3 campaign finals rendering with typography-safe focal alignment.',
    },
    {
      id: 'surreal',
      label: 'Surreal Pass',
      command: 't4 run --model=seedream --texture=heavy --mood=dreamlike',
      output: 'Atmospheric sequence initialized with layered grain and soft glare.',
    },
  ]

  const [activeMode, setActiveMode] = useState(modes[0].id)
  const selectedMode = modes.find((mode) => mode.id === activeMode) ?? modes[0]

  return (
    <main
      className="relative overflow-hidden bg-[var(--bg)] text-[var(--text)]"
      style={
        {
          '--bg': '#050505',
          '--surface': '#0e130c',
          '--text': '#daf6c8',
          '--muted': '#87a27a',
          '--accent': '#7ad84b',
        } as CSSProperties
      }
    >
      <div className="scanlines" />
      <StudioNav title="Command Deck" tone="Mission Control Language" />

      <section className="mx-auto flex min-h-[80vh] w-full max-w-[1240px] flex-col justify-center px-6 pb-16 pt-6 md:px-10">
        <p className="fade-rise font-['IBM_Plex_Mono'] text-xs uppercase tracking-[0.17em] text-[var(--muted)]">Status: Operational</p>
        <h1 className="fade-rise delay-1 mt-5 max-w-5xl font-['Space_Mono'] text-[clamp(3.1rem,11vw,8.3rem)] leading-[0.95]">
          IMAGE MISSION
          <br />
          <span className="text-[var(--accent)]">CONTROL ROOM</span>
        </h1>
        <p className="fade-rise delay-2 mt-6 max-w-3xl font-['IBM_Plex_Sans'] text-lg text-[var(--muted)]">
          Route every prompt through Nano Banana Pro, Flux 2, gpt-image-1.5, and Seedream without opening four browser tabs or tracking four invoices.
        </p>
        <div className="fade-rise delay-3 mt-8 inline-flex w-fit items-center gap-2 rounded-md border border-[var(--accent)]/60 bg-[var(--surface)] px-4 py-2 font-['IBM_Plex_Mono'] text-sm text-[var(--text)]">
          <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-[var(--accent)]" />
          launch window open
          <span className="terminal-cursor">_</span>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1240px] px-6 pb-16 md:px-10">
        <div className="border border-[var(--accent)]/40 bg-[var(--surface)] p-6 md:p-8">
          <p className="font-['IBM_Plex_Mono'] text-xs uppercase tracking-[0.16em] text-[var(--muted)]">Runtime control</p>
          <div className="mt-5 flex flex-wrap gap-3">
            {modes.map((mode) => (
              <button
                key={mode.id}
                type="button"
                onClick={() => setActiveMode(mode.id)}
                className={`px-4 py-2 font-['IBM_Plex_Mono'] text-xs transition ${
                  activeMode === mode.id
                    ? 'bg-[var(--accent)] text-[#102109]'
                    : 'border border-[var(--accent)]/40 text-[var(--text)] hover:bg-[var(--accent)]/15'
                }`}
              >
                {mode.label}
              </button>
            ))}
          </div>
          <div className="mt-6 grid gap-5 md:grid-cols-[1.35fr,1fr]">
            <article className="border border-[var(--accent)]/35 p-5">
              <p className="font-['IBM_Plex_Mono'] text-xs text-[var(--muted)]">command</p>
              <code className="mt-3 block font-['IBM_Plex_Mono'] text-sm leading-relaxed text-[var(--text)]">{selectedMode.command}</code>
            </article>
            <article className="border border-[var(--accent)]/35 p-5">
              <p className="font-['IBM_Plex_Mono'] text-xs text-[var(--muted)]">output</p>
              <p className="mt-3 font-['IBM_Plex_Sans'] text-sm text-[var(--text)]">{selectedMode.output}</p>
              <button
                type="button"
                className="mt-5 border border-[var(--accent)] px-3 py-2 font-['IBM_Plex_Mono'] text-xs text-[var(--accent)] transition hover:bg-[var(--accent)] hover:text-[#102109]"
              >
                execute sequence
              </button>
            </article>
          </div>
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-[1240px] gap-5 px-6 pb-16 md:grid-cols-3 md:px-10">
        {[
          {
            title: 'Capture',
            text: 'Prompt parser converts plain language into model-ready parameter packs.',
          },
          {
            title: 'Route',
            text: 'Scheduler sends each job to the model with the strongest visual fit.',
          },
          {
            title: 'Merge',
            text: 'Output stacker groups candidates and keeps edit history side-by-side.',
          },
        ].map((item) => (
          <article key={item.title} className="border border-[var(--accent)]/30 bg-[var(--surface)] p-5">
            <p className="font-['Space_Mono'] text-2xl text-[var(--accent)]">{item.title}</p>
            <p className="mt-3 font-['IBM_Plex_Sans'] text-sm text-[var(--muted)]">{item.text}</p>
          </article>
        ))}
      </section>

      <section className="mx-auto w-full max-w-[1240px] px-6 pb-20 md:px-10">
        <div className="grid gap-6 border border-[var(--accent)] bg-[var(--surface)] p-6 md:grid-cols-[1.2fr,1fr] md:p-8">
          <div>
            <p className="font-['IBM_Plex_Mono'] text-xs uppercase tracking-[0.17em] text-[var(--muted)]">Flat-rate control</p>
            <p className="mt-4 font-['Space_Mono'] text-[clamp(2.4rem,7vw,4.8rem)] leading-[1] text-[var(--text)]">$39 monthly</p>
            <p className="mt-3 max-w-xl font-['IBM_Plex_Sans'] text-[var(--muted)]">
              Unlimited generations, edit chains, and revision exports for teams that ship images every day.
            </p>
          </div>
          <div className="flex flex-col justify-between border border-[var(--accent)]/40 p-5">
            <p className="font-['IBM_Plex_Sans'] text-sm text-[var(--text)]">All four premium models. One command center.</p>
            <Link
              to="/"
              className="mt-5 inline-flex w-fit border border-[var(--accent)] bg-[var(--accent)] px-4 py-2 font-['IBM_Plex_Mono'] text-xs uppercase tracking-[0.08em] text-[#102109] transition hover:-translate-y-0.5 hover:brightness-110"
            >
              open your deck
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

/*
Concept for /3
1. Real-world artifact: a luxury editorial magazine spread introducing a new creative tool.
2. Screenshot moment: dramatic serif headline with vertical side note and pull-quote card crossing the grid.
3. Wrong for this concept: rigid dashboard rows, synthetic jargon, and terminal-styled components.
*/
export function EditorialIssuePage() {
  const notes = [
    {
      id: 'tone',
      title: 'Creative Direction',
      detail:
        'Start with Nano Banana Pro for broad mood sketches, then send finalists to Flux 2 for richer print contrast.',
    },
    {
      id: 'workflow',
      title: 'Workflow Note',
      detail: 'Use gpt-image-1.5 when typography placement matters, then polish texture in Seedream for campaign softness.',
    },
    {
      id: 'team',
      title: 'Team Habit',
      detail: 'Keep one shared board per campaign and mark preferred style cues directly in the image history.',
    },
  ]
  const [openNote, setOpenNote] = useState(notes[0].id)

  return (
    <main
      className="overflow-hidden bg-[var(--bg)] text-[var(--text)]"
      style={
        {
          '--bg': '#faf5ee',
          '--surface': '#f1e8dc',
          '--text': '#281d18',
          '--muted': '#74625a',
          '--accent': '#a2332b',
        } as CSSProperties
      }
    >
      <StudioNav title="Issue Zero" tone="Editorial Spread" />

      <section className="mx-auto grid min-h-[86vh] w-full max-w-[1260px] gap-10 px-6 pb-16 pt-10 md:grid-cols-[1.2fr,0.8fr] md:px-10">
        <article className="fade-rise self-center">
          <p className="font-['Plus_Jakarta_Sans'] text-sm text-[var(--muted)]">March Edition • T4 Canvas Dispatch</p>
          <h1 className="mt-4 max-w-4xl font-['DM_Serif_Display'] text-[clamp(3.4rem,11vw,8.6rem)] leading-[0.9] tracking-tight">
            The <span className="italic text-[var(--accent)] editorial-word">new canvas</span> for image teams.
          </h1>
          <p className="mt-6 max-w-2xl font-['Plus_Jakarta_Sans'] text-lg leading-relaxed text-[var(--muted)]">
            Designers are done paying model by model. One subscription now covers every visual mood from polished product frames to strange dreamlike scenes.
          </p>
          <Link
            to="/"
            className="mt-8 inline-flex rounded-full bg-[var(--text)] px-6 py-3 font-['Plus_Jakarta_Sans'] text-sm font-semibold text-[var(--bg)] transition hover:-translate-y-0.5 hover:bg-[var(--accent)]"
          >
            Get the membership
          </Link>
        </article>

        <article className="fade-rise delay-1 relative self-end border border-[var(--text)] p-6 md:translate-y-12">
          <p className="font-['DM_Serif_Display'] text-3xl leading-tight">"We stopped switching tabs and started shipping ideas in one rhythm."</p>
          <p className="mt-4 font-['Plus_Jakarta_Sans'] text-sm text-[var(--muted)]">Art Director, product launch studio</p>
          <p className="absolute -left-4 top-12 hidden -rotate-90 font-['Plus_Jakarta_Sans'] text-xs uppercase tracking-[0.18em] text-[var(--muted)] md:block">
            FEATURE STORY
          </p>
        </article>
      </section>

      <section className="mx-auto w-full max-w-[1260px] px-6 pb-16 md:px-10">
        <div className="grid gap-8 rounded-[2rem] bg-[var(--surface)] p-6 md:grid-cols-[1fr,1.3fr] md:p-9">
          <article>
            <p className="font-['Plus_Jakarta_Sans'] text-xs uppercase tracking-[0.16em] text-[var(--muted)]">Issue Notes</p>
            <div className="mt-5 space-y-3">
              {notes.map((note) => (
                <button
                  key={note.id}
                  type="button"
                  onClick={() => setOpenNote(note.id)}
                  className={`block w-full rounded-2xl px-4 py-3 text-left font-['Plus_Jakarta_Sans'] text-sm transition ${
                    openNote === note.id
                      ? 'bg-[var(--text)] text-[var(--bg)]'
                      : 'border border-[var(--text)]/20 text-[var(--text)] hover:bg-[var(--bg)]'
                  }`}
                >
                  {note.title}
                </button>
              ))}
            </div>
          </article>
          <article className="rounded-3xl border border-[var(--text)]/20 bg-[var(--bg)] p-6">
            {notes
              .filter((note) => note.id === openNote)
              .map((note) => (
                <div key={note.id} className="fade-rise">
                  <p className="font-['DM_Serif_Display'] text-[clamp(1.8rem,4.5vw,3rem)] leading-tight">{note.title}</p>
                  <p className="mt-4 max-w-2xl font-['Plus_Jakarta_Sans'] text-base leading-relaxed text-[var(--muted)]">{note.detail}</p>
                </div>
              ))}
          </article>
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-[1260px] gap-6 px-6 pb-16 md:grid-cols-[1.4fr,1fr] md:px-10">
        <article className="rounded-3xl border border-[var(--text)]/20 p-7">
          <p className="font-['DM_Serif_Display'] text-[clamp(2rem,5vw,4rem)] leading-[0.95]">Four models, one pace.</p>
          <p className="mt-4 font-['Plus_Jakarta_Sans'] text-[var(--muted)]">
            Nano Banana Pro handles divergence. Flux 2 tightens contrast. gpt-image-1.5 keeps layout structure. Seedream adds poetic texture.
          </p>
        </article>
        <article className="rounded-3xl bg-[var(--text)] p-7 text-[var(--bg)]">
          <p className="font-['Plus_Jakarta_Sans'] text-xs uppercase tracking-[0.16em] text-[var(--bg)]/70">Membership</p>
          <p className="mt-3 font-['DM_Serif_Display'] text-6xl leading-none">$39</p>
          <p className="mt-3 font-['Plus_Jakarta_Sans'] text-sm text-[var(--bg)]/80">Monthly. No model add-ons. No separate credits.</p>
        </article>
      </section>

      <section className="mx-auto w-full max-w-[1260px] px-6 pb-24 md:px-10">
        <div className="rounded-[2.5rem] border border-[var(--text)] bg-[var(--bg)] p-8 text-center">
          <p className="font-['DM_Serif_Display'] text-[clamp(2.2rem,5.8vw,4.8rem)] leading-tight">Publish your next visual issue from one studio.</p>
          <Link
            to="/"
            className="mt-6 inline-flex rounded-full bg-[var(--accent)] px-7 py-3 font-['Plus_Jakarta_Sans'] text-sm font-semibold text-[var(--bg)] transition hover:-translate-y-0.5 hover:brightness-110"
          >
            Join T4 Canvas
          </Link>
        </div>
      </section>
    </main>
  )
}

/*
Concept for /4
1. Real-world artifact: an architectural blueprint pinned to a studio wall.
2. Screenshot moment: technical headline over a live grid with movable target marker and selected model spec panel.
3. Wrong for this concept: ornamental flourishes, soft pastel blobs, and informal copy tone.
*/
export function BlueprintAtlasPage() {
  const nodes = [
    {
      id: 'nano',
      title: 'Nano Banana Pro',
      fit: 'Exploration',
      note: 'Fast divergence for finding composition language early.',
    },
    {
      id: 'flux',
      title: 'Flux 2',
      fit: 'Contrast',
      note: 'Crisp depth and high-impact detail for product surfaces.',
    },
    {
      id: 'gpt',
      title: 'gpt-image-1.5',
      fit: 'Structure',
      note: 'Prompt adherence and text-aware placement for campaigns.',
    },
    {
      id: 'seedream',
      title: 'Seedream',
      fit: 'Texture',
      note: 'Layered atmosphere for cinematic and narrative scenes.',
    },
  ]
  const [selectedNode, setSelectedNode] = useState(nodes[0].id)
  const [crosshair, setCrosshair] = useState({ x: 25, y: 40 })
  const selected = nodes.find((node) => node.id === selectedNode) ?? nodes[0]

  return (
    <main
      className="overflow-hidden bg-[var(--bg)] text-[var(--text)]"
      style={
        {
          '--bg': '#edf3ff',
          '--surface': '#dce7ff',
          '--text': '#0f2b5d',
          '--muted': '#4f6f9f',
          '--accent': '#1f4ea8',
        } as CSSProperties
      }
    >
      <StudioNav title="Blueprint Atlas" tone="Technical Composition" />

      <section
        className="blueprint-grid relative mx-auto min-h-[84vh] w-full max-w-[1260px] px-6 pb-16 pt-8 md:px-10"
        onMouseMove={(event) => {
          const box = event.currentTarget.getBoundingClientRect()
          const x = ((event.clientX - box.left) / box.width) * 100
          const y = ((event.clientY - box.top) / box.height) * 100
          setCrosshair({ x, y })
        }}
      >
        <div
          className="pointer-events-none absolute h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[var(--accent)]/70"
          style={{ left: `${crosshair.x}%`, top: `${crosshair.y}%` }}
        >
          <span className="absolute left-1/2 top-1/2 h-1 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--accent)]" />
        </div>

        <p className="fade-rise font-['Public_Sans'] text-xs uppercase tracking-[0.18em] text-[var(--muted)]">Sheet A-01</p>
        <h1 className="fade-rise delay-1 mt-5 max-w-5xl font-['Syne'] text-[clamp(3.2rem,10.5vw,8.4rem)] leading-[0.9] tracking-tight">
          IMAGE PIPELINE
          <br />
          <span className="italic text-[var(--accent)]">SPECIFICATION</span>
        </h1>
        <p className="fade-rise delay-2 mt-6 max-w-3xl font-['Public_Sans'] text-lg text-[var(--muted)]">
          T4 Canvas standardizes model routing so each generation pass lands on the strongest engine without manual switching or billing complexity.
        </p>
        <Link
          to="/"
          className="fade-rise delay-3 mt-8 inline-flex rounded-full border border-[var(--accent)] bg-[var(--accent)] px-6 py-3 font-['Public_Sans'] text-sm font-semibold text-[var(--bg)] transition hover:-translate-y-0.5 hover:brightness-110"
        >
          Begin build sheet
        </Link>
      </section>

      <section className="mx-auto w-full max-w-[1260px] px-6 pb-16 md:px-10">
        <div className="grid gap-6 rounded-[2rem] border border-[var(--accent)]/35 bg-[var(--surface)] p-6 md:grid-cols-[1fr,1.5fr] md:p-8">
          <div>
            <p className="font-['Public_Sans'] text-xs uppercase tracking-[0.17em] text-[var(--muted)]">Model nodes</p>
            <div className="mt-4 space-y-3">
              {nodes.map((node) => (
                <button
                  key={node.id}
                  type="button"
                  onClick={() => setSelectedNode(node.id)}
                  className={`block w-full rounded-xl px-4 py-3 text-left font-['Public_Sans'] text-sm transition ${
                    selectedNode === node.id
                      ? 'bg-[var(--accent)] text-[var(--bg)]'
                      : 'border border-[var(--accent)]/35 text-[var(--text)] hover:bg-[var(--bg)]'
                  }`}
                >
                  {node.title}
                </button>
              ))}
            </div>
          </div>
          <article className="rounded-2xl border border-[var(--accent)]/30 bg-[var(--bg)] p-6">
            <p className="font-['Public_Sans'] text-xs uppercase tracking-[0.17em] text-[var(--muted)]">Active specification</p>
            <p className="mt-3 font-['Syne'] text-[clamp(2rem,5vw,3.6rem)] leading-tight">{selected.title}</p>
            <p className="mt-3 font-['Public_Sans'] text-base text-[var(--muted)]">Primary fit: {selected.fit}</p>
            <p className="mt-4 max-w-2xl font-['Public_Sans'] text-[var(--text)]">{selected.note}</p>
            <button
              type="button"
              className="mt-6 rounded-full border border-[var(--accent)] px-4 py-2 font-['Public_Sans'] text-sm text-[var(--accent)] transition hover:bg-[var(--accent)] hover:text-[var(--bg)]"
            >
              Route next batch
            </button>
          </article>
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-[1260px] gap-6 px-6 pb-16 md:grid-cols-[1.3fr,1fr] md:px-10">
        <article className="rounded-3xl border border-[var(--accent)]/35 p-7">
          <p className="font-['Public_Sans'] text-xs uppercase tracking-[0.17em] text-[var(--muted)]">Process calibration</p>
          <ol className="mt-5 space-y-4 font-['Public_Sans'] text-sm text-[var(--text)]">
            <li>01. Brief intake and style markers</li>
            <li>02. Prompt spread across four models</li>
            <li>03. Variant score and human curation</li>
            <li>04. Final edit chain and export package</li>
          </ol>
        </article>
        <article className="rounded-3xl bg-[var(--text)] p-7 text-[var(--bg)]">
          <p className="font-['Public_Sans'] text-xs uppercase tracking-[0.17em] text-[var(--bg)]/70">Measured output</p>
          <p className="mt-3 font-['Syne'] text-6xl leading-none">4x</p>
          <p className="mt-3 font-['Public_Sans'] text-sm text-[var(--bg)]/75">Faster model comparisons per campaign sprint.</p>
        </article>
      </section>

      <section className="mx-auto w-full max-w-[1260px] px-6 pb-24 md:px-10">
        <div className="rounded-[2.2rem] border border-[var(--accent)] bg-[var(--surface)] p-8 text-center md:p-10">
          <p className="font-['Syne'] text-[clamp(2.2rem,5.5vw,4.9rem)] leading-[0.96]">Draft with precision. Ship with one fee.</p>
          <p className="mt-4 font-['Public_Sans'] text-[var(--muted)]">$39/month unlocks Nano Banana Pro, Flux 2, gpt-image-1.5, and Seedream inside one controllable interface.</p>
          <Link
            to="/"
            className="mt-6 inline-flex rounded-full bg-[var(--accent)] px-6 py-3 font-['Public_Sans'] text-sm font-semibold text-[var(--bg)] transition hover:-translate-y-0.5 hover:brightness-110"
          >
            Reserve your seat
          </Link>
        </div>
      </section>
    </main>
  )
}

/*
Concept for /5
1. Real-world artifact: an experimental collage board made from cut posters, tape, and marker notes.
2. Screenshot moment: oversized angular headline with layered paper blocks and rotating filter chips.
3. Wrong for this concept: strict symmetry, sterile whitespace-only minimalism, and polished corporate tone.
*/
export function CollageLabPage() {
  const filters = [
    {
      id: 'ads',
      label: 'Ad Campaign',
      output: 'Structured compositions with brand-safe areas and high contrast.',
    },
    {
      id: 'story',
      label: 'Story Frames',
      output: 'Narrative series with cinematic lighting shifts per frame.',
    },
    {
      id: 'product',
      label: 'Product Stage',
      output: 'Material-accurate packs with editable background variants.',
    },
  ]
  const [activeFilter, setActiveFilter] = useState(filters[0].id)
  const filterMatch = filters.find((filter) => filter.id === activeFilter) ?? filters[0]

  return (
    <main
      className="relative overflow-hidden bg-[var(--bg)] text-[var(--text)]"
      style={
        {
          '--bg': '#f8f0e1',
          '--surface': '#f1e2ca',
          '--text': '#15120f',
          '--muted': '#6d6258',
          '--accent': '#d43624',
          '--ink': '#171717',
        } as CSSProperties
      }
    >
      <StudioNav title="Cut + Assemble" tone="Collage Narrative" />

      <section className="mx-auto grid min-h-[82vh] w-full max-w-[1260px] gap-8 px-6 pb-16 pt-8 md:grid-cols-[1.2fr,1fr] md:px-10">
        <article className="fade-rise self-center">
          <p className="font-['Source_Sans_3'] text-xs uppercase tracking-[0.2em] text-[var(--muted)]">T4 Canvas Composition Lab</p>
          <h1 className="mt-4 max-w-4xl font-['Fraunces'] text-[clamp(3.4rem,11vw,9rem)] leading-[0.85] tracking-tight">
            CUT.
            <br />
            MIX.
            <br />
            <span className="italic text-[var(--accent)]">SHIP.</span>
          </h1>
          <p className="mt-5 max-w-xl font-['Source_Sans_3'] text-lg text-[var(--muted)]">
            Build surreal concepts, product frames, and full campaign sequences with every top model already included.
          </p>
          <Link
            to="/"
            className="mt-8 inline-flex rounded-full bg-[var(--ink)] px-7 py-3 font-['Source_Sans_3'] text-sm font-semibold text-[var(--bg)] transition hover:-translate-y-0.5 hover:bg-[var(--accent)]"
          >
            Start creating
          </Link>
        </article>

        <article className="relative grid gap-4 self-end pb-4">
          <div className="collage-card -rotate-2 bg-[var(--ink)] p-5 text-[var(--bg)]">
            <p className="font-['Fraunces'] text-3xl leading-none">One fee.</p>
            <p className="mt-2 font-['Source_Sans_3'] text-sm text-[var(--bg)]/80">Every model unlocked.</p>
          </div>
          <div className="collage-card rotate-1 border-2 border-[var(--ink)] bg-[var(--surface)] p-5">
            <p className="font-['Fraunces'] text-2xl leading-none">No model hopping.</p>
            <p className="mt-2 font-['Source_Sans_3'] text-sm text-[var(--muted)]">Nano Banana Pro, Flux 2, gpt-image-1.5, Seedream.</p>
          </div>
          <div className="collage-card -rotate-1 bg-[var(--accent)] p-5 text-[var(--bg)]">
            <p className="font-['Fraunces'] text-2xl leading-none">Live edits in one board.</p>
          </div>
          <span className="pointer-events-none absolute -top-4 right-6 h-8 w-24 rotate-6 bg-[var(--bg)]/70" />
        </article>
      </section>

      <section className="mx-auto w-full max-w-[1260px] px-6 pb-16 md:px-10">
        <div className="rounded-[2.2rem] border-2 border-[var(--ink)] bg-[var(--surface)] p-6 md:p-8">
          <p className="font-['Source_Sans_3'] text-xs uppercase tracking-[0.18em] text-[var(--muted)]">Choose output mood</p>
          <div className="mt-5 flex flex-wrap gap-3">
            {filters.map((filter) => (
              <button
                key={filter.id}
                type="button"
                onClick={() => setActiveFilter(filter.id)}
                className={`rounded-full px-5 py-2 font-['Source_Sans_3'] text-sm transition ${
                  activeFilter === filter.id
                    ? 'rotate-[-2deg] bg-[var(--accent)] text-[var(--bg)]'
                    : 'border-2 border-[var(--ink)] text-[var(--ink)] hover:-rotate-2 hover:bg-[var(--bg)]'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
          <article className="mt-6 rounded-3xl border-2 border-dashed border-[var(--ink)] bg-[var(--bg)] p-6">
            <p className="font-['Fraunces'] text-[clamp(1.8rem,4.2vw,3.4rem)] leading-tight">{filterMatch.label}</p>
            <p className="mt-3 max-w-3xl font-['Source_Sans_3'] text-base text-[var(--muted)]">{filterMatch.output}</p>
            <button
              type="button"
              className="mt-5 rounded-full bg-[var(--ink)] px-4 py-2 font-['Source_Sans_3'] text-sm font-semibold text-[var(--bg)] transition hover:scale-[1.03] hover:bg-[var(--accent)]"
            >
              Generate this set
            </button>
          </article>
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-[1260px] gap-6 px-6 pb-16 md:grid-cols-[1.1fr,1.5fr] md:px-10">
        <article className="rounded-3xl border-2 border-[var(--ink)] bg-[var(--bg)] p-6">
          <p className="font-['Source_Sans_3'] text-xs uppercase tracking-[0.17em] text-[var(--muted)]">What teams do</p>
          <ul className="mt-4 space-y-3 font-['Source_Sans_3'] text-sm">
            <li>Storyboard social drops in one afternoon.</li>
            <li>Build product stills with consistent visual language.</li>
            <li>Push weird visual experiments without budget panic.</li>
          </ul>
        </article>
        <article className="rounded-3xl border-2 border-[var(--ink)] bg-[var(--ink)] p-7 text-[var(--bg)]">
          <p className="font-['Fraunces'] text-[clamp(2.2rem,5.2vw,4.3rem)] leading-[0.92]">You pay one subscription. Ideas stay in motion.</p>
          <p className="mt-4 max-w-xl font-['Source_Sans_3'] text-[var(--bg)]/80">$39/month with every model, generation history, and team sharing turned on from day one.</p>
        </article>
      </section>

      <section className="mx-auto w-full max-w-[1260px] px-6 pb-24 md:px-10">
        <div className="rounded-[2.6rem] border-2 border-[var(--ink)] bg-[var(--accent)] p-8 text-center text-[var(--bg)] md:p-10">
          <p className="font-['Fraunces'] text-[clamp(2.2rem,5.8vw,4.9rem)] leading-[0.9]">Turn your prompt pile into a living studio.</p>
          <Link
            to="/"
            className="mt-6 inline-flex rounded-full bg-[var(--bg)] px-7 py-3 font-['Source_Sans_3'] text-sm font-bold text-[var(--ink)] transition hover:-translate-y-0.5 hover:bg-[#fff7ea]"
          >
            Claim your workspace
          </Link>
        </div>
      </section>
    </main>
  )
}
