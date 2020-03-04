import React, { Component } from "react";
import { Router, Route } from "react-router-dom";
import history from "./history";
import UserProvider from "./contexts/UserProvider";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import MenuBar from "./components/menus/MenuBar";
//import logo from './logo.svg';
import runningPhoto from "./running.jpg";
import "./App.css";

//const App = () => {
class App extends Component {
  constructor() {
    super();
    this.state = {
      results: {}
    };
  }
  // MenuBar and Profile will depend on whether or not user is logged in so wrap it with UserProvider
  render() {
    return (
      <Router history={history}>
        <UserProvider>
          <Route path="/" component={MenuBar} />
          <Route path="/profile" component={Profile} />
          <div className="App">
            <img src={runningPhoto} alt="Person running" />
            <Route path="/" exact component={Home} />
          </div>
        </UserProvider>
      </Router>
    );
  }
}

export default App;
