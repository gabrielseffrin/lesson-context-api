import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Home from '../src/pages/Home';
import { ThemeProvider } from '../src/contexts/ThemeContext';
import { AppContextProvider } from '../src/contexts/AppContextProvider';

const Wrapper = ({ children }) => (
  <ThemeProvider>
    <AppContextProvider>
      {children}
    </AppContextProvider>
  </ThemeProvider>
);

describe('Home', () => {
  it('Checa se a tela contém os textos', () => {
    const { getByText, getByPlaceholderText } = render(<Home />, { wrapper: Wrapper });

    expect(getByText('Home - Music Player')).toBeTruthy();
    expect(getByText('Trocar Tema')).toBeTruthy();
    expect(getByPlaceholderText('Username')).toBeTruthy();
    expect(getByPlaceholderText('Password')).toBeTruthy();
  });

  it('checa se "Trocar Tema" foi clicado', () => {
    const { getByText } = render(<Home />, { wrapper: Wrapper });

    const button = getByText('Trocar Tema');
    fireEvent.press(button);

    expect(button).toBeTruthy();
  });
});
