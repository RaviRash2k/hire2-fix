import { create } from "zustand"

export const useUiStore = create((set) => ({
    
  // states
  selectedCategory: "all",
  currentPage: 1,
  url: "http://localhost:3000",

  // actions
  setCategory: (category) =>
    set({
      selectedCategory: category,
      currentPage: 1,
    }),

  setPage: (page) =>
    set({ currentPage: page }),
}))
