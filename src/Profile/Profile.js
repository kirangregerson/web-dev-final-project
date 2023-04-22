import NavigationSidebar from "../Navigation-Sidebar/Navigation-Sidebar";

const Profile = () => {
    return (
        <div className="container">
            <div className="row">
                <NavigationSidebar active={"home"}/>
                <div className="col-8">
                    <h1>Welcome top your profile!</h1>
                </div>
            </div>
        </div>
    );
};
export default Profile;