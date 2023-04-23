import { deleteComment } from "../Services/CommentService";
import "./Comment.css";
import { useState } from "react";

const Comment = ({ comment, setCommentsRendered }) => {
  const [likes, setLikes] = useState(comment.likes);
  const role = localStorage.getItem("role");
  function onLike() {
    //likeComment().then(({ data }) => {});
  }
  function onReply() {
    console.log(`replying to comment ${comment._id}`);
  }

  async function removeComment() {
    await deleteComment(comment["_id"]);
    setCommentsRendered(false);
  }

  return (
    <div key={comment._id} className="list-group-item col-12">
      <div className="row">
        <div className="col-2">
          <span>
            <div className="d-flex justify-content-center">
              <img
                src={comment.profile_picture || "/dummyprofile.png"}
                className="profile-image"
                title="profile picture"
              ></img>
            </div>
            <div className="d-flex justify-content-center">
              <a
                href={`/profile/${comment.commenterId}`}
                className="text-decoration-none"
              >
                {comment.username}
              </a>
            </div>
          </span>
        </div>
        <div className="col-10">
          <div className="comment-text position-relative">
            <div
              style={{
                textOverflow: "ellipsis",
              }}
            >
              {comment.comment}
            </div>
          </div>
          {comment.rating && <div className="">Rating: {comment.rating}/5</div>}

          <div className="d-flex justify-content-around">
            {/*role === "buyer" && (
              <>
                <div>
                  Likes:
                  {comment.likes}
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={onLike}
                  >
                    Like
                  </button>
                </div>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={onReply}
                >
                  Reply
                </button>
              </>
            )*/}
            {role === "moderator" && (
              <>
                <div>
                  <button className="btn btn-primary" onClick={removeComment}>
                    Delete comment
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comment;
