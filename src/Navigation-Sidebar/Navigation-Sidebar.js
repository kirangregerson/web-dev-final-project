import React, {useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faBell,
    faEllipsisH,
    faHome,
    faSearch,
    faUser
} from "@fortawesome/free-solid-svg-icons";
import useToken from "../Services/Token";

// import "./Navigation-Sidebar.css";

const NavigationSidebar = (
    {
        active = 'home'
    }
) => {
    const { token, setToken } = useToken();
    return (
        <div className="list-group col-2">
            <a className={`list-group-item
                ${active === 'home'?'active':''}`}
               href="/home">
                <FontAwesomeIcon icon={faHome} />
                &nbsp;
                Home
            </a>
            <a className={`list-group-item
                ${active === 'search'?'active':''}`}
               href="/search">
                <FontAwesomeIcon icon={faSearch} />
                &nbsp;
                Search
            </a>
            <a className={`list-group-item
                ${active === 'notifications'?'active':''}`}
               href="/notifications">
                <FontAwesomeIcon icon={faBell} />
                &nbsp;
                Notifications
            </a>
            <a className={`list-group-item
                ${active === 'profile'?'active':''}`}
               href={token? ("/profile") : ("/login") }>
                <FontAwesomeIcon icon={faUser} />
                &nbsp;
                Profile
            </a>
            <a className={`list-group-item
                ${active === 'more'?'active':''}`}
               href="/more">
                <FontAwesomeIcon icon={faEllipsisH} />
                &nbsp;
                More
            </a>
        </div>
    );
};
export default NavigationSidebar;