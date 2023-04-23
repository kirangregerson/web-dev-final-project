import ProfileLiked from "./Profile-Liked";

const ProfileLikeds = ({likeds = []}) => {
    return(
        <ul className="list-group">
            <li className="fw-bold">
                LIKED:
            </li>
            {
                likeds.map(liked =>
                    <ProfileLiked productId={liked}/> )
            }
        </ul>
    );
}
export default ProfileLikeds;