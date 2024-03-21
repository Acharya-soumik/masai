// api.ts
import axios from "axios";

const baseUrl = `http://localhost:8080`;

export const getPosts = async () => {
  return await axios.get(`${baseUrl}/posts`);
};

export const addPost = async (post: object) => {
  return await axios.post(`${baseUrl}/posts`, post);
};

export const updatePostLikes = async (id: number, data: object) => {
  return await axios.patch(`${baseUrl}/posts/${id}`, data);
};

export const deletePost = async (id: number) => {
  return await axios.delete(`${baseUrl}/posts/${id}`);
};
