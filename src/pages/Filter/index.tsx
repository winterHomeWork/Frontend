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
          <S.PopularInput type="radio" name="popular" />
          <S.Text>인기순</S.Text>
        </S.FilterBox>
        <S.FilterBox>
          <S.CheapInput type="radio" name="cheap" />
          <S.Text>저가순</S.Text>
        </S.FilterBox>
        <S.FilterBox>
          <S.ExpenInput type="radio" name="expen" />
          <S.Text>고가순</S.Text>
        </S.FilterBox>
        <S.FilterBox>
          <S.TanInput type="radio" name="tan" />
          <S.Text>탄수화물 함유량 순</S.Text>
        </S.FilterBox>
        <S.FilterBox>
          <S.JibangInput type="radio" name="jibang" />
          <S.Text>지방 함유량 순</S.Text>
        </S.FilterBox>
        <S.FilterBox>
          <S.SugarInput type="radio" name="sugar" />
          <S.Text>당류 낮은 순</S.Text>
        </S.FilterBox>
      </S.Filter>
      <S.Calorie>
        <S.CalorieText>칼로리</S.CalorieText>
        <S.CalorieBox>
          <S.CalorieInput type="number" placeholder="kcal" />-
          <S.CalorieInput type="number" placeholder="kcal" />
        </S.CalorieBox>
        <S.CalorieGraph></S.CalorieGraph>
      </S.Calorie>
    </>
  );
};

export default Filter;
