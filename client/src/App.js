// import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./NavBar";
import Profile from "./Profile";
import Login from "./Login";
import ChangeColor from "./ChangeColor";
import DisplayContainer from "./DisplayContainer";
import Books from "./components/Books/Books";
import { useSelector } from "react-redux";

function App() {
  const theme = useSelector(state => state.theme.value);

  return (
    <BrowserRouter>
      <div className="App" /*style={{ backgroundColor: theme}} */>
        <NavBar />
        <ChangeColor />
        <Routes>
          <Route exact path= {"/"} element= {<DisplayContainer />} />
          <Route exact path= {"/books"} element= {<Books />} />
          <Route exact path= {"/profile"} element= {<Profile />} />
          <Route exact path= {"/login"} element= {<Login />} />
        </Routes>
      </div>
      </BrowserRouter>
  );
}

export default App;