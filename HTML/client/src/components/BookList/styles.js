import styled, { css } from 'styled-components';

export const Container = styled.section`
  ${({ theme }) => css`
    max-width: 600px;
    margin: ${theme.spacings.large} auto;

    ul {
      list-style: none;
      border: 1px solid #000;
      border-bottom: none;

      li {
        display: grid;
        grid-template-columns: 3fr 1fr 1fr 1fr;
        gap: 10px;
        align-items: center;
        border-bottom: 1px solid #000;
        padding: 0.1rem;

        &.header {
          background-color: ${theme.colors.primary};

          p {
            font-weight: bold;
          }
        }

        button {
          cursor: pointer;
          border: none;
          background-color: #fff;
          margin-right: ${theme.spacings.extraSmall};
          font-weight: bold;

          &:first-child {
            color: red;
          }
        }
      }
    }
  `}
`;
