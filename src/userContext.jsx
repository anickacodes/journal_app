import  { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [username, setUsername] = useState(null);

  const loginUser = (userData) => {
    setUsername(userData.username);
  };

  const logoutUser = () => {
    setUsername(null);
  };

  return (
    <UserContext.Provider value={{ username, loginUser, logoutUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
