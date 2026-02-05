import { create } from "zustand";
import { persist } from "zustand/middleware";

export type AuthUser = {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
};

type AuthState = {
  user: AuthUser | null;
  token: string | null;

  isHydrated: boolean;
  setHydrated: () => void;

  loginSuccess: (payload: { user: AuthUser; token: string }) => void;
  logout: () => void;
};

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      token: null,
      isHydrated: false,

      setHydrated: () => set({ isHydrated: true }),
      loginSuccess: ({ user, token }) => set({ user, token }),
      logout: () => set({ user: null, token: null }),
    }),
    {
      name: "auth",
      partialize: (s) => ({ user: s.user, token: s.token }),
      onRehydrateStorage: () => (state) => {
        state?.setHydrated();
      },
    }
  )
);
