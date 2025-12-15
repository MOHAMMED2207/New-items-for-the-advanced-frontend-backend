import { create } from "zustand";

type User = {
  id: string;
  name: string;
  email: string;
};

type AuthStore = {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;

  login: (user: User, token: string) => void;
  logout: () => void;
};

export const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  token: null,
  isAuthenticated: false,

  login: (user, token) =>
    set({
      user,
      token,
      isAuthenticated: true,
    }),

  logout: () =>
    set({
      user: null,
      token: null,
      isAuthenticated: false,
    }),
}));





"use client";

import { useAuthStore } from "@/store/useAuthStore";

export default function Navbar() {
  const user = useAuthStore((state) => state.user);
  const login = useAuthStore((state) => state.login);
  const logout = useAuthStore((state) => state.logout);

  return (
    <nav>
      {user ? (
        <>
          <span>Hello {user.name}</span>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <button
          onClick={() =>
            login({
              id: "1",
              name: "Mohamed",
              email: "m@email.com",
            })
          }
        >
          Login
        </button>
      )}
    </nav>
  );
}



