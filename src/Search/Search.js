import { useState, useEffect } from "react";
import { getProducts, searchForItem } from "../Services/StoreService";
import SearchItem from "./SearchItem";
import NavigationSidebar from "../Navigation-Sidebar/Navigation-Sidebar";
import { useNavigate, useParams } from "react-router";
import { useSearchParams } from "react-router-dom";

const Search = () => {
  const { searchTerm } = useParams();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [items, setItems] = useState([]);
  const [searchTarget, setSearchTarget] = useState(searchTerm);
  const [index, setIndex] = useState(
    searchParams.has("index") ? searchParams.get("index") : 0
  );

  useEffect(() => {
    if (searchTerm) {
      searchForItem(searchTarget, index).then(({ data }) => {
        setItems(data);
      });
    }
  }, [index]);

  async function submitSearch() {
    const { data } = await searchForItem(searchTarget, index);
    setIndex(0);
    setItems(data);
    navigate(`/search/${searchTarget}?index=${0}`);
  }

  async function incrementIndex() {
    setIndex(1 + index);
    navigate(`/search/${searchTarget}?index=${1 + index}`);
  }

  async function decrementIndex() {
    setIndex(index - 1);
    navigate(`/search/${searchTarget}?index=${index - 1}`);
  }

  function submitSearch() {
    console.log(searchTarget);
  }

  return (
    <div className="container">
      <div className="row">
        <NavigationSidebar active="search" />
        <div className="col-8">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Search for an item"
              onChange={(e) => {
                setSearchTarget(e.target.value);
              }}
            ></input>
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary"
                onClick={submitSearch}
              >
                Search
              </button>
            </div>
          </div>
          {searchTerm && (
            <div>
              <ul className="list-group">
                {items.map((item) => {
                  return (
                    <SearchItem key={item.listing_id} item={item}></SearchItem>
                  );
                })}
              </ul>
              <div>
                {index > 0 && (
                  <button onClick={decrementIndex}>Previous page</button>
                )}
                <button onClick={incrementIndex}>Next page</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default Search;
