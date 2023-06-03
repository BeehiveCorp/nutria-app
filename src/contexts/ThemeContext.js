import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useEffect, useState } from 'react';

import { THEME } from '../utils/constants';
import { COLORS_SCHEME } from '../theme';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [themeCode, setThemeCode] = useState(undefined);

  const toggleTheme = async () => {
    const newThemeCode = themeCode === THEME.DARK ? THEME.LIGHT : THEME.DARK;

    setThemeCode(newThemeCode);
    await AsyncStorage.setItem('@theme', JSON.stringify(newThemeCode));
  };

  const getStoredThemeCode = async () => {
    const storedThemeCode = await AsyncStorage.getItem('@theme');

    if (storedThemeCode) {
      setThemeCode(JSON.parse(storedThemeCode));
      return;
    }

    setThemeCode(THEME.LIGHT);
  };

  useEffect(() => {
    getStoredThemeCode();
  }, []);

  if (themeCode === undefined) return null;

  const theme = COLORS_SCHEME[themeCode];

  return (
    <ThemeContext.Provider value={{ theme, themeCode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
