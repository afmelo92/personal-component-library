import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    border-radius: 4px;
    cursor: pointer;
    color: ${theme.colors.font};
    background: ${theme.colors.primary.main};
    font-weight: 500;
    font-size: 1rem;
    transition: background 0.3s ease;

    button {
      cursor: inherit;
      border: none;
      border-radius: inherit;
      background: inherit;
      color: inherit;
      width: inherit;
      padding: 16px 24px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: inherit;
      font-weight: inherit;
      transition: inherit;
    }

    :hover {

      button {
        background: ${theme.colors.primary.dark};
      }
    }
  `}
`;
