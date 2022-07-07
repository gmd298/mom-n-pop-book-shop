import { createSlice } from '@reduxjs/toolkit';

const initialStateValue =  "white";

export const themeSlice = createSlice({
  name: 'theme',
  initialState: {value: initialStateValue },
  reducers: {
    toggleTheme: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;