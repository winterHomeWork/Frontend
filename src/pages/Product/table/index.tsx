import * as S from "./style";

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
      <S.TableBox>
        <thead>
          <tr>
            <S.Th>열량</S.Th>
            <S.Th>0 kcal</S.Th>
            <S.Th>-</S.Th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <S.Td>{item.name}</S.Td>
              <S.Td>{item.kcal}</S.Td>
              <S.Td>{item.minus}</S.Td>
            </tr>
          ))}
        </tbody>
      </S.TableBox>
    </>
  );
};

export default Table;
