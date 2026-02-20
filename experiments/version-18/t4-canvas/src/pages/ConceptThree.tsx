import { Link } from 'react-router-dom'

const board = [
  {
    title: 'Nano Banana Pro',
    copy: 'Fast ideation bursts when you need 40 options before lunch.',
    color: 'bg-[#ffe66d]',
  },
  {
    title: 'Flux 2',
    copy: 'Material-rich renders built for product and ad realism.',
    color: 'bg-[#56cfe1]',
  },
  {
    title: 'gpt-image-1.5',
    copy: 'Instruction edits that keep your composition on-script.',
    color: 'bg-[#ff8fab]',
  },
  {
    title: 'Seedream',
    copy: 'Style distortion lane for visual identity and mood spikes.',
    color: 'bg-[#80ed99]',
  },
]

export function ConceptThree() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#f7f7f2] px-5 py-8 text-[#151515] sm:px-10 lg:px-16">
      <div className="absolute left-[-6rem] top-20 h-56 w-56 rotate-12 bg-[#ff4f4f]" />
      <div className="absolute right-[-5rem] top-64 h-48 w-48 -rotate-12 bg-[#3a86ff]" />
      <div className="absolute bottom-20 left-[15%] h-40 w-40 rotate-6 bg-[#ffe66d]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <header className="mb-14 flex flex-wrap items-center justify-between gap-4 border-b-4 border-[#151515] pb-5">
          <div>
            <p className="font-['Space_Mono'] text-xs uppercase tracking-[0.2em]">T4 Canvas</p>
            <p className="font-['Bebas_Neue'] text-4xl leading-none tracking-wide">Voltage Brutalism</p>
          </div>
          <nav className="hidden items-center gap-6 font-['Space_Mono'] text-xs uppercase tracking-[0.16em] md:flex">
            <a href="#stack" className="underline decoration-2 underline-offset-4">
              Stack
            </a>
            <a href="#ops" className="underline decoration-2 underline-offset-4">
              Ops
            </a>
            <a href="#join" className="underline decoration-2 underline-offset-4">
              Join
            </a>
          </nav>
          <Link
            to="/"
            className="border-2 border-[#151515] bg-white px-4 py-2 font-['Space_Mono'] text-xs font-bold uppercase tracking-[0.16em] shadow-[5px_5px_0_#151515] transition hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_#151515]"
          >
            Concept Gallery
          </Link>
        </header>

        <section className="mb-16 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="border-4 border-[#151515] bg-white p-7 shadow-[8px_8px_0_#151515]">
            <p className="mb-3 inline-flex border-2 border-[#151515] bg-[#ff4f4f] px-3 py-1 font-['Space_Mono'] text-xs font-bold uppercase tracking-[0.17em] text-white">
              Flat fee. Full firepower.
            </p>
            <h1 className="mb-4 max-w-3xl font-['Bebas_Neue'] text-6xl uppercase leading-[0.85] tracking-wide sm:text-8xl">
              Build wild image sets at stupid speed.
            </h1>
            <p className="mb-6 max-w-xl font-['Space_Mono'] text-sm leading-relaxed sm:text-base">
              T4 Canvas throws four elite models into one unapologetically fast interface. Generate, compare, edit, and export without
              bouncing between tools or paying per render.
            </p>
            <div className="flex flex-wrap gap-3">
              <button className="border-2 border-[#151515] bg-[#151515] px-6 py-3 font-['Space_Mono'] text-xs font-bold uppercase tracking-[0.16em] text-[#f8f8f5] transition hover:bg-[#2c2c2c]">
                Start Today
              </button>
              <button className="border-2 border-[#151515] bg-[#ffe66d] px-6 py-3 font-['Space_Mono'] text-xs font-bold uppercase tracking-[0.16em] transition hover:bg-[#f7db3f]">
                See Studio Loop
              </button>
            </div>
          </div>

          <aside className="border-4 border-[#151515] bg-[#151515] p-6 text-[#f7f7f2] shadow-[8px_8px_0_#151515]">
            <p className="mb-4 font-['Space_Mono'] text-xs uppercase tracking-[0.16em]">Generation board</p>
            <div className="grid gap-3">
              {[
                ['Active projects', '48'],
                ['Median ideation time', '11m'],
                ['Weekly exports', '3,200'],
              ].map(([label, value]) => (
                <div className="border-2 border-[#f7f7f2] p-3" key={label}>
                  <p className="font-['Space_Mono'] text-[10px] uppercase tracking-[0.16em] text-[#d7d7d1]">{label}</p>
                  <p className="font-['Bebas_Neue'] text-4xl leading-none tracking-wide">{value}</p>
                </div>
              ))}
            </div>
          </aside>
        </section>

        <section id="stack" className="mb-16">
          <div className="mb-5 flex flex-wrap items-end justify-between gap-4">
            <h2 className="font-['Bebas_Neue'] text-5xl uppercase leading-none tracking-wide sm:text-6xl">Model Riot Board</h2>
            <p className="max-w-lg font-['Space_Mono'] text-sm leading-relaxed">
              Every model gets a purpose-built lane. Switch lanes without losing prompt context, references, or editor history.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {board.map((item) => (
              <article className={`border-4 border-[#151515] ${item.color} p-6 shadow-[6px_6px_0_#151515]`} key={item.title}>
                <p className="mb-2 font-['Space_Mono'] text-xs uppercase tracking-[0.16em]">Model lane</p>
                <h3 className="mb-2 font-['Bebas_Neue'] text-4xl uppercase leading-none tracking-wide">{item.title}</h3>
                <p className="font-['Space_Mono'] text-sm leading-relaxed">{item.copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="ops" className="mb-16 grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
          <article className="border-4 border-[#151515] bg-white p-7 shadow-[8px_8px_0_#151515]">
            <p className="mb-3 font-['Space_Mono'] text-xs uppercase tracking-[0.16em]">Control matrix</p>
            <h2 className="mb-4 font-['Bebas_Neue'] text-5xl uppercase leading-none tracking-wide sm:text-6xl">Build Once, Iterate Forever</h2>
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                ['Prompt lock', 'Keeps composition spine intact while style mutates.'],
                ['Seed vault', 'Stores every winning seed for instant replays.'],
                ['Edit relay', 'Passes frames across inpaint, relight, and upscale.'],
              ].map(([title, desc]) => (
                <div className="border-2 border-[#151515] p-4" key={title}>
                  <p className="mb-2 font-['Bebas_Neue'] text-2xl uppercase leading-none tracking-wide">{title}</p>
                  <p className="font-['Space_Mono'] text-xs leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </article>
          <article className="border-4 border-[#151515] bg-[#ff4f4f] p-7 text-white shadow-[8px_8px_0_#151515]">
            <p className="mb-2 font-['Space_Mono'] text-xs uppercase tracking-[0.16em]">Membership</p>
            <p className="mb-1 font-['Bebas_Neue'] text-7xl leading-none tracking-wide">$39</p>
            <p className="mb-5 font-['Space_Mono'] text-xs uppercase tracking-[0.16em]">Monthly flat fee</p>
            <ul className="space-y-2 font-['Space_Mono'] text-xs">
              <li>All four model lanes unlocked</li>
              <li>Unlimited generation + editing</li>
              <li>Team workspaces + export tools</li>
            </ul>
          </article>
        </section>

        <section id="join" className="border-4 border-[#151515] bg-[#151515] px-7 py-9 text-[#f7f7f2] shadow-[8px_8px_0_#151515] sm:px-10">
          <div className="flex flex-wrap items-center justify-between gap-5">
            <div>
              <p className="mb-2 font-['Space_Mono'] text-xs uppercase tracking-[0.16em] text-[#d3d3cb]">Launch window open</p>
              <h2 className="font-['Bebas_Neue'] text-5xl uppercase leading-none tracking-wide sm:text-6xl">Turn image generation into a competitive edge.</h2>
            </div>
            <button className="border-2 border-[#f7f7f2] bg-[#f7f7f2] px-6 py-3 font-['Space_Mono'] text-xs font-bold uppercase tracking-[0.16em] text-[#151515] transition hover:bg-transparent hover:text-[#f7f7f2]">
              Join T4 Canvas
            </button>
          </div>
        </section>
      </div>
    </main>
  )
}
