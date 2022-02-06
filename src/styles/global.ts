import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
  }

  body {
		width: 100%;
    background: ${(props) => props.theme.colors.light};
    background-image: url('./images/background-dashboard.jpg');
		background-repeat: no-repeat;
		background-size: cover;

    color: ${({ theme }) => theme.colors.dark};

    font: 400 16px 'Heebo', sans-serif;
		width: 100%;
		height: 100vh;
  }
`;
