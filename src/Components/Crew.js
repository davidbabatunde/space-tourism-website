import React, { useState } from "react";
import data from "../assets/data.json";
import "./Crew.scss";
import Navbar from "./Navbar";
import picture1 from "../assets/crew/image-douglas-hurley.png";
import picture2 from "../assets/crew/image-mark-shuttleworth.png";
import picture3 from "../assets/crew/image-victor-glover.png";
import picture4 from "../assets/crew/image-anousheh-ansari.png";

function Crew({ setMenu }) {
  var [member, setMember] = useState(0);
  const images = [picture1, picture2, picture3, picture4];

  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null); // otherwise the swipe is fired even with usual touch events
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      member === 3 ? handleChange(0) : handleChange(member + 1);
    }
    if (isRightSwipe) {
      member === 0 ? handleChange(3) : handleChange(member - 1);
    }
  };

  const handleChange = (r) => {
    setMember(r);
    if (r === 0) {
      document.getElementById("member1").classList.add("active");
      document.getElementById("member2").classList.remove("active");
      document.getElementById("member3").classList.remove("active");
      document.getElementById("member4").classList.remove("active");
    } else if (r === 1) {
      document.getElementById("member1").classList.remove("active");
      document.getElementById("member2").classList.add("active");
      document.getElementById("member3").classList.remove("active");
      document.getElementById("member4").classList.remove("active");
    } else if (r === 2) {
      document.getElementById("member1").classList.remove("active");
      document.getElementById("member2").classList.remove("active");
      document.getElementById("member3").classList.add("active");
      document.getElementById("member4").classList.remove("active");
    } else if (r === 3) {
      document.getElementById("member1").classList.remove("active");
      document.getElementById("member2").classList.remove("active");
      document.getElementById("member3").classList.remove("active");
      document.getElementById("member4").classList.add("active");
    }
  };

  return (
    <div id="crew">
      <Navbar setMenu={setMenu} />
      <div
        id="major"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <p className="top">
          <span>02</span>MEET YOUR CREW
        </p>
        <img className="hero" src={images[member]} alt="Crew Member" />
        <div className="container">
          <div
            id="member1"
            className="indicator active"
            onClick={() => handleChange(0)}
          ></div>
          <div
            id="member2"
            className="indicator"
            onClick={() => handleChange(1)}
          ></div>
          <div
            id="member3"
            className="indicator"
            onClick={() => handleChange(2)}
          ></div>
          <div
            id="member4"
            className="indicator"
            onClick={() => handleChange(3)}
          ></div>
        </div>
        <article>
          <h2 className="role">{data.crew[member].role}</h2>
          <h3 className="name">{data.crew[member].name}</h3>
          <p className="bio">{data.crew[member].bio}</p>
        </article>
      </div>
    </div>
  );
}

export default Crew;
