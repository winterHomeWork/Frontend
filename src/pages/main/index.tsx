import * as S from "./style";
import nudia from "assets/nudia.svg";
import jsonData from "./data.json";
import search from "assets/search.svg";
import food from "assets/tomato.jpg";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import customAxios from "lib/customAxios";

function Main() {
  const data = jsonData;
  const navigate = useNavigate();

  // useEffect(() => {
  //   (async () => {
  //     const { data } = await customAxios.get("/user");
  //     console.log(data);
  //   })();
  // }, []);

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
        {data.map((item, index) => {
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
