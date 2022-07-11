import React, { useEffect } from "react";
import axios from "axios";
import { setAllBooks } from "../slices/allBooks";
import { useDispatch, useSelector } from "react-redux";

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
      <div>{allBooks}</div>
    </>
  )
}

export default AllBooks;