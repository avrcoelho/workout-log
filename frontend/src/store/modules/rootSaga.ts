import { SagaIterator } from 'redux-saga';
import { all, takeLatest } from 'redux-saga/effects';

import { signIn } from './signIn/sagas';
import { SignInTypes } from './signIn/types';

import { signUp } from './signUp/sagas';
import { SignUpTypes } from './signUp/types';

export default function* rootSaga(): SagaIterator {
  return yield all([
    takeLatest(SignInTypes.LOAD_REQUEST, signIn),
    takeLatest(SignUpTypes.LOAD_REQUEST, signUp),
  ]);
}
