import * as S from "./style";
import nudia from "assets/nudia.svg";
import jsonData from "./data.json";
import search from "assets/search.svg";
import food from "assets/tomato.jpg";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function Main() {
  const data = jsonData;
  const navigate = useNavigate();
  const [accessToken, setAccessToken] = useState("")
  const [refreshToken, setRefreshToken] = useState("")

  useEffect(() => {
    const kakaoGet = async () => {
      const baseUrl = 'https://prod-server.xquare.app/nudia/kakao';
      const code = localStorage.getItem("code")
      try {
        const response = await axios.post(baseUrl, {
          headers: {
            'Content-Type': 'application/json',
          },
          code
        });
        setAccessToken(response.data.access_token)
        setRefreshToken(response.data.refresh_token)
      } catch (error) {
        console.error(error);
      }
    }
    kakaoGet()
    },[])

    if (accessToken && refreshToken) {
      localStorage.setItem("access",accessToken)
      localStorage.setItem("refresh",refreshToken)
    }

  return (
    <>
      <S.MainHeader>
        <S.MainLayout>
          <S.LogoImg src={nudia}></S.LogoImg>
          <S.SearchBox>
            <S.Input onClick={() => navigate(`/search`)} />
            <S.Search src={search} />
          </S.SearchBox>
        </S.MainLayout>
      </S.MainHeader>
      <S.Main>추천 상품</S.Main>
      <S.MainPost>
        {data.map((item,index) => {
          return (
            <S.Post key={index}>
              <S.PostImg src={food} />
              <S.PostTitle>
                <S.Tag>{item.tag}</S.Tag>
                <S.Title>|{item.name}</S.Title>
              </S.PostTitle>
              <S.Price>{item.price}</S.Price>
            </S.Post>
          );
        })}
      </S.MainPost>
    </>
  );
}
export default Main;
