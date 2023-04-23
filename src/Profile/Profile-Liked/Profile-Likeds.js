import ProfileLiked from "./Profile-Liked";

const ProfileLikeds = ({ likeds = [] }) => {
  return (
    <ul className="list-group">
      <li className="fw-bold">LIKED:</li>
      {likeds.map((liked) => {
        console.log("liked:");
        console.log(liked);
        return <ProfileLiked productId={liked.productId} />;
      })}
    </ul>
  );
};
export default ProfileLikeds;
