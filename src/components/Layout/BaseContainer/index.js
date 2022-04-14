import React from 'react';

import * as S from './styles';

function BaseContainer({ children }) {
  return (
    <S.Container>
      {children}
    </S.Container>
  );
}

export default BaseContainer;
