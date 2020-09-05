import reducer, { INITIAL_STATE } from '..';
import * as ActivitiesActions from '../actions';
import { Activity } from '../types';

describe('Activities reducer', () => {
  const activities: Activity[] = [
    {
      id: '123',
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
    const state = reducer(
      INITIAL_STATE,
      ActivitiesActions.loadSuccess(activities),
    );

    expect(state).toStrictEqual({
      ...INITIAL_STATE,
      data: activities,
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

  it('INSERT', () => {
    const state = reducer(
      INITIAL_STATE,
      ActivitiesActions.insert(activities[0]),
    );

    expect(state).toStrictEqual({
      ...INITIAL_STATE,
      data: [activities[0], ...INITIAL_STATE.data],
      loading: false,
    });
  });

  it('REMOVE', () => {
    const state = reducer(
      INITIAL_STATE,
      ActivitiesActions.insert(activities[0]),
    );

    const newState = reducer(state, ActivitiesActions.remove(activities[0].id));

    expect(newState).toStrictEqual({
      ...newState,
      data: [],
      loading: false,
    });
  });
});
