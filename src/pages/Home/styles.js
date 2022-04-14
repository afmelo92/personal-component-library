import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  height: 100%;
  min-height: 100vh;
  display: flex;
`;

export const Banner = styled.img`
  max-width: 50%;
  height: 100vh;
  min-height: 100vh;
  object-fit: cover;

  @media(max-width: 960px) {
    display: none;
  }
`;

export const Section = styled.div`
  border: 1px solid white;
  width: 50%;
  height: 100vh;

  @media(max-width: 960px) {
    width: 100%;
  }
`;
