import React from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
const CustomButton = props => {
  return (
    <Link to={props.linkto}>
      <Button
        className={props.className}
        style={{ ...props.style, display: 'flex', align: 'center' }}
        onClick={props.click}
      >
        {props.label}
      </Button>
    </Link>
  );
};

export default CustomButton;
