import axios from "axios";
const URL = import.meta.env.VITE_POST_API_URL

export const fetchPosts = async (limit = 10, page = 1) => {
  const response = await axios.get(`${URL}/posts`, {
    params:{
      _limit: limit,
      _page: page
    }
  })
  return response
}