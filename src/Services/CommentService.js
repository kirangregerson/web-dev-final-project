import axios from "axios";

export const getCommentForItem = async (itemId) => {
  const comments = await axios.get(
    `${process.env.REACT_APP_API_BASE}/api/item/${itemId}/comments`
  );
  return comments;
};

export const createCommentForItem = async (itemId, comment, rating) => {
  const createdItem = await axios.post(
    `${process.env.REACT_APP_API_BASE}/api/item/${itemId}/comments`,
    { comment, rating }
  );
  console.log("test");
  console.log(createdItem);
  return createdItem;
};

export const likeComment = async (commentId, likeStatus) => {};
