import { create } from "zustand";
import { authApi } from "../api/authApi";
import { createJSONStorage, persist } from "zustand/middleware";

const useUserStore = create((set, get) => ({
  user: null,
  token: "",
  login: async (input) => {
    const resp = await authApi.post("/login", input);
    set({ token: resp.data.token, user: resp.data.user });
    return resp;
  },
  logout: () => set({ token: "", user: null }),
}));

export default useUserStore;
