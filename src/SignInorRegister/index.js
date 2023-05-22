import React, { useState } from 'react';
import "./index.css"
const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = (e) => {
    e.preventDefault();
    // Perform sign-in logic here
    console.log('Sign in:', email, password);
  };

  return (
    <div className="container">
      <h2>Sign In</h2>
      <p className="description">
        Save an average of 15% on thousands of hotels as a member—it’s always free.
      </p>
      <form onSubmit={handleSignIn}>
          <input
            type="email"
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        <br />
          <input
            type="password"
            placeholder='Password'
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
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    // Perform registration logic here
    console.log('Register:', email, password);
  };

  return (
    <div className="container">
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
          <input
            type="email"
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        <br />
          <input
            type="password"
            placeholder='Password'
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
    <div className='main-container'>
      {showSignIn ? <SignIn /> : <Register />}
      <p>
        {showSignIn
          ? "Don't have an account? "
          : 'Already have an account? '}
        <button onClick={toggleSignInOrRegister} className="toggle-button">
          {showSignIn ? 'Register' : 'Sign In'}
        </button>
      </p>
    </div>
  );
};

export default SignInOrRegisterPage;
