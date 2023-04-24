import axios from "axios";
import { comments } from "./comments";

const api = axios.create({
  withCredentials: true,
});

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
