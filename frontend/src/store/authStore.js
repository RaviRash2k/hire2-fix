import { create } from "zustand";

export const useAuthStore = create((set) => ({

  token: localStorage.getItem("token") || null,
  user: JSON.parse(localStorage.getItem("user")) || null,
  isAuthenticated: !!localStorage.getItem("token"),

  login: (token, user) => {
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(user));

    set({
      token,
      user,
      isAuthenticated: true,
    });
  },

  logout: () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    set({
      token: null,
      user: null,
      isAuthenticated: false,
    });
  },

  checkToken: () => {
    const token = localStorage.getItem("token");
    if (!token) return;

    const payload = JSON.parse(atob(token.split(".")[1]));
    const isExpired = payload.exp * 1000 < Date.now();

    if (isExpired) {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      set({ token: null, user: null });
    }
  },

  updateAvatar: (profileImage) =>
    set((state) => {
      const updatedUser = { ...state.user, profileImage };
      localStorage.setItem("user", JSON.stringify(updatedUser));
      return { user: updatedUser };
  }),

}));
