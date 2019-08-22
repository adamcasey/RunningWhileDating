import React from 'react';
//import logo from './logo.svg';
import logo from './running.jpg';
import './App.css';
import MyModal from './MyModal';

function App() {
  return (
    <div className="App">
        <img src={logo} alt="logo" />
        <MyModal buttonLabel="Log In With Strava"/>
    </div>
  );
}

export default App;
