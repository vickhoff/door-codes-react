import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // REVIEW: No error handling — if the logout fetch fails (network error, server
  // down), the error is unhandled and will become an unhandled promise rejection.
  // Wrap in try/catch or add a .catch().
  async function logout() {
    await fetch("/api/auth/logout", {
      method: "POST",
      credentials: "include",
    });
    setUser(null);
  }

  // REVIEW: Inconsistent indentation — `credentials: "include"` is on the same
  // line as the opening brace, and the closing brace/paren is jammed together.
  // Format this consistently with the rest of the codebase.
  // REVIEW: No error handling — if fetch throws (e.g. network failure), this
  // function will crash silently. The non-ok path is handled, but a network
  // error (fetch rejection) is not caught.
  async function fetchUser() {
    const response = await fetch("/api/user/me", {
      credentials: "include",
    });
    if (response.ok) {
      const data = await response.json();
      setUser(data);
    }
    setLoading(false);
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
