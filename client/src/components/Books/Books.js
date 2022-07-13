import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import SearchBar from '../../SearchBar';
import { fetchBooks } from '../../slices/search';

import BookCard from './BookCard';
import FeaturedBooks from './FeaturedBooks';


function Books() {
  const dispatch = useDispatch();
  const filteredBooks = useSelector(state => state.search.filteredBooks);
  
// dependency says it needs dispatch, but it works without it
  useEffect(() => {
    dispatch(fetchBooks());
  }, []);

// sets up the pagination and passes the filteredBooks data from redux to book cards
  const renderBooks = () => {
    const ary = [[]]
    filteredBooks.forEach((book, index) => {       
      ary[ary.length - 1].push(<BookCard key={book.id} book={book} author={book.author} />)
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


export default Books