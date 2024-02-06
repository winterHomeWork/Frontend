import styled from "styled-components";

export const Display = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #519727;
`

export const BottomBox = styled.div`
  width: 100%;
  height: 77%;
  border-radius: 88px 0px 0px 0px;
  background: #FFF;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  position: absolute;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Logo = styled.img`
  position: absolute;
  left: 50%;
  top: 15%;
  transform: translate(-37%,-70%);
`

export const Title = styled.h1`
  color: #000;
  font-family: Pretendard;
  font-size: 36px;
  font-weight: 400;
  margin-top: 54px;
`

export const KakaoLayout = styled.button`
  width: 80%;
  height: auto;
  border-radius: 8px;
  background: #FEE500;
  padding: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgba(0, 0, 0, 0.85);
  font-family: Pretendard;
  font-size: 17px;
  font-weight: 400;
  position: relative;
  margin-top: 10em;
  border: none;
`

export const Talk = styled.img`
  width: 21px;
  height: 19.555px;
  position: absolute;
  left: 5%;
`