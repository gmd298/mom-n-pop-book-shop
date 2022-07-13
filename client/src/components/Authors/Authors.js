import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAuthors } from '../../slices/search';

import AuthorCard from './AuthorCard';
import SearchBar from '../../SearchBar';
import FeaturedBooks from '../Books/FeaturedBooks';

function Authors() {
  const dispatch = useDispatch();
  const filteredAuthors= useSelector(state => state.search.filteredAuthors);

  useEffect(() => {
    dispatch(fetchAuthors());
  }, []);

    const renderAuthors = () => {
      const ary = [[]]
      filteredAuthors.forEach((author, index) => {       
        ary[ary.length - 1].push(<AuthorCard key={author.id} author={author} />)
        if ((index + 1) % 5 === 0) {
          ary.push([])
        }
      })
      return ary
    }

  const onLoadMore = () => {
    dispatch(fetchAuthors(true));
  }

  return (
    <>
      <div>
        <h1>
          Authors
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


export default Authors