import React, { Component } from 'react';
import Header from './components/Header/Header';
import Content from './components/Content/Content';
import './App.css';

class App extends Component {
  state = {
    books: [
      {
        title: 'This book is full of yarns of Ballarat',
        author: 'Big Kev',
        pages: 123,
        read: true,
      },
      {
        title: 'Byron bay, where it all started with emma',
        author: 'Harry Mcallister',
        pages: 234,
        read: false,
      },
      {
        title: "Why I won't drive to Newport",
        author: 'Jack Penny',
        pages: 523,
        read: false,
      },
    ],
    showModal: false,
  };

  componentDidMount() {}

  showModalHandler = () => {
    this.setState({ showModal: true });
  };

  closeModalHandler = () => {
    this.setState({ showModal: false });
  };

  addBookHandler = (event, book) => {
    event.preventDefault();
    const updatedBooks = this.state.books.concat(book);
    this.setState({ books: updatedBooks });
    this.closeModalHandler();
  };

  toggleBookHandler = (index) => {
    const updatedBooks = [...this.state.books];
    const updatedBook = updatedBooks[index];

    updatedBook.read = !this.state.books[index].read;
    this.setState({ books: updatedBooks });
  };

  deleteBookHandler = (id) => {
    const updatedBooks = this.state.books.filter((book, index) => {
      return book.title + index !== id;
    });
    this.setState({ books: updatedBooks });
  };

  render() {
    return (
      <React.Fragment>
        <Header />
        <Content
          showModal={this.showModalHandler}
          closeModal={this.closeModalHandler}
          modalStatus={this.state.showModal}
          books={this.state.books}
          addBook={this.addBookHandler}
          deleteBook={this.deleteBookHandler}
          toggleBook={this.toggleBookHandler}
        />
      </React.Fragment>
    );
  }
}

export default App;
