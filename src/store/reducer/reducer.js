import * as actionTypes from '../actions/actionTypes';

const initialState = {
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

const storeLocalBooks = (updatedBooks) => {
  const JSONbooks = JSON.stringify(updatedBooks);
  localStorage.setItem('books', JSONbooks);
};

const addBook = (state) => {
  const updatedBooks = state.books.concat(state.newBook);
  const updatedState = {
    ...state,
    books: updatedBooks,
    showModal: false,
    newBook: { title: '', author: '', pages: '', read: true },
  };
  storeLocalBooks(updatedBooks);
  return updatedState;
};

const deleteBook = (state, action) => {
  const updatedBooks = state.books.filter(
    (book, index) => index !== action.index
  );
  const updatedState = { ...state, books: updatedBooks };
  storeLocalBooks(updatedBooks);
  return updatedState;
};

const toggleBook = (state, action) => {
  const updatedBook = { ...state.books[action.index] };
  updatedBook.read = !updatedBook.read;

  const updatedBooks = [...state.books];
  updatedBooks[action.index] = updatedBook;

  const updatedState = { ...state, books: updatedBooks };
  storeLocalBooks(updatedBooks);
  return updatedState;
};

const getBooks = (state) => {
  const JSONbooks = localStorage.getItem('books');
  const books = JSON.parse(JSONbooks);

  if (JSONbooks && state.books !== books) {
    const updatedState = { ...state, books: books };
    return updatedState;
  }
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
      return getBooks(state);
    default:
      return state;
  }
};

export default reducer;
