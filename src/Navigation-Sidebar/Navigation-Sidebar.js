import React from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faEllipsisH,
  faHome,
  faSearch,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

// import "./Navigation-Sidebar.css";

const NavigationSidebar = ({ active = "home" }) => {
  const loggedInStr = localStorage.getItem("loggedIn");
  const loggedIn = JSON.parse(loggedInStr);

  async function logOut() {
    localStorage.clear();
    logOut();
  }

  return (
    <div className="list-group col-2">
      <a
        className={`list-group-item
                ${active === "home" ? "active" : ""}`}
        href="/home"
      >
        <FontAwesomeIcon icon={faHome} />
        <span className="d-none d-md-inline">&nbsp; Home</span>
      </a>
      <a
        className={`list-group-item
                ${active === "search" ? "active" : ""}`}
        href="/search"
      >
        <FontAwesomeIcon icon={faSearch} />
        <span className="d-none d-md-inline">&nbsp; Search</span>
      </a>
      {/*<a
        className={`list-group-item
                ${active === "notifications" ? "active" : ""}`}
        href="/notifications"
      >
        <FontAwesomeIcon icon={faBell} />
        &nbsp; Notifications
  </a>*/}
      <a
        className={`list-group-item
                ${active === "profile" ? "active" : ""}`}
        href={loggedIn ? "/profile" : "/login"}
      >
        <FontAwesomeIcon icon={faUser} />
        <span className="d-none d-md-inline">
          &nbsp;
          {loggedIn ? "Profile" : "Log in"}
        </span>
      </a>
      {loggedIn && (
        <a className={`list-group-item`} onClick={logOut} href="/">
          <FontAwesomeIcon icon={faUser} />
          <span className="d-none d-md-inline">&nbsp; Log out</span>
        </a>
      )}
      {/*<a
        className={`list-group-item
                ${active === "more" ? "active" : ""}`}
        href="/more"
      >
        <FontAwesomeIcon icon={faEllipsisH} />
        &nbsp; More
      </a>*/}
    </div>
  );
};
export default NavigationSidebar;
