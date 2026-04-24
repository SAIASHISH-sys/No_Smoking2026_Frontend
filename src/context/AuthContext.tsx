import { createContext, useContext, useState, type ReactNode } from 'react';
import { apolloClient } from '../apolloClient';
import { LOGIN } from '../graphql/mutations';
import { storeAuthData, clearAuthData } from '../utils/authUtils';

interface User {
  id: number | string;
  email: string;
  name: string;
  mobileNo: string;
  age: number;
  role: string;
  campaignId?: string;
}

interface SignupPayload {
  token: string;
  user: User;
  role: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<User>;
  signup: (payload: SignupPayload) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const loadUserFromStorage = (): User | null => {
  try {
    const stored = localStorage.getItem('auth_user');
    return stored ? JSON.parse(stored) : null;
  } catch {
    return null;
  }
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(loadUserFromStorage);

  const signup = async ({ token, user: userData, role }: SignupPayload) => {
    storeAuthData(token, role, userData.email, userData.id as number, userData.name);
    localStorage.setItem('auth_user', JSON.stringify(userData));
    setUser(userData);
  };

  const login = async (email: string, password: string): Promise<User> => {
    const { data } = await apolloClient.mutate<{ login: User }>({
      mutation: LOGIN,
      variables: { data: { email, password } },
    });

    if (!data?.login) throw new Error('Login failed');

    const userData: User = data.login;
    // Token lives in httpOnly cookie set by backend; store user info for UI
    storeAuthData('', userData.role, userData.email, userData.id as number, userData.name);
    localStorage.setItem('auth_user', JSON.stringify(userData));
    setUser(userData);
    return userData;
  };

  const logout = () => {
    clearAuthData();
    localStorage.removeItem('auth_user');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated: !!user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
};
