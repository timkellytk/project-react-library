import React, { Component } from 'react';
import Header from './components/Header/Header';
import Auth from './components/Auth/Auth';
import Content from './components/Content/Content';
import './App.css';
import { connect } from 'react-redux';
import * as actions from './store/actions/index';

class App extends Component {
  componentDidMount() {
    this.props.getLocalBooks();
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <Auth />
        <Content />
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    getLocalBooks: () => dispatch(actions.getBooks()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
