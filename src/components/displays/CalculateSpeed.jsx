// eslint-disable-next-line
import React, { useContext, useState, Component } from 'react';
import UserProvider from "../../contexts/UserProvider";

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

    const [photos, setPhotos] = useState([]);


    async function fetchData() {
      const res = await fetch("https://swapi.co/api/planets/4/");
      res
        .json()
        .then(res => setPlanets(res))
        .catch(err => setErrors(err));
    }

    useEffect(() => {
      fetchData();
    }, []);
  */

    return (

       <div style={pStyle}>
          User Name: {" "}
          { userDetails.userName } {'\n'}
       </div>
    );
};

export default CalculateSpeed;