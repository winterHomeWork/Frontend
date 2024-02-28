import * as S from "./style";
import React, { useState, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import back from "assets/back.svg";

let fixedMin = 0;
let fixedMax = 4000;
const gap = 10;

const Filter = () => {
  const navigate = useNavigate();
  const [selectedFilter, setSelectedFilter] = useState<string | null>(null);

  const selectFilter = (filter: string) => {
    if (selectedFilter === filter) {
      setSelectedFilter(null);
    } else {
      setSelectedFilter(filter);
    }
  };

  const [rangeMinValue, setRangeMinValue] = useState(fixedMin);
  const [rangeMaxValue, setRangeMaxValue] = useState(fixedMax);

  const rangeMinValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setRangeMinValue(parseInt(e.target.value));
  };

  const rangeMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setRangeMaxValue(parseInt(e.target.value));
  };

  return (
    <>
      <S.FilterLayout>
        <S.FilterHeader>
          <S.BackImg src={back} onClick={() => navigate(`/Main`)} />
          <S.Title>필터</S.Title>
        </S.FilterHeader>
      </S.FilterLayout>
      <S.Filter>
        <S.FilterBox>
          <S.PopularInput
            type="radio"
            name="filter"
            checked={selectedFilter === "popular"}
            onChange={() => selectFilter("popular")}
          />
          <S.Text>인기순</S.Text>
        </S.FilterBox>
        <S.FilterBox>
          <S.CheapInput
            type="radio"
            name="filter"
            checked={selectedFilter === "cheap"}
            onChange={() => selectFilter("cheap")}
          />
          <S.Text>저가순</S.Text>
        </S.FilterBox>
        <S.FilterBox>
          <S.ExpenInput
            type="radio"
            name="filter"
            checked={selectedFilter === "expen"}
            onChange={() => selectFilter("expen")}
          />
          <S.Text>고가순</S.Text>
        </S.FilterBox>
        <S.FilterBox>
          <S.TanInput
            type="radio"
            name="filter"
            checked={selectedFilter === "tan"}
            onChange={() => selectFilter("tan")}
          />
          <S.Text>탄수화물 함유량 순</S.Text>
        </S.FilterBox>
        <S.FilterBox>
          <S.JibangInput
            type="radio"
            name="filter"
            checked={selectedFilter === "jibang"}
            onChange={() => selectFilter("jibang")}
          />
          <S.Text>지방 함유량 순</S.Text>
        </S.FilterBox>
        <S.FilterBox>
          <S.SugarInput
            type="radio"
            name="filter"
            checked={selectedFilter === "sugar"}
            onChange={() => selectFilter("sugar")}
          />
          <S.Text>당류 낮은 순</S.Text>
        </S.FilterBox>
      </S.Filter>
      <S.Calorie>
        <S.CalorieText>칼로리</S.CalorieText>
        <S.CalorieBox>
          <S.CalorieInput
            type="number"
            placeholder="kcal"
            value={rangeMinValue}
            onChange={rangeMinValueHandler}
          />
          -
          <S.CalorieInput
            type="number"
            placeholder="kcal"
            value={rangeMaxValue}
            onChange={rangeMaxValueHandler}
          />
        </S.CalorieBox>
        <S.CalorieGraph>
          <S.GraphText>그래프</S.GraphText>
        </S.CalorieGraph>
      </S.Calorie>
      <S.FilterPriceRangeWrap>
        <S.FilterPriceSlide />
        <S.FilterPriceRangeMin
          type="range"
          min={fixedMin}
          max={fixedMax - gap}
          step="50"
          value={rangeMinValue}
          onChange={(e) => {
            rangeMinValueHandler(e);
          }}
        />
        <S.FilterPriceRangeMax
          type="range"
          min={fixedMin + gap}
          max={fixedMax}
          step="50"
          value={rangeMaxValue}
          onChange={(e) => {
            rangeMaxValueHandler(e);
          }}
        />
      </S.FilterPriceRangeWrap>
    </>
  );
};

export default Filter;
