import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  async function logout() {
    try {
      await fetch("/api/auth/logout", {
        method: "POST",
        credentials: "include",
      });
      setUser(null);
    } catch {                                                                 
      console.error("Failed to logout")
      throw new Error("Failed to logout")
    }
  }

  async function fetchUser() {
    try {
      const response = await fetch("/api/user/me", {
        credentials: "include",
      });
      if (response.ok) {
        const data = await response.json();
        setUser(data);
      }
    } catch {
      console.error("Failed to load user")
      throw new Error("Failed to load user")
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading, logout, fetchUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
