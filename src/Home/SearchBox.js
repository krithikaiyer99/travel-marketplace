import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faCalendar } from "@fortawesome/free-solid-svg-icons";

import "./index.css";

const SearchBox = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [numTravelers, setNumTravelers] = useState(1);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const handleNumTravelersChange = (event) => {
    setNumTravelers(event.target.value);
  };

  return (
    <div className="search-box-outer-container">
      <div className="search-box-container">
        <div className="search-box-inner">
          <div className="search-items">
            <ul>
              <li
                className={selectedItem === "Stays" ? "selected" : ""}
                onClick={() => handleItemClick("Stays")}
              >
                Stays
              </li>
              <li
                className={selectedItem === "Flights" ? "selected" : ""}
                onClick={() => handleItemClick("Flights")}
              >
                Flights
              </li>
              <li
                className={selectedItem === "Cars" ? "selected" : ""}
                onClick={() => handleItemClick("Cars")}
              >
                Cars
              </li>
              <li
                className={selectedItem === "Packages" ? "selected" : ""}
                onClick={() => handleItemClick("Packages")}
              >
                Packages
              </li>
              <li
                className={selectedItem === "Things to do" ? "selected" : ""}
                onClick={() => handleItemClick("Things to do")}
              >
                Things to do
              </li>
              <li
                className={selectedItem === "Crusies" ? "selected" : ""}
                onClick={() => handleItemClick("Crusies")}
              >
                Crusies
              </li>
            </ul>
          </div>
          <div className="travelers-dropdown">
            <select
              id="numTravelers"
              value={numTravelers}
              onChange={handleNumTravelersChange}
            >
              <option value={1}>1 room, 2 travelers</option>
              <option value={2}>2 room, 2 travelers</option>
              <option value={3}>3 room, 2 travelers</option>
              <option value={4}>4 room, 2 travelers</option>
              <option value={5}>5 room, 2 travelers</option>
            </select>
          </div>
          <div className="search-box-search-field">
            <div className="search-box-where">
              <FontAwesomeIcon icon={faMapMarkerAlt} />{" "}
              <span className="placeholder">Going to</span>
            </div>
            <div className="search-box-checkinout">
              <FontAwesomeIcon icon={faCalendar} />
              <span className="placeholder">Check-in</span>
            </div>
            <div className="search-box-checkinout">
              <FontAwesomeIcon icon={faCalendar} />
              <span className="placeholder">Check-out</span>
            </div>
          </div>
          <div className="button-container">
            <div className="search-go-button">
              <span >Search</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBox;
