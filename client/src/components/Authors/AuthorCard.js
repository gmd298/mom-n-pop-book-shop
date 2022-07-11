
// do I need useSelector?

import { Link } from "react-router-dom"

function AuthorCard({author}) {


// how do I access individual author from redux? 

  return (

    <Link to={`/authors/${author.id}`}>
      <div className="card">
        <div className="card-content">
          <h3 className="card-title">{author.name}</h3>
          <h4 className="card-author">{author.hometown}</h4>
          <p className="card-details">{author.bio}</p>
        </div>
        {/* <p>{statusMessage}</p> */}
      </div> 
    </Link> 
      
    
  )
}


export default AuthorCard