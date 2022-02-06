import Image from 'next/image';
import { FormEvent, useContext, useState } from 'react';
import { AuthContext } from '../contexts/AuthContext';

import { CompanyTitle, Container, Form, FormGroup, Main } from '../styles/styles';

export default function Home() {
  const [email, setEmail] = useState('desafio@ioasys.com.br');
  const [password, setPassword] = useState('12341234');

  const { signIn } = useContext(AuthContext);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const data = {
      email,
      password,
    };

    await signIn(data);
  }

  return (
    <Main>
      <Container>
        <CompanyTitle>
          <Image src="/images/logo.svg" alt="Ioasys" width={105} height={36} objectFit="cover" />

          <span>Books</span>
        </CompanyTitle>

        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <label htmlFor="email">
              <span>E-mail</span>

              <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </label>
          </FormGroup>

          <FormGroup>
            <label htmlFor="password">
              <span>Senha</span>

              <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </label>

            <button type="submit">Entrar</button>
          </FormGroup>
        </Form>
      </Container>
    </Main>
  );
}
