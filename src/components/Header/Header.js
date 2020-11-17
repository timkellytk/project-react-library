import React from 'react';
import { connect } from 'react-redux';
import classes from './Header.module.css';

const Header = (props) => {
  console.log(props);
  return (
    <div className={classes.headerSection}>
      <div className="container">
        {props.user && (
          <img
            src={props.user.photoURL}
            alt={props.user.displayName}
            style={{ borderRadius: '50%' }}
          />
        )}
        <h1>
          {props.user
            ? props.user.displayName + "'s Library"
            : 'My Online Book Library'}
        </h1>
        <h4>The Odin Project</h4>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps)(Header);
