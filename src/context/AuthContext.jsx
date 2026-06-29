import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export default function UserProvider({ children }) {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      const data = JSON.parse(savedUser);
      return data;
    }
    return {};
  });

  // add
  const addUser = (item) => {
    setUser(item);
  };
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  return (
    <AuthContext.Provider
      value={{
        user,
        addUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
