import React, { useState } from "react";

import moonImg from "../assets/destination/image-moon.png";
import marsImg from "../assets/destination/image-mars.png";
import europaImg from "../assets/destination/image-europa.png";
import titanImg from "../assets/destination/image-titan.png";
import "./Destination.scss";
import Navbar from "./Navbar";

import data from "../assets/data.json";

function Destination({ setMenu }) {
  var [num, setNum] = useState(0);

  const images = [moonImg, marsImg, europaImg, titanImg];

  const handleChange = (r) => {
    setNum(r);
    if (r === 0) {
      document.getElementById("moon").classList.add("dActive");
      document.getElementById("mars").classList.remove("dActive");
      document.getElementById("europa").classList.remove("dActive");
      document.getElementById("titan").classList.remove("dActive");
    } else if (r === 1) {
      document.getElementById("moon").classList.remove("dActive");
      document.getElementById("mars").classList.add("dActive");
      document.getElementById("europa").classList.remove("dActive");
      document.getElementById("titan").classList.remove("dActive");
    } else if (r === 2) {
      document.getElementById("moon").classList.remove("dActive");
      document.getElementById("mars").classList.remove("dActive");
      document.getElementById("europa").classList.add("dActive");
      document.getElementById("titan").classList.remove("dActive");
    } else if (r === 3) {
      document.getElementById("moon").classList.remove("dActive");
      document.getElementById("mars").classList.remove("dActive");
      document.getElementById("europa").classList.remove("dActive");
      document.getElementById("titan").classList.add("dActive");
    }
  };

  return (
    <div id="destination">
      <Navbar setMenu={setMenu} />
      <main className="destination">
        <p className="top">
          <span>01</span>PICK YOUR DESTINATION
        </p>
        <img className="earth" src={images[num]} width="170px" alt="Moon" />

        <ul id="destinations">
          <li id="moon" className="dActive" onClick={() => handleChange(0)}>
            MOON
          </li>
          <li id="mars" onClick={() => handleChange(1)}>
            MARS
          </li>
          <li id="europa" onClick={() => handleChange(2)}>
            EUROPA
          </li>
          <li id="titan" onClick={() => handleChange(3)}>
            TITAN
          </li>
        </ul>
        <h2>{data.destinations[num].name}</h2>
        <div className="pee">
          <p className="description">{data.destinations[num].description}</p>
        </div>

        <div className="line"></div>

        <div className="statistics">
          <div className="single">
            <h4>AVG. DISTANCE</h4>
            <h3>{data.destinations[num].distance}</h3>
          </div>
          <div className="single">
            <h4>EST. TRAVEL TIME</h4>
            <h3>{data.destinations[num].travel}</h3>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Destination;
