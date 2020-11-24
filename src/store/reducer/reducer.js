import { db } from '../../index';
import * as actionTypes from '../actions/actionTypes';

const initialState = {
  user: null,
  loadingAuth: true,
  books: [],
  newBook: { title: '', author: '', pages: '', read: true },
  showModal: false,
};

const openModal = (state) => {
  const updatedState = { ...state, showModal: true };
  return updatedState;
};

const closeModal = (state) => {
  const updatedState = {
    ...state,
    showModal: false,
    newBook: { title: '', author: '', pages: '', read: true },
  };
  return updatedState;
};

const inputChangedHandler = (state, action) => {
  const newBook = {
    ...state.newBook,
    [action.bookType]: action.input,
  };
  const updatedState = { ...state, newBook: newBook };
  return updatedState;
};

const checkboxChangedHandler = (state) => {
  const updatedBook = {
    ...state.newBook,
    read: !state.newBook.read,
  };
  const updatedState = { ...state, newBook: updatedBook };
  return updatedState;
};

const storeBooksDB = (newBook, uid) => {
  db.collection('books').add({ ...newBook, uid });
};

const addBook = (state) => {
  const updatedBooks = state.books.concat(state.newBook);
  const updatedState = {
    ...state,
    books: updatedBooks,
    showModal: false,
    newBook: { title: '', author: '', pages: '', read: true },
  };
  storeBooksDB(state.newBook, state.user.uid);
  return updatedState;
};

const deleteBook = (state, action) => {
  const updatedBooks = state.books.filter(
    (book, index) => index !== action.index
  );
  const updatedState = { ...state, books: updatedBooks };
  storeBooksDB(updatedBooks);
  return updatedState;
};

const toggleBook = (state, action) => {
  const updatedBook = { ...state.books[action.index] };
  updatedBook.read = !updatedBook.read;

  const updatedBooks = [...state.books];
  updatedBooks[action.index] = updatedBook;

  const updatedState = { ...state, books: updatedBooks };
  storeBooksDB(updatedBooks);
  return updatedState;
};

const getBooks = (state, action) => {
  if (state.books !== action.books) {
    const updatedState = { ...state, books: action.books };
    return updatedState;
  }
};

const login = (state, action) => {
  const updatedState = { ...state, user: action.user };
  return updatedState;
};

const logout = (state) => {
  const updatedState = { ...state, user: null };
  return updatedState;
};

const finishLoading = (state) => {
  const updatedState = { ...state, loadingAuth: false };
  return updatedState;
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.OPEN_MODAL:
      return openModal(state);
    case actionTypes.CLOSE_MODAL:
      return closeModal(state);
    case actionTypes.INPUT_CHANGED_HANDLER:
      return inputChangedHandler(state, action);
    case actionTypes.CHECKBOX_CHANGED_HANDLER:
      return checkboxChangedHandler(state);
    case actionTypes.ADD_BOOK:
      return addBook(state);
    case actionTypes.DELETE_BOOK:
      return deleteBook(state, action);
    case actionTypes.TOGGLE_BOOK:
      return toggleBook(state, action);
    case actionTypes.GET_BOOKS:
      return getBooks(state, action);
    case actionTypes.LOGIN:
      return login(state, action);
    case actionTypes.LOGOUT:
      return logout(state);
    case actionTypes.FINISH_LOADING:
      return finishLoading(state);
    default:
      return state;
  }
};

export default reducer;
