import { SagaIterator } from 'redux-saga';
import { all, takeLatest } from 'redux-saga/effects';

import { signIn } from './signIn/sagas';
import { SignInTypes } from './signIn/types';

export default function* rootSaga(): SagaIterator {
  return yield all([takeLatest(SignInTypes.LOAD_REQUEST, signIn)]);
}
