import React from "react";
import { Link } from "react-router-dom";
import close from "../assets/shared/icon-close.svg";
import "./Menu.scss";

function Menu({ setMenu }) {
  return (
    <div className="modalBack">
      <div className="modal">
        <img
          className="closeBtn"
          src={close}
          onClick={() => {
            setMenu(false);
          }}
          alt="close"
        />
        <ul className="menu-list">
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
      </div>
    </div>
  );
}

export default Menu;
