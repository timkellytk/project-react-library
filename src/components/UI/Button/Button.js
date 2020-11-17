import React from 'react';
import classes from './Button.module.css';

const Button = (props) => {
  const buttonColor = props.white ? 'white' : '#b721ff';
  const textColor = props.white ? 'black' : '#fff';

  return (
    <button
      className={classes.Button}
      onClick={props.clicked}
      style={{ backgroundColor: buttonColor, color: textColor }}
    >
      {props.children}
    </button>
  );
};

export default Button;
