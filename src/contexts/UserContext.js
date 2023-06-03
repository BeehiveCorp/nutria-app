import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useEffect, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(undefined);

  const getStoredUser = async () => {
    const storedUser = await AsyncStorage.getItem('@user');

    if (storedUser) {
      setUser(JSON.parse(storedUser));
      return;
    }

    setUser(null);
  };

  const logout = async () => {
    setUser(null);
    await AsyncStorage.removeItem('@user');
  };

  useEffect(() => {
    getStoredUser();
  }, []);

  if (user === undefined) return null;

  return (
    <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>
  );
};
