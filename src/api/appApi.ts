import axios from "axios";
const URL = import.meta.env.VITE_POST_API_URL;

export const fetchPosts = async (limit = 10, page = 1) => {
  const response = await axios.get(`${URL}/posts`, {
    params: {
      _limit: limit,
      _page: page,
    },
  });
  return response;
};

export const fetchPostById = async (id: string) => {
  const response = await axios.get(`${URL}/posts/${id}`);
  return response;
};

export const fetchCommentsById = async (id: string) => {
  const response = await axios.get(`${URL}/posts/${id}/comments`);
  return response;
};
