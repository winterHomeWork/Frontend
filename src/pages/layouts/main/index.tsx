import * as S from "./style";
import nudia from "assets/nudia.svg";
import jsonData from "./data.json";
import search from "assets/search.svg";
function Main() {
  const data = jsonData;

  return (
    <>
      <S.MainHeader>
        <S.MainLayout>
          <S.LogoImg src={nudia}></S.LogoImg>
          <S.SearchBox>
            <S.Input />
            <S.Search src={search} />
          </S.SearchBox>
        </S.MainLayout>
      </S.MainHeader>
      <S.Main>추천 상품</S.Main>
      <S.MainPost>
        {data.map((item) => {
          return (
            <S.Post>
              <S.PostImg src={item.image} />
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
