import React from 'react';
import Button from '../../UI/Button/Button';

const NewBook = (props) => (
  <div className="section">
    <div className="container">
      <div>
        <h1>Books</h1>
        <Button clicked={props.showModalHandler}>Add New Book</Button>
      </div>
    </div>
  </div>
);

export default NewBook;
