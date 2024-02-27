import * as S from "./style";
import back from "assets/back.svg";
import { useNavigate } from "react-router-dom";
import food from "assets/tomato.jpg";
import Table from "./table";

const Product = () => {
  const navigate = useNavigate();
  return (
    <>
      <S.BackImg src={back} onClick={() => navigate(`/Main`)} />
      <S.Container>
        <S.Header>
          <S.Img src={food} />
          <S.TitleBox>
            <S.Tag>Best</S.Tag>
            <S.Title>
              <span>|</span> 제품명
            </S.Title>
          </S.TitleBox>
          <S.Price>0,000,000 원</S.Price>
        </S.Header>
        <S.Box />
        <S.MiddleBox>
          <S.Info>영양성분</S.Info>
          <S.InfoBox>
            <S.Intro>n회 제공량 n개(0g)</S.Intro>
            <S.Intro>총 n회 제공량(0g)</S.Intro>
          </S.InfoBox>
        </S.MiddleBox>
        <Table />
      </S.Container>
    </>
  );
};

export default Product;
