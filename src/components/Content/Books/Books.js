import React from 'react';
import classes from './Books.module.css';
import Book from './Book/Book';
import { connect } from 'react-redux';
import * as actionTypes from '../../../store/actions';

const Books = (props) => {
  const books = props.books.map((book, index) => {
    return (
      <Book
        title={book.title}
        author={book.author}
        pages={book.pages}
        read={book.read}
        delete={() => props.delete(index)}
        toggle={() => props.toggle(index)}
        key={book.title + index}
      />
    );
  });

  return (
    <div className="section">
      <div className="container">
        <div className={classes.BookGrid}>{books}</div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    books: state.books,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    delete: (index) =>
      dispatch({ type: actionTypes.DELETE_BOOK, index: index }),
    toggle: (index) =>
      dispatch({ type: actionTypes.TOGGLE_BOOK, index: index }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Books);
