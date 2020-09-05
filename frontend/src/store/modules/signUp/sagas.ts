import { SagaIterator } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { push } from 'connected-react-router';

import api from '../../../services/api';
import { loadSuccess, loadFailure } from './actions';

export function* signUp({ payload: { userData } }: any): SagaIterator {
  try {
    yield call(api.post, 'users', userData);

    toast.success('Conta criada com sucesso');

    yield put(loadSuccess());

    yield put(push('/'));
  } catch (err) {
    toast.error(
      err.response.status === 409
        ? 'E-mail já cadastrado'
        : 'Erro ao realizar cadastro',
    );

    yield put(loadFailure());
  }
}
