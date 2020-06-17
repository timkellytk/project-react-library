import React from 'react';
import Button from '../../UI/Button/Button';
import { connect } from 'react-redux';
import * as actionTypes from '../../../store/actions';

const NewBook = (props) => (
  <div className="section">
    <div className="container">
      <div>
        <h1>Books</h1>
        <Button clicked={props.showModal}>Add New Book</Button>
      </div>
    </div>
  </div>
);

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    showModal: () => dispatch({ type: actionTypes.OPEN_MODAL }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewBook);
