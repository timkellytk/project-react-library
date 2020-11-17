import React from 'react';
import Button from '../UI/Button/Button';
import { connect } from 'react-redux';
import firebase from 'firebase/app';
import classes from './Header.module.css';

const Header = (props) => {
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
        {props.user && (
          <a href="/project-react-library">
            <Button white clicked={() => firebase.auth().signOut()}>
              Sign Out
            </Button>
          </a>
        )}
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
