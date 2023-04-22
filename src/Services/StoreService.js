import axios from "axios";

export const getProducts2 = async () => {
  const products = axios.get("https://fakestoreapi.com/products");
  return products;
};

export const getProducts = async () => {
  const products = await axios.get(
    `${process.env.REACT_APP_API_BASE}/api/etsy/products`
  );
  return products;
};

export const searchForItem = async (searchQuery, index) => {
  const products = await axios.get(
    `${process.env.REACT_APP_API_BASE}/api/etsy/products?searchQuery=${searchQuery}&offset=${index}`
  );
  return products;
};

export const getSingleProduct = async (productId) => {
  const product = await axios.get(
    `${process.env.REACT_APP_API_BASE}/api/etsy/products/${productId}`
  );
  return product;
};
