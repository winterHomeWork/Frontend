import React from 'react';
import * as S from 'pages/Login/style'
import whiteLogo from 'assets/WhiteLogo.svg'
import talk from 'assets/talk.svg'

const Login = () => {
  return (
    <S.Display>
      <S.Logo src={whiteLogo} />
      <S.BottomBox>
        <S.Title>Login</S.Title>
        <S.KakaoLayout>
          <S.Talk src={talk} />
          카카오 로그인
        </S.KakaoLayout>
      </S.BottomBox>
    </S.Display>
  );
};

export default Login;