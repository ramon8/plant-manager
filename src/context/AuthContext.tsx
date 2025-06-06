import { createContext, useContext, useEffect, useState } from 'react';
import type { ReactNode } from 'react';

interface AuthContextValue {
  user: string | null;
  login: (username: string, password: string) => boolean;
  logout: () => void;
}

const AuthContext = createContext<AuthContextValue>({
  user: null,
  login: () => false,
  logout: () => {},
});

export const useAuth = () => useContext(AuthContext);

const USER_KEY = 'pm_user';
const PASS_KEY = 'pm_pass';

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<string | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem(USER_KEY);
    const storedPass = localStorage.getItem(PASS_KEY);
    if (storedUser === 'admin' && storedPass === 'admin') {
      setUser('admin');
    }
  }, []);

  const login = (username: string, password: string) => {
    if (username === 'admin' && password === 'admin') {
      localStorage.setItem(USER_KEY, username);
      localStorage.setItem(PASS_KEY, password);
      setUser(username);
      return true;
    }
    return false;
  };

  const logout = () => {
    localStorage.removeItem(USER_KEY);
    localStorage.removeItem(PASS_KEY);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
