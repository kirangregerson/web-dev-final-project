import { useState } from "react";
import axios from "axios";
import {dom} from "@fortawesome/fontawesome-svg-core";
import Register from "./Register/Register";
import * as root from "react-dom";
import {render} from "react-dom";
import {redirect, useNavigate} from "react-router";

const Login = ({ setLoggedIn }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async () => {
    console.log("logging in...")
    const loginRes = await axios.post(
        `${process.env.REACT_APP_API_BASE}/api/login`,
        {username: username, password: password}
    );
    console.log(loginRes);
    if (loginRes.status === 200) {
      console.log("SUCCESS!")
      localStorage.setItem("loggedIn", JSON.stringify(true));
      navigate("/");
    }
  };

  const handleRegister = () => {
    const domNode = document.getElementById('root');
    render(<Register />, domNode);
  }

  return (
    <div className="vw-100 vh-100">
      <div className="h-50 container d-flex align-content-center justify-content-center flex-column w-50">
        <div className="form-title">
          Login
        </div>
        <div className="form-group my-2">
          <label className="w-100">
            {" "}
            Username
            <input
              className="form-control"
              onChange={({ target }) => setUsername(target.value)}
            ></input>
          </label>
        </div>
        <div className="form-group my-2">
          <label className="w-100">
            {" "}
            Password
            <input
              className="form-control"
              onChange={({ target }) => setPassword(target.value)}
            ></input>
          </label>
        </div>
        <button className="btn btn-primary my-3" onClick={handleLogin}>
          Submit
        </button>
        <div className="form-title">
          Don't have an account?
        </div>
        <button className="btn btn-primary my-3" onClick={handleRegister}>
          Register
        </button>
      </div>
    </div>
  );
};
export default Login;
