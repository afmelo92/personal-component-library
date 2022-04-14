import React from 'react';

import * as S from './styles';

function CardOne() {
  return (
    <S.Container>
      <S.Info>
        <h1>R$ 399,90</h1>
        <h3>Product One</h3>
        <ul>
          <li>
            Reason 1
          </li>
          <li>Reason 2</li>
          <li>Reason 3</li>
          <li>Reason 4</li>
        </ul>
      </S.Info>
      <button type="button">Comprar</button>
    </S.Container>
  );
}

export default CardOne;
