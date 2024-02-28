import styled from "styled-components";

export const TableBox = styled.table`
  padding: 2.5%;
  width: 100%;
  margin-top: 5%;
`;

export const Th = styled.th`
  color: #ff5c00;
  font-family: Pretendard;
  font-size: 16px;
  letter-spacing: 1.28px;
  padding: 8px;

  border-bottom: 1px solid #aaa;
  border-right: 1px solid #aaa;
  &:last-child {
    border-right: none;
  }
`;

export const Td = styled.td`
  padding: 3%;
  color: #000;
  font-family: Pretendard;
  font-size: 16px;
  letter-spacing: 1.28px;

  border-bottom: 1px solid #aaa;
  border-right: 1px solid #aaa;
  &:last-child {
    border-right: none;
  }
`;
