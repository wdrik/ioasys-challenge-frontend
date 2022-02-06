import Image from 'next/image';
import { useState } from 'react';

import { IBookList } from '../../pages/dashboard';
import Modal from '../BookModal';
import { CardContent, Container } from './styles';

type IBookCardProps = {
  book: IBookList;
};

export default function BookCard({ book }: IBookCardProps) {
  const [visible, setVisible] = useState<boolean>(false);

  return (
    <>
      {visible && <Modal id={book.id} onClose={() => setVisible(false)} />}

      <Container onClick={() => setVisible(true)}>
        <figure>
          <Image
            src={book.imageUrl ? book.imageUrl : '/images/default-book.jpeg'}
            alt={`Capa do livro: ${book.title}`}
            width={81}
            height={122}
            objectFit="cover"
          />
        </figure>

        <CardContent>
          <div>
            <h2>{book.title}</h2>
            <h3>{book.authors[0]}</h3>
          </div>

          <div>
            <span>{book.pageCount} páginas</span>
            <span>Editora {book.publisher}</span>
            <span>Publicado em {book.published}</span>
          </div>
        </CardContent>
      </Container>
    </>
  );
}
