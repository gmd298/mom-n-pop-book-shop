import { createSlice } from '@reduxjs/toolkit'

const initialState = { filteredBooks: [] }; 

const filteredBooksSlice = createSlice({
  name: 'filteredBooks',
  initialState,
  reducers: {
    setFilteredBooks: (state, action) => {
      state.filteredBooks = action.payload;
    },
  }
});

export const { setFilteredBooks } = filteredBooksSlice.actions

export default filteredBooksSlice.reducer