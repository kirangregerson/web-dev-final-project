import { useState, useEffect } from "react";
import "./Home.css";
import ItemCarousel from "./Item-Carousel/Item-Carousel";
import NavigationSidebar from "../Navigation-Sidebar/Navigation-Sidebar";
import ProfileWidget from "../Profile/Profile-Widget";
import { getCurrentUser, getUsers } from "../Services/UsersService";
import { getAllLikes } from "../Services/ProductService";

const Home = () => {
  const loggedIn = localStorage.getItem("loggedIn");
  console.log("logged in:");
  console.log(loggedIn);
  const [yourLikedItems, setYourLikedItems] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [othersLikedItems, setOthersLikedItems] = useState([]);
  const [mostLikedItems, setMostLikedItems] = useState([]);
  console.log("wishlist");
  console.log(wishlist);

  useEffect(() => {
    getUsers().then(({ data }) => {
      console.log(data);
    });
    getCurrentUser().then(({ data }) => {
      if (data) {
        setWishlist(data.wishlist);
        setYourLikedItems(data.liked);
      }
    });
    getAllLikes().then(({ data }) => {
      setOthersLikedItems(data);
    });
  }, []);

  return (
    <div className="row">
      <NavigationSidebar active={"home"} />
      <div className="col-8">
        <div>
          <img
            src="linenlanebanner.png"
            className="col-12"
            style={{ maxHeight: "300px", maxWidth: "900px" }}
          ></img>
        </div>
        {/* TODO: If logged in:*/}
        {loggedIn && (
          <div>
            <section>
              <h2>You've recently liked:</h2>
              {yourLikedItems && yourLikedItems.length == 0 ? (
                "You have no liked items :("
              ) : (
                <ItemCarousel items={yourLikedItems} />
              )}
            </section>
            <section>
              <h2> You have these items on your wishlist </h2>
              {wishlist && wishlist.length == 0 ? (
                "Your wishlist is empty :("
              ) : (
                <ItemCarousel items={wishlist} />
              )}
            </section>
          </div>
        )}
        {/*TODO: If not logged in */}
        {(!loggedIn || loggedIn == "false") && (
          <div>
            <section>
              <h2> Other people have recently liked: </h2>
            </section>
            <section>
              <img src="signupbanner.png" className="col-12"></img>
            </section>
          </div>
        )}
        {/*TODO: Generic content*/}
        <section>
          <h2>Other people have liked:</h2>
          {othersLikedItems && othersLikedItems.length == 0 ? (
            "Nobody has liked any items :("
          ) : (
            <ItemCarousel items={othersLikedItems} />
          )}
        </section>
        <section>
          <h2>Most liked items</h2>
          {mostLikedItems.length == 0 ? (
            "There are no liked items :("
          ) : (
            <ItemCarousel items={mostLikedItems} />
          )}
        </section>
      </div>
      <div className="col-2">
        <ProfileWidget />
      </div>
    </div>
  );
};
export default Home;
