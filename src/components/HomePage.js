import React from 'react';
import { Link } from 'react-router-dom';
import MyModal from "./MyModal";
import 'bootstrap/dist/css/bootstrap.min.css';

const HomePage = () => {
  return (
    <div>
      <h1>Mile 37</h1>
      <h2>Get Started</h2>
      <ol>
        <li>Review the <Link to="/fuel-savings">demo app</Link></li>
        <li>Remove the demo and start coding: npm run remove-demo</li>
      </ol>
      <div>
        <MyModal />
      </div>
    </div>
  );
};

export default HomePage;
