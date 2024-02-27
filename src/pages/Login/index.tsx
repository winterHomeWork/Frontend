import * as S from "pages/Login/style";
import whiteLogo from "assets/WhiteLogo.svg";
import talk from "assets/talk.svg";
import axios from "axios";
import { useEffect } from "react";

const Login = () => {
  let kakaoURL = "";

  useEffect(() => {
    const getKakaoURL = async () => {
      const { data } = await axios.get(
        "https://prod-server.xquare.app/nudia/kakao",
      );
      console.log(data);
      kakaoURL = data;
    };
    getKakaoURL();
  }, []);

  const handleLogin = () => {
    window.location.href = kakaoURL;
  };

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
