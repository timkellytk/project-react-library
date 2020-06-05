import React, { Component } from 'react';
import Header from './components/Header/Header';
import Content from './components/Content/Content';
import './App.css';

class App extends Component {
  state = {
    showModal: false,
  };

  showModalHandler = () => {
    this.setState({ showModal: true });
  };

  closeModalHandler = () => {
    this.setState({ showModal: false });
  };

  render() {
    return (
      <React.Fragment>
        <Header />
        <Content
          showModal={this.showModalHandler}
          closeModal={this.closeModalHandler}
          modalStatus={this.state.showModal}
        />
      </React.Fragment>
    );
  }
}

export default App;
