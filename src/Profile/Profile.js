import NavigationSidebar from "../Navigation-Sidebar/Navigation-Sidebar";

const Profile = () => {
    const username = localStorage.getItem("username");

    return (
        <div className="container">
            <div className="row">
                <NavigationSidebar active={"profile"}/>
                <div className="col-8 justify-content-center">
                    <h1>{username}'s Profile</h1>
                </div>
            </div>
        </div>
    );
};
export default Profile;