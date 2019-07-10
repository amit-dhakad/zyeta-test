import React from 'react';
import { Link } from 'react-router-dom';
const ImageViewer = props => {
  if (props.link) {
    return (
      <Link to={props.linkto}>
        <img src={props.src} alt={props.alt} style={{ ...props.style }} />
      </Link>
    );
  }
  return <img src={props.src} alt={props.alt} style={{ ...props.style }} />;
};
export default ImageViewer;
