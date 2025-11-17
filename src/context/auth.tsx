import type { User } from "@/@types/user";
import { createContext, useState, type ReactNode } from "react";

interface AuthContextType {
  user: User | null;
  setUser: React.Dispatch<User>;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};
