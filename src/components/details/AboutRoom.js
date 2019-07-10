import React from 'react';

const AboutRoom = props => {
  return (
    <div>
      <h2>About the room:</h2>
      <p>{props.text}</p>
    </div>
  );
};

export default AboutRoom;
