import styled from 'styled-components';

export const Container = styled.main`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  max-width: 1024px;
  margin: 0 auto;
  padding: 16px;
  background-color: #e5e5e5;

  display: flex;
  flex-direction: column;
`;

export const CompanyTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 16px 0 32px;

  > div {
    color: ${({ theme }) => theme.colors.dark};
    height: 100%;
    font-weight: 300;
    font-size: 28px;

    display: flex;
    align-items: center;
  }

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

export const LoadingWrapper = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  flex: 1;
`;

export const Pagination = styled.div`
  width: 100%;
  margin: 16px 0;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const IconButton = styled.button`
  width: 32px;
  height: 32px;
  margin: 0 16px;
  border: 1px solid ${({ theme }) => theme.colors.lightDark};
  background: transparent;
  border-radius: 50%;

  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  &:disabled {
    opacity: 0.4;
  }
`;
