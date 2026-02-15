import { NavLink, Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { DesignOne } from './routes/DesignOne'
import { DesignTwo } from './routes/DesignTwo'
import { DesignThree } from './routes/DesignThree'
import { DesignFour } from './routes/DesignFour'
import { DesignFive } from './routes/DesignFive'

const concepts = [
  { path: '/1', label: 'Asymmetry' },
  { path: '/2', label: 'Grid' },
  { path: '/3', label: 'Narrative' },
  { path: '/4', label: 'Canvas' },
  { path: '/5', label: 'Poster' },
]

function ConceptSwitcher() {
  const location = useLocation()

  return (
    <nav className="fixed right-4 top-4 z-50 rounded-full border border-white/25 bg-black/55 p-1.5 shadow-[0_16px_45px_rgba(0,0,0,0.32)] backdrop-blur-md">
      <ul className="flex items-center gap-1">
        {concepts.map((concept) => {
          const isActive = location.pathname === concept.path
          return (
            <li key={concept.path}>
              <NavLink
                to={concept.path}
                className={`rounded-full px-3 py-1.5 text-xs uppercase tracking-[0.16em] transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-black ${
                  isActive
                    ? 'bg-white text-black focus-visible:ring-white'
                    : 'text-white/80 hover:bg-white/15 hover:text-white focus-visible:ring-white/75'
                }`}
              >
                {concept.label}
              </NavLink>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

function App() {
  return (
    <>
      <ConceptSwitcher />
      <Routes>
        <Route path="/" element={<Navigate to="/1" replace />} />
        <Route path="/1" element={<DesignOne />} />
        <Route path="/2" element={<DesignTwo />} />
        <Route path="/3" element={<DesignThree />} />
        <Route path="/4" element={<DesignFour />} />
        <Route path="/5" element={<DesignFive />} />
        <Route path="*" element={<Navigate to="/1" replace />} />
      </Routes>
    </>
  )
}

export default App
