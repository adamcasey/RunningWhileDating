import React, { useContext, useState } from "react";
import UserProvider from "../contexts/UserProvider";
import Terminal from "../components/displays/Terminal";
import Col from "../components/wrappers/Col";
import DataTags from "../components/menus/DataTags";
import _ from "lodash";

const LoginMsg = "Uh oh, there's nothing to show! " +
    "Login to see how much of your invaluable personal " +
    "data tech companies have at their disposal.";

const Profile = () => {
    const [selected, setSelected] = useState("All");
    const userData = useContext(UserProvider.context);
    const text = _.isEmpty(userData) ? LoginMsg : "Explore Your Data";
    const options = Object.keys(userData).filter(key => {
        return userData[key] !== null;
    });

    const selectedData = selected === "All" ? userData : userData[selected];
    const jsonCode = JSON.stringify(selectedData, null, 4);
    const jsonParsed = JSON.parse(jsonCode);
    //const items = jsonCode.map(n => ({ value : n }));
    return (
        <div className="page">
            <p className="page-title" style={{ textAlign: "center"}}>
                {text}
            </p>
            <Col className="col-4" style={{ verticalAlign: "top"}}>
                <DataTags
                    options={options}
                    onClick={option => setSelected(option)}
                    selected={selected}
                />
            </Col>
            <Col className="col-10">
                <Terminal
                    userData={userData}
                    selected={selected}
                />
            </Col>
            <div style= {{ marginBottom: 30 }} />
        </div>
    );
};

export default Profile;
