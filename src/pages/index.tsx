import { FormEvent, useContext, useState } from 'react';
import { AuthContext } from '../contexts/AuthContext';

import { Main } from '../styles/styles';

export default function Home() {
  const [email, setEmail] = useState('desafio@ioasys.com.br');
  const [password, setPassword] = useState('12341234');

  const { signIn, isAuthenticated } = useContext(AuthContext);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const data = {
      email,
      password,
    };

    await signIn(data);

    console.log(data);
  }

  return (
    <Main>
      <h1>Login</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />

        <button type="submit">Enviar</button>
      </form>
    </Main>
  );
}
