import React from 'react';
import classes from './Books.module.css';
import Book from './Book/Book';
import { connect } from 'react-redux';

const Books = (props) => {
  const books = props.books.map((book, index) => {
    return (
      <Book
        id={book.title + index}
        title={book.title}
        author={book.author}
        pages={book.pages}
        read={book.read}
        delete={props.delete}
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

export default connect(mapStateToProps)(Books);
