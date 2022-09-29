import "./Navbar.scss";
import logo from "../assets/shared/logo.svg";
import { Link } from "react-router-dom";
import hamburger from "../assets/shared/icon-hamburger.svg";

import React from "react";

function Navbar({ setMenu }) {
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
        <li>
          <Link className="item" to="/" onClick={() => setMenu(false)}>
            <span className="white">00</span>HOME
          </Link>
        </li>
        <li>
          <Link
            className="item"
            to="/destinations"
            onClick={() => setMenu(false)}
          >
            <span className="white">01</span>DESTINATION
          </Link>
        </li>
        <li>
          <Link className="item" to="/crew" onClick={() => setMenu(false)}>
            <span className="white">02</span>CREW
          </Link>
        </li>
        <li>
          <Link
            className="item"
            to="/technology"
            onClick={() => setMenu(false)}
          >
            <span className="white">03</span>TECHNOLOGY
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Navbar;
