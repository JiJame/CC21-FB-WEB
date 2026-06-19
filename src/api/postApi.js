import axios from "axios";
import useUserStore from "../stores/userStore";

export const postApi = axios.create({
  baseURL: "http://localhost:8899/api/post",
});

postApi.interceptors.request.use((config) => {
  const token = useUserStore.getState().token;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// const addToken = token => ({
// 	headers: { Authorization : `Bearer ${token}`}
// })

export const createPost = (body) => postApi.post("/", body);

export const getAllPosts = () => postApi.get("/");
