import { createContext, useReducer, useState } from 'react';
import { favoritesReducer } from '../reducer/favoritesReducer';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');
  const [favorites, dispatchFavorites] = useReducer(favoritesReducer, []);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <AppContext.Provider value={{ theme, toggleTheme, favorites, dispatchFavorites }}>
      {children}
    </AppContext.Provider>
  );
};
