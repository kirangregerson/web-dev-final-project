import axios from "axios";
import { comments } from "./comments";

const api = axios.create({
  withCredentials: true,
});

// export const getCommentForItem = async (itemId) => {
//   const comments = await axios.get(
//     `${process.env.REACT_APP_API_BASE}/api/item/${itemId}/comments`
//   );
//   return comments;
// };

// export const createCommentForItem = async (itemId, comment, rating) => {
//   if (!comment) {
//     return;
//   }
//   const success = await axios.post(
//     `${process.env.REACT_APP_API_BASE}/api/item/${itemId}/comments`,
//     { comment, rating }
//   );
//   return success;
// };

export const getProductMetadata = async (productId) => {
  const metadata = await api.get(
    `${process.env.REACT_APP_API_BASE}/api/product/${productId}`
  );
  return metadata;
};

export const getAllLikes = async () => {
  const products = await api.get(
    `${process.env.REACT_APP_API_BASE}/api/products/liked`
  );
  return products;
};
