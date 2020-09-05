import React from 'react';
import { Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

import Route from './Route';
import history from './history';

const Routes: React.FC = () => (
  <ConnectedRouter history={history}>
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/signup" exact component={SignUp} />
    </Switch>
  </ConnectedRouter>
);

export default Routes;
