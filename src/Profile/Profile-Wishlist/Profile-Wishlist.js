import ProfileWish from "./Profile-Wish";

const ProfileWishlist = ({ wishlist = [] }) => {
  return (
    <ul className="list-group">
      <li className="fw-bold">WISHLIST:</li>
      {wishlist.map((wish) => (
        <ProfileWish productId={wish.productId} />
      ))}
    </ul>
  );
};
export default ProfileWishlist;
