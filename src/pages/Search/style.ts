import styled from "styled-components";
import Search from "assets/Search.svg"

export const Display = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #E3E3E3;
`
export const TopBox = styled.div`
  width: 100%;
  height: 189px;
  background-color: #ffffff;
  padding: 28px 26px 28px 18px;
  display: flex;
  flex-direction: column;
  gap: 28px;
`
export const MidGap = styled.div`
  width: 100%;
  height: 20px;
  background-color: #E3E3E3;
`
export const BottomBox = styled.div`
  width: 100%;
  height: auto;
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
export const RecentLayout = styled.div`
  width: 100%;
  height: auto;
  padding-left: 6px;
  display: flex;
  flex-direction: column;
  gap: 13px;
`
export const TextLayout = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
`
export const RecentText = styled.h1`
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 500;
  display: flex;
  flex-direction: column;
  gap: 13px;
`
export const DeleteAll = styled.h1`
  color: rgba(0, 0, 0, 0.48);
  font-family: Pretendard;
  font-size: 12px;
  font-weight: 500;
`
export const RecentBoxLayout = styled.div`
  width: 100%;
  height: auto;
`
export const RecentBox = styled.div`
  width: 100px;
  height: 32px;
  border-radius: 16px;
  background: rgba(81, 151, 39, 0.32);
  padding-left: 14px;
  padding-right: 8px;
  display: flex;
  align-items: center;
  gap: 5px;
  font-family: Pretendard;
  font-size: 14px;
  font-weight: 500;
`
export const DeleteRecent = styled.img`
  width: 24px;
  height: 24px;
`
