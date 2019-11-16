import React, { Component, useState } from 'react';


const CalculateSpeed = (props) => {

    const [accessToken, setAccessToken] = useState(props.accessToken);
    //const text = _.isEmpty(userData) ? LoginMsg : "How fast are you...";

    return (
       <div style={{ fontSize: 20, color: "red", textAlign: "center", whiteSpace: "pre"}}>
          Accesstoken should be here {'\n'}
          { accessToken }
          But it isnt...
      </div>
    );
};

export default CalculateSpeed;

// class CalculateSpeed extends Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       fastAF: false,
//       accessToken: props.accessToken
//     }
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