import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import DesignOne from './routes/DesignOne'
import DesignTwo from './routes/DesignTwo'
import DesignThree from './routes/DesignThree'
import DesignFour from './routes/DesignFour'
import DesignFive from './routes/DesignFive'
import Home from './routes/Home'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/1" element={<DesignOne />} />
        <Route path="/2" element={<DesignTwo />} />
        <Route path="/3" element={<DesignThree />} />
        <Route path="/4" element={<DesignFour />} />
        <Route path="/5" element={<DesignFive />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
