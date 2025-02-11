import { SagaIterator } from 'redux-saga';
import { call, put, select } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '../../../services/api';
import { loadSuccess, loadFailure } from './actions';
import { SignIn } from '../signIn/types';
import { ApplicationState } from '../..';
import { logout } from '../signIn/actions';

export function* activities(): SagaIterator {
  try {
    const { token }: SignIn = yield select(
      (state: ApplicationState) => state.signIn.data,
    );

    api.defaults.headers.authorization = `Bearer ${token}`;

    const { data } = yield call(api.get, 'activities');

    yield put(loadSuccess(data));
  } catch (err) {
    if (err.response.status === 401) {
      yield put(logout());
    } else {
      toast.error('Erro ao obter as atividades');
      yield put(loadFailure());
    }
  }
}
