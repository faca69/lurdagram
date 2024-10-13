import { create } from "zustand";

interface PostState {
  isHidden: boolean;
  comment: string;
  toggleHidden: () => void;
  setComment: (newComment: string) => void;
}

const usePostStore = create<PostState>((set) => ({
  isHidden: true,
  comment: "",
  toggleHidden: () => set((state) => ({ isHidden: !state.isHidden })),
  setComment: (newComment) => set({ comment: newComment }),
}));

export default usePostStore;
