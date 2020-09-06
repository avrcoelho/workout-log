import React from 'react';

import UserInfo from './UserInfo';
import InsertActivity from './InsertActivity';
import List from './List';

import { Container } from './styles';

const Activities: React.FC = () => {
  return (
    <Container>
      <h1>Workout Log</h1>
      <UserInfo />
      <InsertActivity />
      <List />
    </Container>
  );
};

export default Activities;
