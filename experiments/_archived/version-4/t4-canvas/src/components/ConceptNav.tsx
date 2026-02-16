import { NavLink } from 'react-router-dom'

const concepts = [
  { id: '1', name: 'Pulse Forge' },
  { id: '2', name: 'Editorial Core' },
  { id: '3', name: 'Command Stack' },
  { id: '4', name: 'Gallery Arc' },
  { id: '5', name: 'Poster Storm' },
]

export function ConceptNav() {
  return (
    <nav className="fixed left-1/2 top-3 z-50 w-[calc(100%-1rem)] max-w-4xl -translate-x-1/2 rounded-2xl border border-white/20 bg-black/35 p-1.5 shadow-[0_10px_38px_rgba(0,0,0,0.4)] backdrop-blur-xl md:top-4 md:w-[calc(100%-2.4rem)]">
      <div className="grid grid-cols-5 gap-1">
        {concepts.map((concept) => (
          <NavLink
            key={concept.id}
            to={`/${concept.id}`}
            className={({ isActive }) =>
              [
                'rounded-xl px-1.5 py-2 text-center text-[10px] font-semibold tracking-[0.12em] transition md:px-2 md:text-xs',
                isActive
                  ? 'bg-white text-black shadow-sm'
                  : 'text-white/80 hover:bg-white/10 hover:text-white',
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
