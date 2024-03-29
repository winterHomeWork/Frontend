import styled from "styled-components";

export const FilterLayout = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: solid;
  margin-bottom: 5%;
`;

export const FilterHeader = styled.div`
  display: flex;
  align-items: center;
  margin: 8% 0 5% 0;
`;

export const BackImg = styled.img`
  display: flex;
  position: absolute;
  right: 90%;
`;

export const Title = styled.p`
  display: flex;
  color: #000;
  font-family: Pretendard;
  font-size: 25px;
  font-weight: 400;
`;

export const Filter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8%;
`;

export const FilterBox = styled.label`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 10%;
  border-bottom: 1px #e9e9e9 solid;
`;

export const Text = styled.p`
  display: flex;
  justify-content: center;
  color: #000;
  font-family: Pretendard;
  font-size: 20px;
  font-weight: 400;
  margin: 0 0 5% 2%;
`;

export const PopularInput = styled.input`
  width: 2em;
  height: 2em;
  margin-bottom: 5%;
`;

export const CheapInput = styled.input`
  width: 2em;
  height: 2em;
  margin-bottom: 5%;
`;

export const ExpenInput = styled.input`
  width: 2em;
  height: 2em;
  margin-bottom: 5%;
`;

export const TanInput = styled.input`
  width: 2em;
  height: 2em;
  margin-bottom: 5%;
`;

export const JibangInput = styled.input`
  width: 2em;
  height: 2em;
  margin-bottom: 5%;
`;

export const SugarInput = styled.input`
  width: 2em;
  height: 2em;
  margin-bottom: 5%;
`;

export const Calorie = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CalorieText = styled.p`
  color: #000;
  font-family: Pretendard;
  font-size: 24px;
  font-weight: 400;
  padding-left: 5%;
`;

export const CalorieBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5%;
`;

export const CalorieInput = styled.input`
  display: flex;
  align-items: center;
  border-radius: 7px;
  border: 1px solid #000;
  width: 10em;
  height: 3em;
  margin: 4%;
  padding-left: 12.5%;
`;

export const CalorieGraph = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 5%;
`;

export const GraphText = styled.p`
  color: #000;
  font-family: Pretendard;
  font-size: 20px;
  font-weight: 400;
  margin-top: 5%;
`;

export const Slide = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
export const FilterPriceSlide = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 4px;
  width: 80%;
  border-radius: 10px;
  background-color: black;
`;

export const FilterPriceRangeWrap = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FilterPriceRangeMin = styled.input`
  position: absolute;
  top: -8px;
  height: 7px;
  width: 85%;
  -webkit-appearance: none;
  background: none;
  pointer-events: none;

  &::-webkit-slider-thumb {
    pointer-events: auto;
    margin-top: 4%;
    height: 30px;
    width: 30px;
    border-radius: 50%;
    border: 2px solid #b0b0b0;
    background-color: white;
    -webkit-appearance: none;
  }
`;

export const FilterPriceRangeMax = styled(FilterPriceRangeMin)``;
