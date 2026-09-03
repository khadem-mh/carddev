"use client";
import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type User = {
  name: string;
  email: string;
  avatar: string;
  joinedAt: string;
};

type AuthContextType = {
  user: User | null;
  login: (email: string, name?: string) => void;
  logout: () => void;
  isLogged: boolean;
};

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("auth_user");
      if (saved) setUser(JSON.parse(saved));
    } catch {}
  }, []);

  const login = (email: string, name?: string) => {
    const u: User = {
      name: name || email.split("@")[0],
      email,
      avatar: `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(name || email)}&backgroundColor=f59e0b&textColor=ffffff`,
      joinedAt: new Date().toLocaleDateString("fa-IR"),
    };
    setUser(u);
    try { localStorage.setItem("auth_user", JSON.stringify(u)); } catch {}
  };

  const logout = () => {
    setUser(null);
    try { localStorage.removeItem("auth_user"); } catch {}
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isLogged: !!user }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be inside AuthProvider");
  return ctx;
}
