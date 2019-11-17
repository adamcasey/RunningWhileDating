import React, { useContext, useEffect } from 'react';
import UserProvider from "../../contexts/UserProvider";
//var StravaApiV3 = require('strava_api_v3');
//import React, { Component, useState } from 'react';

const CalculateSpeed = () => {

   
    //var defaultClient = StravaApiV3.ApiClient.instance;

    const pStyle = {
        color: "red",
        textAlign: "center",
        paddingTop: "50px",
        paddingLeft: "50px",
        whiteSpace: "pre",
        fontFamily: "Papyrus",
        position: "absolute",
        margin: 2,
        fontSize: 30
    };

    const userData = useContext(UserProvider.context);

    console.log({userData});

    //let accessToken = userData.token;

    const stravaInfo = {
      apiURL: `https://www.strava.com/api/v3`,
      accessToken: userData.token
    }

    // Configure OAuth2 access token for authorization: strava_oauth
    //var strava_oauth = defaultClient.authentications['strava_oauth'];
    //strava_oauth.accessToken = {accessToken};

    var userInfo = Object.keys(userData).map(function(s){ return userData[s] });
    //console.log({userInfo});

    var userPhotos = userInfo[4];
    //var photoArray = Object.keys(userPhotos).map(function(s){ return userPhotos[s] });
    // const iterator = userPhotos.values();
    // for (const value of iterator) {
    //   console.log(value);
    // }

    var profilePhoto = {userPhotos}[1];
    console.log({userPhotos});
    console.log({profilePhoto});

    const userDetails = {
      userName: userInfo[2],
      userID: userData.id,
      userProfilePhoto: "",
      userSpeed: 0
    }

    /*
    Example link: https://blog.bitsrc.io/making-api-calls-with-react-hooks-748ebfc7de8c

    const [page, setPage] = useState(1);
    const [commitHistory, setCommitHistory] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const loadMoreCommit = () => {
      setPage(page + 1);
    };
    useEffect(() => {
      fetch(
        `https://www.strava.com/api/v3=${page}`,
          {
            method: "GET",
            headers: new Headers({
              Accept: "application/vnd.github.cloak-preview"
            })
          }
        )
        .then(res => res.json())
        .then(response => {
          setCommitHistory(response.items);
          setIsLoading(false);
        })
        .catch(error => console.log(error));
    }, [page]);
  */

    return (

       <div style={pStyle}>
          User Name: {" "}
          { userDetails.userName } {'\n'}
       </div>
    );
};

export default CalculateSpeed;