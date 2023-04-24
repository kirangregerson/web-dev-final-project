import NavigationSidebar from "../Navigation-Sidebar/Navigation-Sidebar";
import axios from "axios";
import { useNavigate } from "react-router";
import { render } from "react-dom";
import { useEffect, useState } from "react";
import Modal from "react-modal";
import { getProfile, updateUser } from "../Services/ProfileService";
import ProfileComments from "./Profile-Comments/Profile-Comments";
import ProfileLikeds from "./Profile-Liked/Profile-Likeds";
import ProfileWishlist from "./Profile-Wishlist/Profile-Wishlist";
import ModalStyling from "./Modal-Styling";
import { loginUser } from "../Services/LoginService";
import { changeEmail } from "../Services/UsersService";

const Profile = () => {
  const username = localStorage.getItem("username");
  const emailNotSet = "Not set";

  const [profile, setProfile] = useState(undefined);
  const [image, setImage] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [showEmailInput, setShowEmailInput] = useState(false);
  const [newEmail, setNewEmail] = useState("");
  const [email, setEmail] = useState(emailNotSet);

  //If user is not signed in, do not render any components past this point
  const navigate = useNavigate();
  if (!JSON.parse(localStorage.getItem("loggedIn"))) {
    navigate("/login");
  }

  function openModal() {
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
  }

  const handleImageUpdate = async () => {
    const update = { image: image };
    const response = await updateUser(username, update);
    if (response.status === 200) {
      console.log("SUCCESS!");
    }
  };

  useEffect(() => {
    getProfile(username, true).then(({ data }) => {
      console.log("useEffect data return:");
      console.log(data);
      setProfile(data);
      setEmail(data.email);
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
          <img
            width={100}
            height={100}
            className="rounded-circle"
            src={profile.image ? profile.image : "dummyprofile.png"}
            onClick={openModal}
          ></img>
          <div>
            <span className="me-3">Email: {email}</span>
            {email !== emailNotSet && (
              <a className="btn btn-primary" href={`mailto: ${email}`}>
                Send Email
              </a>
            )}
          </div>
          {showEmailInput ? (
            <div>
              <input onChange={(e) => setNewEmail(e.target.value)}></input>
              <button
                className="btn btn-warning"
                onClick={async () => {
                  await changeEmail(newEmail);
                  setEmail(newEmail);
                  setNewEmail("");
                  setShowEmailInput(false);
                }}
              >
                Change email
              </button>
              <button
                className="btn btn-warning"
                onClick={() => setShowEmailInput(false)}
              >
                Cancel
              </button>
            </div>
          ) : (
            <button
              className="btn btn-warning"
              onClick={() => setShowEmailInput(true)}
            >
              Change email
            </button>
          )}

          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={ModalStyling}
            contentLabel="Change your profile image"
          >
            <div className="container">
              <div className="row align-content-center">
                <h2>Paste an image link to update your profile image</h2>
              </div>
              <input
                className="form-control"
                onChange={({ target }) => setImage(target.value)}
              ></input>
              <button
                className="btn btn-primary my-3"
                onClick={handleImageUpdate}
              >
                Submit
              </button>
            </div>
          </Modal>
          <ProfileComments username={username} commentIds={profile.comments} />
          <ProfileLikeds likeds={profile.liked} />
          <ProfileWishlist wishlist={profile.wishlist} />
        </div>
      </div>
    </div>
  );
};
export default Profile;
