import React from 'react';
import CardOne from '../../components/Cards/CardOne';
import BaseContainer from '../../components/Layout/BaseContainer';

import * as S from './styles';

function Tests() {
  return (
    <BaseContainer>
      <S.Container>
        <CardOne />
      </S.Container>
    </BaseContainer>
  );
}

export default Tests;
