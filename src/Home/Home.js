import { useState, useEffect } from "react";
import "./Home.css";
import ItemCarousel from "./Item-Carousel/Item-Carousel";
import NavigationSidebar from "../Navigation-Sidebar/Navigation-Sidebar";
import ProfileWidget from "../Profile/Profile-Widget";
import { getCurrentUser, getUsers } from "../Services/UsersService";
import { getAllLikes } from "../Services/ProductService";
import { getAllComments } from "../Services/CommentService";
import Comment from "../Details/Comment";

const Home = () => {
  const loggedIn = localStorage.getItem("loggedIn");
  const role = localStorage.getItem("role");
  console.log("logged in:");
  console.log(loggedIn);
  const [yourLikedItems, setYourLikedItems] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [othersLikedItems, setOthersLikedItems] = useState([]);
  const [comments, setComments] = useState([]);
  const [commentsRendered, setCommentsRendered] = useState(false);

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

  useEffect(() => {
    if (!commentsRendered) {
      getAllComments().then(({ data }) => {
        setComments(data);
        setCommentsRendered(true);
      });
    }
  }, [commentsRendered]);

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
        {loggedIn && role === "buyer" && (
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
        {loggedIn && role === "moderator" && (
          <div>
            <section>
              <h2>Recently posted comments:</h2>
              <div className="list-group">
                {comments.map((comment) => {
                  return (
                    <div className="row">
                      <Comment
                        comment={comment}
                        setCommentsRendered={setCommentsRendered}
                      ></Comment>
                    </div>
                  );
                })}
              </div>
            </section>
          </div>
        )}
        {/*TODO: If not logged in */}
        {(!loggedIn || loggedIn == "false") && (
          <div>
            <section>
              <img src="signupbanner.png" className="col-12"></img>
            </section>
          </div>
        )}
        {/*TODO: Generic content*/}
        {(!loggedIn || role === "buyer") && (
          <section>
            <h2>Other people have liked:</h2>
            {othersLikedItems && othersLikedItems.length == 0 ? (
              "Nobody has liked any items :("
            ) : (
              <ItemCarousel items={othersLikedItems} />
            )}
          </section>
        )}
      </div>
      <div className="col-2">
        <ProfileWidget />
      </div>
    </div>
  );
};
export default Home;
