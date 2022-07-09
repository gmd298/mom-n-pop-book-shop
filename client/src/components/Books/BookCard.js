import React from 'react';

function BookCard({ book, handleDelete, fetchBooks, fetchAuthors }) {

  const onClick = (e) => {
    const button = e.target;
    button.disabled = true;
    handleDelete(book);
    // fetchBooks();
    // fetchAuthors();
    // clear()
    // setStatusMessage("Refresh the page. Its a feature ;)");
  }



  return (
      <div className="card">
        <div className="card-content">
          <h3 className="card-title">{book.title}</h3>
          <img src={book.image} alt={book.image} className="card-image"/>
          <h4 className="card-author">{book.author.name}</h4>
          <p className="card-details">{book.description}</p>
          <button className="card-button" type='submit' onClick={onClick}>Add To Cart</button>
          <button className="card-button" type='submit' onClick={onClick}>Add To Wishlist</button>
        </div>
      </div>
  )
}

export default BookCard;