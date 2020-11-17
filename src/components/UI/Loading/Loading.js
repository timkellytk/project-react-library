import React from 'react';
import classes from './Loading.module.css';

const loading = () => (
  <div style={{ textAlign: 'center', padding: '50px' }}>
    <div className={classes.ldsEllipsis}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
);

export default loading;
