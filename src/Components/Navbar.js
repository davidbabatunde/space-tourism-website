import "./Navbar.scss";
import logo from "../assets/shared/logo.svg";
import hamburger from "../assets/shared/icon-hamburger.svg";

import React from "react";

function Navbar({ setMenu }) {
  return (
    <header>
      <img id="logo" src={logo} height="40px" alt="Company Logo" />
      <img src={hamburger} onClick={() => setMenu(true)} alt="menu button" />
    </header>
  );
}

export default Navbar;
