import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Provider } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './home';
import SignIn from './signin';
import Profile from './profile'
import { store } from "./store";

const App = () => {
  return (
    <Provider store={store}>
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/profile/:id" element={<Profile />} />
        </Routes>
      </div>
    </Router>
    </Provider>
  );
}

export default App;
