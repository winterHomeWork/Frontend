import * as S from "./style";
import back from "assets/back.svg";
import { useNavigate } from "react-router-dom";
import food from "assets/tomato.jpg";

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
        </S.MiddleBox>
      </S.Container>
    </>
  );
};

export default Product;
