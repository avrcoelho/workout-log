import { runSaga } from 'redux-saga';
import MockAdapter from 'axios-mock-adapter';
import { toast } from 'react-toastify';

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

  it('should fail when api returns error with status 409', async () => {
    const toastSpy = jest.spyOn(toast, 'error').mockImplementation();

    apiMock.onPost('users').reply(409);

    await runSaga({ dispatch }, signUp, {
      payload: userData,
    }).toPromise();

    expect(dispatch).toHaveBeenCalledWith(loadFailure());
    expect(toastSpy).toHaveBeenCalledWith('E-mail já cadastrado');
  });

  it('should fail when api returns error', async () => {
    const toastSpy = jest.spyOn(toast, 'error').mockImplementation();

    apiMock.onPost('users').reply(500);

    await runSaga({ dispatch }, signUp, {
      payload: userData,
    }).toPromise();

    expect(dispatch).toHaveBeenCalledWith(loadFailure());
    expect(toastSpy).toHaveBeenCalledWith('Erro ao realizar cadastro');
  });
});
