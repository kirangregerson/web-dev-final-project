import { useState, useEffect } from "react";
import { getProducts } from "../StoreService";
import SearchItem from "./SearchItem";

const Search = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getProducts().then(({ data }) => {
      setItems(data);
    });
  }, []);

  return (
    <div className="container">
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
  );
};
export default Search;
