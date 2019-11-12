import React from "react";
// eslint-disable-next-line 
import Terminal from "../components/displays/Terminal";
import MyModal from '../components/buttons/MyModal';

const Home = () => {

    return (
        <div className="page" style={{ textAlign: "center" }}>
            <p className="page-title">Fast AF</p>
            <MyModal buttonLabel="Log In With Strava"/>
            <p style={{ fontSize: 30 }}>
                So you think you&#8217;re
                <span style={{ color: "var(--primary-red)" }}> fast </span>
                ...
            </p>
            <MyModal buttonLabel="Log In With Strava"/>
            <div style={{ marginBottom: 20 }} />
        </div>
    );
};

export default Home;