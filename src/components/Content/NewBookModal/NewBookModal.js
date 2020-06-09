import React from 'react';
import classes from './NewBookModal.module.css';
import Button from '../../UI/Button/Button';

const NewBookModal = (props) => {
  let showModalState = classes.NewBookSection;
  if (props.modal) {
    showModalState = [classes.NewBookSection, classes.Show].join(' ');
  }

  return (
    <div className={showModalState}>
      <div className={classes.NewBookFormContainer}>
        <h1>New Book</h1>
        <div>
          <form onSubmit={(event) => props.add(event, props.newBook)}>
            <label>Title</label>
            <input
              type="text"
              className={classes.TextField}
              placeholder="Book Title"
              value={props.newBook.title}
              onChange={(event) => props.inputChangeHandler(event, 'title')}
              required
            />
            <label>Author</label>
            <input
              type="text"
              className={classes.TextField}
              placeholder="Author"
              value={props.newBook.author}
              onChange={(event) => props.inputChangeHandler(event, 'author')}
              required
            />
            <label>Pages</label>
            <input
              type="number"
              className={classes.TextField}
              placeholder="0"
              value={props.newBook.pages}
              onChange={(event) => props.inputChangeHandler(event, 'pages')}
              required
            />
            <div className={classes.CheckboxField}>
              <label>
                <input
                  type="checkbox"
                  checked={props.newBook.read}
                  onChange={props.checkboxChangeHandler}
                />
                <span className={classes.CheckboxLabel}>Finished Reading</span>
              </label>
            </div>
            <div>
              <Button>Submit</Button>
            </div>
          </form>
        </div>
      </div>
      <div className={classes.CloseModal} onClick={props.close}>
        <div>X</div>
      </div>
    </div>
  );
};

export default NewBookModal;
