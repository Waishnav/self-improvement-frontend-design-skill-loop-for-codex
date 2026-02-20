import { Navigate, Route, Routes } from 'react-router-dom'
import { DesignFive } from './pages/DesignFive'
import { DesignFour } from './pages/DesignFour'
import { DesignOne } from './pages/DesignOne'
import { DesignThree } from './pages/DesignThree'
import { DesignTwo } from './pages/DesignTwo'
import { HomeHub } from './pages/HomeHub'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeHub />} />
      <Route path="/1" element={<DesignOne />} />
      <Route path="/2" element={<DesignTwo />} />
      <Route path="/3" element={<DesignThree />} />
      <Route path="/4" element={<DesignFour />} />
      <Route path="/5" element={<DesignFive />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App
