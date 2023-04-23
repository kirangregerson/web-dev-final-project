import axios from "axios";

const api = axios.create({
  withCredentials: true,
});

export async function registerUser(username, password, role) {
  const registerRes = await api.post(
    `${process.env.REACT_APP_API_BASE}/api/register`,
    { username: username, password: password, role }
  );
  return registerRes;
}

export async function loginUser(username, password) {
  const loginRes = await api.post(
    `${process.env.REACT_APP_API_BASE}/api/login`,
    { username: username, password: password }
  );
  return loginRes;
}

export async function logout() {
  api.post(`${process.env.REACT_APP_API_BASE}/api/logout`);
}
