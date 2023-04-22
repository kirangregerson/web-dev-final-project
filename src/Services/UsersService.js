import axios from "axios";

export const getUsers = async () => {
  console.log("sending");
  const users = await axios.get(`${process.env.REACT_APP_API_BASE}/api/users`);
  console.log(users);
  return users;
};
