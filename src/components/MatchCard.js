import React from 'react';
import styled from 'styled-components';
import teamLogo from '../img/illustrations_role.png'

const Card = styled.div`
  margin: 10px;
  border-radius: 4px;
`;

const CardWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  padding-left: 32px;
  padding-right: 32px;
  background: #0B0E12;
  color: white;
  position: relative;
`;

const Team = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex: 1;
`;

const HomeTeam = styled(Team)`
  justify-content: flex-start;
`;

const AwayTeam = styled(Team)`
  justify-content: flex-end;
`;

const Logo = styled.div`
  width: 48px;
  height: 48px;
  background-image: url(${teamLogo});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

const TeamName = styled.span`
  font-family: 'Inter';
  font-size: 20px;
  font-weight: 600;
`;

const ScoreContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 20px;
`;

const Score = styled.div`
  font-family: 'Inter';
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 4px;
`;

const StatusBox = styled.div`
  width: 92px;
  height: 27px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  font-family: 'Inter';
  font-size: 12px;
  font-weight: 600;
  background-color: ${props => ({
    Scheduled: '#EB6402',
    Ongoing: '#43AD28',
    Finished: '#EB0237'
  }[props.status])};
  color: white;
`;

const MatchCard = React.memo(({ match }) => {
  return (
    <Card>
      <CardWrapper>
        <HomeTeam>
          <Logo />
          <TeamName>{match.awayTeam.name}</TeamName>
        </HomeTeam>

        <ScoreContainer>
          <Score>{match.awayScore} : {match.homeScore}</Score>
          <StatusBox status={match.status}>{match.status}</StatusBox>
        </ScoreContainer>

        <AwayTeam>
          <TeamName>{match.homeTeam.name}</TeamName>
          <Logo />
        </AwayTeam>
      </CardWrapper>
    </Card>
  );
});

export default MatchCard;