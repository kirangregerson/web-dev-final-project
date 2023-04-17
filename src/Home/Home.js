import { useState, useEffect } from "react";
import { getRecentlyViewed } from "../Services/SavedService";
import { Carousel, CarouselItem } from "react-bootstrap";
import "./Home.css";

const Home = () => {
  const [viewedItems, setViewedItems] = useState([]);

  useEffect(() => {
    const items = getRecentlyViewed();
    setViewedItems(items);
  }, []);

  // turns a list of items into a list of a list of three items (or fewer) each
  // ex: [1,2,3,4,5] -> [[1,2,3], [4,5]]
  function tripleUp(items) {
    let totalItems = [];
    for (let i = 0; i < items.length; i += 3) {
      let tripledItems = [];
      for (let j = i; j < Math.min(i + 3, items.length); j++) {
        tripledItems.push(items[j]);
      }
      totalItems.push(tripledItems);
    }
    return totalItems;
  }

  return (
    <div>
      <h1>Welcome home!</h1>
      {/* TODO: If logged in: */}
      <section className="">
        <h2 className="">Recently Viewed Items:</h2>
        <div className="row justify-content-center">
          <Carousel variant="dark" className="col-10 rounded-1">
            {tripleUp(viewedItems).map((triple) => {
              console.log(triple);
              return (
                <CarouselItem>
                  <div className="row">
                    {triple.map((item) => {
                      return (
                        <div className="col-4">
                          <img
                            className="col-12"
                            src={item.image}
                            title={item.title}
                            alt={item.title}
                            style={{ maxHeight: "250px" }}
                          ></img>
                        </div>
                      );
                    })}
                  </div>
                </CarouselItem>
              );
            })}
          </Carousel>
        </div>
      </section>
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
  );
};
export default Home;
