import axios from "axios";

export const getProfile = async (username, fullProfile) => {
    return await axios.get(
        `${process.env.REACT_APP_API_BASE}/api/profile`,
        {params: {username: username, isFullProfile: fullProfile}}
    );
};