// __mocks__/AppContextProvider.tsx
import React from 'react';

const AppContext = React.createContext({
  useTrack: () => {
    throw new Error('useTrack must be used inside AppContextProvider!');
  },
});

export const AppContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <AppContext.Provider value={{ useTrack: () => {} }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => React.useContext(AppContext);
