import React from 'react';
import classes from './Books.module.css';
import Book from './Book/Book';

const Books = () => (
  <div class="section">
    <div class="container">
      <div class={classes.BookGrid}>
        <Book />
        <Book />
        <Book />
      </div>
    </div>
  </div>
);

export default Books;
