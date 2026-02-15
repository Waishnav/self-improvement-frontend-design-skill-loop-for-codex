import { Navigate, Route, Routes } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { RouteOne } from './pages/RouteOne'
import { RouteTwo } from './pages/RouteTwo'
import { RouteThree } from './pages/RouteThree'
import { RouteFour } from './pages/RouteFour'
import { RouteFive } from './pages/RouteFive'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/1" element={<RouteOne />} />
      <Route path="/2" element={<RouteTwo />} />
      <Route path="/3" element={<RouteThree />} />
      <Route path="/4" element={<RouteFour />} />
      <Route path="/5" element={<RouteFive />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App
