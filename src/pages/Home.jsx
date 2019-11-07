import React from "react";
// eslint-disable-next-line 
import Terminal from "../components/displays/Terminal";

import MyModal from '../components/buttons/MyModal';

//import CardList from "../components/cards/CardList";

/*
            <p style={{ fontSize: 28}}>
                Popular Strategies
            </p>
            <CardList />
            <div style={{ marginBottom: 20 }} />
        </div>

*/

const Home = () => {
    return (
        <div className="page" style={{ textAlign: "center" }}>
            <p className="page-title">Mile 37</p>
            <MyModal buttonLabel="Log In With Strava"/>
            <p style={{ fontSize: 20 }}>
                Running is hard. Dating is even harder.
                <span style={{ color: "var(--primary-red)" }}> We're here to help. </span>
                Get started today with just your Strava account.
            </p>
            <MyModal buttonLabel="Log In With Strava"/>
            <div style={{ marginBottom: 20 }} />
        </div>
    );
};

export default Home;