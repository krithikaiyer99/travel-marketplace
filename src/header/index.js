import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlaneDeparture,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import "./index.css";

const Header = () => {
  const goBack = () => {
    window.history.back();
  };
  return (
    <>
      <nav>
        <div className="logo-container">
          <FontAwesomeIcon
            icon={faArrowLeft}
            className="back-icon"
            onClick={goBack}
          />
          <FontAwesomeIcon icon={faPlaneDeparture} className="logo" />
          <span className="text">TravelConnect</span>
        </div>
      </nav>
      <hr className="horizontal-line" />
    </>
  );
};

export default Header;
