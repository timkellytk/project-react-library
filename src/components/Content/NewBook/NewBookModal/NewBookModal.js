import React from 'react';
import classes from './NewBookModal.module.css';

import Button from '../../../UI/Button/Button';

const NewBookModal = (props) => {
  const showModalState = props.modal
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
              required
            />
            <label>Author</label>
            <input
              type="text"
              className={classes.TextField}
              placeholder="Author"
              required
            />
            <label>Pages</label>
            <input
              type="text"
              className={classes.TextField}
              placeholder="0"
              required
            />
            <div className={classes.CheckboxField}>
              <label>
                <input type="checkbox" id="reading-complete" />
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
