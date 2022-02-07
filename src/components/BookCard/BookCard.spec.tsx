import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import BookCard from '.';
import { IBookList } from '../../pages/dashboard';
import theme from '../../styles/theme';

const bookMock: IBookList = {
  id: '34769br23786r9',
  title: 'Book Title',
  publisher: 'Publisher Name',
  imageUrl: 'https://d2drtqy2ezsot0.cloudfront.net/Book-6.jpg',
  published: 2022,
  pageCount: 1000,
  authors: ['Author 01', 'Author 02'],
  description: 'Lorem Ipsum ...',
};

describe('BookCard Component', () => {
  it('renders correctly title', () => {
    render(
      <ThemeProvider theme={theme}>
        <BookCard book={bookMock} />
      </ThemeProvider>
    );

    expect(screen.getByText(bookMock.title)).toBeInTheDocument();
  });

  it('renders correctly publisher', () => {
    render(
      <ThemeProvider theme={theme}>
        <BookCard book={bookMock} />
      </ThemeProvider>
    );

    expect(screen.getByText(`Editora ${bookMock.publisher}`)).toBeInTheDocument();
  });

  it('renders correctly published', () => {
    render(
      <ThemeProvider theme={theme}>
        <BookCard book={bookMock} />
      </ThemeProvider>
    );

    expect(screen.getByText(`Publicado em ${bookMock.published}`)).toBeInTheDocument();
  });

  it('renders correctly page count', () => {
    render(
      <ThemeProvider theme={theme}>
        <BookCard book={bookMock} />
      </ThemeProvider>
    );

    expect(screen.getByText(`${bookMock.pageCount} páginas`)).toBeInTheDocument();
  });

  it('renders correctly author', () => {
    render(
      <ThemeProvider theme={theme}>
        <BookCard book={bookMock} />
      </ThemeProvider>
    );

    expect(screen.getByText(bookMock.authors[0])).toBeInTheDocument();
  });

  it('renders correctly image alt text', () => {
    render(
      <ThemeProvider theme={theme}>
        <BookCard book={bookMock} />
      </ThemeProvider>
    );

    expect(screen.getByAltText(`Capa do livro: ${bookMock.title}`)).toBeInTheDocument();
  });

  it('renders correctly modal if click on card', () => {
    render(
      <ThemeProvider theme={theme}>
        <BookCard book={bookMock} />
      </ThemeProvider>
    );

    const bookCard = screen.getByTestId('bookCard');

    fireEvent.click(bookCard);

    expect(screen.getByTestId('bookCard')).toBeInTheDocument();
  });
});
