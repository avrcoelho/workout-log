import { Reducer } from 'redux';
import { InsertActivityState, InsertActivityTypes } from './types';

export const INITIAL_STATE: InsertActivityState = {
  loading: false,
};

const reducer: Reducer<InsertActivityState> = (
  state = INITIAL_STATE,
  action,
) => {
  switch (action.type) {
    case InsertActivityTypes.LOAD_REQUEST:
      return { ...state, loading: true };
    case InsertActivityTypes.LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case InsertActivityTypes.LOAD_FAILURE:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export default reducer;
