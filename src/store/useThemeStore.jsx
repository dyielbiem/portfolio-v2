import { create } from "zustand";

const useThemeStore = create((set) => ({
  theme: null,
  setTheme: (theme) => {
    document.documentElement.dataset.theme = theme;
    set({ theme });
  },
  toggleTheme: () =>
    set((state) => {
      const theme = state.theme === "light" ? "dark" : "light";

      document.documentElement.dataset.theme = theme;

      return { theme };
    }),
}));

export default useThemeStore;
