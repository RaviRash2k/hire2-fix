import { create } from "zustand"

const useUiStore = create((set) => ({
    
  // states
  selectedCategory: "all",
  currentPage: 1,

  // actions
  setCategory: (category) =>
    set({
      selectedCategory: category,
      currentPage: 1,
    }),

  setPage: (page) =>
    set({ currentPage: page }),
}))

export default useUiStore
