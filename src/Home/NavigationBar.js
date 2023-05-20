import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlaneDeparture } from '@fortawesome/free-solid-svg-icons';
import "./navigation.css";

const NavigationBar = () => {
  return (
    <>
    <nav>
      <div className="logo-container">
        <FontAwesomeIcon icon={faPlaneDeparture} className="logo" />
        <span className="text">TravelConnect</span>
      </div>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/tour">Tour</a>
        </li>
        <li>
          <a href="/login">Sign In</a>
        </li>
      </ul>
    </nav>
    <hr className="horizontal-line" />
    </>
  );
};

export default NavigationBar;
