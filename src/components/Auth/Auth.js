import React, { useEffect } from 'react';
import firebase from 'firebase/app';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';

const Auth = (props) => {
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user && !props.user) {
        const displayName = user.displayName;
        const photoURL = user.photoURL;
        const newUser = { displayName, photoURL };

        props.login(newUser);
      } else if (!user) {
        props.logout();
      }
    });
  });

  return (
    <>
      <div id="firebaseui-auth-container"></div>
      {props.user && (
        <div>
          <h1>{props.user.displayName}</h1>
          <img src={props.user.photoURL} alt={props.user.displayName} />
        </div>
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (user) => dispatch(actions.login(user)),
    logout: () => dispatch(actions.logout()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
