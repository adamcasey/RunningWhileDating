// eslint-disable-next-line
import React, { useContext, useState, Component } from "react";
// eslint-disable-next-line
import UserProvider from "../contexts/UserProvider";
import CalculateSpeed from "../data/CalculateSpeed";
// eslint-disable-next-line
import _ from "lodash";

class Profile extends Component {
  //const text = _.isEmpty(userData) ? LoginMsg : "How fast are you...";
  render() {
    return (
      <div className="page">
        <CalculateSpeed />
      </div>
    );
  }
}

export default Profile;
