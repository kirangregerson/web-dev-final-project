import { deleteComment } from "../Services/CommentService";
import { getUserByUsername } from "../Services/UsersService";
import "./Comment.css";
import { useEffect, useState } from "react";

const Comment = ({ comment, setCommentsRendered }) => {
  const [likes, setLikes] = useState(comment.likes);
  const [image, setImage] = useState("/dummyprofile.png");
  const role = localStorage.getItem("role");

  useEffect(() => {
    console.log(comment);
    getUserByUsername(comment.username).then(({ data }) => {
      console.log("body");
      console.log(data);
      setImage(data.image);
    });
  }, []);

  async function removeComment() {
    await deleteComment(comment["_id"]);
    setCommentsRendered(false);
  }

  return (
    <div key={comment._id} className="list-group-item col-12">
      <div className="row">
        <div className="col-3 col-lg-2">
          <span>
            <div className="d-flex justify-content-center">
              <img
                src={image}
                className="profile-image rounded-circle"
                width={100}
                height={100}
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
        <div className="col-9 col-lg-10">
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
