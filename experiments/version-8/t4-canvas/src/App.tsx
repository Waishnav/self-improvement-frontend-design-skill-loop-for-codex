import { Navigate, Route, Routes } from 'react-router-dom'
import { ConceptSwitcher } from './components/ConceptSwitcher'
import { DesignOne } from './pages/DesignOne'
import { DesignTwo } from './pages/DesignTwo'
import { DesignThree } from './pages/DesignThree'
import { DesignFour } from './pages/DesignFour'
import { DesignFive } from './pages/DesignFive'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/1" replace />} />
        <Route path="/1" element={<DesignOne />} />
        <Route path="/2" element={<DesignTwo />} />
        <Route path="/3" element={<DesignThree />} />
        <Route path="/4" element={<DesignFour />} />
        <Route path="/5" element={<DesignFive />} />
        <Route path="*" element={<Navigate to="/1" replace />} />
      </Routes>
      <ConceptSwitcher />
    </>
  )
}

export default App
