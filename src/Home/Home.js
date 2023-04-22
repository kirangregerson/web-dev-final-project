import { useState, useEffect } from "react";
import { getRecentlyViewed } from "../Services/SavedService";
import { Carousel, CarouselItem } from "react-bootstrap";
import "./Home.css";
import ItemCarousel from "./Item-Carousel/Item-Carousel";
import NavigationSidebar from "../Navigation-Sidebar/Navigation-Sidebar";
import ProfileWidget from "../Profile/Profile-Widget";

const Home = () => {
  return (
      <div className="row">
          <NavigationSidebar active={"home"}/>
          <div className="col-8">
              <h1>Welcome home!</h1>
              {/* TODO: If logged in:*/}
              <ItemCarousel/>
              <section>
                  <h2>You've recently liked:</h2>
              </section>
              <section>
                  <h2> (Person who's stuff you've liked) also has these for sale: </h2>
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
                  <h2>Popular accounts:</h2>
              </section>
          </div>
          <div className="col-2">
              <ProfileWidget/>
          </div>
      </div>
  );
};
export default Home;
