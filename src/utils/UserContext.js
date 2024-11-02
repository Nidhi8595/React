import React, { createContext, useState } from 'react';

const UserContext = createContext({
  loggedInUser: 'Default User',
  setLoggedInUser: () => {},
});

export const UserProvider = ({ children }) => {
  const [loggedInUser, setLoggedInUser] = useState('Default User');

  return (
    <UserContext.Provider value={{ loggedInUser, setLoggedInUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
