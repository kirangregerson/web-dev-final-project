import axios from "axios";

const api = axios.create({ withCredentials: true });

export const getUsers = async () => {
  console.log("sending");
  const users = await api.get(`${process.env.REACT_APP_API_BASE}/api/users`);
  console.log(users);
  return users;
};

export const getCurrentUser = async () => {
  const user = await api.get(
    `${process.env.REACT_APP_API_BASE}/api/users/current`
  );
  return user;
};

export const addToWishlist = async (productId, image) => {
  try {
    await api.put(
      `${process.env.REACT_APP_API_BASE}/api/users/current/wishlist`,
      {
        item: {
          productId,
          url: image,
        },
      }
    );
  } catch {
    alert("item is already on your wishlist!");
  }
};

export const likeProduct = async (productId, image) => {
  console.log("liking product");
  try {
    await api.put(`${process.env.REACT_APP_API_BASE}/api/users/current/liked`, {
      item: {
        productId,
        url: image,
      },
    });
  } catch {
    return undefined;
  }
  const response = await api.put(
    `${process.env.REACT_APP_API_BASE}/api/product/${productId}`,
    {
      imageUrl: image,
    }
  );
  console.log("like product successful");
  return response;
};
