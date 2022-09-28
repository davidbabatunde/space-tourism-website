import React, { useState } from "react";
import data from "../assets/data.json";
import "./Technology.scss";
import picture1 from "../assets/technology/image-launch-vehicle-landscape.jpg";
import picture2 from "../assets/technology/image-spaceport-landscape.jpg";
import picture3 from "../assets/technology/image-space-capsule-landscape.jpg";

function Technology() {
  var [tech, setTech] = useState(0);

  const images = [picture1, picture2, picture3];

  return (
    <div id="crew">
      <p className="top">
        <span>03</span>SPACE LAUNCH 101
      </p>
      <img className="techHero" src={images[tech]} alt="Technology" />
      <div className="container">
        <div
          id="one"
          className="slide act"
          onClick={() => {
            document.getElementById("one").classList.add("act");
            document.getElementById("two").classList.remove("act");
            document.getElementById("three").classList.remove("act");
            setTech(0);
          }}
        >
          1
        </div>
        <div
          id="two"
          className="slide"
          onClick={() => {
            document.getElementById("one").classList.remove("act");
            document.getElementById("two").classList.add("act");
            document.getElementById("three").classList.remove("act");
            setTech(1);
          }}
        >
          2
        </div>
        <div
          id="three"
          className="slide"
          onClick={() => {
            document.getElementById("one").classList.remove("act");
            document.getElementById("two").classList.remove("act");
            document.getElementById("three").classList.add("act");
            setTech(2);
          }}
        >
          3
        </div>
      </div>
      <article>
        <h2 className="role">THE TERMINOLOGY...</h2>
        <h3 className="name">{data.technology[tech].name}</h3>
        <p className="bio">{data.technology[tech].description}</p>
      </article>
    </div>
  );
}

export default Technology;
