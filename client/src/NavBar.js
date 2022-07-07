import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  // const navigate = useNavigate();

  // // function handleLogout() {
  // //   fetch("/logout", {method: "DELETE"}).then((r) => {
  // //     if (r.ok) {
  // //       setUser({});
  // //       navigate('/login');
  // //     }
  // //   })
  // // }

  return (
    <nav className="nav">
      {/* <header>
        <button onClick={handleLogout}>Logout</button>
      </header> */}
      <Link to="/" className="site-title"> Mom'n Pop Book Shop </Link>
      <ul>
        <li>
          <Link to="/bookshop"> Bookshop </Link>
        </li>
        <li>
          <Link to="/profile"> Profile </Link> 
        </li>
        <li>
          <Link to="/login"> Login </Link> 
        </li>
      </ul>
    </nav>
  );
}


export default NavBar;