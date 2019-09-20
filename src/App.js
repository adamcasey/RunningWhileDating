import React from 'react';
import { Router, Route } from "react-router-dom";
import history from "./history";
import UserProvider from "./contexts/UserProvider";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import MenuBar from "./components/menus/MenuBar";
//import logo from './logo.svg';
import logo from './running.jpg';
import './App.css';
import MyModal from './MyModal';

const App = () => {
  // MenuBar and Profile will depend on whether or not user is logged in so wrap it with UserProvider
  return (
      <Router history={history}>
        <UserProvider>
          <Route path="/" component={MenuBar} />
          <Route path="/profile" component={Profile} />
        </UserProvider>
        <div className="App">
          <img src={logo} alt="logo" />
          <MyModal buttonLabel="Log In With Strava"/>
          <Route path="/" exact component={Home} />
        </div>
      </Router>
    );
};

export default App;
