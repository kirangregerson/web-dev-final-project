import NavigationSidebar from "../Navigation-Sidebar/Navigation-Sidebar";
import axios from "axios";
import { useNavigate } from "react-router";
import { render } from "react-dom";
import { useEffect, useState } from "react";
import { getProfile } from "../Services/ProfileService";
import ProfileComments from "./Profile-Comments/Profile-Comments";
import ProfileLikeds from "./Profile-Liked/Profile-Likeds";
import ProfileWishlist from "./Profile-Wishlist/Profile-Wishlist";

const Profile = () => {
  const username = localStorage.getItem("username");

  const [profile, setProfile] = useState(undefined);
  const [hasImage, setHasImage] = useState(false);

  //If user is not signed in, do not render any components past this point
  const navigate = useNavigate();
  if (!JSON.parse(localStorage.getItem("loggedIn"))) {
    navigate("/login");
  }

  useEffect(() => {
    getProfile(username, true).then(({ data }) => {
      console.log("useEffect data return:");
      console.log(data);
      setProfile(data);
    });
  }, []);
  if (!profile) {
    return <div>Loading...</div>;
  }
  console.log(profile);
  return (
    <div className="container">
      <div className="row">
        <NavigationSidebar active={"profile"} />
        <div className="col-8 justify-content-center">
          <h1>{username}'s Profile</h1>
          <img src={profile.image ? profile.image : "dummyprofile.png"}></img>
          <ProfileComments commentIds={profile.comments} />
          <ProfileLikeds likeds={profile.liked} />
          <ProfileWishlist wishlist={profile.wishlist} />
        </div>
      </div>
    </div>
  );
};
export default Profile;
