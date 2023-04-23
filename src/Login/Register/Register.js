import { useState } from "react";
import { useNavigate } from "react-router";
import { registerUser } from "../../Services/LoginService";

const Register = ({ setShowRegister }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("buyer"); // buyer or moderator

  const handleRegistration = async () => {
    const registerRes = registerUser(username, password, role);

    console.log(registerRes);
    const domNode = document.getElementById("root");
    setShowRegister(false);
  };

  return (
    <div className="vw-100 vh-100">
      <div className="h-50 container d-flex align-content-center justify-content-center flex-column w-50">
        <div className="form-title">Register an Account</div>
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
        <div className="">
          <div className="">Role:</div>
          <div className="btn-group-toggle">
            <label className="">
              Buyer
              <input
                className="btn"
                checked
                type="radio"
                name="role"
                onChange={() => setRole("buyer")}
              ></input>
            </label>
            <label>
              Ad-linen-strator
              <input
                className="btn"
                type="radio"
                name="role"
                onChange={() => setRole("moderator")}
              ></input>
            </label>
          </div>
        </div>
        <button className="btn btn-primary my-3" onClick={handleRegistration}>
          Register
        </button>
      </div>
    </div>
  );
};
export default Register;
