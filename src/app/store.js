import { create } from 'zustand';

export const useStore = create((set) => ({
  blogs: { blogs: [], isLoading: false },
  setAllBlogs: (data) => {
    set((state) => ({
      blogs: { ...state.blogs, blogs: data.blogs, isLoading: data.isLoading },
    }));
  },
  setUser: (data) => {
    set((state) => ({ user: data }));
  },
}));
