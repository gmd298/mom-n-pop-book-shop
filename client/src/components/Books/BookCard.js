import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addBook } from '../../slices/cart';

function BookCard({ book, author }) {
  const dispatch = useDispatch()

  const onClick = (e) => {
    e.preventDefault();
    dispatch(addBook(book))
  }

  return (
    <Link to={`/books/${book.id}`}>
      <div className="card">
        <div className="card-content">
          <h3 className="card-title">{book.title}</h3>
          <img src={book.image} alt={book.image} className="card-image"/>
          <h4 className="card-author">{author.name}</h4>
          <p className="card-details">{book.description}</p>
          <button className="card-button" type='button' onClick={onClick}>Add To Cart</button>
        </div>
      </div>
    </Link>
  )
}

export default BookCard;