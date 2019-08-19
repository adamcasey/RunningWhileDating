import React from 'react';
import { Link } from 'react-router-dom';
import MyModal from "./MyModal";

const HomePage = () => {
  return (
    <div>
      <h1>Mile 37</h1>
      <h2>Get Started</h2>
      <ol>
        <li>Review the <Link to="/fuel-savings">demo app</Link></li>
        <li>Remove the demo and start coding: npm run remove-demo</li>
      </ol>
      <div className="MyModal" buttonLabel="Login">
        <MyModal />
      </div>
    </div>
  );
};

export default HomePage;
