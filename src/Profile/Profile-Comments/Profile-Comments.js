import ProfileComment from "./Profile-Comment";

const ProfileComments = ({comments = []}) => {
    return(
        <ul className="list-group">
            <li className="fw-bold">
                COMMENTS:
            </li>
            {
                comments.map(comment =>
                    <ProfileComment comment={comment.comment} productId={comment.productId}/> )
            }
        </ul>
    );
}
export default ProfileComments;