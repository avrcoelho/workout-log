import { runSaga } from 'redux-saga';
import MockAdapter from 'axios-mock-adapter';

import api from '../../../../services/api';

import { loadSuccess, loadFailure } from '../actions';
import { signIn } from '../sagas';

const apiMock = new MockAdapter(api);

describe('SignIn Saga', () => {
  const dispatch = jest.fn();

  it('should be able to fetch SignIn', async () => {
    const userData = {
      token: 'token',
      fullname: 'John Doe',
    };

    apiMock.onPost('auth/login').reply(200, userData);

    await runSaga({ dispatch }, signIn, {
      payload: { email: 'john@doe.com', passowrd: '123456' },
    }).toPromise();

    expect(dispatch).toHaveBeenCalledWith(loadSuccess(userData));
  });

  it('should fail when api returns error', async () => {
    apiMock.onPost('auth/login').reply(500);

    await runSaga({ dispatch }, signIn, {
      payload: { email: 'john@doe.com', passowrd: '123456' },
    }).toPromise();

    expect(dispatch).toHaveBeenCalledWith(loadFailure());
  });
});
