import React, { Component } from 'react';
import classes from './NewBookModal.module.css';

import Button from '../../../UI/Button/Button';

class NewBookModal extends Component {
  state = {
    book: { title: '', author: '', pages: '', read: true },
  };

  inputChangeHandler = (event, property) => {
    const updatedBook = { ...this.state.book };
    updatedBook[property] = event.target.value;
    this.setState({ book: updatedBook });
  };

  checkboxChangeHandler = (event) => {
    const updatedBook = { ...this.state.book };
    updatedBook.read = event.target.checked;
    this.setState({ book: updatedBook });
  };

  render() {
    const showModalState = this.props.modal
      ? [classes.NewBookSection, classes.Show].join(' ')
      : classes.NewBookSection;

    return (
      <div className={showModalState}>
        <div className={classes.NewBookFormContainer}>
          <h1>New Book</h1>
          <div>
            <form onSubmit={(event) => this.props.add(event, this.state.book)}>
              <label>Title</label>
              <input
                type="text"
                className={classes.TextField}
                placeholder="Book Title"
                value={this.state.book.title}
                onChange={(event) => this.inputChangeHandler(event, 'title')}
                required
              />
              <label>Author</label>
              <input
                type="text"
                className={classes.TextField}
                placeholder="Author"
                value={this.state.book.author}
                onChange={(event) => this.inputChangeHandler(event, 'author')}
                required
              />
              <label>Pages</label>
              <input
                type="number"
                className={classes.TextField}
                placeholder="0"
                value={this.state.book.pages}
                onChange={(event) => this.inputChangeHandler(event, 'pages')}
                required
              />
              <div className={classes.CheckboxField}>
                <label>
                  <input
                    type="checkbox"
                    checked={this.state.book.read}
                    onClick={this.checkboxChangeHandler}
                  />
                  <span className={classes.CheckboxLabel}>
                    Finished Reading
                  </span>
                </label>
              </div>
              <div>
                <Button>Submit</Button>
              </div>
            </form>
          </div>
        </div>
        <div className={classes.CloseModal} onClick={this.props.close}>
          <div>X</div>
        </div>
      </div>
    );
  }
}

export default NewBookModal;
