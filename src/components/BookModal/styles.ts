import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  padding: 48px 16px 16px 16px;

  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
`;

export const Close = styled.div`
  width: 30px;
  height: 30px;
  background: white;
  border-radius: 50%;

  position: absolute;
  top: 8px;
  right: 16px;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
`;

export const Content = styled.article`
  width: 100%;
  height: 100%;
  background-color: white;
  border-radius: 4px;
  padding: 24px;
  overflow: auto;

  h1 {
    font-weight: 500;
    font-size: 28px;
    line-height: 40px;
  }

  h3 {
    font-weight: 400;
    font-size: 12px;
    line-height: 20px;
    color: ${({ theme }) => theme.colors.secondary};
    margin-bottom: 24px;
  }

  div > span {
    text-transform: uppercase;
    font-weight: 500;
    font-size: 12px;
    line-height: 20px;
    margin-bottom: 12px;
    display: block;
  }

  ul {
    list-style: none;
    margin-bottom: 24px;

    li {
      display: flex;
      justify-content: space-between;
      font-size: 12px;
      line-height: 20px;
      font-weight: 500;

      span {
        color: ${({ theme }) => theme.colors.lightDark};
        font-weight: 400;
      }
    }
  }

  p {
    color: ${({ theme }) => theme.colors.lightDark};
    font-weight: 400;
    font-size: 12px;
    line-height: 20px;
  }
`;
