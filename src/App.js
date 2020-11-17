import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import BookLibrary from './components/BookLibrary/BookLibrary';
import Auth from './components/Auth/Auth';
import firebase from 'firebase/app';
import { connect } from 'react-redux';
import * as actions from './store/actions/index';
import './App.css';

class App extends Component {
  componentDidMount() {
    const JSONbooks = localStorage.getItem('books');
    const books = JSON.parse(JSONbooks);

    this.props.getLocalBooks(books);

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
      <BrowserRouter>
        <Switch>
          {this.props.user && (
            <Route path="/project-react-library/library">
              <BookLibrary />
            </Route>
          )}
          <Route path="/project-react-library/">
            <Auth />
          </Route>
        </Switch>
      </BrowserRouter>
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
    getLocalBooks: (books) => dispatch(actions.getBooks(books)),
    login: (user) => dispatch(actions.login(user)),
    logout: () => dispatch(actions.logout()),
    finishLoading: () => dispatch(actions.finishLoading()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
