import React from 'react';
import classes from './NewBookModal.module.css';
import Button from '../../UI/Button/Button';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/index';

const NewBookModal = (props) => {
  let showModalState = classes.NewBookSection;
  if (props.modal) {
    showModalState = [classes.NewBookSection, classes.Show].join(' ');
  }

  const _onSubmit = (event) => {
    event.preventDefault();
    props.addBookHandler();
  };

  return (
    <div className={showModalState}>
      <div className={classes.NewBookFormContainer}>
        <h1>New Book</h1>
        <div>
          <form onSubmit={(event) => _onSubmit(event)}>
            <label>Title</label>
            <input
              type="text"
              className={classes.TextField}
              placeholder="Book Title"
              value={props.newBook.title}
              onChange={(event) =>
                props.inputChangeHandler(event.target.value, 'title')
              }
              required
            />
            <label>Author</label>
            <input
              type="text"
              className={classes.TextField}
              placeholder="Author"
              value={props.newBook.author}
              onChange={(event) =>
                props.inputChangeHandler(event.target.value, 'author')
              }
              required
            />
            <label>Pages</label>
            <input
              type="number"
              className={classes.TextField}
              placeholder="0"
              value={props.newBook.pages}
              onChange={(event) =>
                props.inputChangeHandler(event.target.value, 'pages')
              }
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
      <div className={classes.CloseModal} onClick={props.closeModal}>
        <div>X</div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    modal: state.showModal,
    newBook: state.newBook,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    closeModal: () => dispatch(actions.closeModal()),
    inputChangeHandler: (input, type) =>
      dispatch(actions.inputChangedHandler(input, type)),
    checkboxChangeHandler: () => dispatch(actions.checkboxChangedHandler()),
    addBookHandler: () => dispatch(actions.addBook()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewBookModal);
