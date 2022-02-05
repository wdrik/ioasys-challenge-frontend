import { useContext, useEffect } from 'react';
import { destroyCookie } from 'nookies';

import { AuthContext, signOut } from '../../contexts/AuthContext';
import { api } from '../../services/api';
import Router from 'next/router';

export default function Dashboard() {
  const { user } = useContext(AuthContext);

  useEffect(() => {
    api
      .get('/books?page=1&amount=25')
      .then((response) => console.log(response.data))
      .catch(() => {
        signOut();
      });
  }, []);

  return (
    <div>
      <h1>Dashboard : {user?.email}</h1>
    </div>
  );
}
