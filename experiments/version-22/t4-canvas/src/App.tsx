import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { ConceptFivePage } from './pages/ConceptFivePage'
import { ConceptFourPage } from './pages/ConceptFourPage'
import { ConceptOnePage } from './pages/ConceptOnePage'
import { ConceptThreePage } from './pages/ConceptThreePage'
import { ConceptTwoPage } from './pages/ConceptTwoPage'
import { HomePage } from './pages/HomePage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/1" element={<ConceptOnePage />} />
        <Route path="/2" element={<ConceptTwoPage />} />
        <Route path="/3" element={<ConceptThreePage />} />
        <Route path="/4" element={<ConceptFourPage />} />
        <Route path="/5" element={<ConceptFivePage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
