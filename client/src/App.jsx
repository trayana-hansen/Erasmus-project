import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Login } from "./pages/login";
import { Cities } from "./pages/cityList";
import { RouteInfo } from "./pages/routeInfo";
import { Home } from "./pages/home";
import { Register } from "./pages/register";
import { RoutesPage } from "./pages/routes";
import { RouteInfo } from "./pages/route";
import { Profile } from "./pages/profile";
import "./assets/styling/app.scss";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cities" element={<Cities />} />
        <Route path="/:city/:cityId/routes" element={<RoutesPage />} />
        <Route path="/user/:id/profile" element={<Profile />} />
        <Route path="/" element={<Home />} />
        <Route path="/route" element={<RouteInfo />} />
      </Routes>
    </Router>
  );
}

export default App;
