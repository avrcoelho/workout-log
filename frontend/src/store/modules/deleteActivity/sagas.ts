import { SagaIterator } from 'redux-saga';
import { call, put, select } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '../../../services/api';
import { loadSuccess, loadFailure } from './actions';
import { remove } from '../activities/actions';
import { SignIn } from '../signIn/types';
import { ApplicationState } from '../../';

export function* insertActivity({ payload: { id } }: any): SagaIterator {
  try {
    const { token }: SignIn = yield select(
      (state: ApplicationState) => state.signIn.data,
    );

    api.defaults.headers.authorization = `Bearer ${token}`;

    const { data } = yield call(api.delete, `activities/${id}`);

    toast.success('Atividade excluída');

    yield put(loadSuccess());
    yield put(remove(id));
  } catch (err) {
    toast.error('Erro ao inserir excluir a atividade');

    yield put(loadFailure());
  }
}
