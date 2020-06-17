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
  return state;
};

export default reducer;
