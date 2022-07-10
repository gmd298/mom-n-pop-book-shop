import React, {useState} from 'react'
import axios from 'axios';
import FeaturedBooks from './components/Books/FeaturedBooks';


function Author() {
  const [author, setAuthor] = useState({})


  /// fetch for search function?
  const fetchAuthor = () => {
    axios.get(`/author/${author.id}`)
    .then((res) => {
      setAuthor(res.data);
  });
}

/// dont think I need an author card, but I do think I will need book cards if
/// I want to show books by the author. 

  return (
    <>
    <div>
      <h1>
        Author Page
      </h1>
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