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
`;
