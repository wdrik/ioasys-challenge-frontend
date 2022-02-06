import Image from 'next/image';
import { useEffect, useState } from 'react';

import BookCard from '../../components/BookCard';
import { api } from '../../services/api';
import { BookList, CompanyTitle, Container } from './styles';

export type IBookList = {
  id: string;
  title: string;
  publisher: string;
  imageUrl: string;
  published: number;
  pageCount: number;
  authors: string[];
};

export default function Dashboard() {
  const [bookList, setBookList] = useState<IBookList[]>();
  // const [requestParams, setRequestParams] = useState()

  useEffect(() => {
    api
      .get('/books?page=1&amount=25')
      .then((response) => {
        setBookList(response.data.data);
      })
      .catch((error) => {
        console.error(error);
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
            return <BookCard key={book.id} book={book} />;
          })}
      </BookList>
    </Container>
  );
}
