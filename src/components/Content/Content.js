import React from 'react';
import NewBook from './NewBook/NewBook';
import NewBookModal from './NewBookModal/NewBookModal';
import Books from './Books/Books';

const Content = (props) => (
  <React.Fragment>
    <NewBook />
    <NewBookModal />
    <Books />
  </React.Fragment>
);

export default Content;
