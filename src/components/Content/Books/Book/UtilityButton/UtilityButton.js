import React from 'react';
import classes from './UtilityButton.module.css';

const UtilityButton = (props) => {
  const readBookState = props.read
    ? classes.ReadButton
    : [classes.ReadButton, classes.Not].join(' ');
  return (
    <button className={readBookState} onClick={props.clicked}>
      {props.read ? 'Finished' : 'Reading'}
    </button>
  );
};

export default UtilityButton;
