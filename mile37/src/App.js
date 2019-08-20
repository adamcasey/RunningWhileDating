import React from 'react';
//import logo from './logo.svg';
import logo from './running.jpg';
import './App.css';
import MyModal from './MyModal';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="logo" />
        Mile 37
      </header>
      <MyModal buttonLabel="Log In With Strava"/>
    </div>
  );
}

export default App;
