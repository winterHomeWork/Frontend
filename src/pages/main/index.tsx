import * as S from "./style";
import nudia from "assets/nudia.svg";
import jsonData from "./data.json";
import search from "assets/search.svg";
import food from "assets/tomato.jpg";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

function Main() {
  const data = jsonData;
  const navigate = useNavigate();

  useEffect(() => {
    const kakaoGet = async () => {
      const baseUrl = 'https://prod-server.xquare.app/nudia/kakao/save';
      const code = localStorage.getItem("code")
      console.log(code)
      try {
        const response = await axios.get(baseUrl, { 
          params: { access_token: code },
          headers: {
            "Content-Type": `application/json`,
          },
        });
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    kakaoGet()
    },[])

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
