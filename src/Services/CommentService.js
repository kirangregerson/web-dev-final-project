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

export const getAllComments = async () => {
  const comments = await api.get(
    `${process.env.REACT_APP_API_BASE}/api/comments`
  );
  return comments;
};

export const deleteComment = async (commentId) => {
  const deletedComment = await api.delete(
    `${process.env.REACT_APP_API_BASE}/api/comments/${commentId}`
  );
  return deletedComment;
};

export const getUserComments = async () => {
  const comments = await api.get(
    `${process.env.REACT_APP_API_BASE}/api/comments/current`
  );
  return comments;
};
