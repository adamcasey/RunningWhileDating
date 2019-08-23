const express = require("express");
const cors = require("cors");
const passport = require("passport");
const StravaStrategy = require("passport-strava");
const keys = require("../config");
const chalk = require("chalk");

let user = {};

// Passport requires these
passport.serializeUser( fn: (user, cb) => {
  cb(null, user);
});

passport.deserializeUser( fn: (user, cb) => {
  cb(null, user);
});

// Strava Strategy
passport.user(new StravaStrategy({
  clientID: keys.STRAVA.clientID,
  clientSecret: keys.STRAVA.clientSecret,
  // What will it do after verifying user with log-in credentials
  callbackUrl: "/auth/strava/callback"
},
  // callback function that will be run right after making request to Strava API
  (accessToken, refreshToken, profile, cb) => {
    console.log(chalk.blue(JSON.stringify(profile)));
    // put all of the key:value pairs from the profile into a 'user' object
    user = { ...profile };
    return cb(null, profile);
  }));
  
// setup the server
const app = express();
// cors will alow us to make requests to Strava
app.user(cors());
app.use(passport.initialize());

// define routes 
// call from front-end to login user with Strava. Will call everything up above
app.get("/auth/strava", passport.authenticate( strategy: "strava"));
// define callback
app.get("/auth/strava/callback", 
  passport.authenticate(("strava"),
    options: (req, res) => {
      res.redirect("/profile");
     }));

// logout a user
app.get("/auth/logout", (req, res) => {
  console.log("logging out");
  user = {};
  res.redirect("/");
})


const PORT = 5000;
app.listen(PORT);
