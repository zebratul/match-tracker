import React from 'react';
import styled from 'styled-components';
import { MatchesProvider } from './context/MatchesContext';
import Header from './components/Header';
import MatchesList from './components/MatchesList';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: #06080C;
`;

const MainContent = styled.main`
  flex: 1;
  position: relative;
`;

function App() {
  return (
    <MatchesProvider>
      <AppContainer>
        <Header />
        <MainContent>
          <MatchesList />
        </MainContent>
      </AppContainer>
    </MatchesProvider>
  );
}

export default App;