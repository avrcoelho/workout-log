import { Reducer } from 'redux';
import { DeleteActivityState, DeleteActivityTypes } from './types';

export const INITIAL_STATE: DeleteActivityState = {
  id: null,
  loading: false,
};

const reducer: Reducer<DeleteActivityState> = (
  state = INITIAL_STATE,
  action,
) => {
  switch (action.type) {
    case DeleteActivityTypes.LOAD_REQUEST:
      return { ...state, loading: true, id: action.payload.id };
    case DeleteActivityTypes.LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        id: null,
      };
    case DeleteActivityTypes.LOAD_FAILURE:
      return {
        ...state,
        loading: false,
        id: null,
      };
    default:
      return state;
  }
};

export default reducer;
