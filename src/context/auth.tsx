import type { User } from "@/@types/user";
import { createContext, useState, type ReactNode } from "react";

import Cookies from "js-cookie";

interface AuthContextType {
  user: User | null;
  setUserAuth: (data: User) => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const userCookies = Cookies.get("user");
  const defaultUser = userCookies ? JSON.parse(userCookies) : null;

  const [user, setUser] = useState<User | null>(defaultUser);

  const setUserAuth = (data: User) => {
    Cookies.set("user", JSON.stringify(data));

    setUser(data);
  };

  return (
    <AuthContext.Provider value={{ user, setUserAuth }}>
      {children}
    </AuthContext.Provider>
  );
};
