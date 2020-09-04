import { SagaIterator } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '../../../services/api';
import { loadSuccess, loadFailure } from './actions';

export function* signUp({ payload: { userData } }: any): SagaIterator {
  try {
    yield call(api.post, 'users', userData);

    yield put(loadSuccess());
  } catch (err) {
    toast.error('Erro ao realizar cadastro');

    yield put(loadFailure());
  }
}
