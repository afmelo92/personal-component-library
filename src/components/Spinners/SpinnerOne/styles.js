import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  0% {
    transform: scale(1) rotate(360deg);
  }
  50% {
    transform: scale(0.8) rotate(-360deg);
  }
  100% {
    transform: scale(1) rotate(360deg);
  }
`;

export const Container = styled.div`
  width: 240px;
  height: 240px;
`;

export const Loader = styled.div`
  width: 100%;
  height: 100%;
  border: 18px solid #1a1a1a;
  border-top-color: #4bc8eb;
  border-bottom-color: #f13a8f;
  border-radius: 50%;
  animation: ${rotate} 5s linear infinite;

  div {
    width: inherit;
    height: inherit;
    border: inherit;
    border-radius: inherit;
    border-top-color: #36f372;
    border-bottom-color: #fff;
    animation: ${rotate} 2.8s linear infinite;
  }
`;
