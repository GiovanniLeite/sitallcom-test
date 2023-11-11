import { createGlobalStyle, css } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  ${({ theme }) => css`
    * {
      margin: 0;
      padding: 0;
      outline: none;
      box-sizing: border-box;
    }

    html {
      font-size: 62.5%;
    }

    body {
      font-family: sans-serif;
      font-size: ${theme.font.sizes.small};

      a {
        text-decoration: none;
      }
    }
  `}
`;
