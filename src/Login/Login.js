import { useState } from "react";
import axios from "axios";
import { dom } from "@fortawesome/fontawesome-svg-core";
import Register from "./Register/Register";
import * as root from "react-dom";
import { render } from "react-dom";
import { redirect, useNavigate } from "react-router";
import { loginUser } from "../Services/LoginService";
import NavigationSidebar from "../Navigation-Sidebar/Navigation-Sidebar";

const Login = ({ setLoggedIn }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showRegister, setShowRegister] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async () => {
    console.log("logging in...");
    const loginRes = await loginUser(username, password);
    console.log(loginRes);
    if (loginRes.status === 200) {
      console.log("SUCCESS!");
      localStorage.setItem("loggedIn", true);
      localStorage.setItem("username", username);
      localStorage.setItem("role", loginRes.data.role);
      navigate("/");
    }
  };

  const handleRegister = () => {
    setShowRegister(true);
  };

  return (
    <div className="row">
      <NavigationSidebar active="profile"></NavigationSidebar>
      <div className="col-10">
        {showRegister ? (
          <Register setShowRegister={setShowRegister} />
        ) : (
          <div className="d-flex align-content-center justify-content-center flex-column w-50 m-5">
            <div className="form-title">Login</div>
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
              Log in
            </button>
            <div className="form-title">Don't have an account?</div>
            <button className="btn btn-primary my-3" onClick={handleRegister}>
              Register
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
export default Login;
