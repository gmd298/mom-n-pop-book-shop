import React, { useEffect } from "react";
import axios from "axios";
import { setAllBooks } from "../slices/allBooks";
import { useDispatch, useSelector } from "react-redux";
import BookCard from "./Books/BookCard";

const AllBooks = () => {
  const dispatch = useDispatch();

  const allBooks = useSelector(state => state.allBooks.allBooks)

  useEffect(() => {
    axios.get('/books')
    .then((response) => {
      dispatch(setAllBooks(response.data));
    })
  }, [dispatch])

  return (
    <>
      <div className="card-container">
        {allBooks.map(book => {
          return <BookCard key={book.id} book={book} />
        })}
      </div>
    </>
  )
}

export default AllBooks;