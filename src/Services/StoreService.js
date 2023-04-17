import axios from "axios";

export const getProducts = async () => {
  const products = axios.get("https://fakestoreapi.com/products");
  return products;
};
