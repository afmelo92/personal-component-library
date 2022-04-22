/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import * as S from './styles';

function Button({
  type = 'button',
  children,
  ...rest
}) {
  return (
    <S.Container>
      <button
        type={type}
        {...rest}
      >
        {children}
      </button>
    </S.Container>
  );
}

export default Button;
