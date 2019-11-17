import React, { useContext } from 'react';
import UserProvider from "../../contexts/UserProvider";
//import React, { Component, useState } from 'react';

const CalculateSpeed = () => {

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

    let accessToken = userData.token;

    var userInfo = Object.keys(userData).map(function(s){ return userData[s] });
    //console.log({userInfo});

    var userName = userInfo[2];
    //console.log({userName});

    var userPhotos = userInfo[4];
    var profilePhoto = {userPhotos}[0];
    console.log({userPhotos});
    console.log({profilePhoto});


    return (

       <div style={pStyle}>
          User Name: {" "}
          { userName } {'\n'}
          Accesstoken: {" "}
          { accessToken } {'\n'}
          Photo: 
       </div>
    );
};

export default CalculateSpeed;

// class CalculateSpeed extends Component {

//   // constructor(props) {
//   //   super(props);
//   //   this.state = {
//   //     fastAF: false,
//   //     accessToken: props.accessToken
//   //   }
//   // }

//   state = {
//     fastAF: false,
//     accessToken: this.props.accessToken
//   }

//   render() {
//     return (
//       <div style={{ fontSize: 20, color: "red", textAlign: "center", whiteSpace: "pre"}}>
//         Accesstoken should be here {'\n'}
//         { this.state.fastAF }
//         But it isnt...
//       </div>
//     )
//   }
// }

// export default CalculateSpeed