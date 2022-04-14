import React from 'react';
import BaseContainer from '../../components/Layout/BaseContainer';

import * as S from './styles';

function Home() {
  return (
    <BaseContainer>
      <S.Banner src="https://source.unsplash.com/random" alt="ninja" />
      <S.Section>
        <h1>Title</h1>
      </S.Section>
    </BaseContainer>
  );
}

export default Home;
