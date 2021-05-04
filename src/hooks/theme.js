import { createContext, useState, useContext, useEffect } from 'react';
import { useColorScheme } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { darkColors, lightColors } from '../styles/colors';

const ThemeContext = createContext({});

const ThemeProvider = ({ children }) => {
  const colorScheme = useColorScheme();
  const [isDarkTheme, setDarkTheme] = useState(true);
  const [colors, setColors] = useState(lightColors);

  useEffect(() => {
    async function getDefaultTheme() {
      const darkTheme = await AsyncStorage.getItem('@Shishapedia:darkTheme');
      if (darkTheme !== null) {
        setDarkTheme(darkTheme === 'true');
      } else {
        setDarkTheme(colorScheme === 'dark');
      }
    }

    getDefaultTheme();
  }, []);

  useEffect(() => {
    if (isDarkTheme) {
      setColors(darkColors);
    } else {
      setColors(lightColors);
    }
  }, [isDarkTheme]);

  return (
    <ThemeContext.Provider
      value={{
        isDarkTheme,
        setDarkTheme,
        colors,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('useThemes must be used within an ThemeProvider');
  }

  return context;
}

export { ThemeProvider, useTheme };
