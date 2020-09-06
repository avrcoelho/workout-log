import React, { useCallback } from 'react';
import { FaPowerOff } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';

import * as SignInActions from '../../../store/modules/signIn/actions';
import { SignInState } from '../../../store/modules/signIn/types';
import { ApplicationState } from '../../../store';

import { Container, ButtonLogout } from './styles';

const UserInfo: React.FC = () => {
  const dispatch = useDispatch();

  const { data } = useSelector<ApplicationState, SignInState>(
    state => state.signIn,
  );

  const handleLogout = useCallback(() => {
    dispatch(SignInActions.logout());
  }, [dispatch]);

  return (
    <Container>
      <span>{data?.fullname}</span>
      <ButtonLogout onClick={handleLogout} title="Sair">
        <FaPowerOff size={16} color="#c53030" />
      </ButtonLogout>
    </Container>
  );
};

export default UserInfo;
