import React, { useState } from "react";
import data from "../assets/data.json";
import "./Crew.scss";
import picture1 from "../assets/crew/image-douglas-hurley.png";
import picture2 from "../assets/crew/image-mark-shuttleworth.png";
import picture3 from "../assets/crew/image-victor-glover.png";
import picture4 from "../assets/crew/image-anousheh-ansari.png";

function Crew() {
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
      member === 4 ? setMember(1) : setMember(member + 1);
    }
    if (isRightSwipe) {
      member === 1 ? setMember(4) : setMember(member - 1);
    }

    // ? member === 4
    //   // ? setMember(1)
    //   : setMember(member + 1)
    // : member === 1
    // ? setMember(4)
    // : setMember(member - 1);

    // add your conditional logic here
  };

  return (
    <div
      id="crew"
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
          onClick={() => {
            document.getElementById("member1").classList.add("active");
            document.getElementById("member2").classList.remove("active");
            document.getElementById("member3").classList.remove("active");
            document.getElementById("member4").classList.remove("active");
            setMember(0);
          }}
        ></div>
        <div
          id="member2"
          className="indicator"
          onClick={() => {
            document.getElementById("member1").classList.remove("active");
            document.getElementById("member2").classList.add("active");
            document.getElementById("member3").classList.remove("active");
            document.getElementById("member4").classList.remove("active");
            setMember(1);
          }}
        ></div>
        <div
          id="member3"
          className="indicator"
          onClick={() => {
            document.getElementById("member1").classList.remove("active");
            document.getElementById("member2").classList.remove("active");
            document.getElementById("member3").classList.add("active");
            document.getElementById("member4").classList.remove("active");
            setMember(2);
          }}
        ></div>
        <div
          id="member4"
          className="indicator"
          onClick={() => {
            document.getElementById("member1").classList.remove("active");
            document.getElementById("member2").classList.remove("active");
            document.getElementById("member3").classList.remove("active");
            document.getElementById("member4").classList.add("active");
            setMember(3);
          }}
        ></div>
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
