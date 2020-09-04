import reducer, { INITIAL_STATE } from '..';
import * as SignInActions from '../actions';

describe('SignIn reducer', () => {
  const userData = {
    token: 'token',
    fullname: 'John Doe',
  };

  it('DEFAULT', () => {
    const action = {
      type: undefined,
    };
    const state = reducer(undefined, action);

    expect(state).toStrictEqual(INITIAL_STATE);
  });

  it('LOAD_REQUEST', () => {
    const state = reducer(
      INITIAL_STATE,
      SignInActions.loadRequest({ email: 'john@doe.com', passowrd: '123456' }),
    );

    expect(state).toStrictEqual({ ...INITIAL_STATE, loading: true });
  });

  it('LOAD_SUCCESS', () => {
    const state = reducer(INITIAL_STATE, SignInActions.loadSuccess(userData));

    expect(state).toStrictEqual({
      ...INITIAL_STATE,
      loading: false,
      data: userData,
    });
  });

  it('LOAD_FAILURE', () => {
    const state = reducer(INITIAL_STATE, SignInActions.loadFailure());

    expect(state).toStrictEqual({
      ...INITIAL_STATE,
      loading: false,
    });
  });

  it('LOGOUT', () => {
    const state = reducer(INITIAL_STATE, SignInActions.logout());

    expect(state).toStrictEqual({
      ...INITIAL_STATE,
      loading: false,
      data: null,
    });
  });
});
