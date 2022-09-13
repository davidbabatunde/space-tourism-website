import React, { useState } from "react";
import data from "../assets/data.json";
import "./Crew.scss";
import picture from "../assets/crew/image-douglas-hurley.png";

function Crew() {
  var [member, setMember] = useState(0);

  return (
    <div id="crew">
      <p className="top">
        <span>01</span>MEET YOUR CREW
      </p>
      <img className="hero" src={picture} alt="Crew Member" />
      <div className="container">
        <div className="indicator active" onClick={() => setMember(0)}></div>
        <div className="indicator" onClick={() => setMember(1)}></div>
        <div className="indicator" onClick={() => setMember(2)}></div>
        <div className="indicator" onClick={() => setMember(3)}></div>
      </div>
      <article>
        <h2 className="role">{data.crew[member].role}</h2>
        <h3 className="name">{data.crew[member].name}</h3>
        <p className="bio">{data.crew[member].bio}</p>
      </article>
    </div>
  );
}

export default Crew;
