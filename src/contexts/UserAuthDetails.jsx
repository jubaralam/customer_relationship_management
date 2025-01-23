/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const UserAuthDetailsContext = createContext();
const UserAuthDetails = ({ children }) => {
  const [userAuthDetails, setUserAuthDetails] = useState("user details");
  const [token, setToken] = useState(null);
  const [isLoggedIn,setIsLoggedIn] = useState(false)

  const login = (data, token) => {
    setUserAuthDetails(data);
    setToken(token);
    setIsLoggedIn(true)
  };
  const logout = () => {
    setUserAuthDetails(null);
    setIsLoggedIn(false)
  };
  return (
    <UserAuthDetailsContext.Provider
      value={{ userAuthDetails, login, logout, token,isLoggedIn }}
    >
      {children}
    </UserAuthDetailsContext.Provider>
  );
};

export default UserAuthDetails;
// export const UserDetails = useContext(UserAuthDetailsContext)
