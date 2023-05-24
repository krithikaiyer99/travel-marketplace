import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlaneDeparture } from "@fortawesome/free-solid-svg-icons";
import "./navigation.css";

const NavigationBar = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const getUserFromLocalStorage = () => {
    const user = localStorage.getItem("user");
    if (user) {
      setCurrentUser(JSON.parse(user));
    }
  };

  const handleLogout = () => {
    // Clear the user from local storage and set the currentUser to null
    localStorage.removeItem("user");
    setCurrentUser(null);
  };

  useEffect(() => {
    getUserFromLocalStorage();
  }, []);
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

          {currentUser && currentUser.firstName ? (
            <>
              <li>
                <a href={`/profile/${currentUser._id}`}>
                  {currentUser.firstName.charAt(0).toUpperCase() +
                    currentUser.firstName.slice(1)}
                </a>
              </li>
              <li>
                <a onClick={handleLogout}>Logout</a>
              </li>
            </>
          ) : (
            <li>
              <a href="/signin">Sign In</a>
            </li>
          )}
        </ul>
      </nav>
      <hr className="horizontal-line" />
    </>
  );
};

export default NavigationBar;
