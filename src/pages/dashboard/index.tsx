import { useContext, useEffect } from 'react';

import { AuthContext, signOut } from '../../contexts/AuthContext';
import { api } from '../../services/api';
import { Container } from './styles';

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
    <Container>
      <h1>Dashboard : {user?.email}</h1>
    </Container>
  );
}
