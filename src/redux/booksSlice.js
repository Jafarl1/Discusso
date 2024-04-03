import { createSlice } from "@reduxjs/toolkit";

const booksSlice = createSlice({
  name: "Books",
  initialState: {
    books: [
      {
        id: 1,
        name: "Clean Code",
        description: "How to write clean code",
        pages: 10,
        done: 2,
        started: null,
        finished: null,
        duration: null,
        rate: 0,
        notes: ["note 1", "note 2", "note 3", "note 4", "note 5"],
      },
    ],
  },
  reducers: {
    addBook(state, action) {
      state.books.push(action.payload);
    },
    editBookData() {},
    removeBook() {},
  },
});

export const { addBook, editBookData, removeBook } = booksSlice.actions;

export default booksSlice.reducer;
