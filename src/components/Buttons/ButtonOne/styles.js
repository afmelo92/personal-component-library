import styled, { css } from 'styled-components';

export const Container = styled.button`
  ${({ theme }) => css`
    background: none;
    border: none;
    color: ${theme.colors.font};
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 1rem;
    outline: 2px solid ${theme.colors.font};
    padding: 24px 64px;
    position: relative;
    overflow: hidden;
    transition: color 1s;
    cursor: pointer;

    :hover {
      color: ${theme.colors.primary.main};

      :before {
        width: 150%;
      }
    }

    :before {
      content: '';
      position: absolute;
      top: 0;
      left: -50px;
      width: 0;
      height: 100%;
      background-color: ${theme.colors.font};
      transform: skewX(35deg);
      z-index: -1;
      transition: width 1s;
    }
  `}
`;
