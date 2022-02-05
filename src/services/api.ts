import axios, { AxiosError } from 'axios';
import { setCookie, parseCookies } from 'nookies';

import { signOut } from '../contexts/AuthContext';

let cookies = parseCookies();
let isRefreshing = false;

export const api = axios.create({
  baseURL: 'https://books.ioasys.com.br/api/v1',
});

api.defaults.headers.common['Authorization'] = `Bearer ${cookies['ioasys.token']}`;

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error: AxiosError) => {
    if (error.response?.status === 401) {
      if (error.response.data?.errors.message === 'Não autorizado.') {
        cookies = parseCookies();

        const { 'ioasys.refresh-token': oldRefreshToken } = cookies;

        if (!isRefreshing && oldRefreshToken) {
          isRefreshing = true;

          api
            .post('/auth/refresh-token', {
              refreshToken: oldRefreshToken,
            })
            .then((response) => {
              const { authorization, 'refresh-token': refreshToken } = response.headers;

              setCookie(undefined, 'ioasys.token', authorization, {
                maxAge: 60 * 60 * 24 * 30, // 30 days
                path: '/',
              });

              setCookie(undefined, 'ioasys.refresh-token', refreshToken, {
                maxAge: 60 * 60 * 24 * 30, // 30 days
                path: '/',
              });

              api.defaults.headers.common['Authorization'] = `Bearer ${authorization}`;
            });
        }
      } else {
        signOut();
      }
    }

    return Promise.reject(error);
  }
);
