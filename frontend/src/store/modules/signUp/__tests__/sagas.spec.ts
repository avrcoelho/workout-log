import { runSaga } from 'redux-saga';
import MockAdapter from 'axios-mock-adapter';

import api from '../../../../services/api';

import { loadSuccess, loadFailure } from '../actions';
import { signUp } from '../sagas';

const apiMock = new MockAdapter(api);

describe('SignUp Saga', () => {
  const dispatch = jest.fn();

  const userData = {
    fullname: 'John Doe',
    email: 'john@doe.com',
    passowrd: '123456',
  };

  it('should be able to fetch SignUp', async () => {
    const userData = {
      token: 'token',
      fullname: 'John Doe',
    };

    apiMock.onPost('users').reply(200, userData);

    await runSaga({ dispatch }, signUp, {
      payload: userData,
    }).toPromise();

    expect(dispatch).toHaveBeenCalledWith(loadSuccess());
  });

  it('should fail when api returns error', async () => {
    apiMock.onPost('users').reply(500);

    await runSaga({ dispatch }, signUp, {
      payload: userData,
    }).toPromise();

    expect(dispatch).toHaveBeenCalledWith(loadFailure());
  });
});
