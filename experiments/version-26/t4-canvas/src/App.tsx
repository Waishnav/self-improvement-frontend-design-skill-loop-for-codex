import { Navigate, Route, Routes } from 'react-router-dom'
import {
  BlueprintAtlasPage,
  CollageLabPage,
  CommandDeckPage,
  EditorialIssuePage,
  HomePage,
  PosterOrbitPage,
} from './pages/StudioPages'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/1" element={<PosterOrbitPage />} />
      <Route path="/2" element={<CommandDeckPage />} />
      <Route path="/3" element={<EditorialIssuePage />} />
      <Route path="/4" element={<BlueprintAtlasPage />} />
      <Route path="/5" element={<CollageLabPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App
