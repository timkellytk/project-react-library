import * as actionTypes from './actionTypes';

export const deleteBook = (index) => {
  return {
    type: actionTypes.DELETE_BOOK,
    index: index,
  };
};

export const toggleBook = (index) => {
  return {
    type: actionTypes.TOGGLE_BOOK,
    index: index,
  };
};

export const getBooks = () => {
  return {
    type: actionTypes.GET_BOOKS,
  };
};
