import styled from "styled-components";

const Table = () => {
  const data = [
    { name: "탄수화물", kcal: "g", minus: "-" },
    { name: "식이섬유", kcal: "g", minus: "-" },
    { name: "당류", kcal: "g", minus: "-" },
    { name: "단백질", kcal: "g", minus: "-" },
    { name: "지방", kcal: "g", minus: "-" },
    { name: "포화지방", kcal: "g", minus: "-" },
    { name: "트랜스지방", kcal: "g", minus: "-" },
    { name: "콜레스테롤", kcal: "g", minus: "-" },
    { name: "나트륨", kcal: "mg", minus: "-" },
    { name: "칼슘", kcal: "mg", minus: "-" },
    { name: "철", kcal: "mg", minus: "-" },
  ];
  return (
    <>
      <TableBox>
        <thead>
          <tr>
            <Th>열량</Th>
            <Th>0 kcal</Th>
            <Th>-</Th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <Td>{item.name}</Td>
              <Td>{item.kcal}</Td>
              <Td>{item.minus}</Td>
            </tr>
          ))}
        </tbody>
      </TableBox>
    </>
  );
};

export default Table;

const TableBox = styled.table`
  padding: 2.5%;
  width: 100%;
  margin-top: 5%;
`;

const Th = styled.th`
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

const Td = styled.td`
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
