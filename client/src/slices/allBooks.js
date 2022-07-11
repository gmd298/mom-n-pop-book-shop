import { createSlice } from '@reduxjs/toolkit'

const initialState = { allBooks: [] }; 

const allBooksSlice = createSlice({
  name: 'allBooks',
  initialState,
  reducers: {
    setAllBooks: (state, action) => {
      state.allBooks = action.payload;
    },
  }
});

export const { setAllBooks } = allBooksSlice.actions

export default allBooksSlice.reducer