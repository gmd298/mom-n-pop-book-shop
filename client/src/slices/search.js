import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
  search: '',
  filteredBooks: [],
  filteredAuthors: [],
  booksCursor: 0,
  authorsCursor: 0,
}; 

export const fetchBooks = createAsyncThunk('search/fetchBooks', async (isLoadMore, { getState }) => {
  const {
    search: {
      search,
      booksCursor,
    },
  } = getState();
  
  const params = {
    limit: 10,
    cursor: isLoadMore ? booksCursor : 0,
  };

  if (search && search.length > 0) {
    params.search = search;
  }

  const response = await axios.get(
    "/books",  
    { params },
  );

  return {
    books: response.data,
    isLoadMore,
  };
})

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearch: (state, action) => {
      state.search = action.payload;
    },
    setBooksCursor: (state, action) => {
      state.booksCursor = action.payload;
    },
    setAuthorsCursor: (state, action) => {
      state.authorsCursor = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        const {
          books,
          isLoadMore,
        } = action.payload;

        state.status = 'succeeded'

        if (isLoadMore) {
          console.log("LOAD MORE");
          state.filteredBooks = state.filteredBooks.concat(books);
        } else {
          console.log("REPLACE");
          state.filteredBooks = books;
        }
        state.booksCursor = books[books.length - 1].id;
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  }
});

export const {
  setSearch,
  setBooksCursor,
  setAuthorsCursor,
} = searchSlice.actions

export default searchSlice.reducer