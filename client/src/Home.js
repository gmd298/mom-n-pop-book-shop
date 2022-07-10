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
        Welcome! Here are this week's featured books
      </h1>
      <FeaturedBooks />
      <h3>Business Info</h3>
      <div>
        <strong>
        Hours of operation:
        </strong>
          <div>Monday-Friday 8AM-9PM</div>
          <div>Saturday and Sunday 11AM-7PM</div>
        <div><p></p>
          <strong>
            Address:
          </strong>
            <div>
              5 Penn Plaza<div>NY, NY 10001</div>
            </div>
        </div><p></p>
        <div>
          <strong>
            Phone number:
          </strong>
          <div>
            123-456-7890
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home