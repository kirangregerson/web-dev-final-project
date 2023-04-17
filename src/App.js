import logo from "./logo.svg";
import { LinkContainer } from "react-router-bootstrap";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { useState } from "react";
//import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Login from "./Login";
import Search from "./Search/Search";
import Home from "./Home/Home";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <BrowserRouter>
      <div className="App">
        <div>
          <LinkContainer to="/login">
            <a>Log in</a>
          </LinkContainer>{" "}
          <LinkContainer to="/search">
            <a>Search</a>
          </LinkContainer>{" "}
          <LinkContainer to="/home">
            <a>Home</a>
          </LinkContainer>
        </div>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route index path="/home" element={<Home />}></Route>
          <Route
            path="/login"
            element={<Login setLoggedIn={setLoggedIn} />}
          ></Route>
          <Route path="/search" element={<Search />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
