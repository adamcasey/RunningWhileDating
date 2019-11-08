import React, { Component } from 'react';
//import PropTypes from 'prop-types';

export class  CalculateSpeed extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      fastAF: false,
      entries: []
    };  
  }
  
  getSpeed = (e) => {
    e.preventDefault();
    this.setState( {entries: Object.entries(this.props.userData) });
  }

  render() {
    const entries = Object.entries(this.props.userData);
    var temp = entries[6];
    var temp2 = entries.values();
    console.log( {temp} );
    console.log( {temp2} );
    return (
      <div>
        {temp}
        {temp2}
      </div>
    )
  }
}

// //PropTypes
// CalculateSpeed.propTypes = {
//   // Not sure what goes here
// }

export default CalculateSpeed