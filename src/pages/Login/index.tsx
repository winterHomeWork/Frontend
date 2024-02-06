import React from 'react';
import * as S from 'pages/Login/style'
import whiteLogo from 'assets/WhiteLogo.svg'
import talk from 'assets/talk.svg'

const Login = () => {

    const Rest_api_key = "9518b1b3124468b73a6625b1c62623c0"
    const redirect_uri = "http://localhost:3000/kakao/callback"
    const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${Rest_api_key}&redirect_uri=${redirect_uri}&response_type=code`

    const handleLogin = ()=>{
      window.location.href = kakaoURL
  }

  return (
    <S.Display>
      <S.Logo src={whiteLogo} />
      <S.BottomBox>
        <S.Title>Login</S.Title>
        <S.KakaoLayout onClick={handleLogin}>
          <S.Talk src={talk} />
          카카오 로그인
        </S.KakaoLayout>
      </S.BottomBox>
    </S.Display>
  );
};

export default Login;