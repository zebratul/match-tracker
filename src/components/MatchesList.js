import React from 'react';
import { FixedSizeList as List } from 'react-window';
import { useMatches } from '../context/MatchesContext';
import MatchCard from './MatchCard';
import styled from 'styled-components';
import { LoadingCard } from './LoadingCard';

const ListContainer = styled.div`
  flex: 1;
  padding: 16px;
  overflow: hidden;
`;

const Row = React.memo(({ data, index, style }) => (
  <div style={style}>
    <MatchCard match={data[index]} />
  </div>
));

function MatchesList() {
  const { matches, loading } = useMatches();

  if (loading) {
    return (
      <ListContainer>
        <LoadingCard />
      </ListContainer>
    );
  }

  return (
    <ListContainer>
      <List
        height={800}
        itemCount={matches.length}
        itemSize={105}
        width="100%"
        itemData={matches}
      >
        {Row}
      </List>
    </ListContainer>
  );
}

export default MatchesList;