import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { faMapMarkerAlt, faCalendar } from "@fortawesome/free-solid-svg-icons";

import "./index.css";

const SearchBox = () => {
  const [selectedItem, setSelectedItem] = useState("Stays");
  const [numTravelers, setNumTravelers] = useState(1);
  const [showLocations, setShowLocations] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [suggestions, setSuggestions] = useState([
    "New York, NY",
    "Seattle, WA",
    "Boston, MA",
  ]);

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setSearchQuery(item);
  };

  const handleNumTravelersChange = (event) => {
    setNumTravelers(event.target.value);
  };
  const handleLocationClick = () => {
    setShowLocations(!showLocations);
  };

  const handleSearchChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);

    // Perform search logic here to fetch suggestions based on the query
    const fetchedSuggestions = []; // Replace with your own search logic
    setSuggestions(fetchedSuggestions);
  };

  const handleCheckInDateChange = (date) => {
    setCheckInDate(date);
  };

  const handleCheckOutDateChange = (date) => {
    setCheckOutDate(date);
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
            <div className="search-box-where" onClick={handleLocationClick}>
              <FontAwesomeIcon icon={faMapMarkerAlt} />{" "}
              <input
                type="text"
                className="search-input"
                placeholder="Going to"
                value={searchQuery}
                onChange={handleSearchChange}
              />
              {showLocations && (
                <ul className="suggestions">
                  {suggestions.map((item, index) => (
                    <li key={index} onClick={() => handleItemClick(item)}>
                      <FontAwesomeIcon icon={faMapMarkerAlt} />
                      {" " + item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div className="search-box-checkinout">
              <FontAwesomeIcon icon={faCalendar} />
              <DatePicker
                selected={checkInDate}
                onChange={handleCheckInDateChange}
                placeholderText="Check-in"
                className="datepicker-input"
              />
            </div>
            <div className="search-box-checkinout">
              <FontAwesomeIcon icon={faCalendar} />
              <DatePicker
                selected={checkOutDate}
                onChange={handleCheckOutDateChange}
                placeholderText="Check-out"
                className="datepicker-input"
              />
            </div>
          </div>
          <div className="button-container">
            <div className="search-go-button">
              <span>Search</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBox;
