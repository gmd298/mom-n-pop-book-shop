import React from 'react';
import { createRoot } from "react-dom/client";
import App from './App';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './features/user';
import themeReducer from './features/theme';

const store = configureStore({
  reducer: {
    user: userReducer,
    theme: themeReducer,
  },
})

const root = createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
      <App />
    </Provider>
);

