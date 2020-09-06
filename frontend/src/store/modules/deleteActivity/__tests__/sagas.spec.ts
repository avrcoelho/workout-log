import { runSaga } from 'redux-saga';
import MockAdapter from 'axios-mock-adapter';

import api from '../../../../services/api';

import { loadSuccess, loadFailure } from '../actions';
import { insertActivity } from '../sagas';

const apiMock = new MockAdapter(api);

describe('Delete activity Saga', () => {
  const dispatch = jest.fn();

  const getState = () => ({ signIn: { data: { token: 'e792b5ae9c131400' } } });

  it('should be able to fetch Delete activity', async () => {
    apiMock.onDelete('activities/123').reply(200);

    await runSaga({ getState, dispatch }, insertActivity, {
      payload: { id: '123' },
    }).toPromise();

    expect(dispatch).toHaveBeenCalledWith(loadSuccess());
  });

  it('should fail when api returns error with status 500', async () => {
    apiMock.onDelete('activities/123').reply(500);

    await runSaga({ getState, dispatch }, insertActivity, {
      payload: { id: '123' },
    }).toPromise();

    expect(dispatch).toHaveBeenCalledWith(loadFailure());
  });
});
