import { runSaga } from 'redux-saga';
import MockAdapter from 'axios-mock-adapter';

import api from '../../../../services/api';

import { loadSuccess, loadFailure } from '../actions';
import { insertActivity } from '../sagas';
import { Activity } from '../../activities/types';

const apiMock = new MockAdapter(api);

describe('Activities Saga', () => {
  const dispatch = jest.fn();

  const activity: Activity = {
    id: '123',
    user_id: '123',
    type: 'run',
    time: '03:00',
    date: new Date().toISOString(),
  };

  const getState = () => ({ signIn: { token: 'e792b5ae9c131400' } });

  it('should be able to fetch Activities', async () => {
    apiMock.onPost('activities').reply(200, activity);

    await runSaga({ getState, dispatch }, insertActivity, {
      payload: { activityData: activity },
    }).toPromise();

    expect(dispatch).toHaveBeenCalledWith(loadSuccess());
  });

  it('should fail when api returns error with status 500', async () => {
    apiMock.onPost('activities').reply(500);

    await runSaga({ getState, dispatch }, insertActivity, {
      payload: { activityData: activity },
    }).toPromise();

    expect(dispatch).toHaveBeenCalledWith(loadFailure());
  });
});
