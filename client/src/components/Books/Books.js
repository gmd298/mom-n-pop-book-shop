
// import PropTypes from 'prop-types' TODO
import axios from 'axios';
import React, { useEffect, useState } from 'react';

import BookCard from './BookCard';
import FeaturedBooks from './FeaturedBooks';

// cursor pagination [6,5,4], [3,2,1] 
// offset pagination

function Books() {
  const [books, setBooks] = useState([]);
  const [cursor, setCursor] = useState();

  // fetching data
  const fetchBooks = (cursor = undefined) => {
    axios.get("/books",  { params: { limit: 10, cursor } })
    .then((res) => {
      console.log('books >>>>', res.data)
      setBooks((state) => {
        return [ ...state, ...res.data]
      });
      setCursor(res.data[res.data.length - 1].id);
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

  const onLoadMore = () => {
    fetchBooks(cursor)
  }

  return (
    <>
      <div>
        <h1>
          Book Shop
        </h1>
        <div >
        { renderBooks().map(bookAry => {
          return <div className="card-container">{bookAry}</div>
        })  }
        </div>
        <div onClick={onLoadMore}>load more</div>        
      </div>
      <FeaturedBooks />
    </>
  )
}

// Books.propTypes = {} // todo

export default Books