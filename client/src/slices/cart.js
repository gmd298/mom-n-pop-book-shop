import { createSlice } from '@reduxjs/toolkit'

const initialState = { cartBooks: {} }; 

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addBook: (state, action) => {
      if (state.cartBooks[action.payload.id]) {
        state.cartBooks[action.payload.id] = {
          book: action.payload,
          quantity: state.cartBooks[action.payload.id].quantity + 1
        }
      } else {
        state.cartBooks[action.payload.id] = { book: action.payload, quantity: 1 }
      }
    },
    removeBook: (state, action) => {
      delete state.cartBooks[action.payload]
    },
    clearCart: (state) => {
      state.cartBooks = {};
    },
  }
});

export const { addBook, removeBook, clearCart } = cartSlice.actions

export default cartSlice.reducer