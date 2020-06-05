import React from 'react';
import NewBook from './NewBook/NewBook';
import Books from './Books/Books';

const Content = (props) => (
  <React.Fragment>
    <NewBook
      showModalHandler={props.showModal}
      closeModalHandler={props.closeModal}
      modalState={props.modalStatus}
    />
    <Books
      books={props.books}
      delete={props.deleteBook}
      toggle={props.toggleBook}
    />
  </React.Fragment>
);

export default Content;
