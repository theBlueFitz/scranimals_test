import { createContext, useState } from "react";
import { getUser } from "../utils/dbCalls";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [currUser, setCurrUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <UserContext.Provider
      value={{ currUser, setCurrUser, isLoggedIn, setIsLoggedIn }}
    >
      {children}
    </UserContext.Provider>
  );
};
