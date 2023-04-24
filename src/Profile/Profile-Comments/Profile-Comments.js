import { useState, useEffect } from "react";
import ProfileComment from "./Profile-Comment";
import { getUserComments } from "../../Services/CommentService";

const ProfileComments = ({ username }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getUserComments(username).then(({ data }) => {
      setComments(data);
    });
  }, []);
  return (
    <ul className="list-group">
      <li className="fw-bold">COMMENTS:</li>
      {comments.map((comment) => (
        <ProfileComment
          comment={comment.comment}
          productId={comment.productId}
        />
      ))}
    </ul>
  );
};
export default ProfileComments;
