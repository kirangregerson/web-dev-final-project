import axios from "axios";

const api = axios.create({
  withCredentials: true,
});

export const getProfile = async (username, fullProfile) => {
  return await api.get(`${process.env.REACT_APP_API_BASE}/api/profile`, {
    params: { username: username, isFullProfile: fullProfile },
  });
};

export const getRoProfile = async (profileId) => {
  console.log("profile id is: " + profileId);
  return await api.get(`${process.env.REACT_APP_API_BASE}/api/roprofile`, {
    params: { _id: profileId, isFullProfile: false },
  });
};

export async function updateUser(username, update) {
  const response = await api.put(
    `${process.env.REACT_APP_API_BASE}/api/update`,
    { username: username, update: update }
  );
  return response;
}
