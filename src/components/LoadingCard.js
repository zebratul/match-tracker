import React from 'react';
import styled from 'styled-components';
import { Spinner } from './Spinner';

const CardSkeleton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 87px;
  border-radius: 8px;
  margin: 8px;
  background: #0B0E12;
`;

export function LoadingCard() {
  return (
    <CardSkeleton>
      <Spinner />
    </CardSkeleton>
  );
}