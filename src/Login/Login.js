import { useState, useEffect } from "react";
import NavigationSidebar from "../Navigation-Sidebar/Navigation-Sidebar";
import React from 'react';
import PropTypes from 'prop-types';

import './Login.css';
import useToken from "../Services/Token";
import axios from "axios";

async function loginUser(credentials) {
    const res = await axios.post(`${process.env.REACT_APP_API_BASE}/login`, {
        username: credentials.username,
        password: credentials.password,
    });
    console.log(res);
}

// export default function Login({ setToken }) {
export default function Login() {

    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
            username,
            password
        });
        console.log(token);
        // setToken(token);
    }

    return(
        <div className="login-wrapper">
            <h1>Please Log In</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    <p>Username</p>
                    <input type="text" onChange={e => setUserName(e.target.value)}/>
                </label>
                <label>
                    <p>Password</p>
                    <input type="password" onChange={e => setPassword(e.target.value)}/>
                </label>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}
