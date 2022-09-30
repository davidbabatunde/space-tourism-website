import "./Navbar.scss";
import logo from "../assets/shared/logo.svg";
import { Link } from "react-router-dom";
import hamburger from "../assets/shared/icon-hamburger.svg";

import React from "react";

function Navbar({ setMenu }) {
  const handleChange = (r) => {
    setMenu(false);
    if (r === 0) {
      document.getElementById("homeLink").classList.add("navActive");
      document.getElementById("destinationLink").classList.remove("navActive");
      document.getElementById("crewLink").classList.remove("navActive");
      document.getElementById("technologyLink").classList.remove("navActive");
    } else if (r === 1) {
      document.getElementById("homeLink").classList.remove("navActive");
      document.getElementById("destinationLink").classList.add("navActive");
      document.getElementById("crewLink").classList.remove("navActive");
      document.getElementById("technologyLink").classList.remove("navActive");
    } else if (r === 2) {
      document.getElementById("homeLink").classList.remove("navActive");
      document.getElementById("destinationLink").classList.remove("navActive");
      document.getElementById("crewLink").classList.add("navActive");
      document.getElementById("technologyLink").classList.remove("navActive");
    } else if (r === 3) {
      document.getElementById("homeLink").classList.remove("navActive");
      document.getElementById("destinationLink").classList.remove("navActive");
      document.getElementById("crewLink").classList.remove("navActive");
      document.getElementById("technologyLink").classList.add("navActive");
    }
  };

  return (
    <header>
      <img id="logo" src={logo} height="40px" alt="Company Logo" />
      <img
        id="hamburger"
        src={hamburger}
        onClick={() => setMenu(true)}
        alt="menu button"
      />
      <ul id="menu-list">
        <li id="homeLink" className="navActive">
          <Link className="item" to="/" onClick={() => handleChange(0)}>
            <span className="white">00</span>HOME
          </Link>
        </li>
        <li id="destinationLink">
          <Link
            className="item"
            to="/destinations"
            onClick={() => handleChange(1)}
          >
            <span className="white">01</span>DESTINATION
          </Link>
        </li>
        <li id="crewLink">
          <Link className="item" to="/crew" onClick={() => handleChange(2)}>
            <span className="white">02</span>CREW
          </Link>
        </li>
        <li id="technologyLink">
          <Link
            className="item"
            to="/technology"
            onClick={() => handleChange(3)}
          >
            <span className="white">03</span>TECHNOLOGY
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Navbar;
