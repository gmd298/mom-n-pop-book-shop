// import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./NavBar";
import Profile from "./Profile";
// import ChangeColor from "./ChangeColor";
import Home from "./Home";
import Books from "./components/Books/Books";
// import { useSelector } from "react-redux";
import Author from "./Author";
import Cart from "./Cart";

function App() {
  // const theme = useSelector(state => state.theme.value);

  return (
    <BrowserRouter>
      <div className="App" /*style={{ backgroundColor: theme}} */>
        <NavBar />
        <Routes>
          <Route exact path= {"/"} element= {<Home />} />
          <Route exact path= {"/books"} element= {<Books />} />
          <Route exact path= {"/author"} element= {<Author />} />
          <Route exact path= {"/profile"} element= {<Profile />} />
          <Route exact path= {"/cart"} element= {<Cart />} />
        </Routes>
      </div>
      </BrowserRouter>
  );
}

export default App;