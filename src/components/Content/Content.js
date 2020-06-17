import React from 'react';
import NewBook from './NewBook/NewBook';
import NewBookModal from './NewBookModal/NewBookModal';
import Books from './Books/Books';

const Content = (props) => (
  <React.Fragment>
    <NewBook showModalHandler={props.showModal} />
    <NewBookModal
      newBook={props.newBook}
      add={props.addBook}
      inputChangeHandler={props.inputChangeHandler}
      checkboxChangeHandler={props.checkboxChangeHandler}
      close={props.closeModal}
    />
    <Books delete={props.deleteBook} toggle={props.toggleBook} />
  </React.Fragment>
);

export default Content;
