import axios from "axios";
const API_BASE = process.env.REACT_APP_API_BASE || "http://localhost:4000/api";
const HOMEPAGE_API = `${API_BASE}/homepage`;
// this is the page where you connect to api and get the data

export const getHomepage = async () => {
  const response = await axios.get(HOMEPAGE_API);
  return response.data;
};
