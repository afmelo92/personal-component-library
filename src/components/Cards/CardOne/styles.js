import styled, { css, keyframes } from 'styled-components';

const gradientAnimation = keyframes`
  50% {
    background-position: 100% 50%;
  }
`;

export const Container = styled.div`
  ${({ theme }) => css`
    position: relative;
    background: ${theme.colors.background};
    padding: 16px;
    border-radius: 4px;
    height: 500px;
    width: 300px;
    display: flex;
    flex-direction: column;
    gap: 8px;

    button {
      padding: 12px;
      background: ${theme.colors.primary.main};
      border: none;
      border-radius: 4px;
      color: ${theme.colors.font};
      font-weight: bold;
      font-size: 1rem;
      cursor: pointer;
      transition: 0.3s ease;

      :hover {
        background: ${theme.colors.primary.dark};
      }
    }

    :before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: calc(100% + 8px);
      height: calc(100% + 8px);
      transform: translate(-4px, -4px);
      background: linear-gradient(
        60deg,
        #5ff281, #5f86f2, #a65ff2,
        #f25fd0, #f25f61, #f2cb5f
      ) 0 50%;
      background-size: 300% 300%;
      animation: ${gradientAnimation} 2.5s alternate infinite;
      border-radius: 4px;
      z-index: -1;
    }
  `}
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  flex: 1;
  gap: 48px;

  h1, h3 {
    text-align: center;
  }

  h1 {
    border: 2px solid white;
    padding: 8px 16px;
    border-radius: 4px;
    margin: 0px 32px;
  }

  ul {
    list-style: none;

    li {
      padding: 8px 32px;
      position: relative;

      :before {
        content: '';
        width: 4px;
        height: 4px;
        background: white;
        position: absolute;
        left: 16px;
        top: 50%;
        transform: translate(-50% , -50%);
      }
    }
  }
`;
