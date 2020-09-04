import reducer, { INITIAL_STATE } from '..';
import * as SignUpActions from '../actions';

describe('SignUp reducer', () => {
  const userData = {
    fullname: 'John Doe',
    email: 'john@doe.com',
    passowrd: '123456',
  };

  it('DEFAULT', () => {
    const action = {
      type: undefined,
    };
    const state = reducer(undefined, action);

    expect(state).toStrictEqual(INITIAL_STATE);
  });

  it('LOAD_REQUEST', () => {
    const state = reducer(INITIAL_STATE, SignUpActions.loadRequest(userData));

    expect(state).toStrictEqual({ ...INITIAL_STATE, loading: true });
  });

  it('LOAD_SUCCESS', () => {
    const state = reducer(INITIAL_STATE, SignUpActions.loadSuccess());

    expect(state).toStrictEqual({
      ...INITIAL_STATE,
      loading: false,
    });
  });

  it('LOAD_FAILURE', () => {
    const state = reducer(INITIAL_STATE, SignUpActions.loadFailure());

    expect(state).toStrictEqual({
      ...INITIAL_STATE,
      loading: false,
    });
  });
});
