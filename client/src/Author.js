import React, {useState} from 'react'
import axios from 'axios';
import FeaturedBooks from './components/Books/FeaturedBooks';
import allBooks from './slices/allBooks';
import { useDispatch, useSelector } from 'react-redux';
import SearchBar from './SearchBar';

// do I need useSelector?

function Author() {
  const [author, setAuthor] = useState({}) // refactor to use redux. allBooks.author.name?

  const dispatch = useDispatch()

  /// fetch for search function?
  const fetchAuthor = () => {
    axios.get(`/author/${author.id}`)
    .then((res) => {
      setAuthor(res.data);
  });
}

// how do I access individual author from redux? 

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
      <FeaturedBooks />
    </div>
  </>
  )
}


export default Author