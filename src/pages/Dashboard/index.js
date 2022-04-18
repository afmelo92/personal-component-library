import React from 'react';
import BaseContainer from '../../components/Layout/BaseContainer';

import * as S from './styles';

function Dashboard() {
  return (
    <BaseContainer>
      <S.Container>
        <S.Panel>
          <S.Main>
            <h1>main</h1>
          </S.Main>
          <S.Options>
            <h1>options</h1>
          </S.Options>
        </S.Panel>
        <S.Messages>
          <h1>messages</h1>

          <S.MessageItem>
            message 1
          </S.MessageItem>
          <S.MessageItem>
            message 1
          </S.MessageItem>
          <S.MessageItem>
            message 1
          </S.MessageItem>
          <S.MessageItem>
            message 1
          </S.MessageItem>
          <S.MessageItem>
            message 1
          </S.MessageItem>
          <S.MessageItem>
            message 1
          </S.MessageItem>

        </S.Messages>
      </S.Container>
    </BaseContainer>
  );
}

export default Dashboard;
