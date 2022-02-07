import Image from 'next/image';
import { useContext, useEffect, useState } from 'react';
import { Rings } from 'react-loader-spinner';

import BookCard from '../components/BookCard';
import { AuthContext, signOut } from '../contexts/AuthContext';
import { api } from '../services/api';
import theme from '../styles/theme';
import {
  BookList,
  CompanyTitle,
  Container,
  IconButton,
  LoadingWrapper,
  Pagination,
  UserInfo,
} from '../styles/dashboard';

export type IBookList = {
  id: string;
  title: string;
  publisher: string;
  imageUrl: string | null;
  published: number;
  pageCount: number;
  authors: string[];
  description: string;
  language?: string;
  isbn10?: string;
  isbn13?: string;
};

type IPaginationData = {
  page: number;
  totalPages: number;
};

export default function Dashboard() {
  const [bookList, setBookList] = useState<IBookList[]>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [paginationData, setPaginationData] = useState<IPaginationData>({} as IPaginationData);
  const [page, setPage] = useState<number>(1);

  const { user } = useContext(AuthContext);

  useEffect(() => {
    setIsLoading(true);

    api
      .get(`/books?page=${page}&amount=12`)
      .then((response) => {
        setBookList(response.data.data);
        setPaginationData({
          page: response.data.page,
          totalPages: Math.round(response.data.totalPages),
        });

        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [page]);

  function handleSignOut() {
    signOut();
  }

  return (
    <Container>
      <CompanyTitle>
        <div>
          <Image src="/images/logo-black.svg" alt="Ioasys" width={105} height={36} />

          <span>Books</span>
        </div>

        <div>
          <UserInfo>
            Bem vindo, <strong>{user?.name}!</strong>
          </UserInfo>

          <IconButton onClick={() => handleSignOut()}>
            <Image src="/images/sign-out.svg" alt="Ioasys" width={16} height={16} />
          </IconButton>
        </div>
      </CompanyTitle>

      {isLoading ? (
        <LoadingWrapper>
          <Rings color={theme.colors.primary} height={100} width={100} />
        </LoadingWrapper>
      ) : (
        <>
          <BookList>
            {bookList &&
              bookList.map((book) => {
                return <BookCard key={book.id} book={book} />;
              })}
          </BookList>

          <Pagination>
            <IconButton className="chevron-left" disabled={page === 1} onClick={() => setPage((state) => state - 1)}>
              <Image src="/images/chevron-left.svg" alt="Ioasys" width={6} height={10} />
            </IconButton>
            Página {paginationData?.page} de {paginationData?.totalPages}
            <IconButton
              className="chevron-right"
              disabled={page === paginationData?.totalPages}
              onClick={() => setPage((state) => state + 1)}
            >
              <Image src="/images/chevron-right.svg" alt="Ioasys" width={6} height={10} />
            </IconButton>
          </Pagination>
        </>
      )}
    </Container>
  );
}
