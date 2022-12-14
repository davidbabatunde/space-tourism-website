import React from "react";
import "./Home.scss";
import Navbar from "./Navbar";

function Home({ setMenu }) {
  return (
    <div id="home">
      <Navbar setMenu={setMenu} />
      <div className="mainHome">
        <main id="home">
          <div className="content">
            <p>So, you want to travel to</p>
            <h1>SPACE</h1>
            <p>
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </p>
          </div>

          <div id="explore" onClick={() => setMenu(true)}>
            <h3>EXPLORE</h3>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Home;
