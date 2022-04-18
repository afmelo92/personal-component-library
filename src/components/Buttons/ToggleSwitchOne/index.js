import React, { useState } from 'react';

import * as S from './styles';

function ToggleSwitchOne() {
  const [toggle, setToggle] = useState(false);

  return (
    <S.Container
      onClick={() => setToggle((prev) => !prev)}
      dark={toggle}
      aria-label={`switch to ${toggle ? 'dark' : 'light'} theme`}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="current" height="current" viewBox="0 0 472.39 472.39">
        <g className="toggle-sun">
          <path d="M403.21,167V69.18H305.38L236.2,0,167,69.18H69.18V167L0,236.2l69.18,69.18v97.83H167l69.18,69.18,69.18-69.18h97.83V305.38l69.18-69.18Zm-167,198.17a129,129,0,1,1,129-129A129,129,0,0,1,236.2,365.19Z" />
        </g>
        <g className="toggle-circle">
          <circle className="cls-1" cx="236.2" cy="236.2" r="103.78" />
        </g>
      </svg>
    </S.Container>
  );
}

export default ToggleSwitchOne;
