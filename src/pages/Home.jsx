import React from "react";
import MyModal from "../components/buttons/MyModal";

const Home = () => {
  return (
    <div className="page" style={{ textAlign: "center", fontFamily: "Actor" }}>
      <MyModal buttonLabel="Log In With Strava" />
    </div>
  );
};

export default Home;
