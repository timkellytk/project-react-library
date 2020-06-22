import React from 'react';
import classes from './Book.module.css';
import kangaroo from '../../../../assets/images/kangaroo.png';
import UtilityButton from './UtilityButton/UtilityButton';

const Book = (props) => {
  return (
    <div className={classes.Book}>
      <div className={classes.BookGradient}>
        <div className={classes.RemoveBook} onClick={props.delete}>
          x
        </div>
      </div>
      <div className={classes.BookClassics}>
        <span>Kelly</span>
        <img src={kangaroo} width="40" alt="Kangaroo Icon"></img>
        <span>Classics</span>
      </div>
      <div className={classes.BookInfo}>
        <div className={classes.BookTitle}>{props.title}</div>
        <div className={classes.BookAuthor}>{props.author}</div>
      </div>
      <div className={classes.PagesBlock}>
        <div>{props.pages} pages</div>
        <UtilityButton read={props.read} clicked={props.toggle} />
      </div>
    </div>
  );
};

export default Book;
