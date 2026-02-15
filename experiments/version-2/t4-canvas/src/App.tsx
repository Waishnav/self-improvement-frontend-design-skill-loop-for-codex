import { Navigate, Route, Routes } from 'react-router-dom'
import { ConceptNav } from './components/ConceptNav'
import { ConceptFive } from './pages/ConceptFive'
import { ConceptFour } from './pages/ConceptFour'
import { ConceptOne } from './pages/ConceptOne'
import { ConceptThree } from './pages/ConceptThree'
import { ConceptTwo } from './pages/ConceptTwo'

function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <ConceptNav />
      <Routes>
        <Route path="/" element={<Navigate to="/1" replace />} />
        <Route path="/1" element={<ConceptOne />} />
        <Route path="/2" element={<ConceptTwo />} />
        <Route path="/3" element={<ConceptThree />} />
        <Route path="/4" element={<ConceptFour />} />
        <Route path="/5" element={<ConceptFive />} />
        <Route path="*" element={<Navigate to="/1" replace />} />
      </Routes>
    </div>
  )
}

export default App
