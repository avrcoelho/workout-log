import React from 'react';
import {
  RouteProps as ReactDOMRouterProps,
  Route as ReactDOMRoute,
  Redirect,
} from 'react-router-dom';
import { useSelector } from 'react-redux';

import { SignInState } from '../store/modules/signIn/types';
import { ApplicationState } from '../store';

interface RouteProps extends ReactDOMRouterProps {
  isPrivate?: boolean;
  component: React.ComponentType;
}

const Route: React.FC<RouteProps> = ({
  isPrivate = false,
  component: Component,
  ...rest
}) => {
  const { data } = useSelector<ApplicationState, SignInState>(
    state => state.signIn,
  );

  return (
    <ReactDOMRoute
      {...rest}
      render={({ location }) => {
        return isPrivate === !!data ? (
          <Component />
        ) : (
          <Redirect
            to={{
              pathname: isPrivate ? '/' : '/activities',
              state: { from: location },
            }}
          />
        );
      }}
    />
  );
};

export default Route;
