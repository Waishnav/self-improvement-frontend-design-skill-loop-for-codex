import { Navigate, Route, Routes } from 'react-router-dom'
import { RouteSwitcher } from './components/RouteSwitcher'
import { DesignOne } from './routes/DesignOne'
import { DesignTwo } from './routes/DesignTwo'
import { DesignThree } from './routes/DesignThree'
import { DesignFour } from './routes/DesignFour'
import { DesignFive } from './routes/DesignFive'

function App() {
  return (
    <div className="min-h-screen">
      <RouteSwitcher />
      <Routes>
        <Route path="/" element={<Navigate to="/1" replace />} />
        <Route path="/1" element={<DesignOne />} />
        <Route path="/2" element={<DesignTwo />} />
        <Route path="/3" element={<DesignThree />} />
        <Route path="/4" element={<DesignFour />} />
        <Route path="/5" element={<DesignFive />} />
      </Routes>
    </div>
  )
}

export default App
