import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signinThunk, registerThunk } from "../services/user-thunk";
import Header from "../header";
import "./index.css";

const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = (e) => {
    e.preventDefault();
    console.log("Sign in:", email, password);
    dispatch(signinThunk({ email, password })).then((res) => {
      if (!res.payload) {
        console.log(email);
        console.log(password);
        alert("Invalid credentials! Please enter valid credentials!");
      } else {
        console.log("Logged in successfully!!!");
        console.log(res);
        localStorage.setItem("user", JSON.stringify(res.payload));
        navigate("/");
      }
    });
  };

  return (
    <div className="container">
      <Header />
      <h2>Sign In</h2>
      <p className="description">
        Save an average of 15% on thousands of hotels as a member—it’s always
        free.
      </p>
      <form onSubmit={handleSignIn}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button type="submit" className="blue-button">
          Sign In
        </button>
      </form>
    </div>
  );
};

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    // Perform registration logic here
    console.log("Register:", email, password);
    dispatch(registerThunk({ email, password, firstName, lastName })).then((res) => {
      if (!res.payload) {
        console.log(email);
        console.log(password);
        alert("Invalid credentials! Please enter valid credentials!");
      } else {
        console.log("Logged in successfully!!!");
        console.log(res);
        localStorage.setItem("user", JSON.stringify(res.payload));
        navigate("/");
      }
    });
  };

  return (
    <div className="container">
      <Header />
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <br />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button type="submit" className="blue-button">
          Register
        </button>
      </form>
    </div>
  );
};

const SignInOrRegisterPage = () => {
  const [showSignIn, setShowSignIn] = useState(true);

  const toggleSignInOrRegister = () => {
    setShowSignIn(!showSignIn);
  };

  return (
    <div className="main-container">
      {showSignIn ? <SignIn /> : <Register />}
      <p>
        {showSignIn ? "Don't have an account? " : "Already have an account? "}
        <button onClick={toggleSignInOrRegister} className="toggle-button">
          {showSignIn ? "Register" : "Sign In"}
        </button>
      </p>
    </div>
  );
};

export default SignInOrRegisterPage;
