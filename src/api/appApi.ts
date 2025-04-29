import axios from "axios";
const URL = import.meta.env.VITE_POST_API_URL

export const fetchPosts = async () => {
  const response = await axios.get(`${URL}/posts`)
  return response.data
}