import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setFeaturedBooks } from '../../slices/featuredBooks'
import BookCard from './BookCard'


// fetching the featured books from redux and maping them on the book cards

const FeaturedBooks = () => {
  const dispatch = useDispatch();

  const featuredBooks = useSelector(state => state.featuredBooks.featuredBooks)

  useEffect(() => {
    axios.get('/featured/books')
    .then((response) => {
      dispatch(setFeaturedBooks(response.data));
    });
  }, [dispatch])
  
  return (
    <>
      <h2 className='featured-books'>FeaturedBooks</h2>
      <div className="card-container">
        {featuredBooks.map(book => {
          return <BookCard key={book.id} book={book} author={book.author} />
        })}
      </div>
    </>
  )
}

// FeaturedBooks.propTypes = {}

export default FeaturedBooks