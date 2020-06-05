import React, { Component } from 'react';
import classes from './NewBookModal.module.css';

import Button from '../../../UI/Button/Button';

class NewBookModal extends Component {
  state = {
    title: '',
    author: '',
    pages: '',
    read: true,
  };

  handleTitleChange = (event) => {
    const updatedTitle = event.target.value;
    this.setState({ title: updatedTitle });
  };

  handleAuthorChange = (event) => {
    const updatedAuthor = event.target.value;
    this.setState({ author: updatedAuthor });
  };

  handlePagesChange = (event) => {
    const updatedPages = event.target.value;
    this.setState({ pages: updatedPages });
  };

  handleCheckboxChange = (event) => {
    const updatedCheckbox = event.target.checked;
    this.setState({ read: updatedCheckbox });
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
            <form>
              <label>Title</label>
              <input
                type="text"
                className={classes.TextField}
                placeholder="Book Title"
                value={this.state.title}
                onChange={this.handleTitleChange}
                required
              />
              <label>Author</label>
              <input
                type="text"
                className={classes.TextField}
                placeholder="Author"
                value={this.state.author}
                onChange={this.handleAuthorChange}
                required
              />
              <label>Pages</label>
              <input
                type="number"
                className={classes.TextField}
                placeholder="0"
                value={this.state.pages}
                onChange={this.handlePagesChange}
                required
              />
              <div className={classes.CheckboxField}>
                <label>
                  <input
                    type="checkbox"
                    checked={this.state.read}
                    onClick={this.handleCheckboxChange}
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
