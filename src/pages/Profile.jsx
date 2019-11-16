import React, { useContext, useState } from "react";
import UserProvider from "../contexts/UserProvider";
// import Terminal from "../components/displays/Terminal";
// import Col from "../components/wrappers/Col";
// import DataTags from "../components/menus/DataTags";
import CalculateSpeed from "../components/displays/CalculateSpeed";
import _ from "lodash";

//const LoginMsg = "Please login to your Strava account";

const Profile = () => {


    const userData = useContext(UserProvider.context);
    //const text = _.isEmpty(userData) ? LoginMsg : "How fast are you...";

    return (
        <div className="page">
            <CalculateSpeed acccesToken={userData.token}/>
        </div>
    );
};

export default Profile;
