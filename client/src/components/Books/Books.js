
// import PropTypes from 'prop-types' TODO
import axios from 'axios';
import React, { useEffect, useState } from 'react';

import BookCard from './BookCard';

function Books() {
  const [books, setBooks] = useState([])

  // fetching data
  const fetchBooks = () => {
    axios.get("/books?limit=10")
    .then((res) => {
      console.log('books >>>>', res.data)
      setBooks(res.data);
    });
  }
  
  useEffect(() => {
    fetchBooks();
  }, []);

    const renderBooks = () => {
      const ary = [[]]
      books.forEach((book, index) => {       
        ary[ary.length - 1].push(<BookCard key={book.id} book={book} />)
        if ((index + 1) % 5 === 0) {
          ary.push([])
        }
      })
      return ary
    }

  return (
    <>
    <div>
      <h1>
        Book Shop
      </h1>
      <div className="card-container">
      { renderBooks().map(bookAry => {
        return <div>{bookAry}</div>
      })  }
      </div>
    </div>
      
    </>
  )
}

// Books.propTypes = {} // todo

export default Books