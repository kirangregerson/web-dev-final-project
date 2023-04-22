import axios from "axios";

export const getProducts2 = async () => {
  const products = axios.get("https://fakestoreapi.com/products");
  return products;
};

export const getProducts = async () => {
  const products = await axios.get(
    `${process.env.REACT_APP_API_BASE}/api/etsy/products`
  );
  console.log(products);
  return products;
};

export const getSingleProduct = async (productId) => {
  const product = await axios.get(
    `${process.env.REACT_APP_API_BASE}/api/etsy/products/${productId}`
  );
  return product;
};
