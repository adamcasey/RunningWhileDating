import React, { Component } from 'react';
//import PropTypes from 'prop-types';

class  CalculateSpeed extends Component {
  
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     fastAF: false,
  //     accessToken: props.accessToken
  //   }
  // }
  
  // getSpeed = (e) => {
  //   e.preventDefault();
  //   this.setState( {entries: Object.entries(this.props.userData) });
  // }

  render() {
    return (
      <div style={{ fontSize: 40 }}>
        { this.props.accessToken }
      </div>
    )
  }
}

// //PropTypes
// CalculateSpeed.propTypes = {
//   // Not sure what goes here
// }

export default CalculateSpeed