import React from 'react';
import { Link } from 'react-router-dom';

function BookCard({ book, handleDelete }) {

  const onClick = (e) => {
    const button = e.target;
    button.disabled = true;
    handleDelete(book);
  }



  return (
    <Link to={`/books/${book.id}`}>
      <div className="card">
        <div className="card-content">
          <h3 className="card-title">{book.title}</h3>
          <img src={book.image} alt={book.image} className="card-image"/>
          <h4 className="card-author">{book.author.name}</h4>
          <p className="card-details">{book.description}</p>
          <button className="card-button" type='submit' onClick={onClick}>Add To Cart</button>
        </div>
      </div>
      </Link>
  )
}

export default BookCard;