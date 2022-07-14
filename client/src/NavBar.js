import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function NavBar() {

  const featuredBooks = useSelector(state => state.featuredBooks.featuredBooks)

  return (
    <nav className="nav">      
      <ul className="nav-list">
        <li className="nav-item left-nav-item">
          <Link to="/" className="site-title"> Mom'n Pop Book Shop </Link>
        </li>
        <li className="nav-item">
          <a href="#featured">{featuredBooks.length > 0 && 
            <div>{featuredBooks.length} new featured books!!</div>
          }</a>
        </li>
        <li className="nav-item">
          <Link to="/books"> Books </Link>
        </li>
        <li className="nav-item">
          <Link to="/authors"> Authors </Link> 
        </li>
        {/* <li className="nav-item">
          <Link to="/profile"> Profile </Link> 
        </li> */}
        <li className="nav-item">
          <Link to="/cart"> Cart </Link> 
        </li>
      </ul>
    </nav>
  );
}


export default NavBar;