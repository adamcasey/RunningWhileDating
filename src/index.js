// Removing ';' to see if that changes anything
console.log("Adam")

// Try using a different .css file
import './style.css';

// May need to run npm install express ejs -g
const express = require('express');
const app = express();

// Set up view engine; => is an ES6 arrow function for the call back
app.set('view engine', 'ejs');

// Create home route
app.get('/', (req, res) => {
  res.render('home');
});

// Need to install nodemon
app.listen(3001, () => {
  console.log('app is listening on port 3001 for requests');
});

//import "./main.css";
// app.use("/static", express.static('./app/'));
// import { run } from "./app/app.js";
// import {AlertService} from "./app/alert.service";
// import {ComponentService} from "./app/component.service";
// const alertService = new AlertService();
// const componentService = new ComponentService();
// run(alertService, componentService);
