import { createSlice } from '@reduxjs/toolkit'

const initialState = { featuredBooks: [] }; //not finished yet

const featuredBooksSlice = createSlice({
  name: 'featuredBooks',
  initialState,
  reducers: {
    setFeaturedBooks: (state, action) => {
      state.featuredBooks = action.payload;
    },
  }
});

export const { setFeaturedBooks } = featuredBooksSlice.actions

export default featuredBooksSlice.reducer