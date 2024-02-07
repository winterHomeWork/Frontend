import styled from "styled-components";
import Search from "assets/Search.svg"

export const Display = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #E3E3E3;
`
export const TopBox = styled.div`
  width: 100%;
  height: 21%;
  background-color: #ffffff;
  padding: 28px 26px 28px 18px;
`
export const MidGap = styled.div`
  width: 100%;
  height: 20px;
  background-color: #E3E3E3;
`
export const BottomBox = styled.div`
  width: 100%;
  height: 100%;
  background-color: #ffffff;
`
export const InputLayout = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  gap: 15px;
`
export const BackToMenu = styled.img`
  width: 12px;
  height: 18px;
  stroke-width: 2px;
`
export const Input = styled.input`
  width: 100%;
  height: 40px;
  border-radius: 8px;
  background: #E3E3E3;
  border: none;
  background-image: url(${Search});
  background-repeat: no-repeat;
  background-size: 20px 23.182px;
  background-position-x: 96%;
  background-position-y: center;
`