import React, { Component } from 'react';
import Button from '../button';
import AboutRoom from './AboutRoom';
import BookingTime from './BookingTime';
import ImageViewer from './ImageViewer';
import Includes from './Includes';

class Details extends Component {
  clickHandler = () => {
    console.log('clicked');
  };
  render() {
    return (
      <div>
        <ImageViewer src="image.jpg" alt="imageName" />
        <Includes />
        <hr />
        <BookingTime
          title="Date & Time of booking"
          booking_date="June 27th 2019"
          start_time="3:00 AM"
          end_time="4:00 AM"
        />
        <hr />
        <AboutRoom text="The Oval is on the 3rd floor of HSR 2gethr" />
        <hr />
        <div
          style={{
            display: 'flex',
            height: '80px',
            textAlign: 'center',
            justifyContent: 'space-around'
          }}
        >
          <Button
            style={{
              background: 'yellow',
              color: 'black',
              width: '150px',
              height: '50px',
              curser: 'pointer',
              textTransform: 'capitalize'
            }}
            label="Book"
            click={this.clickHandler}
            linkto="success"
          />
        </div>
      </div>
    );
  }
}
export default Details;
