import axios from "axios";

export const getProfile = async (username, fullProfile) => {
    return await axios.get(
        `${process.env.REACT_APP_API_BASE}/api/profile`,
        {params: {username: username, isFullProfile: fullProfile}}
    );
};

export const getRoProfile = async (profileId) => {
    return await axios.get(
        `${process.env.REACT_APP_API_BASE}/api/roprofile`,
        {params: {_id: profileId, isFullProfile: false}}
    );
}