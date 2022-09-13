import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { useState } from "react";
import "./App.css";
import Destination from "./Components/Destination";
import Home from "./Components/Home";
import Menu from "./Components/Menu";
import Navbar from "./Components/Navbar";
import Crew from "./Components/Crew";

function App() {
  const [menu, setMenu] = useState(false);
  return (
    <Router>
      <>
        <Navbar setMenu={setMenu} />
        <Routes>
          <Route path="/" element={<Home setMenu={setMenu} />} />
          <Route path="/destinations" element={<Destination />} />
          <Route path="/crew" element={<Crew />} />
        </Routes>
        {menu && <Menu setMenu={setMenu} />}
      </>
    </Router>
  );
}

export default App;
