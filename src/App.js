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
    newBook: { title: '', author: '', pages: '', read: true },
    showModal: false,
  };

  componentDidMount() {
    const JSONbooks = localStorage.getItem('books');
    const books = JSON.parse(JSONbooks);

    if (JSONbooks && this.state.books !== books) {
      this.updateStateBooks(books);
    }
  }

  updateStateBooks = (updatedBooks) => {
    this.setState({ books: updatedBooks });
    const JSONbooks = JSON.stringify(updatedBooks);
    localStorage.setItem('books', JSONbooks);
  };

  inputChangeNewBookHandler = (event, property) => {
    const updatedBook = { ...this.state.newBook };
    updatedBook[property] = event.target.value;
    this.setState({ newBook: updatedBook });
  };

  checkboxChangeNewBookHandler = (event) => {
    const updatedBook = { ...this.state.newBook };
    updatedBook.read = event.target.checked;
    this.setState({ newBook: updatedBook });
  };

  showModalHandler = () => {
    this.setState({ showModal: true });
  };

  closeModalHandler = () => {
    this.setState({
      showModal: false,
      newBook: { title: '', author: '', pages: '', read: true },
    });
  };

  addBookHandler = (event, book) => {
    event.preventDefault();
    const updatedBooks = this.state.books.concat(book);
    this.updateStateBooks(updatedBooks);
    this.closeModalHandler();
  };

  toggleBookHandler = (index) => {
    const updatedBooks = [...this.state.books];
    const updatedBook = updatedBooks[index];

    updatedBook.read = !this.state.books[index].read;
    this.updateStateBooks(updatedBooks);
  };

  deleteBookHandler = (id) => {
    const updatedBooks = this.state.books.filter((book, index) => {
      return book.title + index !== id;
    });
    this.updateStateBooks(updatedBooks);
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
          newBook={this.state.newBook}
          inputChangeHandler={this.inputChangeNewBookHandler}
          checkboxChangeHandler={this.checkboxChangeNewBookHandler}
          addBook={this.addBookHandler}
          deleteBook={this.deleteBookHandler}
          toggleBook={this.toggleBookHandler}
        />
      </React.Fragment>
    );
  }
}

export default App;
