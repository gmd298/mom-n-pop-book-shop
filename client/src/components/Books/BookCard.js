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
      <span className="card">
        <div className="card-content">
          <h2 className="card-title">{book.title}</h2>
          <img src={book.image} alt={book.image} />
          <h4>{book.author.name}</h4>
          <p className="card-details">{book.description}</p>
        </div>
        <button type='submit' onClick={onClick}>Delete</button>
        {/* <p>{statusMessage}</p> */}
      </span>
  )
}

export default BookCard;