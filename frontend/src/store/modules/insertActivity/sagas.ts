import { SagaIterator } from 'redux-saga';
import { call, put, select } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '../../../services/api';
import { loadSuccess, loadFailure } from './actions';
import { insert } from '../activities/actions';
import { SignIn } from '../signIn/types';
import { ApplicationState } from '../../';

export function* insertActivity({
  payload: { activityData },
}: any): SagaIterator {
  try {
    const { token }: SignIn = yield select(
      (state: ApplicationState) => state.signIn.data,
    );

    api.defaults.headers.authorization = `Bearer ${token}`;

    const { data } = yield call(api.post, 'activities', activityData);

    toast.success('Atividade adIcionada');

    yield put(loadSuccess());
    yield put(insert(data));
  } catch (err) {
    toast.error('Erro ao adicionar a atividade');

    yield put(loadFailure());
  }
}
