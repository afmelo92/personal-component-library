import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  height: 100%;
  min-height: 100vh;
  display: flex;
`;

export const Banner = styled.img`
  max-width: 50%;
  object-fit: cover;

  @media(max-width: 960px) {
    display: none;
  }
`;

export const Section = styled.div`
  border: 1px solid white;
  width: 50%;
  padding: 16px;

  @media(max-width: 960px) {
    width: 100%;
  }
`;
