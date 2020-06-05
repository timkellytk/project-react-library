import React from 'react';
import classes from './Header.module.css';

const Header = (props) => (
  <div className={classes.headerSection}>
    <div className="container">
      <h1>My Library</h1>
      <h4>The Odin Project</h4>
    </div>
  </div>
);

export default Header;
