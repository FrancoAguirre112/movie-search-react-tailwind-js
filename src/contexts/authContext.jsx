import { useContext, useState, createContext, useCallback, useMemo } from 'react';

const AUTH_MOVIES = 'AUTH_MOVIES';

const AuthContext = createContext(null);

export const AuthContextProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem(AUTH_MOVIES) === 'true'
  );

  const login = useCallback(() => {
    localStorage.setItem(AUTH_MOVIES, 'true');
    setIsAuthenticated(true);
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem(AUTH_MOVIES);
    setIsAuthenticated(false);
  }, []);

  const value = useMemo(() => ({
    login,
    logout,
    isAuthenticated,
  }), [login, logout, isAuthenticated]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export function useAuthContext() {
  return useContext(AuthContext);
}
