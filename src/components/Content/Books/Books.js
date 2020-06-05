import React from 'react';
import classes from './Books.module.css';
import Book from './Book/Book';

const Books = () => (
  <div class="section">
    <div class="container">
      <div class={classes.BookGrid}>
        <Book />
        <h1>grid please</h1>
        <h1>grid please</h1>
        <h1>grid please</h1>
      </div>
    </div>
  </div>
);

export default Books;
