import reducer, { INITIAL_STATE } from '..';
import * as ActivitiesActions from '../actions';

describe('Activities reducer', () => {
  it('DEFAULT', () => {
    const action = {
      type: undefined,
    };
    const state = reducer(undefined, action);

    expect(state).toStrictEqual(INITIAL_STATE);
  });

  it('LOAD_REQUEST', () => {
    const state = reducer(INITIAL_STATE, ActivitiesActions.loadRequest());

    expect(state).toStrictEqual({ ...INITIAL_STATE, loading: true });
  });

  it('LOAD_SUCCESS', () => {
    const state = reducer(INITIAL_STATE, ActivitiesActions.loadSuccess());

    expect(state).toStrictEqual({
      ...INITIAL_STATE,
      loading: false,
    });
  });

  it('LOAD_FAILURE', () => {
    const state = reducer(INITIAL_STATE, ActivitiesActions.loadFailure());

    expect(state).toStrictEqual({
      ...INITIAL_STATE,
      loading: false,
    });
  });
});
