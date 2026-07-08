// AuthContext.jsx

import { createContext, useContext, useState } from "react";
import UserModel from "../model/UserModel";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(new UserModel());
    const [isLoggedIn, setIsLoggedIn] = useState(false);

  //const [token, setToken] = useState("");
  //const [role, setRole] = useState("");
    const userUpdate = (data) => {
    setUser((prev) => prev.update(data));
  };

  const logout = () => {
    setUser(new UserModel());
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        // token,
        // setToken,
        // role,
        // setRole,
        
        isLoggedIn,
        setIsLoggedIn,
        userUpdate,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};