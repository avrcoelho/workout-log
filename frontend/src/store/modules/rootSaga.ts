import { SagaIterator } from 'redux-saga';
import { all, takeLatest } from 'redux-saga/effects';

import { signIn } from './signIn/sagas';
import { SignInTypes } from './signIn/types';

import { signUp } from './signUp/sagas';
import { SignUpTypes } from './signUp/types';

import { activities } from './activities/sagas';
import { ActivitiesTypes } from './activities/types';

import { insertActivity } from './insertActivity/sagas';
import { InsertActivityTypes } from './insertActivity/types';

import { deleteActivity } from './deleteActivity/sagas';
import { DeleteActivityTypes } from './deleteActivity/types';

export default function* rootSaga(): SagaIterator {
  return yield all([
    takeLatest(SignInTypes.LOAD_REQUEST, signIn),
    takeLatest(SignUpTypes.LOAD_REQUEST, signUp),
    takeLatest(ActivitiesTypes.LOAD_REQUEST, activities),
    takeLatest(InsertActivityTypes.LOAD_REQUEST, insertActivity),
    takeLatest(DeleteActivityTypes.LOAD_REQUEST, deleteActivity),
  ]);
}
