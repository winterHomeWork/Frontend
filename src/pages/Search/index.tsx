import React from 'react';
import * as S from 'pages/Search/style'
import backToMenu from 'assets/BackToMenu.svg'
import deleteRecent from 'assets/DeleteRecent.svg'
import { useNavigate } from 'react-router-dom';

const Search = () => {
  const navigate = useNavigate()
  return (
    <S.Display>
      <S.TopBox>
        <S.InputLayout>
          <S.BackToMenu onClick={() => navigate("/main")} src={backToMenu} />
          <S.Input />
        </S.InputLayout>
        <S.RecentLayout>
          <S.TextLayout>
            <S.RecentText>최근 검색어</S.RecentText>
            <S.DeleteAll>전체 삭제</S.DeleteAll>
          </S.TextLayout>
          <S.RecentBoxLayout>
            <S.RecentBox>
              음식이름
              <S.DeleteRecent src={deleteRecent} />
            </S.RecentBox>
          </S.RecentBoxLayout>
        </S.RecentLayout>
      </S.TopBox>
      <S.MidGap>

      </S.MidGap>
      <S.BottomBox>
        
      </S.BottomBox>
    </S.Display>
  );
};

export default Search;