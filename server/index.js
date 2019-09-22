const express = require("express");
const session = require('express-session');
const cors = require("cors");
const axios = require("axios").create({
    baseURL: 'https://www.strava.com/api/v3'
})
const passport = require("passport");
//const StravaStrategy = require("passport-strava").Strategy;
const StravaStrategy = require('passport-strava-oauth2').Strategy
const keys = require("../config");
const chalk = require("chalk");
require('https').globalAgent.options.rejectUnauthorized = false;

var util = require('util')
const path = require('path')

let user = {};


// RMB-YouTube Implementation   
passport.serializeUser((user, cb) => {
    cb(null, user);
});

passport.deserializeUser((user, cb) => {
    cb(null, user);
});


/*
// My own implementation
passport.serializeUser(function(user, done) {
  console.log('serializeUser - user', user);
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  console.log('deserializeUser - obj', obj);
  done(null, obj);
});
*/

// Strava Strategy
passport.use(new StravaStrategy({
        clientID: keys.STRAVA.CLIENT_ID,
        clientSecret: keys.STRAVA.CLIENT_SECRET,
        callbackURL: "/auth/strava/callback",
        //callbackURL: "http://localhost:3000/auth/strava/callback",
        //callbackURL: "http://mile37.com:3000/auth/strava/callback",
        approvalPrompt: 'force'
    },
    (accessToken, refreshToken, profile, cb) => {
        console.log("Passport callback function fired");
        //console.log(chalk.blue(JSON.stringify(profile)));
        // put all of the key:value pairs from the profile into a 'user' object
        user = { ...profile };
        credentials = {accessToken, profile};
        console.log('credentials: ', credentials);

        return cb(null, profile);
    }));

/*
//My own implementation
// the callback function that will fire
function(accessToken, refreshToken, profile, done) {
  // asynchronous verification, for effect...
  console.log('accessToken:', accessToken);
  console.log('refreshToken:', refreshToken);
  //console.log('profile:', profile);
  //console.log(chalk.blue(JSON.stringify(profile)));

  user = { ...profile };
  credentials = {accessToken, profile};
  console.log('credentials: ', credentials);
}
*/


// setup the server
const app = express();
// cors will alow us to make requests to Strava
app.use(cors());
app.use(require('cookie-parser')());
app.use(require('body-parser').urlencoded({ extended: true }));
app.use(session({
    secret: keys.STRAVA.SESSION_SECRET,
    resave: true,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

// requiring a directory automatically pulls from the index.js that is in that directory
//app.use(require('./routes');

app.get('/auth/strava', passport.authenticate('strava', { scope: ['read_all'] }));

app.get("/auth/strava/callback",
    passport.authenticate('strava', { failWithError: true, failureRedirect: '/' }),
    (req, res) => {
        console.log("returned to callback, about to redirect to profile page in app");
        res.redirect("/profile");
    },
    function(err, req, res, next) {
        return res.send({'status' : 'err', 'message':err.message});
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
