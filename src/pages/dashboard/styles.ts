import styled from 'styled-components';

export const Container = styled.main`
  width: 100%;
  height: 100%;
  max-width: 1024px;
  margin: 0 auto;
  padding: 16px;

  background-color: #e5e5e5;
`;

export const CompanyTitle = styled.div`
  color: ${({ theme }) => theme.colors.dark};
  font-weight: 300;
  font-size: 28px;

  display: flex;
  align-items: center;
  margin: 16px 0 32px;

  span {
    display: block;
    margin-left: 16px;
  }
`;

export const BookList = styled.div`
  > div {
    &:not(:last-child) {
      margin-bottom: 16px;
    }
  }
`;
