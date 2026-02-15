import { Link, useLocation } from 'react-router-dom'

const routes = ['/1', '/2', '/3', '/4', '/5']

const paletteByPath: Record<string, string> = {
  '/1': 'border-emerald-300/30 bg-slate-950/70 text-emerald-100',
  '/2': 'border-zinc-400/40 bg-amber-50/80 text-zinc-900',
  '/3': 'border-black/30 bg-[#fff4dc]/85 text-black',
  '/4': 'border-cyan-200/40 bg-[#071226]/75 text-cyan-100',
  '/5': 'border-stone-300/60 bg-[#f8f4ec]/80 text-[#2f2519]',
}

export function ConceptSwitcher() {
  const { pathname } = useLocation()
  const frameTone = paletteByPath[pathname] ?? paletteByPath['/1']

  return (
    <nav
      aria-label="Design route switcher"
      className={`fixed bottom-4 left-1/2 z-50 flex -translate-x-1/2 items-center gap-2 rounded-full border px-3 py-2 shadow-xl backdrop-blur-xl ${frameTone}`}
    >
      <span className="px-2 text-xs uppercase tracking-[0.25em]">Designs</span>
      {routes.map((route) => {
        const isActive = pathname === route

        return (
          <Link
            key={route}
            to={route}
            className={`inline-flex h-8 w-8 items-center justify-center rounded-full text-sm transition ${
              isActive
                ? 'bg-current text-black/80'
                : 'bg-black/10 text-inherit hover:bg-black/20'
            }`}
            aria-current={isActive ? 'page' : undefined}
          >
            {route.slice(1)}
          </Link>
        )
      })}
    </nav>
  )
}
