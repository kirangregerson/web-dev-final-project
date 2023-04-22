import { useState, useEffect } from "react";
import { getProducts } from "../Services/StoreService";
import SearchItem from "./SearchItem";
import NavigationSidebar from "../Navigation-Sidebar/Navigation-Sidebar";

const Search = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    let isApiSubscribed = true;
    getProducts().then(({ data }) => {
      if (isApiSubscribed) {
        console.log(data);
        setItems(data);
      }
    });
    return () => {
      // cancel the subscription
      isApiSubscribed = false;
    };
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-8">
          <div>
            <input className=""></input>
            <button>Search</button>
          </div>
          <ul className="list-group">
            {items.map((item) => {
              return (
                <SearchItem key={item.listing_id} item={item}></SearchItem>
              );
            })}
          </ul>
          <div>
            <button>Previous page</button>
            <button>Next page</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Search;
