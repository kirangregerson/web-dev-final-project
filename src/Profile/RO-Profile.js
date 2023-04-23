import NavigationSidebar from "../Navigation-Sidebar/Navigation-Sidebar";
import axios from "axios";
import { useNavigate } from "react-router";
import { render } from "react-dom";
import { useEffect, useState } from "react";
import {getProfile, getRoProfile} from "../Services/ProfileService";
import ProfileComments from "./Profile-Comments/Profile-Comments";
import ProfileLikeds from "./Profile-Liked/Profile-Likeds";
import ProfileWishlist from "./Profile-Wishlist/Profile-Wishlist";

const ReadOnlyProfile = ({profileId}) => {
    const [profile, setProfile] = useState(undefined);

    useEffect(() => {
        getRoProfile(profileId).then(({ data }) => {
            console.log(data);
            setProfile(data);
        });
    }, []);

    if (!profile) {
        return <div>Loading...</div>;
    }

    const username = profile.username;

    return (
        <div className="container">
            <div className="row">
                <NavigationSidebar active={"profile"} />
                <div className="col-8 justify-content-center">
                    <h1>{username}'s Profile</h1>
                    <img width={100} height={100} className="rounded-circle" src={profile.image ? profile.image : "dummyprofile.png"}></img>
                    <ProfileComments commentIds={profile.comments} />
                    <ProfileLikeds likeds={profile.liked} />
                    <ProfileWishlist wishlist={profile.wishlist} />
                </div>
            </div>
        </div>
    );
};
export default ReadOnlyProfile;
