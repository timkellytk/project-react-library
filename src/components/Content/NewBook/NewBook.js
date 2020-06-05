import React from 'react';
import Button from '../../UI/Button/Button';
import NewBookModal from './NewBookModal/NewBookModal';

const NewBook = () => (
  <div class="section">
    <div class="container">
      <div>
        <h1>Books</h1>
        <Button>Add New Book</Button>
        <NewBookModal />
      </div>
    </div>
  </div>
);

export default NewBook;
