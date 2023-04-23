import axios from "axios";

const api = axios.create({
  withCredentials: true,
});

export const getCommentForItem = async (itemId) => {
  const comments = await api.get(
    `${process.env.REACT_APP_API_BASE}/api/item/${itemId}/comments`
  );
  return comments;
};

export const createCommentForItem = async (itemId, comment, rating) => {
  const createdItem = await api.post(
    `${process.env.REACT_APP_API_BASE}/api/item/${itemId}/comments`,
    { comment, rating }
  );
  return createdItem;
};

export const likeComment = async (commentId, likeStatus) => {};
