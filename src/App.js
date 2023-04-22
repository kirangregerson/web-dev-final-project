import logo from "./logo.svg";
import { LinkContainer } from "react-router-bootstrap";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Login from "./Login/Login";
import Search from "./Search/Search";
import Home from "./Home/Home";
import Details from "./Details/Details";
import useToken from "./Services/Token";
import NavigationSidebar from "./Navigation-Sidebar/Navigation-Sidebar";
import {get} from "axios";
import Profile from "./Profile/Profile";

function App() {

  const { token, setToken } = useToken();

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route index path="/home" element={<Home />}></Route>
          <Route path="/login" element={<Login setToken={setToken}/>}></Route>
          <Route path="/search" element={<Search />}></Route>
          <Route path="/item/:productId" element={<Details />}></Route>
          <Route path="/profile" element={<Profile/>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
