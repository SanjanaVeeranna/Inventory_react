import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import PrimaryHome from "./pages/PrimaryHome";
import SecondaryHome from "./pages/SecondaryHome";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/newInventory" element={<PrimaryHome />} />
        <Route path="/viewInventory" element={<SecondaryHome />} />
      </Routes>
    </Router>
  );
}
