import { NavLink } from 'react-router-dom'

const concepts = [
  { id: '1', name: 'Pulse Lab' },
  { id: '2', name: 'Editorial' },
  { id: '3', name: 'Cockpit' },
  { id: '4', name: 'Gallery' },
  { id: '5', name: 'Poster' },
]

export function ConceptNav() {
  return (
    <nav className="fixed left-1/2 top-4 z-50 w-[calc(100%-1.5rem)] max-w-xl -translate-x-1/2 rounded-full border border-white/15 bg-black/45 p-1.5 shadow-2xl backdrop-blur-xl">
      <div className="grid grid-cols-5 gap-1">
        {concepts.map((concept) => (
          <NavLink
            key={concept.id}
            to={`/${concept.id}`}
            className={({ isActive }) =>
              [
                'rounded-full px-2 py-2 text-center text-[11px] font-semibold tracking-[0.14em] transition md:text-xs',
                isActive
                  ? 'bg-white text-zinc-950 shadow-lg'
                  : 'text-white/75 hover:bg-white/10 hover:text-white',
              ].join(' ')
            }
          >
            {concept.name}
          </NavLink>
        ))}
      </div>
    </nav>
  )
}
