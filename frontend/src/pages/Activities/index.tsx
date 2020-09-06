import React from 'react';

import InsertActivity from './InsertActivity';
import List from './List';

import { Container } from './styles';

const Activities: React.FC = () => {
  return (
    <Container>
      <InsertActivity />
      <List />
    </Container>
  );
};

export default Activities;
