import React from 'react';
import styled from 'styled-components';
import { useMatches } from '../context/MatchesContext';
import pageLogo from '../img/Match_Tracker.png';
import refreshIcon from '../img/Refresh.png';
import errorIcon from '../img/alert-triangle.png';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
  margin-top: 23px;
  background: #06080C;
  position: relative;
`;

const LeftSection = styled.div`
  display: flex;
  align-items: center;
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const ErrorMessage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center; // Add this
  width: 480px;
  height: 56px;
  background: #0F1318;
  border-radius: 4px;
  color: white;
  font-family: 'Inter';
  font-size: 18px;
  font-weight: 500;
  gap: 8px;
  padding: 0 16px;
  text-align: center;
`;

const ErrorIcon = styled.img`
  width: 28px;
  height: 28px;
`;

const Logo = styled.div`
  width: 257px;
  height: 32px;
  background-image: url(${pageLogo});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

const Icon = styled.img`
  width: 26px;
  height: 26px;
  margin-left: 8px;
`;

const RefreshButton = styled.button`
  width: 204px;
  height: 56px;
  background: #EB0237;
  color: white;
  font-family: 'Inter';
  font-size: 18px;
  font-weight: 600;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  &:hover {
    background: #701328;
  }
`;

function Header() {
  const { refresh, error } = useMatches();
  
  return (
    <HeaderContainer>
      <LeftSection>
        <Logo />
      </LeftSection>

      <RightSection>
        {error && (
          <ErrorMessage>
            <ErrorIcon src={errorIcon} alt="Error icon" />
            Ошибка: не удалось загрузить информацию
          </ErrorMessage>
        )}
        <RefreshButton onClick={refresh}>
          Обновить
          <Icon src={refreshIcon} alt="Refresh icon" />
        </RefreshButton>
      </RightSection>
    </HeaderContainer>
  );
}

export default Header;