import Image from 'next/image';
import { useContext, useEffect, useState } from 'react';

import BookCard from '../../components/BookCard';
import { AuthContext, signOut } from '../../contexts/AuthContext';
import { api } from '../../services/api';
import { BookList, CompanyTitle, Container } from './styles';

export type IBookList = {
  title: string;
  publisher: string;
  imageUrl: string;
  published: number;
  pageCount: number;
  authors: string[];
};

export default function Dashboard() {
  const { user } = useContext(AuthContext);
  const [bookList, setBookList] = useState<IBookList[]>();

  useEffect(() => {
    api
      .get('/books?page=1&amount=25')
      .then((response) => {
        setBookList(response.data.data);
      })
      .catch(() => {
        signOut();
      });
  }, []);

  return (
    <Container>
      <CompanyTitle>
        <Image src="/images/logo-black.svg" alt="Ioasys" width={105} height={36} />

        <span>Books</span>
      </CompanyTitle>

      <BookList>
        {bookList &&
          bookList.map((book) => {
            return <BookCard key={book.title} book={book} />;
          })}
      </BookList>
    </Container>
  );
}
