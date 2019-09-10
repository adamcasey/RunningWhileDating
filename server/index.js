const express = require("express");
const cors = require("cors");
const passport = require("passport");
//const StravaStrategy = require("passport-strava").Strategy;
const keys = require("../config");
const chalk = require("chalk");
require('https').globalAgent.options.rejectUnauthorized = false;

//var StravaStrategy = require('passport-strava').Strategy;
var StravaStrategy = require('passport-strava-oauth2').Strategy
var util = require('util')

let user = {};

// Passport requires these
passport.serializeUser( (user, cb) => {
  cb(null, user);
});

passport.deserializeUser( (user, cb) => {
  cb(null, user);
});

// Strava Strategy
passport.use(new StravaStrategy({
  clientID: keys.STRAVA.clientID,
  clientSecret: keys.STRAVA.clientSecret,
  // What will it do after verifying user with log-in credentials
  callbackURL: "http://localhost:3000/auth/strava/callback",
  approvalPrompt: 'force'
  //callbackURL: "/auth/strava/callback"
},
                                
  // callback function that will be run right after making request to Strava API
  (accessToken, refreshToken, profile, cb) => {
    console.log("Passport callback function fired");
    //console.log(chalk.blue(JSON.stringify(profile)));
    // put all of the key:value pairs from the profile into a 'user' object
    user = { ...profile };

    User.findOrCreate({ stravaId: profile.id }, (err, user) => {
      return cb(err, user);
    });
  /*
  function(accessToken, refreshToken, profile, done) {
    // asynch verification
    process.nextTick(function () {
      return done(null, profile);
    });  
  */
 }));

// setup the server
const app = express();
// cors will alow us to make requests to Strava
app.use(cors());
app.use(passport.initialize());

// requiring a directory automatically pulls from the index.js that is in that directory
//app.use(require('./routes');

// call from front-end to login user with Strava. Will call everything up above
app.get('/auth/strava',
  passport.authenticate('strava', { scope: ['read_all'] }),
  function(req, res) {
    // Request is redirected to Strava for authentication so this shouldn't be called
  });

// define callback
app.get("/auth/strava/callback", 
  passport.authenticate("strava", { failureRedirect: '/' }, {failWithError: true}),
    (req, res) => {
      res.redirect("/profile");
   });

app.get("/user", (req, res) => {
  console.log("getting user data");
  res.send(user);
});

// logout a user
app.get("/auth/logout", (req, res) => {
  console.log("logging out");
  user = {};
  res.redirect("/");
});

const PORT = 5000;
app.listen(PORT);
