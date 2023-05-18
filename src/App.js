import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import NavigationBar from './Home/NavigationBar';
import Home from './Home'

const App = () => {
  return (
    <div>
      <NavigationBar />
      <Home/>
    </div>
  );
}

export default App;
