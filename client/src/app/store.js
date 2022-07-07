import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../slices/counter/counter';
import themeReducer from '../slices/theme'
import userReducer from '../slices/user'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    theme: themeReducer,
    user: userReducer
  }
})