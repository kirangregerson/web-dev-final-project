import React, { useState, useEffect } from "react";
import {
    faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { getProducts } from "../Services/StoreService";
import SearchItem from "./SearchItem";
import NavigationSidebar from "../Navigation-Sidebar/Navigation-Sidebar";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Search = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getProducts().then(({ data }) => {
      setItems(data);
    });
  }, []);

  return (
    <div className="container">
        <div className="row">
            <NavigationSidebar active="search"/>
            <div className="col-8">
                <div className="input-group">
                    <input className="form-control py-2 rounded-pill mr-1 pr-5" type="search" placeholder="Search"></input>
                    <span className="input-group-append">
                        <button className="btn rounded-pill border-0 ml-n5" type="button">
                            <FontAwesomeIcon icon={faSearch} className="position-absolute wd-nudge-up"/>
                        </button>
                    </span>
                </div>
                {/*<div className="row">*/}
                {/*    <div className="col-1">*/}
                {/*        <FontAwesomeIcon icon={faSearch} className="position-absolute*/}
                {/*       wd-nudge-up"/>*/}
                {/*    </div>*/}
                {/*    <div className="col-4">*/}
                {/*        <input placeholder="Search Linens"*/}
                {/*               className="form-control rounded-pill ps-5"/>*/}
                {/*    </div>*/}
                {/*</div>*/}
                <ul className="list-group">
                    {items.map((item) => {
                        return <SearchItem item={item}></SearchItem>;
                    })}
                </ul>
            </div>
        </div>
    </div>
  );
};
export default Search;
