import styled, { css, keyframes } from 'styled-components';

const pulseToLight = keyframes`
  0% {
    transform: scale(0);
    opacity: .5;
  }
  10% {
    transform: scale(1);
  }
  75% {
    transform: opacity: 1;
  }
  100% {
    opacity: 0;
    transform: scale(1);
  }
`;
const pulseToDark = keyframes`
  0% {
    transform: scale(0);
    opacity: .5;
  }
  10% {
    transform: scale(1);
  }
  75% {
    transform: opacity: 1;
  }
  100% {
    opacity: 0;
    transform: scale(1);
  }
`;

const whenDark = css`
  ${({ theme }) => `
    svg {
      fill: ${theme.colors.background};
      stroke-width: 8px;

      .toggle-sun {
        path {
          transform: rotate(0.5turn);
        }
      }

      circle {
        transform: translateX(-15%);
      }
    }
  `}

  :before {
    animation: ${pulseToLight} 1s cubic-bezier(0.23, 1, 0.32, 1);
  }
`;

export const Container = styled.button`
  ${({ theme, dark }) => css`
    background-color: ${theme.colors.gray[200]};
    border: none;
    padding: 2rem;
    border-radius: 50%;
    cursor: pointer;
    opacity: 0.8;
    transition: background-color 0.3s ease;
    position: relative;
    isolation: isolate;

    svg {
      fill: ${theme.colors.font};
      width: 96px;
      height: 96px;

      path {
        transform-origin: center center;
        transition: transform 0.5s cubic-bezier(0.11, 0.14, 0.29, 1.32);
      }

      circle {
        transition: transform 0.3s ease;
      }
    }

    :hover, :focus {
      opacity: 1;
      background-color: hsl(0 0% 50% / 0.7);
    }

    :hover:after, :focus-visible:after {
      opacity: 0.8;
      transform: scale(1);
      transform-origin: top;
      transition: 0.3s ease;
    }

    :after {
      content: attr(aria-label);
      width: max-content;
      padding: 8px;
      border-radius: 4px;
      color: ${theme.colors.font};
      position: absolute;
      left: 0;
      right: 0;
      margin: 0 auto;
      top: 120%;
      background: ${theme.colors.gray[200]};
      font-size: 1rem;
      opacity: 0;
      transform: scale(0);
      transition: transform 0ms linear 100ms, opacity 0.3s ease;
    }

    :before {
      content: '';
      position: absolute;
      inset: 0;
      background: hsl(0, 0%, 89%);
      border-radius: inherit;
      transform: scale(0);
      opacity: 0;
      z-index: -1;
      animation: ${pulseToDark} 1s cubic-bezier(0.23, 1, 0.32, 1);
    }

    ${dark && whenDark};
  `}
`;
