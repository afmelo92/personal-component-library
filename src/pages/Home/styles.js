import styled from 'styled-components';

export const Container = styled.div`
  border: 1px solid red;
  height: 100vh;
  display: grid;
  grid-template-areas: "banner form";
  grid-template-columns: 50% 50%;

  @media(max-width: 960px) {
    grid-template-columns: 0 auto;
  }
`;

export const Banner = styled.div`
  border: 1px solid yellow;
  overflow: hidden;
  display: flex;
`;

export const Section = styled.div`
  padding: 16px;
`;
