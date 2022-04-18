import React from 'react';
import ToggleSwitchOne from '../../components/Buttons/ToggleSwitchOne';
import BaseContainer from '../../components/Layout/BaseContainer';

// import CardOne from '../../components/Cards/CardOne';
// import SpinnerOne from '../../components/Spinners/SpinnerOne';
// import ButtonOne from '../../components/Buttons/ButtonOne';

import * as S from './styles';

function Tests() {
  return (
    <BaseContainer>
      <S.Container>
        <ToggleSwitchOne />
        {/* <CardOne /> */}
        {/* <SpinnerOne /> */}
        {/* <ButtonOne>Clique aqui</ButtonOne> */}
      </S.Container>
    </BaseContainer>
  );
}

export default Tests;
