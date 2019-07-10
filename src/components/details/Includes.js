import React, { Component } from 'react';
import Icon from '../icon';

class Includes extends Component {
  render() {
    return (
      <div>
        <h2>Includes:</h2>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-evenly'
          }}
        >
          <Icon text="10 SEATS" containtext="true" />
          <Icon
            text="TV"
            containtext="true"
            path="M21 3H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h5v2h8v-2h5c1.1 0 1.99-.9 1.99-2L23 5c0-1.1-.9-2-2-2zm0 14H3V5h18v12z"
          />
          <Icon text="WHITEBOARD" containtext="true" />
        </div>
      </div>
    );
  }
}

export default Includes;
