const express = require("express");
const cors = require("cors");
const passport = require("passport");
//const StravaStrategy = require("passport-strava").Strategy;
const StravaStrategy = require('passport-strava-oauth2').Strategy
const keys = require("../config");
const chalk = require("chalk");
require('https').globalAgent.options.rejectUnauthorized = false;

//var StravaStrategy = require('passport-strava').Strategy;
//var StravaStrategy = require('passport-strava-oauth2').Strategy
var util = require('util')
const path = require('path')

let user = {};

// Passport requires these
// passport.serializeUser( (user, cb) => {
//   cb(null, user);
// });

// passport.deserializeUser( (user, cb) => {
//   cb(null, user);
// });

passport.serializeUser(function(user, done) {
  console.log('serializeUser - user', user);
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  console.log('deserializeUser - obj', obj);
  done(null, obj);
});

// Strava Strategy
passport.use(new StravaStrategy({
  clientID: keys.STRAVA.clientID,
  clientSecret: keys.STRAVA.clientSecret,
  callbackURL: "http://localhost:3000/auth/strava/callback",
  approvalPrompt: 'force'
},
  function(accessToken, refreshToken, profile, done) {
    // asynchronous verification, for effect...
    console.log('accessToken', accessToken);
    process.nextTick(function () {
      console.log('inside of nextTick');
      // To keep the example simple, the user's Strava profile is returned to
      // represent the logged-in user.  In a typical application, you would want
      // to associate the Strava account with a user record in your database,
      // and return that user instead.
      return done(null, profile);
    });
  }
));

// setup the server
const app = express();
// cors will alow us to make requests to Strava
app.use(cors());
app.use(passport.initialize());

// requiring a directory automatically pulls from the index.js that is in that directory
//app.use(require('./routes');

// Alternate implementation
// call from front-end to login user with Strava. Will call everything up above
/*
app.get("/auth/strava", 
  passport.authenticate("strava", { failureRedirect: '/' }, {failWithError: true}));
*/
app.get('/auth/strava',
  passport.authenticate('strava', { scope: ['read_all'] }),
  function(req, res) {
    console.log('am I here?');
    // Request is redirected to Strava for authentication so this shouldn't be called
  });

// define callback
app.get("/auth/strava/callback", 
  passport.authenticate('strava', { failureRedirect: '/' }, {failWithError: true}),
    (req, res) => {
      console.log('am I here?');
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
