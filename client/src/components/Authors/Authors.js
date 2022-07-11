
// import PropTypes from 'prop-types' TODO
import axios from 'axios';
import React, { useEffect, useState } from 'react';

import AuthorCard from './AuthorCard';
import SearchBar from '../../SearchBar';
import FeaturedBooks from '../Books/FeaturedBooks';

// cursor pagination [6,5,4], [3,2,1] 
// offset pagination

function Authors() {
  const [authors, setAuthors] = useState([]);
  const [cursor, setCursor] = useState();

  // fetching data
  const fetchAuthors = (cursor = undefined) => {
    axios.get("/authors",  { params: { limit: 10, cursor } })
    .then((res) => {
      setAuthors((state) => {
        return [ ...state, ...res.data]
      });
      setCursor(res.data[res.data.length - 1].id);
    });
  }
  
  useEffect(() => {
    fetchAuthors();
  }, []);

    const renderAuthors = () => {
      const ary = [[]]
      authors.forEach((author, index) => {       
        ary[ary.length - 1].push(<AuthorCard key={author.id} author={author} />)
        if ((index + 1) % 5 === 0) {
          ary.push([])
        }
      })
      return ary
    }

  const onLoadMore = () => {
    fetchAuthors(cursor)
  }

  return (
    <>
      <div>
        <h1>
          Book Shop
        </h1>
        <SearchBar />
        <div >
        { renderAuthors().map(authorAry => {
          return <div className="card-container">{authorAry}</div>
        })  }
        </div>
        <div className='div-button' onClick={onLoadMore}>load more</div>        
      </div>
      <FeaturedBooks />
    </>
  )
}

// Books.propTypes = {} // todo

export default Authors