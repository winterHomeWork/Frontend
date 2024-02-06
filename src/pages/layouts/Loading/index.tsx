import React from 'react';
import * as S from './style';
import GreenLogo from '../../../assets/GreenLogo.svg'

const Loading = () => {
  return (
    <S.Display>
      <S.Logo src={GreenLogo} />
    </S.Display>
  );
};

export default Loading;