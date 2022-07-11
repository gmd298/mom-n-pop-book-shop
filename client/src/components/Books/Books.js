
// import PropTypes from 'prop-types' TODO
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import SearchBar from '../../SearchBar';
import { fetchBooks } from '../../slices/search';

import BookCard from './BookCard';
import FeaturedBooks from './FeaturedBooks';

// cursor pagination [6,5,4], [3,2,1] 
// offset pagination

function Books() {
  const dispatch = useDispatch();
  const filteredBooks = useSelector(state => state.search.filteredBooks);
  
  useEffect(() => {
    dispatch(fetchBooks());
  }, []);

  const renderBooks = () => {
    const ary = [[]]
    filteredBooks.forEach((book, index) => {       
      ary[ary.length - 1].push(<BookCard key={book.id} book={book} />)
      if ((index + 1) % 5 === 0) {
        ary.push([])
      }
    })
    return ary
  }

  const onLoadMore = () => {
    dispatch(fetchBooks(true))
  }

  return (
    <>
      <div>
        <h1>
          Book Shop
        </h1>
        <SearchBar />
        <div >
        { renderBooks().map(bookAry => {
          return <div className="card-container">{bookAry}</div>
        })  }
        </div>
        <div className='div-button' onClick={onLoadMore}>load more</div>        
      </div>
      <FeaturedBooks />
    </>
  )
}

// Books.propTypes = {} // todo

export default Books