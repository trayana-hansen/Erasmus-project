import "./App.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Login } from "./pages/login";
import { Home } from "./pages/home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={< Login />} />
        <Route path="/" element={< Home />} />
      </Routes>
    </Router>
  );
}

export default App;
