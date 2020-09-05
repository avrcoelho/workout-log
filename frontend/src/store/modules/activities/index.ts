import { Reducer } from 'redux';
import { ActivitiesState, ActivitiesTypes } from './types';

export const INITIAL_STATE: ActivitiesState = {
  data: [],
  loading: false,
};

const reducer: Reducer<ActivitiesState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActivitiesTypes.LOAD_REQUEST:
      return { ...state, loading: true };
    case ActivitiesTypes.LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload.activities,
      };
    case ActivitiesTypes.LOAD_FAILURE:
      return {
        ...state,
        loading: false,
      };
    case ActivitiesTypes.INSERT:
      return {
        ...state,
        data: [action.payload.activity, ...state.data],
      };
    default:
      return state;
  }
};

export default reducer;
