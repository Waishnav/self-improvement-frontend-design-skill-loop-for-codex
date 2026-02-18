import { Navigate, Route, Routes } from 'react-router-dom'
import DesignFivePage from './pages/DesignFivePage'
import DesignFourPage from './pages/DesignFourPage'
import DesignOnePage from './pages/DesignOnePage'
import DesignThreePage from './pages/DesignThreePage'
import DesignTwoPage from './pages/DesignTwoPage'
import GalleryPage from './pages/GalleryPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<GalleryPage />} />
      <Route path="/1" element={<DesignOnePage />} />
      <Route path="/2" element={<DesignTwoPage />} />
      <Route path="/3" element={<DesignThreePage />} />
      <Route path="/4" element={<DesignFourPage />} />
      <Route path="/5" element={<DesignFivePage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App
