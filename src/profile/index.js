import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { updateUserThunk } from "../services/user-thunk";
import { findUserById } from "../services/user-service";
import Header from "../header";
import "./index.css";

const Profile = () => {
  const navigate = useNavigate();
  const id = useParams();
  const dispatch = useDispatch();
  const [user, setUser] = useState({});
  console.log(user);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dob, setDob] = useState({
    day: "1",
    month: "1",
    year: "2023",
  });
  const [gender, setGender] = useState(user.gender || "");
  const [phoneNumber, setPhoneNumber] = useState(user.phone || "");

  useEffect(() => {
    const getPerson = async () => {
      const data = await findUserById(id);
      setUser(data);
      setFirstName(data.firstName || "");
      setLastName(data.lastName || "");
      const userdob = new Date(user.DOB)
      setDob({
        day: userdob ? userdob.getDate() : "",
        month: userdob ? userdob.getMonth() + 1 : "",
        year: userdob ? userdob.getFullYear() : "",
      });
      setGender(data.gender || "");
      setPhoneNumber(data.phone || "");
    };

    getPerson();
  }, []);

  const handleSave = () => {
    const dateofbirth =  new Date(dob.year,dob. month - 1, dob.day)
    const updatedUser = {
      ...user,
      firstName :  firstName,
      lastName :  lastName,
      DOB: dateofbirth,
      gender : gender,
      phone: phoneNumber,
    };
    dispatch(updateUserThunk(updatedUser));
    localStorage.setItem("user", JSON.stringify(updatedUser));
    navigate("/");
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

  const handlePhoneChange = (event) => {
    setPhoneNumber(event.target.value);
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
            value={phoneNumber}
            onChange={handlePhoneChange}
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
