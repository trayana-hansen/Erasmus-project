import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Login } from "./pages/login";
import Cities from "./pages/cityList";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/cityList" element={<Cities />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
