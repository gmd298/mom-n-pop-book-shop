import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import axios from 'axios';
import Login from './Login';
import BookCard from './components/Books/BookCard';
import FeaturedBooks from './components/Books/FeaturedBooks';

function Profile() {
  const user = useSelector((state) => state.user.value);
  const themeColor = useSelector((state) => state.theme.value);
  const [books, setBooks] = useState([])

  console.log('themeColor', themeColor);

  const fetchBooks = () => {
    axios.get("/books?limit=10")
    .then((res) => {
      console.log('books >>>>', res.data)
      setBooks(res.data);
    });
  }

  useEffect(() => {
    fetchBooks();
  }, []);

    const renderWishlist = () => {
      const ary = [[]]
      books.forEach((book, index) => {       
        ary[ary.length - 1].push(<BookCard key={book.id} book={book} author={book.author} />)
        if ((index + 1) % 5 === 0) {
          ary.push([])
        }
      })
      return ary
    }

  return (
    <div>
      <Login />
      <div style={{color: themeColor}}>
        <h1>Profile Page</h1>
        <p>Name: {user.name} </p>
        <p>Age: {user.age} </p>
        <p>eMail: {user.email} </p>
      </div>
      <div className="card-container">
      { renderWishlist().map(bookAry => {
        return <div>{bookAry}</div>
      })  }
      </div>
      <FeaturedBooks />
    </div>
  )
}

export default Profile;