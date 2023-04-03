import { useState } from "react";

const Login = ({ setLoggedIn }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    alert(`${username} ${password}`);
    // make backend call to check credentials
    const validCredentials = true; //backendCall(username, hash(password))
    setLoggedIn(validCredentials);
  };

  return (
    <div className="vw-100 vh-100">
      <div className="h-50 container d-flex align-content-center justify-content-center flex-column w-50">
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
      </div>
    </div>
  );
};
export default Login;
