import React from 'react';
import BaseContainer from '../../components/Layout/BaseContainer';

import * as S from './styles';

function Home() {
  return (
    <BaseContainer>
      <S.Container>
        <S.Banner>
          <img src="https://source.unsplash.com/random" alt="ninja" />
        </S.Banner>
        <S.Section>
          <h1>Title</h1>
        </S.Section>
      </S.Container>
    </BaseContainer>
  );
}

export default Home;
