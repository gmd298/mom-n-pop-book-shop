import React, { useEffect, useState } from 'react';
import BookCard from './components/Books/BookCard';
import FeaturedBooks from './components/Books/FeaturedBooks';

function Home() {
  const [books, setBooks] = useState([])
  const [authors, setAuthors] = useState([])
  const [genres, setGenres] = useState([])

  // useEffect(() => {
  //   fetchBooks();
  //   fetchAuthors();
  //   // fetchGenres();
  // }, [])

// fetching data
  // const fetchBooks = () => fetch("/books")
  //   .then(response => response.json())
  //   .then((books) => {
  //     setBooks(books);
  //   });
  // const fetchAuthors = () => fetch("/authors")
  //   .then(response => response.json())
  //   .then((authors) => {
  //     setAuthors(authors);
  //   })
  // const fetchGenres = () => fetch("/genres")
  //   .then(response => response.json())
  //   .then((genres) => {
  //     setGenres(genres);
  //   })
  
    // const clear = () => {
    //   set ('');
    // }

  return (
    <div>
      <h1>
        Welcome! Here are this weekk's featured books
      </h1>
      <FeaturedBooks />
      <div>Business Info Here</div>
    </div>
  )
}

export default Home