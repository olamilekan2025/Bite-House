import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem("authUser");
    return saved ? JSON.parse(saved) : null;
  });

  const [users, setUsers] = useState(() => {
    const saved = localStorage.getItem("registeredUsers");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    if (user) {
      localStorage.setItem("authUser", JSON.stringify(user));
    } else {
      localStorage.removeItem("authUser");
    }
  }, [user]);

  useEffect(() => {
    localStorage.setItem("registeredUsers", JSON.stringify(users));
  }, [users]);

  const signup = (newUser) => {
    const parts = newUser.name.trim().split(" ");
    const firstName = parts[0];
    const lastName = parts[1] || "";

    const userObject = {
      id: Date.now(),
      firstName,
      lastName,
      email: newUser.email,
      password: newUser.password,
      createdAt: new Date().toISOString(),
    };

    setUsers((prev) => [...prev, userObject]);
  };

  const login = (email, password) => {
    const found = users.find(
      (u) => u.email === email && u.password === password
    );

    if (!found) return false;

    setUser(found);
    return true;
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, users, signup, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
