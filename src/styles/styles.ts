import styled from 'styled-components';

export const Main = styled.main`
  width: 100%;
  height: 100vh;

  background-image: url('./images/background-mobile.jpg');
  background-repeat: no-repeat;
  background-size: cover;

  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (min-width: 481px) {
    background-image: url('./images/background-desktop.jpg');
  }
`;

export const Container = styled.section`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 16px;
`;

export const CompanyTitle = styled.div`
  color: #ffffff;
  font-weight: 300;
  font-size: 28px;

  display: flex;
  align-items: center;
  margin-bottom: 48px;

  span {
    display: block;
    margin-left: 16px;
  }
`;

export const Form = styled.form`
  width: 100%;
  max-width: 480px;

  button {
    width: 85px;
    height: 36px;
    font-weight: 400;
    font-size: 16px;
    color: ${({ theme }) => theme.colors.primary};
    border: 0;
    border-radius: 44px;
    background: #ffffff;
    margin-left: 12px;

    cursor: pointer;
  }
`;

export const FormGroup = styled.div`
  width: 100%;
  height: 60px;
  border-radius: 4px;
  padding: 16px;
  margin-bottom: 16px;

  background: rgba(0, 0, 0, 0.32);
  backdrop-filter: blur(2px);
  color: #ffffff;

  display: flex;
  justify-content: space-between;
  align-items: center;

  input {
    border: 0;
    background: transparent;
    color: #ffffff;
    font-size: 16px;
    margin-top: 4px;
  }

  label {
    display: flex;
    flex-direction: column;
    flex: 1;

    span {
      opacity: 50%;
      font-size: 12px;
    }
  }
`;

export const PopUpError = styled.div`
  width: 100%;
  color: white;
  background: rgba(255, 255, 255, 0.4);
  border-radius: 4px;
  padding: 16px;
  position: relative;
  font-weight: 700;

  &:after {
    bottom: 100%;
    left: 24px;
    border: solid transparent;
    content: '';
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
    border-bottom-color: rgba(255, 255, 255, 0.4);
    border-width: 8px;
    margin-left: -8px;
  }
`;
