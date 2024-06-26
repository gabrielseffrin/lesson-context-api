import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Home from '../src/pages/Home';
import { ThemeProvider } from '../src/contexts/ThemeContext';
import { AppContextProvider } from '../src/contexts/AppContextProvider';
import FormInput from '../src/components/FormInput';

const Wrapper = ({ }) => (
  
  <ThemeProvider>
    <AppContextProvider>
    <FormInput
          label="Username"
          value="newUser"
          placeholder="Username"

      />

      <FormInput
          label="Password"
          value="newPassword"
          placeholder="Password"
          secureTextEntry

      />
    </AppContextProvider>
  </ThemeProvider>
);

describe('Home', () => {
  it('checa se os nomes foram alterados, password e username', () => {
    const { getByPlaceholderText } = render(<FormInput />, { wrapper: Wrapper });

    const usernameInput = getByPlaceholderText('Username');
    const passwordInput = getByPlaceholderText('Password');

    fireEvent.changeText(usernameInput, 'newUser');
    fireEvent.changeText(passwordInput, 'newPassword');

    expect(usernameInput.props.value).toBe('newUser');
    expect(passwordInput.props.value).toBe('newPassword');
  });
});
