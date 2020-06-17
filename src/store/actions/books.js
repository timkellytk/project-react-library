/* export const DELETE_BOOK = 'DELETE_BOOK';
export const TOGGLE_BOOK = 'TOGGLE_BOOK'; */
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
