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
    const response = await likeProduct(productId, product.images[0]);
    console.log(response);
    if (response) {
      setLikes(likes + 1);
    } else {
      alert("Item is already liked");
    }
  }

  return (
    <div className="container row">
      <NavigationSidebar active="search"></NavigationSidebar>
      <div className="col-10">
        {loading || !product ? (
          <div>Loading...</div>
        ) : (
          <div className="">
            <div className="row d-flex align-content-center">
              <div className="row col-12 col-lg-5 col-xl-6 justify-content-center">
                <div className="col-10">
                  <h2 className="text-danger">
                    {"$ " + product.price.amount / 100}
                  </h2>
                  <h4>{product.title}</h4>
                  <div className="d-flex justify-content-around flex-column flex-wrap align-content-center">
                    <button
                      className="btn btn-primary col-8 my-2"
                      onClick={() => alert("Congrats! You bought the item!")}
                    >
                      Buy Now
                    </button>
                    <button
                      className="btn btn-primary col-8 my-2"
                      onClick={() =>
                        addToWishlist(productId, product.images[0])
                      }
                    >
                      Add to Wishlist
                    </button>
                    <div className="col-8 my-2">
                      <button
                        className="btn btn-primary col-12 my-2"
                        onClick={likeItem}
                      >
                        Like this item
                      </button>
                      <div>Likes: {likes}</div>
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
        <div className="d-flex justify-content-around align-items-center">
          <div className="d-flex">
            <textarea
              onChange={(e) => {
                setComment(e.target.value);
              }}
              value={comment}
            ></textarea>
            <span>Rating (optional) </span>
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
            <button
              type="button"
              className="btn btn-primary"
              onClick={createComment}
            >
              Comment
            </button>
          </div>
        </div>
        <div className="list-group">
          {" "}
          {comments.length === 0
            ? "There are no comments for this product. Be the first to comment!"
            : false}
          {comments.map((comment) => (
            <Comment key={comment._id} comment={comment} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Details;
