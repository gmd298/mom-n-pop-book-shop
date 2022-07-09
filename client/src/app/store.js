import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../slices/counter/counter';
import themeReducer from '../slices/theme'
import userReducer from '../slices/user'
import featuredBooksReducer from '../slices/featuredBooks'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    theme: themeReducer,
    user: userReducer,
    featuredBooks: featuredBooksReducer
  }
})