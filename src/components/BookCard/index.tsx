import Image from 'next/image';

import { IBookList } from '../../pages/dashboard';
import { CardContent, Container } from './styles';

type IBookCardProps = {
  book: IBookList;
};

export default function BookCard({ book }: IBookCardProps) {
  return (
    <Container>
      <Image
        src={book.imageUrl ? book.imageUrl : '/images/default-book.jpeg'}
        alt={`Capa do livro: ${book.title}`}
        width={81}
        height={122}
        objectFit="contain"
      />

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
  );
}
