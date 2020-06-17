import React from 'react';
import NewBook from './NewBook/NewBook';
import NewBookModal from './NewBookModal/NewBookModal';
import Books from './Books/Books';

const Content = (props) => (
  <React.Fragment>
    <NewBook />
    <NewBookModal add={props.addBook} />
    <Books delete={props.deleteBook} toggle={props.toggleBook} />
  </React.Fragment>
);

export default Content;
