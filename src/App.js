import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { useState } from "react";
import "./App.css";
import Destination from "./Components/Destination";
import Home from "./Components/Home";
import Menu from "./Components/Menu";

import Crew from "./Components/Crew";
import Technology from "./Components/Technology";

function App() {
  const [menu, setMenu] = useState(false);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home setMenu={setMenu} />} />
        <Route
          path="/destinations"
          element={<Destination setMenu={setMenu} />}
        />
        <Route path="/crew" element={<Crew setMenu={setMenu} />} />
        <Route path="/technology" element={<Technology setMenu={setMenu} />} />
      </Routes>
      {menu && <Menu setMenu={setMenu} />}
    </Router>
  );
}

export default App;
