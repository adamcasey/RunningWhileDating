import React, { useContext, useState } from "react";
import UserProvider from "../contexts/UserProvider";
// import Terminal from "../components/displays/Terminal";
// import Col from "../components/wrappers/Col";
// import DataTags from "../components/menus/DataTags";
import CalculateSpeed from "../components/displays/CalculateSpeed";
import _ from "lodash";

const LoginMsg = "Please login to your Strava account";

const Profile = () => {
    const [selected, setSelected] = useState("All");
    const userData = useContext(UserProvider.context);
    const text = _.isEmpty(userData) ? LoginMsg : "Explore Your Data";
    const options = Object.keys(userData).filter(key => {
        return userData[key] !== null;
    });

    const selectedData = selected === "All" ? userData : userData[selected];
    //const jsonCode = JSON.stringify(selectedData, null, 4);
    //const jsonParsed = JSON.parse(jsonCode);
    //const items = jsonCode.map(n => ({ value : n }));
    return (
        <div className="page">
            <p className="page-title" style={{ textAlign: "center"}}>
                {text}
            </p>
            <CalculateSpeed 
                acccesToken={userData.token}
                options={options}
                selected={selected}
            />
            <div/>
        </div>
    );
};

export default Profile;
