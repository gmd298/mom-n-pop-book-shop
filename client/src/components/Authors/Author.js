import axios from 'axios';
import { useParams } from 'react-router-dom';
import React, {useEffect, useState} from 'react'
import SearchBar from '../../SearchBar';
import FeaturedBooks from '../Books/FeaturedBooks';
import BookCard from '../Books/BookCard';


function Author() {
  const params = useParams();

  console.log('params', params);

  const [author, setAuthor] = useState({}) // refactor to use redux. allBooks.author.name?

  useEffect(() => {
    axios.get(`/authors/${params.id}`)
      .then((res) => {
        setAuthor(res.data);
    });
  }, [params.id])


  console.log('author', author);


  return (
    <>
    <div>
      <h1>
        Author Page
      </h1>
      <SearchBar />
      <div className="card">
        <div className="card-content">
          <h3 className="card-title">{author.name}</h3>
          <h4 className="card-author">{author.hometown}</h4>
          <p className="card-details">{author.bio}</p>
        </div>
        {/* <p>{statusMessage}</p> */}
      </div>
      <div>
        {author.books?.map((book) => {
          return <BookCard book={book} key={book.id} author={author} />
        })}
      </div>
      <FeaturedBooks />
    </div>
  </>
  )
}


export default Author