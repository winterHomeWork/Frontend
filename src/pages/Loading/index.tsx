import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './style';
import GreenLogo from 'assets/GreenLogo.svg'

const Loading = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/login")
    },1500)
  },[])

  return (
    <S.Display>
      <S.Logo src={GreenLogo} />
    </S.Display>
  );
};

export default Loading;