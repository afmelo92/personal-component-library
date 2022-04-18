import styled, { css } from 'styled-components';

export const Container = styled.div`
  /* border: 1px solid yellow; */
  height: 100vh;
  display: grid;
  grid-template-areas: "panel messages";
  grid-template-columns: 60% 40%;
  padding: 16px;

  @media(max-width: 960px) {
    grid-template-areas:
      "panel"
      "messages";
    grid-template-columns: 1fr;
    grid-template-rows: 60% 40%;
    overflow: auto;
  }
`;

export const Panel = styled.div`
  display: grid;
  grid-area: "panel";
  grid-template-areas:
    "main"
    "options";
  grid-template-rows: 70% 30%;
`;

export const Main = styled.div`
  grid-area: "main";
  /* background: red; */
`;

export const Options = styled.div`
  grid-area: "options";
  /* background: yellow; */
`;

export const Messages = styled.div`
  /* background: blue; */
  grid-area: "messages";
  display: flex;
  flex-direction: column;
  grid-gap: 8px;
`;

export const MessageItem = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.gray[400]};
    border-radius: 4px;
    min-height: 120px;
  `}
`;
