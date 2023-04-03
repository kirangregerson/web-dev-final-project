import axios from "axios";

export const getProducts = () => {
  const products = axios.get("https://fakestoreapi.com/products");
  return products;
};
