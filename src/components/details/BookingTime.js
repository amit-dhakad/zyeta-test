import React from 'react';

const BookingTime = props => {
  return (
    <div>
      <h3>{props.title}:</h3>
      <p>{props.booking_date}</p>
      <p>
        {props.start_time} -> {props.end_time}
      </p>
    </div>
  );
};

export default BookingTime;
