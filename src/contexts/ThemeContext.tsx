import React, { createContext, useState, useContext, ReactNode } from 'react';
import { ColorValue } from 'react-native';

// Definindo os tipos para as paletas de cores
type Theme = {
  backgroundColor: ColorValue;
  textColor: ColorValue;
  color: ColorValue;
};

type ThemeContextType = {
  theme: 'light' | 'dark';
  themeData: Theme;
  toggleTheme: () => void;
};


const lightTheme: Theme = {
  backgroundColor: '#ffffff',
  textColor: '#000000',
  color: 'red',
};

const darkTheme: Theme = {
  backgroundColor: '#000000',
  textColor: '#ffffff',
  color: '#bb86fc',
};


const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const themeData = theme === 'light' ? lightTheme : darkTheme;

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, themeData, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('Erro ao utilizar o tema');
  }
  return context;
};
