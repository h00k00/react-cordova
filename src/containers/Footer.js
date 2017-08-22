import React, { Component }         from 'react';
import { connect }                  from 'react-redux';

class Footer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        footer goes here
      </div>
    );
  }
}

export default connect(null, null)(Footer);
