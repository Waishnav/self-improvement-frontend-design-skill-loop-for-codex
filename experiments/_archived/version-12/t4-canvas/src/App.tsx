import { Navigate, Route, Routes } from "react-router-dom";
import HomeHub from "./pages/HomeHub";
import RouteFive from "./pages/RouteFive";
import RouteFour from "./pages/RouteFour";
import RouteOne from "./pages/RouteOne";
import RouteThree from "./pages/RouteThree";
import RouteTwo from "./pages/RouteTwo";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeHub />} />
      <Route path="/1" element={<RouteOne />} />
      <Route path="/2" element={<RouteTwo />} />
      <Route path="/3" element={<RouteThree />} />
      <Route path="/4" element={<RouteFour />} />
      <Route path="/5" element={<RouteFive />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
