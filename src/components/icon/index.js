import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';
import './icon.css';
const Icon = props => {
  return (
    <div className="icon">
      <SvgIcon {...props}>
        <path
          d={props.path ? props.path : 'M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z'}
        />
      </SvgIcon>
      {props.containtext ? <small>{props.text}</small> : ''}
    </div>
  );
};

export default Icon;
