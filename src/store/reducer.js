import * as actionTypes from './actions';

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

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.OPEN_MODAL:
      return { ...state, showModal: true };
    case actionTypes.CLOSE_MODAL:
      return {
        ...state,
        showModal: false,
        newBook: { title: '', author: '', pages: '', read: true },
      };
    case actionTypes.INPUT_CHANGED_HANDLER:
      const newBook = {
        ...state.newBook,
        [action.bookType]: action.input,
      };
      const updatedState = { ...state, newBook: newBook };
      return updatedState;
    case actionTypes.CHECKBOX_CHANGED_HANDLER:
      const updatedBook = {
        ...state.newBook,
        read: !state.newBook.read,
      };
      const updatedState2 = { ...state, newBook: updatedBook };
      return updatedState2;
    case actionTypes.ADD_BOOK:
      const updatedBooks3 = state.books.concat(state.newBook);
      const updatedState3 = {
        ...state,
        books: updatedBooks3,
        showModal: false,
        newBook: { title: '', author: '', pages: '', read: true },
      };
      return updatedState3;
    case actionTypes.DELETE_BOOK:
      const updatedBooks = state.books.filter(
        (book, index) => index !== action.index
      );
      return { ...state, books: updatedBooks };
    case actionTypes.TOGGLE_BOOK:
      const _updatedBook = { ...state.books[action.index] };
      _updatedBook.read = !_updatedBook.read;
      const _updatedBooks = [...state.books];
      _updatedBooks[action.index] = _updatedBook;
      return { ...state, books: _updatedBooks };
    default:
      return state;
  }
};

export default reducer;
