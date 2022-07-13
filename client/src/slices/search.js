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
    limit: 10,                                                      // sets the pagination limit
    cursor: isLoadMore ? booksCursor : 0,                           // sets place of cursor depending on if searching or loading more books
  };

  if (search && search.length > 0) {
    params.search = search;
  }

  const response = await axios.get(                                 // the promise
    "/books",  
    { params },
  );

  return {
    books: response.data,
    isLoadMore,
  };
})

export const fetchAuthors = createAsyncThunk('search/fetchAuthors', async (isLoadMore, { getState }) => {
  const {
    search: {
      search,
      authorsCursor,
    },
  } = getState();
  
  const params = {
    limit: 10,                                                      // sets the pagination limit
    cursor: isLoadMore ? authorsCursor : 0,                           // sets place of cursor depending on if searching or loading more books
  };

  if (search && search.length > 0) {
    params.search = search;
  }

  const response = await axios.get(                                 // the promise
    "/authors",  
    { params },
  );

  return {
    authors: response.data,
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
      .addCase(fetchBooks.fulfilled, (state, action) => {           // turning the fetch promise into a global state thing
        const {
          books,
          isLoadMore,
        } = action.payload;

        state.status = 'succeeded'

        if (isLoadMore) {
          console.log("LOAD MORE");                                 // loading more books
          state.filteredBooks = state.filteredBooks.concat(books);
        } else {
          console.log("REPLACE");                                   // searching for books
          state.filteredBooks = books;
        }
        state.booksCursor = books[books.length - 1].id;             // set the place of the pagination (cursor position)
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })                                                      ///AUTHORS below
      .addCase(fetchAuthors.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchAuthors.fulfilled, (state, action) => {           // turning the fetch promise into a global state thing
        const {
          authors,
          isLoadMore,
        } = action.payload;

        state.status = 'succeeded'

        if (isLoadMore) {
          console.log("LOAD MORE");                                 // loading more authors
          state.filteredAuthors = state.filteredAuthors.concat(authors);
        } else {
          console.log("REPLACE");                                   // searching for authors
          state.filteredAuthors = authors;
        }
        state.authorsCursor = authors[authors.length - 1].id;             // set the place of the pagination (cursor position)
      })
      .addCase(fetchAuthors.rejected, (state, action) => {
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