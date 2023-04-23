import logo from "./logo.svg";
import { LinkContainer } from "react-router-bootstrap";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Login from "./Login/Login";
import Search from "./Search/Search";
import Home from "./Home/Home";
import Details from "./Details/Details";
import NavigationSidebar from "./Navigation-Sidebar/Navigation-Sidebar";
import Profile from "./Profile/Profile";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const username = localStorage.getItem("username");
    console.log(username === null);
    if (username === null) {
      //JSON stringify is needed to serialize value before storing. This is reversed at use time.
      localStorage.setItem("loggedIn", false);
      localStorage.setItem("username", null);
    } else {
      localStorage.setItem("loggedIn", true);
    }
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route index path="/home" element={<Home />}></Route>
          <Route
            path="/login"
            element={<Login setLoggedIn={setLoggedIn} />}
          ></Route>
          <Route path="/search" element={<Search />}></Route>
          <Route path="/search/:searchTerm" element={<Search />}></Route>
          <Route path="/item/:productId" element={<Details />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
