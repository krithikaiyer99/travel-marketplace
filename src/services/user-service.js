import axios from "axios";
const API_BASE = process.env.REACT_APP_API_BASE || "http://localhost:4000/api";
const USER_API = `${API_BASE}/users`;

export const signin = async ({username, password}) => {
    let response = await axios.get(`${USER_API}/login/${username}/${password}`)
    return response.data;
};

export const register = async (user) => {
    const response = await axios.post(USER_API, user)
    return response.data;
}

export const updateUser = async (user) => {
    const response = await axios
        .put(`${USER_API}/update/${user._id}`, user);
    return response.data;
}

export const findUserById = async (id) => {
    console.log(`${USER_API}/${id.id}`)
    const response = await axios.get(`${USER_API}/${id.id}`);
    console.log(response)
  return response.data;
}
