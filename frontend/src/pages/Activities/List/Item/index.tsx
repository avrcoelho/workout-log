import React from 'react';

import { Container, Column } from './styles';

interface Props {
  id: string;
  type: string;
  time: string;
  date: string;
}

const Item: React.FC<Props> = ({ id, time, type, date }) => {
  return (
    <Container>
      <Column>{type}</Column>
      <Column>{time}</Column>
      <Column>{date}</Column>
    </Container>
  );
};

export default Item;
