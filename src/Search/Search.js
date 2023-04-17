import { useState, useEffect } from "react";
import { getProducts } from "../Services/StoreService";
import SearchItem from "./SearchItem";
import NavigationSidebar from "../Navigation-Sidebar/Navigation-Sidebar";

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
                <div>
                    <input className=""></input>
                    <button>Search</button>
                </div>
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
