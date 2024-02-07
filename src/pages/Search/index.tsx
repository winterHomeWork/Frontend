import React from 'react';
import * as S from 'pages/Search/style'
import backToMenu from 'assets/BackToMenu.svg'

const Search = () => {
  return (
    <S.Display>
      <S.TopBox>
        <S.InputLayout>
          <S.BackToMenu src={backToMenu} />
          <S.Input />
        </S.InputLayout>
      </S.TopBox>
      <S.MidGap>

      </S.MidGap>
      <S.BottomBox>

      </S.BottomBox>
    </S.Display>
  );
};

export default Search;