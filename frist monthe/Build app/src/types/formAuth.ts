
export type FormData = {
  fullname: string;
  username: string;
  Phone: string;
  email: string;
  Password: string;
  confirmPassword: string;
};
export type AuthUser = {
  id: string;
  name: string;
  username: string;
  email: string;
};

export type User = {
  id?: string;
  fullname?: string;
  username?: string;
  email?: string;
  role?: string;
};

export type AuthState = {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  setUser: (user: User, token: string) => void;
};