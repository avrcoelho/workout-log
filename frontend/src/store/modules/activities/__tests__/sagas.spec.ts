import { runSaga } from 'redux-saga';
import MockAdapter from 'axios-mock-adapter';

import api from '../../../../services/api';

import { loadSuccess, loadFailure } from '../actions';
import { logout } from '../../signIn/actions';
import { activities } from '../sagas';
import { Activity } from '../types';

const apiMock = new MockAdapter(api);

describe('Activities Saga', () => {
  const dispatch = jest.fn();

  const data: Activity[] = [
    {
      id: '124',
      user_id: '123',
      type: 'run',
      time: '03:00',
      date: new Date().toISOString(),
    },
    {
      id: '123',
      user_id: '124',
      type: 'bike',
      time: '03:00',
      date: new Date().toISOString(),
    },
  ];

  const getState = () => ({ signIn: { data: { token: 'e792b5ae9c131400' } } });

  it('should be able to fetch Activities', async () => {
    apiMock.onGet('activities').reply(200, data);

    await runSaga({ getState, dispatch }, activities).toPromise();

    expect(dispatch).toHaveBeenCalledWith(loadSuccess(data));
  });

  it('should fail when api returns error with status 500', async () => {
    apiMock.onGet('activities').reply(500);

    await runSaga({ getState, dispatch }, activities).toPromise();

    expect(dispatch).toHaveBeenCalledWith(loadFailure());
  });

  it('should fail when api returns unauthorized', async () => {
    apiMock.onGet('activities').reply(401);

    await runSaga({ getState, dispatch }, activities).toPromise();

    expect(dispatch).toHaveBeenCalledWith(logout());
  });
});
