import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateUserThunk } from "../services/user-thunk";
import Header from "../header";
import "./index.css";

const Profile = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);

  const [firstName, setFirstName] = useState(user.firstName || "");
  const [lastName, setLastName] = useState(user.lastName || "");
  const [dob, setDob] = useState(
    user.DOB || {
      day: "",
      month: "",
      year: "",
    }
  );
  const [gender, setGender] = useState(user.gender || "");
  const [phoneNumber, setPhoneNumber] = useState(user.phone || "");

  const handleSave = () => {
    const updatedUser = {
      ...user,
      firstName,
      lastName,
      DOB: dob,
      gender,
      phone: phoneNumber,
    };
    dispatch(updateUserThunk(updatedUser));
  };

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleDayChange = (event) => {
    setDob((prevDob) => ({
      ...prevDob,
      day: event.target.value,
    }));
  };

  const handleMonthChange = (event) => {
    setDob((prevDob) => ({
      ...prevDob,
      month: event.target.value,
    }));
  };

  const handleYearChange = (event) => {
    setDob((prevDob) => ({
      ...prevDob,
      year: event.target.value,
    }));
  };

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  return (
    <>
      <Header />
      <div className="profile-section">
        <div className="heading">Name</div>
        <div className="profile-input-box">
          <input
            type="text"
            className="profile-input"
            placeholder="First Name"
            value={firstName}
            onChange={handleFirstNameChange}
          />
        </div>
        <div className="profile-input-box">
          <input
            type="text"
            className="profile-input"
            placeholder="Last Name"
            value={lastName}
            onChange={handleLastNameChange}
          />
        </div>
        <div className="heading">Date of Birth</div>
        <div className="dob-container">
          <div className="dob-input-box">
            <input
              type="text"
              className="dob-input"
              placeholder="Day"
              value={dob.day}
              onChange={handleDayChange}
            />
            <button
              className="counter-button"
              onClick={() => {
                setDob((prevDob) => ({
                  ...prevDob,
                  day: parseInt(prevDob.day || 0) + 1,
                }));
              }}
            >
              +
            </button>
            <button
              className="counter-button"
              onClick={() => {
                setDob((prevDob) => ({
                  ...prevDob,
                  day: Math.max(0, parseInt(prevDob.day || 0) - 1),
                }));
              }}
            >
              -
            </button>
          </div>
          <div className="dob-input-box">
            <input
              type="text"
              className="dob-input"
              placeholder="Month"
              value={dob.month}
              onChange={handleMonthChange}
            />
            <button
              className="counter-button"
              onClick={() => {
                setDob((prevDob) => ({
                  ...prevDob,
                  month: parseInt(prevDob.month || 0) + 1,
                }));
              }}
            >
              +
            </button>
            <button
              className="counter-button"
              onClick={() => {
                setDob((prevDob) => ({
                  ...prevDob,
                  month: Math.max(0, parseInt(prevDob.month || 0) - 1),
                }));
              }}
            >
              -
            </button>
          </div>
          <div className="dob-input-box">
            <input
              type="text"
              className="dob-input"
              placeholder="Year"
              value={dob.year}
              onChange={handleYearChange}
            />
            <button
              className="counter-button"
              onClick={() => {
                setDob((prevDob) => ({
                  ...prevDob,
                  year: parseInt(prevDob.year || 0) + 1,
                }));
              }}
            >
              +
            </button>
            <button
              className="counter-button"
              onClick={() => {
                setDob((prevDob) => ({
                  ...prevDob,
                  year: Math.max(0, parseInt(prevDob.year || 0) - 1),
                }));
              }}
            >
              -
            </button>
          </div>
        </div>
        <div className="heading">Gender</div>
        <div className="radio-button-container">
          <label className="radio-label">
            <input
              type="radio"
              name="gender"
              value="male"
              checked={gender === "male"}
              onChange={handleGenderChange}
            />
            Male
          </label>
          <label className="radio-label">
            <input
              type="radio"
              name="gender"
              value="female"
              checked={gender === "female"}
              onChange={handleGenderChange}
            />
            Female
          </label>
          <label className="radio-label">
            <input
              type="radio"
              name="gender"
              value="other"
              checked={gender === "other"}
              onChange={handleGenderChange}
            />
            Other
          </label>
        </div>
        <div className="heading">Contact information</div>
        <div className="profile-input-box">
          <input
            type="text"
            className="profile-input"
            placeholder="Phone Number"
            value={firstName}
            onChange={handleFirstNameChange}
          />
        </div>
        <div className="save-button" onClick={handleSave}>
          Save
        </div>
      </div>
    </>
  );
};

export default Profile;
