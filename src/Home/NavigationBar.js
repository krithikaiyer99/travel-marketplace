import React from "react";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlaneDeparture } from "@fortawesome/free-solid-svg-icons";
import "./navigation.css";

const NavigationBar = () => {
  const user = useSelector((state) => state.user.user);
  console.log(user)
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
            {user && user.firstName ? (
              <a href={`/profile/${user._id}`}>{user.firstName}</a>
            ) : (
              <a href="/signin">Sign In</a>
            )}
          </li>
        </ul>
      </nav>
      <hr className="horizontal-line" />
    </>
  );
};

export default NavigationBar;
