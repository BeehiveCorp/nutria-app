import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useEffect, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ onGetStoredUser, children }) => {
  const [user, setUser] = useState(undefined);

  const getStoredUser = async () => {
    const storedUser = await AsyncStorage.getItem('@user');

    if (storedUser) {
      setUser(JSON.parse(storedUser));
      onGetStoredUser();
      return;
    }

    setUser(null);
    onGetStoredUser();
  };

  const logout = async () => {
    setUser(null);
    AsyncStorage.removeItem('@user');
  };

  const storeUser = async (userToStore) => {
    setUser(userToStore);
    await AsyncStorage.setItem('@user', JSON.stringify(userToStore));
  };

  useEffect(() => {
    getStoredUser();
  }, []);

  if (user === undefined) return null;

  return (
    <UserContext.Provider value={{ user, setUser, logout, storeUser }}>
      {children}
    </UserContext.Provider>
  );
};
