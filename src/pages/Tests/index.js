import React from 'react';
import BaseContainer from '../../components/Layout/BaseContainer';

// import CardOne from '../../components/Cards/CardOne';
import SpinnerOne from '../../components/Spinners/SpinnerOne';

import * as S from './styles';

function Tests() {
  return (
    <BaseContainer>
      <S.Container>
        {/* <CardOne /> */}
        <SpinnerOne />
      </S.Container>
    </BaseContainer>
  );
}

export default Tests;
