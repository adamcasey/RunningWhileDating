import React from "react";
import Terminal from "../components/displays/Terminal";
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
            <p style={{ fontSize: 20 }}>
                Running is hard. Dating is even harder.
                <span style={{ color: "var(--primary-red)" }}> We're here to help. </span>
                Get started today with just your Strava account.
            </p>
            <p style={{ fontSize: 28}}>
                Popular Strategies
            </p>
            <div style={{ marginBottom: 20 }} />
        </div>
    );
};

export default Home;