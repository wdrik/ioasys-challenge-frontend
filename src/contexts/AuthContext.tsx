import Router from 'next/router';
import { createContext, ReactNode, useEffect, useState } from 'react';
import { setCookie, parseCookies, destroyCookie } from 'nookies';

import { api } from '../services/api';

type User = {
  birthdate: string;
  email: string;
  gender: string;
  id: string;
  name: string;
};

type SignInCredentials = {
  email: string;
  password: string;
};

type AuthContextData = {
  signIn(credentials: SignInCredentials): Promise<void>;
  user: User | undefined;
  isAuthenticated: boolean;
};

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext({} as AuthContextData);

export function signOut() {
  destroyCookie(undefined, 'ioasys.token');
  destroyCookie(undefined, 'ioasys.refresh-token');
  destroyCookie(undefined, 'ioasys.user');

  Router.push('/');
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User>();
  const isAuthenticated = !!user;

  useEffect(() => {
    const cookies = parseCookies();
    const { 'ioasys.token': token, 'ioasys.user': userInfo } = cookies;

    if (token) {
      setUser(JSON.parse(userInfo));
    }
  }, []);

  async function signIn({ email, password }: SignInCredentials) {
    const response = await api.post('/auth/sign-in', {
      email,
      password,
    });

    const { birthdate, gender, id, name } = response.data;
    const { authorization, 'refresh-token': refreshToken } = response.headers;

    setUser({ email, birthdate, gender, id, name });

    setCookie(undefined, 'ioasys.token', authorization, {
      maxAge: 60 * 60 * 24 * 30, // 30 days
      path: '/',
    });

    setCookie(undefined, 'ioasys.refresh-token', refreshToken, {
      maxAge: 60 * 60 * 24 * 30, // 30 days
      path: '/',
    });

    setCookie(undefined, 'ioasys.user', JSON.stringify({ email, birthdate, gender, id, name }), {
      maxAge: 60 * 60 * 24 * 30, // 30 days
      path: '/',
    });

    api.defaults.headers.common['Authorization'] = `Bearer ${authorization}`;

    Router.push('/dashboard');
  }

  return <AuthContext.Provider value={{ signIn, isAuthenticated, user }}>{children}</AuthContext.Provider>;
}
