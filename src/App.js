import logo from "./logo.svg";
import { LinkContainer } from "react-router-bootstrap";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { useState } from "react";
//import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Login from "./Login";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <BrowserRouter>
      <div className="App">
        <div>
          <LinkContainer to="/login">
            <a>Log in</a>
          </LinkContainer>
        </div>
        <Routes>
          <Route index path="/"></Route>
          <Route
            path="/login"
            element={<Login setLoggedIn={setLoggedIn} />}
          ></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
