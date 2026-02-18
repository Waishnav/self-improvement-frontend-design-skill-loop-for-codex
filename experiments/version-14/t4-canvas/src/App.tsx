import { Navigate, useRoutes } from 'react-router-dom'
import ConceptOnePage from './pages/ConceptOnePage'
import ConceptTwoPage from './pages/ConceptTwoPage'
import ConceptThreePage from './pages/ConceptThreePage'
import ConceptFourPage from './pages/ConceptFourPage'
import ConceptFivePage from './pages/ConceptFivePage'
import HubPage from './pages/HubPage'

function App() {
  return useRoutes([
    { path: '/', element: <HubPage /> },
    { path: '/1', element: <ConceptOnePage /> },
    { path: '/2', element: <ConceptTwoPage /> },
    { path: '/3', element: <ConceptThreePage /> },
    { path: '/4', element: <ConceptFourPage /> },
    { path: '/5', element: <ConceptFivePage /> },
    { path: '*', element: <Navigate to="/" replace /> },
  ])
}

export default App
