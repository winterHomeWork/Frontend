import * as S from "./style";
import { useNavigate } from "react-router-dom";
import back from "assets/back.svg";

const Filter = () => {
  return (
    <>
      <S.FilterLayout>
        <S.FilterHeader>
          <S.BackImg src={back} />
          <S.Title>필터</S.Title>
        </S.FilterHeader>
      </S.FilterLayout>
      <S.Filter>
        <S.FilterBox>
          <S.PopularInput type="radio" />
          <S.Text>인기순</S.Text>
        </S.FilterBox>
        <S.FilterBox>
          <S.CheapInput type="radio" />
          <S.Text>저가순</S.Text>
        </S.FilterBox>
        <S.FilterBox>
          <S.ExpenInput type="radio" />
          <S.Text>고가순</S.Text>
        </S.FilterBox>
        <S.FilterBox>
          <S.TanInput type="radio" />
          <S.Text>탄수화물 함유량 순</S.Text>
        </S.FilterBox>
        <S.FilterBox>
          <S.JibangInput type="radio" />
          <S.Text>지방 함유량 순</S.Text>
        </S.FilterBox>
        <S.FilterBox>
          <S.SugarInput type="radio" />
          <S.Text>당류 낮은 순</S.Text>
        </S.FilterBox>
      </S.Filter>
    </>
  );
};

export default Filter;
