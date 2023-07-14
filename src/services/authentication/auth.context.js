import React, { useState, createContext } from 'react';

import { loginRequest, registerRequest } from './auth.service';
import { getAuth, signOut } from 'firebase/auth';

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const onLogOut = async () => {
    setUser(null);
    const auth = getAuth();
    await signOut(auth);
  };

  const onLogin = async (email, password) => {
    setIsLoading(true);
    try {
      const user = await loginRequest(email, password);
      setUser(user.user);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const onRegister = async (email, password, repeatPassword) => {
    setIsLoading(true);
    if (password !== repeatPassword) {
      setError('Error: Passwords do not match');
      return;
    }
    try {
      const user = await registerRequest(email, password);
      setUser(user.user);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthenticationContext.Provider
      value={{
        isAuthenticated: !!user,
        user,
        isLoading,
        error,
        onLogin,
        onRegister,
        onLogOut,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
