import { SagaIterator } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '../../../services/api';
import { loadSuccess, loadFailure } from './actions';

export function* signIn({ payload: { userData } }: any): SagaIterator {
  try {
    const { data } = yield call(api.post, 'auth/login', userData);

    yield put(loadSuccess(data));
  } catch (err) {
    toast.error(err.response.message);

    yield put(loadFailure());
  }
}
