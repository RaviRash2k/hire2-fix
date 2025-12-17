import { create } from "zustand";

export const useChatStore = create((set) => ({
  isOpen: false,
  activeUser: null,

  openChat: (user) =>
    set({ isOpen: true, activeUser: user }),

  closeChat: () =>
    set({ isOpen: false, activeUser: null }),
}));