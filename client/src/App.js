import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./NavBar";
// import Profile from "./Profile";
import Home from "./Home";
import Books from "./components/Books/Books";
import Cart from "./Cart";
import AllBooks from "./components/AllBooks";
import Authors from "./components/Authors/Authors";
import Author from "./components/Authors/Author";
import Book from "./components/Books/Book";


function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route exact path= {"/"} element= {<Home />} />
          <Route exact path= {"/books"} element= {<Books />} />
          <Route exact path= {"/books/:id"} element= {<Book /> } />

          <Route exact path= {"/authors"} element= {<Authors />} />
          <Route exact path= {"/authors/:id"} element= {<Author />} />
          
          {/* <Route exact path= {"/profile"} element= {<Profile />} /> */}
          <Route exact path= {"/cart"} element= {<Cart />} />
          <Route exact path= {"/allbooks"} element= {<AllBooks />} />
        </Routes>
      </div>
      </BrowserRouter>
  );
}

export default App;