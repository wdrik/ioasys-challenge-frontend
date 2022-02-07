import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Rings } from 'react-loader-spinner';

import { IBookList } from '../../pages/dashboard';
import { api } from '../../services/api';
import theme from '../../styles/theme';
import { Close, Container, Content } from './styles';

interface IModalProps {
  id: string;
  onClose: () => void;
}

export default function BookModal({ id, onClose }: IModalProps) {
  const [book, setBook] = useState<IBookList>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    api
      .get(`/books/${id}`)
      .then((response) => {
        setBook(response.data);
        setIsLoading(false);

        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  return (
    <Container data-testid="bookModal">
      {isLoading ? (
        <Rings color={theme.colors.white} height={100} width={100} />
      ) : (
        <>
          <Close onClick={onClose}>
            <Image src="/images/close.svg" alt="Ioasys" width={10} height={10} />
          </Close>

          <Content>
            <figure>
              <Image
                src={book?.imageUrl ? book.imageUrl : '/images/default-book.jpeg'}
                alt={`Capa do livro: ${book?.title}`}
                width={240}
                height={351}
              />
            </figure>

            <div>
              <h1>{book?.title}</h1>
              <h3>{book?.authors.toString().replaceAll(',', ', ')}</h3>

              <span>Informações</span>
              <ul>
                <li>
                  <strong>Páginas</strong>
                  <span>{book?.pageCount} páginas</span>
                </li>
                <li>
                  <strong>Editora</strong>
                  <span>{book?.publisher}</span>
                </li>
                <li>
                  <strong>Publicação</strong>
                  <span>{book?.published}</span>
                </li>
                <li>
                  <strong>Idioma</strong>
                  <span>{book?.language}</span>
                </li>
                <li>
                  <strong>Título Original</strong>
                  <span>{book?.title}</span>
                </li>
                <li>
                  <strong>ISBN-10</strong>
                  <span>{book?.isbn10}</span>
                </li>
                <li>
                  <strong> ISBN-13</strong>
                  <span>{book?.isbn13}</span>
                </li>
              </ul>

              <span>Resenha da editora</span>
              <p>
                <Image src="/images/quotes.svg" alt="Quotes" width={18} height={15} /> &nbsp; {book?.description}
              </p>
            </div>
          </Content>
        </>
      )}
    </Container>
  );
}
