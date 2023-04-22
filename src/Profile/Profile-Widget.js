import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUser} from "@fortawesome/free-solid-svg-icons";
import "./Profile-Widget.css";

const ProfileWidget = () => {
    const loggedInStr = localStorage.getItem("loggedIn");
    const loggedIn = JSON.parse(loggedInStr);
    if (loggedIn) {
        const username = localStorage.getItem("username");
        return (
            <a className="fw-bold links"
               href="/profile">
                <FontAwesomeIcon icon={faUser} />
                &nbsp;
                Current logged in as {username}
            </a>
        )
    }
}
export default ProfileWidget;