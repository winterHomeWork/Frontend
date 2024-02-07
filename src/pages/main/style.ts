import styled from "styled-components";

export const MainHeader = styled.div`
  width: 100%;
  height: 110px;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  border-radius: 0 0 16px 16px;
  background: #519727;
  position: fixed;
`;

export const MainLayout = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
export const LogoImg = styled.img`
  padding: 5% 0 0 5%;
  width: 20%;
  display: flex;
`;

export const SearchBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-self: center;
`;

export const Search = styled.img`
  position: absolute;
  width: 4%;
  top: 65px;
  right: 35px;
`;
export const Input = styled.input`
  width: 90%;
  height: 35%;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-self: center;
  margin: 2% 0 2% 0;
`;

export const Main = styled.div`
  color: #000;
  font-family: Pretendard;
  padding: 3% 0 3% 3%;
  font-size: 16px;
  font-weight: 600;
  padding-top: 130px;
`;

export const MainPost = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 5%;
  margin: 2% 0 0 4%;
  height: 100%;
  overflow-x: hidden;
`;

export const Post = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const PostImg = styled.img`
  border-radius: 8px;
  width: 80%;
  margin: 5%;
`;

export const PostTitle = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin: 2% 0 0 5%;
`;

export const Tag = styled.p`
  color: #ff5c00;
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 1.28px;
  margin: 2% 0 0 5%;
`;

export const Title = styled.p`
  color: #000;
  font-family: Pretendard;
  font-size: 14px;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 1.12px;
  margin: 2% 0 0 2%;
`;

export const Price = styled.p`
  color: #000;
  width: 95%;
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 1.2px;
  margin: 1% 0 0 10%;
`;
