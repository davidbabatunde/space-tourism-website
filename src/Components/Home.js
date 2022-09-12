import React from "react";
import "./Home.scss";

import logo from "../assets/shared/logo.svg";
import hamburger from "../assets/shared/icon-hamburger.svg";

function Home() {
  return (
    <div className="mainHome">
      <header>
        <img id="logo" src={logo} alt="Company Logo" />
        <img src={hamburger} alt="menu button" />
      </header>
      <main>
        <div className="content">
          <p>So, you want to travel to</p>
          <h1>SPACE</h1>
          <p>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div id="explore">
          <h3>EXPLORE</h3>
        </div>
      </main>
    </div>
  );
}

export default Home;
