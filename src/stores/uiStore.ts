import { create } from "zustand";

interface IUIStore {
  isLoading: boolean;
  error: string | null;
  setLoading: (state: boolean) => void;
  setError: (err: string | null) => void;
}

export const useUIStore = create<IUIStore>((set) => ({
  isLoading: false,
  error: null,
  setLoading: (state) => set({ isLoading: state }),
  setError: (err) => set({ error: err }),
}));
