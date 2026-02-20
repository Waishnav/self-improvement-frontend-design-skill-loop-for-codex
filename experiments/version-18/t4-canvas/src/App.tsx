import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { ConceptOne } from './pages/ConceptOne'
import { ConceptTwo } from './pages/ConceptTwo'
import { ConceptThree } from './pages/ConceptThree'
import { ConceptFour } from './pages/ConceptFour'
import { ConceptFive } from './pages/ConceptFive'
import { HomeHub } from './pages/HomeHub'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeHub />} />
        <Route path="/1" element={<ConceptOne />} />
        <Route path="/2" element={<ConceptTwo />} />
        <Route path="/3" element={<ConceptThree />} />
        <Route path="/4" element={<ConceptFour />} />
        <Route path="/5" element={<ConceptFive />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
