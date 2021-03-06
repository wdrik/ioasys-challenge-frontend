import Image from 'next/image';
import { FormEvent, useContext, useState } from 'react';
import { AuthContext } from '../contexts/AuthContext';

import { CompanyTitle, Container, Form, FormGroup, Main, PopUpError } from '../styles/styles';

export default function Home() {
  const [email, setEmail] = useState<string>('desafio@ioasys.com.br');
  const [password, setPassword] = useState<string>('12341234');
  const [hasError, setHasError] = useState<boolean>(false);

  const { signIn } = useContext(AuthContext);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    setHasError(false);

    const data = {
      email,
      password,
    };

    try {
      await signIn(data);
    } catch (err) {
      setHasError(true);
    }
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

          {hasError && <PopUpError>E-mail e/ou senha incorretos.</PopUpError>}
        </Form>
      </Container>
    </Main>
  );
}
