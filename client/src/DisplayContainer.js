import React, { useEffect, useState } from 'react';
import BookCard from './BookCard';

function DisplayContainer() {
  const [books, setBooks] = useState([])
  const [authors, setAuthors] = useState([])
  const [genres, setGenres] = useState([])

  useEffect(() => {
    fetchBooks();
    fetchAuthors();
    fetchGenres();
  }, [])

// fetching data
  const fetchBooks = () => fetch("/books")
    .then(response => response.json())
    .then((books) => {
      setBooks(books);
    });
  const fetchAuthors = () => fetch("/authors")
    .then(response => response.json())
    .then((authors) => {
      setAuthors(authors);
    })
  const fetchGenres = () => fetch("/genres")
    .then(response => response.json())
    .then((genres) => {
      setGenres(genres);
    })
  
    // const clear = () => {
    //   set ('');
    // }

  return (
    <>
    <div>
      <h1>
        Book Shop
      </h1>
      { books.map(book => {
        return <BookCard 
          book={book} 
          fetchBooks={fetchBooks}
          fetchAuthors={fetchAuthors} />
      })  }
    </div>
      
    </>
  )
}

export default DisplayContainer