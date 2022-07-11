import axios from 'axios';
import { useParams } from 'react-router-dom';
import React, {useEffect, useState} from 'react'

import SearchBar from '../../SearchBar';
import FeaturedBooks from '../Books/FeaturedBooks';

// do I need useSelector?

function Book() {
  const params = useParams();

  console.log('params', params);

  const [book, setBook] = useState({}) // refactor to use redux. allBooks.author.name?

  useEffect(() => {
    axios.get(`/books/${params.id}`)
      .then((res) => {
        setBook(res.data);
    });
  }, [params.id])

  console.log('book', book);
  
// how do I access individual author from redux? 

  return (
    <>
    <div>
      <h1>
        Book Page
      </h1>
      <SearchBar />
      <div className="card">
        <div className="card-content">
          <h3 className="card-title">{book.title}</h3>
          <h4 className="card-book">{book.description}</h4>
          <p className="card-details">{book.bio}</p>
        </div>
        {/* <p>{statusMessage}</p> */}
      </div>
      <FeaturedBooks />
    </div>
  </>
  )
}


export default Book