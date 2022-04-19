/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import * as S from './styles';

function ButtonOne({ children, ...rest }) {
  return (
    <S.Container {...rest}>
      {children}
    </S.Container>
  );
}

export default ButtonOne;
