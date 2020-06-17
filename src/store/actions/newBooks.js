import * as actionTypes from './actionTypes';

export const openModal = () => {
  return {
    type: actionTypes.OPEN_MODAL,
  };
};

export const closeModal = () => {
  return {
    type: actionTypes.CLOSE_MODAL,
  };
};

export const inputChangedHandler = (input, type) => {
  return {
    type: actionTypes.INPUT_CHANGED_HANDLER,
    input: input,
    bookType: type,
  };
};

export const checkboxChangedHandler = () => {
  return {
    type: actionTypes.CHECKBOX_CHANGED_HANDLER,
  };
};

export const addBook = () => {
  return {
    type: actionTypes.ADD_BOOK,
  };
};
