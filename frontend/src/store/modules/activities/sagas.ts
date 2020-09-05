import { SagaIterator } from 'redux-saga';
import { call, put, select } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '../../../services/api';
import { loadSuccess, loadFailure } from './actions';
import { SignIn } from '../signIn/types';
import { ApplicationState } from '../..';

export function* activities(): SagaIterator {
  try {
    const { token }: SignIn = yield select(
      (state: ApplicationState) => state.signIn,
    );

    api.defaults.headers.authorization = `Bearer ${token}`;

    const { data } = yield call(api.get, 'activities');

    yield put(loadSuccess(data));
  } catch (err) {
    toast.error('Erro ao obter as atividades');

    yield put(loadFailure());
  }
}
