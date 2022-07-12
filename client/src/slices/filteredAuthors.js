import { createSlice } from '@reduxjs/toolkit'

const initialState = { filteredAuthors: [] }; 

const filteredAuthorsSlice = createSlice({
  name: 'filteredAuthors',
  initialState,
  reducers: {
    setFilteredAuthors: (state, action) => {
      state.filteredAuthors = action.payload;
    },
  }
});

export const { setFilteredAuthors } = filteredAuthorsSlice.actions

export default filteredAuthorsSlice.reducer