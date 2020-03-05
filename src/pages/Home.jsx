import React from "react";

const Home = () => {
  function handleClick() {
    console.log("I've been clicked");
  }

  return (
    <div className="page" style={{ textAlign: "center", fontFamily: "Actor" }}>
      <button
        type="button"
        className="btn btn-primary btn-lg"
        onClick={handleClick}
        style={{ backgroundColor: "#FC6100", border: "none" }}
      >
        Am I fast AF?
      </button>
    </div>
  );
};

export default Home;
