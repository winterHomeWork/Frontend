import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const BackImg = styled.img`
  margin-top: 7%;
  display: flex;
  position: absolute;
  right: 90%;
`;

export const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: column;
`;

export const Img = styled.img`
  width: 350px;
  height: 300px;
  margin-top: 15%;
`;

export const TitleBox = styled.div`
  display: flex;
  align-items: start;
  justify-content: center;
  margin-top: 8%;
`;
export const Tag = styled.p`
  display: flex;
  align-self: start;
  color: #ff5c00;
  font-family: Pretendard;
  font-size: 16px;
  letter-spacing: 1.12px;
`;

export const Title = styled.p`
  display: flex;
  align-items: center;
  color: #000;
  font-family: Pretendard;
  font-size: 16px;
  letter-spacing: 1.12px;
`;

export const Price = styled.p`
  margin-top: 2%;
  color: #000;
  font-family: Pretendard;
  font-size: 24px;
  letter-spacing: 1.92px;
`;

export const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 5%;
`;
export const Intro = styled.p`
  color: rgba(0, 0, 0, 0.6);
  font-family: Pretendard;
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 0.8px;
  display: flex;
`;

export const Box = styled.div`
  width: 428px;
  height: 20px;
  flex-shrink: 0;
  background: #e3e3e3;
  margin-top: 10%;
`;

export const MiddleBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 5%;
`;

export const Info = styled.p`
  display: flex;
  font-family: Pretendard;
  color: #000;
  margin-left: 5%;
  font-size: 24px;
  letter-spacing: 1.92px;
`;
