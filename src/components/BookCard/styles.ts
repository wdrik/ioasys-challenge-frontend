import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 4px;
  padding: 16px;
  box-shadow: 0px 6px 24px rgba(84, 16, 95, 0.13);
  cursor: pointer;

  display: flex;

  figure {
    display: block;
    min-width: 81px;
  }

  @media (min-width: 769px) {
    width: calc(50% - 8px);
  }

  @media (min-width: 1024px) {
    width: calc(33.3333% - 8px);
  }

  @media (min-width: 1200px) {
    width: calc(25% - 8px);
  }
`;

export const CardContent = styled.div`
  margin-left: 16px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h2 {
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
  }

  h3 {
    font-weight: 400;
    color: ${({ theme }) => theme.colors.secondary};
    font-size: 12px;
    line-height: 20px;
  }

  span {
    display: block;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.lightDark};
    font-size: 12px;
    line-height: 20px;
  }

  @media (min-width: 1200px) {
    span {
      font-size: 10px;
    }
  }
`;
