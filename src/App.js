import React, { Component } from 'react';
import Header from './components/Header/Header';
import Auth from './components/Auth/Auth';
import Content from './components/Content/Content';
import Loading from './components/UI/Loading/Loading';
import './App.css';
import firebase from 'firebase/app';
import { connect } from 'react-redux';
import * as actions from './store/actions/index';

class App extends Component {
  componentDidMount() {
    this.props.getLocalBooks();

    firebase.auth().onAuthStateChanged((user) => {
      if (user && !this.props.user) {
        const displayName = user.displayName;
        const photoURL = user.photoURL;
        const newUser = { displayName, photoURL };

        this.props.login(newUser);
      } else if (!user && this.props.user) {
        this.props.logout();
      }

      if (this.props.loadingAuth) {
        this.props.finishLoading();
      }
    });
  }

  render() {
    return (
      <React.Fragment>
        {this.props.loadingAuth && <Loading />}
        {!this.props.loadingAuth && <Header />}
        {this.props.user && !this.props.loadingAuth && <Content />}
        {!this.props.user && !this.props.loadingAuth && <Auth />}
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    loadingAuth: state.loadingAuth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getLocalBooks: () => dispatch(actions.getBooks()),
    login: (user) => dispatch(actions.login(user)),
    logout: () => dispatch(actions.logout()),
    finishLoading: () => dispatch(actions.finishLoading()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
