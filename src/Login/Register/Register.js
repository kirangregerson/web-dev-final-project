import { useState } from "react";
import axios from "axios";
import {render} from "react-dom";
import Login from "../Login";

const Register = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleRegistration = async () => {
        const registerRes = await axios.post(
            `${process.env.REACT_APP_API_BASE}/api/register`,
            {username: username, password: password}
        );
        console.log(registerRes);
        const domNode = document.getElementById('root');
        render(<Login />, domNode);
    };


    return (
        <div className="vw-100 vh-100">
            <div className="h-50 container d-flex align-content-center justify-content-center flex-column w-50">
                <div className="form-title">
                    Register an Account
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
                <button className="btn btn-primary my-3" onClick={handleRegistration}>
                    Register
                </button>
            </div>
        </div>
    );
};
export default Register;
