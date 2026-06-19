import { create } from "zustand";
import { createPost, getAllPosts } from "../api/postApi";
// import useUserStore from "./userStore";

const usePostStore = create((set, get) => ({
  posts: [],
  currentPost: null,
  ActionCreatePost: async (body) => {
    // const resp = await createPost(body, useUserStore.getState().token); ไม่ต้องมีแล้วเพราะไปใช้ interceptor แล้ว
    const resp = await createPost(body);
    console.log(resp.data);
    // set({posts : resp.data.result})
    get().ActionGetAllPosts();
    return resp;
  },
  ActionGetAllPosts: async () => {
    // const resp = await getAllPosts(useUserStore.getState().token);
    const resp = await getAllPosts();
    set({ posts: resp.data.posts });
    return resp;
  },
}));

export default usePostStore;
