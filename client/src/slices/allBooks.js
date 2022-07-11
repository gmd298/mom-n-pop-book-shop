import { createSlice } from '@reduxjs/toolkit'

const initialState = { allBooks: [] }; 

const allBooksSlice = createSlice({
  name: 'allBooks',
  initialState,
  reducers: {
    setFeaturedBooks: (state, action) => {
      state.featuredBooks = action.payload;
    },
  }
});

export const { setAllBooks } = allBooksSlice.actions

export default allBooksSlice.reducer