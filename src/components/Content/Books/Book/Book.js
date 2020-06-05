import React from 'react';
import classes from './Book.module.css';
import kangaroo from '../../../../assets/images/kangaroo.png';

const Book = (props) => (
  <div className={classes.Book}>
    <div className={classes.BookGradient}>
      <div className={classes.RemoveBook}>x</div>
    </div>
    <div className={classes.BookClassics}>
      <span>Kelly</span>
      <img src={kangaroo} width="40" alt="Kangaroo Icon"></img>
      <span>Classics</span>
    </div>
    <div className={classes.BookInfo}>
      <div className={classes.BookAuthor}>Big Kev</div>
      <div className={classes.BookTitle}>Yarns from Ballarat and Victoria</div>
    </div>
    <div className={classes.PagesBlock}>
      <div>234 pages</div>
      <button className={classes.ReadButton}>Reading/Finished</button>
      <button className={[classes.ReadButton, classes.Not].join(' ')}>
        Reading/Finished
      </button>
    </div>
  </div>
);

export default Book;
