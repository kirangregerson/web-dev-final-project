import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import {
  createCommentForItem,
  getCommentForItem,
} from "../Services/CommentService";
import { Carousel, CarouselItem } from "react-bootstrap";

import { getSingleProduct } from "../Services/StoreService";
import { getProductMetadata } from "../Services/ProductService";

import Comment from "./Comment";
import { addToWishlist, likeProduct } from "../Services/UsersService";
import NavigationSidebar from "../Navigation-Sidebar/Navigation-Sidebar";

const Details = () => {
  const { productId } = useParams();
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(undefined);
  const [product, setProduct] = useState(undefined);
  const [loading, setLoading] = useState(false);
  const [likes, setLikes] = useState(0);
  const loggedIn = localStorage.getItem("loggedIn");

  useEffect(() => {
    getCommentForItem(productId).then(({ data }) => {
      setComments(data);
    });
    getSingleProduct(productId).then(({ data }) => {
      setLoading(false);
      setProduct(data);
    });
    getProductMetadata(productId).then(({ data }) => {
      setLikes(data.likes);
    });
  }, [productId]);

  async function createComment() {
    const { data } = await createCommentForItem(productId, comment, rating);
    setComments([...comments, data]);
    setComment("");
  }

  async function likeItem() {
    if (!loggedIn) {
      alert("You need to log in to like items!");
    } else {
      const response = await likeProduct(productId, product.images[0]);
      console.log(response);
      if (response) {
        setLikes(likes + 1);
      } else {
        alert("Item is already liked");
      }
    }
  }

  return (
    <div className="row">
      <NavigationSidebar active="search"></NavigationSidebar>
      <div className="col-10">
        {loading || !product ? (
          <div>Loading...</div>
        ) : (
          <div className="">
            <div className="row d-flex align-content-center">
              <div className="row col-12 col-lg-5 col-xl-6 justify-content-center">
                <div className="col-10">
                  <h2 className="text-danger text-end">
                    {"$ " + (product.price.amount / 100).toFixed(2)}
                  </h2>
                  <h4>{product.title}</h4>
                  <div className="d-flex justify-content-around flex-column flex-wrap align-content-center">
                    <button
                      className="btn btn-primary col-8 my-2"
                      onClick={() => {
                        if (!loggedIn) {
                          alert(
                            "You need to log in to add items to purchase items!"
                          );
                        } else {
                          alert("Congrats! You bought the item!");
                        }
                      }}
                    >
                      Buy Now
                    </button>
                    <button
                      className="btn btn-primary col-8 my-2"
                      onClick={() => {
                        if (!loggedIn) {
                          alert(
                            "You need to log in to add items to your wishlist!"
                          );
                        } else {
                          addToWishlist(productId, product.images[0]);
                        }
                      }}
                    >
                      Add to Wishlist
                    </button>
                    <div className="col-8 my-2 row mx-0">
                      <button
                        className="btn btn-primary col-8"
                        onClick={likeItem}
                      >
                        Like this item
                      </button>
                      <span className="text-center col-4 d-flex align-content-center flex-wrap">
                        Likes: {likes}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <Carousel
                variant="dark"
                className="rounded-1 col-12 col-lg-7 col-xl-6"
                style={{ height: "30vh" }}
              >
                {product.images.map((image) => {
                  return (
                    <CarouselItem className="">
                      <div className="d-flex justify-content-center">
                        <img
                          src={image}
                          className=""
                          style={{
                            //width: "80%",
                            height: "30vh",
                            maxHeight: "50vh",
                          }}
                        ></img>
                      </div>
                    </CarouselItem>
                  );
                })}
              </Carousel>
            </div>
          </div>
        )}
        {loggedIn && (
          <div className="d-flex justify-content-around align-items-center my-2">
            <label>
              Rating (optional)
              <select
                onChange={(event) => {
                  const value = event.target.value;
                  setRating(value);
                }}
              >
                <option value={undefined} selected></option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </label>
            <textarea
              onChange={(e) => {
                setComment(e.target.value);
              }}
              value={comment}
            ></textarea>
            <button
              type="button"
              className="btn btn-primary"
              onClick={createComment}
            >
              Comment
            </button>
          </div>
        )}
        <div className="list-group">
          {" "}
          {comments.length === 0
            ? "There are no comments for this product. Be the first to comment!"
            : false}
          {comments.map((comment) => (
            <Comment
              key={comment._id}
              comment={comment}
              className={"list-group-item"}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Details;
