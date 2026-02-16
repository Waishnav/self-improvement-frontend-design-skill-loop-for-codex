import { NavLink } from 'react-router-dom'

const routes = [
  { path: '/1', label: '01 Gallery' },
  { path: '/2', label: '02 Swiss Data' },
  { path: '/3', label: '03 Cockpit' },
  { path: '/4', label: '04 Story' },
  { path: '/5', label: '05 Poster' },
]

export function RouteSwitcher() {
  return (
    <nav className="pointer-events-none fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4">
      <div className="pointer-events-auto flex w-full max-w-4xl flex-wrap items-center justify-center gap-2 rounded-2xl border border-white/15 bg-[#111111bf] p-2 shadow-[0_10px_50px_-20px_black] backdrop-blur-xl">
        {routes.map((route) => (
          <NavLink
            key={route.path}
            to={route.path}
            className={({ isActive }) =>
              [
                'rounded-xl px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.14em] transition duration-200',
                isActive
                  ? 'bg-white text-black'
                  : 'text-white/80 hover:bg-white/15 hover:text-white',
              ].join(' ')
            }
          >
            {route.label}
          </NavLink>
        ))}
      </div>
    </nav>
  )
}
