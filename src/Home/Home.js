import { useState, useEffect } from "react";
import "./Home.css";
import ItemCarousel from "./Item-Carousel/Item-Carousel";
import NavigationSidebar from "../Navigation-Sidebar/Navigation-Sidebar";
import ProfileWidget from "../Profile/Profile-Widget";
import { getUsers } from "../Services/UsersService";

const Home = () => {
  const [yourLikedItems, setYourLikedItems] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [othersLikedItems, setOthersLikedItems] = useState([]);
  const [mostLikedItems, setMostLikedItems] = useState([]);

  useEffect(() => {
    getUsers().then(({ data }) => {
      console.log(data);
    });
  }, []);

  return (
    <div className="row">
      <NavigationSidebar active={"home"} />
      <div className="col-8">
        <h1>Welcome home!</h1>
        {/* TODO: If logged in:*/}
        <section>
          <h2>You've recently liked:</h2>
          {yourLikedItems.length == 0 ? (
            "You have no liked items :("
          ) : (
            <ItemCarousel items={yourLikedItems} />
          )}
        </section>
        <section>
          <h2> You have these items on your wishlist </h2>
          {wishlist.length == 0 ? (
            "Your wishlist is empty :("
          ) : (
            <ItemCarousel items={wishlist} />
          )}
        </section>
        {/*TODO: If not logged in */}
        <section>
          <h2> Other people have recently liked: </h2>
        </section>
        <section>
          <h2>Ad about signing up to get a sale or something</h2>
        </section>
        {/*TODO: Generic content*/}
        <section>
          <h2>Other people have liked:</h2>
          {othersLikedItems.length == 0 ? (
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
