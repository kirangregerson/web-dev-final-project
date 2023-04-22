import { Carousel, CarouselItem } from "react-bootstrap";
import { useEffect, useState } from "react";
import { getRecentlyViewed } from "../../Services/SavedService";

const ItemCarousel = ({ items }) => {
  function tripleUp(items) {
    if (!items) {
      return [];
    }
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
    <section className="">
      <div className="row justify-content-center">
        <Carousel variant="dark" className="col-10 rounded-1">
          {tripleUp(items).map((triple) => {
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
  );
};
export default ItemCarousel;
