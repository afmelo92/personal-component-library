import React from 'react';

import * as S from './styles';

function Layout({ children }) {
  return (
    <S.Container>
      {children}
    </S.Container>
  );
}

export default Layout;
