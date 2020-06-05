import React from 'react';
import classes from './Book.module.css';

const Book = (props) => (
  <div className={classes.Book}>
    <div className={classes.BookGradient}>
      <div className={classes.RemoveBook}>x</div>
    </div>
    <div className="book-classics">
      <span>Kelly</span>
      <img src="kangaroo.png" alt="Kangaroo Icon"></img>
      <span>Classics</span>
    </div>
    <div className="book-info">
      <div className="book-author">Big Kev</div>
      <div className="book-title">Yarns from Ballarat and Victoria</div>
    </div>
    <div className="pages-block">
      <div>234 pages</div>
      <button className="read-button not">Reading/Finished</button>
    </div>
  </div>
);

export default Book;
