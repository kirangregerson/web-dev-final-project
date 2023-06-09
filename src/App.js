import logo from "./logo.svg";
import { LinkContainer } from "react-router-bootstrap";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import "./css/main_themes.min.css";
import "./App.css";

import Login from "./Login/Login";
import Search from "./Search/Search";
import Home from "./Home/Home";
import Details from "./Details/Details";
import Profile from "./Profile/Profile";
import ROProfile from "./Profile/RO-Profile";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const username = localStorage.getItem("username");
    if (username === null) {
      //JSON stringify is needed to serialize value before storing. This is reversed at use time.
    } else {
      localStorage.setItem("loggedIn", true);
    }
  }, []);

  return (
    <BrowserRouter>
      <div className="App container">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route index path="/home" element={<Home />}></Route>
          <Route
            path="/login"
            element={<Login setLoggedIn={setLoggedIn} />}
          ></Route>
          <Route path="/search" element={<Search />}></Route>
          <Route path="/search/:searchTerm" element={<Search />}></Route>
          <Route path="/details/:productId" element={<Details />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/profile/:profileId" element={<ROProfile />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
